import Advil1 from './reactions/Advil/Advil1.png';
import Advil2 from './reactions/Advil/Advil2.png';
import Advil3 from './reactions/Advil/Advil3.png';
import AdvilCorrect from './reactions/Advil/AdvilCorrect.png';
import AdvilReaction from './reactions/Advil/AdvilReaction.png';

import Aspirin1 from './reactions/Aspirin/Aspirin1.png';
import Aspirin2 from './reactions/Aspirin/Aspirin2.png';
import Aspirin3 from './reactions/Aspirin/Aspirin3.png';
import AspirinCorrect from './reactions/Aspirin/AspirinCorrect.png';
import AspirinReaction from './reactions/Aspirin/AspirinReaction.png';

import Librium1 from './reactions/Librium/Librium1.png';
import Librium2 from './reactions/Librium/Librium2.png';
import Librium3 from './reactions/Librium/Librium3.png';
import LibriumCorrect from './reactions/Librium/LibriumCorrect.png';
import LibriumReaction from './reactions/Librium/LibriumReaction.png';

import Paracetamol1 from './reactions/Paracetamol/Paracetamol1.png';
import Paracetamol2 from './reactions/Paracetamol/Paracetamol2.png';
import Paracetamol3 from './reactions/Paracetamol/Paracetamol3.png';
import ParacetamolCorrect from './reactions/Paracetamol/ParacetamolCorrect.png';
import ParacetamolReaction from './reactions/Paracetamol/ParacetamolReaction.png';

import Valium1 from './reactions/Valium/Valium1.png';
import Valium2 from './reactions/Valium/Valium2.png';
import Valium3 from './reactions/Valium/Valium3.png';
import ValiumCorrect from './reactions/Valium/ValiumCorrect.png';
import ValiumReaction from './reactions/Valium/ValiumReaction.png';

const reactions = {
  Advil: {
    reaction: AdvilReaction,
    options: [AdvilCorrect, Advil1, Advil2, Advil3],
  },
  Aspirin: {
    reaction: AspirinReaction,
    options: [AspirinCorrect, Aspirin1, Aspirin2, Aspirin3],
  },
  Librium: {
    reaction: LibriumReaction,
    options: [LibriumCorrect, Librium1, Librium2, Librium3],
  },
  Paracetamol: {
    reaction: ParacetamolReaction,
    options: [ParacetamolCorrect, Paracetamol1, Paracetamol2, Paracetamol3],
  },
  Valium: {
    reaction: ValiumReaction,
    options: [ValiumCorrect, Valium1, Valium2, Valium3],
  },
};

export default reactions;
