# (part, slide, step, pause_after_seconds, narration)
L = []
def P(part, slide, step, text, pause=0): L.append(dict(part=part, slide=slide, step=step, pause=pause, text=text))

# 1 INTRODUCTION
P(1,'intro-hook',1,"How many times a day do you say, \"I think\"?")
P(1,'intro-hook',2,"I think about it. I think so. I think he's right. It's a useful word, but if you use it in every sentence, your English starts to sound flat.")
P(1,'intro-words',1,"Today, you're going to learn eight precise verbs that native speakers use instead of \"think\".")
P(1,'intro-words',2,"Ponder, contemplate, deliberate, ruminate. And presume, speculate, surmise, envisage.")
P(1,'intro-plan',1,"We'll learn what each one means, hear them in real life, fix the most common mistakes, practise the pronunciation, and finish with a quiz. Let's begin.")

# 2 BASIC EXPLANATION
P(2,'basic-table',1,"Here's the big idea. \"Think\" can mean many different things, and each meaning has a sharper word.")
P(2,'basic-table',2,"The first group is about thinking carefully. Ponder, contemplate, deliberate, and ruminate.")
P(2,'basic-table',3,"The second group is about guessing and imagining. Presume, speculate, surmise, and envisage.")
P(2,'basic-table',4,"So instead of \"I'm thinking about it\", you can say \"I'm pondering it\". Instead of \"I think it's true\", you can say \"I presume it's true\". Same idea, but much more exact.")

# 3 DETAILED EXPLANATION
W = [
 ("ponder","Ponder.","It means to think carefully about something for a long time.","She pondered the offer for a week before she said yes.","Ponder a question. Ponder the meaning of something. Pause to ponder."),
 ("contemplate","Contemplate.","It means to think seriously about doing something in the future.","He is contemplating a move to Muscat.","Contemplate leaving. Seriously contemplate. Contemplate the possibility."),
 ("deliberate","Deliberate.","As a verb, it means to think or talk carefully before a decision, often in a group.","The jury deliberated for six hours.","Deliberate on, or over, something. Deliberate for hours. After much deliberation."),
 ("ruminate","Ruminate.","It means to think about the same thing again and again, usually something that worries you.","Don't ruminate on one bad mark. Learn from it and move on.","Ruminate on. Ruminate over the past. Endlessly ruminate."),
 ("presume","Presume.","It means to believe something is true because it's likely, even without proof.","I presume you've already met my brother.","I presume that. Presumed innocent. Presume to know."),
 ("speculate","Speculate.","It means to form ideas about something when you don't have all the facts.","Experts speculate that prices will rise next year.","Speculate about. Widely speculated. It's too early to speculate."),
 ("surmise","Surmise.","It's a formal word. It means to guess something from the small clues you have.","From her silence, I surmised that she was upset.","Surmise that. One can only surmise. As you may have surmised."),
 ("envisage","Envisage.","It means to imagine something as a future possibility, to picture a plan in your mind.","We envisage opening a second branch in twenty twenty-seven.","Envisage a future. Envisage that. It is envisaged that."),
]
for w,name,mean,ex,col in W:
    s='word-'+w
    P(3,s,1,name)
    P(3,s,2,mean)
    P(3,s,3,"For example: "+ex)
    P(3,s,4,"Useful collocations: "+col)

# 4 REAL-LIFE EXAMPLES
Q = [("At work","Let's not decide today. I'd rather we deliberate on it first."),
     ("With friends","I'm contemplating a career change, but I haven't told anyone yet."),
     ("In the news","Analysts speculate that the new rules will cut costs.")]
for i,(tag,q) in enumerate(Q,1):
    s=f'real-{i}'
    P(4,s,1,f"{tag}: \"{q}\"")
    P(4,s,2,"Listen again, and repeat after me.")
    P(4,s,3,q,pause=4.5)
P(4,'real-dialogue',1,"Now a short dialogue. \"Have you decided about the job offer?\"")
P(4,'real-dialogue',2,"\"Not yet. I'm still pondering it. I presume they'll wait until Monday.\"")
P(4,'real-dialogue',3,"Your turn. Read the second line out loud.",pause=5)

# 5 EXTRA LESSON 1: GOING DEEPER
P(5,'deep-xy1',1,"Let's go deeper. Ponder or ruminate?")
P(5,'deep-xy1',2,"Ponder is neutral and calm. Ruminate is often negative: you go round in circles and can't stop thinking.")
P(5,'deep-xy2',1,"Presume or speculate?")
P(5,'deep-xy2',2,"When you presume, you're fairly sure. When you speculate, you're openly guessing, and you might be wrong.")
P(5,'deep-levelup',1,"Now, level up a sentence. Before: \"I think the company will grow, and I am thinking about joining it.\"")
P(5,'deep-levelup',2,"After: \"I envisage the company growing, and I am contemplating joining it.\" Same meaning, but it sounds like C1.")
P(5,'deep-family',1,"Word families help you write more. Contemplate, contemplation. Deliberate, deliberation. Speculate, speculation, speculative. Presume, presumably.")
P(5,'deep-starters',1,"Here are three ready-made sentence starters. One: \"It is widely speculated that...\"")
P(5,'deep-starters',2,"Two: \"After much deliberation, we decided to...\"")
P(5,'deep-starters',3,"Three: \"I can't envisage a future without...\"")

# 6 COMMON MISTAKES
M = [("I am thinking to travel next month.","After contemplate, use the -ing form, not \"to\".","I am contemplating travelling next month."),
     ("We discussed about the plan.","Discuss never takes \"about\". It's \"discuss the plan\".","We discussed the plan, and we deliberated on it."),
     ("In my opinion, I think that he is right.","Don't use both. Choose one, or a more precise verb.","I presume that he is right."),
     ("I envisage becoming a doctor in future.","When you mean later in your life, say \"in the future\", with \"the\".","I envisage becoming a doctor in the future.")]
for i,(bad,tip,good) in enumerate(M,1):
    s=f'mistake-{i}'
    P(6,s,1,f"Mistake number {i}. Don't say: \"{bad}\"")
    P(6,s,2,tip)
    P(6,s,3,f"Say it correctly with me: \"{good}\"",pause=4)

# 7 PRONUNCIATION
P(7,'pron-tips',1,"Now, pronunciation. Many of these verbs end in -ate. Put the stress three syllables from the end: CON-tem-plate, SPEC-u-late, RU-mi-nate.")
P(7,'pron-tips',2,"Careful with deliberate. The verb ends with \"rate\". The adjective ends with \"rut\": a de-LIB-er-ut choice.")
P(7,'pron-tips',3,"Two words are stressed at the end: pre-SUME and sur-MISE. And envisage is stressed in the middle: en-VIS-age.")
for w in ["contemplate","deliberate","ruminate","surmise","envisage"]:
    P(7,'pron-'+w,1,f"Listen and repeat. {w.capitalize()}.",pause=3.8)
P(7,'pron-sentence',1,"Now say it with me: \"I presume you've pondered this carefully.\"",pause=4.5)

# 8 STORY
P(8,'story',1,"Here's a short story with all eight words. Listen and follow.")
P(8,'story',2,"Layla had been contemplating a new job for months. Every night, she would ponder the same question: should she stay or leave?")
P(8,'story',3,"Her friends speculated that she was unhappy, and her manager presumed she would never go. From her quiet mood, her sister surmised the truth.")
P(8,'story',4,"Finally, Layla stopped ruminating, deliberated with her family, and made her choice. Today, she can't envisage working anywhere else.")
P(8,'story-q',1,"Quick question: who guessed the truth from Layla's quiet mood? Pause the video and answer.",pause=4)
P(8,'story-q',2,"Her sister. She surmised it.")

# 9 PRACTICE
MC = [("The committee will _____ on the proposal tomorrow.","a, speculate. b, deliberate. c, envisage.","b, deliberate."),
      ("I _____ you've finished the report, since it's Friday.","a, presume. b, ponder. c, ruminate.","a, presume."),
      ("We _____ a city with clean air and green streets.","a, surmise. b, ruminate. c, envisage.","c, envisage.")]
for i,(q,o,a) in enumerate(MC,1):
    s=f'quiz-{i}'
    P(9,s,1,f"Question {i}. {q.replace('_____','blank')}")
    P(9,s,2,o,pause=4)
    P(9,s,3,f"The answer is {a}")
P(9,'quiz-correct',1,"Now, correct this sentence: \"She is contemplating to quit her job.\"",pause=4)
P(9,'quiz-correct',2,"Correct: \"She is contemplating quitting her job.\"")
P(9,'quiz-gap',1,"Fill the gap: \"Don't _____ on your mistakes; learn from them.\" Hint: it starts with R.",pause=4)
P(9,'quiz-gap',2,"The answer is ruminate.")
P(9,'quiz-comment',1,"Comment challenge: write one sentence about your future with the word envisage. I'll read your comments.")

# 10 REVIEW
P(10,'review',1,"Let's review. Thinking carefully: ponder and contemplate.")
P(10,'review',2,"Thinking with others, or again and again: deliberate and ruminate.")
P(10,'review',3,"Guessing: presume, speculate, and surmise.")
P(10,'review',4,"Picturing the future: envisage.")
P(10,'review-trick',1,"Memory trick: a cow is a ruminant. It chews the same food again and again. When you ruminate, you chew the same thought again and again.")
P(10,'review-home',1,"Your homework: write three sentences about a decision you're making now, using contemplate, deliberate, and envisage.")

# 11 OUTRO
P(11,'outro',1,"Outstanding work today! You've just replaced \"think\" with eight precise verbs.")
P(11,'outro',2,"If this lesson helped you, subscribe and turn on the bell, so you don't miss the next one. See you soon.")

import json
for i,l in enumerate(L,1): l['id']=i
json.dump(L,open('script.json','w'),ensure_ascii=False,indent=1)
total=sum(len(l['text']) for l in L)
print('lines',len(L),'chars',total)
for p in range(1,12): print(p, sum(len(l['text']) for l in L if l['part']==p))
