var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    logger.info('F is now online');
    logger.info('Now paying respect');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == 'f') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        
        switch(cmd) {
            // f
            case '':
                bot.sendMessage({
                    to: channelID,
                    message: 'F'
                });
            break;
         }

         switch(cmd) {
            // f_
            case '_':
                bot.sendMessage({
                    to: channelID,
                    message: "https://tenor.com/view/press-f-pay-respect-coffin-burial-gif-12855021"
                });
            break;
         }

         switch(cmd) {
            // f***
            case 'uck':
                bot.sendMessage({
                    to: channelID,
                    message: 'No U'
                });
            break;
         }
     }
});
