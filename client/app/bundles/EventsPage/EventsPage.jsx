

import React, {Component} from 'react';

import AllUpcomingEvents from './components/AllUpcomingEvents';
=======

import EventsPageComponent from './components/EventsPageComponent';

import MyUpcomingEventsPageComponent from './components/MyUpcomingEventsPageComponent';


import HeaderComponent from './components/HeaderComponent';



export default class EventsPage extends Component {
	render () {
		return (
			<div>
				<h1>Events Page</h1>

				< AllUpcomingEvents />
				{this.props.currentUser.name}
				

				< EventsPageComponent />

				< MyUpcomingEventsPageComponent />

				< HeaderComponent />


			</div>
		);

	}

}
