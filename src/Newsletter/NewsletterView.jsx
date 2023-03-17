import React, { useState } from 'react';
import {
  flattenToAppURL,
  isInternalURL,
  withBlockExtensions,
} from '@plone/volto/helpers';
import { Input, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { defineMessages, injectIntl } from 'react-intl';
import { compose } from 'redux';

import './newsletterBlock.less';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/g;

const messages = defineMessages({
  EmailInvalid: {
    id: 'Please enter a valid email adress',
    defaultMessage: 'Please enter a valid email adress',
  },
});

const NewsletterView = (props) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const history = useHistory();
  const { imgSrc, buttonText, headline } = props.data;

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
            <div className="newsletterBlockForm">
              <Input
                type="email"
                id="emailId"
                placeholder="example@example.com"
              />
              <Button
                onClick={() => {
                  const email = document.getElementById('emailId');
                  if (email?.value?.match(emailRegex)) {
                    history.push(`/newsletter-form?email=${email.value}`);
                  } else {
                    setIsEmailValid(!isEmailValid);
                  }
                }}
                className="newsletterBlockButton"
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
        {!isEmailValid && (
          <p className="invalidEmail">
            {props.intl.formatMessage(messages.EmailInvalid)}
          </p>
        )}
      </div>
    </div>
  );
};

export default compose(injectIntl, withBlockExtensions)(NewsletterView);
