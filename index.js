// OWGJ_Supporter
// OWGJをサポートします。

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === 'help') {
    msg.reply('現在有用なコマンドはありません。');
  }
})

client.login("MTAxNjkxMzQzODM4MDkyMDg4Mg.GmZXVu.elgIlvt7fF39Pz0AH-Nu8pIsT3znVoqEYR_2lg")
//client.login(process.env.TOKEN)
