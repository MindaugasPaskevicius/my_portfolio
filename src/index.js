// import ReactDOM from "react-dom";
// import { HashRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";
// import React from "react";

// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>
);

//reportWebVitals();