/**
   * Create By Hyper Mod.
   * Contact Me on wa.me/94767043432
   * Follow https://github.com/HYPER-MOD
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	dappa: 'https://api.dapuhy.ga',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.dapuhy.ga': 'DappaAnjing',
}

// Other
global.owner = ['94713195756','94767043432','94753943957']
global.packname = 'Lakshitha Shehara'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    admin: 'සමූහ පරිපාලක විශේෂ විශේෂාංග!',
    botAdmin: 'Bot පළමුව පරිපාලක විය යුතුය!',
    owner: 'හිමිකරු බොට්ගේ විශේෂ ලක්ෂණ',
    group: 'විශේෂාංගය කණ්ඩායම් සඳහා පමණක් භාවිතා වේ!',
    private: 'පුද්ගලික කතාබස් සඳහා පමණක් භාවිතා කරන විශේෂාංග!',
	bot: 'බොට් අංකය පරිශීලක විශේෂ විශේෂාංග',
    wait: 'කරුණා කර මොහොතක් රැදි හිටපන් හරිතේ 👍',
	lockCmd: 'විශේෂාංගය හිමිකරු විසින් සබල කර නැත!',
	example1: 'Selamat Datang @user කණ්ඩායම තුළ @subject නීති කියවීමට අමතක නොකරන්න @desc\n\nසටහන :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
