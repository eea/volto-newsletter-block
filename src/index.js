import emailSVG from '@plone/volto/icons/email.svg';
import NewsletterView from './Newsletter/NewsletterView';
import NewsletterEdit from './Newsletter/NewsletterEdit';

const applyConfig = (config) => {
  config.blocks.blocksConfig.newsletter = {
    id: 'newsletter',
    title: 'Newsletter',
    icon: emailSVG,
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
  return config;
};

export default applyConfig;
