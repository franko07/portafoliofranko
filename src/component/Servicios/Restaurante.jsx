import React from "react";
import { data } from "../../platos";

import Cards from "../cards/Cards";
import Footer from "../footer/Footer";

class Restaurante extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plato: [],
      bebida: [],
    };
  }
  componentDidMount() {
    this.setState({
      plato: data,
    });
  }

  render() {
    return (
      <div class="container px-5  mx-auto">
        <Cards platos={this.state.plato} />

        <Footer />
      </div>
    );
  }
}

export default Restaurante;
