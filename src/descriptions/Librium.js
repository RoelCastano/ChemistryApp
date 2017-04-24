import React, { Component } from 'react';
import './Desc.css';
import image from '../reactions/Librium/LibriumComplete.png';

class Librium extends Component {
  render() {
    return (
      <div className="content">
        <div className="desc-header">
          <h2>Librium</h2>
          <h4>(Clordiazepoxido)</h4>
          <div className="desc-images">
            <img alt="Reaction" src={image}/>
          </div>
        </div>
        <p>
La hidroxilamina expulsa al oxígeno del carbonilla en forma de agua para tomar su lugar en la molécula principal (sustitución nucleofílica). Posteriormente el Cl2O debido a al tamaño y geometría de la molécula cierra el ciclo enlazándose con los dos nitrógenos.
        </p>

      </div>
    );
  }
}

export default Librium;
