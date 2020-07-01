import React from "react";

class Country extends React.Component {
  render() {
    const trip = this.props.location.state;
    return (
      <div>
        <h1>Country: {trip.country}</h1>
        <p>Year: {trip.year}</p>
        <p>Airline: {trip.airline}</p>
        <p>Description: {trip.description}</p>
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}

export default Country;
