import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				  <div className="container">
						<Link className="navbar-brand" to="/search">Videosearch</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					  <span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					  <div className="navbar-nav px-5">
						<Link className="nav-link px-3" aria-current="page" to="/search">Search Image</Link>
						<Link className="nav-link px-3" aria-current="page" to="/videos">Video Database</Link>
						<Link className="nav-link px-3" aria-current="page" to="/about">About</Link>
					  </div>
					</div>
				  </div>
				</nav>
			</div>
		);
	}	
}

export default Navbar;
