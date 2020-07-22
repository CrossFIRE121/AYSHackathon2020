# AYSHackathon2020
My submission for AYS Hackathon 2020. Includes the readme, the index.js file, and that's about it.

# What is this?
This is my submission for the Advertise Your Server Hackathon 2020 Event. This submission is a discord bot with several entertainment capabilites, including a Cleverbot PM chat that can be initated just by sending a message to the bot, a **decent** YouTube search option to pull videos from YouTube, an image search from Giphy, and a weather command.. It also includes some non-api calling features, such as a dice roll, and 8ball, funny jokes, and more.

# How does it do this?
A few of these commands use API calls to utilize themselves, I will explain below.

**Cleverbot**

Sadly the Cleverbot API became a pay-to-use service a while back, luckily anyone that had used the API before it was pay-to-use was still able to use it for free. The essential messages behind the API come from the **cleverbot-node** NodeJS package and for it to work, it requires the API key in the configuration. The code I use does nothing to effect the messages, since the messages you send are sent to the API and then it sends a message back that is somewhat similar to what you wrote. It is almost like you are chatting with an AI, but more dysfunctional. One issue I suffered with this was the bot constantly talking to itself. Below is a screenshot linking to this issue.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/Screen%20Shot%202020-07-21%20at%2011.35.12%20PM.png)

To rememdy this I had to add the line of code that prevents the bot from being botcepted, and that issue was no more. Below is another screenshot, showing the API in action, as stated, the conversations can be a bit weird, but they are usually not too bad.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/screencap2.png)

Since the Cleverbot only works in the PMs of users, I set a command -- !cleverbot -- to alert people on how to use the Cleverbot.

**YouTube Search**

This one is a bit shaky but it gets the job done. This command calls on the YouTube Data V3 API to find what your query is saying. The Node package **node-superfetch** is used to find the query from the command, then spit it at the API. The api then finds a result from the query, and gives it back in an embedded message. This one is fairly simple, but below is a screenshot showing the command in action.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/screencap3.png)

**Giphy**

Much similar to the YouTube API, this Giphy API simply grabs the arguments from the !gif command, and spits them through the preset link on Giphy, then in return you get a random gif every time, pertaining to the search. Below is a screenshot showing how this works and it in action.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/screencap4.png)

As you can see, they are different gifs.

**8Ball, RPS, and others**

Most of these extra commands use the Math aspect of Discord.JS, meaning that if you were to put in three values, such as 1, 2, and 3 per se, the Math code would randomly chose one of these, and as an 8Ball does such, so does the bot.

# Hosting!
Hosting a discord bot is a very important aspect of its uptime. Whether or not you're using AWS, Heroku, Cloud9, SkySilk, or others, these hosts make it very easy for you to have your discord bot running 24/7. My personal discord bot, along with this one, are being hosted by my Amazon EC2 instance. This instance is an Ubuntu 18.04 LTS build, and utilizes 1 core of processing power along with one gigabyte of RAM. The terminal is used for the VPS, and using PM2.


