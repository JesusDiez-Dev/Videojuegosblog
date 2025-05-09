import React, { useState } from "react";


const App = () => {
  // Estado para contar los clics de like y dislike
  const [likes, setLikes] = useState(2);
  const [dislikes, setDislikes] = useState(2);

  // Función para manejar el clic en el botón de Like
  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  // Función para manejar el clic en el botón de Dislike
  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
  };

  // Lógica para determinar el mensaje basado en los clics
  const getMessage = () => {
    if (likes > dislikes) {
      return <span className="recomendado">Lo Recomendamos</span>;
    } else if (dislikes > likes) {
      return <span className="no-recomendado">No lo Recomendamos</span>;
    } else {
      return <span className="neutral">Ni bueno... Ni malo</span>;
    }
  };

  return (
    <>

        <div className="analisislike">
            <h2>¿Te pareció útil la reseña?</h2>

        </div>
        <div className="analisislike-div">
            <div className="analisislike-iconos">
                {/* <button onClick={handleLikeClick} className="analisislike-iconos-like"><i class="fa-regular fa-thumbs-up "></i></button> */}
                <i onClick={handleLikeClick} class="fa-regular fa-thumbs-up "> <p>{likes} persona les ha gustado</p></i>
                {/* <button onClick={handleDislikeClick} className="analisislike-iconos-dislike"><i class="fa-regular fa-thumbs-down"></i></button> */}
                <i onClick={handleDislikeClick} class="fa-regular fa-thumbs-down "><p>{dislikes} persona no les ha gustado</p></i>
            </div>

            <div className="analisislike-resultado">
                <h2>El público dice:</h2>
                {getMessage()}
            </div>

            {/* <div className="analisislike-resultado-detalles">
                <p>{likes} persona(s) les ha gustado</p>
                <p>{dislikes} persona(s) no les ha gustado</p>
            </div> */}
        </div>
    </>

  );
};

export default App;
