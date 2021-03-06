
import React from 'react'
import {Link} from 'react-router'

export var Navigation = React.createClass({
	render: function() {
		return (
			<div className="top-bar ">
			  <div className="top-bar-left">
			    <ul className="dropdown menu" data-dropdown-menu>
			      <li className="menu-text" >Job Tracker</li>

			      <li>
			      	<Link activeClassName="active" to="/dashboard">Dashboard</Link>
			      </li>

			      <li>
			      	<Link activeClassName="active" to="/strategy">Strategy</Link>
			      </li>

			      <li>
			      	<Link activeClassName="active" to="/applications">Applications</Link>
			      </li>

			      <li>
			      	<Link activeClassName="active" to="/network">Network</Link>
			      </li>

			    </ul>
			  </div>
				<div className='top-bar-right'>
					<ul className='menu'>
					      <li><a href="/">Log Out</a></li>
					</ul>
				</div>
			</div>
	)
}
})

export default Navigation
