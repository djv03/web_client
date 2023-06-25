import React from 'react';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from './Components/Features';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Hero/>
			<Features/>
			<Services/>
			<Portfolio/>
		</React.Fragment>
	);
}

export default App;
