require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const schedule = require('node-schedule');

const token = process.env.TOKEN;
const myChatId = process.env.CHAT_ID;

const bot = new TelegramBot(token, { polling: true });

const messages = [
    "Hey Jude, time to lock in and code like a pro! 🚀",
    "Focus, grind, and make it happen! 💻🔥",
    "The best time to code is now—let's go! 💪",
    "Discipline is the bridge between goals and success. Lock in! 🛠️",
    "Every line of code brings you closer to greatness. Stay sharp! ✨",
];

const sendMotivation = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    bot.sendMessage(myChatId, message);
};

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hey Jude! I'll motivate you every 30 minutes to lock in and code hard!");
});

schedule.scheduleJob('*/30 * * * *', sendMotivation);

console.log("Motivational bot is running...");
