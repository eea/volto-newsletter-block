import React from 'react';
import {
  flattenToAppURL,
  isInternalURL,
  withBlockExtensions,
} from '@plone/volto/helpers';
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';

import './newsletterBlock.less';

const NewsletterView = (props) => {
  const history = useHistory();
  const { imgSrc, buttonText, text, headline } = props.data;

  return (
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
        <h1 className="newsletterBlockHeadline">{headline}</h1>

        <div>
          {buttonText && (
            <>
              <p className="newsletterBlockText">{text}</p>
              <div className="newsletterBlockForm">
                <Button
                  onClick={() => history.push('/newsletter-form')}
                  className="newsletterBlockButton"
                >
                  {buttonText}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default compose(injectIntl, withBlockExtensions)(NewsletterView);
