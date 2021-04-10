import { useRef, useState } from 'react';
import Slide from '../slide/Slide';
import { SliderContainer } from '../slider/SliderStyles';

const Slider = () => {
   const [active, setActive] = useState('');

   // Referencias - secciones
   const firstSection = useRef(null);
   const secondSection = useRef(null);
   const thirdSection = useRef(null);
   const fourthSection = useRef(null);

   // Ejecutar Scroll
   const scrollToSection = (ref, dot) => {
      // añadir clase a dot
      setActive(dot);

      ref.current.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <SliderContainer>
         <ul className='dots-container'>
            <li
               className={`dot ${active === 'first' ? 'is-active' : ''}`}
               onClick={() => scrollToSection(firstSection, 'first')}
            ></li>
            <li
               className={`dot ${active === 'second' ? 'is-active' : ''}`}
               onClick={() => scrollToSection(secondSection, 'second')}
            ></li>
            <li
               className={`dot ${active === 'third' ? 'is-active' : ''}`}
               onClick={() => scrollToSection(thirdSection, 'third')}
            ></li>
            <li
               className={`dot ${active === 'fourth' ? 'is-active' : ''}`}
               onClick={() => scrollToSection(fourthSection, 'fourth')}
            ></li>
         </ul>
         <Slide forwardedRef={firstSection}>
            <p className='author'>
               Photo By -{' '}
               <a
                  href='https://unsplash.com/@draufsicht'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  Andreas Gücklhorn
               </a>
            </p>
            <h2 className='title'>Lake Brienz - Switzerland</h2>
         </Slide>
         <Slide option='second' forwardedRef={secondSection}>
            <p className='author'>
               Photo By -{' '}
               <a
                  href='https://unsplash.com/@randomlies'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  Ashim D’Silva
               </a>
            </p>
            <h2 className='title'>Antelope Canyon - United States</h2>
         </Slide>
         <Slide option='third' forwardedRef={thirdSection}>
            <p className='author'>
               Photo By -{' '}
               <a
                  href='https://unsplash.com/@garrettpsystems'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  Garrett Parker
               </a>
            </p>
            <h2 className='title'>Moraine Lake - Canada</h2>
         </Slide>
         <Slide option='fourth' forwardedRef={fourthSection}>
            <p className='author'>
               Photo By -{' '}
               <a
                  href='https://unsplash.com/@marekpiwnicki'
                  target='_blank'
                  rel='noopener noreferrer'
               >
                  Marek Piwnicki
               </a>
            </p>
            <h2 className='title'>Mount Cook - New Zealand</h2>
         </Slide>
      </SliderContainer>
   );
};

export default Slider;
