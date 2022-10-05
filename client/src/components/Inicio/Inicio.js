import React from "react";
import style from "./Inicio.module.css";

function Inicio(props) {
  return (
    <div className={style.principal}>
      <h1>Bienvenidos</h1>
      <button onClick={() => props.history.push("/home")}>Empezar</button>
    </div>
  );
}

export default Inicio;
