import React from "react";
import CardBar from "../cardBar/CardBar";




class CardsBar extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props) 
    }

    render(){
        const {bebida} = this.props
        return (
          <div class="flex-wrap mx-auto md:flex-nowrap p-2">
            <div class="px-6 ">
              <h1 class="mb-8 text-2xl font-semibold text-neutral-600 ">
                <span>BAR</span>
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              {bebida.map((beb) => (
                <CardBar
                  key={beb.id}
                  id={beb.id}
                  nombre={beb.nombre}
                  image={beb.image?.url}
                />
              ))}
            </div>
          </div>
        );
    }
}

export default CardsBar;