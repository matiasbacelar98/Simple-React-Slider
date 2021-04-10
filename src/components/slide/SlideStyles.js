import styled from 'styled-components';
import { motion } from 'framer-motion';
// Imagenes
import Lake from '../../img/LakeBrienz.jpg';
import LowerAntelopeCanyon from '../../img/LowerAntelopeCanyon.jpg';
import MoraineLake from '../../img/MoraineLake.jpg';
import MountCook from '../../img/MountCook.jpg';

// Seccion Slider
export const Section = styled.section`
   height: 100vh;

   /*  renderizar imagen segun seccion  */
   background-image: ${(props) => {
      if (props.option === 'second') return `url(${LowerAntelopeCanyon})`;
      if (props.option === 'third') return `url(${MoraineLake})`;
      if (props.option === 'fourth') return `url(${MountCook})`;

      return `url(${Lake})`;
   }};
   /*--------------------------------------------------------------------*/

   background-position: center center;
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
`;

// Container Info
export const InfoSection = styled(motion.div)`
   text-align: center;
   padding: 1rem;
   background-color: rgba(0, 0, 0, 0.5);

   .author {
      color: var(--primary);
   }
   .title {
      color: var(--white);
   }

   /*  Media Queries */
   @media (min-width: 59.3em /* 900px */) {
      width: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 5rem 0;
   }
`;
