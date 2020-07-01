import React from "react";

class CreateCountries extends React.Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trip: this.state }),
    });
    this.props.history.push("/countries");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={this.onInputChange}
          />
          <label htmlFor="year">Year</label>
          <input
            type="text"
            name="year"
            id="year"
            onChange={this.onInputChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="airline">Airline</label>
          <input
            type="text"
            name="airline"
            id="airline"
            onChange={this.onInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateCountries;
