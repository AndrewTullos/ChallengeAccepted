import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home";
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Team from './pages/Team.jsx'
// import Dashboard from "./pages/Dashboard.jsx";
// import Community from "./pages/Community.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{
// 				index: true,
// 				element: <Home />,
// 			},
// 			// {
// 			// 	path: "/login",
// 			// 	element: <Login />,
// 			// },
// 			// {
// 			// 	path: "/signup",
// 			// 	element: <Signup />,
// 			// },
// 			// {
// 			// 	path: "/dashboard",
// 			// 	element: <Dashboard />,
// 			// },
// 			// {
// 			// 	path: "/team",
// 			// 	element: <Team />,
// 			// },
// 			// {
// 			// 	path: "/community",
// 			// 	element: <Community />,
// 			// },
// 		],
// 	},
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<RouterProvider router={router} />
// );
