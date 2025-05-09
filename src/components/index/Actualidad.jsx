import React from 'react'
import { Link, NavLink } from "react-router-dom"
import tar from '../../img/tar.jpg'
function Actualidad() {
  return (
    <>
        <div className='actualidad'>

            <h2>ACTUALIDAD</h2>

            <div className='actualidad-grid'>

                <div className='actualidad-grid-item'>
                    <img src={tar} alt="" />
                    <h3>Se rumorea que la NVIDIA GeForce RTX 5080 se lanzará el 21 de enero</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ab! Tempora harum quam molestias adipisci tempore nihil sapiente error accusantium, hic, itaque vel, non sint! Amet accusantium aliquid et quam!</p>
                    <Link className='actualidad-grid-item-a' to="/analisis">
                        <a href="#">LEER NOTICIA</a>
                    </Link>
                </div>

                <div className='actualidad-grid-item'>
                    <img src={tar} alt="" />
                    <h3>Se rumorea que la NVIDIA GeForce RTX 5080 se lanzará el 21 de enero</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ab! Tempora harum quam molestias adipisci tempore nihil sapiente error accusantium, hic, itaque vel, non sint! Amet accusantium aliquid et quam!</p>
                    <Link className='actualidad-grid-item-a' to="/analisis">
                        <a href="#">LEER NOTICIA</a>
                    </Link>
                </div>

                <div className='actualidad-grid-item'>
                    <img src={tar} alt="" />
                    <h3>Se rumorea que la NVIDIA GeForce RTX 5080 se lanzará el 21 de enero</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ab! Tempora harum quam molestias adipisci tempore nihil sapiente error accusantium, hic, itaque vel, non sint! Amet accusantium aliquid et quam!</p>
                    <Link className='actualidad-grid-item-a' to="/analisis">
                        <a href="#">LEER NOTICIA</a>
                    </Link>
                </div>

            </div>
        </div>
    </>
  )
}

export default Actualidad
