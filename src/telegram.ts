import {Telegraf} from 'telegraf';

export default function startTelegram(tokenTelegram: string) {
  const bot = new Telegraf(tokenTelegram);
  bot.start(ctx => ctx.reply('Welcome'));
  bot.help(ctx => ctx.reply('Send me a sticker'));
  bot.hears('carlos', ctx => ctx.reply('sssss'));
  bot.on('sticker', ctx => ctx.reply('👍'));
  bot.hears('hi', ctx => ctx.reply('Hey there'));
  bot.hears('cris', ctx => ctx.reply('No'));
  bot.launch();

  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
