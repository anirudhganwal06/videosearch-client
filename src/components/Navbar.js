import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
				  <div class="container">
						<Link class="navbar-brand" to="/search">Videosearch</Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					  <span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					  <div class="navbar-nav px-5">
						<Link class="nav-link px-3" aria-current="page" to="/search">Search Image</Link>
						<Link class="nav-link px-3" aria-current="page" to="/videos">Video Database</Link>
						<Link class="nav-link px-3" aria-current="page" to="/about">About</Link>
					  </div>
					</div>
				  </div>
				</nav>
			</div>
		);
	}	
}

export default Navbar;
