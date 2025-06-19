const NewsletterSchema = (props) => {
  return {
    title: 'Hero Image Left',

    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'imgSrc',
          'headline',
          'text',
          'buttonText',
          'buttonLink',
          'openLinkInNewTab',
        ],
      },
    ],

    properties: {
      imgSrc: {
        title: 'Image',
        widget: 'attachedimage',
        selectedItemAttrs: ['image_field', 'image_scales', '@type'],
      },
      headline: {
        title: 'Headline',
      },
      text: {
        title: 'Text',
      },
      buttonText: {
        title: 'Button Text',
      },
      buttonLink: {
        title: 'Button Link',
        widget: 'url',
      },
      openLinkInNewTab: {
        title: 'Open in a new tab',
        type: 'boolean',
      },
    },

    required: [],
  };
};

export default NewsletterSchema;
