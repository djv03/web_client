import React from 'react';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from './Components/Features';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Client from './Components/Client';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Hero/>
			<Features/>
			<Services/>
			<Portfolio/>
			<Client/>
		</React.Fragment>
	);
}

export default App;
