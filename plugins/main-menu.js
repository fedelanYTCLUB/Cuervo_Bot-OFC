import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
    try {
    let { exp, diamantes, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    exp = exp || 'Desconocida';
    role = role || 'Aldeano';

    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        await m.react('🌹')
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/ninsr8.jpg')

const vid = ['https://files.catbox.moe/39rx3n.mp4', 'https://files.catbox.moe/5fbi9s.mp4', 'https://files.catbox.moe/biggyj.mp4']

        let menu = `
ㅤㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁ㅤㅤ𑁯🤍ᰍㅤㅤ⩁꯭ ͡  ͡ᩚ꯭ ꯭⩁
೯ ׅ 👤 ¡Hᴏʟᴀ! ¿Cᴏᴍᴏ Esᴛᴀ́s? ׄ ᦡᦡ
ㅤ꒰͜͡${taguser}
ㅤㅤ♡𑂳ᩙㅤ ּ ${saludo} ׄ ㅤタス

*🧇 Activo:* ${uptime}
*👥 Usuarios:* ${totalreg}
*🆙 Versión:* 3.0.0

*💎 Gemas:* ${diamantes}
*🍸 Exp:* ${exp}
*🫖 Nivel:* ${level}
*🍢 Rango:* ${role}
${readMore}
ㅤ ㅤ   乂 *ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs* 乂

𓂂𓏸  𐅹੭੭   *\`Mᧉ𝗇𝗎𝗌\`*  ${xmenus} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xmenus}˚ ${usedPrefix}menunsfw
⏤͟͟͞͞𓅨⇨ ${xmenus}˚ ${usedPrefix}menuaudios
⏤͟͟͞͞𓅨⇨ ${xmenus}˚ ${usedPrefix}menuff
⏤͟͟͞͞𓅨⇨ ${xmenus}˚ ${usedPrefix}menuowner
⏤͟͟͞͞𓅨⇨ ${xmenus}˚ ${usedPrefix}menulogos

𓂂𓏸  𐅹੭੭   *\`𝖨𝗇ẜᨣ\`*  ${xinfo} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}totalf
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}grupos
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}sugerir
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}report
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}owner
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}ping
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}uptime
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}horario
⏤͟͟͞͞𓅨⇨ ${xinfo}˚ ${usedPrefix}precios

𓂂𓏸  𐅹੭੭   *\`𝖮𝗇-𝖮ẜẜ\`*  ${xnable} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xnable}˚ ${usedPrefix}enable *opción*
⏤͟͟͞͞𓅨⇨ ${xnable}˚ ${usedPrefix}disable *opción*
⏤͟͟͞͞𓅨⇨ ${xnable}˚ ${usedPrefix}on *opción*
⏤͟͟͞͞𓅨⇨ ${xnable}˚ ${usedPrefix}off *opción*
⏤͟͟͞͞𓅨⇨ ${xnable}˚ ${usedPrefix}manual

𓂂𓏸  𐅹੭੭   *\`𝖣ᨣ𝗐𝗇𝗅ᨣ𝖺𝖽\`* ${xdownload} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}play *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}aplay *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}aplay2 *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}splay *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}ytmp4doc *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}ytmp3doc *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}apk *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}aptoide *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}modapk *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}pinterest *texto*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}capcut *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}pindl *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}pinvid *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}ytmp4 *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}ytmp3 *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}tiktok *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}tiktok2 *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}instagram *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}facebook *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}mediafire *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}mega *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}playstore *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}xnxxdl *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}xvideosdl *url*
⏤͟͟͞͞𓅨⇨ ${xdownload}˚ ${usedPrefix}pornhubdl *url*

𓂂𓏸  𐅹੭੭   *\`𝖲ᧉ𝖺ꭇ𝖼𝗁\`*  ${xsearch} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}scsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}ttsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}ttsearch2 *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}ytsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}hpmsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}spotifysearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}githubsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}playstoresearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}xnxxsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}xvsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}pornhubsearch *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}gnula *texto*
⏤͟͟͞͞𓅨⇨ ${xsearch}˚ ${usedPrefix}mercadolibre *texto*

𓂂𓏸  𐅹੭੭   *\`𝖨𝗇ƚᧉ𝖨ı𝗀ᧉ𝗇𝖼ı𝖺𝗌\`*  ${xia} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xia}˚ ${usedPrefix}luminai *texto*
⏤͟͟͞͞𓅨⇨ ${xia}˚ ${usedPrefix}chatgpt *texto*
⏤͟͟͞͞𓅨⇨ ${xia}˚ ${usedPrefix}flux *texto*
⏤͟͟͞͞𓅨⇨ ${xia}˚ ${usedPrefix}toreal *texto*
⏤͟͟͞͞𓅨⇨ ${xia}˚ ${usedPrefix}toanime *texto*

𓂂𓏸  𐅹੭੭   *\`𝖫ı𝗌ƚ𝖺𝗌\`*  ${xlist} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}infem4 *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}inmasc4 *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}inmixto4 *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}infem6 *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}inmasc6 *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}inmixto6 *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}v4fem *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}v4masc *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}v4mixto *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}v6fem *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}v6masc *hr + p*
⏤͟͟͞͞𓅨⇨ ${xlist}˚ ${usedPrefix}v6mixto *hr + p*

𓂂𓏸  𐅹੭੭   *\`𝖥𝗋𝖺𝗌ᧉ𝗌\`* ${xfrases} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xfrases}˚ ${usedPrefix}piropo
⏤͟͟͞͞𓅨⇨ ${xfrases}˚ ${usedPrefix}consejo
⏤͟͟͞͞𓅨⇨ ${xfrases}˚ ${usedPrefix}fraseromantica

𓂂𓏸  𐅹੭੭   *\`𝖢ᨣ𝗇𝗏ᧉ𝗋ƚᧉ𝗋𝗌\`*  ${xconverter} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xconverter}˚ ${usedPrefix}toptt *aud*
⏤͟͟͞͞𓅨⇨ ${xconverter}˚ ${usedPrefix}toptt *vid*
⏤͟͟͞͞𓅨⇨ ${xconverter}˚ ${usedPrefix}tomp3 *vid*

𓂂𓏸  𐅹੭੭   *\`𝖳ᨣᨣ𝗅𝗌\`*  ${xtools} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}clima *texto*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}readmore *texto*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}read *texto*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}fake *texto + user + texto*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}traducir *idioma + texto*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}tourl *img / vid / aud*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}unblur *img*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}hd *img*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}remini *img*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}background *img*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}whatmusic *aud*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}whatmusic *vid*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}flag *país*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}cfrase *link + texto*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}inspect *link*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}inspeccionar *link*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}tiktokstalk *user*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}pinstalk *user*
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}reactch
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}nuevafotochannel
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}nosilenciarcanal
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}silenciarcanal
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}seguircanal
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}avisoschannel
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}resiviravisos
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}eliminarfotochannel
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}reactioneschannel
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}reaccioneschannel
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}nuevonombrecanal
⏤͟͟͞͞𓅨⇨ ${xtools}˚ ${usedPrefix}nuevadescchannel

𓂂𓏸  𐅹੭੭   *\`𝖦ꭇ𝗎𝗉ᨣ𝗌\`*  ${xgc} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}add *número*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}grupo *abrir / cerrar*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}inactivos *list / kick*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}grouptime *tiempo*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}notify *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ Aviso *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ Admins *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}todos *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}setwelcome *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}setremove *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}setbye *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}groupdesc *texto*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}promote *@tag*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}demote *@tag*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}kick *@tag*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}mute *@tag*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}tagnum *prefix*
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}link
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}delete
⏤͟͟͞͞𓅨⇨ ${xgc}˚ ${usedPrefix}fantasmas

𓂂𓏸  𐅹੭੭   *\`𝖤ẜᧉ𝖼ƚ𝗌\`*  ${xefects} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}bass *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}blown *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}deep *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}earrape *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}fast *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}smooth *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}tupai *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}nightcore *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}reverse *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}robot *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}slow *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}squirrel *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}chipmunk *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}reverb *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}chorus *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}flanger *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}distortion *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}pitch *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}highpass *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}lowpass *aud*
⏤͟͟͞͞𓅨⇨ ${xefects}˚ ${usedPrefix}underwater *aud*

𓂂𓏸  𐅹੭੭   *\`𝖥𝗎𝗇\`*  ${xfun} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}gay *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}lesbiana *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}pajero *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}pajera *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}puto *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}puta *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}manco *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}manca *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}rata *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}prostituto *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}prostituta *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}sinpoto *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}sintetas *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}chipi *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}doxear *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}declararse *@tag*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}simi *texto*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}pregunta *texto*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}genio *texto*
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}top
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}sorteo
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}piropo
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}chiste
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}facto
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}verdad
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}pareja
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}parejas
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}love
⏤͟͟͞͞𓅨⇨ ${xfun}˚ ${usedPrefix}personalidad

𓂂𓏸  𐅹੭੭   *\`𝖩𝗎ᧉ𝗀ᨣ𝗌\`*  ${xgame} ᩚ꤬ᰨᰍ
ര ׄ ${xgame}˚ ${usedPrefix}pregunta *texto*
ര ׄ ${xgame}˚ ${usedPrefix}ttt *texto*
ര ׄ ${xgame}˚ ${usedPrefix}ptt *opción*
ര ׄ ${xgame}˚ ${usedPrefix}delttt
ര ׄ ${xgame}˚ ${usedPrefix}acertijo
ര ׄ ${xgame}˚ ${usedPrefix}trivia

𓂂𓏸  𐅹੭੭   *\`𝖠𝗇ı𝗆ᧉ\`*  ${xanime} ᩚ꤬ᰨᰍ
ര ׄ ${xanime}˚ ${usedPrefix}messi
ര ׄ ${xanime}˚ ${usedPrefix}cr7

𓂂𓏸  𐅹੭੭   *\`𝖫ᨣ𝗀𑄙𝗌\`*  ${xlogos} ᩚ꤬ᰨᰍ
ര ׄ ${xlogos}˚ ${usedPrefix}balogo *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logocorazon *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logochristmas  *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logopareja *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoglitch *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logosad *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logogaming *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logosolitario *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logodragonball *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoneon *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logogatito *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logochicagamer *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logonaruto *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logofuturista *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logonube *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoangel *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logomurcielago *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logocielo *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logograffiti3d *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logomatrix *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logohorror *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoalas *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoarmy *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logopubg *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logopubgfem *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logolol *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoamon *texto*gus
ര ׄ ${xlogos}˚ ${usedPrefix}logovideopubg *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logovideotiger *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logovideointro *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logovideogaming *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoguerrero *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoportadaplayer *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoportadaff *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoportadapubg *texto*
ര ׄ ${xlogos}˚ ${usedPrefix}logoportadacounter *texto*

𓂂𓏸  𐅹੭੭   *\`𝖦ıẜ𝗌-𝖭𝗌ẜɯ\`*  ${xnsfw} ᩚ꤬ᰨᰍ
ര ׄ ${xnsfw}˚ ${usedPrefix}violar *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}follar *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}anal *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}coger *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}coger2 *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}penetrar *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}sexo *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}rusa *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}sixnine *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}pies *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}mamada *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}lickpussy *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}grabboobs *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}suckboobs *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}cum *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}fap *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}manosear *@tag*
ര ׄ ${xnsfw}˚ ${usedPrefix}lesbianas *@tag*

𓂂𓏸  𐅹੭੭   *\`𝖲ƚ𝗂𝖼𝗄ᧉꭇ\`*  ${xsticker} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}sticker *img*
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}sticker *vid*
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}brat *texto*
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}bratv *texto*
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}qc *texto*
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}wm *texto*
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}dado
⏤͟͟͞͞𓅨⇨ ${xsticker}˚ ${usedPrefix}scat

𓂂𓏸  𐅹੭੭   *\`𝖱𝗉𝗀\`*  ${xrpg} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}minar
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}cofre
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}slut
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}nivel
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}ruleta
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}robarxp
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}robardiamantes
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}depositar
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}daily
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}crimen
⏤͟͟͞͞𓅨⇨ ${xrpg}˚ ${usedPrefix}cartera

𓂂𓏸  𐅹੭੭   *\`𝖱ᧉ𝗀ı𝗌𝗍𝗋ᨣ\`*  ${xreg} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xreg}˚ ${usedPrefix}perfil
⏤͟͟͞͞𓅨⇨ ${xreg}˚ ${usedPrefix}reg
⏤͟͟͞͞𓅨⇨ ${xreg}˚ ${usedPrefix}unreg

𓂂𓏸  𐅹੭੭   *\`𝖮ɯ𝗇ᧉꭇ\`*  ${xowner} ᩚ꤬ᰨᰍ
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}salir
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}update
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}blocklist
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}grouplist
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}restart
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}join
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}chetar
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}unbanuser
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}banchat
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}unbanchat
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}block
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}unblock
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}creargc
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}getplugin
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}let
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}dsowner
⏤͟͟͞͞𓅨⇨ ${xowner}˚ ${usedPrefix}autoadmin

`.trim()

        await conn.sendMessage(m.chat, {
            video: { url: vid.getRandom() }, // Vid
            caption: menu,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 999,
                externalAdReply: {
                    title: '⏤͟͞ू⃪ ፝͜⁞Sʜᴀᴅᴏᴡ✰⃔࿐\nNᴜᴇᴠᴀ Vᴇʀsɪᴏɴ Uʟᴛʀᴀ 🌤️',
                    thumbnailUrl: perfil,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            },
            gifPlayback: true,
            gifAttribution: 0
        }, { quoted: null })
    } catch (e) {
        await m.reply(`*✖️ Ocurrió un error al enviar el menú.*\n\n${e}`)
    }
}

handler.help = ['menuff'];
handler.tags = ['main'];
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.fail = null;

export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
