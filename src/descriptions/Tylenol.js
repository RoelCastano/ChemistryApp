import React, { Component } from 'react';
import './Desc.css';
import image from '../reactions/Paracetamol/ParacetamolComplete.png';

class Tylenol extends Component {
  render() {
    return (
      <div className="content">
        <div className="desc-header">
          <h2>Tylenol</h2>
          <h4>(Paracetamol)</h4>
          <div className="desc-images">
            <img alt="Reaction" src={image}/>
          </div>
         </div>
        <p>
Esta es una sustitución nucleofílica acílica, conde la amiga y el anillo aromático actual como el agente alicante uniéndose al grupo Ac. para formar la molécula del paracetamol.
        </p>

      </div>
    );
  }
}

export default Tylenol;
