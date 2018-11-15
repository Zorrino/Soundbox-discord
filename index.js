const Discord = require('discord.js')
const bot = new Discord.Client()

const broadcast = bot.createVoiceBroadcast();

bot.on('ready', function(){
	bot.user.setActivity('rako help for commands !');	
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
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
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
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako risitas'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./risitas.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako shooting'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./shooting.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako sale'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./sale.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako russie'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./russie.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako camera'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./camera.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako RUN'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./RUN.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako 911'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./911.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako thomas'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			message.delete()
			.then(msg => console.log(`Deleted message from ${msg.author.username}`))
			broadcast.playFile('./thomas.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako non'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./non.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako kaamelott'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./kaamelott.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako nils'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./nils.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == "rako C'est mon rêve"){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./C MON REVE.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako AHH'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./AHH.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako la boule magique'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./boule magique.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako calmez vous'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./calmez vous.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako faut le savoir'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./faut le savoir.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako triple'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./triple.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako j ai maaal'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./jai maaal.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako big burger'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./BIG BURGER.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako happen to me'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./happen to me.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako wombo combo'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./wombo combo.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako to be continued'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./TO BE CONTINUED.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako whats up fuckers'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./Whars up fuckers.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako see you again'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./see you again.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako ferme sa gueule et menage'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./ferme sa gueule et menage.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako 1998'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./1998.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako fat guy'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./fatguy.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako deja vu'){
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			broadcast.playFile('./deja vu.mp3');
			for (const connection of bot.voiceConnections.values()) {
				connection.playBroadcast(broadcast);
			}
		}
		 
		else {
			message.reply("Tu dois rejoindre un channel vocal d'abord !");
		}
	}
	
	if (message.content == 'rako leave'){
		if (message.guild.voiceConnection) {
			message.guild.voiceConnection.disconnect()
			broadcast.end();
			}
		} 
	})
	
bot.login('dont take my token lol ')
