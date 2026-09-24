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
function iconForName(name){let a=steamAchievements.find(function(x){return x.name===name;});return a?a.icon:"https://shared.fastly.steamstatic.com/community_assets/images/apps/40800/02f5b08a9438bf8972cfc7bcda98d6fc7b016a3b.jpg";}
const psnAchievements=psnNames.map(function(name,i){return{id:"psn-"+i,name:name,description:psnDescriptions[i],platforms:["playstation"],icon:iconForName(name)};});
const xboxAchievements=xboxNames.map(function(name,i){return{id:"xbox-"+i,name:name,description:xboxDescriptions[i],platforms:["xbox"],icon:iconForName(name)};});
const achievements=steamAchievements.concat(psnAchievements,xboxAchievements);
const worlds=[{name:"The Forest",levels:20},{name:"The Hospital",levels:20},{name:"The Salt Factory",levels:20},{name:"Hell",levels:20},{name:"The Rapture",levels:20},{name:"The End / Cotton Alley",levels:25}];
const bandageMap=[
{"4":1,"5":2,"7":1,"9":1,"11":1,"13":1,"18":1,"19":2,"20":1,"3X":1,"5X":1,"10X":1,"13X":2,"14X":1,"15X":1,"17X":1,"19X":1},
{"2":1,"5":1,"10":1,"12":2,"13":1,"15":2,"16":1,"18":1,"20":1,"4X":1,"5X":2,"6X":1,"7X":1,"10X":1,"12X":1,"15X":1,"16X":1},
{"1":1,"2":1,"4":1,"5":2,"7":2,"10":1,"11":1,"18":1,"20":1,"3X":1,"5X":1,"6X":1,"7X":1,"8X":2,"14X":1,"16X":1,"19X":1},
{"2":1,"6":1,"8":2,"9":1,"13":1,"14":2,"16":1,"17":1,"20":1,"3X":1,"4X":1,"7X":2,"8X":1,"10X":1,"14X":1,"18X":1,"19X":1},
{"1":2,"3":1,"5":1,"9":1,"12":3,"16":1,"18":1,"20":1,"4X":1,"5X":1,"8X":1,"10X":1,"11X":1,"17X":1,"18X":1,"20X":2},
{}
];
let progress=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}"),earned=JSON.parse(localStorage.getItem(ACH_KEY)||"{}");
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));} function saveAch(){localStorage.setItem(ACH_KEY,JSON.stringify(earned));} function K(t,id){return t+"-"+id;} function isDone(k){return!!progress[k];} function toggle(k){progress[k]=!progress[k];save();renderAll();}
function renderWorlds(){
 const root=document.getElementById("worlds");
 root.innerHTML=worlds.map(function(w,wi){
   let html='<article class="world-card"><div class="world-head"><h3>'+w.name+'</h3><span class="world-pct" id="wp-'+wi+'">0%</span></div><div class="checklist">';
   for(let i=1;i<=w.levels;i++){let k=K("level",wi+"-"+i);html+='<div class="check"><input id="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'><label for="'+k+'">'+i+'</label></div>';}
   html+='</div>';
   const bm=bandageMap[wi]||{};
   const keys=Object.keys(bm);
   if(keys.length){
     html+='<div class="bandage-list"><strong>Bandages — only levels containing bandages</strong><div class="bandage-grid">';
     keys.forEach(function(level){
       const max=bm[level], key=K("bandage-level",wi+"-"+level), value=Math.min(max,+(progress[key]||0));
       html+='<label class="bandage-item"><span>Level '+level+' <small>🩹 '+max+'</small></span><input min="0" max="'+max+'" type="number" data-bandage-level="'+wi+'-'+level+'" value="'+value+'"><em>/ '+max+'</em></label>';
     });
     html+='</div></div>';
   } else {
     html+='<p class="no-bandages">No bandages in this chapter.</p>';
   }
   html+='<div class="subchecks">';
   ["Dark World complete","Warp zones complete","Boss complete","All A+ in chapter"].forEach(function(label,n){let type=["dark","warp","boss","a"][n],k=K(type,wi);html+='<label><input data-k="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'> '+label+'</label>';});
   html+='</div></article>'; return html;
 }).join("");
 root.querySelectorAll("#worlds .check input").forEach(function(x){x.addEventListener("change",function(){toggle(x.id);});});
 root.querySelectorAll("[data-k]").forEach(function(x){x.addEventListener("change",function(){toggle(x.dataset.k);});});
 root.querySelectorAll("[data-bandage-level]").forEach(function(x){x.addEventListener("change",function(){
   const parts=x.dataset.bandageLevel.split("-"), wi=parts.shift(), level=parts.join("-");
   const max=bandageMap[wi][level]||0;
   progress[K("bandage-level",wi+"-"+level)]=Math.max(0,Math.min(max,+x.value||0));save();renderAll();
 });});
}
function renderGlitches(){const root=document.getElementById("glitches");root.innerHTML="";for(let i=1;i<=6;i++){let k=K("glitch",i);root.innerHTML+='<div class="check"><input id="'+k+'" type="checkbox" '+(isDone(k)?"checked":"")+'><label for="'+k+'">Glitch '+i+'</label></div>';}root.querySelectorAll("input").forEach(function(x){x.addEventListener("change",function(){toggle(x.id);});});}
function completion(){
 let levels=0,a=0,bandages=0;worlds.forEach(function(w,wi){for(let i=1;i<=w.levels;i++)if(isDone(K("level",wi+"-"+i)))levels++;if(isDone(K("a",wi)))a++;Object.keys(bandageMap[wi]||{}).forEach(function(level){bandages+=Math.min(bandageMap[wi][level],progress[K("bandage-level",wi+"-"+level)]||0);});});
 let glitches=0;for(let i=1;i<=6;i++)if(isDone(K("glitch",i)) )glitches++;
 return{total:Math.min(106,(levels/250)*90+(bandages/100)*4+(a/6)*6+glitches),levels:levels,bandages:bandages,a:a,glitches:glitches};
}
function renderAll(){
 renderGlitches();let p=completion();document.getElementById("completion").textContent=Math.round(p.total)+"%";document.querySelector(".completion-ring").style.setProperty("--pct",p.total);document.getElementById("overallBar").style.width=(p.total/106*100)+"%";document.getElementById("completedPoints").textContent=Math.round(p.total)+" / 106 points";document.getElementById("levelsDone").textContent=p.levels;document.getElementById("bandagesDone").textContent=p.bandages;document.getElementById("aPlusDone").textContent=p.a;document.getElementById("completionStatus").textContent=p.total>=106?"106% — Golden God":"Progress in the making";
 worlds.forEach(function(w,wi){let done=0;for(let i=1;i<=w.levels;i++)if(isDone(K("level",wi+"-"+i)))done++;document.getElementById("wp-"+wi).textContent=Math.round(done/w.levels*100)+"%";});
 document.getElementById("glitchPct").textContent=Math.round(p.glitches/6*100)+"%";renderAchievements();
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
document.getElementById("platformFilter").addEventListener("change",renderAchievements);document.getElementById("achievementStatus").addEventListener("change",renderAchievements);
document.getElementById("resetProgress").addEventListener("click",function(){if(confirm("Reset all completion and achievement progress?")){progress={};earned={};save();saveAch();renderWorlds();renderAll();}});
renderWorlds();renderAll();