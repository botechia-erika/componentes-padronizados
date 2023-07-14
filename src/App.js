import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppGlobal } from './Globals/globalStyled';

export function App() {
  return (
    <>

        <AppGlobal>
<div><header><h1>HELLO</h1></header></div>

</div>
<div>
<main>
<aside>Aside1</aside>
<section><h2>main</h2></section>
<aside>aside2</aside>
</main>
</div>
<div><footer>footer</footer></div>

        </AppGlobal>

    </>
  );
}
