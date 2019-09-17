import * as React from "react";
import { createBrowserHistory } from "history";

import Routes from "../Routes/Routes";

const history = createBrowserHistory();

const App = () => <Routes history={history} />;

export default App;
