exports.run = (client, message, args) => {
const user = message.mentions.users.first();
   if (!user) message.channel.send(`:clap: You just clapped yourself. :clap: :joy:`)
   if (user) message.channel.send(`:clap: ${user} has just been clapped. :clap:`)
}