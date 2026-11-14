# The 8-Dimension Rubric

The full scoring rubric. Eight dimensions, point values sum to 100. Two of the dimensions (sentence rhythm variance, vocabulary predictability and specificity) directly operationalize what AI detectors measure under the hood: burstiness (sentence length variance) and perplexity (word choice predictability). The buyer never needs to know those terms; the dimensions below translate them into things a writer can actually look at and fix. The other six dimensions cover what detectors miss but human readers absolutely notice: voice, cliche density, hedging, narrative grounding, structure, and overall feel.

Score honestly against the benchmarks in each section. Do not cluster every score near the midpoint. A rubric that cannot tell a bad AI paragraph from a well-humanized one is useless as proof.

---

## 1. Sentence rhythm variance (0-15)

**What it measures:** whether sentence length actually varies across the piece, or whether every sentence lands in the same rough word-count band. This is the plain-language version of burstiness. Genuinely human writing swings between short, punchy sentences and longer, winding ones, often within the same paragraph. AI-generated text tends toward a narrow, medium-length band sentence after sentence.

**How to score it:**
1. Roughly count words per sentence across the piece (you do not need exact counts, just banding: short is under 8 words, medium is 8 to 20, long is 20-plus).
2. Look for runs of 3 or more consecutive sentences in the same band. Every such run is a rhythm failure.
3. Check whether the piece ever drops to a fragment or a very short sentence for emphasis, and whether it ever lets a sentence run long when the thought genuinely needs the room.

| Score | What it looks like |
|---|---|
| 13-15 | Sentence length swings noticeably throughout; no run of 3+ same-band sentences; short sentences land for emphasis, long ones carry real complexity, not padding. |
| 9-12 | Some variance present, but at least one run of 3+ same-band sentences somewhere in the piece; variance feels present but not fully controlled. |
| 5-8 | Mostly one band with occasional escape; the piece reads evenly paced throughout, which starts to feel mechanical over more than a paragraph. |
| 0-4 | Nearly every sentence lands in the same 8 to 20 word medium band; no fragments, no long complex sentences, a metronome. |

---

## 2. Vocabulary predictability and specificity (0-15)

**What it measures:** whether word choices are concrete and specific to this piece, or generic and interchangeable with any other draft on the same topic. This is the plain-language version of perplexity. Predictable vocabulary is the safest, most expected word in every slot (the AI-tell word list below is the extreme version of this). Specific vocabulary picks the word that only fits this exact situation.

**How to score it:**
1. Scan for words from the 2026 AI-tell watch list: delve, tapestry, landscape, leverage, multifaceted, comprehensive, furthermore, moreover, crucial, utilize, robust, unlock, unleash, empower, bespoke, journey, navigate, seamless, revolutionize, transformative, groundbreaking, embark, beacon, synergy, paradigm, holistic, innovative, plus phrases like "it's important to note," "in today's fast-paced world," "in conclusion." Every instance costs points, addressed further in dimension 5 (cliche density) but also drags this dimension down since these words are, definitionally, the most predictable available choice.
2. Look for concrete nouns and specific verbs versus abstract noun phrases ("the implementation of the strategy" versus "we rolled it out").
3. Check whether any two sentences could be swapped into a different company's draft on the same topic without anyone noticing. If yes, the vocabulary is not doing specific work.

| Score | What it looks like |
|---|---|
| 13-15 | Word choices are concrete, often surprising, and clearly specific to this exact situation; verbs do real work; almost no AI-tell words. |
| 9-12 | Mostly specific with a few generic patches; one or two AI-tell words or abstract noun phrases slip through. |
| 5-8 | A mix of specific and generic, tilted generic; noticeable reliance on safe, expected word choices; a few AI-tell words present. |
| 0-4 | Vocabulary is the safest possible choice in nearly every slot; multiple AI-tell words present; the piece could belong to any brand on any similar topic. |

---

## 3. Structural predictability (0-15)

**What it measures:** whether the piece follows a template a model defaults to (intro that restates the topic, three evenly weighted points, a summary conclusion) or moves the way a person actually explains something they know well: leading with what matters most, going deep where it is interesting, skipping what is obvious. This dimension rewards genuine structural change, not just sentence-level rewording, which matters because detection accuracy drops sharply once text is restructured rather than merely synonym-swapped.

**How to score it:**
1. Check the opening. Does it restate the topic in a throat-clearing way ("In today's competitive market, effective communication is more important than ever") or does it drop straight into the point?
2. Check paragraph shape. Are all paragraphs roughly the same length and internal structure (claim, then three supporting sentences, repeat)? Or does paragraph length vary with what each paragraph is actually doing?
3. Check idea sequencing. Does the piece present ideas in the order a model would default to (most obvious point first, generic examples, safe conclusion) or in the order that reflects how someone who actually knows the topic would explain it (leading with the surprising part, burying the obvious part, ending on the actual point instead of a recap)?
4. Check the ending. Does it summarize what was just said ("In conclusion, X is important because Y and Z") or does it land on something, a specific implication, a next step, an unresolved edge?

| Score | What it looks like |
|---|---|
| 13-15 | Opens on the actual point, not a throat-clear; paragraph lengths vary with content; idea order reflects real thinking, not template order; ending lands rather than recaps. |
| 9-12 | Structure mostly breaks from template but one element still shows it (a summary-style conclusion, or paragraphs still evenly weighted). |
| 5-8 | Recognizable template underneath some surface variation; paragraphs are evenly shaped; conclusion restates rather than lands. |
| 0-4 | Textbook five-paragraph or listicle template: throat-clearing open, evenly weighted points in expected order, summary conclusion. |

---

## 4. Voice match to profile (0-15)

**What it measures:** whether this sounds like the specific buyer, using their actual tone words, sentence rhythm habits, vocabulary, and signature quirks from `config.json`, or like a generic "good professional writer" register that could belong to anyone. Without a voice profile loaded, score this against a generic competent-writing baseline and note in the write-up that the score is a floor, not a true read, since there is nothing specific to match against.

**How to score it:**
1. Check `voice_profile.tone_words`. Does the piece read the way those words describe (dry, blunt, warm but impatient, whatever the buyer's actual words are)?
2. Check `voice_profile.sentence_rhythm` and `voice_profile.signature_quirks`. Do the buyer's actual habits (a favorite transition, a fragment style, how they open or close a piece) show up, or is this a rhythm any competent writer could have produced?
3. Check `voice_profile.vocabulary_notes`, `dos`, and `donts`. Does the vocabulary match what this buyer actually says, and does anything in `donts` appear (an automatic points loss if it does)?

| Score | What it looks like |
|---|---|
| 13-15 | A reader who knows this buyer would recognize this as theirs within a paragraph; tone words, rhythm, and at least one signature quirk are all present. |
| 9-12 | Mostly on voice with one dimension missing (tone is right but no signature quirks show up, for example). |
| 5-8 | Competent and readable but voice-neutral; nothing in it is specifically this buyer's. |
| 0-4 | Generic professional register; could have been written for any brand; anything in `voice_profile.donts` present is an automatic cap at 4 regardless of other factors. |

---

## 5. Cliche and stock-phrase density (0-15)

**What it measures:** how many AI-tell words and worn phrases survive in the piece. This is scored by counting, not impression, since cliche density is one of the most countable dimensions here.

**How to score it:** count total instances of AI-tell words and phrases (the same watch list from dimension 2: delve, tapestry, landscape, leverage, multifaceted, comprehensive, furthermore, moreover, crucial, utilize, robust, unlock, unleash, empower, bespoke, journey, navigate, seamless, revolutionize, transformative, groundbreaking, embark, beacon, synergy, paradigm, holistic, innovative, "it's important to note," "in today's fast-paced world," "in conclusion") plus generic marketing filler (game-changer, cutting-edge, world-class, best-in-class, next-level) across the piece, then apply density relative to length.

| Score | Instances (per ~300 words) |
|---|---|
| 13-15 | Zero instances. |
| 9-12 | 1 instance. |
| 5-8 | 2 to 3 instances. |
| 1-4 | 4 to 6 instances. |
| 0 | 7 or more instances, or any single instance appearing more than twice (repetition of the same tic is worse than several different ones). |

Scale proportionally for pieces significantly longer or shorter than 300 words.

---

## 6. Hedging density (0-10)

**What it measures:** how much of the piece is qualified, non-committal language that avoids saying anything directly. A small amount of genuine hedging is human (people really do say "usually" and "in my experience"). A high density of hedging is an AI tell, since models are trained to avoid overclaiming and default to soft, deniable phrasing even when a direct claim would read better and cost nothing.

**How to score it:** count hedge phrases (can help, may, might, could potentially, in many cases, to some extent, it's worth considering, tends to, in some ways, arguably, generally speaking) relative to length, and check whether any hedge is doing real work (genuinely uncertain claims deserve a hedge) versus padding a claim the writer actually believes.

| Score | What it looks like |
|---|---|
| 9-10 | Hedges are rare and each one is load-bearing (a genuinely uncertain claim, not reflexive softening). |
| 6-8 | A few hedges, mostly justified, one or two feel like reflexive softening. |
| 3-5 | Hedging is frequent enough to notice; several claims that could be direct are softened for no clear reason. |
| 0-2 | Nearly every claim is qualified; the piece reads like it is afraid to commit to anything. |

---

## 7. Narrative and anecdote presence (0-10)

**What it measures:** whether the piece grounds its claims in a specific moment, example, or story, or stays abstract throughout. Humans reach for a specific memory or example almost automatically; models default to general statements unless specifically prompted otherwise.

**How to score it:** check whether the piece includes at least one concrete, specific moment (a particular client, a particular day, a particular conversation, a specific number tied to a specific instance) versus purely general claims ("clients often see improvements").

| Score | What it looks like |
|---|---|
| 9-10 | At least one fully specific anecdote or example with real detail (who, when, what happened), and it is doing real persuasive or illustrative work, not bolted on. |
| 6-8 | A specific example is present but thin (one detail, not fleshed out) or feels slightly disconnected from the point it is supporting. |
| 3-5 | Only general claims ("many clients," "in most cases") with no single grounded example anywhere. |
| 0-2 | Entirely abstract from start to finish; not one specific person, moment, or instance anywhere in the piece. |

Note: not every piece of writing needs a story (a one-line policy update does not need an anecdote). Score this dimension relative to what the piece is trying to do; a piece under about 80 words can score in the 6-8 range with no anecdote if brevity is appropriate, noted explicitly in the reasoning rather than silently inflating the score.

---

## 8. Overall natural read (0-5)

**What it measures:** the holistic gut check after everything else has been scored analytically. Read the piece aloud, or imagine reading it aloud. Does it sound like a person talking, explaining, or arguing, or does it sound like a document being generated? This dimension exists because a piece can score reasonably on all seven analytical dimensions and still feel slightly off in a way none of them individually catch, or can score surprisingly well here despite a rough dimension elsewhere because the overall effect still lands as human.

| Score | What it looks like |
|---|---|
| 5 | Reads exactly like a specific person talking; no hitch anywhere. |
| 4 | Reads naturally with one small moment that snags. |
| 3 | Mostly natural but a reader would notice something is slightly off without being able to name it. |
| 1-2 | Something about the rhythm or word choice reads as generated, even if no single dimension above fully explains why. |
| 0 | Unmistakably reads as AI-generated or corporate-templated from the first sentence. |

---

## Scoring bands for the total (0-100)

| Total | Read |
|---|---|
| 80-100 | Genuinely human. A reader would not flag this as AI-assisted. |
| 60-79 | Mostly natural, a few tells remain; usually one or two dimensions are dragging the score down while the rest are strong. |
| 40-59 | Mixed or inconsistent; reads like a human edited an AI draft partway and stopped. |
| 20-39 | Clearly AI-generated or stiff corporate writing; occasional human touches do not change the overall impression. |
| 0-19 | Unedited AI output or heavily templated copy with no humanizing pass applied at all. |

## Common scoring mistakes to avoid

- **Grading on effort, not outcome.** A rewrite that clearly tried hard but still reads stiff scores on what is on the page, not on how much work went into it.
- **Letting a strong dimension 8 (overall read) inflate the analytical dimensions.** Score dimensions 1 through 7 on their own evidence first; let dimension 8 be its own independent check, not a summary of the others.
- **Scoring vocabulary and cliche density as the same thing.** Dimension 2 is about specificity broadly; dimension 5 is a literal count against the watch list. A piece can have zero watch-list words and still score low on dimension 2 if every word choice is generic without being a named cliche.
- **Being generous because the buyer is present.** The score only has value if it discriminates. A rubric that always lands in the 60s regardless of input quality is not measuring anything.
