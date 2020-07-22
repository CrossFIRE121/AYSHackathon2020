const Discord = require("discord.js"); //lines 1-13 is just a bunch of compilers and info for the bot
const Cleverbot = require("cleverbot-node");
const client = new Discord.Client();
const clbot = new Cleverbot;
clbot.configure({botapi: "CC7e8ESGNniBWBgJrGvDDGdnydA"});
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAHk5kkOysjoUX-ovfLnLqKtNIPqid99ng");
const queue = new Map();
const search = require('youtube-search')
const request = require("node-superfetch");
const weather = require('weather-js')
const prefix = "ays!"
 
client.on("message", async message => { //<--this is the opening line for the bot, if this is not here, the bot does not work
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  if(message.author.bot) return; //<-- this line is keeping the bot from responding to other bots, or, because of Cleverbot, itself
  if (message.channel.type === "dm") {// lines 9-18 is the cleverbot code, this command connects to the api and lets you interact with the api
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {     
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
  if(message.content.startsWith(prefix+'ping')){ //this is the ping command, very simply gets the ping of the bot
    message.channel.send(`Your ping time is ${client.ws.ping} milliseconds!`)
  }
  if(message.content.startsWith(prefix+'cleverbot')){ //this command just tells people what to do
    message.channel.send(`Head on over to your DM's to mess with Cleverbot.`)
  }
  if(message.content.startsWith(prefix+'help')){
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
  }

  if(message.content.startsWith(prefix+'yt'))
    try {
        const query = args.join(` `);
        const { body } = await request
          .get('https://www.googleapis.com/youtube/v3/search')
          .query({
            part: 'snippet',
            type: 'video',
            maxResults: 1,
            q: query,
            key: "AIzaSyAHk5kkOysjoUX-ovfLnLqKtNIPqid99ng" //all of this code essentially takes the query you searched, plugs it into a link, and pulls back a video on youtube pertaining to the search
          });
        if (!body.items.length) return funcs.send('No results found for ' + query + ".");
        const embed = new Discord.MessageEmbed()
          .setTitle(body.items[0].snippet.title)
          .setDescription(body.items[0].snippet.description)
          .setAuthor(`Searched - ${body.items[0].snippet.channelTitle}`)
          .setURL(`https://www.youtube.com/watch?v=${body.items[0].id.videoId}`)
          .setThumbnail(body.items[0].snippet.thumbnails.default.url);
        message.channel.send(embed).catch(console.error);
      } catch (err) {
        if (err.status === 404) return msg.say('Could not find any results.');
        console.log(err);
        return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
    }
    var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient("p5l1h8Td14QqYRy84VAhndU8CgfmJjVc")
    if (message.content.startsWith(`${prefix}gif`)) {
      
      giphy.search('gifs', { "q": message.content.substring(5) }).then((response) => {
          var totalResponses = response.data.length;
          var responseIndex = Math.floor((Math.random() * 100) + 1) % totalResponses;
          var finalResponse = response.data[responseIndex]; //same thing with the youtube thing as to here, uses the api so spit back the query you searched

        
          message.channel.send("", { files: [finalResponse.images.fixed_height.url] })
      }).catch(() => {
          message.channel.send("Error finding gif...");
      })
  }
  if (message.content.startsWith(prefix+"coinflip")) {
    var coin = ['You fliped a tails!', "You fliped a heads!"];
    message.channel.sendMessage(coin[Math.floor(Math.random () * coin.length)]); // simply a math command
   };

  if (message.content.startsWith(prefix+'8ball')) {
    if(!args.length) return message.channel.send('You didnt provide anything to 8ball.')
    var yn = ['Yes!','Nope...','Maybe!','Probably!','Probably Not...'];
    message.channel.send(yn[Math.floor(Math.random () * yn.length)]); //simply a math command
   };

   if (message.content.startsWith(prefix+"clap")) {
    const user = message.mentions.users.first();
   if (!user) message.channel.send(`:clap: You just clapped yourself. :clap: :joy:`)
   if (user) message.channel.send(`:clap: ${user} has just been clapped. :clap:`) //claps the user you mentioned by pulling the mention from the command
  };

  if(message.content.startsWith(prefix+'weather'))
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

  })

});

client.login('NzM0OTMwOTE4OTgwMDU5MTUx.XxY3xw.Zo-GGNyCqS-ndz41C7-pqYZ1TbU')