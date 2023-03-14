import React from 'react';
import NewsletterView from './NewsletterView';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { Segment, Form } from 'semantic-ui-react';
import { SidebarPortal, Field, Icon } from '@plone/volto/components';
import tableSVG from '@plone/volto/icons/table.svg';

import getSchema from './schema';

const NewsletterEdit = (props) => {
  const schema = getSchema(props);

  return (
    <>
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
