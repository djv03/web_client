import React from 'react';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from './Components/Features';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Client from './Components/Client';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Hero/>
			<Features/>
			<Services/>
			<Portfolio/>
			<Client/>
			<Contact/>
			<Footer/>
		</React.Fragment>
	);
}

export default App;
