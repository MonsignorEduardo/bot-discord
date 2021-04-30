import {setIntervalAsync} from 'set-interval-async/fixed';
import * as Discord from 'discord.js';
import axios from 'axios';

import * as comandos from './comandos.json';

const client = new Discord.Client();

// OJO
function ojo(message: Discord.Message) {
  let ojo = 'OJO';
  const max = Math.floor(Math.random() * 20) + 1;
  for (let i = 0; i < max; i++) {
    ojo = ojo + 'O';
  }
  message.channel.send(ojo);
}

// Meme 1
async function meme(message: Discord.Message) {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://meme-api.herokuapp.com/gimme',
    });
    const url: string = response.data.url;
    message.channel.send(url);
  } catch (e) {
    message.channel.send('Peto el meme');
  }
}

//Meme 2

async function meme2(message: Discord.Message) {
  const response = await axios({
    method: 'get',
    url: 'https://www.reddit.com/r/orslokx/top.json?t=week&limit=100',
  });
  const x: string = response.data.data.dist;
  const y: number = +x;
  let isurl = true;
  let url = 'POLLAGORDA69';
  while (isurl) {
    const max = Math.floor(Math.random() * y) + 1;
    //console.log(foo.data.children[max].data);
    try {
      isurl = response.data.data.children[max].data.is_video;
      url = response.data.data.children[max].data.url_overridden_by_dest;
    } catch {
      continue;
    }
  }
  message.channel.send(url);
}

export default function starDiscord() {
  const mapaComandos = new Map(Object.entries(comandos));
  client.login(process.env.DISCORDKEY);

  client.once('ready', () => {
    console.log('Ready!');
    //sendPrices();
  });

  // MAIN
  client.on('message', message => {
    // Chequeamos que no es el bot
    if (message.author.bot) return;

    const mensaje = message.content.toLowerCase();
    if (mensaje.includes('ojo')) return ojo(message);
    if (mensaje.includes('meme')) return meme(message);
    if (mensaje.includes('pito')) return meme2(message);

    mapaComandos.forEach((frase, comando) => {
      if (mensaje.includes(comando)) {
        message.channel.send(frase);
      }
    });
  });

  let workingFlag = false;
  let listaMensajes: Discord.Message[];

  client.on('message', async message => {
    if (message.content === 'Fuck Juan') {
      message.channel.send('Fuck Juan, Who is Juan ?');
      if (!workingFlag) {
        workingFlag = true;
        message.channel.send('Btw im working');
        listaMensajes = await sendPrices();
        working();
      }
    }
  });

  interface quote {
    //price: number;
    [key: string]: any;
  }

  interface Coin {
    name: string;
    symbol: string;
    quote: quote;
    [key: string]: any;
  }
  interface CoinParsed {
    name?: string;
    price?: number;
  }
  let contador = 0;
  function generateEmbed(c: Coin) {
    //['BTC', 'ETH', 'XRP'].includes(c.symbol)
    let iconUlr;
    if (c.symbol === 'BTC')
      iconUlr = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png';
    if (c.symbol === 'ETH')
      iconUlr = 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png';
    if (c.symbol === 'XRP')
      iconUlr = 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png';
    contador++;
    const temp = {
      color: 0x0099ff,
      title: c.name,
      author: {
        name: `Juan Juan ${contador}`,
      },
      thumbnail: {
        url: iconUlr,
      },
      fields: [
        {
          name: 'Precio actual',
          value: c.quote.USD.price,
        },
        {
          name: 'Cambio 1h',
          value: c.quote.USD.percent_change_1h,
          inline: true,
        },
      ],
      timestamp: c.quote.USD.last_updated,
    };
    return temp;
  }

  async function getCoins() {
    try {
      const response = await axios({
        method: 'get',
        url:
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        headers: {
          'X-CMC_PRO_API_KEY': process.env.X_CMC_PRO_API_KEY,
        },
      });
      const coins: Coin[] = response.data.data.slice(0, 10);
      const embeds = coins
        .filter(c => ['BTC', 'ETH', 'XRP'].includes(c.symbol))
        .map(c => generateEmbed(c));
      return embeds;
    } catch (error) {
      console.log(error.response.body);
      return undefined;
    }
  }

  interface Mensaje {
    mensaje: Promise<Discord.Message>;
    moneda: any;
  }

  async function sendPrices() {
    const channel = client.channels.cache.get(
      '794198519690690560'
    ) as Discord.TextChannel;
    const coinEmbeds = await getCoins();
    const mensajes: Promise<Discord.Message>[] = [];
    if (coinEmbeds !== undefined)
      coinEmbeds.forEach(coinEmbed => {
        const mensaje = channel.send({embed: coinEmbed});
        mensajes.push(mensaje);
      });
    return Promise.all(mensajes);
  }
  async function editPrices() {
    const coinEmbeds = await getCoins();
    const mensajes: Promise<Discord.Message>[] = [];
    if (coinEmbeds !== undefined && listaMensajes !== undefined) {
      for (let index = 0; index < listaMensajes.length; index++) {
        mensajes.push(listaMensajes[index].edit({embed: coinEmbeds[index]}));
      }
      return Promise.all(mensajes);
    } else {
      return sendPrices();
    }
  }

  function working() {
    setIntervalAsync(async () => {
      console.log('Price updated');
      listaMensajes = await editPrices();
      console.log('Price Updated');
    }, 300000);
  }
}
