const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `
╔════════════════════════════╗
║      LOFT BOT STATUS       ║
╠════════════════════════════╣
║   ██████╗  ██████╗  ██████╗ ║
║  ██╔═══██╗██╔═══██╗██╔═══██╗║
║  ██║   ██║██║   ██║██║   ██║║
║  ██║   ██║██║   ██║██║   ██║║
║  ╚██████╔╝╚██████╔╝╚██████╔╝║
║   ╚═════╝  ╚═════╝  ╚═════╝ ║
╠════════════════════════════╣
║ STATUS  : ONLINE            ║
║ MODE    : DEBUG / TESTING   ║
║ VERSION : 1.0.0             ║
║ OWNER   : LOFT              ║
╠════════════════════════════╣
║ ⚡ FEATURES IN DEBUG MODE:   ║
║ - Crash Logs               ║
║ - Auto Recovery            ║
║ - Notification Alerts     ║
╚════════════════════════════╝`;

        const aliveCommand = async (sock, chatId, message, aliveMessage) => {
  try {
    // Send image with caption
    await sock.sendMessage(chatId, {
      image: { url: 'https://raw.githubusercontent.com/smash-bot/Smash-v1/main/assets/Loft.jpeg' },
      caption: aliveMessage,
      contextInfo: {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363398106360290@newsletter',
          newsletterName: '*SMASH-V1* 💥',
          serverMessageId: -1
        }
      }
    }, { quoted: message });

    // Send audio
    await sock.sendMessage(chatId, {
      audio: { url: 'https://raw.githubusercontent.com/smash-bot/Smash-v1/main/assets/loft.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: message });

  } catch (error) {
    console.error('Error in alive command:', error);
    await sock.sendMessage(chatId, { text: aliveMessage });
  }
}

module.exports = aliveCommand;