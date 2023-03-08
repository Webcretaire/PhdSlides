import Highlight from 'reveal.js/plugin/highlight/highlight';

// Import theme
import './theme.scss';

// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';

export default {
    // App Config
    app: {
        name: "Un simulateur pour le calcul haute performance : modélisation multi-niveau de l'interconnect BXI pour prédire les performances d'applications MPI",
    },
    // Reveal Config
    reveal: {
      plugins: [Highlight],
      hash: true
    },
};
