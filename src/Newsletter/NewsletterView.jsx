import React from 'react';
import {
  flattenToAppURL,
  isInternalURL,
  withBlockExtensions,
} from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { useHistory } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { BodyClass } from '@plone/volto/helpers';

import './newsletterBlock.less';

const NewsletterView = (props) => {
  const {
    imgSrc,
    buttonText,
    text,
    headline,
    buttonLink,
    openLinkInNewTab,
  } = props.data;

  return (
    <>
      <BodyClass className="with-newsletter-block" />
      <div className="newsletterBlock">
        {imgSrc && (
          <div className="newsletterBlockLeftSide">
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
          </div>
        )}
        <div className="newsletterBlockRightSide">
          <h2 className="newsletterBlockHeadline">{headline}</h2>

          <div>
            {buttonText && (
              <>
                <p className="newsletterBlockText">{text}</p>
                <div className="newsletterBlockForm">
                  <UniversalLink
                    href={buttonLink ?? ''}
                    openLinkInNewTab={openLinkInNewTab}
                    className="ui button newsletterBlockButton"
                  >
                    {buttonText}
                  </UniversalLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default compose(injectIntl, withBlockExtensions)(NewsletterView);
