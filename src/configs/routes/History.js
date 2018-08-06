import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mobx-react-router';
import Stores from 'configs/Stores';
import Routing from './Routing';

const browserHistory = createBrowserHistory();
const History = syncHistoryWithStore(browserHistory, Stores.RouterStore);


window.h = History;

export default History;