import starDiscord from './discord';
import startTelegram from './telegram';
if (process.env.NODE_ENV === 'LOCAL') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

starDiscord();
startTelegram(process.env.TELEGRAM as string);
