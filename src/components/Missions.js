import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="missions">
          <Title headline="Missõess" />
        </div>
        <div className="missions-container">
          { missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))}
        </div>
      </div>
    );
  }
}

Missions.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.required;

export default Missions;
