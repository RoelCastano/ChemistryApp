import React, { Component } from 'react';
import './Desc.css';
import image from '../reactions/Aspirin/AspirinComplete.png';

class Aspirina extends Component {
  render() {
    return (
      <div className="content">
        <div className="desc-header">
          <h2>Aspirina</h2>
          <h4>(Ácido acetilsalisilico)</h4>
          <div className="desc-images">
            <img alt="Reaction" src={image}/>
          </div>
        </div>
        <p>
          Reacción de sustitución nucleofílica, aquí puedes observar como la carga negativa del grupo fenol atrae al carbono altamente positivo del anhídrido. Es una reacción de sustitución pues podemos observar que el hidrógeno del OH es sustituido para volverse un éster.
        </p>

      </div>
    );
  }
}

export default Aspirina;
