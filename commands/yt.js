const request = require("node-superfetch");
const Discord = require("discord.js");
exports.run = async (client, message, args,) => {
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
};