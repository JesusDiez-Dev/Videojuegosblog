import godofwar from '../../img/godofwar.jpg'
export default function Masanalisis() {
  return (
    <>
        <div className="masanalisis">
            <h2>Análisis</h2>

            <div className="masanalisis-grid">

                <div className="masanalisis-grid-item">
                    <img src={godofwar} alt="" />
                    <p>Juegazo</p>
                    <span>8.3/10</span>
                </div>

                <div className="masanalisis-grid-item">
                    <img src={godofwar} alt="" />
                    <span>8.3/10</span>
                </div>

                <div className="masanalisis-grid-item">
                    <img src={godofwar} alt="" />
                    <span>8.3/10</span>
                    <p>Juegazo</p>
                </div>

            </div>

        </div>
    </>
  )
}
