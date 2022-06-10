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

import logoClient_nat from '../res/logoClient_nat.webp';
import logoClient_cube from '../res/logoClient_cube.png';
import logoClient_saintex from '../res/logoClient_saintex.png';
import logoClient_snzc from '../res/logoClient_snzc.png';
import logoClient_aadn from '../res/logoClient_aadn.png';
import logoPartner_idf from '../res/logoPartner_idf.svg';
import logoPartner_stationf from '../res/logoPartner_stationf.svg';
import logoPartner_schoolab from '../res/logoPartner_schoolab.png';
import logoPartner_polepixel from '../res/logoPartner_polePixel.svg';
import logoPartner_lincc from '../res/logoPartner_lincc.png';

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignalCellularOffOutlinedIcon from '@mui/icons-material/SignalCellularOffOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';

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
import demoVideoSafari from './mixVitrineSafari.mp4';

import subjectRaw from './subjectRAW.webm';
import subjectAlpha from './subjectALPHA.webm';
import subjectMix from './subjectMIX.webm';

// import subjectRawSafariIos from './subjectRAW.mp4';
// import subjectAlphaSafariIos from './subjectALPHA.mp4';
// import subjectMixSafariIos from './subjectMIX.mp4';

import subjectRawSafariIos from './subjectRAWSafari.mp4';
import subjectAlphaSafariIos from './subjectALPHASafari.mp4';
import subjectMixSafariIos from './subjectMIXSafari.mp4';
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  subjectTitleCSS,
  subjectVideoCSS,
  punchlineCSS,
  mainVideoCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  iconContainerCSS,
  thirdPageContainerCSS,
  subtextCSS,
} from '../styles';

import RevealityLogo from '../bits/RevealityLogo/RevealityLogo';
import RevealityFooter from './../bits/RealFooter/Footer';

const CLIENTS_LOGOS = [
  { imageUrl: logoClient_cube, siteUrl: 'https://lecube.com/', scale: 0.7 },
  { imageUrl: logoClient_nat, siteUrl: 'https://www.natachapaquignon.com/' },
  { imageUrl: logoClient_saintex, siteUrl: 'https://saintex-reims.com/' },
  { imageUrl: logoClient_snzc, siteUrl: 'https://en.snzn.org/' },
  { imageUrl: logoClient_aadn, siteUrl: 'https://aadn.org' },
];

const PARTNERS_LOGOS = [
  { imageUrl: logoPartner_idf, siteUrl: 'https://www.iledefrance.fr' },
  { imageUrl: logoPartner_stationf, siteUrl: 'https://stationf.co/' },
  { imageUrl: logoPartner_schoolab, siteUrl: 'https://www.theschoolab.com/' },
  { imageUrl: logoPartner_polepixel, siteUrl: 'https://polepixel.fr/' },
  { imageUrl: logoPartner_lincc, siteUrl: 'https://lincc.parisandco.paris/' },
];
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
            <video autoPlay muted loop playsInline css={mainVideoCSS}>
              <source src={demoVideo} type="video/webm" />
              <source src={demoVideoSafari} type="video/mp4" />
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

            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectRaw} type="video/webm" />
              <source src={subjectRawSafariIos} type="video/mp4" />
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
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectAlpha} type="video/webm" />
              <source src={subjectAlphaSafariIos} type="video/mp4" />
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
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectMix} type="video/webm" />
              <source src={subjectMixSafariIos} type="video/mp4" />
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

        <div css={responsiveContainerCSS}>
          <div
            css={{
              ...responsiveContainerInsideCSS,
              display: 'block',
              paddingBottom: '56.25%',
              position: 'relative',
              height: '0px',
              // width: '90vw',
              overflow: 'hidden',
              margin: '0px',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            <iframe
              css={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/I7a_KLPCZgs?rel=0&color=white&modestbranding=1"
              title="How to create with Reveality (Video)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h3 css={punchlineCSS}>Ils travaillent avec nous</h3>
        <div css={responsiveContainerCSS}>
          <div css={responsiveContainerInsideCSS}>
            <div css={clientsLogoGridCSS}>
              {CLIENTS_LOGOS.map((logo) => {
                return (
                  <a
                    key={logo.siteUrl}
                    css={{
                      ...clientLogoCSS,
                      ...imageBackgroundCSS(logo.imageUrl),
                      transform: `scale(${logo.scale ? logo.scale : 1})`,
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={logo.siteUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <h3 css={punchlineCSS}>Ils nous accompagnent</h3>
        <div css={responsiveContainerCSS}>
          <div css={responsiveContainerInsideCSS}>
            <div css={clientsLogoGridCSS}>
              {PARTNERS_LOGOS.map((logo) => {
                return (
                  <a
                    key={logo.siteUrl}
                    css={{
                      ...clientLogoCSS,
                      ...imageBackgroundCSS(logo.imageUrl),
                      transform: `scale(${logo.scale ? logo.scale : 1})`,
                    }}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={logo.siteUrl}
                  />
                );
              })}
            </div>
          </div>
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
