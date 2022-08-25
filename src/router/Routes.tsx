import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import PageLoader from "../components/loading/PageLoader";

const ForbiddenPage = React.lazy(() => import("../windows/errors/403"));
const NotFoundPage = React.lazy(() => import("../windows/errors/404"));
const MainWindow = React.lazy(() => import("../windows/main/MainWindow"));
const MarketDataWindow = React.lazy(() => import("../windows/marketdata/MarketDataWindow"));
const ChartWindow = React.lazy(() => import("../windows/chart/ChartWindow"));
const OtcTradingWindow = React.lazy(() => import("../windows/otc-trading/OtcTradingWindow"));
const PositionsWindow = React.lazy(() => import("../windows/positions/PositionsWindow"));
const SettingsWindow = React.lazy(() => import("../windows/settings/SettingsWindow"));
const TransfersWindow = React.lazy(() => import("../windows/transfers/TransfersWindow"));
const TradesWindow = React.lazy(() => import("../windows/trades/TradesWindow"));
const NewsFeedWindow = React.lazy(() => import("../windows/news-feed/NewsFeedWindow"));
const NewsSettingsWindow = React.lazy(() => import("../windows/news-feed/NewsSettingsWindow"));
const OrdersWindow = React.lazy(() => import("../windows/recent-orders/OrdersWindow"));
const MarketPriceTickerSettingsWindow = React.lazy(() => import("../windows/main/MarketPriceTickerSettingsWindow"));
const FundSelectWindow = React.lazy(() => import("../windows/settings/FundSelectWindow"));
const HelpWindow = React.lazy(() => import("../windows/help/HelpWindow"));
const CommandsWindow = React.lazy(() => import("../windows/main/CommandsWindow"));
const DetailedBalancesWindow = React.lazy(() => import("../windows/positions/DetailedPositionsWindow"));
const CustodyWindow = React.lazy(() => import("../windows/custody/CustodyWindow"));
const DepthChartWindow = React.lazy(() => import("../windows/marketdata/DepthChartWindow"));
const FuturesBaseWindow = React.lazy(() => import("../windows/futures/FuturesBaseWindow"));
const OrderBookLiveTradesWindow = React.lazy(() => import("../windows/marketdata/OrderBookLiveTradesWindow"));
const KeyboardCommandsQuickReference = React.lazy(() => import("../windows/help/KeyboardCommandsQuickReference"));
const ProfileLoaderWindow = React.lazy(() => import("../windows/profileLoader/ProfileLoaderWindow"));
const OtcSelectionWindow = React.lazy(() => import("../windows/otc-trading/OtcSelectionWindow"));
const DMASelectionWindow = React.lazy(() => import("../windows/dma/DMASelectionWindow"));
const OptionsBaseWindow = React.lazy(() => import("../windows/options/OptionsBaseWindow"));
const SpotBaseWindow = React.lazy(() => import("../windows/spot/SpotBaseWindow"));
const TransferCustodyWindow = React.lazy(() => import("../windows/custody/TransfersCustodyWindow"));
const NewsProviderWindow = React.lazy(() => import("../windows/news-feed/NewsProviderWindow"));

export const RoutesSwitch = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                <Route path={'/'} element={<MainWindow/>}/>
                <Route path={'/marketdata'} element={<MarketDataWindow/>}/>
                <Route path={'/otc-selection'} element={<OtcSelectionWindow/>}/>
                <Route path={'/chart'} element={<ChartWindow/>}/>
                <Route path={'/otc-trading'} element={<OtcTradingWindow/>}/>
                <Route path={'/news-feed'} element={<NewsFeedWindow/>}/>
                <Route path={'/positions'} element={<PositionsWindow/>}/>
                <Route path={'/settings'} element={<SettingsWindow/>}/>
                <Route path={'/transfers'} element={<TransfersWindow/>}/>
                <Route path={'/trades'} element={<TradesWindow/>}/>
                <Route path={'/app-loader'} element={<ProfileLoaderWindow/>}/>
                <Route path={'/recent-orders'} element={<OrdersWindow/>}/>
                <Route path={'/news-settings'} element={<NewsSettingsWindow/>}/>
                <Route path={'/stock-ticker-settings'} element={<MarketPriceTickerSettingsWindow/>}/>
                <Route path={'/fund-select-window'} element={<FundSelectWindow/>}/>
                <Route path={'/help-window'} element={<HelpWindow/>}/>
                <Route path={'/action-list-window'} element={<CommandsWindow/>}/>
                <Route path={'/detailed-balances'} element={<DetailedBalancesWindow/>}/>
                <Route path={'/custody-transfers'} element={<CustodyWindow/>}/>
                <Route path={'/custody-transfers-form'} element={<TransferCustodyWindow/>}/>
                <Route path={'/depth-chart'} element={<DepthChartWindow/>}/>
                <Route path={'/futures'} element={<FuturesBaseWindow/>}/>
                <Route path={'/recent-dma-trades'} element={<OrdersWindow/>}/>
                <Route path={'/keyboard-cmd-window'} element={<KeyboardCommandsQuickReference/>}/>
                <Route path={'/orderbook-livetrades-window'} element={<OrderBookLiveTradesWindow/>}/>
                <Route path={'/dma'} element={<DMASelectionWindow/>}/>
                <Route path={'/news-provider-window'} element={<NewsProviderWindow/>}/>
                <Route path={'/options'} element={<OptionsBaseWindow/>}/>
                <Route path={'/spot'} element={<SpotBaseWindow/>}/>
                <Route path="/403" element={<ForbiddenPage/>}/>
                <Route path="/404" element={<ForbiddenPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Suspense>
    );
};

