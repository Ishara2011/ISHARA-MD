const _0x411e8a=_0x5e42;(function(_0x33d27f,_0x4c5a0c){const _0x301334=_0x5e42,_0x4839e5=_0x33d27f();while(!![]){try{const _0x2eeaae=-parseInt(_0x301334(0x166))/0x1*(parseInt(_0x301334(0x177))/0x2)+parseInt(_0x301334(0x142))/0x3*(parseInt(_0x301334(0x168))/0x4)+-parseInt(_0x301334(0x16c))/0x5+parseInt(_0x301334(0x15d))/0x6+parseInt(_0x301334(0x15e))/0x7+-parseInt(_0x301334(0x141))/0x8+-parseInt(_0x301334(0x15f))/0x9*(-parseInt(_0x301334(0x179))/0xa);if(_0x2eeaae===_0x4c5a0c)break;else _0x4839e5['push'](_0x4839e5['shift']());}catch(_0x4843e3){_0x4839e5['push'](_0x4839e5['shift']());}}}(_0x31fe,0xf329a));const {cmd,commands}=require(_0x411e8a(0x191)),fg=require('api-dylux'),yts=require(_0x411e8a(0x153)),{fetchJson}=require(_0x411e8a(0x165)),axios=require('axios'),cheerio=require(_0x411e8a(0x149));async function dlyta(_0x465252){const _0x3e9208=_0x411e8a;try{const _0x4e6bb0=0xa;for(let _0x17c02=0x0;_0x17c02<_0x4e6bb0;_0x17c02++){const _0x3d3a92=await fetch(_0x3e9208(0x182)+_0x465252),_0x18f84d=await _0x3d3a92[_0x3e9208(0x174)]();if(_0x18f84d[_0x3e9208(0x198)]['download_url'])return{'status':!![],'dl_link':_0x18f84d[_0x3e9208(0x198)][_0x3e9208(0x195)]};;}return await new Promise(_0x1f796d=>setTimeout(_0x1f796d,0xfa0)),{'status':![],'msg':_0x3e9208(0x199)};}catch(_0x2d99bf){return console[_0x3e9208(0x199)](_0x2d99bf),{'status':![],'msg':_0x2d99bf[_0x3e9208(0x181)]};}}async function ytmp4(_0x38f2d0,_0x37febb){const _0xb21568=_0x411e8a;try{if(!_0x38f2d0||!_0x37febb)throw new Error(_0xb21568(0x164));const _0xddc26c=parseInt(_0x37febb[_0xb21568(0x150)]('p',''),0xa),_0x494d72=_0xb21568(0x169),_0x465a10={'button':0x1,'start':0x1,'end':0x1,'format':_0xddc26c,'url':_0x38f2d0},_0x22c766={'Accept':_0xb21568(0x16f),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0xb21568(0x18c),'Origin':'https://loader.to','Referer':_0xb21568(0x154),'Sec-Ch-Ua':_0xb21568(0x144),'Sec-Ch-Ua-Mobile':'?1','Sec-Ch-Ua-Platform':'\x22Android\x22','Sec-Fetch-Dest':'empty','Sec-Fetch-Mode':_0xb21568(0x183),'Sec-Fetch-Site':'cross-site','User-Agent':_0xb21568(0x156)},_0x517a10=await axios['get'](_0x494d72,{'params':_0x465a10,'headers':_0x22c766}),_0x81a9c7=_0x517a10[_0xb21568(0x155)]['id'],_0x52e7d4=async()=>{const _0x3a3a6e=_0xb21568,_0x40c4c2=_0x3a3a6e(0x143),_0x2d9332={'id':_0x81a9c7};try{const _0x58fe8c=await axios[_0x3a3a6e(0x14a)](_0x40c4c2,{'params':_0x2d9332,'headers':_0x22c766}),{progress:_0x2f50d4,download_url:_0x5baf10,text:_0x388032}=_0x58fe8c['data'];return _0x388032==='Finished'?_0x5baf10:(await new Promise(_0x15ef8b=>setTimeout(_0x15ef8b,0x3e8)),_0x52e7d4());}catch(_0x1afa0e){throw new Error(_0x3a3a6e(0x185)+_0x1afa0e[_0x3a3a6e(0x181)]);}};return await _0x52e7d4();}catch(_0x174ca8){}}module[_0x411e8a(0x157)]={'dlyta':dlyta,'ytmp4':ytmp4};function _0x5e42(_0x4eeb31,_0x223288){const _0x31fea3=_0x31fe();return _0x5e42=function(_0x5e426b,_0x31e400){_0x5e426b=_0x5e426b-0x13f;let _0xf42414=_0x31fea3[_0x5e426b];return _0xf42414;},_0x5e42(_0x4eeb31,_0x223288);}function extractYouTubeId(_0x28fee7){const _0x3bb32e=_0x411e8a,_0x2a3ebb=/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,_0x275f6e=_0x28fee7[_0x3bb32e(0x17b)](_0x2a3ebb);return _0x275f6e?_0x275f6e[0x1]:null;}function convertYouTubeLink(_0x24246c){const _0x4d5ebf=_0x411e8a,_0x3d7feb=extractYouTubeId(_0x24246c);if(_0x3d7feb)return _0x4d5ebf(0x172)+_0x3d7feb;return _0x24246c;}cmd({'pattern':_0x411e8a(0x188),'alias':_0x411e8a(0x190),'desc':_0x411e8a(0x16b),'react':'🎵','category':'download','filename':__filename},async(_0x59dad9,_0x51ee69,_0x43ab1a,{from:_0x53b0a3,quoted:_0x46e221,body:_0x14ecd4,isCmd:_0x411b52,command:_0x4c4082,args:_0x5767b4,q:_0x1c806a,isGroup:_0x131bca,sender:_0x3e4d24,senderNumber:_0xd4a342,botNumber2:_0x7db29f,botNumber:_0x2903be,pushname:_0x9097e4,isMe:_0x504171,isOwner:_0x1b3bda,groupMetadata:_0x516921,groupName:_0x304995,participants:_0x118f30,groupAdmins:_0x7ef745,isBotAdmins:_0x36cff5,isAdmins:_0x37bef4,reply:_0xc6cd15})=>{const _0x4c9d70=_0x411e8a;try{if(!_0x1c806a)return _0xc6cd15(_0x4c9d70(0x173));_0x1c806a=convertYouTubeLink(_0x1c806a);const _0x5bc20f=await yts(_0x1c806a),_0x7a5448=_0x5bc20f[_0x4c9d70(0x167)][0x0],_0x22edaa=_0x7a5448['url'];let _0x14110d=_0x4c9d70(0x186)+_0x7a5448['title']+_0x4c9d70(0x18e)+_0x7a5448[_0x4c9d70(0x140)]+'\x20\x0a🧧\x20*Views:*\x20'+_0x7a5448[_0x4c9d70(0x15b)]+_0x4c9d70(0x196)+_0x7a5448[_0x4c9d70(0x16e)]+_0x4c9d70(0x175)+_0x7a5448[_0x4c9d70(0x197)]+_0x4c9d70(0x14e),_0x2dc49c='\x0a*©\x20MADE\x20BY\x20LAKSHITHA\x20ISHARA\x20·\x20·\x20·*\x0a\x20';const _0x135377=await _0x59dad9[_0x4c9d70(0x16d)](_0x53b0a3,{'image':{'url':_0x7a5448[_0x4c9d70(0x180)]},'caption':_0x14110d}),_0x116257=_0x135377['key']['id'];_0x59dad9['ev']['on'](_0x4c9d70(0x17c),async _0x1d2659=>{const _0x3ac006=_0x4c9d70,_0x56d9f6=_0x1d2659[_0x3ac006(0x178)][0x0];if(!_0x56d9f6[_0x3ac006(0x181)])return;const _0x205ed2=_0x56d9f6[_0x3ac006(0x181)][_0x3ac006(0x18a)]||_0x56d9f6[_0x3ac006(0x181)][_0x3ac006(0x14b)]?.[_0x3ac006(0x146)],_0x3a9fe1=_0x56d9f6['key'][_0x3ac006(0x192)],_0x44240e=_0x56d9f6[_0x3ac006(0x160)]['participant']||_0x56d9f6[_0x3ac006(0x160)][_0x3ac006(0x192)],_0x4a5d34=_0x56d9f6['message']['extendedTextMessage']&&_0x56d9f6[_0x3ac006(0x181)][_0x3ac006(0x14b)]['contextInfo']['stanzaId']===_0x116257;if(_0x4a5d34){await _0x59dad9[_0x3ac006(0x16d)](_0x3a9fe1,{'react':{'text':'⬇️','key':_0x56d9f6[_0x3ac006(0x160)]}});const _0x4954a2=await dlyta(''+_0x22edaa),_0x30eba2=_0x4954a2[_0x3ac006(0x187)];await _0x59dad9['sendMessage'](_0x3a9fe1,{'react':{'text':'⬆️','key':_0x56d9f6[_0x3ac006(0x160)]}});if(_0x205ed2==='1')await _0x59dad9[_0x3ac006(0x16d)](_0x3a9fe1,{'audio':{'url':_0x30eba2},'mimetype':_0x3ac006(0x163),'contextInfo':{'externalAdReply':{'title':_0x7a5448['title'],'body':_0x7a5448[_0x3ac006(0x147)],'mediaType':0x1,'sourceUrl':_0x7a5448[_0x3ac006(0x197)],'thumbnailUrl':_0x7a5448[_0x3ac006(0x180)],'renderLargerThumbnail':!![],'showAdAttribution':!![]}}},{'quoted':_0x56d9f6}),await _0x59dad9[_0x3ac006(0x16d)](_0x3a9fe1,{'react':{'text':'✅','key':_0x56d9f6[_0x3ac006(0x160)]}});else _0x205ed2==='2'&&(await _0x59dad9[_0x3ac006(0x16d)](_0x3a9fe1,{'document':{'url':_0x30eba2},'mimetype':'audio/mp3','fileName':_0x7a5448[_0x3ac006(0x15c)]+_0x3ac006(0x14d),'caption':_0x2dc49c},{'quoted':_0x56d9f6}),await _0x59dad9[_0x3ac006(0x16d)](_0x3a9fe1,{'react':{'text':'✅','key':_0x56d9f6[_0x3ac006(0x160)]}}));}});}catch(_0xada7b2){console[_0x4c9d70(0x17f)](_0xada7b2),_0xc6cd15(''+_0xada7b2);}}),cmd({'pattern':'video','desc':'To\x20download\x20videos.','react':'🎥','category':_0x411e8a(0x18d),'filename':__filename},async(_0x500f25,_0x1dd8fb,_0x31a051,{from:_0x300abc,quoted:_0x496bb2,body:_0x4039f4,isCmd:_0x54c2a2,command:_0x531b69,args:_0x38f4f1,q:_0x4396fc,isGroup:_0x3b2170,sender:_0x5ca060,senderNumber:_0x314ed3,botNumber2:_0x44e180,botNumber:_0x2b99ac,pushname:_0x21ed0b,isMe:_0x5c2f13,isOwner:_0x5efc83,groupMetadata:_0xe58a90,groupName:_0x3987ca,participants:_0x1d9be5,groupAdmins:_0x2ac763,isBotAdmins:_0x47ccc3,isAdmins:_0x58ede4,reply:_0xd9dc6f})=>{const _0x118038=_0x411e8a;try{if(!_0x4396fc)return _0xd9dc6f(_0x118038(0x173));_0x4396fc=convertYouTubeLink(_0x4396fc);const _0x31277c=await yts(_0x4396fc),_0x393b6e=_0x31277c[_0x118038(0x167)][0x0],_0x3074df=_0x393b6e[_0x118038(0x197)];let _0x5a576a=_0x118038(0x145)+_0x393b6e['title']+_0x118038(0x18e)+_0x393b6e[_0x118038(0x140)]+_0x118038(0x158)+_0x393b6e[_0x118038(0x15b)]+_0x118038(0x196)+_0x393b6e[_0x118038(0x16e)]+_0x118038(0x175)+_0x393b6e['url']+_0x118038(0x13f),_0x10c80f=_0x118038(0x162);const _0x4d2591=await _0x500f25['sendMessage'](_0x300abc,{'image':{'url':_0x393b6e[_0x118038(0x180)]},'caption':_0x5a576a}),_0x55586c=_0x4d2591[_0x118038(0x160)]['id'];_0x500f25['ev']['on'](_0x118038(0x17c),async _0x3354b6=>{const _0x2257f9=_0x118038,_0x4693cd=_0x3354b6[_0x2257f9(0x178)][0x0];if(!_0x4693cd['message'])return;const _0x10401d=_0x4693cd['message'][_0x2257f9(0x18a)]||_0x4693cd[_0x2257f9(0x181)]['extendedTextMessage']?.[_0x2257f9(0x146)],_0x3667d1=_0x4693cd['key']['remoteJid'],_0x295cea=_0x4693cd[_0x2257f9(0x160)][_0x2257f9(0x151)]||_0x4693cd[_0x2257f9(0x160)]['remoteJid'],_0x56dcf7=_0x4693cd[_0x2257f9(0x181)][_0x2257f9(0x14b)]&&_0x4693cd[_0x2257f9(0x181)][_0x2257f9(0x14b)]['contextInfo'][_0x2257f9(0x159)]===_0x55586c;if(_0x56dcf7){await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬇️','key':_0x4693cd['key']}});if(_0x10401d===_0x2257f9(0x161)){const _0x544a4e=await ytmp4(''+_0x3074df,_0x2257f9(0x171)),_0x4f88fd=_0x544a4e;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd[_0x2257f9(0x160)]}}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'video':{'url':_0x4f88fd},'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25['sendMessage'](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd[_0x2257f9(0x160)]}});}else{if(_0x10401d===_0x2257f9(0x17d)){const _0x2bf024=await ytmp4(''+_0x3074df,_0x2257f9(0x189)),_0x4a2b13=_0x2bf024;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd['key']}}),await _0x500f25['sendMessage'](_0x3667d1,{'video':{'url':_0x4a2b13},'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd['key']}});}else{if(_0x10401d===_0x2257f9(0x194)){const _0xe07896=await ytmp4(''+_0x3074df,_0x2257f9(0x193)),_0x37b8dd=_0xe07896;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd[_0x2257f9(0x160)]}}),await _0x500f25['sendMessage'](_0x3667d1,{'video':{'url':_0x37b8dd},'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25['sendMessage'](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd[_0x2257f9(0x160)]}});}else{if(_0x10401d===_0x2257f9(0x14c)){const _0x1fa6ce=await ytmp4(''+_0x3074df,'1080'),_0x34af56=_0x1fa6ce;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd[_0x2257f9(0x160)]}}),await _0x500f25['sendMessage'](_0x3667d1,{'video':{'url':_0x34af56},'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd['key']}});}else{if(_0x10401d===_0x2257f9(0x17a)){const _0x22038e=await ytmp4(''+_0x3074df,_0x2257f9(0x16a)),_0x412b7e=_0x22038e;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd['key']}}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'document':{'url':_0x412b7e},'mimetype':_0x2257f9(0x152),'fileName':_0x393b6e[_0x2257f9(0x15c)]+_0x2257f9(0x18b),'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd[_0x2257f9(0x160)]}});}else{if(_0x10401d===_0x2257f9(0x148)){const _0x4a60a1=await ytmp4(''+_0x3074df,_0x2257f9(0x189)),_0x2e6bd6=_0x4a60a1;await _0x500f25['sendMessage'](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd[_0x2257f9(0x160)]}}),await _0x500f25['sendMessage'](_0x3667d1,{'document':{'url':_0x2e6bd6},'mimetype':_0x2257f9(0x152),'fileName':_0x393b6e[_0x2257f9(0x15c)]+_0x2257f9(0x18b),'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25['sendMessage'](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd[_0x2257f9(0x160)]}});}else{if(_0x10401d===_0x2257f9(0x18f)){const _0x58ba4f=await ytmp4(''+_0x3074df,'720'),_0x2681db=_0x58ba4f;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd[_0x2257f9(0x160)]}}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'document':{'url':_0x2681db},'mimetype':'video/mp4','fileName':_0x393b6e['title']+'.mp4','caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd['key']}});}else{if(_0x10401d===_0x2257f9(0x170)){const _0x4effbb=await ytmp4(''+_0x3074df,_0x2257f9(0x15a)),_0x2fbc9f=_0x4effbb;await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'⬆️','key':_0x4693cd[_0x2257f9(0x160)]}}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'document':{'url':_0x2fbc9f},'mimetype':_0x2257f9(0x152),'fileName':_0x393b6e[_0x2257f9(0x15c)]+_0x2257f9(0x18b),'caption':_0x10c80f},{'quoted':_0x4693cd}),await _0x500f25[_0x2257f9(0x16d)](_0x3667d1,{'react':{'text':'✅','key':_0x4693cd[_0x2257f9(0x160)]}});}}}}}}}}}});}catch(_0x2c27dd){console[_0x118038(0x17f)](_0x2c27dd),_0xd9dc6f(''+_0x2c27dd);}}),cmd({'pattern':_0x411e8a(0x184),'alias':_0x411e8a(0x17e),'react':'⬇️','dontAddCommandList':!![],'filename':__filename},async(_0x266399,_0x599584,_0xe4f2c5,{from:_0xf08ebd,q:_0x1442b5,reply:_0x337a1e})=>{const _0x5bdb51=_0x411e8a;try{if(!_0x1442b5)return await _0x337a1e('*Need\x20a\x20YouTube\x20URL!*');const _0x533188=await dlyta(_0x1442b5);await _0x266399[_0x5bdb51(0x16d)](_0xf08ebd,{'audio':{'url':_0x533188[_0x5bdb51(0x187)]},'mimetype':_0x5bdb51(0x163)},{'quoted':_0x599584});}catch(_0x1d9362){console[_0x5bdb51(0x17f)]('First\x20attempt\x20failed:',_0x1d9362);try{const _0x2d1d44=await dlyta(_0x1442b5);await _0x266399[_0x5bdb51(0x16d)](_0xf08ebd,{'audio':{'url':_0x2d1d44[_0x5bdb51(0x187)]},'mimetype':_0x5bdb51(0x163)},{'quoted':_0x599584});}catch(_0x197465){console[_0x5bdb51(0x17f)](_0x5bdb51(0x176),_0x197465),await _0x337a1e(_0x5bdb51(0x14f));}}});function _0x31fe(){const _0x51a953=['Error\x20in\x20progress\x20check:\x20','\x0a*╭─────────────────*\x0a*🤖ISHARA-MD\x20SONG\x20DOWNLOADING🤖*\x0a*⁠⁠⁠⁠╰─────────────────*\x0a*──────────────────*\x0a\x0a🧧\x20*Title:*\x20','dl_link','song','480','conversation','.mp4','en-GB,en-US;q=0.9,en;q=0.8','download','\x20\x0a\x0a🧧\x20*Duration:*\x20','2.3','play','../command','remoteJid','720','1.3','download_url','\x20\x0a\x0a🧧\x20*Uploaded\x20On:*\x20','url','result','error','\x0a*──────────────────*\x0a╭──────────────────\x0a\x20*REPLY\x20BELOW\x20THE\x20NUMBER*\x0a\x20TODOWNLOAD\x20VIDEO\x20FILE\x20🔍\x0a\x20`1.1\x20(360p)`\x0a\x20`1.2\x20(480ᴘ)`\x0a\x20`1.3\x20(720ᴘ)`\x0a\x20`1.4\x20(1080ᴘ)`\x0aTODOWNLOAD\x20DOCUMENT\x20🔍\x0a\x20`2.1\x20(360ᴘ)`\x0a\x20`2.2\x20(480ᴘ)`\x0a\x20`2.3\x20(720ᴘ)`\x0a\x20`2.4\x20(1080ᴘ)`\x0a⁠⁠⁠⁠╰──────────────────\x0a*©\x20MADE\x20BY\x20LAKSHITHA\x20ISHARA\x20·\x20·\x20·*\x0a>\x20ISHARA-MD\x20⚗️☢️\x0a','timestamp','10378112SiMwam','15irdVvd','https://p.oceansaver.in/ajax/progress.php','\x22Not-A.Brand\x22;v=\x2299\x22,\x20\x22Chromium\x22;v=\x22124\x22','\x0a*╭─────────────────*\x0a*🤖ISHARA-MD\x20VIDEO\x20DOWNLOADING🤖*\x0a*⁠⁠⁠⁠╰─────────────────*\x0a*──────────────────*\x0a\x0a🧧\x20*Title:*\x20','text','videoId','2.2','cheerio','get','extendedTextMessage','1.4','.mp3','\x0a*──────────────────*\x0a╭──────────────────\x0a\x20*REPLY\x20BELOW\x20THE\x20NUMBER*\x0a\x20*1*\x20\x20\x20\x20*TODOWNLOAD\x20AUDIO*_\x0a\x20*2*\x20\x20\x20\x20*TODOWNLOAD\x20DOCUMENT*\x0a⁠⁠⁠⁠╰──────────────────\x0a*©\x20MADE\x20BY\x20LAKSHITHA\x20ISHARA\x20·\x20·\x20·*\x0a>\x20ISHARA-MD\x20⚗️☢️\x20\x20\x20\x20\x0a','*Failed\x20to\x20process\x20the\x20request.\x20Please\x20try\x20again\x20later!*','replace','participant','video/mp4','yt-search','https://loader.to','data','Mozilla/5.0\x20(Linux;\x20Android\x2010;\x20K)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/124.0.0.0\x20Mobile\x20Safari/537.36','exports','\x20\x0a\x0a\x0a🧧\x20*Views:*\x20','stanzaId','1080','views','title','4851480QpLDsE','3853472smlrPO','90oDDyCz','key','1.1','\x0a*©\x20MADE\x20BY\x20LAKSHITHA\x20ISHARA\x20·\x20·\x20·*\x0a','audio/mpeg','url\x20and\x20format\x20parameters\x20are\x20required.','../lib/functions','20086eqdtSp','videos','1183556NTdfzJ','https://ab.cococococ.com/ajax/download.php','360','To\x20download\x20songs.','813975nwpkwf','sendMessage','ago','*/*','2.4','360p','https://www.youtube.com/watch?v=','Please\x20give\x20me\x20a\x20URL\x20or\x20title.','json','\x20\x0a\x0a🧧\x20*Link:*\x20','Second\x20attempt\x20failed:','106gVeZnn','messages','682090JXnNKy','2.1','match','messages.upsert','1.2','ytmp3','log','thumbnail','message','https://api-pink-venom.vercel.app/api/ytdl?url=','cors','yta'];_0x31fe=function(){return _0x51a953;};return _0x31fe();}
