import React, { Component } from 'react';
import './Desc.css';
import image from '../reactions/Paracetamol/ParacetamolComplete.png';

class Tylenol extends Component {
  render() {
    return (
      <div className="content">
      <h2>Tylenol</h2>
      <h4>(Paracetamol)</h4>
      <img src={image}/>
        <p>
Esta es una sustitución nucleofílica acílica, conde la amiga y el anillo aromático actual como el agente alicante uniéndose al grupo Ac. para formar la molécula del paracetamol.
        </p>

      </div>
    );
  }
}

export default Tylenol;
