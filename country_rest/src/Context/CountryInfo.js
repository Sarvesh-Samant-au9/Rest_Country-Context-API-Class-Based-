import React, { createContext, Component } from "react";
import axios from "axios";

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    allCountries: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(({ data }) =>
      this.setState({
        allCountries: data,
      })
    );
  }
  render() {
    // console.log(this.state);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
