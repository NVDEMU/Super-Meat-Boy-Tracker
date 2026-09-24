const STORAGE_KEY="smb106-progress-v1",ACH_KEY="smb-achievements-v1";
const iconUrls=[
"02f5b08a9438bf8972cfc7bcda98d6fc7b016a3b","98ab83b33f256bfb0a6f93fa40e5c18487ed38cf","c1363d1d36d836a79f562e4c6e96f8fd7c2f3934","b891d1982ff9f9ecc713b864f754fd44340295f7","fde13cdb9d45e28e7da293e096111c18a0943b46","20d03eb209c557c9b866fccbb69d3fdd1576d29b","eb55b3fbe4e2fe73d749eb87eeba02aa3848e45f","7aa5f9a1d02d4bf4d996cadcc8a617d18d1b45b6","60265683c67a2c5b994547706bc460b71dc1450f","cd379f7724e3bb5af5345c03003bc3e799ae78b2","9f34344cdf0ca4bb2330c867b2ff7334e97cea42","9262d80c11c140c401e962b87c949548fcc9c289","049032df7deab6d7c489cf8d942e0107ebee0612","7ca6507296c9bdc322b72e61a4cf9feae37e2865","652bd084aba5eed1d797446a365f8494c0127083","36f7c48cc42e749dcd7f2f287401500594c6cbcf","d6a5536514275cc6c5ab8a52ce5c900835a57265","ce9d8cff9f3f7d6e6dbaa16b3417e9649f71a65c","b4103169d181b442791ed96928cd1cf25e180eba","ea927841e8ecd723945a2e4659e81c6d34a6beaf","8f2768210570d90ee14e02309f36cd085eeda4c2","5ecb30a2537f1380de9ed25f750850329b618dc2","23cc61feded82d8bcdcf8a4a3d605c61a2aa1f18","c6c7f5594f03da524d87b283ff4d8b66d8db527c","36cde009c0fe6e9b1054690ca9ac900a6300af6a","d248b85f16097537d8fe44581535553f0f75444f","9133403dac8c41661eb4b52816e72c57cefbc99e","9394017aba1621ded60d9733e8200cbd910b1068","fbc5a0a15254448206ca83dfe5983ed0fd9fdfc7","98822e232dd399a4d422205f39daf742a1494a9f","454bcdf34f54e304e15817147f0dc14a21777ea0","fe7a98266802e9d1b63264f102e2fabc63fc4473","3a41d561c1b3b83b3e55099bb0f1049649dc6c37","ebe07385b0d908eb4f8a5aa1041ed7518968e4b0","037a6539b63be2e9776708d0a9067dddfb9d3678","1a9ec04d60a05bd07863e0969ee9e4759607dc86","35450e0414555ec9b1a71f2fc3b64b160aa4afbb","1f5fae3c59f7cb685bb22f57c9d737cab8e4b9e4","b129124f9777c83f91e23abeb49026c0c0bbaddb","25341e69dffb470d43e2253f78e6a4b276fa33b8","84c35636f4764b6aebaec56533cd4dd9ede87051","0480925b417ff025f87d80afd2ed4cd107af6443","eddea52e33a35d41fa8b1bbfc9596cd166ab51f4","f2bf34e9cce0c98ecf6b5ff79f20af51b9d218a9","57cc3419a92f71707fa4dd99ff383a3e5b3c7c1f","c9d9cb9c3faac898331b2ba2c8311bdb2fb5e254","729d451bb0c425e905df0e9df864012a0a409170","9b4b9fd12e3f597460b05b06a967f56ed8027ac4"
].map(function(h){return "https://shared.fastly.steamstatic.com/community_assets/images/apps/40800/"+h+".jpg";});
const raw=[
["Nostalgia","Unlock a single retro warp zone","steam,playstation,xbox"],["The Commander","Unlock CommanderVideo","steam,playstation,xbox"],["I Have Crabs!","Unlock the Head Crab (10 bandages)","steam"],["The Bootlicker","Unlock Jill","steam,playstation"],["Living In the Past","Complete 5 retro warp zones","steam,playstation,xbox"],["Metal Head","Unlock the Machinarium Robot (30 bandages)","steam"],["The Jump man","Unlock Ogmo","steam,playstation"],["The End","Beat the light world","steam,playstation,xbox"],["The Fly guy","Unlock Flywrench","steam,playstation"],["Old School","Complete 10 retro warp zones","steam,playstation,xbox"],["I Smell something Fishy...","Unlock Naija (50 bandages)","steam"],["N#7*<1!23","Secret achievement","steam,playstation"],["Well look at you!","You just changed the world!","steam,playstation"],["Wood Boy","Complete the Forest without dying","steam,playstation"],["MS PAINT RULZ!","Unlock RunMan (70 bandages)","steam"],["&*>?1$","Secret achievement","steam,playstation"],["The Kid","Unlock The Kid","steam,playstation,xbox"],["The Kids Xmas!","Complete a single level of The Kids Xmas","steam,playstation"],["Rare","Spend as little time as possible in The Forest","steam,playstation"],["Vx6","Unlock Captain Viridian (90 bandages)","steam,playstation"],["Suffragette","Complete Cotton Alley","steam,playstation,xbox"],["Retro Rampage","Complete all retro warp zones","steam,playstation,xbox"],["Accidental Arsonist","Unlock Mr. Minecraft (100 bandages)","steam"],["Medium Well","Spend as little time as possible in Hell","steam,playstation"],["(=+66&1$","Secret achievement","steam,playstation"],["Golden God","100% the game","steam"],["^**5%_=+12","Secret achievement","steam,playstation"],["The Real End","Beat the dark world","steam,playstation,xbox"],["The Golden Gift!","Complete all Kids Xmas levels in one play session","steam,playstation"],["*|-0&&","Secret achievement","steam,playstation"],["Medium","Spend as little time as possible in The Salt Factory","steam,playstation"],["N&8^2^%$1","Secret achievement","steam,playstation"],["Well Done","Spend as little time as possible in The Rapture","steam,playstation"],["Medium Rare","Spend as little time as possible in The Hospital","steam,playstation"],["Needle Boy","Complete the Hospital without dying","steam,playstation"],["Seneca Falls","Secret achievement","steam,playstation"],["Squirrel Boy","Complete the Forest Dark World without dying","steam,playstation"],["Salt Boy","Complete the Salt Factory without dying","steam,playstation"],["Dead Boy","Complete The End without dying","steam,playstation"],["Brimstone Boy","Complete Hell without dying","steam,playstation"],["Blood Clot Boy","Complete the Hospital Dark World without dying","steam,playstation"],["Maggot Boy","Complete the Rapture without dying","steam,playstation"],["Missile Boy","Complete the Salt Factory Dark World without dying","steam,playstation"],["Demon Boy","Complete Hell Dark World without dying","steam,playstation"],["Dr.Fetus Boy","Complete The End Dark World without dying","steam,playstation"],["Girl Boy","Complete Cotton Alley without dying","steam,playstation"],["Zombie Boy","Complete the Rapture Dark World without dying","steam,playstation"],["Impossible Boy","Complete Cotton Alley Dark World without dying","steam,playstation"]];
const steamAchievements=raw.map(function(a,i){return{id:"steam-"+i,name:a[0],description:a[1],platforms:["steam"],icon:iconUrls[i]};});
const psnNames=["Super Meat Boy!","Nostalgia","Living in the Past","The Commander","Business Time","The End","The Real End","Suffragette","The Kid","I'm A Golden God!","Wood Boy","Squirrel Boy","Needle Boy","Blood Clot Boy","Salt Boy","Missile Boy","Brimstone Boy","Demon Boy","Maggot Boy","Zombie Boy","Girl Boy","Impossible Boy","Old School","Retro Rampage"];
const psnDescriptions=[
"Unlock all other trophies.","You found a warp zone! Now pay me for the door repair!","You conquered 5 warp zones! you're so old school...","You unlocked Commander Video! Double rainbow all da way!","You unlocked Tim by collecting 50 bandages! He's weird...","You beat the game!... but that's not the end, is it?","You completed the Dark World... you are awesome.","You've beaten the Cotton Alley all by yourself!","You unlocked The Kid!","You got 100% on Super Meat Boy, start bragging!","Complete the Forest without dying","Complete the Forest Dark World without dying","Complete the Hospital without dying","Complete the Hospital Dark World without dying","Complete the Salt Factory without dying","Complete the Salt Factory Dark World without dying","Complete Hell without dying","Complete the Hell Dark World without dying","Complete the Rapture without dying","Complete the Rapture Dark World without dying","Complete the Cotton Alley without dying","Complete The Cotton Alley Dark World without dying","Beat 10 Warpzones","Beat All Warpzones"
];
const xboxNames=["Nostalgia","Living in the Past","The Commander","The Kid","Tin Boy","Iron Boy!","Sticky Fingers","Business Time","The End","The Real End","Suffragette","I'm A Golden God!"];
const xboxDescriptions=["Find and unlock a warp zone.","Find and complete 5 warp zones.","Find and unlock Commander Video.","Find and unlock The Kid.","Complete 10 levels consecutively without dying.","Complete a full chapter without dying.","Collect 10 bandages.","Collect 50 bandages.","Complete the main game.","Complete the Dark World.","Complete the Cotten Alley.","100% the game."];
const xboxIconFiles={
"Nostalgia":"SMB_Xbox_Nostalgia.png","Living in the Past":"SMB_Xbox_LivingInThePast.png","The Commander":"SMB_Xbox_TheCommander.png","The Kid":"SMB_Xbox_TheKid.png","Tin Boy":"SMB_Xbox_TinBoy.png","Iron Boy!":"SMB_Xbox_IronBoy!.png","Sticky Fingers":"SMB_Xbox_StickyFingers.png","Business Time":"SMB_Xbox_BusinessTime.png","The End":"SMB_Xbox_TheEnd.png","The Real End":"SMB_Xbox_TheRealEnd.png","Suffragette":"SMB_Xbox_Suffragette.png","I'm A Golden God!":"SMB_Xbox_ImAGoldenGod!.png"
};
const psnIconFiles={
"Super Meat Boy!":"SMB_Console_Platinum.png","Nostalgia":"SMB_Console_Nostalgia.png","Living in the Past":"SMB_Console_LivingInThePast.png","The Commander":"SMB_Console_TheCommander.png","Business Time":"SMB_Console_BusinessTime.png","The End":"SMB_Console_TheEnd.png","The Real End":"SMB_Console_TheRealEnd.png","Suffragette":"SMB_Console_Suffragette.png","The Kid":"SMB_Console_TheKid.png","I'm A Golden God!":"SMB_Console_ImAGoldenGod.png","Wood Boy":"SMB_WoodBoy.png","Squirrel Boy":"SMB_SquirrelBoy.png","Needle Boy":"SMB_NeedleBoy.png","Blood Clot Boy":"SMB_BloodClotBoy.png","Salt Boy":"SMB_SaltBoy.png","Missile Boy":"SMB_MissileBoy.png","Brimstone Boy":"SMB_BrimstoneBoy.png","Demon Boy":"SMB_DemonBoy.png","Maggot Boy":"SMB_MaggotBoy.png","Zombie Boy":"SMB_ZombieBoy.png","Girl Boy":"SMB_GirlBoy.png","Impossible Boy":"SMB_ImpossibleBoy.png","Old School":"SMB_Console_OldSchool.png","Retro Rampage":"SMB_Console_RetroRampage.png"
};
function platformIcon(files,name,fallback){return files[name]?"https://supermeatboy.fandom.com/wiki/Special:Redirect/file/"+encodeURIComponent(files[name]):fallback;}
function iconForName(name){let a=steamAchievements.find(function(x){return x.name===name;});return a?a.icon:"https://shared.fastly.steamstatic.com/community_assets/images/apps/40800/02f5b08a9438bf8972cfc7bcda98d6fc7b016a3b.jpg";}
const psnAchievements=psnNames.map(function(name,i){return{id:"psn-"+i,name:name,description:psnDescriptions[i],platforms:["playstation"],icon:platformIcon(psnIconFiles,name,iconForName(name))};});
const xboxAchievements=xboxNames.map(function(name,i){return{id:"xbox-"+i,name:name,description:xboxDescriptions[i],platforms:["xbox"],icon:platformIcon(xboxIconFiles,name,iconForName(name))};});
const achievements=steamAchievements.concat(psnAchievements,xboxAchievements);
const worlds=[
 {name:"The Forest",chapter:1,light:20,dark:20,boss:"Lil' Slugger"},
 {name:"The Hospital",chapter:2,light:20,dark:20,boss:"C.H.A.D."},
 {name:"The Salt Factory",chapter:3,light:20,dark:20,boss:"Brownie"},
 {name:"Hell",chapter:4,light:20,dark:20,boss:"Little Horn"},
 {name:"The Rapture",chapter:5,light:20,dark:20,boss:"Larries Lament"},
 {name:"The End",chapter:6,light:5,dark:5,bossLight:"Dr. Fetus",bossDark:"Dr. Fetus"},
 {name:"The Cotton Alley",chapter:7,light:20,dark:20,boss:null}
];

// One tracker entry = one actual bandage.
// Warp-zone bandages are separate entries (P#-#), so no normal/warp level is
// incorrectly shown as containing multiple bandages.
const bandageMap=[
 ["1-4","P1-1","P1-2","1-7","1-9","1-11","1-13","1-18","P3-2","P3-3","1-20","1-3X","1-5X","1-10X","P4-2","P4-3","1-14X","1-15X","1-17X","1-19X"],
 ["2-2","2-5","2-10","P6-1","P6-2","2-13","P7-1","P7-3","2-16","2-18","2-20","2-4X","P8-1","P8-3","2-6X","2-7X","2-10X","2-12X","2-15X","2-16X"],
 ["3-1","3-2","3-4","P9-1","P9-3","P10-1","P10-3","3-10","3-11","3-18","3-20","3-3X","3-5X","3-6X","3-7X","P12-2","P12-3","3-14X","3-16X","3-19X"],
 ["4-2","4-6","P13-2","P13-3","4-9","4-13","P14-2","P14-3","4-16","4-17","4-20","4-3X","4-4X","P16-2","P16-3","4-8X","4-10X","4-14X","4-18X","4-19X"],
 ["P17-2","P17-3","5-3","5-5","5-9","5-12","P18-1","P18-2","5-16","5-18","5-20","5-4X","5-5X","5-8X","5-10X","5-11X","5-17X","5-18X","P20-1","P20-2"],
 [],[]
];

const warpMap=[
 [{name:"Sky Pup",found:"1-5 Holy Mountain"},{name:"The Commander!",found:"1-12 Revolve"},{name:"Hand Held Hack",found:"1-19 Intermission"},{name:"Space Boy",found:"1-13X Tommy's Condo"}],
 [{name:"The Bootlicker!",found:"2-8 The Sabbath"},{name:"Castle Crushers",found:"2-12 Above"},{name:"The Blood Shed",found:"2-15 Gallbladder"},{name:"1977",found:"2-5X Agent Orange"}],
 [{name:"Cartridge Dump",found:"3-5 Uptown"},{name:"Tunnel Vision",found:"3-7 Mind the Gap"},{name:"The Jump Man!",found:"3-16 Mono"},{name:"Kontra",found:"3-8X Salt Crown"}],
 [{name:"Brimstone",found:"4-8 Weibe"},{name:"The Key Master",found:"4-14 Adversary"},{name:"The Fly Guy!",found:"4-18 Boris"},{name:"MMMMMM",found:"4-7X Thistle"}],
 [{name:"Skyscraper",found:"5-1 The Witness"},{name:"The Guy!",found:"5-7 The Fallen"},{name:"Sunshine Island",found:"5-12 10 Horns"},{name:"Meat is Death",found:"5-20X Quietus"}],
 [],[]
];

let progress=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}"),earned=JSON.parse(localStorage.getItem(ACH_KEY)||"{}");
const characterImages={
 "Meat Boy":"Meatysticker2.png","Bandage Girl":"BandageGirlArtwork.png","8-Bit Meat Boy":"8BitMeatBoyArtwork.png","4-Bit Meat Boy":"4BitMeatBoyArtwork.png","4-Color Meat Boy":"4ColorMeatBoyArtwork.png","Meat Ninja":"MeatNinjaArtwork.png","Brownie":"BrownieArtwork.png","Commander Video":"CommanderVideoArtwork.png","Jill":"JillArtwork.png","Ogmo":"OgmoArtwork.png","Flywrench":"FlywrenchArtwork.png","The Kid":"TheKidArtwork.png","Alien Hominid":"AlienHominidArtwork.png","Tim":"TimArtwork.png","Gish":"GishArtwork.png","Spelunky":"SpelunkyArtwork.png","Pink Knight":"PinkKnightArtwork.png","The Ninja":"NinjaArtwork.png","Headcrab":"HeadCrabArtwork.png","Josef":"JosefArtwork.png","Naija":"NaijaArtwork.png","RunMan":"RunManArtwork.png","Captain Viridian":"CaptainViridianArtwork.png","Steve":"SteveArtwork.png","Goo Ball":"GooBallArtwork.png","Tofu Boy":"TofuBoyArtwork.png"};
function characterImage(name){return "https://supermeatboy.fandom.com/wiki/Special:Redirect/file/"+encodeURIComponent(characterImages[name]||"Meatysticker2.png");}
const characterData=[
 {name:"Meat Boy",versions:["pc","console"],unlock:"Available from the start",type:"Starter"},
 {name:"Bandage Girl",versions:["pc","console"],unlock:"Playable in Cotton Alley",type:"Special"},
 {name:"8-Bit Meat Boy",versions:["pc","console"],unlock:"Collect 40 bandages",type:"Bandage unlock"},
 {name:"4-Bit Meat Boy",versions:["pc","console"],unlock:"Collect 60 bandages",type:"Bandage unlock"},
 {name:"4-Color Meat Boy",versions:["pc","console"],unlock:"Collect 80 bandages",type:"Bandage unlock"},
 {name:"Meat Ninja",versions:["pc","console"],unlock:"Reach 100% completion",type:"Completion unlock"},
 {name:"Brownie",versions:["pc","console"],unlock:"Special code / alternate access",type:"Special"},
 {name:"Commander Video",versions:["pc","console"],unlock:"Complete The Commander! Warp Zone",type:"Warp Zone unlock"},
 {name:"Jill",versions:["pc","console"],unlock:"Complete The Bootlicker! Warp Zone",type:"Warp Zone unlock"},
 {name:"Ogmo",versions:["pc","console"],unlock:"Complete The Jump Man! Warp Zone",type:"Warp Zone unlock"},
 {name:"Flywrench",versions:["pc","console"],unlock:"Complete The Fly Guy! Warp Zone",type:"Warp Zone unlock"},
 {name:"The Kid",versions:["pc","console"],unlock:"Complete The Guy! Warp Zone",type:"Warp Zone unlock"},
 {name:"Alien Hominid",versions:["pc","console"],unlock:"Collect 30 bandages",type:"Bandage unlock"},
 {name:"Tim",versions:["console"],unlock:"Collect 50 bandages",type:"Console unlock"},
 {name:"Gish",versions:["console"],unlock:"Collect 10 bandages",type:"Console unlock"},
 {name:"Spelunky",versions:["console"],unlock:"Collect 70 bandages",type:"Console unlock"},
 {name:"Pink Knight",versions:["console"],unlock:"Collect 90 bandages",type:"Console unlock"},
 {name:"The Ninja",versions:["console"],unlock:"Collect all 100 bandages",type:"Console unlock"},
 {name:"Headcrab",versions:["pc"],unlock:"Collect 10 bandages",type:"PC unlock"},
 {name:"Josef",versions:["pc"],unlock:"Collect 30 bandages",type:"PC unlock"},
 {name:"Naija",versions:["pc"],unlock:"Collect 50 bandages",type:"PC unlock"},
 {name:"RunMan",versions:["pc"],unlock:"Collect 70 bandages",type:"PC unlock"},
 {name:"Captain Viridian",versions:["pc"],unlock:"Collect 90 bandages",type:"PC unlock"},
 {name:"Steve",versions:["pc"],unlock:"Collect all 100 bandages",type:"PC unlock"},
 {name:"Goo Ball",versions:["pc"],unlock:"Special code / alternate access",type:"Special"},
 {name:"Tofu Boy",versions:["pc"],unlock:"Special code / alternate access",type:"Special"}
];
function renderCharacters(){
 const platform=document.getElementById("characterPlatform").value;
 const list=characterData.filter(function(c){return c.versions.includes(platform);});
 const done=list.filter(function(c){return isDone(K("character",platform+"-"+c.name));}).length;
 document.getElementById("characterSummary").textContent=done+" / "+list.length+" "+(platform==="pc"?"PC":"Xbox / PS4")+" characters unlocked";
 document.getElementById("characterBar").style.width=(list.length?done/list.length*100:0)+"%";
 document.getElementById("characters").innerHTML=list.map(function(c){
   const k=K("character",platform+"-"+c.name),is= isDone(k);
   return '<article class="character-card '+(is?"unlocked":"")+'"><img class="character-image" src="'+characterImage(c.name)+'" alt="'+c.name+' in-game character art"><div class="character-copy"><div class="character-top"><h3>'+c.name+'</h3><span class="character-type">'+c.type+'</span></div><p>'+c.unlock+'</p></div><span class="character-check">'+(is?"✓":"")+'</span><button aria-label="Toggle '+c.name+' unlocked state" data-character="'+k+'"></button></article>';
 }).join("");
 document.querySelectorAll("[data-character]").forEach(function(b){b.addEventListener("click",function(){toggle(b.dataset.character);});});
}

function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));}
function saveAch(){localStorage.setItem(ACH_KEY,JSON.stringify(earned));}
function K(t,id){return t+"-"+id;}
function isDone(k){return!!progress[k];}
function toggle(k){progress[k]=!progress[k];save();renderAll();}

function renderLevelGrid(worldIndex,type,count){
 const w=worlds[worldIndex], prefix=type==="light"?"":"X";
 let html='<div class="world-subhead"><h4>'+(type==="light"?"Light World":"Dark World")+'</h4><span>'+count+' levels</span></div><div class="level-grid">';
 for(let i=1;i<=count;i++){
   const id=worldIndex+"-"+type+"-"+i;
   const k=K("level",id), ak=K("aplus",id);
   html+='<div class="level-row"><label class="check"><input id="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'><span>'+w.chapter+"-"+i+prefix+'</span></label>';
   html+='<label class="aplus"><input data-k="'+ak+'" type="checkbox" '+(isDone(ak)?"checked":"")+'> A+</label></div>';
 }
 return html+'</div>';
}

function renderWorlds(){
 const root=document.getElementById("worlds");
 root.innerHTML=worlds.map(function(w,wi){
   let html='<article class="world-card"><div class="world-head"><div><h3>Chapter '+w.chapter+' — '+w.name+'</h3><p class="chapter-note">'+w.light+' Light + '+w.dark+' Dark'+(w.boss?" + boss":"")+'</p></div><span class="world-pct" id="wp-'+wi+'">0%</span></div>';
   html+=renderLevelGrid(wi,"light",w.light);
   html+=renderLevelGrid(wi,"dark",w.dark);
   if(w.boss || w.bossLight || w.bossDark){
     if(w.boss){
       const bk=K("boss",wi);
       html+='<div class="special-row"><label><input data-k="'+bk+'" type="checkbox" '+(isDone(bk)?"checked":"")+'> Boss — '+w.boss+'</label></div>';
     } else {
       const lightBossK=K("boss",wi+"-light"), darkBossK=K("boss",wi+"-dark");
       html+='<div class="special-row boss-pair"><label><input data-k="'+lightBossK+'" type="checkbox" '+(isDone(lightBossK)?"checked":"")+'> Light Boss — Dr. Fetus</label><label><input data-k="'+darkBossK+'" type="checkbox" '+(isDone(darkBossK)?"checked":"")+'> Dark Boss — Dr. Fetus</label></div>';
     }
   }
   const warps=warpMap[wi]||[];
   if(warps.length){
     html+='<div class="special-section"><strong>Warp Zones — '+warps.length+'</strong><div class="special-grid">';
     warps.forEach(function(warp,n){
       const k=K("warp",wi+"-"+n);
       html+='<label class="warp-entry"><input data-k="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'> <span><strong>'+warp.name+'</strong><small>Found in '+warp.found+'</small></span></label>';
     });
     html+='</div></div>';
   }
   const bands=bandageMap[wi]||[];
   if(bands.length){
     html+='<div class="bandage-list"><strong>Bandages — 1 per listed location</strong><div class="bandage-grid">';
     bands.forEach(function(location,n){
       const k=K("bandage",wi+"-"+n);
       html+='<label class="bandage-item"><input data-k="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'> <span>'+location+'</span></label>';
     });
     html+='</div><small class="hint">'+bands.length+' bandages in this chapter.</small></div>';
   } else {
     html+='<p class="no-bandages">No bandages in this chapter.</p>';
   }
   return html+'</article>';
 }).join("");
 root.querySelectorAll("#worlds .check input").forEach(function(x){x.addEventListener("change",function(){toggle(x.id);});});
 root.querySelectorAll("[data-k]").forEach(function(x){x.addEventListener("change",function(){toggle(x.dataset.k);});});
}

function renderGlitches(){
 const root=document.getElementById("glitches");
 root.innerHTML="";
 const names=["-1 — The Forest","-2 — The Hospital","-3 — The Salt Factory","-4 — Hell","-5 — The Rapture","-6 — The End"];
 names.forEach(function(name,i){
   const k=K("glitch",i+1);
   root.innerHTML+='<div class="check"><input id="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'><label for="'+k+'">'+name+' <small>+1%</small></label></div>';
 });
 root.querySelectorAll("input").forEach(function(x){x.addEventListener("change",function(){toggle(x.id);});});
}

function completion(){
 let standardDone=0,bosses=0,warps=0,bandages=0,aplusLight=0,aplusDark=0;
 worlds.forEach(function(w,wi){
   for(let i=1;i<=w.light;i++){
     if(isDone(K("level",wi+"-light-"+i)))standardDone++;
     if(isDone(K("aplus",wi+"-light-"+i)))aplusLight++;
   }
   for(let i=1;i<=w.dark;i++){
     if(isDone(K("level",wi+"-dark-"+i)))standardDone++;
     if(isDone(K("aplus",wi+"-dark-"+i)))aplusDark++;
   }
   if(w.boss && isDone(K("boss",wi)))bosses++;
   if(w.bossLight || w.bossDark){
     const lightDone=isDone(K("boss",wi+"-light")), darkDone=isDone(K("boss",wi+"-dark"));
     if(lightDone && darkDone)bosses++;
   }
   (warpMap[wi]||[]).forEach(function(_,n){if(isDone(K("warp",wi+"-"+n)))warps++;});
   (bandageMap[wi]||[]).forEach(function(_,n){if(isDone(K("bandage",wi+"-"+n)))bandages++;});
 });
 let glitches=0;
 for(let i=1;i<=6;i++)if(isDone(K("glitch",i)))glitches++;

 // Game-style completion weights:
 // 250 standard Light/Dark levels = 80%
 // 20 Warp Zones = 10%
 // 6 chapter bosses = 6%
 // 100 bandages = 4%
 // 6 glitch levels = +6% extra
 // A+ ranks do NOT directly add completion; Light A+ unlocks Dark World access.
 const base=(standardDone/250)*80+(warps/20)*10+(bosses/6)*6+(bandages/100)*4;
 const total=Math.min(106,base+glitches);
 return{total:total,standardDone:standardDone,bandages:bandages,warps:warps,bosses:bosses,glitches:glitches,aplusLight:aplusLight,aplusDark:aplusDark};
}

function renderAll(){
 renderWorlds();renderGlitches();renderCharacters();
 const p=completion();
 document.getElementById("completion").textContent=p.total.toFixed(1).replace(/\.0$/,"")+"%";
 document.querySelector(".completion-ring").style.setProperty("--pct",p.total);
 document.getElementById("overallBar").style.width=(p.total/106*100)+"%";
 document.getElementById("completedPoints").textContent=p.total.toFixed(1).replace(/\.0$/,"")+" / 106%";
 document.getElementById("levelsDone").textContent=p.standardDone;
 document.getElementById("bandagesDone").textContent=p.bandages;
 document.getElementById("aPlusDone").textContent=p.aplusLight;
 document.getElementById("completionStatus").textContent=p.total>=106?"106% — Golden God":"Progress in the making";
 worlds.forEach(function(w,wi){
   let done=0,total=w.light+w.dark+(w.boss?1:(w.bossLight||w.bossDark?2:0));
   for(let i=1;i<=w.light;i++)if(isDone(K("level",wi+"-light-"+i)))done++;
   for(let i=1;i<=w.dark;i++)if(isDone(K("level",wi+"-dark-"+i)))done++;
   if(w.boss&&isDone(K("boss",wi)))done++;
   if(w.bossLight&&isDone(K("boss",wi+"-light")))done++;
   if(w.bossDark&&isDone(K("boss",wi+"-dark")))done++;
   document.getElementById("wp-"+wi).textContent=Math.round(done/total*100)+"%";
 });
 document.getElementById("glitchPct").textContent=Math.round(p.glitches/6*100)+"%";
 renderAchievements();
}

function platformName(p){return p==="steam"?"Steam":p==="playstation"?"PlayStation":"Xbox 360";}
function renderAchievements(){
 let platform=document.getElementById("platformFilter").value,status=document.getElementById("achievementStatus").value;
 let list=achievements.filter(function(a){return(platform==="all"||a.platforms.includes(platform))&&(status==="all"||(status==="earned"&&earned[a.id])||(status==="missing"&&!earned[a.id]));});
 let selected=platform==="steam"?steamAchievements:platform==="playstation"?psnAchievements:platform==="xbox"?xboxAchievements:achievements;
 let count=selected.filter(function(a){return earned[a.id];}).length;
 document.getElementById("achievementSummary").textContent=count+" / "+selected.length+" "+(platform==="all"?"total":platformName(platform))+" achievements earned";
 document.getElementById("achievementsDone").textContent=count;
 document.getElementById("achievementBar").style.width=(selected.length?count/selected.length*100:0)+"%";
 document.getElementById("achievements").innerHTML=list.map(function(a){return'<article class="achievement-card '+(earned[a.id]?"earned":"")+'"><img class="achievement-icon" src="'+a.icon+'" alt="'+a.name+' icon"><div><h3>'+a.name+'</h3><p>'+a.description+'</p><div class="platforms">'+a.platforms.map(function(p){return'<span class="badge">'+platformName(p)+'</span>';}).join("")+'</div></div>'+(earned[a.id]?'<span class="earned-mark">✓</span>':"")+'<button aria-label="Toggle '+a.name+'" data-ach="'+a.id+'"></button></article>';}).join("");
 document.querySelectorAll("[data-ach]").forEach(function(b){b.addEventListener("click",function(){earned[b.dataset.ach]=!earned[b.dataset.ach];saveAch();renderAchievements();});});
}
document.querySelectorAll(".tab").forEach(function(t){t.addEventListener("click",function(){document.querySelectorAll(".tab,.tab-panel").forEach(function(x){x.classList.remove("active");});t.classList.add("active");document.getElementById(t.dataset.tab).classList.add("active");});});
document.getElementById("platformFilter").addEventListener("change",renderAchievements);document.getElementById("achievementStatus").addEventListener("change",renderAchievements);document.getElementById("characterPlatform").addEventListener("change",renderCharacters);
document.getElementById("resetProgress").addEventListener("click",function(){if(confirm("Reset all completion and achievement progress?")){progress={};earned={};save();saveAch();renderWorlds();renderAll();renderCharacters();}});
renderWorlds();renderAll();