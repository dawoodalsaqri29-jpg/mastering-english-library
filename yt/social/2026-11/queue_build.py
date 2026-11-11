import json
BASE = 'https://raw.githubusercontent.com/dawoodalsaqri29-jpg/mastering-english-library/instagram-assets/yt/social/2026-11/'
TAGS = '#تعلم_الانجليزي #انجليزي #LearnEnglish #EnglishVocabulary'
# slug, yt title, Arabic hook line (Omani, calm), English key line(s), question for comments
V = [
 ('name-it-before-i-do', 'Name it before I do! 6 English words #shorts', 'خمّن الكلمة قبل لا أقولها 👀', 'book · pencil · apple\nclock · globe · cup', 'كم كلمة عرفت؟ اكتب نتيجتك من 6 👇'),
 ('anime', 'Stop saying "I\'m fine" in English #shorts', 'لا تقول دايمًا I\'m fine 🙃\nجرّب هذي الردود بدالها:', 'Not bad, thanks!\nPretty good, you?\nCan\'t complain.', 'أي وحدة بتستخدم اليوم؟ 👇'),
 ('cartoon', 'Make or Do? The easy rule #shorts', 'الفرق بين make و do بكل بساطة ✍️', 'make = تصنع شي جديد\ndo = تسوي مهمة أو شغل', 'اكتب جملة فيها make وجملة فيها do 👇'),
 ('stopmotion-paper', 'English words that come from Arabic #shorts', 'تدري إنك تتكلم عربي وأنت تتكلم إنجليزي؟ 😄', 'algebra · sugar · cotton\ncoffee · sofa · alcohol', 'أي كلمة فاجأتك أكثر؟ 👇'),
 ('comic-book', 'Give up vs keep going: phrasal verbs #shorts', 'كلمة صغيرة وحدة تغيّر المعنى كله 💥', 'give up = تستسلم\nkeep going = تكمّل', 'اكتب فعل مركّب تعرفه 👇'),
 ('pictogram', 'Afraid to speak English? Follow these rules #shorts', 'تخاف تتكلم إنجليزي؟ هذي قواعدك 🛑', 'Keep talking.\nDon\'t translate in your head.', 'أي قاعدة تحتاجها أكثر؟ 👇'),
 ('stick-figure', 'What if you thought in English? #shorts', 'وقّف الترجمة في راسك 🧠', 'Think in English.\nName ten things in your room.', 'جرّبها الليلة وقول لي كيف كانت 👇'),
 ('map-reveal', 'Where English lives: 5 places #shorts', 'من جزيرة صغيرة إلى العالم كله 🌍', 'England · USA · Nigeria\nSingapore · Australia', 'من وين تتابعنا؟ 👇'),
 ('chibi-history', 'English words born in war: blitz and radar #shorts', 'كلمات إنجليزية انولدت في الحرب ✈️', 'blitz = الحرب الخاطفة\nradar = radio detection and ranging', 'تعرف كلمة ثانية أصلها من الحرب؟ 👇'),
 ('whiteboard-hand', 'Remember any English word in 4 steps #shorts', 'تنسى الكلمات الجديدة باكر؟ هذي الطريقة ✍️', 'See it · Say it\nUse it · Review it', 'أي خطوة ما كنت تسويها؟ 👇'),
 ('flat-vector', 'How many English words do you really need? #shorts', 'كم كلمة تحتاج عشان تتكلم؟ أقل مما تتوقع 🌱', 'about 3,000 common word families', 'كم كلمة تتوقع إنك تعرف؟ 👇'),
 ('doodle-world', '4 ways to practise English every day #shorts', 'ما عندك صف ولا معلم؟ عادي 😎', 'name things · talk to yourself\nread before sleep · sing', 'أي طريقة بتجربها اليوم؟ 👇'),
 ('pixel-quest', 'Level up your English: daily quests #shorts', 'مهماتك اليومية في الإنجليزي 🎮', 'Learn 3 words\nListen 10 minutes\nSay 5 sentences', 'خلصت مهمات اليوم؟ 👇'),
 ('founder-story', 'Why Americans write "color" not "colour" #shorts', 'ليش الأمريكان يكتبون color بدون u؟ 🇺🇸', 'colour → color\ncentre → center', 'أنت تكتب بالبريطاني ولا الأمريكي؟ 👇'),
 ('isometric', 'How does a new word get into the dictionary? #shorts', 'كيف تدخل كلمة جديدة القاموس؟ 📖', 'People use it → it spreads\n→ editors record it', 'أي كلمة جديدة تبيها في القاموس؟ 👇'),
 ('city-timelapse', 'Hamlet, village, town, city, metropolis #shorts', 'من بيوت قليلة إلى مدينة كبيرة 🏙️', 'hamlet → village → town\n→ city → metropolis', 'أنت ساكن في village ولا city؟ 👇'),
 ('storybook', 'The Lost Word: a tiny English story #shorts', 'قصة قصيرة بكلمات سهلة 🦊', 'brave · gentle · curious', 'كمّل القصة بجملة وحدة 👇'),
 ('ink-anatomy', 'Train your English like a muscle #shorts', 'إنجليزيتك عضلة، تبيها تكبر؟ 💪', '15 minutes a day\nbeats 2 hours a week', 'كم دقيقة تتدرب يوميًا؟ 👇'),
 ('archival-doc', 'How English got its dictionaries #shorts', 'قبل قرون ما كان في قاموس إنجليزي أصلًا 📜', '1604 · 1755 · 1828 · 1928', 'اكتب كلمة تعلمتها اليوم 👇'),
 ('painted-history', 'The battle that changed English forever #shorts', 'معركة وحدة غيّرت كلامك اليوم ⚔️', 'cow → beef\npig → pork', 'كنت تعرف ليش؟ 👇'),
]
Q = []
for slug, ytt, hook, keys, ask in V:
    url = BASE + f'{slug}_vertical_4K.mp4'
    ig = f"{hook}\n\n{keys}\n\n{ask}\n🔔 تابعني، كل يوم شي جديد في الإنجليزي\n\n{TAGS}"
    yt_desc = f"{hook}\n\n{keys}\n\n{ask}\n🔔 Subscribe for a new English lesson every day.\n📸 Instagram: @dawood_alsaqri\n\n#shorts #LearnEnglish #EnglishVocabulary #تعلم_الانجليزي"
    Q.append({'slug': slug, 'video': url, 'youtube': {'title': ytt, 'text': yt_desc}, 'instagram': ig, 'tiktok': ig,
              'status': {'youtube': 'pending', 'instagram': 'pending', 'tiktok': 'pending'}})
Q.append({'slug': 'how-war-made-english-part-1', 'video': BASE + 'how-war-made-english-part-1_4K.mp4', 'long': True,
          'youtube': {'title': 'How War Made English, Part 1: Rome and the Anglo-Saxons',
                      'text': "Every English word carries a scar from a war. Part 1: from Rome to the Anglo-Saxons.\nكل كلمة إنجليزية تحمل أثرًا من حرب. الجزء الأول: من روما إلى الأنجلوسكسون.\n\n00:00 The evidence\n00:39 Chapter 1: Before English\n01:56 Chapter 2: The invaders who named England\n\nEnglish and Arabic subtitles are on screen.\n#LearnEnglish #EnglishHistory #تعلم_الانجليزي"},
          'status': {'youtube': 'pending'}})
json.dump({'channels': {'youtube': '6ac969956a5c39ccb668ad96', 'instagram': '6ac96c3b6a5c39ccb668ecb3', 'tiktok': '6add2bd2778b240e2fb5c61e'},
           'times_muscat': {'youtube': '17:00', 'instagram': '20:00', 'tiktok': '21:00'},
           'rule': 'One video per day on each platform, in list order. Buffer free plan: max 10 scheduled posts in total.',
           'queue': Q}, open('/home/claude/demo/social/publish-queue.json', 'w'), ensure_ascii=False, indent=1)
print(len(Q))
