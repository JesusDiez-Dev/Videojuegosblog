import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom"
export default function Aside() {
  return (
    <>
      <aside>

        <h2 className='aside-h2'>Últimas <span>Novedades</span></h2>

        <div className="aside">

          <div className="aside-item">

            <img src="https://nexoplay.com/wp-content/uploads/2023/02/Brawl-Stars-1.jpg" alt="" />
            <Link className="aside-item-link" to="/analisis">
              <a href="#">LOREM MUIASFDOANFJNJ</a>
            </Link>
          </div>

          <div className="aside-item">
            <img src="https://nexoplay.com/wp-content/uploads/2023/02/Brawl-Stars-1.jpg" alt="" />
            <Link className="aside-item-link" to="/analisis">
                <a href="#">LOREM MUIASFDOANFJNJ</a>
            </Link>
          </div>

          <div className="aside-item">
            <img src="https://nexoplay.com/wp-content/uploads/2023/02/Brawl-Stars-1.jpg" alt="" />
            <Link className="aside-item-link" to="/analisis">
                <a href="#">LOREM MUIASFDOANFJNJ</a>
            </Link>
          </div>


        </div>
      </aside>
    </>
  )
}

