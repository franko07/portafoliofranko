/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import style from "./Whatsapp.module.css"
import icono from "../../imagenes/fotoCarousell/icono.png"


function Whatsapp  ()  {
  return (
    <div className={style.containerBtn}>
        <a href="https://api.whatsapp.com/send?phone=3104582710" target='_blank'>
            <img className={style.btn} src={icono} alt="whatsapp" />
        </a>
    </div>
  )
}


export default Whatsapp