const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

					
					
				


client.login(process.env.BOT_TOKEN); 
