import React from 'react';
import { Link, graphql } from 'gatsby';
import MainLayout from '../layout/MainLayout';
import SEO from '../bits/SEO/SEO';
import { educationPageStrings } from '../locales/strings';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';

import SchoolIcon from '@material-ui/icons/School';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

import './index.scss';
import './PhoneMockup.scss';
import './basics.scss';
import './ShowcasePage.scss';

import MailForm from '../bits/mailchimpFormReveality/mailchimpFormPrivacyFriendly';

import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  joinBetaCallCSS,
  subjectTitleCSS,
  punchlineFeatureCSS,
  clientsLogoGridCSS,
  clientLogoCSS,
  imageBackgroundCSS,
  iconContainerCSS,
  thirdPageContainerCSS,
  subtextCSS,
} from '../styles';

import { CLIENTS_LOGOS } from '../logos';

const MAILCHIMP_URL =
  'https://reveality.us5.list-manage.com/subscribe/post?u=8b4e477d425a1fcb90d90a287&amp;id=7331d8e0bb';

export default function Index({ data, pageContext: { langCode }, location }) {
  const LOCAL = educationPageStrings[langCode];
  const posts = data.allMdx.edges;
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'Education'} langCode={langCode} />
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
        <h1
          css={{ ...subjectTitleCSS, textAlign: 'center', marginTop: '4rem' }}
        >
          {LOCAL['punchline']}
        </h1>

        <div css={responsiveContainerCSS}>
          <div
            css={{
              ...responsiveContainerInsideCSS,
              display: 'block',
              paddingBottom: '56.25%',
              position: 'relative',
              height: '0px',
              overflow: 'hidden',
              margin: '0px',
              marginBottom: '4rem',
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4rem',
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
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <TouchAppOutlinedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>{LOCAL['Simple, Intuitif']}</span>
              </h3>
              <p
                css={subtextCSS}
              >{LOCAL[`Un smartphone et une appli, c'est tout ! Les participants peuvent cr??er de A ?? Z sans ??tre bloqu??s techniquement.`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <FlashOnRoundedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>{LOCAL[`Flow Rapide`]}</span>
              </h3>
              <p
                css={subtextCSS}
              >{LOCAL[`5 minutes suffisent pour cr??er une sc??ne. C'est du temps gagn?? pour tester, explorer, recommencer.`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <PlayCircleFilledIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>{LOCAL[`Restitution simple`]}</span>
              </h3>
              <p
                css={subtextCSS}
              >{LOCAL[`R??cup??rez les cr??ations en vid??o, diffusables sur toutes les plateformes existantes.`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <HomeRoundedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>
                  {LOCAL[`Accessible ?? la maison`]}
                </span>
              </h3>
              <p css={subtextCSS}>{LOCAL[`L???appli fonctionne sur tous les t??l??phones gratuitement. Les participants peuvent s???emparer de l???outil pendant, et apr??s l???atelier.`]}</p>
            </div>

            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <BuildOutlinedIcon
                  fontSize="large"
                  style={{ color: '#649de3' }}
                />
                <span style={{ marginTop: '1em' }}>
                  {LOCAL[`Mise en place facile`]}
                </span>
              </h3>
              <p
                css={subtextCSS}
              >{LOCAL[`Aucune contrainte d???espace, de mat??riel ou d'??clairage pour commencer ?? cr??er.`]}</p>
            </div>
            <div css={thirdPageContainerCSS}>
              <h3 css={{ ...punchlineFeatureCSS, ...iconContainerCSS }}>
                <SchoolIcon fontSize="large" style={{ color: '#649de3' }} />
                <span style={{ marginTop: '1em' }}>{`Mode Enseignant`}</span>
              </h3>
              <p
                css={subtextCSS}
              >{LOCAL[`D??roulez vos ateliers et acc??dez au travail des ??l??ves depuis l'appli.`]}</p>
            </div>
          </div>
        </div>

        <h2 css={{ ...subjectTitleCSS, textAlign: 'center' }}>
          {LOCAL['Ils participent au projet']}
        </h2>

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

        <div css={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <Link to={'/'} className={'RevLink'}>
            {LOCAL[`Retour ?? l'accueil`]}
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export const indexPageQuery = graphql`
  query EducQuery {
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
