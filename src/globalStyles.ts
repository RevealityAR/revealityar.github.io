import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import grain from './pages/gggrain.svg'


export const glassCSS: CSSObject = {
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(40px)',
    webkitBackdropFilter: 'blur(40px)',
    border: '1px solid rgba(255, 255, 255, 0.04)'
}

export const bodyCSS = (theme: Theme): CSSObject => {
  return {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',

    margin: 0,
    outline: 0,
    padding: 0,
    backgroundColor: theme.palette.background.default,
    // background: `url(${grain})`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100% 100%',
    // background: `url(https://grainy-gradients.vercel.app/noise.svg), linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);`,
    // fontFamily: `-apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
    //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
    //   sans-serif`,

    // background:`url(${grain}), url(https://previews.123rf.com/images/aquapictures/aquapictures1707/aquapictures170700381/82233619-blurry-light-on-the-water-textured-background-sunny-outdoors-seascape-bright-surface.jpg)`,
    background: `url(${grain}), linear-gradient(to right top, #413b5a, #625676, #857393, #a891b1, #cdb1cf, #dfbfd7, #f0cee0, #ffdde9, #ffdfe0, #ffe3d5, #ffe9cc, #fff1c9)`,
    // background:`url(${grain}), linear-gradient(to right top, #fff1c9, #ffe9cc, #ffe3d5, #ffdfe0, #ffdde9, #f7d7ed, #ebd3f2, #d9d0f7, #b7c8f1, #93c0e4, #70b7d1, #56adb8)`,
    // background: `url(${grain}), linear-gradient(to right top, #fff1c9, #ffe9cc, #ffe3d5, #ffdfe0, #ffdde9, #fae0f2, #f4e4fa, #ede8ff, #e5efff, #dff5ff, #defbff, #e2ffff)`,
    color: '#3D3C38',
    fontFamily: `'Roboto', sans-serif`,
    backgroundBlendMode: 'soft-light'
  }
}
