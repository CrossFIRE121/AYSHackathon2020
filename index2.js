const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

//COMMAND HANDLER//
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => { //looks for the command specified by the arguments, eg. ays!ping would have this look for ping.js
  if (err) return console.error(err); //if theres no file with that name, then abort 
  files.forEach(file => {
    if (!file.endsWith(".js")) return; //if the file is named ping.exe, not ping.js, abort
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
  //END COMMAND HANDLER//
})

client.login(config.token);
