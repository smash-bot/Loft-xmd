const os = require('os');
const settings = require('../settings.js');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;
    return time.trim();
}

async function pingCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: 'Pong!' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);

        const botInfo = `
╔════════════════════════════════════╗
║      🛰️ SYSTEM PING REPORT        ║
╠════════════════════════════════════╣
║ Status: ONLINE ✅                  ║
║ Response: ${ping} ms ⚡            ║
║ Uptime: ${uptimeFormatted}         ║
║ Timestamp: ${new Date().toISOString().replace('T', ' ').slice(0, 19)} 🗓️ ║
║ Mode: PUBLIC 🌍                    ║
║ Version: 1.0.0 🛠️                  ║
║ Owner: @Sir Loft 👤                ║
╠════════════════════════════════════╣
║ INFO:                             ║
║ - Bot operational, no issues. 👍   ║
║ - For help:!help or contact admin.🆘║
╚════════════════════════════════════╝`.trim();

        // Tuma picha na caption ya muundo
        await sock.sendMessage(chatId, { 
            image: { url: 'https://raw.githubusercontent.com/smash-bot/Loft-xmd/main/loft-image/hacker.jpeg'' }, 
            caption: botInfo 
        }, { quoted: message });

        // Tuma audio
        await sock.sendMessage(chatId, { 
            audio: { url: 'https://raw.githubusercontent.com/smash-bot/Smash-v1/main/assets/loft.mp3' }, 
            mimetype: 'audio/mp3', 
            ptt: true
        }, { quoted: message });

    } catch (error) {
        console.error('Error in ping command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get bot status.' });
    }
}

module.exports = pingCommand;