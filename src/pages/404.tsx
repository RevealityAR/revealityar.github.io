import React from 'react';
import { notFoundPage } from '../locales/strings';
import { gridContentCSS, styleContentCSS, gridFooter, gridNavContentFooterCSS} from './../layout/MainLayoutStyles';

const footerCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '4rem'
};
 
// TODO: dirty copy paste of MainLayout content to avoid crazy language switcher (because URL doesnt exist)

export default function NotFoundPage({ data, pageContext: { langCode } }) {
  const LOCAL = notFoundPage[langCode];

  return (
    <>
      <div css={gridNavContentFooterCSS}>
        <div css={{...gridContentCSS, ...styleContentCSS}}>
          <div css={footerCSS}>
            <h1>{LOCAL.title}</h1>
            <p>{LOCAL.subtext}</p>
          </div>
        </div>
        <div css={gridFooter}></div>
      </div>
    </>
  );
}
