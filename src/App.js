import React from 'react';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from './Components/Features';
import Portfolio from './Components/Services';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Hero/>
			<Features/>
			<Portfolio/>
		</React.Fragment>
	);
}

export default App;
