import PropTypes from 'prop-types';
import React from 'react';
import Bio from './Bio.jsx';
import '../assets/stylesheets/events.scss';

export default class Eventing extends React.Component {
  static propTypes = {
    // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { user: this.props.currentUser,  };
  }

  render() {
    return (
      <div className="container">
        <div className="split-left">
          <Bio user={user} />
        </div>
        <div className="split-center">

        </div>
        <div className="split-right">

        </div>
      </div>
    );
  }
}
