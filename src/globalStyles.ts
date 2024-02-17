import { CSSObject } from '@emotion/react'
import { Theme } from '@mui/material'
import grain from './pages/gggrain.svg'

export const glassStyle = (theme: Theme) => ({
  borderRadius: '24px',
  bgcolor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(14px)',
  border: '1px solid',
  borderColor: 'divider',
  boxShadow:
    theme.palette.mode === 'light'
      ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
      : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
})
export const glassCSS: CSSObject = {
  // background: 'rgba(255, 255, 255, 0.12)',
  // borderRadius: '26px',
  // boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  // backdropFilter: 'blur(14px)',
  // webkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '24px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
  backdropFilter: 'blur(14px)',
  // border: '1px solid',
  // borderColor: 'rgba(0, 0, 0, 0.12)', // divider in theme
}

export const gradientBackgroundCSS: CSSObject = {
  // background: `url(${grain})`,
  backgroundRepeat: 'repeat',
  backgroundSize: '100% 100%',
  // background: `url(https://grainy-gradients.vercel.app/noise.svg), linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);`,
  // fontFamily: `-apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
  //   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial,
  //   sans-serif`,

  // background:`url(${grain}), url(https://previews.123rf.com/images/aquapictures/aquapictures1707/aquapictures170700381/82233619-blurry-light-on-the-water-textured-background-sunny-outdoors-seascape-bright-surface.jpg)`,
  // background: `url(${grain}), linear-gradient(to right top, #413b5a, #625676, #857393, #a891b1, #cdb1cf, #dfbfd7, #f0cee0, #ffdde9, #ffdfe0, #ffe3d5, #ffe9cc, #fff1c9)`,
  // background:
  // 'linear-gradient(150deg, #ecedee, transparent 30%), linear-gradient(330deg, rgb(210, 206, 242), transparent 30%),linear-gradient(225deg, #fff0be, #fbdce7, #e2fae1, powderblue)',

  // VV1
  //   backgroundColor:'hsla(205,100%,85%,1)',
  // backgroundImage:`url(${grain}), radial-gradient(at 2% 14%, hsla(187,100%,93%,1) 0px, transparent 50%),
  // radial-gradient(at 5% 75%, hsla(346,10%,89%,1) 0px, transparent 50%),
  // radial-gradient(at 35% 46%, hsla(206,100%,87%,1) 0px, transparent 50%),
  // radial-gradient(at 22% 4%, hsla(81,0%,100%,1) 0px, transparent 50%),
  // radial-gradient(at 20% 90%, hsla(313,100%,96%,1) 0px, transparent 50%),
  // radial-gradient(at 29% 35%, hsla(36,89%,96%,1) 0px, transparent 50%),
  // radial-gradient(at 93% 63%, hsla(206,87%,83%,1) 0px, transparent 50%)`,

  // V2
  backgroundColor: `hsla(41,100%,96%,1)`,
  backgroundImage: `radial-gradient(at 2% 14%, hsla(208,86%,85%,1) 0px, transparent 50%),
radial-gradient(at 5% 75%, hsla(289,86%,85%,0.43) 0px, transparent 50%),
radial-gradient(at 35% 46%, hsla(206,86%,85%,1) 0px, transparent 50%),
radial-gradient(at 22% 4%, hsla(40,86%,85%,1) 0px, transparent 50%),
radial-gradient(at 20% 89%, hsla(360,0%,92%,1) 0px, transparent 50%),
radial-gradient(at 29% 35%, hsla(266,100%,92%,1) 0px, transparent 50%),
radial-gradient(at 86% 76%, hsla(206,86%,85%,0.7) 0px, transparent 50%), url(${grain})`,

  // V3

  // backgroundColor:`hsla(41,100%,96%,1)`,
  // backgroundImage: `radial-gradient(at 2% 14%, hsla(208,100%,78%,1) 0px, transparent 50%),
  // radial-gradient(at 5% 75%, hsla(289,100%,78%,0.43) 0px, transparent 50%),
  // radial-gradient(at 35% 46%, hsla(206,100%,78%,1) 0px, transparent 50%),
  // radial-gradient(at 22% 4%, hsla(40,100%,78%,1) 0px, transparent 50%),
  // radial-gradient(at 20% 89%, hsla(360,100%,78%,1) 0px, transparent 50%),
  // radial-gradient(at 29% 35%, hsla(266,100%,78%,1) 0px, transparent 50%),
  // radial-gradient(at 86% 76%, hsla(206,100%,78%,0.7) 0px, transparent 50%)`
  // backgroundBlendMode: 'soft-light',
  // backgroundO
}

export const gradientBackground2CSS: CSSObject = {
  backgroundColor: 'hsla(20,0%,100%,1)',
  backgroundImage: `radial-gradient(at 2% 14%, hsla(187,100%,93%,1) 0px, transparent 50%),
radial-gradient(at 78% 13%, hsla(206,100%,87%,1) 0px, transparent 50%),
radial-gradient(at 47% 48%, hsla(81,100%,100%,1) 0px, transparent 50%),
radial-gradient(at 47% 44%, hsla(36,100%,96%,1) 0px, transparent 50%),
radial-gradient(at 93% 63%, hsla(206,100%,83%,1) 0px, transparent 50%)`,
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
    color: theme.palette.text.primary,
    fontFamily: `'Roboto', sans-serif`,
    backgroundBlendMode: 'soft-light',
  }
}
