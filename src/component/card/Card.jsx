/* eslint-disable no-useless-constructor */
import React from 'react'
// import style from "./Card.module.css"
import {Link} from "react-router-dom"



class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {id,nombre,image} = this.props
        return (
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to={`/details/${id}`} class="mt-0.5 text-lg text-white">
              <img
                src={image}
                alt={nombre}
                class=" object-center w-full rounded-t-xl lg:h-48 md:h-36"
              />
              <div>
                <div class="p-5 sm:p-6">
                  <h2 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span>{nombre}</span>
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        );
    }
}

export default Card
