import imageLeft from '@plone/volto/icons/image-left.svg';
import NewsletterView from './Newsletter/NewsletterView';
import NewsletterEdit from './Newsletter/NewsletterEdit';

const applyConfig = (config) => {
  config.blocks.blocksConfig.hero_image_left = {
    id: 'hero_image_left',
    title: 'Hero Image Left',
    icon: imageLeft,
    group: 'common',
    view: NewsletterView,
    edit: NewsletterEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.blocks.blocksConfig.newsletter = {
    ...config.blocks.blocksConfig.hero_image_left,
    restricted: true,
  };

  return config;
};

export default applyConfig;
