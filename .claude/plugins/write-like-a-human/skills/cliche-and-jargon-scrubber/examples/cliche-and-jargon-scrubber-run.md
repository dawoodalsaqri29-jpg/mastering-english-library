# Worked Example: Cliche and Jargon Scrubber Run

Sample brand (for illustration only): Odalys Ferreira, a piano teacher who runs a small home studio for adult beginners and writes a weekly blog post to attract new students. Her config.json (built by `humanizer-setup`) shows: tone words "warm, plainspoken, a little wry", vocabulary notes "says 'practice' not 'engagement,' says 'stuck' not 'plateaued,' describes lessons in specific minutes and songs, never says 'journey' or 'unlock'", donts "no 'journey,' no 'unlock,' no exclamation points in body text", reading level "simple". She defaults to flagging phrases with options rather than auto-replacing, since she likes to see alternatives before choosing.

## Exact input given

Odalys pasted this AI-drafted blog intro and said: "An AI wrote this for me and I can't post it, it doesn't sound like anything I'd actually say. Flag what needs to change and show me options."

**Draft as pasted:**

> In today's fast-paced world, it's important to note that many adult beginners struggle to leverage their limited practice time effectively. At the end of the day, learning piano as an adult is a journey, and one could argue that the biggest obstacle isn't talent, it's the utilization of a comprehensive, structured approach. Our studio is dedicated to helping students unlock their full musical potential through a robust curriculum tailored to each learner. We believe in a holistic approach that empowers students to build real skills, not just memorize songs. Whether you're a total beginner or someone getting back into music after years away, this studio is designed to enhance your journey at the keys.

## Full output produced

### Scrubbed draft

> Most adult beginners don't fail at piano because they lack talent. They fail because they only get twenty minutes a night and spend half of it re-learning what they forgot since last week.
>
> That's the actual obstacle: not talent, a plan that fits the time you really have. In my studio, every student gets a practice plan built around their week, not an ideal week that doesn't exist. Ten minutes on Tuesday counts. So does skipping Thursday because work ran late.
>
> I care about students building real skills: reading music, hearing when a chord is off, playing something all the way through without stopping to fix it. Not just memorizing one song for one recital.
>
> If you've never touched a piano, or you played as a kid and quit twenty years ago, the first lesson is the same conversation either way: what do you actually want to be able to play, and how much time do you actually have.

### Changes made

- **Cut "In today's fast-paced world" entirely.** The most flagged AI opener there is (Category 5 of the swipe table). Replaced with a direct claim about why beginners actually struggle, which also sets up the real point of the paragraph instead of stalling in front of it.
- **Cut "it's important to note that."** Pure hedge (Category 2). The sentence is stronger stating the point directly with no announcement that a point is coming.
- **Replaced "leverage their limited practice time effectively" with a concrete number.** "Leverage" is inflated business-speak for "use," and "effectively" is an unearned qualifier with nothing behind it. Named the actual constraint instead: twenty minutes a night, half of it spent re-learning. This is a Move 2 fix (vague claim to a real number) from the specificity method, not a synonym swap.
- **Cut "At the end of the day."** Cliche pivot to a "real talk" moment (Category 1). The sentence works better opening cold with the actual claim.
- **Removed "journey" twice.** This word is on Odalys's `donts` list outright, so it isn't just flagged, it's banned regardless of what the swipe table's alternatives suggest. Replaced both instances with literal descriptions of what happens in lessons: a practice plan, a first conversation about what someone wants to play.
- **Cut "one could argue that."** Distances the writer from her own claim (Category 2). Odalys's tone notes say "warm, plainspoken," and hedging her own opinion works against that. Stated the claim directly instead.
- **Replaced "the utilization of a comprehensive, structured approach" with the actual approach.** This is the abstract-noun-phrase pattern the skill checks for specifically ("the utilization of X"), and it was hiding behind a specificity-sounding word ("comprehensive") that had no detail attached. Named what the approach actually is: a plan built around the student's real week, with an example of what that looks like on a Tuesday and a Thursday.
- **Cut "unlock their full musical potential" and "robust curriculum tailored to each learner."** "Unlock" is an overused AI metaphor for "enable," and "robust" and "comprehensive" (Category 4) are unearned strength claims with no backing in the draft. Replaced with three specific, checkable skills: reading music, hearing an off chord, playing a piece start to finish. This follows the method in the specificity reference: name actual members of the category instead of describing the category.
- **Cut "holistic approach that empowers students."** "Holistic" and "empowers" are both vague completeness/ability claims (Category 4). Kept the underlying point, real skills over rote memorization, and dropped the two buzzwords carrying it.
- **Cut "Whether you're a total beginner or someone getting back into music after years away."** This is the "whether you're a beginner or an expert" cliche hedge (Category 5) that tries to address every reader at once instead of picking one. Rewrote to name the two actual situations and give both a real next step (the same first conversation), rather than a generic catch-all sentence.
- **Cut "designed to enhance your journey at the keys."** Combines a banned word ("journey") with a vague, passive marketing phrase ("designed to enhance"). Closed instead on the two concrete questions Odalys actually asks a new student in a first lesson.
- **Left "practice," "plan," and "students" alone.** These aren't jargon, they're literally how lessons work, and "practice" and "stuck" both appear in Odalys's own vocabulary notes as words she actually uses. No replacement needed.

### Flag for judgment call

"Comprehensive" and "robust" were cut rather than kept, since neither had a specific, checkable detail sitting next to it in the original (no page count, no list of what the curriculum actually covers). If Odalys wants to describe the curriculum as comprehensive in a future post, that word can survive as long as it sits next to something concrete, for example naming the actual skill areas covered, rather than standing alone as a claim.

### Structural note

Word choice is clean now, but worth flagging: the second and third paragraphs are both built the same way, a general claim followed by a short example. If this still reads a little flat once you read it aloud, that's a rhythm issue, not a word issue, run it through `rhythm-and-flow-editor` next.
