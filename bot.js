const mineflayer = require('mineflayer');
const config = require('./config.json');

const bot = mineflayer.createBot({
  host: config.server.ip,
  port: config.server.port,
  username: config.bot.username
});

bot.once('spawn', () => {
  console.log('Bot is online and ready to be AFK.');
  bot.chat('I\'m online and ready to be AFK.');
});

bot.on('login', () => {
  setInterval(() => {
    bot.setControlState('forward', true);  // Start walking forward
    bot.lookAt(bot.entity.position.offset(0, 1.6, 0));  // Look straight ahead
  }, 5000);  // Repeat every 5 seconds
});
