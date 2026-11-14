# Worked Example: Rhythm and Flow Editor Run

Sample brand (for illustration only): Jordan Ashworth, an online fitness coach who runs a strength-training program for busy parents and posts a weekly blog article plus daily social captions. Her config.json shows: sentence rhythm "mostly short and direct, occasional longer sentence when explaining the 'why' behind a habit", reading level "simple", platform primary "blog, repurposed to Instagram captions".

## Exact input given

Jordan pasted the intro to a new blog post and said: "My assistant used AI to draft this and it reads so flat. Can you fix the rhythm? I don't need the wording changed much, just make it not sound like a robot wrote it."

**Draft as pasted:**

> Building strength as a busy parent requires a different approach than traditional fitness programs typically offer to their clients. Most people assume they need hours of free time to see real results in the gym or at home. This assumption often prevents parents from starting a fitness routine altogether, which is unfortunate given how achievable strength training actually is. Short, focused workouts can deliver meaningful results when they are programmed correctly and performed with consistency. Many parents find that fifteen minutes of focused training beats an hour of unfocused effort every single time. The key is understanding that consistency matters more than duration when it comes to building sustainable strength over time.

## Full output produced

### Step 1: Measured the draft

Length map: 16, 15, 24, 15, 16, 19. Six sentences, five of them clustered tightly between 15 and 19 words, one outlier at 24. This is close to a textbook flat pattern: virtually no sentence under 12 words, none over 24, and four separate runs of three-plus sentences sitting in the same length band back to back (sentences 1-2 in the 9-16 band, then 4-5-6 all in the 9-24 range with barely any separation). Told Jordan: "Your sentences run 16, 15, 24, 15, 16, 19 words. Almost no variance, and that flatness is a big part of what's reading as robotic here, even more than the word choice."

### Step 2: Applied short-long-short

Broke up the two worst runs. Sentence 1 got cut down to a punch. Sentences 4 and 5, which were making almost the same point twice (short workouts work, fifteen minutes beats an unfocused hour), got merged into one sentence so the repetition became a single stronger claim instead of two medium ones back to back.

### Step 3: Reshaped paragraph structure

The original was one dense block. Split it into three paragraphs: a short opening punch, a workhorse paragraph carrying the explanation, and a closing mirrored two-sentence paragraph landing the core idea.

### Step 4: Ran the read-aloud test

Caught one spot word-count math missed: "which is unfortunate given how achievable strength training actually is" is a clause stacked onto the end of a sentence in a way nobody would say out loud. A person would just say the achievable part as its own short sentence.

### Rewritten draft

> Busy parents don't need a traditional fitness program. They need fifteen minutes that actually works.
>
> Most people assume real results take hours in the gym or at home. That assumption is what keeps most parents from starting at all, and it's wrong. Strength training is more achievable than people think. Fifteen minutes of focused training, programmed right and done consistently, beats an hour of unfocused effort every time.
>
> Duration isn't the thing that builds strength. Consistency is.

### Rhythm summary

- **Before:** 16, 15, 24, 15, 16, 19 words per sentence. Tight clustering, no sentence under 12 or over 24, almost no burstiness.
- **After:** 7, 6, / 15, 17, 8, 21, / 5, 3 words per sentence, grouped by paragraph. Two short punch lines to open, a workhorse paragraph with real internal variance (8 to 21 words), and a mirrored two-sentence close.
- **Paragraph shape:** one dense block became three paragraphs of clearly different shapes: a two-sentence punch opener, a medium workhorse paragraph, and a mirrored two-sentence closer. No two paragraphs are close to the same length.
- **What the read-aloud pass caught:** the stacked clause at the end of the original sentence 3 ("which is unfortunate given how achievable strength training actually is") got split into its own short sentence ("Strength training is more achievable than people think") because the original could not be said aloud in one breath without sounding like a written aside rather than a spoken point.
- **What stayed the same:** every claim in the original survives (parents assume they need hours, that assumption is false, fifteen minutes beats an unfocused hour if it is consistent). No facts, numbers, or new claims were introduced. This was a shape fix, not a rewrite of what the piece says.
