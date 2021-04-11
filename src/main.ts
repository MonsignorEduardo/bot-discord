import * as Discord from 'discord.js';
import { setIntervalAsync } from 'set-interval-async/fixed';
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
  if (!message.author.bot && message.content.toLowerCase().includes("ojo")) {
    let ojo: string = "OJO"
    var max = Math.floor(Math.random() * 20) + 1;
    for (let i = 0; i < max; i++) {
      ojo = ojo + "O"
    }
    message.channel.send(ojo);
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("pelotas")) {
    message.channel.send('Asi es amigo mis pelotas huelen a pelotazos y no lo soporto mas no lo aguanto mas porque es un olor que induce al hambre y siempre que estoy con una tia dice joder ke pelotazos ya lo se guarra ya lo se tia pues deja de decirmelo y te guardas tu opinion.. Todos los dias igual dicen ke huele a pelotazos y yo ke hago?? Me ducho 6 veces al dia he tenido problemas por frotarme incluso con un estropajo y se me quedo en carne viva para quitar el olor a pelotazos siempre que viene un niño me dice has comido pelotazos?');
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("ilegal")) {
    message.channel.send('En caso de una investigación por parte de cualquier entidad federal o similar, no tengo ninguna participación con este grupo o con las personas que forman parte de él, no sé cómo estoy aquí, probablemente agregado por un tercero, no apoyo ninguna acción por los miembros de este grupo. \n連邦機関などによる調査の場合、私はこのグループまたはその中の人々と関与していません。私はここにどのように住んでいるのか知りません。おそらく第三者によって追加されたものです。このグループのメンバーによる\nIn case of an investigation by any federal entity or similar, I do not have any involvement with this group or with the people in it, I do not know how I am here, probably added by a third party, I do not support any actions by the members of this group.\nIm Falle einer Untersuchung durch eine föderale Einrichtung oder ähnliches habe ich keine Beteiligung an dieser Gruppe oder den Menschen darin, ich weiß nicht, wie ich hier bin, wahrscheinlich von einem Dritten hinzugefügt, ich unterstütze keine Maßnahmen von den Mitgliedern dieser Gruppe.\n如果任何联邦实体或类似机构进行调查，我与该团体或其中的人员没有任何关系，我不知道我在这里，可能是由第三方添加，我不支持任何行动連邦機関などによる調査の場合、私はこのグループまたはその中の人々と関与していません。私はここにどのように住んでいるのか知りません。おそらく第三者によって追加されたものです。このグループのメンバーによる\nIn case of an investigation by any federal entity or similar, I do not have any involvement with this group or with the people in it, I do not know how I am here, probably added by a third party, I do not support any actions the members of');
  }
});


client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("carding")) {
    message.channel.send('Para quienes me preguntaron que era esto esto se llama carding al realizar esta conducta se tipifica el delito de fraude tengan muchisimo cuidado la verdad que esta muy interesante el perfil yo lo estuve viendo la ideologia esta muy bueno eh cuando me titule me gustaria llevar asuntos asi muy padre eh');
  }
});



client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("trabajo")) {
    message.channel.send('He dejado de buscar trabajo :hearts: \nHace casi un mes que la última empresa me dijo que NO para un puesto de Marketing de Contenidos aquí en Bruselas. \nY la verdad es que me alegré un montón. Sentí alivio y pensé: pero Albita, ¿qué pacha? \nDesde entonces estoy en pausa porque necesito ser coherente con lo que siento. Y el descubrimiento ha sido muy simple: siento que el Marketing no está alineado con mis valores personales ni con lo que me motiva.\nPero entonces, ¿qué quieres, Albita, corazón, por dioh, otra vez a cambiar de área? \nY yo qué sé. Necesito seguir dudando para volver a enfocar.\n¿Cuántas veces te apagas las dudas por el miedo a cambiar? :hearts:');
  }
});
client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("mujer")) {
    message.channel.send('las mujeres sois impredecibles, como el bitcoin1!!!!!!!');
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("juanjuan")) {
    message.channel.send('dime :face_with_monocle:');
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("glovo")) {
    message.channel.send('12 eurasos descuento glovo con el code: X1143HJ :smiling_imp: ');
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("uber")) {
    message.channel.send('40 eurasos :flushed: descuento uber-eats con el code: eats-79wwpq :smiling_imp: ');
  }
});
client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("pato")) {
    let ojo: string = "🦆"
    var max = Math.floor(Math.random() * 20) + 1;
    for (let i = 0; i < max; i++) {
      ojo = ojo + "🦆"
    }
    message.channel.send(ojo);
  }
});

client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("hack")) {
    message.channel.send("https://i.kym-cdn.com/entries/icons/original/000/021/807/ig9OoyenpxqdCQyABmOQBZDI0duHk2QZZmWg2Hxd4ro.jpg");
  }
});
client.on('message', message => {
  if (!message.author.bot && message.content.toLowerCase().includes("invite")) {
    message.channel.send("https://discord.com/oauth2/authorize?client_id=785298068014104609&scope=bot");
  }
});

client.on('message', async message => {
  if (!message.author.bot && message.content.toLowerCase().includes("meme")) { 
    const response = await axios({
      method: 'get',
      url:
        'https://meme-api.herokuapp.com/gimme'
    });
    const url:string = response.data.url
    message.channel.send(url);

    }
});

client.on('message', async message => {
  if (!message.author.bot && message.content.toLowerCase().includes("pito")) { 
    const response = await axios({method:'get',url:'https://www.reddit.com/r/orslokx/top.json?/?t=day'});
    const numerajo:number = response.data.data.dist
    var max = Math.floor(Math.random() * numerajo) + 1;

    const url:string = response.data.data.children.max.url_overridden_by_dest
    message.channel.send(url);
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
      const mensaje = channel.send({ embed: coinEmbed });
      mensajes.push(mensaje);
    });
  return Promise.all(mensajes);
}
async function editPrices() {
  const coinEmbeds = await getCoins();
  const mensajes: Promise<Discord.Message>[] = [];
  if (coinEmbeds !== undefined && listaMensajes !== undefined) {
    for (let index = 0; index < listaMensajes.length; index++) {
      mensajes.push(listaMensajes[index].edit({ embed: coinEmbeds[index] }));
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

