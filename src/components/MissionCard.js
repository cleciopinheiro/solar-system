import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <h3 data-testid="mission-name">{ name }</h3>
        <hr />
        <ul>
          <li className="year" data-testid="mission-year">{ year }</li>
          <li className="country" data-testid="mission-country">{ country }</li>
          <li
            className="destination"
            data-testid="mission-destination"
          >
            { destination }

          </li>
        </ul>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.required;

export default MissionCard;
