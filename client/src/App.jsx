// import React from "react";
import "./index.css";

import { Outlet, useNavigate } from "react-router-dom";

import Layout from "@components/Layout";
import StarsCanvas from "@components/StarBackground";
import Nav from "@components/NavBar";
import Hero from "@components/HeroSection";
import Footer from "@components/Footer";

function App() {
	return (
		<div>
			<StarsCanvas />
			<Nav />
			<Hero />
			<Layout>
				<Outlet />
			</Layout>

			<Footer />
		</div>
	);
}

export default App;
