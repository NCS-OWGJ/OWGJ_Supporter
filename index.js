const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// メッセージ取得
client.on('message', msg => {
  if (msg.content === 'test') {
    msg.reply('Bot呼び出しテストです。こんにちは、'+msg.author.username+'さん。');
  }
});

client.login('トークン');