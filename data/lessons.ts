import type { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // Spanish › Unit 1 › Greetings & Basics
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "es-u1-l1",
    unitId: "es-unit-1",
    title: "Hello & Goodbye",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Learn how to greet someone in Spanish" },
      { description: "Learn how to say goodbye" },
    ],
    aiTeacherPrompt:
      "You are a friendly Spanish teacher. Teach the student common Spanish greetings and farewells. Keep explanations short and use examples. Encourage them after every correct answer.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Hola",
            translation: "Hello",
            pronunciation: "OH-lah",
            exampleSentence: "¡Hola! ¿Cómo estás?",
            exampleTranslation: "Hello! How are you?",
          },
          {
            word: "Buenos días",
            translation: "Good morning",
            pronunciation: "BWEH-nos DEE-as",
            exampleSentence: "Buenos días, señor García.",
            exampleTranslation: "Good morning, Mr. García.",
          },
          {
            word: "Buenas tardes",
            translation: "Good afternoon",
            pronunciation: "BWEH-nas TAR-des",
          },
          {
            word: "Buenas noches",
            translation: "Good evening / Good night",
            pronunciation: "BWEH-nas NOH-ches",
          },
          {
            word: "Adiós",
            translation: "Goodbye",
            pronunciation: "ah-DYOS",
          },
          {
            word: "Hasta luego",
            translation: "See you later",
            pronunciation: "AHS-tah LWEH-go",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'Good morning' in Spanish?",
        options: [
          { text: "Buenos días", isCorrect: true },
          { text: "Buenas noches", isCorrect: false },
          { text: "Hasta luego", isCorrect: false },
          { text: "Hola", isCorrect: false },
        ],
        explanation: "'Buenos días' means 'good morning' — used until noon.",
      },
    ],
  },
  {
    id: "es-u1-l2",
    unitId: "es-unit-1",
    title: "Introducing Yourself",
    type: "audio",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: "Say your name in Spanish" },
      { description: "Ask someone's name" },
      { description: "Tell someone where you're from" },
    ],
    aiTeacherPrompt:
      "You are a warm and encouraging Spanish teacher. Guide the student through a short introduction conversation. Ask their name, where they're from, and teach them to reply naturally in Spanish.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Me llamo...",
            translation: "My name is...",
            pronunciation: "meh YAH-mo",
            context: "Use this to introduce your name",
          },
          {
            text: "¿Cómo te llamas?",
            translation: "What is your name?",
            pronunciation: "KOH-mo teh YAH-mas",
            context: "Ask someone their name informally",
          },
          {
            text: "Soy de...",
            translation: "I am from...",
            pronunciation: "soy deh",
            context: "Tell someone where you are from",
          },
          {
            text: "¿De dónde eres?",
            translation: "Where are you from?",
            pronunciation: "deh DON-deh EH-res",
            context: "Ask someone where they are from",
          },
          {
            text: "Mucho gusto.",
            translation: "Nice to meet you.",
            pronunciation: "MOO-cho GOOS-to",
            context: "Use when meeting someone for the first time",
          },
        ],
      },
      {
        type: "listening",
        prompt: "Listen and identify the phrase for 'What is your name?'",
        transcript: "¿Cómo te llamas?",
        translation: "What is your name?",
      },
      {
        type: "quiz",
        question: "How do you say 'My name is Ana' in Spanish?",
        options: [
          { text: "Me llamo Ana", isCorrect: true },
          { text: "Soy de Ana", isCorrect: false },
          { text: "Mucho gusto Ana", isCorrect: false },
          { text: "Hola Ana", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u1-l3",
    unitId: "es-unit-1",
    title: "How Are You?",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Ask how someone is feeling" },
      { description: "Respond with common feelings" },
    ],
    aiTeacherPrompt:
      "Teach the student how to ask and answer 'How are you?' in Spanish. Use common emotional vocabulary and short example dialogues.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "¿Cómo estás?",
            translation: "How are you? (informal)",
            pronunciation: "KOH-mo es-TAS",
          },
          {
            word: "¿Cómo está usted?",
            translation: "How are you? (formal)",
            pronunciation: "KOH-mo es-TA oos-TED",
          },
          {
            word: "Bien",
            translation: "Good / Well",
            pronunciation: "byen",
            exampleSentence: "Estoy bien, gracias.",
            exampleTranslation: "I am well, thank you.",
          },
          {
            word: "Mal",
            translation: "Bad",
            pronunciation: "mal",
          },
          {
            word: "Más o menos",
            translation: "So-so / More or less",
            pronunciation: "mas oh MEH-nos",
          },
          {
            word: "Gracias",
            translation: "Thank you",
            pronunciation: "GRAH-syas",
          },
          {
            word: "De nada",
            translation: "You're welcome",
            pronunciation: "deh NAH-dah",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Más o menos' mean?",
        options: [
          { text: "So-so / More or less", isCorrect: true },
          { text: "Very good", isCorrect: false },
          { text: "Not at all", isCorrect: false },
          { text: "Thank you", isCorrect: false },
        ],
        explanation:
          "'Más o menos' literally means 'more or less' — used like 'so-so'.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Spanish › Unit 2 › Numbers & Time
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "es-u2-l1",
    unitId: "es-unit-2",
    title: "Numbers 1–20",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 7,
    goals: [{ description: "Count from 1 to 20 in Spanish" }],
    aiTeacherPrompt:
      "Teach the student Spanish numbers from 1 to 20. Say each number aloud and have the student repeat. Make it fun with simple counting exercises.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "uno", translation: "1", pronunciation: "OO-no" },
          { word: "dos", translation: "2", pronunciation: "dos" },
          { word: "tres", translation: "3", pronunciation: "tres" },
          { word: "cuatro", translation: "4", pronunciation: "KWAH-tro" },
          { word: "cinco", translation: "5", pronunciation: "SEEN-ko" },
          { word: "seis", translation: "6", pronunciation: "says" },
          { word: "siete", translation: "7", pronunciation: "SYEH-teh" },
          { word: "ocho", translation: "8", pronunciation: "OH-cho" },
          { word: "nueve", translation: "9", pronunciation: "NWEH-beh" },
          { word: "diez", translation: "10", pronunciation: "dyez" },
        ],
      },
      {
        type: "quiz",
        question: "What is 'cinco' in English?",
        options: [
          { text: "5", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "6", isCorrect: false },
          { text: "7", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // French › Unit 1 › Greetings & Basics
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "fr-u1-l1",
    unitId: "fr-unit-1",
    title: "Bonjour & Au revoir",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Greet people in French" },
      { description: "Say goodbye politely" },
    ],
    aiTeacherPrompt:
      "You are a warm French teacher. Introduce common greetings and farewells in French. Use audio and repetition to help the student learn pronunciation.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Bonjour",
            translation: "Hello / Good day",
            pronunciation: "bohn-ZHOOR",
            exampleSentence: "Bonjour, comment allez-vous?",
            exampleTranslation: "Hello, how are you?",
          },
          {
            word: "Bonsoir",
            translation: "Good evening",
            pronunciation: "bohn-SWAHR",
          },
          {
            word: "Salut",
            translation: "Hi (informal)",
            pronunciation: "sah-LU",
          },
          {
            word: "Au revoir",
            translation: "Goodbye",
            pronunciation: "oh reh-VWAHR",
          },
          {
            word: "À bientôt",
            translation: "See you soon",
            pronunciation: "ah byan-TOH",
          },
          {
            word: "Bonne nuit",
            translation: "Good night",
            pronunciation: "bun NWEE",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'See you soon' in French?",
        options: [
          { text: "À bientôt", isCorrect: true },
          { text: "Au revoir", isCorrect: false },
          { text: "Bonsoir", isCorrect: false },
          { text: "Salut", isCorrect: false },
        ],
        explanation: "'À bientôt' means 'see you soon' — a warm farewell.",
      },
    ],
  },
  {
    id: "fr-u1-l2",
    unitId: "fr-unit-1",
    title: "Introducing Yourself",
    type: "audio",
    order: 2,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: "Say your name in French" },
      { description: "Ask someone their name" },
      { description: "Say where you are from" },
    ],
    aiTeacherPrompt:
      "Guide the student through a natural French introduction. Teach them to say their name, ask someone else's name, and mention where they are from. Correct pronunciation gently.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Je m'appelle...",
            translation: "My name is...",
            pronunciation: "zhuh mah-PELL",
            context: "Introduce your name in French",
          },
          {
            text: "Comment vous appelez-vous?",
            translation: "What is your name? (formal)",
            pronunciation: "koh-MAH voo zah-play-VOO",
          },
          {
            text: "Comment tu t'appelles?",
            translation: "What is your name? (informal)",
            pronunciation: "koh-MAH tu tah-PELL",
          },
          {
            text: "Je viens de...",
            translation: "I come from...",
            pronunciation: "zhuh vyan duh",
          },
          {
            text: "Enchanté(e).",
            translation: "Nice to meet you.",
            pronunciation: "ahn-shahn-TAY",
            context: "Use when meeting someone for the first time",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'Nice to meet you' in French?",
        options: [
          { text: "Enchanté", isCorrect: true },
          { text: "Merci", isCorrect: false },
          { text: "Bonjour", isCorrect: false },
          { text: "Salut", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Japanese › Unit 1 › Hiragana Basics
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "jp-u1-l1",
    unitId: "jp-unit-1",
    title: "Vowel Sounds",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: "Learn the 5 Japanese vowel sounds" },
      { description: "Read and pronounce あ い う え お" },
    ],
    aiTeacherPrompt:
      "You are a patient Japanese teacher introducing hiragana. Teach the 5 core vowels: あ (a), い (i), う (u), え (e), お (o). Emphasize clear pronunciation and give simple example words for each.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "あ",
            translation: "a",
            pronunciation: "ah",
            exampleSentence: "あお (ao)",
            exampleTranslation: "blue",
          },
          {
            word: "い",
            translation: "i",
            pronunciation: "ee",
            exampleSentence: "いぬ (inu)",
            exampleTranslation: "dog",
          },
          {
            word: "う",
            translation: "u",
            pronunciation: "oo",
            exampleSentence: "うみ (umi)",
            exampleTranslation: "sea",
          },
          {
            word: "え",
            translation: "e",
            pronunciation: "eh",
            exampleSentence: "えき (eki)",
            exampleTranslation: "train station",
          },
          {
            word: "お",
            translation: "o",
            pronunciation: "oh",
            exampleSentence: "おかあさん (okaasan)",
            exampleTranslation: "mother",
          },
        ],
      },
      {
        type: "quiz",
        question: "What sound does 'う' make?",
        options: [
          { text: "oo (as in moon)", isCorrect: true },
          { text: "ah (as in father)", isCorrect: false },
          { text: "eh (as in bed)", isCorrect: false },
          { text: "ee (as in tree)", isCorrect: false },
        ],
        explanation: "'う' is pronounced like a short 'oo' sound.",
      },
    ],
  },
  {
    id: "jp-u2-l1",
    unitId: "jp-unit-2",
    title: "Basic Greetings",
    type: "audio",
    order: 1,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: "Learn essential Japanese greetings" },
      { description: "Understand when to use formal vs. informal speech" },
    ],
    aiTeacherPrompt:
      "Teach the student essential Japanese greetings. Explain the difference between formal and casual speech. Use audio examples and gentle pronunciation correction. Focus on おはようございます, こんにちは, こんばんは, and さようなら.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "おはようございます",
            translation: "Good morning (formal)",
            pronunciation: "oh-hah-YOH go-zah-ee-MAHS",
          },
          {
            word: "おはよう",
            translation: "Good morning (casual)",
            pronunciation: "oh-hah-YOH",
          },
          {
            word: "こんにちは",
            translation: "Hello / Good afternoon",
            pronunciation: "kon-NEE-chee-wah",
          },
          {
            word: "こんばんは",
            translation: "Good evening",
            pronunciation: "kon-BAN-wah",
          },
          {
            word: "さようなら",
            translation: "Goodbye (formal)",
            pronunciation: "sah-yoh-NAH-rah",
          },
          {
            word: "じゃあね",
            translation: "See you / Bye (casual)",
            pronunciation: "jah-ah-NEH",
          },
        ],
      },
      {
        type: "phrase",
        items: [
          {
            text: "はじめまして。",
            translation: "Nice to meet you.",
            pronunciation: "hah-jee-meh-MASH-teh",
            context: "Said when meeting someone for the first time",
          },
          {
            text: "よろしくおねがいします。",
            translation: "Please treat me well. / Nice to meet you.",
            pronunciation: "yoh-ROH-shee-ku oh-neh-gai-shee-MAHS",
            context:
              "Said after introducing yourself — a polite closing phrase",
          },
        ],
      },
      {
        type: "quiz",
        question: "Which greeting is used in the morning (formal)?",
        options: [
          { text: "おはようございます", isCorrect: true },
          { text: "こんにちは", isCorrect: false },
          { text: "こんばんは", isCorrect: false },
          { text: "さようなら", isCorrect: false },
        ],
        explanation:
          "'おはようございます' is the formal morning greeting in Japanese.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // German › Unit 1 › Greetings & Basics
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "de-u1-l1",
    unitId: "de-unit-1",
    title: "Guten Tag!",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Learn core German greetings" },
      { description: "Know when to use formal vs. casual greetings" },
    ],
    aiTeacherPrompt:
      "Teach the student basic German greetings with a focus on pronunciation. Explain the difference between formal (Sie) and informal (du) situations.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Hallo",
            translation: "Hello",
            pronunciation: "HAH-lo",
          },
          {
            word: "Guten Morgen",
            translation: "Good morning",
            pronunciation: "GOO-ten MOR-gen",
          },
          {
            word: "Guten Tag",
            translation: "Good day / Hello",
            pronunciation: "GOO-ten tahk",
          },
          {
            word: "Guten Abend",
            translation: "Good evening",
            pronunciation: "GOO-ten AH-bent",
          },
          {
            word: "Auf Wiedersehen",
            translation: "Goodbye (formal)",
            pronunciation: "owf VEE-der-zayn",
          },
          {
            word: "Tschüss",
            translation: "Bye (informal)",
            pronunciation: "chüs",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Guten Morgen' mean?",
        options: [
          { text: "Good morning", isCorrect: true },
          { text: "Good evening", isCorrect: false },
          { text: "Goodbye", isCorrect: false },
          { text: "Good night", isCorrect: false },
        ],
      },
    ],
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
