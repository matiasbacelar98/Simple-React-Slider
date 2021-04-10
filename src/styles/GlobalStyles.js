import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
   box-sizing: inherit;
   margin: 0;
   padding: 0;
}

:root {
   --white: #fff;
   --primary: #ffd394;
   --f1:clamp(1.5rem, 1.2870rem + 1.2174vw, 2.2rem);
   --f2:clamp(1rem, 0.9391rem + 0.3478vw, 1.2rem);
}

html {
   box-sizing: border-box;
   touch-action: none;
}

body {
   overflow:hidden;
   font-family: 'Poppins', sans-serif;
}

ul {
   list-style: none
   }

h2 {
   font-size: var(--f1);
   text-transform:uppercase;
}

p {
   font-size: var(--f2);
   letter-spacing:2px;
   padding-bottom:0.3rem;
}

a {
   cursor:pointer;
   color: var(--primary);
   text-decoration:transparent;
   transition:all 0.5s ease;
}

a:hover {
   text-decoration:underline;
}

`;

export default GlobalStyles;
