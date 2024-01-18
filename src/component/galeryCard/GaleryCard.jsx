/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from "react-router-dom";



class GaleryCard extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        const {id,image} = this.props;
        return (
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full transition ease-in-out delay-150  hover:-translate-y-2 hover:scale-110  duration-500">
            <Link
              to={`/galeryDeatail/${id}`}
              class="block relative h-48 rounded overflow-hidden"
            >
              <img
                src={image}
                alt=""
                class=" object-center w-full rounded-t-xl lg:h-48 md:h-36 "
              />
            </Link>
          </div>
        );
    }
}


export default GaleryCard