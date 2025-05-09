import Carrusel from '../index/Carrusel'
import Aside from '../index/Aside'
// import Carrusel from "../components/Carrusel"
// import Aside from "../components/Aside"
export default function Hero() {
  return (
    <>

        <div className="hero">

            <div className="hero-izquierda">

                <Carrusel/>

            </div>

            <div className="hero-derecha">

                <Aside/>    

            </div>

        </div>

    </>
  )
}
