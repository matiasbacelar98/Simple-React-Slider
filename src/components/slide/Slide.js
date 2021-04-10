import { Section, InfoSection } from './SlideStyles';
// animation
import { infoContainerVariants } from '../../helpers/animation';
// useScroll - Custom Hook
import { useScroll } from '../../helpers/useScroll';

const Slide = ({ option, forwardedRef, children }) => {
   const [element, controls] = useScroll();

   return (
      <Section option={option} ref={forwardedRef}>
         <InfoSection
            ref={element}
            variants={infoContainerVariants}
            initial='hidden'
            animate={controls}
         >
            {children}
         </InfoSection>
      </Section>
   );
};

export default Slide;
