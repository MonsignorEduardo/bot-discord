import * as Discord from 'discord.js';
import {setIntervalAsync} from 'set-interval-async/fixed';
import axios from 'axios';

const client = new Discord.Client();

if (process.env.NODE_ENV === "LOCAL") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config()
}
client.login(process.env.DISCORDKEY);

client.once('ready', () => {
  console.log('Ready!');
  //sendPrices();
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("jamas")) {
    message.channel.send(
      'JAMAS:angry: JAMAS HARIA DAÑO A 1 MUJER:woman_gesturing_no:.MIRA:eye: YO HE TENIO 4 NOVIAS FORMALES:kiss_woman_man:TODAS ELLAS ME SIGUEN EN INSTA:camera: LAS TENGO EN WASAP:mobile_phone:pa q vea el respeto:ok_hand:.Y SEGUNDO:two: YO SOY HIJO UNICO:family_man_woman_boy: NO TENGO HERMANAS:x::family_mwgg: PERO SI LAS TUVIERA JAMAS PODRIA PENSAR QUE UN BOBO:rage::punch: las hiciera daño.'
    );
  }
});

client.on('message', message => {
  if (message.content === 'OJO') {
    message.channel.send('OJOOOOO');
  }
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

