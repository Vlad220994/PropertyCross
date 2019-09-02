import * as React from 'react';
import { createBrowserHistory } from 'history';

import Routes from '../Routes/Routes';

const App = () => <Routes history={createBrowserHistory()} />

export default App;
