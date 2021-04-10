import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = () => {
   // Elemento
   const [element, view] = useInView();

   // controles animacion
   const controls = useAnimation();

   // ejecute animation onScroll
   if (view) {
      controls.start('show');
   } else {
      controls.start('hidden');
   }

   // return
   return [element, controls];
};
