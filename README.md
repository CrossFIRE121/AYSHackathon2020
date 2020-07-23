# AYSHackathon2020
My submission for AYS Hackathon 2020. Includes the readme, the index.js file, the commands, the events, the screenshots, and that's about it. The **prefix** is ays! and the command to get a list of commands is **ays!help.**

# What is this?
This is my submission for the Advertise Your Server Hackathon 2020 Event. This submission is a discord bot with several entertainment capabilites, including a Cleverbot PM chat that can be initated just by sending a message to the bot, a **decent** YouTube search option to pull videos from YouTube, an image search from Giphy, and a weather command. It also includes some non-api calling features, such as a dice roll, and 8ball, funny jokes, and more.

# What Modules does the bot use?
**discord-js:** The obvious part of this, this is the package that you use to connect to the Discord API and make things work all around.
**cleverbot-node:** This node package communicates with the Cleverbot API (which is a delicacy in todays time, since it costs a lot to use the API)
**gihpy-js-sdk-node:** This node package communicates with the Giphy API and is used to spit back gifs from your searches
**node-superfetch:** This node package is used to communicate with the YouTube API and spit back YouTube links from what you searched on the yt command.
**weather-js:** This node package uses an API to find weather for locations specified by you, but it does not require an API key for it to work.

# How does it do this?
A few of these commands use API calls and keys to utilize themselves, I will explain below.

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

**Weather** 

The weather command works with the node module **weather-js** and simply pulls the weather from a certain city. Below is a screenshot showing this in action, and showing how dynamic it is when it comes to the icon, the temp, and more.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/screencap5.png)

**8Ball, RPS, and others**

Most of these extra commands use the Math aspect of Discord.JS, meaning that if you were to put in three values, such as 1, 2, and 3 per se, the Math code would randomly chose one of these, and as an 8Ball does such, so does the bot.

# Hosting!
Hosting a discord bot is a very important aspect of its uptime. Whether or not you're using AWS, Heroku, Cloud9, SkySilk, or others, these hosts make it very easy for you to have your discord bot running 24/7. My personal discord bot, along with this one, are being hosted by my Amazon EC2 instance. This instance is an Ubuntu 18.04 LTS build, and utilizes 1 core of processing power along with one gigabyte of RAM. The terminal is used for the VPS, and using PM2 to make sure when the bot crashes, if it were to, that it would restart the bot to keep alive. Since its Ubuntu and its a VPS, its very adaptive and doesnt suffer from limitations from node modules and packages. Since its considered a SFTP server by FileZilla, by accessing it from the .pem file given to me by Amazon, it is more than easy to add files to the server's SSD. I then can use the terminal on my computer to access the vps from the .pem file and control things such as node modules, pm2, and others. It is essentially another VPS and it is very easy to use if you know what you are doing. Below are screenshots of this happening and programs used to do it.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/screencap6.png) <--This is what you must type when you want to access the VPS terminal.


![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/%5Cscreencap7.png)                     

This is I use to access the files on the server.

![](https://github.com/CrossFIRE121/AYSHackathon2020/blob/master/screencap8.png)

This is the pm2 chart showing the instances running on the server, the index2 and cleverbot-index instances are the bot, while the running index is my peresonal bot. The stopped index is the original code for this bot.


# Updates
Mostly the updates were just updating code and the readme, but I recently revamped the code to be more organized and for the command handler to be put into place, it's been a struggle, but it's working so far. 


![](https://img.shields.io/apm/l/vim-mode)
![](https://img.shields.io/badge/build-passing-green)
![](https://img.shields.io/badge/version-2.0.0-blue)

