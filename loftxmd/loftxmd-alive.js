const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `
╔═══════════════════╗
> █░░█ █▀█ █▀█ ▀▀█
> █▄▄█ █▄█ █▄█ █▄█     
╚═══════════════════╝
STATUS: [ ONLINE ]
MODE:   [ PUBLIC ]
VERSION: ${settings.version}
═════════════════════
⚡ FEATURES ⚡
- Group Management
- Antilink Protection
- Fun Commands
- And more!
═════════════════════
Type *.menu* for full command list
`;

        // Send text message
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398106360290@newsletter',
                    newsletterName: 'Smash',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

        // Send image (link mpya)
        await sock.sendMessage(chatId, {
            image: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/smash.jpeg' },
            caption: '> SIR LOFT'
        }, { quoted: message });

        // Send audio (link mpya)
        await sock.sendMessage(chatId, {
            audio: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/sigmaaa.mp3' },
            mimetype: 'audio/mpeg'
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
