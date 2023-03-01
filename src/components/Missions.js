import React from 'react';
import PropTypes from 'prop-types';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" />
    );
  }
}

Missions.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.required;

export default Missions;
