import * as express from 'express';
import starDiscord from './discord';

const app = express();
app.get('/', (_req, res) => {
  res.send('Hello world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

starDiscord();
