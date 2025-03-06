import { Bot } from 'grammy'
import { mainKeyboardLayout } from './src/keyboards'

const bot = new Bot(process.env.BOT_TOKEN)

bot.command('start', ctx =>
  ctx.reply(
    'Welcome! Up and running. \n\n<b>👾 Save a bunch</b> - allows you to save a bunch of urls at once',
    {
      reply_markup: mainKeyboardLayout,
      parse_mode: 'HTML',
    }
  )
)

bot.hears('👾 Save a bunch of urls', ctx => {
  ctx.reply(`Send me urls in following format:
  
  url1
  url2
  url3
  
  each on separate line`)
})

bot.start()
