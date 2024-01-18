import React from "react";
import { data } from "../../platos";
import { infoBar } from "../../dataBar"
import Cards from "../cards/Cards";
import CardsBar from "../cardsBar/CardsBar";
import Footer from "../footer/Footer";


class Servicios extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plato: [],
      bebida: []
    }
  }
  componentDidMount(){
    this.setState({
      plato: data,
      bebida: infoBar
    } )
  }

  render(){
    return (
      <div class="container px-5 py-24 mx-auto">
        <Cards platos={this.state.plato} />
        <CardsBar bebida={this.state.bebida} />
        <Footer />
      </div>
    );
  }
}

export default Servicios;