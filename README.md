# easyQrGeneratorBot

## Overview
This Telegram bot is a QR code generator built using Node.js. It allows users to send a link, and in return, the bot generates a QR code corresponding to the provided link and sends it back to the user.

## Features
* Generates QR codes from provided links.
* Utilizes the qr-image module for QR code creation.
* Built with Node.js and the node-telegram-bot-api module.

## Prerequisites
Before running the bot, make sure you have the following installed:

* Node.js
* npm (Node.js package manager)

## Installation
1. Clone the repository:
```
git clone https://github.com/your-username/your-qr-code-bot.git
```

2. Change into the project directory:
```
cd your-qr-code-bot
```

3. Install dependencies:
```
npm install
```

4. Set up your Telegram bot:  
   Create a new bot on Telegram via BotFather.  
   Copy the generated bot token.

5. Configure your bot:  
   Add your Telegram bot token to the Token variable inside bot.js.

## Usage
1. Run the bot:
```
nodemon bot.js
```

2. Start a conversation with your bot on Telegram:  
  Send the bot a "/start" message.

3. Send the bot a link:  
  The bot will respond with a QR code image corresponding to the provided link.

## Dependencies
* qr-image: A QR code generator for Node.js.
* node-telegram-bot-api: Telegram Bot API wrapper for Node.js.
