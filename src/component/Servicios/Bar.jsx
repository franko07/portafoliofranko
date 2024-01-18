import React from "react";
import { infoBar } from "../../dataBar";

import CardsBar from "../cardsBar/CardsBar";
import Footer from "../footer/Footer";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plato: [],
      bebida: [],
    };
  }
  componentDidMount() {
    this.setState({
      
      bebida: infoBar,
    });
  }

  render() {
    return (
      <div class="container px-5 mx-auto">
        <CardsBar bebida={this.state.bebida} />
        <Footer />
      </div>
    );
  }
}

export default Bar;
