import TelegramBot from "node-telegram-bot-api";
import qr from "qr-image";
import fs from "fs";

const token = "INSERT_YOUR_TOKEN_HERE";
const bot = new TelegramBot(token, { polling: true });
var started;

function isValidUrl(string) {
	try {
		new URL(string);
		return true;
	} catch (err) {
		return false;
	}
}

bot.on("message", (msg) => {
	const chatId = msg.chat.id;
	const messageText = msg.text;

	if (messageText === "/start") {
		if (!started) {
			started = true;
			bot.sendMessage(
				chatId,
				"Welcome to the Qr Generator bot! Send me a link and you shall receive your QR Code image."
			);
		}
	} else if (started) {
		var url = messageText;
		if (!isValidUrl(messageText)) {
			url = `https://${messageText}`;
		}
		if (isValidUrl(url)) {
			const photoPath = "qrcode.png";
			try {
				fs.unlinkSync(photoPath);
			} catch (err) {
				//File already deleted.
			}
			var qrCode = qr.image(url, { type: "png" });
			var writeStream = fs.createWriteStream(photoPath);
			qrCode.pipe(writeStream);
			writeStream.on("finish", () => {
				bot.sendPhoto(chatId, photoPath, {
					caption: `QR Code of ${url}`,
				});
			});
		}
	}
});
