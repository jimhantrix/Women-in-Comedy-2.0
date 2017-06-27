import React, {Component} from 'react';
import EventsPageComponent from './components/EventsPageComponent';
import MyUpcomingEventsPageComponent from './components/MyUpcomingEventsPageComponent';
export default class EventsPage extends Component {
	render () {
		return (
			<div>
				<h1>Events Page</h1>
				< EventsPageComponent />
				< MyUpcomingEventsPageComponent />
			</div>
		);

	}

}