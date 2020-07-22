# AYSHackathon2020
My submission for AYS Hackathon 2020. Includes the readme, the index.js file, and that's about it.

# What is this?
This is my submission for the Advertise Your Server Hackathon 2020 Event. This submission is a discord bot with several entertainment capabilites, including a Cleverbot PM chat that can be initated just by sending a message to the bot, a **decent** YouTube search option to pull videos from YouTube, an image search, both from Google Images and from Tenor. It also includes some non-api calling features, such as a dice roll, and 8ball, funny jokes, and more.

# How does it do this?
A few of these commands use API calls to utilize themselves, I will explain below.

**Cleverbot**

Sadly the Cleverbot API became a pay-to-use service a while back, luckily anyone that had used the API before it was pay-to-use was still able to use it for free. The essential messages behind the API come from the **cleverbot-node** NodeJS package and for it to work, it requires the API key in the configuration. The code I use does nothing to effect the messages, since the messages you send are sent to the API and then it sends a message back that is somewhat similar to what you wrote. It is almost like you are chatting with an AI, but more dysfunctional. One issue I suffered with this was the bot constantly talking to itself.
