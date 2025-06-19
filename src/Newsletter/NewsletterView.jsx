import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { BodyClass } from '@plone/volto/helpers';
import { getImageScaleParams } from '@eeacms/volto-newsletter-block/Newsletter/helpers';

import './newsletterBlock.less';

const NewsletterView = (props) => {
  const { imgSrc, buttonText, text, headline, buttonLink, openLinkInNewTab } =
    props.data;

  const imageScaleParams = getImageScaleParams(imgSrc, 'great');
  return (
    <>
      <BodyClass className="with-newsletter-block" />
      <div className="newsletterBlock has--size--half_width_left">
        <div className="newsletter">
          {imgSrc && (
            <div className="newsletterBlockLeftSide">
              <img
                className="newsletterBlockImage"
                src={imageScaleParams?.download}
                width={imageScaleParams?.width ?? '100%'}
                height={imageScaleParams?.height ?? 'auto'}
                alt=""
                loading="lazy"
              />
            </div>
          )}
          <div className="newsletterBlockRightSide">
            <h2 className="newsletterBlockHeadline">
              <a href="/newsletters-form">{headline}</a>
            </h2>
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
      </div>
    </>
  );
};

export default compose(injectIntl, withBlockExtensions)(NewsletterView);
