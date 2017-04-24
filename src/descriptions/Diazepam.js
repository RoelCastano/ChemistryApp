import React, { Component } from 'react';
import './Desc.css';
import image from '../reactions/Valium/ValiumComplete.png';

class Diazepam extends Component {
  render() {
    return (
      <div className="content">
      <h2>Valium</h2>
      <h4>(Diazepam)</h4>
      <img src={image}/>
        <p>
          En esta reacción de sustitución electrofílica el ácido de lewis AlCl3 
          toma el cloro generando un carbonation donde el reactivo se unirá. 
          El medio también donará un protón para convertir al doble enlace 
          carbono oxígeno en un alcohol, Dando como resultado la molécula final.
        </p>

      </div>
    );
  }
}

export default Diazepam;
