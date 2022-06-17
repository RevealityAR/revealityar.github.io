import React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';
import MainLayout from '../layout/MainLayout';
import SEO from '../bits/SEO/SEO';
import { indexPageStrings } from '../locales/strings';

import './index.scss';
import './PhoneMockup.scss';
import './basics.scss';
import './ShowcasePage.scss';

import MailForm from '../bits/mailchimpFormReveality/mailchimpFormPrivacyFriendly';
import demoVideo from './mixVitrine.webm';
import demoVideoSafari from './mixVitrineSafari.mp4';

import subjectRaw from './subjectRAW.webm';
import subjectAlpha from './subjectALPHA.webm';
import subjectMix from './subjectMIX.webm';

// import subjectRawSafariIos from './subjectRAW.mp4';
// import subjectAlphaSafariIos from './subjectALPHA.mp4';
// import subjectMixSafariIos from './subjectMIX.mp4';

import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../logos';

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
  mainViewCSS,
  mainViewInsideCSS,
  logoAndVideoContainerCSS,
  logoContainerCSS,
  punchlineParagraphCSS,
  mainVideoContainerCSS,
  howDoesItWorkCSS,
  howDoesItWorkPartCSS,
  iframeVideoContainerCSS,
  iframeCSS
} from '../styles';

import RevealityLogo from '../bits/RevealityLogo/RevealityLogo';

const MAILCHIMP_URL =
  'https://reveality.us5.list-manage.com/subscribe/post?u=8b4e477d425a1fcb90d90a287&amp;id=7331d8e0bb';

export default function Index({ data, pageContext: { langCode }, location }) {
  const LOCAL = indexPageStrings[langCode];
  const posts = data.allMdx.edges;
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  const [subjectNumber, setSubjectNumber] = useState<number>(1);

  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'Home'} langCode={langCode} />

      <div css={mainViewCSS}>
        <div css={mainViewInsideCSS}>
          <div css={logoAndVideoContainerCSS}>
            <div css={logoContainerCSS}>
              <RevealityLogo />
            </div>

            <h1 css={punchlineCSS}>{LOCAL['punchline']}</h1>
            <p css={punchlineParagraphCSS}>{LOCAL['descriptionPunchline']}</p>
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

          <div css={mainVideoContainerCSS}>
            <video autoPlay muted loop playsInline css={mainVideoCSS}>
              <source src={demoVideo} type="video/webm" />
              <source src={demoVideoSafari} type="video/mp4" />
            </video>
          </div>
        </div>

        <h1 css={{ ...punchlineCSS, marginTop: '8rem', marginBottom: '2rem' }}>
          {LOCAL['howdoesitwork']}
        </h1>
        <div css={howDoesItWorkCSS}>
          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{LOCAL['shoot']}</h3>

            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectRaw} type="video/webm" />
              <source src={subjectRawSafariIos} type="video/mp4" />
            </video>
          </div>
          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{LOCAL['weProcess']}</h3>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectAlpha} type="video/webm" />
              <source src={subjectAlphaSafariIos} type="video/mp4" />
            </video>
          </div>

          <div css={howDoesItWorkPartCSS}>
            <h3 css={subjectTitleCSS}>{LOCAL['reproject']}</h3>
            <video autoPlay muted loop playsInline css={subjectVideoCSS}>
              <source src={subjectMix} type="video/webm" />
              <source src={subjectMixSafariIos} type="video/mp4" />
            </video>
          </div>
        </div>

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
          <div css={iframeVideoContainerCSS}>
            <iframe
              css={iframeCSS}
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
