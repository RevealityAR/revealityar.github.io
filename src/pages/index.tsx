import React from 'react';
import { useState } from 'react';
import { CSSObject } from '@emotion/react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import MainLayout from '../layout/MainLayout';
import SEO from '../bits/SEO/SEO';
import { indexPageStrings } from '../locales/strings';
import { PhotoGrid } from '../bits/PhotoGrid/PhotoGrid';
import BackgroundSlider from 'gatsby-image-background-slider';
import { SvgSlideshow } from '../components/svgSlideshow';
import PostGridFlat from '../bits/PostGridFlat/PostGridFlat';
import TldpLogo from '../bits/TldpLogo/TldpLogo';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import './index.scss';
import './PhoneMockup.scss';
import './basics.scss';
// import './SpecialAnnouncement.scss';
// import './DrawingCount.scss';
import './ShowcasePage.scss';
import Marquee from 'react-fast-marquee';
// import { UpDown } from './animations';
// import Svg from './svg';
import MonolithVisualisation from './../components/MonolithVisualisation/MonolithVisualisation';
import Slider from 'react-slick';

import MailForm from '../bits/mailchimpFormReveality/mailchimpFormPrivacyFriendly';
import { breakpointKey } from './../components/styles';
import demoVideo from './mixVitrine.webm';
import subjectRaw from './subjectRAW.webm';
import subjectAlpha from './subjectALPHA.webm';
import subjectMix from './subjectMIX.webm';
import RevealityLogo from '../bits/RevealityLogo/RevealityLogo';
import RevealityFooter from './../bits/RealFooter/Footer';
const MAILCHIMP_URL =
  'https://reveality.us5.list-manage.com/subscribe/post?u=8b4e477d425a1fcb90d90a287&amp;id=7331d8e0bb';
const numberOfEventsToShow = 6;
const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: 'rgba(0,0,0,0',
    stroke: 'rgba(0,0,0,0)',
    strokeWidth: 2,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(0,0,0,0',
    stroke: 'white',
    strokeWidth: 2,
  },
};

/*
        <div className={'ResponsiveContainer SpecialAnnouncementBackground'}>
          <div className={'Inside'}>
            <div className="ShowcasePart Column">
              <div className={'Text Centered SpecialAnnouncement'}>
                <h2
                  className={'SpecialAnnouncementTitle'}
                  style={{ color: 'white' }}
                >
                  {LOCAL.announcementTitle}
                </h2>
                <p
                  className={'SpecialAnnouncementSubtitle'}
                  style={{ color: 'white' }}
                >
                  {LOCAL.announcemenSubtitle}
                </p>
                <Link to={onlineModeLink[langCode].path}>
                  {onlineModeLink[langCode].name}
                </Link>
              </div>
            </div>
          </div>
        </div>

        */

const responsiveContainerCSS: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
};

const responsiveContainerInsideCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '60rem',
    maxWidth: '80rem',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    padding: '0.2rem',
  },
};

const minHeightCSS: CSSObject = {
  // height: '90vh',
  // minHeight: '90vh',
  padding: '4rem',
};

const fullSizeCSS: CSSObject = {
  height: '100vh',
  minHeight: '100vh',
};

const punchlineCSS: CSSObject = {
  fontSize: '2rem',
  [breakpointKey('small')]: {
    fontSize: '3rem',
  },
  fontWeight: 900,
  textAlign: 'center',
  color: '#34393A',

  // backgroundImage: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
  // backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
  // backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
  // backgroundImage: 'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
  // backgroundImage:
  //   'linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)',
  // backgroundImage: 'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)',
  // backgroundImage: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',
  // backgroundImage: 'radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%)',
  // backgroundBlendMode: screen;
  // backgroundClip: 'text',
  // textFillColor: 'transparent',
};

const welcomeCoverPhotoCSS: CSSObject = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const welcomeCoverCSS: CSSObject = {
  height: '90vh',
  minHeight: '90vh',
  lineHeight: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const welcomeCoverPunchlineCSS: CSSObject = {
  fontSize: '4rem',
  fontWeight: 300,
  lineHeight: 1.3,
  color: 'rgb(240,240,240)',

  [breakpointKey('small')]: {
    fontSize: '3rem',
  },
};
const welcomeCoverDescriptionCSS: CSSObject = {
  lineHeight: '1.3',
  fontSize: '2.3em',
  maxWidth: '30em',
  margin: '0 auto',
  // marginTop: 'auto',
  marginBottom: '1em',
  padding: '0.5em',
  // background-color: $accentColor',
  color: 'rgb(220,220,220)',

  [breakpointKey('small')]: {
    fontSize: '1.3em',
    marginTop: 'auto',
    marginBottom: '3em',
    paddingLeft: '1em',
    paddingRight: '1em',
  },
};
const welcomeCoverInsideCSS: CSSObject = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  textAlign: 'center',
  // textShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
  // background: 'rgba(0, 0, 0, 0.2)',

  [breakpointKey('normal')]: {
    //justify-content: center',
    justifyContent: 'flex-start',
  },
  [breakpointKey('small')]: {
    justifyContent: 'flex-start',
  },
};

/*
  .CoverLogo {
    width: '20rem',
    height: '20rem',
    margin: 'auto',
    marginBottom: 0,
    opacity: 0.9,

    @include breakpoint(small) {
      width: 12rem,
      height: 12rem,
    }
  }
  */

const smallyTextCSS: CSSObject = {
  fontSize: '0.9em',
  opacity: 0.7,
};

const cardCSS: CSSObject = {
  width: '15rem',
  height: '15rem',
  margin: '2rem',
  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  background:
    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
};

const studioCardCSS: CSSObject = {
  fontSize: '0.9em',
  width: '15em',
  height: '15em',
  margin: '2em',

  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
  },
  // background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  border: 'solid 4px white',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1000px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
};
const superGradientCSS: CSSObject = {
  // backgroundImage: 'linear-gradient(to right, #434343 0%, black 100%)'
  background:
    'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
  backgroundBlendMode: 'multiply,multiply',
  // backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
};

const contactButtonCSS: CSSObject = {
  textDecoration: 'none',
  alignSelf: 'center',
  justifySelf: 'center',
  borderRadius: '10em',
  padding: '1em 2em 1em 2em',
  border: '2px solid white',
  transition: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
  textTransform: 'uppercase',
  color: 'white',
  '&:hover': {
    background: 'white',
    color: 'black',
    cursor: 'pointer',
  },
  padding: '0.4em',
  margin: '0.5em',
};

const buttonCSS: CSSObject = {
  backgroundImage:
    'linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)',
  borderRadius: '100rem',
  border: 'none',
  fontWeight: 900,
  // backgroundColor: 'black',
  color: 'black',
  padding: '1em 2em 1em 2em',
  margin: '1em',
  transition: 'all 150ms linear',
  filter: 'saturate(1)',

  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
    transition: 'all 150ms linear',
    filter: 'saturate(1.3)',
  },
};

const marqueBlockCSS: CSSObject = {
  fontSize: '1.5em',
  fontSize: 'italic',
  padding: '0.5em',
  color: 'white',
  fontWeight: 600,
  paddingTop: '2em',
  paddingBottom: '2em',
};
///

const subjectVideoCSS: CSSObject = {
  borderRadius: '16px',
  height: '50vh',
  margin: '2em',
  [breakpointKey('small')]: {
    height: '60vh',
    borderRadius: '18px',
  },
};

const subjectTitleCSS: CSSObject = {
  padding: '2rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  borderRadius: '0.4rem',
  color: '#fbf9e8',
  backgroundColor: '#649de4',
  userSelect: 'none'
};

const joinBetaCallCSS: CSSObject = {
  textAlign: 'center',
  color: '#2A6DBF',
}
export default function Index({ data, pageContext: { langCode }, location }) {
  const LOCAL = indexPageStrings[langCode];
  const posts = data.allMdx.edges;
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const [subjectNumber, setSubjectNumber] = useState<number>(1);
  // const subjectVideo = useState(subjectRaw);

  /*
   <div
            className={'ResponsiveContainer WelcomerCoverPhoto'}
            style={{
              background: `url(${data.imageChevagny.childImageSharp.fluid.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
          */
  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} />

      <div
        css={{
          ...responsiveContainerCSS,
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          css={{
            ...responsiveContainerInsideCSS,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            [breakpointKey('small')]: {
              flexDirection: 'column',
            },
          }}
        >
          <div
            css={{
              minWidth: '30vw',
              maxWidth: '40vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              [breakpointKey('small')]: {
                minWidth: '90vw',
              },
            }}
          >
            <div
              css={{
                width: '7rem',
                height: `${7 * 1.5}rem`,

                marginBottom: 0,
                opacity: 0.9,
                padding: '2rem',
                [breakpointKey('small')]: {
                  width: '5rem',
                  height: `${5 * 1.5}rem`,
                },
              }}
            >
              <RevealityLogo />
            </div>

            <h1 css={punchlineCSS}>{LOCAL['punchline']}</h1>
            <p
              css={{
                paddingLeft: '5rem',
                paddingRight: '5rem',
                textAlign: 'center',
              }}
            >
              {LOCAL['descriptionPunchline']}
            </p>
            <p></p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h3 css={joinBetaCallCSS}>{LOCAL['joinBetaRev']}</h3>
              <MailForm
                uniqueId={'footerForm'}
                mailchimpURL={MAILCHIMP_URL}
                uniqueAntiSpamId={'b_8b4e477d425a1fcb90d90a287_7331d8e0bb'}
              />
            </div>
          </div>

          <div
            css={{
              [breakpointKey('normal')]: {
                minWidth: '40rem',
                maxWidth: '50rem',
              },
              [breakpointKey('small')]: {
                minWidth: '90vw',
                padding: '0.2rem',
                paddingTop: '3rem',
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <video
              autoPlay
              muted
              loop
              style={{ borderRadius: '20px', height: '70vh' }}
            >
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <h1 css={{ ...punchlineCSS, marginTop: '8rem', marginBottom: '2rem' }}>
          {LOCAL['howdoesitwork']}
        </h1>
        <div
          css={{
            [breakpointKey('normal')]: {
              minWidth: '40rem',
              maxWidth: '50rem',
              alignItems: 'flex-start',
            },
            [breakpointKey('small')]: {
              minWidth: '90vw',
              padding: '0.2rem',
              paddingTop: '3rem',
              flexDirection: 'column',
              alignItems: 'center',
            },
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3 css={subjectTitleCSS}>{LOCAL['shoot']}</h3>

            <video autoPlay muted loop css={subjectVideoCSS}>
              <source src={subjectRaw} type="video/webm" />
            </video>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3 css={subjectTitleCSS}>{LOCAL['weProcess']}</h3>
            <video autoPlay muted loop css={subjectVideoCSS}>
              <source src={subjectAlpha} type="video/webm" />
            </video>
          </div>

          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3 css={subjectTitleCSS}>{LOCAL['reproject']}</h3>
            <video autoPlay muted loop css={subjectVideoCSS}>
              <source src={subjectMix} type="video/webm" />
            </video>
          </div>
        </div>

        <div
          css={{
            [breakpointKey('normal')]: {
              minWidth: '40rem',
              maxWidth: '50rem',
            },
            [breakpointKey('small')]: {
              minWidth: '90vw',
              padding: '0.2rem',
              paddingTop: '3rem',
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        ></div>

        <h2>{LOCAL['imaginationLimit']}</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3 css={joinBetaCallCSS}>{LOCAL['joinBetaRev']}</h3>
          <MailForm
            uniqueId={'footerForm'}
            mailchimpURL={MAILCHIMP_URL}
            uniqueAntiSpamId={'b_8b4e477d425a1fcb90d90a287_7331d8e0bb'}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export const indexPageQuery = graphql`
  query IndexQuery {
    backgrounds: allFile(filter: { absolutePath: { regex: "/backgrounds/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "event" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            category
            subtitle
            language
            image {
              childImageSharp {
                gatsbyImageData(height: 500, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
