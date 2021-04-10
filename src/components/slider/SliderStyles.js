import styled from 'styled-components';

export const SliderContainer = styled.main`
   height: 100%;
   position: relative;

   .dots-container {
      display: flex;
      flex-direction: row;
      position: fixed;
      z-index: 10;
      top: 90%;
      left: 50%;
      transform: translate(-50%, 0);
   }

   .dot {
      width: 12px;
      height: 12px;
      border: 2px solid var(--white);
      border-radius: 50%;
      background-color: var(--primary);
      transition: all 0.3s;
      cursor: pointer;

      &:not(:last-of-type) {
         margin-right: 20px;
      }

      &:hover {
         cursor: pointer;
      }

      &.is-active {
         transform: scale(1.8);
      }
   }

   /* Media Queries */
   @media (min-width: 43.7em /* 700px */) {
      .dots-container {
         flex-direction: column;
         top: 50%;
         right: 5%;
         transform: translate(90%, -50%);
      }

      .dot {
         width: 15px;
         height: 15px;

         &:not(:last-of-type) {
            margin-bottom: 20px;
         }
      }
   }
`;
