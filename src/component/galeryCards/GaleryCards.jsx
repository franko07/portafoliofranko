/* eslint-disable no-useless-constructor */
import React from "react";
import GaleryCard from "../galeryCard/GaleryCard";




class GaleryCards extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {fotos} = this.props;
        return (
          <div class="flex flex-wrap -m-4 ">
            {fotos.map((fot) => (
              <GaleryCard key={fot.id} id={fot.id} image={fot.image?.url} />
            ))}
          </div>
        );
    }
}


export default GaleryCards;