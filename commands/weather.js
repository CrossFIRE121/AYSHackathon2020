const weather = require('weather-js')
const Discord = require("discord.js")
exports.run = (client, message, args) => {
weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
    if (err) message.channel.send(err); //sets the things such as how the temperature should be presented

    
    if (result.length === 0) {
        message.channel.send('**Please enter a valid location.**') //makes sure a location is presented that is valid
        return;
    }

   
    var current = result[0].current; 
    var location = result[0].location;

   
    const embed = new Discord.MessageEmbed() //the embed with all of the information, and this commands from the weather-js node package
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00AE86)
        .addField('Timezone',`UTC${location.timezone}`, true)
        .addField('Degree Type',location.degreetype, true)
        .addField('Temperature',`${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds',current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)

        
        message.channel.send({embed});

  });
}