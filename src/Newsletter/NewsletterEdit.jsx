import React from 'react';
import NewsletterView from './NewsletterView';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { SidebarPortal } from '@plone/volto/components';
import './newsletterBlock.less';
import { BodyClass } from '@plone/volto/helpers';

import getSchema from './schema';

const NewsletterEdit = (props) => {
  const schema = getSchema(props);

  return (
    <>
      <BodyClass className="with-newsletter-block" />
      <NewsletterView {...props} />
      <SidebarPortal selected={props.selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          onChangeBlock={props.onChangeBlock}
          formData={props.data}
          block={props.block}
        />
      </SidebarPortal>
    </>
  );
};

export default NewsletterEdit;
