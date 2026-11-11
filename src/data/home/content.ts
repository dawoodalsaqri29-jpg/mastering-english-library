/** Home page copy and links — the library's real numbers and store bundles. */

export const LIBRARY_URL = "https://dawoodalsaqri29-jpg.github.io/mastering-english-library/";
export const STORE_URL = "https://www.masteringenglishlibrary.com/";
export const WHATSAPP_URL = "https://wa.me/96897868908";

export const NAV_LINKS = [
  { label: "Free lessons", href: `${LIBRARY_URL}library.html` },
  { label: "Levels", href: `${LIBRARY_URL}levels.html` },
  { label: "Teachers", href: `${LIBRARY_URL}teachers.html` },
  { label: "PDF store", href: STORE_URL },
] as const;

export const LEVEL_TILES = [
  { code: "B1", label: "intermediate" },
  { code: "B2", label: "upper int." },
  { code: "C1", label: "advanced" },
  { code: "C2", label: "proficiency" },
  { code: "GR", label: "grammar" },
  { code: "VO", label: "vocabulary" },
  { code: "RE", label: "reading" },
  { code: "LI", label: "listening" },
] as const;

export const FEATURES = [
  {
    index: "01",
    title: "Read the lesson",
    body: "Each lesson explains one point in plain English, with Arabic where it helps, and the common mistake to avoid.",
  },
  {
    index: "02",
    title: "Practise and check",
    body: "Questions on the worksheet, answers on a separate page, so a class can print the worksheet without them.",
  },
  {
    index: "03",
    title: "Listen, speak, print",
    body: "Twelve listening lessons read aloud by your browser, speaking lessons with the phrases to say, and an A4 PDF for every lesson.",
  },
] as const;

export const NUMBERS = [
  { value: 72, suffix: "", label: "free lessons", caption: "every one with an A4 worksheet and answers" },
  { value: 4, suffix: "", label: "levels", caption: "from B1 to C2, three lessons per skill each" },
  { value: 6, suffix: "", label: "skills", caption: "grammar, vocabulary, reading, writing, listening, speaking" },
] as const;

export const PACKS = [
  { title: "Synonyms by Level", level: "A2–C2", price: "$69", href: `${STORE_URL}product-page/synonyms-by-level-complete-collection-all-8-books` },
  { title: "Shades of Meaning", level: "A1–C2", price: "$59", href: `${STORE_URL}product-page/shades-of-meaning-complete-collection-all-12-volumes` },
  { title: "7-Day Challenges", level: "B1–C1", price: "$29", href: `${STORE_URL}product-page/7-day-challenges-complete-bundle-all-6-pdfs` },
  { title: "Writing Templates", level: "B1–C1", price: "$27", href: `${STORE_URL}product-page/writing-templates-complete-bundle-all-6-pdfs` },
  { title: "Exam Quick-Packs", level: "B1–C1", price: "$24", href: `${STORE_URL}product-page/exam-quick-packs-complete-bundle-all-6-pdfs` },
  { title: "Self-Check Tools", level: "B1–C1", price: "$24", href: `${STORE_URL}product-page/self-check-tools-for-arabic-speakers-complete-bundle-all-6-pdfs` },
  { title: "Speaking Boosters", level: "B1–C1", price: "$19", href: `${STORE_URL}product-page/speaking-boosters-complete-bundle-all-6-pdfs` },
  { title: "Tenses & Time", level: "B1–C1", price: "$9", href: `${STORE_URL}product-page/mastering-english-tenses-time-the-timeline-edition` },
] as const;
