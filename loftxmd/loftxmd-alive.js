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

         // Send text message
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398106360290@newsletter',
                    newsletterName: '> LOFT XMD',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

        // Send image
        await sock.sendMessage(chatId, {
            image: { url: 'https://raw.githubusercontent.com/smash-bot/Smash-v1/main/assets/Loft.jpeg'},
            caption: '> LOFT XMD'
        }, { quoted: message });

        // Send audio
        await sock.sendMessage(chatId, {
            audio: { url: 'https://raw.githubusercontent.com/smash-bot/Smash-v1/main/assets/loft.mp3' },
            mimetype: 'audio/mpeg'
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;