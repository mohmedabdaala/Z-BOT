const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'


client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});
client.login('temo');
