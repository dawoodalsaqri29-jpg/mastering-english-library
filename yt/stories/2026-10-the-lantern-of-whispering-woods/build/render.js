const {chromium}=require('playwright');const path=require('path');
const cards=[["chapter2","bg-oak.jpg","CHAPTER TWO","The Riddle of the Elder Oak","لغز شجرة البلوط العتيقة"],
["chapter3","bg-river.jpg","CHAPTER THREE","Across the Misty River","عبر النهر الضبابي"],
["chapter4","bg-hollow.jpg","CHAPTER FOUR","The Dark Hollow","الوادي المظلم"],
["chapter5","bg-glade.jpg","CHAPTER FIVE","The Lantern’s Secret","سرّ الفانوس"]];
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
for(const [o,bg,k,t,ar] of cards){const q=new URLSearchParams({bg,k,t,ar});await p.goto('file://'+path.resolve('card.html')+'?'+q);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);await p.screenshot({path:o+'.png'});}
await b.close();})();
