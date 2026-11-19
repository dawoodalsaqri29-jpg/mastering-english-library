import json
V=lambda n,**k: dict(faction=n,**k)
S=[]
def sc(style,template,say,**props):
    if style=='archival-doc': props['era']='early'
    S.append({"style":style,"template":template,"props":props,"say":say})
PH,MR,AD='painted-history','map-reveal','archival-doc'
LINDIS="-1.8,55.68"
# ---- HOOK
sc(MR,'headline-title',"In the year seven hundred and ninety three, monks in the north of England wrote that fiery dragons were seen in the sky. A few months later, something far worse came out of the sea.",
   region='uk',headline='DRAGONS IN THE *SKY*',sub='NORTHUMBRIA, 793',kicker='793',keyword='year',sync=False,place=LINDIS,color='red')
sc(PH,'battle-scene',"Within a hundred years, kingdom after kingdom had fallen. And the last free English king was hiding in a swamp, with only a small band of men.",
   left=V('viking',name='Northmen'),right=V('saxon',name='English'),attacker='left',action='clash',cannons=False,keyword='fallen',title='KINGDOM AFTER KINGDOM',sky='storm',terrain='hills')
sc(AD,'evidence-board',"Sky. Egg. They. You say these words every single day. And you say them because of what happened next: a war that decided whether English would survive at all.",
   title='Words From the War',items=[{"label":"sky","note":"Old Norse"},{"label":"egg","note":"Old Norse"},{"label":"they","note":"Old Norse"}],tone='sepia')
sc(PH,'title-banner',"How War Made English. Part two. The Northmen. Raiders, settlers, and the words they left behind.",
   title='The Northmen',chapter='Part Two',subtitle='Raiders, settlers and the words they left',keyword='Northmen',place='England',date='793 - 1042',left=V('viking'),right=V('saxon'),sky='storm',terrain='coast')
# ---- BEFORE THE STORM
sc(MR,'fact-countdown',"In part one, we saw the Angles and Saxons build their own kingdoms. By the late seven hundreds, four of them mattered most. Northumbria. Mercia. East Anglia. And Wessex. They often fought each other, but they shared one language: Old English.",
   region='uk',title='ENGLAND IN THE 700s',countdown=False,facts=[
   {"place":"-1.7,54.9","label":"Northumbria","keyword":"Northumbria"},{"place":"-1.9,52.6","label":"Mercia","keyword":"Mercia"},
   {"place":"1.0,52.5","label":"East Anglia","keyword":"Anglia"},{"place":"-1.9,51.2","label":"Wessex","keyword":"Wessex"}])
sc(MR,'map-focus',"On a small island off the coast of Northumbria stood the monastery of Lindisfarne. It was one of the holiest places in England, rich with books, gold and silver. And it had no walls.",
   region='uk',place=LINDIS,headline='THE HOLY *ISLAND*',keyword='island',label='Lindisfarne',sub='NORTHUMBRIA',kicker='793',color='red',zoom=2.2)
sc(PH,'quote-from-history',"An old English record, the Anglo-Saxon Chronicle, describes that year with these words. Immense whirlwinds and flashes of lightning, and fiery dragons were seen flying in the air.",
   quote='Immense whirlwinds and flashes of lightning, and fiery dragons were seen flying in the air.',author='The Anglo-Saxon Chronicle',date='793',keyword='Immense',faction='viking',sky='storm',terrain='coast')
sc(PH,'march',"Then came the ships. On a summer day, usually dated the eighth of June, raiders from Scandinavia landed on the island. They killed monks, smashed the church, and carried off its treasure.",
   army=V('viking',name='Raiders'),direction='right',keyword='treasure',weather='rain',cavalry=False,place='Lindisfarne',date='793',sky='storm',terrain='coast')
sc(AD,'letter-excerpt',"The English scholar Alcuin of York, a teacher at the court of Charlemagne, wrote to the king of Northumbria. Never before has such terror appeared in Britain as we have now suffered from a pagan race.",
   quote='Never before has such terror appeared in Britain as we have now suffered from a pagan race.',salutation='To the King of Northumbria,',signature='Alcuin',author='Alcuin of York',role='Scholar at the court of Charlemagne',date='793')
# ---- WHO THEY WERE
sc(MR,'route-journey',"Who were these raiders? They came from the lands we now call Norway, Denmark and Sweden. In their language, Old Norse, the men who went raiding by sea were called vikings. That is where our word comes from.",
   region='europe',title='OUT OF THE NORTH',stops=[{"place":"norway","label":"Norway","keyword":"Norway"},{"place":"denmark","label":"Denmark","keyword":"Denmark"},{"place":"north-sea"},{"place":LINDIS,"label":"Lindisfarne","keyword":"vikings"}],
   vehicle='ship',color='red',keyword='raiders',headline='THE VIKINGS')
sc(AD,'document-reveal',"Here is a surprise. Old Norse and Old English were cousins. Both came from the same Germanic family, and many everyday words were close. Scholars think a Viking and an English farmer could probably understand each other, at least a little.",
   header='Word Origins',title='Two Cousins',date='793',subject='Old English and Old Norse',body='Two Germanic languages from one family. Many everyday words were close. Speakers could probably understand each other, at least a little.',classification='Language history',stamp='Cousins',stampColor='red',keyword='cousins')
sc(PH,'aftermath',"For the next seventy years, the raids came again and again. Fast ships, sudden attacks, and then gone, back across the sea. Monasteries and river towns learned to fear the sight of sails.",
   army=V('viking',name='Raiders'),keyword='sails',title='THE RAIDS GO ON',weather='rain',place='English coast',date='793 - 865',sky='dusk',terrain='coast')
# ---- THE GREAT ARMY
sc(MR,'route-journey',"Then, in eight hundred and sixty five, everything changed. A huge army landed in East Anglia. The Chronicle simply calls it a great army. Historians today call it the Great Heathen Army. These men had not come to raid. They had come to stay.",
   region='europe',title='865',stops=[{"place":"denmark","label":"Denmark","keyword":"changed"},{"place":"north-sea"},{"place":"1.0,52.4","label":"East Anglia","keyword":"Anglia"}],
   vehicle='ship',color='red',keyword='everything',headline='NOT RAIDERS. *CONQUERORS*.')
sc(PH,'march',"The great army took horses from the East Angles. Then it marched north, toward the richest city in the north of England.",
   army=V('viking',name='The Great Army'),direction='right',keyword='north',cavalry=True,place='East Anglia',date='866',sky='dusk',terrain='plain')
sc(MR,'map-focus',"In November, eight hundred and sixty six, the great army captured York. The Northmen made it their base, and called it Jorvik. Say it quickly, and you can almost hear the modern name. York.",
   region='uk',place='york',headline='YORK *FALLS*',keyword='captured',label='Jorvik',sub='YORK, 866',kicker='866',color='red',zoom=2.0)
sc(AD,'timeline-ribbon',"Then the other kingdoms began to fall. Northumbria in eight hundred and sixty six. In eight hundred and sixty nine, King Edmund of East Anglia was killed. And in eight hundred and seventy four, King Burgred of Mercia was driven out, and fled abroad.",
   tone='sepia',events=[{"date":"866","label":"Northumbria falls"},{"date":"869","label":"King Edmund of East Anglia killed"},{"date":"874","label":"King Burgred of Mercia driven out"}])
sc(MR,'headline-title',"Only Wessex was left. Northumbria, gone. East Anglia, gone. Mercia, gone. Of all the English kingdoms, Wessex alone was still standing.",
   region='uk',headline='ONLY *WESSEX* WAS LEFT',keyword='only',sync=True,place='-1.9,51.2',kicker='874',sub='THE LAST ENGLISH KINGDOM',color='red')
# ---- ALFRED
sc(PH,'battle-scene',"The war reached Wessex in eight hundred and seventy one. That year, the West Saxons fought nine battles against the Danes. One of them was at Ashdown, high on the chalk hills.",
   left=V('saxon',name='West Saxons'),right=V('viking',name='Danes'),attacker='left',action='clash',cannons=False,keyword='Ashdown',place='Ashdown',date='871',sky='golden',terrain='hills')
sc(PH,'portrait-of-commander',"In the middle of that terrible year, the king of Wessex died, and his younger brother took the crown. He was in his early twenties. His name was Alfred.",
   name='Alfred',role='King of Wessex',dates='871 - 899',faction='saxon',keyword='Alfred',sky='dusk',terrain='hills')
sc(PH,'general-council',"For a few years, there was an uneasy peace. Then, in the middle of winter, eight hundred and seventy eight, just after Twelfth Night, the Danish leader Guthrum launched a surprise attack on Alfred at Chippenham.",
   commanders=[{"faction":"viking","name":"Guthrum"},{"faction":"viking","name":"A Danish chief"}],speaker=0,decision='STRIKE AT MIDWINTER',keyword='surprise',setting='hall',focus='commanders',place='Chippenham',date='878')
sc(MR,'map-focus',"Alfred escaped with a small band of men. He withdrew into the marshes of Somerset, where he later built a fort on the island of Athelney. For a few months, the whole future of the English language hid there with him.",
   region='uk',place='-2.93,51.06',headline='A KING IN THE *MARSHES*',keyword='marshes',label='Athelney',sub='SOMERSET, 878',kicker='878',color='red',zoom=2.4)
sc(AD,'document-reveal',"There is a famous story from this time. Alfred, hiding in a poor woman's house, was asked to watch her cakes, and let them burn. It is a good story. But it was first written down about a hundred years after Alfred died, so it is probably a legend.",
   header='Stories About Alfred',title='The Burnt Cakes',date='878',subject='A king in hiding',body='A king in hiding is asked to watch the cakes. He forgets, and they burn. The story was first written down about a hundred years after his death.',classification='Folk tale',stamp='Legend',stampColor='blue',keyword='legend')
sc(PH,'march',"In May, Alfred came out of the marshes. At a place called Egbert's Stone, the men of Somerset, Wiltshire and Hampshire rode to join him.",
   army=V('saxon',name='Wessex'),direction='right',keyword='join',cavalry=False,place="Egbert's Stone",date='878',sky='dawn',terrain='hills')
sc(PH,'battle-map',"Two days later, the two armies met at Edington. The English stood close together in a shield wall, and fought the Danes for a long time.",
   attacker=V('saxon',name='Wessex'),defender=V('viking',name='Danes'),manoeuvre='frontal',keyword='Edington',title='Edington, 878',towns=['Edington'],river=False,place='Edington',date='878')
sc(PH,'battle-scene',"And then, the Danes broke. Alfred chased them back to their camp, and surrounded it for fourteen days, until they gave in.",
   left=V('saxon',name='Wessex'),right=V('viking',name='Danes'),attacker='left',action='charge',cannons=False,keyword='broke',title='THE DANES BREAK',place='Edington',date='878',sky='golden',terrain='hills')
sc(PH,'aftermath',"Guthrum agreed to peace. About three weeks later, he was baptised as a Christian, with Alfred himself as his godfather, and he took a new English name: Athelstan.",
   army=V('saxon',name='Wessex'),right=V('viking',name='Danes'),keyword='baptised',title='PEACE',stat='VICTORY',statLabel='Edington, 878',place='Aller',date='878',sky='golden',terrain='hills')
sc(MR,'region-split',"Later, the two kings agreed a border. It ran up the River Thames, up the River Lea, and on toward an old Roman road called Watling Street. The south and west stayed English. The north and east were Danish, and came to be called the Danelaw.",
   region='uk',left={"label":"Wessex","sub":"ENGLISH RULE","places":["london","bristol","plymouth","cornwall"],"color":"cyan","keyword":"English"},
   right={"label":"The Danelaw","sub":"DANISH LAW","places":["york","norwich","leeds","newcastle","-1.48,52.92"],"color":"red","keyword":"Danelaw"},headline='ENGLAND *SPLIT* IN TWO',kicker='AFTER 878')
# ---- BURHS AND BOOKS
sc(AD,'map-route',"Alfred knew the Danes could come back. So he built a network of fortified towns across Wessex, places like Winchester, Wallingford and Oxford, where people could find safety. In Old English, a fortified town was called a burh.",
   title='The Burhs of Wessex',places=[{"name":"Winchester"},{"name":"Wallingford"},{"name":"Oxford"}],route='land',terrain='inland',subtitle='Fortified towns against the Danes',date='880 - 899')
sc(AD,'document-reveal',"And that word never left us. Burh became the modern word borough. Another form of it, bury, still ends many English place names, like Canterbury and Shaftesbury.",
   header='Word Origins',title='Burh',date='880 - 899',subject='A fortified town',body='Old English burh, a fortified town. Today: borough. In place names: Canterbury, Shaftesbury.',classification='Etymology',stamp='Still in use',stampColor='red',keyword='borough')
sc(MR,'headline-title',"A king who chose English. That is how Alfred fought a different kind of war. In his time, most learning in Europe was written in Latin. But Alfred wanted books in his people's own language.",
   region='uk',headline='A KING WHO CHOSE *ENGLISH*',keyword='king',sync=True,place='-1.3,51.06',kicker='WESSEX',sub='BOOKS IN THE PEOPLE\'S LANGUAGE',color='yellow')
sc(AD,'document-reveal',"He wanted free young men to learn to read English writing well. Important Latin books were translated into English, among them Pope Gregory's Pastoral Care. And around the eight nineties, the Anglo-Saxon Chronicle was begun: a history of the English, written in English.",
   header='Wessex',title='Royal Policy',date='890',subject='Books in English',body='Free young men should learn to read English writing well. Latin books are translated into English. The Anglo-Saxon Chronicle is begun.',classification='Royal policy',stamp='English',stampColor='red',keyword='Chronicle')
# ---- SETTLERS AND WORDS
sc(PH,'march',"But north of the border, the Danes did not go home. They settled. They farmed, traded and married into English families, and their children grew up hearing both languages.",
   army=V('viking',name='Settlers'),direction='left',keyword='settled',cavalry=False,weather='clear',place='The Danelaw',date='880',sky='golden',terrain='plain')
sc(MR,'fact-countdown',"Their villages are still on the map. Derby. Whitby. Grimsby. That ending, by, is Old Norse for a farm or a village, and by common counts, more than six hundred English place names end with it.",
   region='uk',title="VIKING TOWNS ON TODAY'S MAP",facts=[{"place":"-1.48,52.92","label":"Derby","keyword":"Derby","sub":"BY = FARM OR VILLAGE"},{"place":"-0.61,54.49","label":"Whitby","keyword":"Whitby","sub":"OLD NORSE BY"},{"place":"-0.08,53.57","label":"Grimsby","keyword":"Grimsby","sub":"OLD NORSE BY"}])
sc(AD,'map-route',"In York, the old Viking city, many streets are still called gate. Coppergate. Micklegate. In Old Norse, gata meant street, so Micklegate simply means great street.",
   title='Viking York',places=[{"name":"Coppergate"},{"name":"Micklegate"}],route='land',terrain='inland',subtitle='Gata: the Old Norse word for street',date='866 - 954')
sc(AD,'document-reveal',"And their words moved into English. Sky, which first meant cloud. Egg. Knife. Skin. Ugly. Husband, from the Norse word for the master of a house. Even window, from vindauga, the wind's eye.",
   header='Word Origins',title='Borrowed from the Northmen',date='Old Norse',subject='Everyday words',body='Sky (first meaning: cloud). Egg. Knife. Skin. Ugly. Husband. Window, from vindauga, the wind eye.',classification='Etymology',stamp='Still in use',stampColor='red',keyword='window')
sc(PH,'general-council',"Even the word law came from Old Norse. It entered English in the land ruled by Danish law, and it never left.",
   commanders=[{"faction":"viking","name":"A Danish lawman"},{"faction":"saxon","name":"An English reeve"}],speaker=0,decision='LAW',keyword='law',setting='hall',focus='map',place='The Danelaw',date='900')
sc(AD,'document-reveal',"The Norse even changed the smallest words. Old English said hie for they. The Norse word they took its place, and later them and their followed. You probably say them hundreds of times a day. Every time, you are speaking a little Viking.",
   header='Word Origins',title='They, Them, Their',date='Old Norse',subject='The smallest words',body='Old English: hie, him, hiera. From Old Norse: they, then them and their. Words you say hundreds of times a day.',classification='Etymology',stamp='Viking',stampColor='red',keyword='they')
sc(AD,'evidence-board',"Sometimes, English kept both. Shirt is the Old English word. Skirt is its Norse cousin. They began as the same word, and ended up as two different pieces of clothing.",
   title='One Word, Two Languages',items=[{"label":"Shirt","note":"Old English"},{"label":"Skirt","note":"Old Norse cousin"}],tone='sepia')
sc(AD,'letter-excerpt',"This mixing took centuries. Around fourteen ninety, the printer William Caxton told a story. A merchant asked a woman for eggs, and she said she could speak no French. Another man asked for eyren, the old English word, and she understood.",
   quote='A merchant asked a woman for eggs, and she said she could speak no French. Another man asked for eyren, and she understood.',salutation='A story from Eneydos,',signature='Caxton',author='William Caxton',role='Printer, retelling a story',date='1490')
sc(MR,'region-split',"Many scholars believe this contact also helped English lose many of its old word endings, and made its grammar simpler. Experts still debate how much. But in the Danelaw, two languages were slowly becoming one.",
   region='uk',left={"label":"Old English","sub":"THE SOUTH AND WEST","places":["london","bristol","plymouth","cornwall"],"color":"cyan","keyword":"English"},
   right={"label":"Old Norse","sub":"THE DANELAW","places":["york","norwich","leeds","newcastle","-1.48,52.92"],"color":"red","keyword":"Danelaw"},vsText='BLEND',headline='TWO LANGUAGES *BLEND*',kicker='880 - 1042')
# ---- THE SECOND WAVE
sc(PH,'battle-scene',"About a hundred years after Alfred, the Vikings came back. In nine hundred and ninety one, at Maldon in Essex, a Viking army defeated the English.",
   left=V('viking',name='Vikings'),right=V('saxon',name='Essex'),attacker='left',action='clash',cannons=False,keyword='Maldon',place='Maldon',date='991',sky='noon',terrain='river')
sc(AD,'stat-ledger',"England's king, Ethelred, began paying the Vikings huge amounts of silver to go away. These payments were later called Danegeld. And each time he paid, the Vikings came back for more.",
   title='Paying the Danes',year='991 - 1016',stats=[{"value":10000,"label":"silver paid to the Danes in 991","suffix":" pounds"}],source='The Anglo-Saxon Chronicle',keyword='silver')
sc(PH,'portrait-of-commander',"History remembers him as Ethelred the Unready. But unready did not mean unprepared. It comes from the Old English unraed, bad counsel, a joke on his name, which meant noble counsel.",
   name='Ethelred',role='King of the English',dates='978 - 1016',faction='saxon',keyword='Unready',sky='storm',terrain='plain')
sc(AD,'document-reveal',"In ten oh two, Ethelred ordered the killing of Danish men living in England, on Saint Brice's Day. It did not end the war. It only made it worse.",
   header='Royal Decree',title='Saint Brice\'s Day',date='1002',subject='The Danish men in England',body='A royal order against the Danish men in England, on Saint Brice\'s Day, the thirteenth of November.',classification='Royal order',stamp='Ordered',stampColor='black',keyword='worse')
sc(PH,'timeline-of-campaign',"The Danes answered with a full invasion. In ten thirteen, Sweyn Forkbeard, king of Denmark, took England. He died a few weeks later, but in ten sixteen his son Cnut became king of all England.",
   events=[{"date":"1013","label":"Sweyn Forkbeard takes England"},{"date":"1016","label":"Cnut becomes king"}],army=V('viking',name='Danish kings'),title='Danish Kings of England',subtitle='The Northmen take the crown',sky='golden',terrain='plain')
sc(MR,'route-journey',"Cnut went on to rule Denmark, and later Norway as well. England had become part of a Viking empire across the North Sea.",
   region='europe',title='CNUT\'S EMPIRE',stops=[{"place":"london","label":"England","keyword":"England"},{"place":"denmark","label":"Denmark","keyword":"Denmark"},{"place":"norway","label":"Norway","keyword":"Norway"}],
   vehicle='ship',color='yellow',keyword='rule',headline='A NORTH SEA *EMPIRE*')
sc(AD,'timeline-ribbon',"Danish kings ruled England until ten forty two. Then the crown came back to the old English royal family, with Edward, later known as the Confessor.",
   title='The Crown Returns',subtitle='Edward the Confessor',tone='sepia',events=[{"date":"1016","label":"Cnut, king of all England"},{"date":"1042","label":"Edward, of the English line, becomes king"}])
# ---- LEGACY AND NEXT
sc(MR,'headline-title',"You still speak Viking. Two and a half centuries of war had left England with a mixed language. Every time you say sky, egg, they or law, the Northmen are speaking through you.",
   region='uk',headline='YOU STILL SPEAK *VIKING*',keyword='you',sync=True,place='york',kicker='793 - 1042',sub='SKY. EGG. THEY. LAW.',color='red')
sc(PH,'title-banner',"But there is one more twist in this story, and it begins in France.",
   title='One More Twist',chapter='Epilogue',subtitle='The Northmen of France',keyword='twist',place='Normandy',date='911',left=V('viking'),right=V('viking'),sky='dusk',terrain='coast')
sc(MR,'map-focus',"Across the Channel, around nine hundred and eleven, a Viking leader named Rollo was given land in northern France. It became Normandy, the land of the Northmen. In time, his people would speak French.",
   region='europe',place='0.5,49.2',headline='THE LAND OF THE *NORTHMEN*',keyword='Normandy',label='Normandy',sub='AROUND 911',kicker='911',color='yellow',zoom=2.4)
sc(PH,'battle-scene',"In ten sixty six, two armies would sail for England in the same autumn. One came from Norway. The other came from Normandy. And only one of them would win.",
   left=V('viking',name='Norway'),right=V('saxon',name='England'),attacker='left',action='stand',cannons=False,keyword='Normandy',title='THE YEAR OF THREE BATTLES',place='England',date='1066',sky='storm',terrain='coast')
sc(PH,'title-banner',"Next time, in part three: ten sixty six, the year that brought French into English.",
   title='1066',chapter='Next: Part Three',subtitle='The year that brought French into English',keyword='French',place='England',date='1066',left=V('viking'),right=V('saxon'),sky='dusk',terrain='coast')
json.dump(S,open(__import__('os').path.join(__import__('os').path.dirname(__file__),'ch02.json'),'w'),indent=1,ensure_ascii=False)
print(len(S), sum(len(s['say']) for s in S))
