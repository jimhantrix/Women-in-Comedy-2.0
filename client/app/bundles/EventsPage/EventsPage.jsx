import ReactOnRails from 'react-on-rails';

import React, {Component} from 'react';

import EventsPageComponent from './components/EventsPageComponent';

import HeaderComponent from './components/HeaderComponent';

export default class EventsPage extends Component {
	render () {
		return (
			<div>
				<h1>Events Page</h1>
				< EventsPageComponent />
				< HeaderComponent />
			</div>
		);

	}

}
