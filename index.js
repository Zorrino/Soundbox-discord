const Discord = require('discord.js')
const bot = new Discord.Client()

const broadcast = bot.createVoiceBroadcast();

bot.on('ready', function(){
	bot.user.setGame('rako help for commands !');	
})


bot.on('message', function (message){
	if (message.content == 'rako popopo'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./popopo.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply('Tu dois rejoindre un channel vocal d abord !');
		}
	}
	if (message.content == 'rako fucking'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./fucking.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply('Tu dois rejoindre un channel vocal d abord !');
		}
	}
	
	if (message.content == 'rako leave'){
		if (message.guild.voiceConnection) {
			message.guild.voiceConnection.disconnect()
			broadcast.end();
			}
		} 
	})
	
bot.login('MzA2NDUwMTE4MjgwODcxOTM2.Dst4Lw.wfEfgbBpGABax9c-BXFnexMGpwQ')