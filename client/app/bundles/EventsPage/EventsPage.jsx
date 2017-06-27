

import React, {Component} from 'react';
import AllUpcomingEvents from './components/AllUpcomingEvents';

import MyUpcomingEventsPageComponent from './components/MyUpcomingEventsPageComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEvents from './components/AddEvents';


export default class EventsPage extends Component {
	render () {
		return (
			<div className="container">
				<h1>Events Page</h1>
				< AllUpcomingEvents />
				{this.props.currentUser.name}
				< MyUpcomingEventsPageComponent />
				< HeaderComponent />
				< AddEvents />
			</div>
		);

	}

}
