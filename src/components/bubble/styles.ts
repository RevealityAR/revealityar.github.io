import { CSSObject, keyframes } from '@emotion/react'
import grain from './gggrain.svg'

const $t: number = 30
const $color1 = '#233865'
const $color3 = '#AFC4E5'
const $color2 = '#DC74B2'
const $color4 = '#EC8B5A'
const $color5 = '#034C4C'

const rotate = keyframes({
  '0%': {
    transform: `rotate(0deg)`,
  },
  '100%': {
    transform: `rotate(360deg)`,
  },
})

export const backgroundCSS: CSSObject = {
  // width:'100vw',
  // height: '100vh',
  backgroundColor: 'transparent', //'#E1EDF2',
  overflow: 'hidden',
  // border: 'solid 4px black',

  // background: `url(${grain}) `,

  mixBlendMode: 'soft-light',
  // background: ''
}

export const contentCSS: CSSObject = {
  mixBlendMode: 'normal',
}

export const bokehCSS: CSSObject = {
  height: '100%',
  width: '100%',
  //   backgroundColor: '#E1EDF2',
  //   position: 'fixed',
  zIndex: -1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  filter: 'blur(100px)',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden',
}

export const circleCSS: CSSObject = {
  animation: `${rotate} ${$t}s linear infinite`,
  fill: $color1,
  opacity: 0.43,
  transformOrigin: '50%',

  ['&:nth-child(2n)']: {
    fill: $color2,
    transformOrigin: '20% 110%',
    animationDelay: `${-$t / 2}s`,
    animationDuration: `${$t * 0.6886}s`,
    opacity: 0.2,
  },
  ['&:nth-child(3n)']: {
    opacity: 0.65,
    fill: $color3,
    transformOrigin: '70% 30%',
    animationDelay: `${-$t / 4}s`,
    animationDuration: `${$t * 1.3333}s`,
  },
  ['&:nth-child(4n)']: {
    fill: $color4,
    transformOrigin: '110% 70%',
    animationDelay: `${-$t / 3}s`,
    animationDuration: `${$t * 0.79666}s`,
  },
  ['&:nth-child(5n)']: {
    fill: $color5,
    transformOrigin: '30% 40%',
  },
  ['&:nth-child(6n)']: {
    fill: $color1,
    transformOrigin: '-10% 80%',
    animationDelay: `${-$t * 1.3}s`,
  },
  ['&:nth-child(7n)']: {
    fill: $color2,
    transformOrigin: '70% -10%',
  },
  ['&:nth-child(8n)']: {
    fill: $color4,
    transformOrigin: '-30% 50%',
    animationDelay: `${-$t / 2.5}s`,
  },
}

export const sectionCSS: CSSObject = {
  position: 'relative',
  zIndex: 1,
  color: '#fff',
  fontsize: '5vw',

  textAlign: 'center',

  ['h1']: {
    userSelect: 'none',
    fontWeight: 100,
    position: 'absolute',
    top: '35vh',
    margin: 0,
    padding: 0,
    width: '100%',
    color: '#cde',
  },
}
