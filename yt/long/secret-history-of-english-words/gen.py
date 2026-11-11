# "The Secret History of Your English Words" — 25-minute film. Writes p1.json .. p6.json
import json
P = {i: [] for i in range(1, 7)}
def S(part, style, template, props, say, ar):
    P[part].append({"style": style, "template": template, "props": props, "say": say, "ar": ar})

# ───────── PART 1: hook + Chapter 1 (three languages in one) ─────────
S(1, "comic-book", "splash-title", {"title": "Every Word Has a Secret", "subtitle": "The hidden history of English", "issue": "No. 1", "keyword": "insult", "character": "ace", "pose": "hips", "expression": "grin", "background": "action", "palette": "red", "sfx": "WHAT?!"},
  "The word nice was once an insult. The word girl once meant a boy as well. And the letter b in debt was added on purpose, by scholars who wanted English to look more like Latin.",
  "كلمة nice كانت يومًا إهانة. وكلمة girl كانت تُطلق على الولد أيضًا. وحرف b في كلمة debt أضافه علماء عمدًا، ليجعلوا الإنجليزية تشبه اللاتينية.")
S(1, "stick-figure", "title-card", {"kicker": "The question", "title": "Why is English so *strange*?", "subtitle": "(it has reasons)", "character": "pip", "pose": "think", "doodles": ["question", "book", "brain"]},
  "English can look like a language with no rules. But it is not random. Every strange spelling and every odd word is a fossil, and each fossil tells a story.",
  "قد تبدو الإنجليزية لغة بلا قواعد. لكنها ليست عشوائية. كل تهجئة غريبة وكل كلمة عجيبة هي أحفورة، وكل أحفورة تحكي قصة.")
S(1, "flat-vector", "title-landscape", {"title": "The Secret History of Your *Words*", "subtitle": "and the best way to learn them", "kicker": "Mastering English Library", "setting": "meadow", "creature": "pip", "hero": "house"},
  "In the next twenty five minutes, we will dig up those fossils. Where your words came from, why they look the way they do, and how their stories can help you remember them for life.",
  "في الخمس والعشرين دقيقة القادمة سنستخرج هذه الأحافير. من أين جاءت كلماتك، ولماذا تُكتب هكذا، وكيف تساعدك قصصها على تذكّرها مدى الحياة.")
S(1, "whiteboard-hand", "list-with-doodles", {"title": "In this video", "items": [{"text": "Where words come from", "doodle": "globe"}, {"text": "Why spelling is strange", "doodle": "question-mark"}, {"text": "How to learn any word", "doodle": "lightbulb"}], "check": True},
  "First, where English words come from. Second, why the spelling is so strange. And third, a four step method to learn any word. Stay for step four, because almost nobody does it.",
  "أولًا: من أين تأتي الكلمات الإنجليزية. ثانيًا: لماذا التهجئة غريبة هكذا. وثالثًا: طريقة من أربع خطوات لتعلّم أي كلمة. ابقَ حتى الخطوة الرابعة، فلا يكاد أحد يطبّقها.")
S(1, "archival-doc", "chapter-title", {"chapter": "Chapter One", "title": "Three Languages in One", "subtitle": "Old English, French and Latin", "date": "450 - 1500", "place": "England", "subject": "landscape", "tone": "sepia", "keyword": "three"},
  "Chapter one. Three languages in one. English is not really one language. It is at least three, stacked on top of each other like layers of rock.",
  "الفصل الأول. ثلاث لغات في لغة واحدة. الإنجليزية ليست لغة واحدة في الحقيقة. إنها ثلاث لغات على الأقل، بعضها فوق بعض كطبقات الصخر.")
S(1, "whiteboard-hand", "timeline", {"title": "Three layers", "events": [{"date": "450", "label": "Old English arrives", "doodle": "stick-wave"}, {"date": "1066", "label": "French arrives", "doodle": "crown"}, {"date": "1500", "label": "Latin and Greek pour in", "doodle": "book"}]},
  "The first layer is Old English, brought by the Anglo-Saxons from about the year four fifty. The second is French, which arrived with the Norman conquest in ten sixty six. The third is Latin and Greek, which poured in during the Renaissance, when scholars needed new words for new ideas.",
  "الطبقة الأولى هي الإنجليزية القديمة، وجاء بها الأنجلوسكسون منذ نحو عام 450. الثانية هي الفرنسية، وقد وصلت مع الغزو النورماندي عام 1066. والثالثة هي اللاتينية واليونانية، وتدفقتا في عصر النهضة حين احتاج العلماء كلمات جديدة لأفكار جديدة.")
S(1, "stopmotion-paper", "stack-of-facts", {"title": "The oldest layer", "facts": [{"big": "1", "text": "*house*, bread, water", "keyword": "house"}, {"big": "2", "text": "*mother*, father, child", "keyword": "mother"}, {"big": "3", "text": "*eat*, drink, sleep", "keyword": "eat"}]},
  "The oldest layer gives you the words closest to your heart and your home. House, bread and water. Mother, father and child. Eat, drink and sleep. They are short, strong and simple.",
  "أقدم طبقة تعطيك الكلمات الأقرب إلى قلبك وبيتك. بيت وخبز وماء. أم وأب وطفل. أكل وشرب ونوم. كلمات قصيرة وقوية وبسيطة.")
S(1, "flat-vector", "big-number-world", {"value": 100, "suffix": "", "decimals": 0, "label": "most common words: almost all *Old English*", "illus": "earth", "orbiters": ["moon", "satellite"], "world": "space"},
  "In fact, the one hundred most common words in English are almost all from Old English. Words like the, and, you, have and good. You cannot build a single sentence without them.",
  "بل إن أكثر مئة كلمة شيوعًا في الإنجليزية تكاد كلها تكون من الإنجليزية القديمة. كلمات مثل the وand وyou وhave وgood. لا تستطيع بناء جملة واحدة بدونها.")
S(1, "painted-history", "title-banner", {"title": "Then Came the Normans", "chapter": "1066", "subtitle": "A French-speaking king takes the throne", "keyword": "conquered", "place": "Hastings", "date": "1066", "left": {"faction": "knight"}, "right": {"faction": "viking"}, "sky": "dawn", "terrain": "hills"},
  "Then, in ten sixty six, William of Normandy conquered England. For about three hundred years, the kings, the judges and the nobles spoke French, while ordinary people kept speaking English.",
  "ثم في عام 1066 غزا وليام النورماندي إنجلترا. ولنحو ثلاثمئة عام تكلّم الملوك والقضاة والنبلاء الفرنسية، بينما ظل عامة الناس يتكلمون الإنجليزية.")
S(1, "cartoon", "compare-two", {"location": "stage", "left": {"character": "sam", "label": "In the field", "points": ["cow", "pig", "sheep"], "word": "cow", "prop": "key"}, "right": {"character": "priya", "label": "On the table", "points": ["beef", "pork", "mutton"], "word": "beef", "prop": "house"}, "verdict": "right", "word": "table"},
  "You can still taste that history. The animals in the field kept their English names: cow, pig and sheep. But on the lord's table, the meat took French names: beef, pork and mutton.",
  "وما زلت تتذوق هذا التاريخ. الحيوانات في الحقل احتفظت بأسمائها الإنجليزية: cow وpig وsheep. أما على مائدة السيد فأخذ اللحم أسماء فرنسية: beef وpork وmutton.")
S(1, "archival-doc", "document-reveal", {"header": "Word Origins", "title": "Words of Power", "date": "After 1066", "subject": "Borrowed from French", "body": "Government. Court. Judge. Jury. Army. Soldier. Prison. Tax. Crown. Parliament.", "classification": "Etymology", "stamp": "From French", "stampColor": "red", "keyword": "government"},
  "French gave English its words of power. Government, court, judge and jury. Army and soldier. Prison, tax, crown and parliament. If a word sounds official, there is a good chance it came from French.",
  "أعطت الفرنسيةُ الإنجليزيةَ كلمات السلطة. الحكومة والمحكمة والقاضي وهيئة المحلفين. الجيش والجندي. السجن والضريبة والتاج والبرلمان. إذا بدت الكلمة رسمية، فالأرجح أنها جاءت من الفرنسية.")
S(1, "anime", "lesson-board", {"character": "ren", "title": "One idea, three words", "points": [{"text": "*kingly*: Old English", "word": "kingly"}, {"text": "*royal*: French", "word": "royal"}, {"text": "*regal*: Latin", "word": "regal"}]},
  "And this is where English becomes rich. Very often, it kept all three layers for the same idea. Kingly is Old English. Royal is French. Regal is Latin. Three words, one meaning, three different feelings.",
  "وهنا تصبح الإنجليزية غنية. كثيرًا ما احتفظت بالطبقات الثلاث للفكرة نفسها. kingly من الإنجليزية القديمة. royal من الفرنسية. regal من اللاتينية. ثلاث كلمات، معنى واحد، وثلاثة إحساسات مختلفة.")
S(1, "whiteboard-hand", "process-flow", {"title": "From friendly to formal", "steps": [{"label": "ask", "doodle": "speech-bubble"}, {"label": "question", "doodle": "question-mark"}, {"label": "interrogate", "doodle": "magnifier"}]},
  "Here is another one. To ask is Old English, and it feels friendly. To question is French, and it feels more serious. To interrogate is Latin, and it sounds like a police station.",
  "وهذا مثال آخر. ask من الإنجليزية القديمة، وتبدو ودّية. question من الفرنسية، وتبدو أكثر جدية. interrogate من اللاتينية، وكأنك في مركز شرطة.")
S(1, "stick-figure", "versus", {"left": {"label": "Old English", "doodle": "heart", "character": "juno", "points": ["short", "warm and direct"]}, "right": {"label": "Latin", "doodle": "book", "character": "hank", "points": ["long", "formal and clever"]}, "verdict": "Verdict: use both, on purpose.", "winner": "left"},
  "So here is your first lesson as a learner. Short Old English words sound warm and direct. Long Latin words sound formal and clever. Good speakers choose between them on purpose.",
  "وهذا أول درس لك كمتعلّم. الكلمات القصيرة من الإنجليزية القديمة تبدو دافئة ومباشرة. والكلمات الطويلة اللاتينية تبدو رسمية وذكية. والمتحدث الجيد يختار بينهما عن قصد.")
S(1, "pictogram", "do-dont", {"title": "TALKING TO A *FRIEND*", "do": {"text": "SAY *HELP*", "character": "you", "pose": "wave", "object": "phone"}, "dont": {"text": "SAY *ASSIST*", "character": "you", "pose": "stop", "object": "phone", "accent": True}, "verdict": "SAVE IT FOR *EMAILS*", "verdictKeyword": "email"},
  "With a friend, say help, start and buy. In a formal email, you can say assist, commence and purchase. Same meanings, different layers. Now you know why English has so many synonyms.",
  "مع صديقك قل help وstart وbuy. وفي بريد رسمي يمكنك أن تقول assist وcommence وpurchase. المعاني نفسها، والطبقات مختلفة. الآن عرفت لماذا في الإنجليزية مترادفات كثيرة.")
S(1, "flat-vector", "pillar-chart", {"title": "Where English words come *from*", "bars": [{"label": "Latin", "value": 28}, {"label": "French", "value": 28}, {"label": "Germanic", "value": 25}, {"label": "Greek", "value": 5}, {"label": "Other", "value": 14}], "unit": "%", "world": "studio"},
  "One well known survey of the dictionary found that more than half of English words come from French and Latin, about a quarter from the Germanic family, and the rest from Greek and many other languages.",
  "وجد مسح معروف للقاموس أن أكثر من نصف الكلمات الإنجليزية جاء من الفرنسية واللاتينية، ونحو الربع من الأسرة الجرمانية، والباقي من اليونانية ولغات أخرى كثيرة.")
S(1, "comic-book", "big-reveal", {"setup": "But three languages were only the beginning...", "reveal": "Hundreds more!", "keyword": "hundreds", "character": "nova", "background": "space", "revealBackground": "focus", "palette": "red", "sfx": "BOOM!"},
  "But three languages were only the beginning. Because English did something unusual. Wherever it travelled, it collected words, from hundreds of other languages. And some of them came from very close to home.",
  "لكن اللغات الثلاث كانت البداية فقط. فالإنجليزية فعلت شيئًا غير مألوف. أينما سافرت جمعت كلمات، من مئات اللغات الأخرى. وبعضها جاء من مكان قريب منك جدًا.")

# ───────── PART 2: Chapter 2 (words that travelled) ─────────
S(2, "map-reveal", "headline-title", {"region": "world", "headline": "WORDS THAT *TRAVELLED*", "sub": "A LANGUAGE THAT COLLECTS", "kicker": "CHAPTER 2", "keyword": "travelled", "place": "london", "color": "red"},
  "Chapter two. Words that travelled. English is a collector. Sailors, traders, soldiers and scientists carried words home from every corner of the world.",
  "الفصل الثاني. كلمات سافرت. الإنجليزية لغة تجمع. بحّارة وتجار وجنود وعلماء حملوا إليها كلمات من كل أنحاء العالم.")
S(2, "stopmotion-paper", "collage-title", {"title": "The Arabic Connection", "subtitle": "Words you already know", "kicker": "Stop one", "character": "pip", "backdrop": "kraft"},
  "Our first stop is Arabic. During the Middle Ages, Arabic was a great language of science, medicine and trade, and Europe borrowed its knowledge, and its words.",
  "محطتنا الأولى هي العربية. في العصور الوسطى كانت العربية لغة عظيمة للعلم والطب والتجارة، واقتبست أوروبا معارفها، وكلماتها.")
S(2, "whiteboard-hand", "draw-concept", {"doodle": "book", "label": "*algebra* = al-jabr", "caption": "from a book by al-Khwarizmi", "keyword": "algebra", "accents": ["star", "exclamation"]},
  "Algebra comes from al jabr, a word in the title of a famous book by the mathematician al Khwarizmi, written in Baghdad in the ninth century. His own name gave us another word: algorithm.",
  "كلمة algebra من «الجبر»، وهي كلمة في عنوان كتاب مشهور للرياضي الخوارزمي، ألّفه في بغداد في القرن التاسع. واسمه هو أعطانا كلمة أخرى: algorithm.")
S(2, "stopmotion-paper", "paper-list", {"title": "From Arabic to English", "board": "cork", "items": [{"text": "*zero* from sifr", "keyword": "zero"}, {"text": "*sugar* from sukkar", "keyword": "sugar"}, {"text": "*cotton* from qutn", "keyword": "cotton"}, {"text": "*magazine* from makhazin", "keyword": "magazine"}]},
  "Zero comes from sifr, which means empty. Sugar comes from sukkar. Cotton comes from qutn. And magazine comes from makhazin, which means storehouses. A magazine was first a storehouse, and later, a storehouse of information.",
  "zero من «صِفر». وsugar من «سُكّر». وcotton من «قُطن». وmagazine من «مخازن». كانت الكلمة تعني المخزن أولًا، ثم صارت مخزنًا للمعلومات.")
S(2, "map-reveal", "route-journey", {"region": "europe", "title": "THE JOURNEY OF COFFEE", "stops": [{"place": "istanbul", "label": "Turkish: kahve", "keyword": "Turkish"}, {"place": "italy", "label": "Italian: caffe", "keyword": "Italian"}, {"place": "london", "label": "English: coffee", "keyword": "English"}], "vehicle": "ship", "color": "red", "keyword": "journeys", "headline": "ONE WORD, *FOUR* LANGUAGES"},
  "Some words made long journeys. Coffee began as the Arabic qahwa. In Turkish it became kahve. In Italian, caffe. And finally, in English, coffee. One word, four languages, and you drink it every morning.",
  "بعض الكلمات قطعت رحلات طويلة. coffee بدأت بالكلمة العربية «قهوة». وفي التركية صارت kahve. وفي الإيطالية caffe. وأخيرًا في الإنجليزية coffee. كلمة واحدة، أربع لغات، وتشربها كل صباح.")
S(2, "anime", "dramatic-reveal", {"character": "hikari", "location": "night-city", "reveal": "You already know *dozens*!", "word": "dozens", "reaction": "shocked"},
  "So if you are an Arabic speaker, here is some good news. You already know dozens of English words. You just did not know that you knew them.",
  "فإن كنت تتكلم العربية، فهذا خبر سار. أنت تعرف أصلًا عشرات الكلمات الإنجليزية. فقط لم تكن تعرف أنك تعرفها.")
S(2, "map-reveal", "map-focus", {"region": "india", "place": "delhi", "headline": "WORDS FROM *INDIA*", "keyword": "India", "label": "India", "sub": "HINDI AND URDU", "kicker": "STOP TWO", "color": "red"},
  "Our second stop is India. When British traders and soldiers lived there, they borrowed words from Hindi and Urdu for things they had never seen before.",
  "محطتنا الثانية هي الهند. حين عاش التجار والجنود البريطانيون هناك، اقتبسوا كلمات من الهندية والأردية لأشياء لم يروها من قبل.")
S(2, "cartoon", "explain-with-board", {"character": "priya", "location": "classroom", "title": "From Hindi and Urdu", "mode": "list", "items": ["*shampoo*: to press", "*jungle*: wild land", "*bungalow*: Bengal-style house"], "expression": "happy"},
  "Shampoo comes from a word that meant to press, or to massage. Jungle comes from jangal, wild land. And a bungalow was a house in the Bengal style. Pyjamas and loot came the same way.",
  "shampoo من كلمة تعني الضغط أو التدليك. وjungle من «جنگل» أي الأرض البرية. وbungalow كان بيتًا على الطراز البنغالي. وكلمتا pyjamas وloot جاءتا بالطريقة نفسها.")
S(2, "flat-vector", "cause-effect", {"title": "A word crosses the ocean", "steps": [{"illus": "sprout", "label": "Nahuatl"}, {"illus": "wave", "label": "Spanish"}, {"illus": "city", "label": "English"}], "world": "ocean"},
  "From the Americas came chocolate and tomato. Both started in Nahuatl, the language of the Aztecs, passed through Spanish, and then sailed into English.",
  "ومن الأمريكتين جاءت chocolate وtomato. كلتاهما بدأت في لغة الناواتل، لغة الأزتك، ثم مرّت بالإسبانية، ثم أبحرت إلى الإنجليزية.")
S(2, "pixel-quest", "world-map", {"title": "The Word Map", "nodes": [{"label": "Tea", "sublabel": "from Chinese", "keyword": "tea"}, {"label": "Piano", "sublabel": "from Italian", "keyword": "piano"}, {"label": "Kindergarten", "sublabel": "German: children's garden", "keyword": "kindergarten"}, {"label": "Tsunami", "sublabel": "Japanese: harbour wave", "keyword": "tsunami"}]},
  "Tea comes from Chinese. Piano comes from Italian. Kindergarten is German, and means children's garden. And tsunami is Japanese for harbour wave. English kept them all.",
  "tea من الصينية. وpiano من الإيطالية. وkindergarten ألمانية، ومعناها حديقة الأطفال. وtsunami يابانية، ومعناها موجة الميناء. والإنجليزية احتفظت بها كلها.")
S(2, "comic-book", "dialogue-panels", {"left": "pip", "right": "nova", "setting": "lab", "lines": [{"speaker": "left", "text": "Where does *robot* come from? Japan?", "kind": "speech", "expression": "think"}, {"speaker": "right", "text": "No! From a Czech play, written in 1920.", "kind": "speech", "expression": "happy"}, {"speaker": "left", "text": "A PLAY?!", "kind": "shout", "expression": "shock", "reaction": "grin"}]},
  "Where does robot come from? Japan? No. It comes from a Czech play, written in nineteen twenty. It was made from robota, a word for forced labour.",
  "من أين جاءت كلمة robot؟ من اليابان؟ لا. جاءت من مسرحية تشيكية كُتبت عام 1920. وهي مأخوذة من robota، كلمة تعني العمل القسري.")
S(2, "stick-figure", "figure-explains", {"character": "pip", "title": "Words from *names*", "doodle": "person", "label": "the Earl of Sandwich", "notes": ["1760s", "ate at the card table"], "says": "Fame. Sort of.", "keyword": "names"},
  "Some words even come from people's names. The sandwich is named after the Earl of Sandwich, in the seventeen sixties. The story says he wanted to eat without leaving the card table.",
  "وبعض الكلمات جاءت من أسماء أشخاص. الـsandwich سُمّي على إيرل ساندويتش، في ستينيات القرن الثامن عشر. وتقول الحكاية إنه أراد أن يأكل دون أن يترك طاولة اللعب.")
S(2, "archival-doc", "newspaper-headline", {"paper": "The Word Gazette", "date": "1880", "headline": "Captain Boycott Is Shut Out", "subhead": "Workers and shopkeepers in Ireland refuse to deal with the land agent", "kicker": "Ireland", "subject": "crowd", "caption": "A name becomes a verb", "price": "One Penny", "tone": "silver", "keyword": "Boycott"},
  "And in eighteen eighty, in Ireland, a land agent named Captain Charles Boycott was shut out by his whole community. Nobody would work for him or sell to him. Within weeks, his name had become a verb.",
  "وفي عام 1880 في أيرلندا، قاطع أهل المنطقة كلهم وكيل أراضٍ اسمه الكابتن تشارلز بويكوت. لم يعمل له أحد ولم يبعه أحد. وخلال أسابيع صار اسمه فعلًا: boycott.")
S(2, "whiteboard-hand", "mind-map", {"center": "English collects", "branches": [{"label": "Arabic", "doodle": "book"}, {"label": "Hindi", "doodle": "tree"}, {"label": "Chinese", "doodle": "coffee"}, {"label": "German", "doodle": "graduation-cap"}, {"label": "Japanese", "doodle": "water-drop"}]},
  "So English is a museum of world languages. Every borrowed word is a small postcard from history, telling you who met whom, and what they traded.",
  "فالإنجليزية متحف للغات العالم. كل كلمة مقترَضة بطاقة بريدية صغيرة من التاريخ، تخبرك من التقى بمن، وماذا تبادلوا.")
S(2, "doodle-world", "headline-thumb", {"location": "savanna", "character": "og", "headline": "BUT WHY THE *SPELLING*?", "keyword": "spelled", "kicker": "the mystery", "reaction": "hot", "setup": "neutral", "setupPose": "look-around", "animal": "camel"},
  "That explains where the words came from. But it does not explain the strangest thing about English. Why on earth is it spelled like that?",
  "هذا يفسّر من أين جاءت الكلمات. لكنه لا يفسّر أغرب ما في الإنجليزية. لماذا تُكتب بهذه الطريقة أصلًا؟")

# ───────── PART 3: Chapter 3 (the spelling mystery) ─────────
S(3, "archival-doc", "chapter-title", {"chapter": "Chapter Three", "title": "The Spelling Mystery", "subtitle": "Why English is not written the way it sounds", "date": "1400 - 1700", "place": "London", "subject": "landscape", "tone": "sepia", "keyword": "mystery"},
  "Chapter three. The spelling mystery. Why does knight have a k? Why does debt have a b? And why does one letter make so many different sounds?",
  "الفصل الثالث. لغز التهجئة. لماذا في knight حرف k؟ ولماذا في debt حرف b؟ ولماذا يصدر الحرف الواحد أصواتًا كثيرة مختلفة؟")
S(3, "anime", "dialogue", {"characters": ["kaito", "yuki"], "location": "classroom", "lines": [{"speaker": 0, "text": "How do you say k-n-i-g-h-t?", "expression": "thinking"}, {"speaker": 1, "text": "Just say 'nite'.", "expression": "smug"}, {"speaker": 0, "text": "Then why all those letters?!", "expression": "shocked", "reaction": "sweat-drop"}, {"speaker": 1, "text": "Because they used to be real.", "expression": "smile"}]},
  "How do you say this word? Just say night. Then why all those letters? Because, a thousand years ago, people really pronounced them.",
  "كيف تنطق هذه الكلمة؟ قل night فقط. إذن لماذا كل هذه الحروف؟ لأن الناس قبل ألف عام كانوا ينطقونها فعلًا.")
S(3, "whiteboard-hand", "before-after", {"before": {"label": "cniht", "doodle": "flag", "note": "every letter spoken"}, "after": {"label": "knight", "doodle": "question-mark", "note": "k and gh are silent"}, "beforeTitle": "Old English", "afterTitle": "Today"},
  "In Old English, the word was cniht, and every letter was spoken. Over the centuries, the k sound and the rough gh sound disappeared from speech. But the spelling stayed, like a photograph of an old pronunciation.",
  "في الإنجليزية القديمة كانت الكلمة cniht، وكان كل حرف فيها يُنطق. ومع القرون اختفى صوت k وصوت gh الخشن من الكلام. لكن التهجئة بقيت، كصورة قديمة لنطق قديم.")
S(3, "archival-doc", "timeline-ribbon", {"title": "How spelling froze", "events": [{"date": "1400", "label": "The vowels begin to move", "subject": "landscape"}, {"date": "1476", "label": "Caxton's printing press", "subject": "building"}, {"date": "1700", "label": "The sounds have changed", "subject": "portrait"}], "tone": "sepia"},
  "Then came two events at almost the same time. In fourteen seventy six, William Caxton set up the first printing press in England, and printers slowly began to fix the spelling of words. But while spelling was freezing, pronunciation was changing.",
  "ثم وقع حدثان في وقت متقارب. في عام 1476 أنشأ وليام كاكستون أول مطبعة في إنجلترا، وبدأ الطبّاعون يثبّتون تهجئة الكلمات شيئًا فشيئًا. لكن بينما كانت التهجئة تتجمد، كان النطق يتغير.")
S(3, "whiteboard-hand", "big-number", {"value": "300", "label": "years of moving vowels", "doodle": "clock", "keyword": "three"},
  "Linguists call it the Great Vowel Shift. Between about fourteen hundred and seventeen hundred, over three hundred years, the long vowels of English slowly moved to new positions in the mouth.",
  "يسمّيه اللغويون «التحول الكبير في حروف العلة». بين نحو عام 1400 وعام 1700، على مدى ثلاثمئة عام، انتقلت حروف العلة الطويلة ببطء إلى مواضع جديدة في الفم.")
S(3, "stopmotion-paper", "before-after-flip", {"title": "", "before": {"label": "Before", "text": "*bite* sounded like beet", "prop": "lightbulb"}, "after": {"label": "After", "text": "*bite* sounds like bite", "prop": "lightbulb"}, "keyword": "today", "character": "ada", "set": "kraft"},
  "Before the shift, the word bite sounded like beet. House sounded like hoos. And name sounded like nahm. Today they sound completely different, but we still spell them the old way.",
  "قبل التحول كانت كلمة bite تُنطق مثل beet. وكلمة house تُنطق «هوس». وكلمة name تُنطق «نام». اليوم نطقها مختلف تمامًا، لكننا ما زلنا نكتبها بالطريقة القديمة.")
S(3, "cartoon", "narrator-talks", {"character": "maya", "location": "classroom", "title": "Spelling shows the *old* sound", "kicker": "The secret", "keyword": "old", "expression": "happy", "beats": [{"word": "blame", "pose": "shrug", "expression": "skeptical"}]},
  "So English spelling is not crazy. It is old. It shows you how words sounded six hundred years ago. When the spelling and the sound do not match, do not blame yourself. Blame history.",
  "فالتهجئة الإنجليزية ليست مجنونة. إنها قديمة. تريك كيف كانت الكلمات تُنطق قبل ستمئة عام. فإذا لم تتطابق التهجئة مع الصوت، فلا تلُم نفسك. لُم التاريخ.")
S(3, "pictogram", "rule-card", {"number": 1, "rule": "THE *B* IN DEBT IS A FAKE", "icon": "envelope", "forbidden": False, "subtext": "ADDED BY SCHOLARS", "subtextKeyword": "scholars", "character": "you", "pose": "point"},
  "But some silent letters are not old sounds at all. They are fakes. In the fifteen hundreds, scholars loved Latin so much that they added letters to English words to show off their Latin roots.",
  "لكن بعض الحروف الصامتة ليست أصواتًا قديمة أصلًا. إنها مزيفة. في القرن السادس عشر أحبّ العلماء اللاتينية حتى أضافوا حروفًا إلى كلمات إنجليزية ليُظهروا جذورها اللاتينية.")
S(3, "archival-doc", "then-vs-now", {"then": {"subject": "portrait", "year": "Before", "label": "dette, doute"}, "now": {"subject": "portrait-woman", "year": "After 1500", "label": "debt, doubt"}, "title": "The Letters Nobody Asked For", "keyword": "debt"},
  "The word debt came from French, and it was spelled d e t t e. Scholars added a b, because the Latin word was debitum. The same thing happened to doubt. Nobody ever pronounced those letters.",
  "كلمة debt جاءت من الفرنسية، وكانت تُكتب dette. فأضاف العلماء حرف b لأن الكلمة اللاتينية كانت debitum. وحدث الشيء نفسه مع doubt. ولم ينطق أحد هذين الحرفين قط.")
S(3, "stick-figure", "labelled-diagram", {"title": "The island mistake", "doodle": "rock", "labels": [{"text": "Old English: no s", "where": "top-left"}, {"text": "Latin: insula", "where": "top-right"}, {"text": "not related!", "where": "right"}], "youAreHere": "S ADDED BY MISTAKE", "herePosition": "bottom-left", "keyword": "island"},
  "And sometimes they got it wrong. Island was an Old English word, with no s at all. Scholars thought it came from the Latin insula, so they added an s. It did not. The s in island is a five hundred year old mistake.",
  "وأحيانًا أخطؤوا. island كلمة من الإنجليزية القديمة، بلا حرف s أصلًا. ظنّ العلماء أنها من اللاتينية insula فأضافوا s. ولم تكن كذلك. حرف s في island خطأ عمره خمسمئة عام.")
S(3, "whiteboard-hand", "list-with-doodles", {"title": "How to live with it", "items": [{"text": "Learn the sound first", "doodle": "megaphone"}, {"text": "Then learn the spelling", "doodle": "pencil"}, {"text": "Group words that match", "doodle": "puzzle"}], "check": True},
  "So what should a learner do? Three things. Always learn the sound of a new word first. Then learn its spelling as a separate fact. And group words with the same pattern, like night, light, right and fight.",
  "فماذا يفعل المتعلّم؟ ثلاثة أشياء. تعلّم صوت الكلمة الجديدة أولًا دائمًا. ثم تعلّم تهجئتها كمعلومة مستقلة. واجمع الكلمات ذات النمط الواحد، مثل night وlight وright وfight.")
S(3, "pixel-quest", "boss-battle", {"boss": "Silent Letters", "bossType": "blob", "moves": [{"name": "Listen First", "keyword": "listen"}, {"name": "Pattern Groups", "keyword": "pattern"}, {"name": "Say It Aloud", "keyword": "aloud"}]},
  "Think of silent letters as a boss in a video game. You beat it with three moves. Listen first. Learn in pattern groups. And say every new word aloud.",
  "تخيّل الحروف الصامتة زعيمًا في لعبة فيديو. تهزمه بثلاث حركات. استمع أولًا. تعلّم في مجموعات متشابهة. وانطق كل كلمة جديدة بصوت عالٍ.")
S(3, "stick-figure", "what-if", {"title": "What if spelling matched sound?", "character": "pip", "panels": [{"caption": "Whose accent would we choose?", "pose": "shrug", "says": "Wotah? Wadder?"}, {"caption": "Old books: unreadable.", "pose": "panic", "doodle": "book"}, {"caption": "So we keep the fossils.", "pose": "smug", "doodle": "rock"}], "punchline": "Strange, but shared."},
  "Could we fix the spelling? People have tried for centuries. But whose accent would we choose? A Londoner, a Texan and an Australian all say water differently. The old spelling is strange, but everyone shares it.",
  "هل يمكن إصلاح التهجئة؟ حاول الناس ذلك لقرون. لكن لهجة مَن نختار؟ اللندني والتكساسي والأسترالي ينطقون water بطرق مختلفة. التهجئة القديمة غريبة، لكن الجميع يتشاركونها.")
S(3, "comic-book", "big-reveal", {"setup": "Spelling froze. But the meanings?", "reveal": "They flipped!", "keyword": "meanings", "character": "nova", "background": "city", "revealBackground": "focus", "palette": "red", "sfx": "FLIP!"},
  "So spelling froze while the sounds moved on. But something else was changing too, and this one is even stranger. The meanings of the words themselves.",
  "فتجمدت التهجئة بينما مضت الأصوات. لكن شيئًا آخر كان يتغير أيضًا، وهو أغرب. معاني الكلمات نفسها.")

# ───────── PART 4: Chapter 4 (words that changed their minds) ─────────
S(4, "stopmotion-paper", "collage-title", {"title": "Words That Changed Their Minds", "subtitle": "How meanings travel", "kicker": "Chapter 4", "character": "pip", "backdrop": "kraft"},
  "Chapter four. Words that changed their minds. A word is not a stone. It is alive, and over centuries, its meaning can travel a very long way.",
  "الفصل الرابع. كلمات غيّرت رأيها. الكلمة ليست حجرًا. إنها حيّة، ومع القرون قد يسافر معناها بعيدًا جدًا.")
S(4, "anime", "eyecatch-title", {"episode": "Word 1", "title": "*Nice* was an insult", "subtitle": "Latin nescius: not knowing", "character": "hikari"},
  "Start with nice. It comes from the Latin nescius, which means not knowing. When it entered English around thirteen hundred, a nice person was a foolish person.",
  "نبدأ بكلمة nice. جاءت من اللاتينية nescius، ومعناها «لا يعرف». حين دخلت الإنجليزية نحو عام 1300، كان الشخص الـnice شخصًا أحمق.")
S(4, "whiteboard-hand", "process-flow", {"title": "The journey of *nice*", "steps": [{"label": "foolish", "doodle": "face-worried"}, {"label": "shy", "doodle": "thought-bubble"}, {"label": "precise", "doodle": "target"}, {"label": "pleasant", "doodle": "heart"}]},
  "Then it slowly changed. From foolish, to shy. From shy, to careful and precise. And only around the seventeen hundreds did it arrive at the meaning you know: pleasant and kind.",
  "ثم تغيّرت ببطء. من أحمق إلى خجول. ومن خجول إلى دقيق وحريص. ولم تصل إلى المعنى الذي تعرفه، لطيف وطيب، إلا نحو القرن الثامن عشر.")
S(4, "cartoon", "dialogue", {"characters": ["leo", "maya"], "location": "park", "lines": [{"speaker": 0, "text": "You are so nice!", "expression": "happy"}, {"speaker": 1, "text": "In 1300, that was an insult.", "expression": "smug", "pose": "explain"}, {"speaker": 0, "text": "Then... you are so silly?", "expression": "thinking", "pose": "think"}, {"speaker": 1, "text": "In 1200, that was a compliment!", "expression": "laughing", "pose": "point-up", "mark": "sparkle"}]},
  "You are so nice! In thirteen hundred, that was an insult. Then, you are so silly? In twelve hundred, that was a compliment!",
  "أنت nice جدًا! في عام 1300 كانت هذه إهانة. إذن، أنت silly جدًا؟ في عام 1200 كانت هذه مديحًا!")
S(4, "archival-doc", "document-reveal", {"header": "Word Origins", "title": "Silly", "date": "Old English", "subject": "From blessed to foolish", "body": "First: blessed and happy. Then: innocent. Then: weak and simple. Finally: foolish.", "classification": "Etymology", "stamp": "Changed", "stampColor": "red", "keyword": "silly"},
  "It is true. Silly comes from an Old English word that meant blessed and happy. Then it came to mean innocent. Then weak and simple. And finally, foolish. Nice went up. Silly went down.",
  "هذا صحيح. silly من كلمة في الإنجليزية القديمة معناها مبارك وسعيد. ثم صار معناها بريء. ثم ضعيف وبسيط. وأخيرًا أحمق. nice صعدت، وsilly نزلت.")
S(4, "stick-figure", "versus", {"left": {"label": "Then", "doodle": "crowd", "character": "remy", "points": ["girl = any child", "meat = any food"]}, "right": {"label": "Now", "doodle": "person", "character": "ada", "points": ["girl = female child", "meat = animal flesh"]}, "verdict": "Verdict: the meanings got narrower.", "winner": "right"},
  "Some meanings became narrower. In Middle English, a girl was a child of either sex. And meat meant any kind of food, not only the flesh of animals.",
  "بعض المعاني ضاقت. في الإنجليزية الوسطى كانت girl تعني الطفل، ذكرًا كان أو أنثى. وكانت meat تعني أي طعام، لا لحم الحيوان فقط.")
S(4, "flat-vector", "split-worlds", {"left": {"title": "awful", "illus": "blast", "world": "night", "points": ["once: full of awe"]}, "right": {"title": "awesome", "illus": "sun", "world": "sky", "points": ["today: wonderful"]}, "vs": "VS"},
  "Look at awful and awesome. Both were born from the word awe, a feeling of fear and wonder. Awful once meant full of awe. Today, one twin is terrible, and the other is wonderful.",
  "انظر إلى awful وawesome. كلتاهما وُلدت من كلمة awe، وهي شعور بالرهبة والدهشة. awful كانت تعني «مملوء بالرهبة». واليوم أحد التوأمين فظيع، والآخر رائع.")
S(4, "storybook", "story-page", {"location": "forest", "time": "dusk", "character": "wren", "companion": "rusty", "text": "A *clew* was a ball of thread, to find your way out of a maze.", "heading": "The Clue", "gesture": "wave", "gestureWord": "thread"},
  "And here is my favourite. A clue was once a clew, a ball of thread. In the old Greek story, a hero used a thread to find his way out of a labyrinth. So a clue became anything that guides you to the answer.",
  "وهذه المفضّلة عندي. كلمة clue كانت clew، أي كرة خيط. في الأسطورة اليونانية القديمة استخدم بطل خيطًا ليخرج من متاهة. فصارت clue تعني كل ما يقودك إلى الجواب.")
S(4, "ink-anatomy", "myth-vs-fact", {"myth": "Muscle is just a body word", "fact": "Muscle means *little mouse*", "mythWord": "pictures", "factWord": "mouse", "exercise": "curl", "muscle": "biceps", "bg": "white"},
  "Hidden pictures are everywhere. Muscle comes from the Latin musculus, which means little mouse. The Romans thought a moving muscle looked like a mouse running under the skin.",
  "الصور المخفية في كل مكان. muscle من اللاتينية musculus، ومعناها الفأر الصغير. رأى الرومان أن العضلة المتحركة تشبه فأرًا يجري تحت الجلد.")
S(4, "flat-vector", "big-number-world", {"value": 40, "suffix": " days", "decimals": 0, "label": "*quarantine*: quaranta giorni", "illus": "earth", "orbiters": ["moon"], "world": "space"},
  "Quarantine comes from the Italian for forty days. In the time of the plague, ships arriving in Venice had to wait forty days before anyone could come ashore.",
  "quarantine من الإيطالية، ومعناها أربعون يومًا. في زمن الطاعون كانت السفن القادمة إلى البندقية تنتظر أربعين يومًا قبل أن ينزل أحد إلى الشاطئ.")
S(4, "stopmotion-paper", "stack-of-facts", {"title": "Stories inside words", "facts": [{"big": "1", "text": "*disaster*: a bad star", "keyword": "disaster"}, {"big": "2", "text": "*breakfast*: break the fast", "keyword": "breakfast"}, {"big": "3", "text": "*goodbye*: God be with ye", "keyword": "goodbye"}]},
  "Disaster means a bad star, from a time when people blamed the stars for bad luck. Breakfast is the meal that breaks your night long fast. And goodbye is a short form of God be with ye.",
  "disaster تعني «نجم سيئ»، من زمن كان الناس يلومون النجوم على سوء الحظ. وbreakfast هي الوجبة التي تكسر صيام الليل. وgoodbye اختصار لعبارة معناها «الله معك».")
S(4, "pictogram", "title-card", {"title": "EVERY WORD IS A *STORY*", "subtitle": "AND STORIES ARE EASY TO *REMEMBER*", "subtitleKeyword": "remember", "subtitleColor": "red", "kicker": "THE KEY", "number": 4, "icon": "key"},
  "Now, stop and notice something. You have just heard the stories of about fifty words. And you will remember many of them tomorrow. Why? Because your brain loves stories.",
  "والآن توقف ولاحظ شيئًا. لقد سمعت للتو قصص نحو خمسين كلمة. وستتذكر كثيرًا منها غدًا. لماذا؟ لأن دماغك يحب القصص.")
S(4, "cartoon", "idea-moment", {"character": "maya", "location": "office", "problem": "How do I remember new words?", "idea": "Learn the story, not the list", "word": "stories", "kicker": "Try this"},
  "This is the big idea of this video. Do not learn words as a list. Learn them as stories. And that brings us to the method.",
  "هذه هي الفكرة الكبرى في هذا الفيديو. لا تتعلم الكلمات كقائمة. تعلّمها كقصص. وهذا يقودنا إلى الطريقة.")

# ───────── PART 5: Chapter 5 (the four-step method) ─────────
S(5, "flat-vector", "title-landscape", {"title": "The *Four-Step* Method", "subtitle": "Learn any word, and keep it", "kicker": "Chapter 5", "setting": "meadow", "creature": "pip", "hero": "house"},
  "Chapter five. The four step method. This is how to use everything you have just seen to learn any English word, and to keep it.",
  "الفصل الخامس. طريقة الخطوات الأربع. هكذا تستخدم كل ما رأيته لتتعلم أي كلمة إنجليزية، وتحتفظ بها.")
S(5, "whiteboard-hand", "title-board", {"title": "Step 1: Find the *root*", "subtitle": "one root, many words", "doodles": ["tree", "magnifier", "key"]},
  "Step one. Find the root. Remember, more than half of English comes from Latin and French. That means thousands of words are built from a small number of roots.",
  "الخطوة الأولى. ابحث عن الجذر. تذكّر أن أكثر من نصف الإنجليزية جاء من اللاتينية والفرنسية. أي أن آلاف الكلمات مبنية من عدد صغير من الجذور.")
S(5, "whiteboard-hand", "mind-map", {"center": "port = carry", "branches": [{"label": "transport", "doodle": "airplane"}, {"label": "export", "doodle": "cart"}, {"label": "import", "doodle": "gift"}, {"label": "portable", "doodle": "laptop"}, {"label": "support", "doodle": "handshake"}]},
  "Take the root port. In Latin, it means to carry. Transport: to carry across. Export: to carry out. Import: to carry in. Portable: able to be carried. Support: to carry from below.",
  "خذ الجذر port. معناه في اللاتينية «يحمل». transport: يحمل عبر مكان. export: يحمل إلى الخارج. import: يحمل إلى الداخل. portable: يمكن حمله. support: يحمل من الأسفل.")
S(5, "stopmotion-paper", "paper-list", {"title": "spect = look", "board": "cork", "items": [{"text": "*inspect*: look into", "keyword": "inspect"}, {"text": "*respect*: look again", "keyword": "respect"}, {"text": "*spectator*: one who looks", "keyword": "spectator"}]},
  "The root spect means to look. Inspect: to look into something. Respect: to look at someone again, because they matter. And a spectator is someone who looks at a game.",
  "الجذر spect معناه «ينظر». inspect: ينظر في داخل الشيء. respect: ينظر إلى الشخص مرة أخرى لأنه مهم. وspectator هو من ينظر إلى المباراة.")
S(5, "comic-book", "fact-panels", {"title": "Roots are superpowers", "facts": [{"label": "dict = say", "icon": "bolt", "keyword": "dict"}, {"label": "tele = far", "icon": "target", "keyword": "tele"}, {"label": "graph = write", "icon": "brain", "keyword": "graph"}, {"label": "bio = life", "icon": "heart", "keyword": "bio"}]},
  "Dict means to say: dictionary, predict, dictate. Tele means far: telephone, television, telescope. Graph means to write. Bio means life. So a biography is simply a life, written down.",
  "dict معناه «يقول»: dictionary وpredict وdictate. وtele معناه «بعيد»: telephone وtelevision وtelescope. وgraph معناه «يكتب». وbio معناه «حياة». فكلمة biography هي ببساطة حياة مكتوبة.")
S(5, "isometric", "process-line", {"title": "Build a word like *Lego*", "steps": [{"label": "un-", "kind": "warehouse", "keyword": "prefix"}, {"label": "believe", "kind": "factory", "keyword": "root"}, {"label": "-able", "kind": "shop", "keyword": "suffix"}, {"label": "unbelievable", "kind": "tower", "keyword": "unbelievable"}], "item": "box"},
  "English builds words like Lego. A prefix at the front, a root in the middle, a suffix at the end. Un, believe, able. Unbelievable. Learn the pieces, and you can open words you have never seen before.",
  "الإنجليزية تبني الكلمات مثل مكعبات الليغو. سابقة في الأول، وجذر في الوسط، ولاحقة في الآخر. un ثم believe ثم able. فتصير unbelievable. تعلّم القطع، وستفتح كلمات لم ترها من قبل.")
S(5, "pixel-quest", "inventory", {"title": "Your Word Tools", "items": [{"name": "un-", "icon": "potion", "description": "means not: unhappy, unfair", "keyword": "not"}, {"name": "re-", "icon": "map", "description": "means again: rewrite, replay", "keyword": "again"}, {"name": "-less", "icon": "heart", "description": "means without: homeless, endless", "keyword": "without"}, {"name": "-ful", "icon": "bulb", "description": "means full of: hopeful, useful", "keyword": "full"}]},
  "Here are four tools to start with. Un means not. Re means again. Less means without. And ful means full of. With only these four, you can understand hundreds of new words.",
  "هذه أربع أدوات تبدأ بها. un تعني «ليس». re تعني «مرة أخرى». less تعني «بدون». وful تعني «مملوء بـ». بهذه الأربع فقط تفهم مئات الكلمات الجديدة.")
S(5, "anime", "eyecatch-title", {"episode": "Step 2", "title": "Learn the *story*", "subtitle": "Thirty seconds in a dictionary", "character": "ren"},
  "Step two. Learn the story. When you meet a new word, spend thirty seconds on its origin. Most good dictionaries show it, under the word etymology.",
  "الخطوة الثانية. تعلّم القصة. حين تلقى كلمة جديدة، اقضِ ثلاثين ثانية على أصلها. معظم القواميس الجيدة تعرضه تحت كلمة etymology.")
S(5, "stick-figure", "figure-explains", {"character": "ada", "title": "Why stories *stick*", "doodle": "brain", "label": "a story = a hook", "notes": ["a picture", "a surprise"], "says": "Little mouse. Got it.", "keyword": "hook"},
  "A story gives your memory a hook. You will not forget that muscle is a little mouse, or that a disaster is a bad star. A plain translation gives your brain nothing to hold.",
  "القصة تعطي ذاكرتك خُطّافًا تتعلق به. لن تنسى أن muscle فأر صغير، ولا أن disaster نجم سيئ. أما الترجمة المجردة فلا تعطي دماغك شيئًا يمسك به.")
S(5, "cartoon", "explain-with-board", {"character": "priya", "location": "classroom", "title": "In your notebook", "mode": "list", "items": ["the *word* and its sound", "its story, in one line", "your own sentence"], "expression": "happy"},
  "So in your notebook, do not write only the word and its translation. Write the word, how it sounds, its story in one line, and then a sentence of your own.",
  "ففي دفترك لا تكتب الكلمة وترجمتها فقط. اكتب الكلمة، وكيف تُنطق، وقصتها في سطر واحد، ثم جملة من عندك.")
S(5, "pictogram", "title-card", {"title": "STEP 3: *USE* IT", "subtitle": "IN YOUR OWN *SENTENCE*", "subtitleKeyword": "sentence", "subtitleColor": "red", "kicker": "STEP 3", "number": 3, "icon": "phone"},
  "Step three. Use it. A word you only read is a word you will lose. Within one day, put the new word into a sentence about your own life.",
  "الخطوة الثالثة. استخدمها. الكلمة التي تقرؤها فقط كلمة ستضيع منك. خلال يوم واحد ضع الكلمة الجديدة في جملة عن حياتك أنت.")
S(5, "anime", "dialogue", {"characters": ["hikari", "kaito"], "location": "rooftop", "lines": [{"speaker": 0, "text": "New word: portable.", "expression": "smile"}, {"speaker": 1, "text": "Sentence, please.", "expression": "serious"}, {"speaker": 0, "text": "My laptop is portable. My homework is not.", "expression": "smug"}, {"speaker": 1, "text": "...Accepted.", "expression": "sweat-drop", "reaction": "sweat-drop"}]},
  "New word: portable. Sentence, please. My laptop is portable, but my homework is not. Accepted.",
  "كلمة جديدة: portable. هات جملة من فضلك. حاسوبي portable، أما واجبي فلا. مقبولة.")
S(5, "ink-anatomy", "title-card", {"title": "Words are *muscles*", "kicker": "Step 3", "sub": "use them or lose them", "character": "rook", "pose": "flex", "muscle": "arms", "pulseWord": "stronger", "bg": "white"},
  "Make the sentence true, and make it yours. A real sentence about your room, your family or your day ties the word to your own life, and that makes the memory stronger.",
  "اجعل الجملة صادقة، واجعلها جملتك. جملة حقيقية عن غرفتك أو أسرتك أو يومك تربط الكلمة بحياتك، وهذا يقوّي الذاكرة.")
S(5, "stick-figure", "title-card", {"kicker": "Step 4", "title": "*Review* it, at the right time", "subtitle": "(the step almost nobody does)", "character": "pip", "pose": "point", "doodles": ["calendar", "hourglass", "brain"]},
  "And now, step four. The step almost nobody does. Review the word, at the right time. This one step can decide whether a word stays with you for a day, or for life.",
  "والآن الخطوة الرابعة. الخطوة التي لا يكاد أحد يطبّقها. راجع الكلمة في الوقت المناسب. هذه الخطوة وحدها قد تحدد هل تبقى الكلمة معك يومًا، أم مدى الحياة.")
S(5, "stick-figure", "hand-drawn-graph", {"title": "The forgetting curve", "type": "line", "values": [10, 6, 4.5, 3.5, 3, 2.5], "labels": ["now", "20 min", "1 hour", "1 day", "2 days", "6 days"], "xLabel": "TIME", "yLabel": "WHAT YOU REMEMBER", "highlight": 1, "annotations": [{"index": 1, "text": "fast drop"}, {"index": 5, "text": "slow fade"}], "caption": "After Ebbinghaus, 1885.", "character": "juno", "keyword": "forgetting"},
  "In eighteen eighty five, a German psychologist named Hermann Ebbinghaus tested his own memory. He found that we forget new information very quickly at first, and then more slowly. This is called the forgetting curve.",
  "في عام 1885 اختبر عالم نفس ألماني اسمه هيرمان إبنغهاوس ذاكرته هو. فوجد أننا ننسى المعلومة الجديدة بسرعة كبيرة في البداية، ثم ببطء أكثر. ويُسمّى هذا منحنى النسيان.")
S(5, "flat-vector", "cause-effect", {"title": "Beat the forgetting curve", "steps": [{"illus": "sprout", "label": "1 day"}, {"illus": "flower", "label": "3 days"}, {"illus": "tree", "label": "1 week"}, {"illus": "mountain", "label": "1 month"}], "world": "sky"},
  "But every time you review a word just before you forget it, the memory becomes stronger and lasts longer. So review a new word after one day. Then after three days. Then after a week. Then after a month.",
  "لكن كلما راجعت الكلمة قبل أن تنساها بقليل، قويت الذاكرة ودامت أطول. فراجع الكلمة الجديدة بعد يوم. ثم بعد ثلاثة أيام. ثم بعد أسبوع. ثم بعد شهر.")
S(5, "pixel-quest", "quest-log", {"title": "Review Quests", "quests": [{"title": "Day 1: say it and use it", "keyword": "spaced"}, {"title": "Day 3: test yourself", "keyword": "test"}, {"title": "Week 1: a new sentence", "keyword": "cover"}, {"title": "Month 1: use it in conversation", "keyword": "effort"}]},
  "This is called spaced repetition. And the important rule is this: do not just read the word again. Test yourself. Cover the meaning, and try to remember it. The effort of remembering is what builds the memory.",
  "يُسمّى هذا التكرار المتباعد. والقاعدة المهمة: لا تكتفِ بقراءة الكلمة مرة أخرى. اختبر نفسك. غطِّ المعنى وحاول أن تتذكره. فجهد التذكّر هو ما يبني الذاكرة.")
S(5, "whiteboard-hand", "process-flow", {"title": "The four steps", "steps": [{"label": "Root", "doodle": "tree"}, {"label": "Story", "doodle": "book"}, {"label": "Use", "doodle": "pencil"}, {"label": "Review", "doodle": "calendar"}]},
  "So here is the whole method. Find the root. Learn the story. Use it in your own sentence. And review it at the right time. Root, story, use, review.",
  "فهذه هي الطريقة كاملة. ابحث عن الجذر. تعلّم القصة. استخدم الكلمة في جملة من عندك. وراجعها في الوقت المناسب. جذر، قصة، استخدام، مراجعة.")
S(5, "flat-vector", "big-number-world", {"value": 3000, "suffix": "", "decimals": 0, "label": "common word *families*", "illus": "earth", "orbiters": ["moon", "satellite"], "world": "space"},
  "And which words should you learn first? Research on vocabulary suggests that about three thousand common word families cover around ninety five percent of everyday spoken English.",
  "وأي الكلمات تتعلم أولًا؟ تشير أبحاث المفردات إلى أن نحو ثلاثة آلاف عائلة كلمات شائعة تغطي قرابة خمسة وتسعين بالمئة من الإنجليزية المنطوقة اليومية.")
S(5, "isometric", "town-signs", {"signs": [{"text": "help, helpful, helper", "keyword": "family"}, {"text": "Common words first", "keyword": "common"}, {"text": "Learn them deeply", "keyword": "deeply"}], "theme": "day"},
  "A word family is a word with its relatives, like help, helpful, helpless and helper. So start with the most common families, and learn them deeply, before you chase rare and fancy words.",
  "عائلة الكلمة هي الكلمة مع أقاربها، مثل help وhelpful وhelpless وhelper. فابدأ بالعائلات الأكثر شيوعًا، وتعلّمها بعمق، قبل أن تطارد الكلمات النادرة والفاخرة.")
S(5, "doodle-world", "list-of-ways", {"location": "nile", "character": "nia", "title": "meet words in the wild", "items": [{"text": "read what you *love*", "word": "love", "activity": "hold-up", "prop": "fan"}, {"text": "watch with subtitles", "word": "subtitles", "activity": "look-around", "mark": "..."}, {"text": "listen every *day*", "word": "day", "activity": "carry", "prop": "jug"}]},
  "And meet your words in the wild. Read things you love. Watch with English subtitles. Listen every day. You need to meet a word many times, in different places, before it truly becomes yours.",
  "والتقِ بكلماتك في بيئتها الطبيعية. اقرأ ما تحب. شاهد مع ترجمة إنجليزية. استمع كل يوم. تحتاج أن تلقى الكلمة مرات كثيرة، في أماكن مختلفة، قبل أن تصبح لك حقًّا.")
S(5, "ink-anatomy", "routine-list", {"title": "The *15 minute* plan", "kicker": "Every day", "items": [{"exercise": "pushup", "name": "Review old words", "sets": 1, "reps": 5, "unit": " min", "word": "review"}, {"exercise": "squat", "name": "Learn 3 new words", "sets": 1, "reps": 5, "unit": " min", "word": "learn"}, {"exercise": "plank", "name": "Write 3 sentences", "sets": 1, "reps": 3, "word": "write"}, {"exercise": "hang", "name": "Read or listen", "sets": 1, "reps": 5, "unit": " min", "word": "finish"}], "note": "small steps, every single day", "bg": "white"},
  "Here is a simple daily plan. Five minutes: review your old words. Five minutes: learn three new words, with their roots and stories. Then write three sentences. And finish with five minutes of reading or listening.",
  "وهذه خطة يومية بسيطة. خمس دقائق: راجع كلماتك القديمة. خمس دقائق: تعلّم ثلاث كلمات جديدة بجذورها وقصصها. ثم اكتب ثلاث جمل. واختم بخمس دقائق قراءة أو استماع.")
S(5, "whiteboard-hand", "big-number", {"value": "1,000+", "label": "new words in one year", "doodle": "trophy", "keyword": "thousand"},
  "Three new words a day does not sound like much. But in one year, that is more than one thousand words. Learned properly. Remembered for life.",
  "ثلاث كلمات جديدة في اليوم لا تبدو كثيرة. لكنها في سنة واحدة أكثر من ألف كلمة. متعلَّمة كما ينبغي. ومحفوظة مدى الحياة.")

# ───────── PART 6: ending ─────────
S(6, "pictogram", "checklist-protocol", {"title": "MISTAKES TO AVOID", "steps": [{"text": "LONG *LISTS*, NO CONTEXT", "icon": "envelope", "keyword": "lists", "pose": "stop", "done": False}, {"text": "ONLY *TRANSLATING*", "icon": "phone", "keyword": "translate", "pose": "stop", "done": False}, {"text": "NEVER *REVIEWING*", "icon": "clock", "keyword": "reviewing", "pose": "shrug", "done": False}], "character": "you"},
  "Before we finish, three mistakes to avoid. Do not memorise long lists with no context. Do not only translate. And never learn a word once and walk away without reviewing it.",
  "قبل أن ننهي، ثلاثة أخطاء تجنّبها. لا تحفظ قوائم طويلة بلا سياق. لا تكتفِ بالترجمة. ولا تتعلم كلمة مرة واحدة ثم تتركها دون مراجعة.")
S(6, "storybook", "winding-path", {"title": "The road of English", "character": "wren", "stops": [{"date": "450", "label": "Old English: the *heart*", "keyword": "heart"}, {"date": "1066", "label": "French: the power", "keyword": "power"}, {"date": "1500", "label": "Latin and Greek: the science", "keyword": "science"}, {"date": "Today", "label": "Your turn", "keyword": "turn"}]},
  "Let us look back at the road. Old English gave the language its heart. French gave it power. Latin and Greek gave it science. The whole world gave it colour. And today, it is your turn to add to the story.",
  "لننظر إلى الطريق خلفنا. الإنجليزية القديمة أعطت اللغة قلبها. الفرنسية أعطتها السلطة. اللاتينية واليونانية أعطتاها العلم. والعالم كله أعطاها الألوان. واليوم جاء دورك لتضيف إلى القصة.")
S(6, "comic-book", "caption-narration", {"label": "Remember...", "background": "city", "mood": "night", "weather": "rain", "character": "vex", "shot": "silhouette", "captions": [{"text": "Every word you learn was carried here by someone."}, {"text": "Now you carry it forward."}]},
  "Every word you learn was carried to you by someone. A farmer, a sailor, a scholar, a poet. When you learn it, you become part of that chain.",
  "كل كلمة تتعلمها حملها إليك إنسان. مزارع، أو بحّار، أو عالم، أو شاعر. وحين تتعلمها تصبح أنت حلقة في تلك السلسلة.")
S(6, "anime", "lesson-board", {"character": "yuki", "title": "Your homework", "points": [{"text": "Pick *one* word today", "word": "one"}, {"text": "Find its *story*", "word": "story"}, {"text": "Write it in the *comments*", "word": "comments"}]},
  "So here is your homework. Pick one English word today. Find its story. And write it in the comments, with a sentence of your own.",
  "وهذا واجبك. اختر كلمة إنجليزية واحدة اليوم. ابحث عن قصتها. واكتبها في التعليقات، مع جملة من عندك.")
S(6, "stopmotion-paper", "paper-quote", {"quote": "A word with a *story* is a word you keep.", "author": "Mastering English Library", "role": "", "keyword": "story", "backdrop": "cork"},
  "A word with a story is a word you keep. If this video helped you, subscribe to Mastering English Library, and I will see you in the next one.",
  "الكلمة التي لها قصة كلمة تبقى معك. إن أفادك هذا الفيديو فاشترك في القناة، وأراك في الفيديو القادم.")

# ───────── extra scenes, inserted before each part's closing scene ─────────
def I(part, style, template, props, say, ar):
    P[part].insert(len(P[part]) - 1, {"style": style, "template": template, "props": props, "say": say, "ar": ar})

# Part 1 extras: the Viking layer, legal pairs, the Renaissance
I(1, "doodle-world", "headline-thumb", {"location": "savanna", "character": "og", "headline": "A *FOURTH* LAYER", "keyword": "Vikings", "kicker": "wait", "reaction": "hot", "setup": "neutral", "setupPose": "look-around", "animal": "camel"},
  "And there is a fourth layer, hiding inside the first. From the seven hundreds, Vikings from Scandinavia raided England, and then settled there. Their language, Old Norse, mixed with Old English.",
  "وهناك طبقة رابعة مختبئة داخل الأولى. منذ القرن الثامن أغار الفايكنغ من إسكندنافيا على إنجلترا، ثم استقروا فيها. واختلطت لغتهم، النوردية القديمة، بالإنجليزية القديمة.")
I(1, "stopmotion-paper", "paper-list", {"title": "Gifts from the Vikings", "board": "cork", "items": [{"text": "*sky*, egg, knife", "keyword": "sky"}, {"text": "*window* = wind-eye", "keyword": "window"}, {"text": "*they*, them, their", "keyword": "they"}]},
  "The Vikings gave English sky, egg and knife. They gave it window, which meant wind eye, a hole in the roof for the smoke. They even gave it the words they, them and their.",
  "أعطى الفايكنغ الإنجليزية sky وegg وknife. وأعطوها window، وكان معناها «عين الريح»، فتحة في السقف للدخان. بل أعطوها حتى الكلمات they وthem وtheir.")
I(1, "whiteboard-hand", "before-after", {"before": {"label": "shirt", "doodle": "stick-wave", "note": "Old English"}, "after": {"label": "skirt", "doodle": "stick-run", "note": "Old Norse"}, "beforeTitle": "English", "afterTitle": "Viking"},
  "Sometimes English kept both versions. Shirt is the Old English word. Skirt is its Old Norse cousin. They began as the same word, and ended up as two different pieces of clothing.",
  "وأحيانًا احتفظت الإنجليزية بالنسختين. shirt هي الكلمة الإنجليزية القديمة. وskirt قريبتها النوردية. بدأتا كلمة واحدة، وانتهتا قطعتين مختلفتين من الملابس.")
I(1, "archival-doc", "letter-excerpt", {"quote": "This is my last will and testament.", "salutation": "To whom it may concern,", "signoff": "Signed,", "signature": "A. Lawyer", "author": "A legal formula", "role": "English word, then Latin word", "date": "Still used today", "place": "England"},
  "You can even see the layers side by side in legal English. Lawyers still write last will and testament. Will is the Old English word. Testament is the Latin one. Two words, one meaning, sitting together for centuries.",
  "وترى الطبقات جنبًا إلى جنب في الإنجليزية القانونية. ما زال المحامون يكتبون last will and testament. كلمة will من الإنجليزية القديمة. وtestament من اللاتينية. كلمتان بمعنى واحد، متجاورتان منذ قرون.")
I(1, "flat-vector", "timeline-orbit", {"title": "New words for *new* ideas", "center": "earth", "events": [{"year": "1500s", "label": "education", "illus": "brain"}, {"year": "1500s", "label": "skeleton", "illus": "body"}, {"year": "1600s", "label": "atmosphere", "illus": "cloud"}, {"year": "1600s", "label": "thermometer", "illus": "sun"}]},
  "And during the Renaissance, thousands of learned words arrived from Latin and Greek. Education. Skeleton. Atmosphere. Thermometer. When science needed a new name, it almost always went to these two languages.",
  "وفي عصر النهضة وصلت آلاف الكلمات العلمية من اللاتينية واليونانية. education وskeleton وatmosphere وthermometer. كلما احتاج العلم اسمًا جديدًا، ذهب غالبًا إلى هاتين اللغتين.")

# Part 2 extras
I(2, "stick-figure", "list-with-doodles", {"title": "More Arabic in English", "items": [{"text": "lemon: laymun", "doodle": "apple"}, {"text": "syrup: sharab", "doodle": "coffee"}, {"text": "giraffe: zarafa", "doodle": "dog"}, {"text": "admiral: amir", "doodle": "flag"}], "style": "doodles", "character": "ada", "endPose": "celebrate"},
  "And the list goes on. Lemon comes from laymun. Syrup comes from sharab, a drink. Giraffe comes from zarafa. And admiral comes from amir, a commander.",
  "والقائمة تطول. lemon من «ليمون». وsyrup من «شراب». وgiraffe من «زرافة». وadmiral من «أمير»، أي القائد.")
I(2, "flat-vector", "scale-compare", {"items": [{"illus": "star", "label": "Altair", "value": 2, "note": "the flying one"}, {"illus": "star", "label": "Aldebaran", "value": 4, "note": "the follower"}, {"illus": "sun", "label": "Vega", "value": 3, "note": "the falling eagle"}], "world": "space"},
  "Even the night sky speaks Arabic. Many of the brightest stars still carry Arabic names, like Altair, Aldebaran and Vega, written down by Arab astronomers centuries ago.",
  "حتى سماء الليل تتكلم العربية. كثير من ألمع النجوم ما زال يحمل أسماء عربية، مثل الطائر والدبران والواقع، دوّنها الفلكيون العرب قبل قرون.")
I(2, "map-reveal", "fact-countdown", {"region": "europe", "title": "NEIGHBOURS WHO LENT WORDS", "facts": [{"place": "netherlands", "label": "Dutch", "keyword": "Dutch", "sub": "YACHT, SKIPPER, DECK"}, {"place": "france", "label": "French", "keyword": "French", "sub": "RESTAURANT, MENU, CHEF"}, {"place": "italy", "label": "Italian", "keyword": "Italian", "sub": "OPERA, VIOLIN, BALCONY"}]},
  "Closer to home, the neighbours lent words too. From Dutch sailors came yacht, skipper and deck. From French kitchens came restaurant, menu and chef. And from Italy came opera, violin and balcony.",
  "وعلى مقربة، أقرضها الجيران كلمات أيضًا. من البحّارة الهولنديين جاءت yacht وskipper وdeck. ومن المطابخ الفرنسية جاءت restaurant وmenu وchef. ومن إيطاليا جاءت opera وviolin وbalcony.")
I(2, "anime", "lesson-board", {"character": "yuki", "title": "New words from Japan", "points": [{"text": "*emoji* = picture + character", "word": "emoji"}, {"text": "*karaoke* = empty orchestra", "word": "karaoke"}, {"text": "*tycoon* = great lord", "word": "tycoon"}]},
  "And it never stopped. Emoji is Japanese for picture character. It has nothing to do with the word emotion. Karaoke means empty orchestra. And tycoon comes from a Japanese title meaning great lord.",
  "ولم يتوقف ذلك قط. emoji يابانية معناها «حرف مصوَّر»، ولا علاقة لها بكلمة emotion. وkaraoke معناها «أوركسترا فارغة». وtycoon من لقب ياباني معناه «السيد العظيم».")
I(2, "cartoon", "dialogue", {"characters": ["sam", "kai"], "location": "market", "lines": [{"speaker": 0, "text": "So English takes words from everyone?", "expression": "surprised"}, {"speaker": 1, "text": "And gives them back.", "expression": "happy", "pose": "explain"}, {"speaker": 0, "text": "Like what?", "expression": "thinking"}, {"speaker": 1, "text": "Internet. Computer. Weekend.", "expression": "smug", "pose": "point-up"}]},
  "So English takes words from everyone? And gives them back. Like what? Internet, computer and weekend are now used in languages all over the world.",
  "إذن الإنجليزية تأخذ الكلمات من الجميع؟ وتردّها أيضًا. مثل ماذا؟ internet وcomputer وweekend تُستخدم اليوم في لغات كثيرة حول العالم.")

# Part 3 extras
I(3, "comic-book", "dialogue-panels", {"left": "pip", "right": "nova", "setting": "lab", "lines": [{"speaker": "left", "text": "Why is there an H in *ghost*?", "kind": "speech", "expression": "think"}, {"speaker": "right", "text": "Early printers from Flanders added it!", "kind": "speech", "expression": "happy"}, {"speaker": "left", "text": "A printing habit?!", "kind": "shout", "expression": "shock", "reaction": "grin"}]},
  "Why is there an h in ghost? Many of Caxton's printers came from Flanders, and in Flemish the word was spelled with g h. They added the h, and it stayed.",
  "لماذا يوجد حرف h في ghost؟ كثير من طبّاعي كاكستون جاؤوا من فلاندرز، وكانت الكلمة تُكتب في الفلمنكية بالحرفين gh. فأضافوا h، وبقي.")
I(3, "whiteboard-hand", "list-with-doodles", {"title": "One spelling, five sounds", "items": [{"text": "though", "doodle": "thought-bubble"}, {"text": "through", "doodle": "key"}, {"text": "tough", "doodle": "mountain"}, {"text": "cough", "doodle": "cloud"}], "check": False},
  "And then there are the letters o u g h. Though. Through. Tough. Cough. The same four letters, four different sounds. Each one is a fossil from a different old pronunciation.",
  "ثم هناك الحروف ough. كلمات though وthrough وtough وcough. الحروف الأربعة نفسها، وأربعة أصوات مختلفة. كل واحدة أحفورة من نطق قديم مختلف.")
I(3, "stopmotion-paper", "stack-of-facts", {"title": "They were once spoken", "facts": [{"big": "K", "text": "*knee*, knife, know", "keyword": "knee"}, {"big": "W", "text": "*write*, wrong, wrist", "keyword": "write"}, {"big": "GH", "text": "*night*, light, daughter", "keyword": "daughter"}]},
  "The k in knee, knife and know was once pronounced. So was the w in write, wrong and wrist. And the g h in night, light and daughter was a rough sound in the throat.",
  "حرف k في knee وknife وknow كان يُنطق يومًا. وكذلك حرف w في write وwrong وwrist. والحرفان gh في night وlight وdaughter كانا صوتًا خشنًا في الحلق.")
I(3, "flat-vector", "split-worlds", {"left": {"title": "British", "illus": "house", "world": "sky", "points": ["colour, centre"]}, "right": {"title": "American", "illus": "city", "world": "dusk", "points": ["color, center"]}, "vs": "VS"},
  "One man did manage to change some spellings. In eighteen twenty eight, Noah Webster published his American dictionary, with simpler forms. That is why Americans write color and center, and the British write colour and centre.",
  "رجل واحد نجح في تغيير بعض التهجئات. في عام 1828 نشر نوح ويبستر قاموسه الأمريكي بصيغ أبسط. ولهذا يكتب الأمريكيون color وcenter، ويكتب البريطانيون colour وcentre.")

# Part 4 extras
I(4, "whiteboard-hand", "draw-concept", {"doodle": "team", "label": "*companion* = with bread", "caption": "Latin: com + panis", "keyword": "companion", "accents": ["heart"]},
  "A companion is, literally, someone you share bread with. It comes from the Latin com, meaning with, and panis, meaning bread. A company was first a group of people who ate together.",
  "كلمة companion تعني حرفيًا من تتقاسم معه الخبز. جاءت من اللاتينية com بمعنى «مع»، وpanis بمعنى «خبز». وكلمة company كانت أولًا جماعة يأكلون معًا.")
I(4, "comic-book", "fact-panels", {"title": "Hidden pictures", "facts": [{"label": "candidate: dressed in white", "icon": "target", "keyword": "candidate"}, {"label": "salary: from salt", "icon": "heart", "keyword": "salary"}, {"label": "panic: the god Pan", "icon": "bolt", "keyword": "panic"}, {"label": "school: free time", "icon": "brain", "keyword": "school"}]},
  "A candidate was a Roman who wore a bright white toga when asking for votes. Salary is linked to sal, the Latin word for salt. Panic comes from the Greek god Pan. And school comes from a Greek word that meant free time.",
  "كلمة candidate كانت تُطلق على الروماني الذي يلبس رداءً أبيض ناصعًا وهو يطلب الأصوات. وsalary مرتبطة بكلمة sal، أي الملح باللاتينية. وpanic من اسم الإله اليوناني Pan. وschool من كلمة يونانية معناها وقت الفراغ.")
I(4, "storybook", "list-of-things", {"title": "Small poems in everyday words", "character": "bramble", "items": [{"label": "daisy", "object": "heart", "note": "the day's eye", "keyword": "daisy"}, {"label": "nightmare", "object": "lantern", "note": "a night spirit", "keyword": "nightmare"}, {"label": "alphabet", "object": "honey", "note": "alpha + beta", "keyword": "alphabet"}]},
  "Some everyday words are small poems. A daisy is the day's eye, because the flower opens in the morning. A nightmare was a spirit that sat on sleepers in the night. And alphabet is simply alpha and beta, the first two Greek letters.",
  "وبعض الكلمات اليومية قصائد صغيرة. daisy هي «عين النهار»، لأن الزهرة تتفتح في الصباح. وnightmare كانت روحًا تجلس على النائمين في الليل. وalphabet هي ببساطة alpha وbeta، أول حرفين في اليونانية.")
I(4, "cartoon", "narrator-talks", {"character": "leo", "location": "city-street", "title": "A *villain* was a farm worker", "kicker": "Surprise", "keyword": "villain", "expression": "surprised", "beats": [{"word": "unfair", "pose": "shrug", "expression": "skeptical"}]},
  "And a villain was not a criminal at all. The word first meant a poor farm worker. Rich people looked down on farm workers, so the word slowly became an insult. Words can be unfair.",
  "وكلمة villain لم تكن تعني مجرمًا أبدًا. كان معناها الأول عامل مزرعة فقير. نظر الأغنياء إلى عمال المزارع باحتقار، فتحولت الكلمة ببطء إلى شتيمة. الكلمات قد تكون ظالمة.")

# Part 5 extras
I(5, "isometric", "iso-title", {"title": "Let's try it on *one* word", "blockText": "WORD", "kicker": "Live example", "subtitle": "manuscript"},
  "Let us try the whole method on one word. The word is manuscript. Maybe you have seen it before. Maybe not. Watch how the four steps open it up.",
  "لنجرّب الطريقة كلها على كلمة واحدة. الكلمة هي manuscript. ربما رأيتها من قبل، وربما لا. شاهد كيف تفتحها الخطوات الأربع.")
I(5, "whiteboard-hand", "process-flow", {"title": "Step 1: the roots", "steps": [{"label": "manu = hand", "doodle": "handshake"}, {"label": "script = written", "doodle": "pencil"}, {"label": "manuscript", "doodle": "document"}]},
  "Step one, the roots. Manu means hand, as in manual, and manufacture, which first meant made by hand. Script means written, as in describe and prescription. So a manuscript is something written by hand.",
  "الخطوة الأولى: الجذور. manu معناها «يد»، كما في manual، وفي manufacture التي كانت تعني «مصنوع باليد». وscript معناها «مكتوب»، كما في describe وprescription. فكلمة manuscript هي شيء مكتوب باليد.")
I(5, "archival-doc", "photo-pan", {"subject": "building", "tone": "sepia", "title": "The Manuscript", "subtitle": "Every book was copied out by hand", "date": "Before 1450", "place": "Europe", "caption": "Written by hand", "move": "pan-right", "keyword": "hand"},
  "Step two, the story. Before the printing press, every single book in the world was a manuscript, copied out by hand, letter by letter. Today, writers still call their unpublished book a manuscript.",
  "الخطوة الثانية: القصة. قبل المطبعة كان كل كتاب في العالم manuscript، يُنسخ باليد حرفًا حرفًا. وما زال الكتّاب اليوم يسمّون كتابهم غير المنشور manuscript.")
I(5, "cartoon", "idea-moment", {"character": "kai", "location": "living-room", "problem": "Step 3: my own sentence?", "idea": "My grandfather kept an old manuscript.", "word": "sentence", "kicker": "Make it true"},
  "Step three, your sentence. My grandfather kept an old manuscript in a wooden box. Make yours true, or at least make it yours. Step four, review it tomorrow, then in three days, then next week.",
  "الخطوة الثالثة: جملتك. «كان جدي يحتفظ بـmanuscript قديم في صندوق خشبي». اجعل جملتك صادقة، أو على الأقل اجعلها جملتك. الخطوة الرابعة: راجعها غدًا، ثم بعد ثلاثة أيام، ثم في الأسبوع القادم.")
I(5, "stick-figure", "list-with-doodles", {"title": "One word unlocked five", "items": [{"text": "manual", "doodle": "book"}, {"text": "manufacture", "doodle": "gear"}, {"text": "describe", "doodle": "pencil"}, {"text": "prescription", "doodle": "document"}], "style": "doodles", "character": "juno", "endPose": "mind-blown"},
  "And look what happened. You learned one word, but you also unlocked manual, manufacture, describe and prescription. That is the power of roots. One key, many doors.",
  "وانظر ماذا حدث. تعلّمت كلمة واحدة، لكنك فتحت معها manual وmanufacture وdescribe وprescription. هذه قوة الجذور. مفتاح واحد، وأبواب كثيرة.")
I(5, "comic-book", "versus", {"left": {"name": "Alone", "character": "pip", "points": ["rain", "mistake"], "palette": "red", "pose": "fist", "expression": "grin"}, "right": {"name": "With partners", "character": "bolt", "points": ["heavy rain", "make a mistake"], "palette": "blue", "pose": "fight", "expression": "determined"}, "keyword": "partners", "sfx": "TEAM!"},
  "One more secret. Words have favourite partners. We say heavy rain, not strong rain. We make a mistake, we do not do a mistake. So never learn a word alone. Learn it with its partners.",
  "وسرّ آخر. للكلمات شركاء مفضّلون. نقول heavy rain، لا strong rain. ونقول make a mistake، لا do a mistake. فلا تتعلم الكلمة وحدها أبدًا. تعلّمها مع شركائها.")
I(5, "whiteboard-hand", "before-after", {"before": {"label": "words you understand", "doodle": "eye", "note": "passive"}, "after": {"label": "words you use", "doodle": "megaphone", "note": "active"}, "beforeTitle": "Passive", "afterTitle": "Active"},
  "And remember the difference between words you understand and words you use. Reading and listening build the first group. Only speaking and writing move a word into the second.",
  "وتذكّر الفرق بين الكلمات التي تفهمها والكلمات التي تستخدمها. القراءة والاستماع يبنيان المجموعة الأولى. والكلام والكتابة وحدهما ينقلان الكلمة إلى الثانية.")
I(5, "pictogram", "do-dont", {"title": "WHEN YOU *FORGET* A WORD", "do": {"text": "REVIEW IT *AGAIN*", "character": "you", "pose": "wave", "object": "phone"}, "dont": {"text": "CALL YOURSELF *BAD*", "character": "you", "pose": "cover-eyes", "object": "phone", "accent": True}, "verdict": "FORGETTING IS *NORMAL*", "verdictKeyword": "normal"},
  "And when you forget a word, do not call yourself bad at languages. Forgetting is normal. It is part of how memory works. Just review it again, and it will come back stronger.",
  "وحين تنسى كلمة، لا تقل إنك سيئ في اللغات. النسيان طبيعي. إنه جزء من طريقة عمل الذاكرة. راجعها مرة أخرى فقط، وستعود أقوى.")

# ───────── second round of extras ─────────
I(1, "isometric", "town-signs", {"signs": [{"text": "170,000 words in use", "keyword": "thousand"}, {"text": "You need a fraction", "keyword": "fraction"}, {"text": "Learn the layers", "keyword": "layers"}], "theme": "dusk"},
  "Add all these layers together, and you get a giant. The Oxford English Dictionary lists about one hundred and seventy thousand words in current use. The good news is that you only need a small fraction of them, and the layers tell you which ones to choose.",
  "اجمع هذه الطبقات كلها وستحصل على لغة عملاقة. يسجّل قاموس أكسفورد نحو مئة وسبعين ألف كلمة مستخدمة حاليًا. والخبر السار أنك تحتاج جزءًا صغيرًا منها فقط، والطبقات تدلّك على ما تختاره.")
I(2, "stopmotion-paper", "stack-of-facts", {"title": "From Persian", "facts": [{"big": "1", "text": "*bazaar*: a market", "keyword": "bazaar"}, {"big": "2", "text": "*caravan*: travellers together", "keyword": "caravan"}, {"big": "3", "text": "*paradise*: a walled garden", "keyword": "paradise"}]},
  "From Persian came bazaar, a market, and caravan, a group of travellers. And paradise comes from an old Persian word for a walled garden. For people of the desert, a garden with walls and water was heaven.",
  "ومن الفارسية جاءت bazaar أي السوق، وcaravan أي القافلة. وكلمة paradise من كلمة فارسية قديمة تعني الحديقة المسوّرة. فالحديقة ذات الأسوار والماء كانت جنّة عند أهل الصحراء.")
I(2, "pictogram", "rule-card", {"number": 2, "rule": "*CHECKMATE* IS PERSIAN", "icon": "key", "forbidden": False, "subtext": "SHAH MAT: THE KING IS HELPLESS", "subtextKeyword": "helpless", "character": "you", "pose": "point"},
  "And every time you say checkmate, you are speaking Persian. It comes from shah mat, which is usually explained as the king is helpless. The game of chess carried the word across the world.",
  "وكلما قلت checkmate فأنت تتكلم الفارسية. جاءت من «شاه مات»، وتُفسَّر عادةً بأن الملك صار عاجزًا. ولعبة الشطرنج حملت الكلمة عبر العالم.")
I(3, "cartoon", "explain-with-board", {"character": "maya", "location": "classroom", "title": "The magic e", "mode": "list", "items": ["hop becomes *hope*", "bit becomes *bite*", "cut becomes *cute*"], "expression": "happy"},
  "Some patterns do help you. Look at the letter e at the end of a word. Hop becomes hope. Bit becomes bite. Cut becomes cute. That silent e tells you the vowel before it is long.",
  "وبعض الأنماط تساعدك فعلًا. انظر إلى حرف e في آخر الكلمة. hop تصير hope. وbit تصير bite. وcut تصير cute. هذا الحرف الصامت يخبرك أن حرف العلة قبله طويل.")
I(3, "stick-figure", "versus", {"left": {"label": "Same sound", "doodle": "eye", "character": "juno", "points": ["knight / night", "write / right"]}, "right": {"label": "Different spelling", "doodle": "pencil", "character": "hank", "points": ["sea / see", "flour / flower"]}, "verdict": "Verdict: spelling tells them apart.", "winner": "right"},
  "And strange spelling has one real advantage. Knight and night sound the same. So do write and right, sea and see. On the page, the old spelling tells you instantly which one the writer means.",
  "وللتهجئة الغريبة فائدة حقيقية. knight وnight تُنطقان بالطريقة نفسها. وكذلك write وright، وsea وsee. وعلى الورق تخبرك التهجئة القديمة فورًا أيّ الكلمتين يقصد الكاتب.")
I(4, "whiteboard-hand", "timeline", {"title": "Hello is young", "events": [{"date": "1820s", "label": "hello: a shout for attention", "doodle": "megaphone"}, {"date": "1870s", "label": "the telephone arrives", "doodle": "phone"}, {"date": "Today", "label": "the world's greeting", "doodle": "globe"}]},
  "Even hello has a story, and it is a young one. In the early eighteen hundreds, it was mostly a shout to get attention. Then the telephone arrived, people needed a word to start a call, and hello became the greeting of the world.",
  "حتى hello لها قصة، وهي قصة حديثة. في أوائل القرن التاسع عشر كانت في الغالب صيحة لجذب الانتباه. ثم جاء الهاتف، واحتاج الناس كلمة يبدؤون بها المكالمة، فصارت hello تحية العالم.")
I(4, "pixel-quest", "level-up", {"level": 4, "stats": [{"label": "omnibus to bus", "from": 70, "to": 30, "keyword": "bus"}, {"label": "telephone to phone", "from": 90, "to": 50, "keyword": "phone"}, {"label": "influenza to flu", "from": 90, "to": 30, "keyword": "flu"}], "unlock": "Short Words"},
  "And words love to get shorter. Omnibus became bus. Telephone became phone. Influenza became flu. And refrigerator became fridge. When people use a word every day, they cut it down.",
  "والكلمات تحب أن تقصر. omnibus صارت bus. وtelephone صارت phone. وinfluenza صارت flu. وrefrigerator صارت fridge. حين يستخدم الناس كلمة كل يوم، يختصرونها.")
I(5, "flat-vector", "scale-compare", {"items": [{"illus": "star", "label": "vis = see", "value": 3, "note": "vision, visible, video"}, {"illus": "moon", "label": "aud = hear", "value": 3, "note": "audio, audience"}, {"illus": "planet", "label": "scrib = write", "value": 3, "note": "describe, scribble"}], "world": "space"},
  "Three more keys for your collection. Vis and vid mean to see: vision, visible, video. Aud means to hear: audio, audience, auditorium. And scrib means to write: describe, and scribble.",
  "وثلاثة مفاتيح أخرى لمجموعتك. vis وvid معناهما «يرى»: vision وvisible وvideo. وaud معناها «يسمع»: audio وaudience وauditorium. وscrib معناها «يكتب»: describe وscribble.")
I(5, "anime", "lesson-board", {"character": "ren", "title": "Learn the stress too", "points": [{"text": "a *RE*cord (noun)", "word": "noun"}, {"text": "to re*CORD* (verb)", "word": "verb"}, {"text": "Mark the strong part", "word": "strong"}]},
  "When you learn the sound, learn the stress too. A record, the noun, is strong at the start. To record, the verb, is strong at the end. So in your notebook, mark the strong part of every new word.",
  "وحين تتعلم الصوت، تعلّم النبر أيضًا. record الاسم يكون النبر في أولها. وrecord الفعل يكون النبر في آخرها. ففي دفترك علّم الجزء القوي من كل كلمة جديدة.")

# quiz before the ending
Q = [
 ("stick-figure", "title-card", {"kicker": "Step 4, right now", "title": "Quick *quiz*", "subtitle": "(test yourself, remember?)", "character": "juno", "pose": "point", "doodles": ["question", "trophy", "brain"]},
  "Before you go, let us do step four together. A quick quiz. Five questions. Answer out loud before I do.",
  "قبل أن تذهب، لنطبّق الخطوة الرابعة معًا. اختبار سريع. خمسة أسئلة. أجب بصوت عالٍ قبل أن أجيب أنا."),
 ("cartoon", "compare-two", {"location": "stage", "left": {"character": "leo", "label": "cow", "points": ["Old English"], "word": "cow", "prop": "key"}, "right": {"character": "maya", "label": "beef", "points": ["French"], "word": "beef", "prop": "house"}, "verdict": "right", "word": "French"},
  "Question one. Cow and beef. Which one came from French? It is beef. The farmers said cow. The lords at the table said beef.",
  "السؤال الأول. cow وbeef. أيهما جاءت من الفرنسية؟ إنها beef. المزارعون قالوا cow. والأسياد على المائدة قالوا beef."),
 ("whiteboard-hand", "draw-concept", {"doodle": "face-worried", "label": "*nice* = foolish", "caption": "around the year 1300", "keyword": "foolish", "accents": ["question-mark"]},
  "Question two. What did nice mean in the year thirteen hundred? It meant foolish. From the Latin nescius, not knowing.",
  "السؤال الثاني. ماذا كانت تعني nice في عام 1300؟ كانت تعني أحمق. من اللاتينية nescius، أي «لا يعرف»."),
 ("comic-book", "big-reveal", {"setup": "Which letter in ISLAND is a mistake?", "reveal": "The S!", "keyword": "letter", "character": "nova", "background": "space", "revealBackground": "focus", "palette": "red", "sfx": "OOPS!"},
  "Question three. Which letter in the word island was added by mistake? The letter s. Scholars wrongly linked the word to Latin.",
  "السؤال الثالث. أي حرف في كلمة island أُضيف بالخطأ؟ حرف s. ربط العلماء الكلمة باللاتينية خطأً."),
 ("pixel-quest", "quest-log", {"title": "Question Four", "quests": [{"title": "port means... to carry", "keyword": "carry"}, {"title": "transport, export, import", "keyword": "transport"}, {"title": "portable, support", "keyword": "portable"}]},
  "Question four. What does the root port mean? It means to carry. Transport, export, import, portable and support.",
  "السؤال الرابع. ماذا يعني الجذر port؟ يعني «يحمل». transport وexport وimport وportable وsupport."),
 ("flat-vector", "cause-effect", {"title": "Question five", "steps": [{"illus": "sprout", "label": "1 day"}, {"illus": "flower", "label": "3 days"}, {"illus": "tree", "label": "1 week"}, {"illus": "mountain", "label": "1 month"}], "world": "dusk"},
  "And question five. When should you review a new word? After one day, three days, one week, and one month. If you got three or more, well done. You are already using the method.",
  "والسؤال الخامس. متى تراجع الكلمة الجديدة؟ بعد يوم، وثلاثة أيام، وأسبوع، وشهر. إن أصبت في ثلاثة أو أكثر فأحسنت. أنت تطبّق الطريقة فعلًا."),
]
for k, (st, tp, pr, say, ar) in enumerate(Q):
    P[6].insert(k, {"style": st, "template": tp, "props": pr, "say": say, "ar": ar})

tot = 0
for i, sc in P.items():
    json.dump(sc, open(f'/home/claude/doc/words/p{i}.json', 'w'), ensure_ascii=False, indent=1)
    n = sum(len(s['say']) for s in sc); tot += n
    print(f'p{i}: {len(sc)} scenes, {n} chars, ~{n/15/60:.1f} min')
print('total', sum(len(v) for v in P.values()), 'scenes', tot, 'chars', f'~{tot/15/60:.1f} min')
