import React from 'react';
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import Features from './Components/Features';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<Hero/>
			<Features/>
		</React.Fragment>
	);
}

export default App;
