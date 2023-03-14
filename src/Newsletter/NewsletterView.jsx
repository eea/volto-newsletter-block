import React from 'react';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Form } from 'semantic-ui-react';

const NewsletterView = (props) => {
  const { imgSrc, buttonText, headline } = props.data;
  console.log(props);

  return (
    <div className="newsletterBlock">
      {imgSrc && (
        <img
          className="newsletterBlockImage"
          src={
            isInternalURL(imgSrc)
              ? `${flattenToAppURL(imgSrc)}/@@images/image`
              : imgSrc
          }
          alt=""
          loading="lazy"
        />
      )}
      <div>
        <h1 className="newsletterBlockHeadline">{headline}</h1>

        <div>
          {buttonText && (
            <div className="newsletterBlockForm">
              <Form.Input placeholder="example@example.com" />
              <UniversalLink
                className="newsletterBlockButton"
                href="/newsletter-form"
                openLinkInNewTab={props.data.openLinkInNewTab}
              >
                {buttonText}
              </UniversalLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterView;
