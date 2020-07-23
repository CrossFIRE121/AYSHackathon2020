const Discord = require("discord.js")
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed() // this command creates a new embed for the help command, and lists all of the commands in new fields, the .setColor sets the sidebar color, while other miscelaneous things make the embed not look so ugly.
    .setTitle('AYS Hackathon Submission Bot Help')
    .addField("ays!ping","get the ping time of the bot")
    .addField("ays!gif <query> ","search for a gif on Giphy")
    .addField("ays!cleverbot", "tells you how to use cleverbot")
    .addField("ays!yt <query>", "searches youtube for the query of your choice")
    .addField("ays!8ball <question>","get an answer to a question")
    .addField("ays!clap @someone","clap someone")
    .addField("ays!coinflip","flip a coin")
    .addField("ays!weather <location>","get the weather for a certain location")
    .setFooter('Created by CrossFIRE121, for the AYS Hackathon Competition.')
    return message.channel.send(embed);
};