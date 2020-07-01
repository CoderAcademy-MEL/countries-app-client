import React from "react";
import { Link } from "react-router-dom";

class Countries extends React.Component {
  state = { countries: [] };

  getCountries = async () => {
    const response = await fetch("http://localhost:3000/trips");
    const data = await response.json();
    this.setState({ countries: data });
  };

  renderCountries = () => {
    return this.state.countries.map((trip, index) => {
      return (
        <div key={index}>
          <h1>Country: {trip.country}</h1>
          <p>Year: {trip.year}</p>
          <p>Airline: {trip.airline}</p>
          <p>Description: {trip.description}</p>
          <Link
            to={{
              pathname: `/countries/${trip.id}`,
              state: trip,
            }}
          >
            <button>Show</button>
          </Link>
          <hr />
        </div>
      );
    });
  };

  componentDidMount() {
    this.getCountries();
  }

  render() {
    return this.renderCountries();
  }
}

export default Countries;
