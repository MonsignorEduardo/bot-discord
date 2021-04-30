import starDiscord from './discord';

if (process.env.NODE_ENV === 'LOCAL') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

starDiscord();
