export default (props) => {
  return {
    title: 'Newsletter signup',

    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['imgSrc', 'headline', 'text', 'buttonText', 'buttonLink'],
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
    },

    required: [],
  };
};
