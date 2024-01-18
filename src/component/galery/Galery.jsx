import React from 'react'
import {data} from "../../dataGaleria"
import GaleryCards from '../galeryCards/GaleryCards'

import Footer from "../footer/Footer"


class Galery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      foto: []
    }
  }

  componentDidMount() {
    this.setState({
      foto : data
    })
  }

  render() {
    return (
      <section class="text-gray-600 body-font">
        <div>
          <div class="container px-5 py-24 mx-auto">
            <GaleryCards fotos={this.state.foto} />
          </div>
          <Footer />
        </div>
      </section>
    );
  }
}

export default Galery
