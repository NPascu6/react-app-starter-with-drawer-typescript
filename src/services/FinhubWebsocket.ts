const socket = new WebSocket('wss://ws.finnhub.io?token=cd4kk5aad3i6jmnuedq0cd4kk5aad3i6jmnuedqg');

// Unsubscribe
const unsubscribe = function(symbol: string) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}

export { socket, unsubscribe }
