import {socket} from "../../services/FinhubWebsocket";
import {setFinhubMessages} from "../appReducer";
import {compareBySymbol} from "../../helpers/helpers";

export const subscribeCryptoTicker = (venue: string, instruments: string[]) => async (dispatch: any, getState: any) => {

    socket.addEventListener('open', function (event) {
        for (let instrument of instruments) {
            socket.send(JSON.stringify({'type': 'subscribe', 'symbol': `${instrument}`}))
        }
    });

    for (let instrument of instruments.slice(0, 20)) {
        socket.send(JSON.stringify({'type': 'subscribe', 'symbol': `${instrument}`}))
    }

    socket.addEventListener('message', function (event) {
            const res = JSON.parse(event.data)
            if (res.type !== 'trade') return
            const messages = getState().app.finhubMessages.slice();

            const venue = res.data[0]?.s?.split(':')[0]
            const symbol = res.data[0].s?.split(':')[1]
            const price = res.data[0].p.toFixed(5)
            const volume = res.data[0].t.toFixed(5)

            let message = {
                price: price,
                symbol: symbol,
                venue: venue,
                volume: volume
            }

            if (!messages.filter((m: any) => m.symbol === message.symbol && m.venue === message.venue)[0]) {
                messages.push(message)
                dispatch(setFinhubMessages(messages.sort(compareBySymbol)))
            } else {
                let filtered = messages.filter((m: any) => m.symbol !== message.symbol && m.venue === message.venue && m.price !== message.price)
                filtered.push(message)
                dispatch(setFinhubMessages(filtered.sort(compareBySymbol)))
            }
        }
    )
}

