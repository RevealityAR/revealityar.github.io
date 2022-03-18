import React from 'react';
import {buttonCSS, form__groupCSS, form__fieldCSS, form__labelCSS, formCSS} from './styles';



interface OwnProps {
  callName: string;
  uniqueId: string;
  mailchimpURL: string;
}

export default function emailListForm({ callName, uniqueId, mailchimpURL }: OwnProps) {

  return (
      <>
      {/* <iframe name="dummyframe" id="dummyframe" style={{display: 'none'}}></iframe> */}
    <form
        action={mailchimpURL}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        css={formCSS}
        // target="_blank"
        >
        <div css={form__groupCSS} >

            <input
                type="email"
                autoComplete="email"
                name="EMAIL"
                id={uniqueId}
                aria-label="Email Address"
                placeholder="Email"
                css={form__fieldCSS}
                required
            />
             <label for={uniqueId} css={form__labelCSS} className='formLabel'>
             Email
            </label>


            <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
            >
                <input
                type="text"
                name="b_4ac5129c0337bf44580e1f2b5_b438fc41d3"
                tabIndex={-1}
                defaultValue
                />
            </div>
            <br/><br/>
            <div className="clear"><input type="submit" value={callName} name="subscribe" id="mc-embedded-subscribe" css={buttonCSS} /></div>
            </div>

        <div id="mce-responses" className="">
            <div
            className=""
            id="mce-error-response"
            style={{ display: "none" }}
            />
            <div
            className=""
            id="mce-success-response"
            style={{ display: "none" }}
            />
        </div>
    </form>
    </>
  );
}
