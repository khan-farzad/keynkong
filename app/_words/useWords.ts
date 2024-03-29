export const randomWord = async (wordLimit: number,lang:string): Promise<string> => {
    let words: string[] = [];
    
    // Select the correct array based on the language parameter
    if (lang === 'english') {
        words = english_words;
    } else if (lang === 'hinglish') {
        words = hinglish_words;
    }

    try {
    const newSentence =
      Array.from(
        { length: wordLimit },
        () => words[Math.floor(Math.random() * words.length)]
      ).join(" ") ;

    return newSentence;
  } catch (e) {
    console.error("Error generating random word:", e);
    throw e;
  }
};

const english_words: string[] = [
  "the",
  "be",
  "of",
  "and",
  "a",
  "to",
  "in",
  "he",
  "have",
  "it",
  "that",
  "for",
  "they",
  "I",
  "with",
  "as",
  "not",
  "on",
  "she",
  "at",
  "by",
  "this",
  "we",
  "you",
  "do",
  "but",
  "from",
  "or",
  "which",
  "one",
  "would",
  "all",
  "will",
  "there",
  "say",
  "who",
  "make",
  "when",
  "can",
  "more",
  "if",
  "no",
  "man",
  "out",
  "other",
  "so",
  "what",
  "time",
  "up",
  "go",
  "about",
  "than",
  "into",
  "could",
  "state",
  "only",
  "new",
  "year",
  "some",
  "take",
  "come",
  "these",
  "know",
  "see",
  "use",
  "get",
  "like",
  "then",
  "first",
  "any",
  "work",
  "now",
  "may",
  "such",
  "give",
  "over",
  "think",
  "most",
  "even",
  "find",
  "day",
  "also",
  "after",
  "way",
  "many",
  "must",
  "look",
  "before",
  "great",
  "back",
  "through",
  "long",
  "where",
  "much",
  "should",
  "well",
  "people",
  "down",
  "own",
  "just",
  "because",
  "good",
  "each",
  "those",
  "feel",
  "seem",
  "how",
  "high",
  "too",
  "place",
  "little",
  "world",
  "very",
  "still",
  "nation",
  "hand",
  "old",
  "life",
  "tell",
  "write",
  "become",
  "here",
  "show",
  "house",
  "both",
  "between",
  "need",
  "mean",
  "call",
  "develop",
  "under",
  "last",
  "right",
  "move",
  "thing",
  "general",
  "school",
  "never",
  "same",
  "another",
  "begin",
  "while",
  "number",
  "part",
  "turn",
  "real",
  "leave",
  "might",
  "want",
  "point",
  "form",
  "off",
  "child",
  "few",
  "small",
  "since",
  "against",
  "ask",
  "late",
  "home",
  "interest",
  "large",
  "person",
  "end",
  "open",
  "public",
  "follow",
  "during",
  "present",
  "without",
  "again",
  "hold",
  "govern",
  "around",
  "possible",
  "head",
  "consider",
  "word",
  "program",
  "problem",
  "however",
  "lead",
  "system",
  "set",
  "order",
  "eye",
  "plan",
  "run",
  "keep",
  "face",
  "fact",
  "group",
  "play",
  "stand",
  "increase",
  "early",
  "course",
  "change",
  "help",
  "line",
];
const hinglish_words: string[] = [
  "aagaya",
  "aaj",
  "aaya",
  "aayega",
  "ab",
  "abhi",
  "achha",
  "aisa",
  "alag",
  "andar",
  "apna",
  "apni",
  "are",
  "atulya",
  "aur",
  "baad",
  "baar",
  "baate",
  "bach",
  "bachchha",
  "badi",
  "bahut",
  "bas",
  "batata",
  "bechara",
  "behen",
  "bhai",
  "bhej",
  "bhen",
  "bhi",
  "bhok",
  "bhool",
  "bhoot",
  "bilkul",
  "bohot",
  "bol",
  "boriyat",
  "chahiye",
  "chal",
  "cheez",
  "chehra",
  "chhod",
  "chhota",
  "chinta",
  "darr",
  "de",
  "dekh",
  "dhoond",
  "dikh",
  "diksha",
  "din",
  "diya",
  "do",
  "dono",
  "dost",
  "dunga",
  "duniya",
  "dusht",
  "dusman",
  "dusra",
  "ek",
  "fir",
  "gandi",
  "gaya",
  "ghar",
  "ghusa",
  "gira",
  "gussa",
  "hai",
  "ham",
  "hamara",
  "hamare",
  "hamne",
  "hath",
  "hi",
  "hisab",
  "hogaya",
  "hogayi",
  "hone",
  "hoon",
  "hu",
  "hua",
  "hue",
  "iss",
  "itni",
  "jaati",
  "jab",
  "jaise",
  "jana",
  "jisse",
  "jitna",
  "jo",
  "ka",
  "kaam",
  "kab",
  "kabhi",
  "kaha",
  "kaise",
  "kal",
  "kar",
  "karenge",
  "karne",
  "ke",
  "keh",
  "khana",
  "khatam",
  "khud",
  "ki",
  "ko",
  "koi",
  "kya",
  "kyu",
  "kyuki",
  "ladka",
  "ladki",
  "ladkiya",
  "ladkiyo",
  "laga",
  "lagta",
  "lekin",
  "likh",
  "liye",
  "log",
  "main",
  "maine",
  "marne",
  "matlab",
  "mausam",
  "mein",
  "mera",
  "mereko",
  "meri",
  "mill",
  "milna",
  "mujhe",
  "na",
  "naam",
  "nahi",
  "nazar",
  "neend",
  "paani",
  "pada",
  "padh",
  "pagal",
  "paise",
  "papa",
  "par",
  "pariksha",
  "parso",
  "pata",
  "pe",
  "pehla",
  "phir",
  "poora",
  "pyaar",
  "roshan",
  "saal",
  "sach",
  "sahi",
  "se",
  "shayad",
  "soch",
  "sona",
  "sun",
  "shuru",
  "tab",
  "tak",
  "taraf",
  "teen",
  "tereko",
  "tha",
  "the",
  "thik",
  "to",
  "tolya",
  "tu",
  "tujhe",
  "tum",
  "tumhare",
  "tumne",
  "tumse",
  "tune",
  "unhe",
  "unhone",
  "unka",
  "unke",
  "unko",
  "uska",
  "uske",
  "uss",
  "usse",
  "vaise",
  "vo",
  "wagarh",
  "waha",
  "wahi",
  "wajah",
  "wale",
  "ya",
  "yaar",
  "yaha",
  "yahi",
  "yani",
  "ye",
  "zinda",
  "zindagi",
  "zyada",
];
