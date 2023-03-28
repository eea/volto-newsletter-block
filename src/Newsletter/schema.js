export default (props) => {
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
