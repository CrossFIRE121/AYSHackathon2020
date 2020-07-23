exports.run = (client, message, args) => {
    message.channel.send(`Your ping time is ${client.ws.ping} milliseconds!`)
}