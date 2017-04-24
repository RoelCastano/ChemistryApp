import React, { Component } from 'react';
import './Desc.css';
import image1 from '../reactions/Advil/AdvilComplete.png';
import image2 from '../reactions/Advil/AdvilStep2.png';
import image3 from '../reactions/Advil/AdvilStep3.png';
import image4 from '../reactions/Advil/AdvilStep4.png';
import image5 from '../reactions/Advil/AdvilStep5.png';
import image6 from '../reactions/Advil/AdvilStep6.png';

class Ibuprofeno extends Component {
  render() {
    return (
      <div className="content">
        <div className="desc-header">
          <h2>Advil</h2>
          <h4>(Ibuprofeno)</h4>

          <div className="desc-images">
            <img alt="Reaction" src={image1}/>
            <img alt="Reaction" src={image2}/>
            <img alt="Reaction" src={image3}/>
            <img alt="Reaction" src={image4}/>
            <img alt="Reaction" src={image5}/>
            <img alt="Reaction" src={image6}/>
          </div>
        </div>
        <div className="desc_content">
          <ol>
            <li>En los pasos de estas reacciones puedes observar una sustitución electrofílica en la primera etapa.</li>
            <li>En el segundo paso la carga parcial negativa del etil-2-cloroacetato forman un enlace con el grupo  carbonilo.</li>
            <li>Tercer paso se hidrata la molécula para deshacer el enlace epóxido y formar un ester gracias a la atracción de cargas generadas entre el H+ (ácido) y los oxígeno del enlace. al final se obtiene etanol como un subproducto.</li>
            <li>Cuarto paso la resonancia de la molécula genera una carga positiva en un carbono del éster lo cual atrae al nucleófilo (hidroxilamina) sustituyendo así este último compuesto al carbonilo original.</li>
            <li>En esta etapa el medio ácido dona un protón al OH unido al nitrógeno, volviéndolo en una molécula de agua ideal para ser un grupo saliente. Finalmente esto crea una triple enlace Carbono Nitrógeno conocido como nitrilo.</li>
            <li>El agua opera como un ácido en este paso haciendo una reacción ácido base con el nitrógeno del nitrilo y sustituyendo dentro del compuesto principal en forma de Ácido Carboxílico</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Ibuprofeno;
