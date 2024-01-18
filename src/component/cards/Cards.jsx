
import React from "react";
import Card from "../card/Card"




class Cards extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props) 
    }

    render(){
        const {platos} = this.props
        return (
          <div class=" flex-wrap mx-auto md:flex-nowrap p-2">
            <div class="px-6 ">
              <h1 class="mb-8 text-2xl font-semibold text-neutral-600">
                <span>RESTAURANTE</span>
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              {platos.map((plat) => (
                <Card
                  key={plat.id}
                  id={plat.id}
                  nombre={plat.nombre}
                  image={plat.image?.url}
                />
              ))}
            </div>
          </div>
        );
    }
}

export default Cards;

