import React from 'react'
import { CSSObject } from '@emotion/react';
import { glassCSS } from '../../globalStyles';

const glassContainerCSS: CSSObject = {
    width: '50vw',
    height: '30vh',
    margin: '5rem',
  /* From https://css.glass */
...glassCSS
};


const glassContainerDarkCSS: CSSObject = {
    width: '50vw',
    height: '30vh',
    margin: '5rem',
  /* From https://css.glass */
background: 'rgba(0, 0, 0, 0.22)',
borderRadius: '16px',
boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
backdropFilter: 'blur(40px)',
webkitBackdropFilter: 'blur(40px)',
border: '1px solid rgba(255, 255, 255, 0.04)'
};


export default function GlassContainer() {

  return (<>
    <div css={glassContainerCSS}>coucou</div>
    <div css={glassContainerDarkCSS}>coucou</div>
    </>
  )
}
