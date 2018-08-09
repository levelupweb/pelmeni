import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop";
import App from "./pages";

const root = document.getElementById("root");

hydrate(
	<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
		<ScrollToTop>
			<App />
		</ScrollToTop>
	</BrowserRouter>,
	root
);
