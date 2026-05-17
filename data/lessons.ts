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

  // ───────────────────────────────────────────────────────────────────────────
  // Spanish › Unit 1 › Greetings & Basics (continued — lessons 4–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "es-u1-l4",
    unitId: "es-unit-1",
    title: "Polite Expressions",
    type: "vocabulary",
    order: 4,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Use essential polite phrases in Spanish" }],
    aiTeacherPrompt:
      "Teach the student common polite expressions in Spanish. Use role-play scenarios like asking for help or passing by someone.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Por favor",
            translation: "Please",
            pronunciation: "por fah-VOR",
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
          {
            word: "Perdón",
            translation: "Pardon / Sorry",
            pronunciation: "per-DON",
          },
          {
            word: "Con permiso",
            translation: "Excuse me (to pass)",
            pronunciation: "kon per-MEE-so",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'Please' in Spanish?",
        options: [
          { text: "Por favor", isCorrect: true },
          { text: "Gracias", isCorrect: false },
          { text: "De nada", isCorrect: false },
          { text: "Perdón", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u1-l5",
    unitId: "es-unit-1",
    title: "Common Questions",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: "Ask basic questions in Spanish" }],
    aiTeacherPrompt:
      "Teach Spanish question words. Show how to form simple questions and give practical example sentences.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "¿Qué?", translation: "What?", pronunciation: "keh" },
          { word: "¿Cómo?", translation: "How?", pronunciation: "KOH-mo" },
          { word: "¿Cuándo?", translation: "When?", pronunciation: "KWAN-do" },
          { word: "¿Dónde?", translation: "Where?", pronunciation: "DON-deh" },
          { word: "¿Por qué?", translation: "Why?", pronunciation: "por KEH" },
          {
            word: "¿Cuánto?",
            translation: "How much?",
            pronunciation: "KWAN-to",
          },
        ],
      },
      {
        type: "quiz",
        question: "Which word means 'Where?' in Spanish?",
        options: [
          { text: "¿Dónde?", isCorrect: true },
          { text: "¿Cuándo?", isCorrect: false },
          { text: "¿Por qué?", isCorrect: false },
          { text: "¿Cómo?", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u1-l6",
    unitId: "es-unit-1",
    title: "Describing Yourself",
    type: "audio",
    order: 6,
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      { description: "Describe your age and nationality in Spanish" },
      { description: "Use basic adjectives to describe yourself" },
    ],
    aiTeacherPrompt:
      "Teach the student to describe themselves in Spanish — age, nationality, and simple personality traits. Keep it conversational and use short example dialogues.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Tengo... años.",
            translation: "I am ... years old.",
            pronunciation: "TEN-go AN-yos",
            context: "State your age",
          },
          {
            text: "Soy de...",
            translation: "I am from...",
            pronunciation: "soy deh",
            context: "State your nationality or origin",
          },
          {
            text: "Soy estudiante.",
            translation: "I am a student.",
            pronunciation: "soy es-too-DYAN-teh",
            context: "State your occupation",
          },
          {
            text: "Me gusta...",
            translation: "I like...",
            pronunciation: "meh GOOS-tah",
            context: "Express a preference",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'I am 25 years old' in Spanish?",
        options: [
          { text: "Tengo 25 años.", isCorrect: true },
          { text: "Soy 25 años.", isCorrect: false },
          { text: "Tengo 25 años viejos.", isCorrect: false },
          { text: "Estoy 25 años.", isCorrect: false },
        ],
        explanation:
          "'Tener' (to have) is used for age in Spanish: 'Tengo X años.'",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Spanish › Unit 2 › Numbers & Time (continued — lessons 2–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "es-u2-l2",
    unitId: "es-unit-2",
    title: "Days of the Week",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Name the seven days of the week in Spanish" }],
    aiTeacherPrompt:
      "Teach the days of the week in Spanish with clear pronunciation and simple memory tricks.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "lunes", translation: "Monday", pronunciation: "LOO-nes" },
          { word: "martes", translation: "Tuesday", pronunciation: "MAR-tes" },
          {
            word: "miércoles",
            translation: "Wednesday",
            pronunciation: "MYER-ko-les",
          },
          {
            word: "jueves",
            translation: "Thursday",
            pronunciation: "HWEH-bes",
          },
          { word: "viernes", translation: "Friday", pronunciation: "BYER-nes" },
          {
            word: "sábado",
            translation: "Saturday",
            pronunciation: "SAH-bah-do",
          },
          {
            word: "domingo",
            translation: "Sunday",
            pronunciation: "do-MEEN-go",
          },
        ],
      },
      {
        type: "quiz",
        question: "What is 'Wednesday' in Spanish?",
        options: [
          { text: "Miércoles", isCorrect: true },
          { text: "Martes", isCorrect: false },
          { text: "Jueves", isCorrect: false },
          { text: "Viernes", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u2-l3",
    unitId: "es-unit-2",
    title: "Telling the Time",
    type: "audio",
    order: 3,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: "Ask and tell the time in Spanish" }],
    aiTeacherPrompt:
      "Teach students how to ask 'What time is it?' and respond with hours and minutes.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "¿Qué hora es?",
            translation: "What time is it?",
            pronunciation: "keh OH-rah es",
          },
          {
            text: "Es la una.",
            translation: "It is one o'clock.",
            pronunciation: "es lah OO-nah",
          },
          {
            text: "Son las dos.",
            translation: "It is two o'clock.",
            pronunciation: "son las dos",
          },
          {
            text: "Son las tres y media.",
            translation: "It is half past three.",
            pronunciation: "son las tres ee MEH-dyah",
          },
          {
            text: "Son las cinco menos cuarto.",
            translation: "It is quarter to five.",
            pronunciation: "son las SEEN-ko MEH-nos KWAR-to",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'It is two o'clock' in Spanish?",
        options: [
          { text: "Son las dos.", isCorrect: true },
          { text: "Es la dos.", isCorrect: false },
          { text: "Son dos.", isCorrect: false },
          { text: "Es las dos.", isCorrect: false },
        ],
        explanation:
          "Use 'Son las...' for all hours except 1 o'clock, which uses 'Es la una.'",
      },
    ],
  },
  {
    id: "es-u2-l4",
    unitId: "es-unit-2",
    title: "Months of the Year",
    type: "vocabulary",
    order: 4,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: "Name all twelve months in Spanish" }],
    aiTeacherPrompt:
      "Teach the months of the year in Spanish. Note they are not capitalized in Spanish.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "enero", translation: "January", pronunciation: "eh-NEH-ro" },
          {
            word: "febrero",
            translation: "February",
            pronunciation: "feh-BREH-ro",
          },
          { word: "marzo", translation: "March", pronunciation: "MAR-so" },
          { word: "abril", translation: "April", pronunciation: "ah-BRIL" },
          { word: "mayo", translation: "May", pronunciation: "MAH-yo" },
          { word: "junio", translation: "June", pronunciation: "HOO-nyo" },
        ],
      },
      {
        type: "quiz",
        question: "What is 'April' in Spanish?",
        options: [
          { text: "Abril", isCorrect: true },
          { text: "Agosto", isCorrect: false },
          { text: "Marzo", isCorrect: false },
          { text: "Mayo", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u2-l5",
    unitId: "es-unit-2",
    title: "Numbers 11–20",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Count from 11 to 20 in Spanish" }],
    aiTeacherPrompt:
      "Teach numbers 11–20 in Spanish. Point out the pattern in 16–19 (dieci + number).",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "once", translation: "11", pronunciation: "ON-seh" },
          { word: "doce", translation: "12", pronunciation: "DOH-seh" },
          { word: "trece", translation: "13", pronunciation: "TREH-seh" },
          { word: "catorce", translation: "14", pronunciation: "kah-TOR-seh" },
          { word: "quince", translation: "15", pronunciation: "KEEN-seh" },
          { word: "veinte", translation: "20", pronunciation: "BAYN-teh" },
        ],
      },
      {
        type: "quiz",
        question: "What does 'quince' mean?",
        options: [
          { text: "15", isCorrect: true },
          { text: "14", isCorrect: false },
          { text: "16", isCorrect: false },
          { text: "13", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u2-l6",
    unitId: "es-unit-2",
    title: "Simple Dates",
    type: "audio",
    order: 6,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: "Express and ask about dates in Spanish" }],
    aiTeacherPrompt:
      "Teach how to talk about dates in Spanish — birthdays, events, and simple date expressions.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "¿Cuándo es tu cumpleaños?",
            translation: "When is your birthday?",
            pronunciation: "KWAN-do es too koom-pleh-AN-yos",
          },
          {
            text: "Mi cumpleaños es el tres de mayo.",
            translation: "My birthday is May 3rd.",
            pronunciation: "mee koom-pleh-AN-yos es el tres deh MAH-yo",
          },
          {
            text: "Hoy es lunes, el diez de enero.",
            translation: "Today is Monday, January 10th.",
            pronunciation: "oy es LOO-nes, el dyez deh eh-NEH-ro",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'Today is Friday' in Spanish?",
        options: [
          { text: "Hoy es viernes.", isCorrect: true },
          { text: "Mañana es viernes.", isCorrect: false },
          { text: "Ayer es viernes.", isCorrect: false },
          { text: "Hoy está viernes.", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Spanish › Unit 3 › Food & Dining (lessons 1–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "es-u3-l1",
    unitId: "es-unit-3",
    title: "Café Vocabulary",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Learn essential café and drink vocabulary in Spanish" },
    ],
    aiTeacherPrompt:
      "Teach vocabulary for ordering at a Spanish café. Focus on drinks and café items.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "el café",
            translation: "coffee",
            pronunciation: "el kah-FEH",
          },
          { word: "el té", translation: "tea", pronunciation: "el teh" },
          {
            word: "el agua",
            translation: "water",
            pronunciation: "el AH-gwah",
          },
          {
            word: "la leche",
            translation: "milk",
            pronunciation: "lah LEH-cheh",
          },
          { word: "el zumo", translation: "juice", pronunciation: "el SOO-mo" },
          { word: "la taza", translation: "cup", pronunciation: "lah TAH-sah" },
        ],
      },
      {
        type: "quiz",
        question: "What is 'coffee' in Spanish?",
        options: [
          { text: "El café", isCorrect: true },
          { text: "El té", isCorrect: false },
          { text: "La leche", isCorrect: false },
          { text: "El agua", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u3-l2",
    unitId: "es-unit-3",
    title: "Ordering Drinks",
    type: "audio",
    order: 2,
    xpReward: 12,
    estimatedMinutes: 6,
    goals: [{ description: "Order drinks politely at a café in Spanish" }],
    aiTeacherPrompt:
      "Teach how to order drinks at a Spanish café. Practice formal and informal ordering phrases.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Quisiera un café, por favor.",
            translation: "I would like a coffee, please.",
            pronunciation: "kee-SYEH-rah oon kah-FEH",
          },
          {
            text: "¿Tiene té con leche?",
            translation: "Do you have tea with milk?",
            pronunciation: "TYEH-neh teh kon LEH-cheh",
          },
          {
            text: "Me pone un agua, por favor.",
            translation: "Give me a water, please.",
            pronunciation: "meh POH-neh oon AH-gwah",
          },
          {
            text: "¿Qué tiene para tomar?",
            translation: "What do you have to drink?",
            pronunciation: "keh TYEH-neh PAH-rah toh-MAR",
          },
        ],
      },
      {
        type: "quiz",
        question:
          "Which phrase is used to politely say 'I would like' in Spanish?",
        options: [
          { text: "Quisiera", isCorrect: true },
          { text: "Tengo", isCorrect: false },
          { text: "Quiero mucho", isCorrect: false },
          { text: "Dame", isCorrect: false },
        ],
        explanation:
          "'Quisiera' is the conditional form of 'querer' — a very polite way to order.",
      },
    ],
  },
  {
    id: "es-u3-l3",
    unitId: "es-unit-3",
    title: "Food Names",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: "Learn names of common foods in Spanish" }],
    aiTeacherPrompt:
      "Teach the names of common foods in Spanish. Include foods from a typical Spanish menu.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "el pan", translation: "bread", pronunciation: "el pan" },
          {
            word: "la sopa",
            translation: "soup",
            pronunciation: "lah SOH-pah",
          },
          {
            word: "la ensalada",
            translation: "salad",
            pronunciation: "lah en-sah-LAH-dah",
          },
          {
            word: "el pollo",
            translation: "chicken",
            pronunciation: "el POH-yo",
          },
          {
            word: "el pescado",
            translation: "fish",
            pronunciation: "el pes-KAH-do",
          },
          {
            word: "la carne",
            translation: "meat",
            pronunciation: "lah KAR-neh",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'la ensalada' mean?",
        options: [
          { text: "Salad", isCorrect: true },
          { text: "Soup", isCorrect: false },
          { text: "Bread", isCorrect: false },
          { text: "Fish", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u3-l4",
    unitId: "es-unit-3",
    title: "At the Restaurant",
    type: "chat",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: "Ask for the menu in Spanish" },
      { description: "Order a main dish at a restaurant" },
    ],
    aiTeacherPrompt:
      "Role-play a restaurant scenario. Act as a waiter and guide the student through ordering a meal in Spanish — from asking for the menu to choosing their dish.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "La carta, por favor.",
            translation: "The menu, please.",
            pronunciation: "lah KAR-tah, por fah-VOR",
          },
          {
            text: "¿Qué recomienda usted?",
            translation: "What do you recommend?",
            pronunciation: "keh reh-ko-MYEN-dah oos-TED",
          },
          {
            text: "Quiero el plato del día.",
            translation: "I want the dish of the day.",
            pronunciation: "KYEH-ro el PLAH-to del DEE-ah",
          },
          {
            text: "¿Está incluido el postre?",
            translation: "Is dessert included?",
            pronunciation: "es-TAH een-kloo-EE-do el POS-treh",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you ask for the menu in Spanish?",
        options: [
          { text: "La carta, por favor.", isCorrect: true },
          { text: "El agua, por favor.", isCorrect: false },
          { text: "La cuenta, por favor.", isCorrect: false },
          { text: "El postre, por favor.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u3-l5",
    unitId: "es-unit-3",
    title: "Asking for the Bill",
    type: "audio",
    order: 5,
    xpReward: 12,
    estimatedMinutes: 5,
    goals: [{ description: "Ask for the bill and handle payment in Spanish" }],
    aiTeacherPrompt:
      "Teach how to ask for the bill and common payment phrases at a Spanish restaurant.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "La cuenta, por favor.",
            translation: "The bill, please.",
            pronunciation: "lah KWEN-tah, por fah-VOR",
          },
          {
            text: "¿Está incluida la propina?",
            translation: "Is the tip included?",
            pronunciation: "es-TAH een-kloo-EE-dah lah pro-PEE-nah",
          },
          {
            text: "Voy a pagar con tarjeta.",
            translation: "I'll pay by card.",
            pronunciation: "boy ah pah-GAR kon tar-HEH-tah",
          },
          {
            text: "¿Podemos pagar por separado?",
            translation: "Can we pay separately?",
            pronunciation: "po-DEH-mos pah-GAR por seh-pah-RAH-do",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'The bill, please' in Spanish?",
        options: [
          { text: "La cuenta, por favor.", isCorrect: true },
          { text: "La carta, por favor.", isCorrect: false },
          { text: "El menú, por favor.", isCorrect: false },
          { text: "El postre, por favor.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "es-u3-l6",
    unitId: "es-unit-3",
    title: "Making a Reservation",
    type: "chat",
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: "Book a table at a restaurant in Spanish" },
      { description: "State the number of people and preferred time" },
    ],
    aiTeacherPrompt:
      "Simulate a phone reservation at a Spanish restaurant. Teach how to state your name, party size, time, and any special requests.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Quisiera reservar una mesa.",
            translation: "I would like to reserve a table.",
            pronunciation: "kee-SYEH-rah reh-ser-BAR OO-nah MEH-sah",
          },
          {
            text: "Para dos personas.",
            translation: "For two people.",
            pronunciation: "PAH-rah dos per-SOH-nas",
          },
          {
            text: "Para las ocho de la noche.",
            translation: "For eight in the evening.",
            pronunciation: "PAH-rah las OH-cho deh lah NOH-cheh",
          },
          {
            text: "A nombre de...",
            translation: "Under the name of...",
            pronunciation: "ah NOM-breh deh",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'For two people' in Spanish?",
        options: [
          { text: "Para dos personas.", isCorrect: true },
          { text: "Para dos mesas.", isCorrect: false },
          { text: "Con dos personas.", isCorrect: false },
          { text: "Por dos personas.", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // French › Unit 1 › Greetings & Basics (continued — lessons 3–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "fr-u1-l3",
    unitId: "fr-unit-1",
    title: "How Are You?",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Ask and answer 'How are you?' in French" }],
    aiTeacherPrompt:
      "Teach how to ask about someone's wellbeing in French and respond naturally.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Comment ça va?",
            translation: "How are you? (informal)",
            pronunciation: "koh-MAH sah vah",
          },
          {
            word: "Très bien",
            translation: "Very well",
            pronunciation: "treh byeh",
          },
          {
            word: "Pas mal",
            translation: "Not bad",
            pronunciation: "pah mahl",
          },
          {
            word: "Comme ci, comme ça",
            translation: "So-so",
            pronunciation: "kom see, kom sah",
          },
          {
            word: "Merci",
            translation: "Thank you",
            pronunciation: "mehr-SEE",
          },
          {
            word: "Et vous?",
            translation: "And you? (formal)",
            pronunciation: "eh voo",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Comme ci, comme ça' mean?",
        options: [
          { text: "So-so", isCorrect: true },
          { text: "Very well", isCorrect: false },
          { text: "Not at all", isCorrect: false },
          { text: "Thank you", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u1-l4",
    unitId: "fr-unit-1",
    title: "Polite Expressions",
    type: "vocabulary",
    order: 4,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Use essential polite phrases in French" }],
    aiTeacherPrompt:
      "Teach common polite expressions in French, from please and thank you to excuse me.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "S'il vous plaît",
            translation: "Please (formal)",
            pronunciation: "seel voo pleh",
          },
          {
            word: "S'il te plaît",
            translation: "Please (informal)",
            pronunciation: "seel tuh pleh",
          },
          {
            word: "Merci beaucoup",
            translation: "Thank you very much",
            pronunciation: "mehr-SEE boh-KOO",
          },
          {
            word: "De rien",
            translation: "You're welcome",
            pronunciation: "duh ryeh",
          },
          {
            word: "Excusez-moi",
            translation: "Excuse me (formal)",
            pronunciation: "ek-SKEW-zay mwah",
          },
          {
            word: "Pardon",
            translation: "Pardon / Sorry",
            pronunciation: "par-DOH",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'You're welcome' in French?",
        options: [
          { text: "De rien", isCorrect: true },
          { text: "Merci", isCorrect: false },
          { text: "S'il vous plaît", isCorrect: false },
          { text: "Pardon", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u1-l5",
    unitId: "fr-unit-1",
    title: "Meeting People",
    type: "audio",
    order: 5,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { description: "Start and close a first-meeting conversation in French" },
    ],
    aiTeacherPrompt:
      "Teach how to introduce yourself and wrap up a first meeting in French.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Je suis ravi(e) de vous rencontrer.",
            translation: "I am delighted to meet you.",
            pronunciation: "zhuh swee rah-VEE duh voo rahn-kohn-TRAY",
          },
          {
            text: "Vous habitez où?",
            translation: "Where do you live?",
            pronunciation: "voo ah-bee-TAY oo",
          },
          {
            text: "Je travaille à...",
            translation: "I work at...",
            pronunciation: "zhuh trah-VY ah",
          },
          {
            text: "À la prochaine!",
            translation: "Until next time!",
            pronunciation: "ah lah pro-SHEN",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'À la prochaine' mean?",
        options: [
          { text: "Until next time!", isCorrect: true },
          { text: "See you soon!", isCorrect: false },
          { text: "Goodbye forever!", isCorrect: false },
          { text: "Good evening!", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u1-l6",
    unitId: "fr-unit-1",
    title: "Basic Questions",
    type: "vocabulary",
    order: 6,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Ask basic questions in French" }],
    aiTeacherPrompt:
      "Teach French question words and simple question patterns.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "Où?", translation: "Where?", pronunciation: "oo" },
          { word: "Quand?", translation: "When?", pronunciation: "kahn" },
          {
            word: "Pourquoi?",
            translation: "Why?",
            pronunciation: "poor-KWAH",
          },
          { word: "Comment?", translation: "How?", pronunciation: "koh-MAH" },
          {
            word: "Combien?",
            translation: "How much/many?",
            pronunciation: "kom-BYEH",
          },
          { word: "Qui?", translation: "Who?", pronunciation: "kee" },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Pourquoi?' mean?",
        options: [
          { text: "Why?", isCorrect: true },
          { text: "Where?", isCorrect: false },
          { text: "Who?", isCorrect: false },
          { text: "When?", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // French › Unit 2 › Getting Around (lessons 1–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "fr-u2-l1",
    unitId: "fr-unit-2",
    title: "Asking for Directions",
    type: "audio",
    order: 1,
    xpReward: 12,
    estimatedMinutes: 6,
    goals: [
      { description: "Ask for and understand basic directions in French" },
    ],
    aiTeacherPrompt:
      "Teach how to ask for directions in French and understand the most common responses.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Où est la gare?",
            translation: "Where is the train station?",
            pronunciation: "oo eh lah gar",
          },
          {
            text: "Tournez à gauche.",
            translation: "Turn left.",
            pronunciation: "toor-NAY ah gohsh",
          },
          {
            text: "Tournez à droite.",
            translation: "Turn right.",
            pronunciation: "toor-NAY ah drwaht",
          },
          {
            text: "Allez tout droit.",
            translation: "Go straight ahead.",
            pronunciation: "ah-LAY too drwah",
          },
          {
            text: "C'est loin d'ici?",
            translation: "Is it far from here?",
            pronunciation: "seh lweh dee-SEE",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Tournez à gauche' mean?",
        options: [
          { text: "Turn left", isCorrect: true },
          { text: "Turn right", isCorrect: false },
          { text: "Go straight", isCorrect: false },
          { text: "Stop here", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u2-l2",
    unitId: "fr-unit-2",
    title: "Metro & Transport",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Use transport vocabulary in French" }],
    aiTeacherPrompt:
      "Teach vocabulary for using public transport in a French city.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "le métro",
            translation: "the metro/subway",
            pronunciation: "luh meh-TRO",
          },
          { word: "le bus", translation: "the bus", pronunciation: "luh boos" },
          {
            word: "le train",
            translation: "the train",
            pronunciation: "luh treh",
          },
          {
            word: "une station",
            translation: "a station (metro)",
            pronunciation: "ewn stah-SYOH",
          },
          {
            word: "un billet",
            translation: "a ticket",
            pronunciation: "uh bee-YEH",
          },
          {
            word: "la sortie",
            translation: "the exit",
            pronunciation: "lah sor-TEE",
          },
        ],
      },
      {
        type: "quiz",
        question: "What is 'a ticket' in French?",
        options: [
          { text: "Un billet", isCorrect: true },
          { text: "Une sortie", isCorrect: false },
          { text: "Le bus", isCorrect: false },
          { text: "La station", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u2-l3",
    unitId: "fr-unit-2",
    title: "At the Train Station",
    type: "audio",
    order: 3,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { description: "Buy a ticket and navigate a French train station" },
    ],
    aiTeacherPrompt:
      "Simulate buying a train ticket in French. Teach departure times, platform numbers, and ticket types.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Un billet pour Paris, s'il vous plaît.",
            translation: "One ticket to Paris, please.",
            pronunciation: "uh bee-YEH poor pah-REE",
          },
          {
            text: "À quelle heure part le train?",
            translation: "What time does the train leave?",
            pronunciation: "ah kel ur par luh treh",
          },
          {
            text: "Quai numéro quatre.",
            translation: "Platform number four.",
            pronunciation: "keh noo-meh-RO katr",
          },
          {
            text: "Un aller simple ou aller-retour?",
            translation: "One way or round trip?",
            pronunciation: "uh ah-LAY sah-PL oo ah-LAY ruh-TOOR",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'aller-retour' mean?",
        options: [
          { text: "Round trip", isCorrect: true },
          { text: "One way", isCorrect: false },
          { text: "First class", isCorrect: false },
          { text: "Late train", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u2-l4",
    unitId: "fr-unit-2",
    title: "Taking a Taxi",
    type: "chat",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      { description: "Hail and communicate with a taxi driver in French" },
    ],
    aiTeacherPrompt:
      "Role-play a taxi ride in Paris. Teach how to give an address, ask about the fare, and pay.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Pouvez-vous m'emmener à...?",
            translation: "Can you take me to...?",
            pronunciation: "poo-VAY voo mah-muh-NAY ah",
          },
          {
            text: "C'est combien?",
            translation: "How much is it?",
            pronunciation: "seh kom-BYEH",
          },
          {
            text: "Gardez la monnaie.",
            translation: "Keep the change.",
            pronunciation: "gar-DAY lah moh-NEH",
          },
          {
            text: "Je suis pressé(e).",
            translation: "I'm in a hurry.",
            pronunciation: "zhuh swee preh-SAY",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'Keep the change' in French?",
        options: [
          { text: "Gardez la monnaie.", isCorrect: true },
          { text: "C'est combien?", isCorrect: false },
          { text: "Merci beaucoup.", isCorrect: false },
          { text: "Je suis pressé.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u2-l5",
    unitId: "fr-unit-2",
    title: "City Landmarks",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Name common city landmarks in French" }],
    aiTeacherPrompt:
      "Teach vocabulary for city landmarks and places in French cities.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "la cathédrale",
            translation: "the cathedral",
            pronunciation: "lah kah-teh-DRAL",
          },
          {
            word: "le musée",
            translation: "the museum",
            pronunciation: "luh mew-ZAY",
          },
          {
            word: "le parc",
            translation: "the park",
            pronunciation: "luh park",
          },
          {
            word: "la place",
            translation: "the square/plaza",
            pronunciation: "lah plahs",
          },
          {
            word: "le pont",
            translation: "the bridge",
            pronunciation: "luh poh",
          },
          {
            word: "la rue",
            translation: "the street",
            pronunciation: "lah roo",
          },
        ],
      },
      {
        type: "quiz",
        question: "What is 'le musée' in English?",
        options: [
          { text: "The museum", isCorrect: true },
          { text: "The park", isCorrect: false },
          { text: "The bridge", isCorrect: false },
          { text: "The cathedral", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u2-l6",
    unitId: "fr-unit-2",
    title: "Getting Around the City",
    type: "chat",
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [{ description: "Hold a navigation conversation in a French city" }],
    aiTeacherPrompt:
      "Simulate a scenario where the student is lost in Paris and needs directions. Cover key phrases for asking for help, understanding responses, and thanking people.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Excusez-moi, je suis perdu(e).",
            translation: "Excuse me, I'm lost.",
            pronunciation: "ek-SKEW-zay mwah, zhuh swee pehr-DOO",
          },
          {
            text: "Est-ce que c'est loin?",
            translation: "Is it far?",
            pronunciation: "es-kuh seh lweh",
          },
          {
            text: "Combien de temps à pied?",
            translation: "How long on foot?",
            pronunciation: "kom-BYEH duh tahn ah pyeh",
          },
          {
            text: "Merci de votre aide.",
            translation: "Thank you for your help.",
            pronunciation: "mehr-SEE duh votr ehd",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'I'm lost' in French?",
        options: [
          { text: "Je suis perdu(e).", isCorrect: true },
          { text: "Je suis fatigué(e).", isCorrect: false },
          { text: "Je suis pressé(e).", isCorrect: false },
          { text: "Je suis content(e).", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // French › Unit 3 › Shopping & Money (lessons 1–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "fr-u3-l1",
    unitId: "fr-unit-3",
    title: "At the Market",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Use vocabulary for shopping at a French market" }],
    aiTeacherPrompt:
      "Teach common market vocabulary in French — foods, quantities, and polite requests.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "les légumes",
            translation: "vegetables",
            pronunciation: "lay lay-GOM",
          },
          {
            word: "les fruits",
            translation: "fruits",
            pronunciation: "lay frwee",
          },
          {
            word: "Combien ça coûte?",
            translation: "How much does it cost?",
            pronunciation: "kom-BYEH sah koot",
          },
          {
            word: "un kilo de",
            translation: "a kilogram of",
            pronunciation: "uh KEE-lo duh",
          },
          {
            word: "C'est frais?",
            translation: "Is it fresh?",
            pronunciation: "seh freh",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you ask 'How much does it cost?' in French?",
        options: [
          { text: "Combien ça coûte?", isCorrect: true },
          { text: "C'est frais?", isCorrect: false },
          { text: "Est-ce que c'est bon?", isCorrect: false },
          { text: "Je voudrais acheter.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u3-l2",
    unitId: "fr-unit-3",
    title: "Clothes Shopping",
    type: "audio",
    order: 2,
    xpReward: 12,
    estimatedMinutes: 6,
    goals: [
      {
        description:
          "Shop for clothes in French — sizes, colors, and fitting rooms",
      },
    ],
    aiTeacherPrompt:
      "Simulate a clothes shopping experience in French. Teach how to ask for size, try things on, and express preference.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Quelle est votre taille?",
            translation: "What is your size?",
            pronunciation: "kel eh votr tie",
          },
          {
            text: "Je fais du 38.",
            translation: "I am a size 38.",
            pronunciation: "zhuh feh doo trahn-WEET",
          },
          {
            text: "Puis-je l'essayer?",
            translation: "May I try it on?",
            pronunciation: "pwee-zhuh leh-say-YAY",
          },
          {
            text: "Avez-vous ça en bleu?",
            translation: "Do you have this in blue?",
            pronunciation: "ah-VAY voo sah ahn bluh",
          },
          {
            text: "C'est trop grand.",
            translation: "It's too big.",
            pronunciation: "seh tro grahn",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'May I try it on?' in French?",
        options: [
          { text: "Puis-je l'essayer?", isCorrect: true },
          { text: "C'est combien?", isCorrect: false },
          { text: "Quelle est votre taille?", isCorrect: false },
          { text: "Je fais du 38.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u3-l3",
    unitId: "fr-unit-3",
    title: "Prices & Numbers",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Understand and express prices in French" }],
    aiTeacherPrompt:
      "Teach numbers used in prices, euros, cents, and common price expressions in French.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "un euro",
            translation: "one euro",
            pronunciation: "uh nuh-RO",
          },
          {
            word: "cinquante centimes",
            translation: "fifty cents",
            pronunciation: "sah-KAHT sahn-TEEM",
          },
          {
            word: "C'est cher.",
            translation: "It's expensive.",
            pronunciation: "seh shehr",
          },
          {
            word: "C'est bon marché.",
            translation: "It's a good deal.",
            pronunciation: "seh boh mar-SHAY",
          },
          {
            word: "la promotion",
            translation: "the sale / promotion",
            pronunciation: "lah proh-moh-SYOH",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'C'est cher' mean?",
        options: [
          { text: "It's expensive", isCorrect: true },
          { text: "It's cheap", isCorrect: false },
          { text: "It's a deal", isCorrect: false },
          { text: "It's new", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u3-l4",
    unitId: "fr-unit-3",
    title: "Paying & Change",
    type: "chat",
    order: 4,
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [
      { description: "Complete a purchase and handle payment in French" },
    ],
    aiTeacherPrompt:
      "Simulate paying for items in a French shop. Teach how to ask to pay, receive change, and say goodbye politely.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Je voudrais payer.",
            translation: "I would like to pay.",
            pronunciation: "zhuh voo-DREH peh-YAY",
          },
          {
            text: "Vous acceptez les cartes?",
            translation: "Do you accept cards?",
            pronunciation: "voo zak-SEP-tay lay kart",
          },
          {
            text: "Voici la monnaie.",
            translation: "Here is your change.",
            pronunciation: "vwah-SEE lah moh-NEH",
          },
          {
            text: "Avez-vous un sac?",
            translation: "Do you have a bag?",
            pronunciation: "ah-VAY voo uh sak",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you ask 'Do you accept cards?' in French?",
        options: [
          { text: "Vous acceptez les cartes?", isCorrect: true },
          { text: "Je voudrais payer.", isCorrect: false },
          { text: "Avez-vous un sac?", isCorrect: false },
          { text: "C'est combien?", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u3-l5",
    unitId: "fr-unit-3",
    title: "At the Pharmacy",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Ask for medicine and describe symptoms in French" },
    ],
    aiTeacherPrompt:
      "Teach vocabulary for a French pharmacy visit — common medicines, ailments, and polite requests.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "la pharmacie",
            translation: "the pharmacy",
            pronunciation: "lah far-mah-SEE",
          },
          {
            word: "une ordonnance",
            translation: "a prescription",
            pronunciation: "ewn or-doh-NAHS",
          },
          {
            word: "j'ai mal à la tête",
            translation: "I have a headache",
            pronunciation: "zhay mahl ah lah tet",
          },
          {
            word: "de l'aspirine",
            translation: "some aspirin",
            pronunciation: "duh lahs-pee-REEN",
          },
          {
            word: "Avez-vous...?",
            translation: "Do you have...?",
            pronunciation: "ah-VAY voo",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'I have a headache' in French?",
        options: [
          { text: "J'ai mal à la tête.", isCorrect: true },
          { text: "J'ai faim.", isCorrect: false },
          { text: "J'ai froid.", isCorrect: false },
          { text: "Je suis malade.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "fr-u3-l6",
    unitId: "fr-unit-3",
    title: "Returns & Exchanges",
    type: "chat",
    order: 6,
    xpReward: 15,
    estimatedMinutes: 7,
    goals: [{ description: "Return or exchange a purchase in French" }],
    aiTeacherPrompt:
      "Simulate a product return at a French store. Teach how to explain the problem and ask for a refund or exchange.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Je voudrais échanger ceci.",
            translation: "I would like to exchange this.",
            pronunciation: "zhuh voo-DREH ay-shahn-ZHAY suh-SEE",
          },
          {
            text: "Il y a un défaut.",
            translation: "There is a defect.",
            pronunciation: "eel ya uh day-FO",
          },
          {
            text: "Voici le reçu.",
            translation: "Here is the receipt.",
            pronunciation: "vwah-SEE luh ruh-SOO",
          },
          {
            text: "Puis-je être remboursé(e)?",
            translation: "Can I be reimbursed?",
            pronunciation: "pwee-zhuh EHtr rahm-boor-SAY",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'Here is the receipt' in French?",
        options: [
          { text: "Voici le reçu.", isCorrect: true },
          { text: "Voici la monnaie.", isCorrect: false },
          { text: "Voici la carte.", isCorrect: false },
          { text: "Voici le produit.", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Japanese › Unit 1 › Hiragana Basics (continued — lessons 2–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "jp-u1-l2",
    unitId: "jp-unit-1",
    title: "K-row (か行)",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: "Read and write the K-row hiragana: か き く け こ" },
    ],
    aiTeacherPrompt:
      "Teach the K-row hiragana characters. Give example words for each character and practice pronunciation.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "か",
            translation: "ka",
            pronunciation: "kah",
            exampleSentence: "かわ (kawa)",
            exampleTranslation: "river",
          },
          {
            word: "き",
            translation: "ki",
            pronunciation: "kee",
            exampleSentence: "きく (kiku)",
            exampleTranslation: "chrysanthemum",
          },
          {
            word: "く",
            translation: "ku",
            pronunciation: "koo",
            exampleSentence: "くも (kumo)",
            exampleTranslation: "cloud",
          },
          {
            word: "け",
            translation: "ke",
            pronunciation: "keh",
            exampleSentence: "けが (kega)",
            exampleTranslation: "injury",
          },
          {
            word: "こ",
            translation: "ko",
            pronunciation: "koh",
            exampleSentence: "こい (koi)",
            exampleTranslation: "koi fish / love",
          },
        ],
      },
      {
        type: "quiz",
        question: "Which hiragana makes the 'koo' sound?",
        options: [
          { text: "く", isCorrect: true },
          { text: "か", isCorrect: false },
          { text: "こ", isCorrect: false },
          { text: "き", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u1-l3",
    unitId: "jp-unit-1",
    title: "S-row (さ行)",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: "Read and write the S-row hiragana: さ し す せ そ" },
    ],
    aiTeacherPrompt:
      "Teach the S-row hiragana characters. Note that し (shi) is irregular — not 'si'.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "さ",
            translation: "sa",
            pronunciation: "sah",
            exampleSentence: "さかな (sakana)",
            exampleTranslation: "fish",
          },
          {
            word: "し",
            translation: "shi",
            pronunciation: "shee",
            exampleSentence: "しお (shio)",
            exampleTranslation: "salt",
          },
          {
            word: "す",
            translation: "su",
            pronunciation: "soo",
            exampleSentence: "すし (sushi)",
            exampleTranslation: "sushi",
          },
          {
            word: "せ",
            translation: "se",
            pronunciation: "seh",
            exampleSentence: "せかい (sekai)",
            exampleTranslation: "world",
          },
          {
            word: "そ",
            translation: "so",
            pronunciation: "soh",
            exampleSentence: "そら (sora)",
            exampleTranslation: "sky",
          },
        ],
      },
      {
        type: "quiz",
        question: "How is 'し' pronounced?",
        options: [
          { text: "shi (not si)", isCorrect: true },
          { text: "si", isCorrect: false },
          { text: "se", isCorrect: false },
          { text: "su", isCorrect: false },
        ],
        explanation:
          "'し' is pronounced 'shi' — an irregular sound in the S-row.",
      },
    ],
  },
  {
    id: "jp-u1-l4",
    unitId: "jp-unit-1",
    title: "T-row (た行)",
    type: "vocabulary",
    order: 4,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [
      { description: "Read and write the T-row hiragana: た ち つ て と" },
    ],
    aiTeacherPrompt:
      "Teach the T-row hiragana. Highlight the irregular sounds: ち (chi) and つ (tsu).",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "た",
            translation: "ta",
            pronunciation: "tah",
            exampleSentence: "たこ (tako)",
            exampleTranslation: "octopus",
          },
          {
            word: "ち",
            translation: "chi",
            pronunciation: "chee",
            exampleSentence: "ちず (chizu)",
            exampleTranslation: "map",
          },
          {
            word: "つ",
            translation: "tsu",
            pronunciation: "tsoo",
            exampleSentence: "つき (tsuki)",
            exampleTranslation: "moon",
          },
          {
            word: "て",
            translation: "te",
            pronunciation: "teh",
            exampleSentence: "てがみ (tegami)",
            exampleTranslation: "letter",
          },
          {
            word: "と",
            translation: "to",
            pronunciation: "toh",
            exampleSentence: "とり (tori)",
            exampleTranslation: "bird",
          },
        ],
      },
      {
        type: "quiz",
        question: "Which character makes the 'chi' sound?",
        options: [
          { text: "ち", isCorrect: true },
          { text: "た", isCorrect: false },
          { text: "つ", isCorrect: false },
          { text: "て", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u1-l5",
    unitId: "jp-unit-1",
    title: "N-row (な行)",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Read and write the N-row hiragana: な に ぬ ね の" },
    ],
    aiTeacherPrompt:
      "Teach the N-row hiragana. Practice by reading simple example words.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "な",
            translation: "na",
            pronunciation: "nah",
            exampleSentence: "なつ (natsu)",
            exampleTranslation: "summer",
          },
          {
            word: "に",
            translation: "ni",
            pronunciation: "nee",
            exampleSentence: "にわ (niwa)",
            exampleTranslation: "garden",
          },
          {
            word: "ぬ",
            translation: "nu",
            pronunciation: "noo",
            exampleSentence: "ぬの (nuno)",
            exampleTranslation: "cloth",
          },
          {
            word: "ね",
            translation: "ne",
            pronunciation: "neh",
            exampleSentence: "ねこ (neko)",
            exampleTranslation: "cat",
          },
          {
            word: "の",
            translation: "no",
            pronunciation: "noh",
            exampleSentence: "のり (nori)",
            exampleTranslation: "seaweed",
          },
        ],
      },
      {
        type: "quiz",
        question: "What word means 'cat' in Japanese?",
        options: [
          { text: "ねこ (neko)", isCorrect: true },
          { text: "なつ (natsu)", isCorrect: false },
          { text: "にわ (niwa)", isCorrect: false },
          { text: "のり (nori)", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u1-l6",
    unitId: "jp-unit-1",
    title: "Reading Practice",
    type: "audio",
    order: 6,
    xpReward: 15,
    estimatedMinutes: 8,
    goals: [
      { description: "Combine learned hiragana to read simple words" },
      { description: "Build confidence reading short Japanese text" },
    ],
    aiTeacherPrompt:
      "Guide the student through reading short hiragana words using all rows learned so far. Encourage and correct gently.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "さかな", translation: "fish", pronunciation: "sa-ka-na" },
          { word: "いぬ", translation: "dog", pronunciation: "i-nu" },
          { word: "ねこ", translation: "cat", pronunciation: "ne-ko" },
          { word: "そら", translation: "sky", pronunciation: "so-ra" },
          { word: "つき", translation: "moon", pronunciation: "tsu-ki" },
          { word: "なつ", translation: "summer", pronunciation: "na-tsu" },
        ],
      },
      {
        type: "quiz",
        question: "What does 'そら' mean?",
        options: [
          { text: "Sky", isCorrect: true },
          { text: "Moon", isCorrect: false },
          { text: "Summer", isCorrect: false },
          { text: "Cat", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Japanese › Unit 2 › Greetings & Politeness (continued — lessons 2–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "jp-u2-l2",
    unitId: "jp-unit-2",
    title: "Self Introduction",
    type: "audio",
    order: 2,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: "Introduce yourself fully in Japanese" }],
    aiTeacherPrompt:
      "Teach a full self-introduction in Japanese — name, origin, and occupation.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "私の名前は___です。",
            translation: "My name is ___.",
            pronunciation: "wah-tah-shee no nah-mae wah ___ des",
          },
          {
            text: "私は___から来ました。",
            translation: "I am from ___.",
            pronunciation: "wah-tah-shee wah ___ kah-rah kee-mah-shee-tah",
          },
          {
            text: "___に住んでいます。",
            translation: "I live in ___.",
            pronunciation: "___ nee sun-deh ee-mahs",
          },
          {
            text: "どうぞよろしく。",
            translation: "Nice to meet you.",
            pronunciation: "doh-zoh yoh-ROH-shee-koo",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'どうぞよろしく' mean?",
        options: [
          { text: "Nice to meet you.", isCorrect: true },
          { text: "Thank you very much.", isCorrect: false },
          { text: "See you later.", isCorrect: false },
          { text: "Good morning.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u2-l3",
    unitId: "jp-unit-2",
    title: "At School or Work",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Use common workplace and school phrases in Japanese" },
    ],
    aiTeacherPrompt:
      "Teach vocabulary and phrases used in Japanese school or work settings.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "お疲れ様です",
            translation: "Good work (said to colleagues)",
            pronunciation: "oh-tsoo-kah-reh-sah-mah des",
          },
          {
            word: "よろしくお願いします",
            translation: "Please take care of me / Thank you in advance",
            pronunciation: "yoh-ROH-shee-ku oh-neh-gai-shee-mahs",
          },
          {
            word: "失礼します",
            translation: "Excuse me (leaving a room)",
            pronunciation: "shee-tsoo-reh-ee shee-mahs",
          },
          {
            word: "ありがとうございます",
            translation: "Thank you very much",
            pronunciation: "ah-ree-gah-toh goh-zai-mahs",
          },
          {
            word: "わかりました",
            translation: "I understand",
            pronunciation: "wah-kah-ree-mah-shee-tah",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'わかりました' mean?",
        options: [
          { text: "I understand.", isCorrect: true },
          { text: "Good work.", isCorrect: false },
          { text: "Thank you.", isCorrect: false },
          { text: "Please help me.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u2-l4",
    unitId: "jp-unit-2",
    title: "Family Vocabulary",
    type: "vocabulary",
    order: 4,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: "Name family members in Japanese" }],
    aiTeacherPrompt:
      "Teach Japanese family vocabulary. Explain the difference between terms used for your own family and someone else's family.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "お父さん",
            translation: "father (referring to someone else's)",
            pronunciation: "oh-toh-sahn",
          },
          {
            word: "お母さん",
            translation: "mother (referring to someone else's)",
            pronunciation: "oh-kah-sahn",
          },
          { word: "兄", translation: "older brother", pronunciation: "ah-nee" },
          { word: "姉", translation: "older sister", pronunciation: "ah-neh" },
          {
            word: "弟",
            translation: "younger brother",
            pronunciation: "oh-toh-toh",
          },
          {
            word: "妹",
            translation: "younger sister",
            pronunciation: "ee-moh-toh",
          },
        ],
      },
      {
        type: "quiz",
        question: "What is '兄' in English?",
        options: [
          { text: "Older brother", isCorrect: true },
          { text: "Younger brother", isCorrect: false },
          { text: "Older sister", isCorrect: false },
          { text: "Father", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u2-l5",
    unitId: "jp-unit-2",
    title: "Daily Routines",
    type: "audio",
    order: 5,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: "Describe daily activities in Japanese" }],
    aiTeacherPrompt:
      "Teach simple Japanese verbs for daily routines — waking up, eating, going out, and sleeping.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "起きます",
            translation: "to wake up / get up",
            pronunciation: "oh-kee-mahs",
          },
          {
            word: "食べます",
            translation: "to eat",
            pronunciation: "tah-beh-mahs",
          },
          {
            word: "飲みます",
            translation: "to drink",
            pronunciation: "noh-mee-mahs",
          },
          {
            word: "行きます",
            translation: "to go",
            pronunciation: "ee-kee-mahs",
          },
          {
            word: "帰ります",
            translation: "to return home",
            pronunciation: "kah-eh-ree-mahs",
          },
          {
            word: "寝ます",
            translation: "to sleep",
            pronunciation: "neh-mahs",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does '食べます' mean?",
        options: [
          { text: "To eat", isCorrect: true },
          { text: "To drink", isCorrect: false },
          { text: "To sleep", isCorrect: false },
          { text: "To go", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "jp-u2-l6",
    unitId: "jp-unit-2",
    title: "Counting Things",
    type: "vocabulary",
    order: 6,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: "Count objects using Japanese native counters" }],
    aiTeacherPrompt:
      "Teach the native Japanese counter system (ひとつ、ふたつ...) used for general objects. Keep it simple and fun.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "ひとつ",
            translation: "one (thing)",
            pronunciation: "hee-toh-tsoo",
          },
          {
            word: "ふたつ",
            translation: "two (things)",
            pronunciation: "foo-tah-tsoo",
          },
          {
            word: "みっつ",
            translation: "three (things)",
            pronunciation: "mee-tsoo",
          },
          {
            word: "よっつ",
            translation: "four (things)",
            pronunciation: "yoh-tsoo",
          },
          {
            word: "いつつ",
            translation: "five (things)",
            pronunciation: "ee-tsoo-tsoo",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'two (things)' in Japanese?",
        options: [
          { text: "ふたつ", isCorrect: true },
          { text: "ひとつ", isCorrect: false },
          { text: "みっつ", isCorrect: false },
          { text: "よっつ", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // German › Unit 1 › Greetings & Basics (continued — lessons 2–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "de-u1-l2",
    unitId: "de-unit-1",
    title: "Introducing Yourself",
    type: "audio",
    order: 2,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [
      { description: "Say your name and origin in German" },
      { description: "Exchange a simple self-introduction in German" },
    ],
    aiTeacherPrompt:
      "Teach the student to introduce themselves in German — name, origin, and occupation. Practice with short dialogue.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Ich bin...",
            translation: "I am...",
            pronunciation: "ikh bin",
            context: "State your name or identity",
          },
          {
            text: "Ich heiße...",
            translation: "My name is...",
            pronunciation: "ikh HY-seh",
            context: "Introduce your name",
          },
          {
            text: "Ich komme aus...",
            translation: "I am from...",
            pronunciation: "ikh KO-meh owss",
          },
          {
            text: "Ich bin Student/Studentin.",
            translation: "I am a student.",
            pronunciation: "ikh bin shtoo-DENT",
          },
          {
            text: "Freut mich!",
            translation: "Nice to meet you!",
            pronunciation: "froyt mikh",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'My name is' in German?",
        options: [
          { text: "Ich heiße", isCorrect: true },
          { text: "Ich bin gut", isCorrect: false },
          { text: "Ich komme", isCorrect: false },
          { text: "Ich spreche", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u1-l3",
    unitId: "de-unit-1",
    title: "How Are You?",
    type: "vocabulary",
    order: 3,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Ask and answer 'How are you?' in German" }],
    aiTeacherPrompt:
      "Teach how to ask about someone's wellbeing in German and respond politely.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Wie geht es Ihnen?",
            translation: "How are you? (formal)",
            pronunciation: "vee gayt es EE-nen",
          },
          {
            word: "Wie geht's?",
            translation: "How are you? (informal)",
            pronunciation: "vee gayts",
          },
          {
            word: "Mir geht es gut.",
            translation: "I am well.",
            pronunciation: "meer gayt es goot",
          },
          {
            word: "Es geht.",
            translation: "I'm okay / Not bad.",
            pronunciation: "es gayt",
          },
          {
            word: "Nicht so gut.",
            translation: "Not so well.",
            pronunciation: "nikht zo goot",
          },
          {
            word: "Danke, und Ihnen?",
            translation: "Thank you, and you?",
            pronunciation: "DAHN-keh, oont EE-nen",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Mir geht es gut' mean?",
        options: [
          { text: "I am well.", isCorrect: true },
          { text: "I am tired.", isCorrect: false },
          { text: "Not so good.", isCorrect: false },
          { text: "I am okay.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u1-l4",
    unitId: "de-unit-1",
    title: "Numbers 1–10",
    type: "vocabulary",
    order: 4,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Count from 1 to 10 in German" }],
    aiTeacherPrompt:
      "Teach German numbers 1–10 with clear pronunciation. Use fun examples to make them stick.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "eins", translation: "1", pronunciation: "ayns" },
          { word: "zwei", translation: "2", pronunciation: "tsvay" },
          { word: "drei", translation: "3", pronunciation: "dry" },
          { word: "vier", translation: "4", pronunciation: "feer" },
          { word: "fünf", translation: "5", pronunciation: "fewnf" },
          { word: "zehn", translation: "10", pronunciation: "tsayn" },
        ],
      },
      {
        type: "quiz",
        question: "What is 'fünf' in English?",
        options: [
          { text: "5", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "6", isCorrect: false },
          { text: "3", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u1-l5",
    unitId: "de-unit-1",
    title: "Basic Questions",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Use question words to form simple German questions" },
    ],
    aiTeacherPrompt:
      "Teach German question words with simple example questions and answers.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "Wie?", translation: "How?", pronunciation: "vee" },
          { word: "Was?", translation: "What?", pronunciation: "vahs" },
          { word: "Wer?", translation: "Who?", pronunciation: "vayr" },
          { word: "Wann?", translation: "When?", pronunciation: "vahn" },
          { word: "Wo?", translation: "Where?", pronunciation: "voh" },
          { word: "Warum?", translation: "Why?", pronunciation: "vah-ROOM" },
        ],
      },
      {
        type: "quiz",
        question: "Which German word means 'Where?'",
        options: [
          { text: "Wo?", isCorrect: true },
          { text: "Wie?", isCorrect: false },
          { text: "Wer?", isCorrect: false },
          { text: "Was?", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u1-l6",
    unitId: "de-unit-1",
    title: "Polite Phrases",
    type: "vocabulary",
    order: 6,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Use common polite expressions in German" }],
    aiTeacherPrompt:
      "Teach essential polite phrases in German for everyday interactions.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "Bitte",
            translation: "Please / You're welcome",
            pronunciation: "BIT-teh",
          },
          {
            word: "Danke",
            translation: "Thank you",
            pronunciation: "DAHN-keh",
          },
          {
            word: "Bitte sehr",
            translation: "You're very welcome",
            pronunciation: "BIT-teh zayr",
          },
          {
            word: "Entschuldigung",
            translation: "Excuse me / Sorry",
            pronunciation: "ent-SHOOL-dee-goong",
          },
          {
            word: "Kein Problem",
            translation: "No problem",
            pronunciation: "kayn pro-BLAYM",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'Entschuldigung' mean?",
        options: [
          { text: "Excuse me / Sorry", isCorrect: true },
          { text: "Please", isCorrect: false },
          { text: "Thank you", isCorrect: false },
          { text: "No problem", isCorrect: false },
        ],
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // German › Unit 2 › Family & People (lessons 1–6)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "de-u2-l1",
    unitId: "de-unit-2",
    title: "Family Members",
    type: "vocabulary",
    order: 1,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Name family members in German" }],
    aiTeacherPrompt: "Teach German family vocabulary with example sentences.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "die Mutter",
            translation: "the mother",
            pronunciation: "dee MOO-ter",
          },
          {
            word: "der Vater",
            translation: "the father",
            pronunciation: "dayr FAH-ter",
          },
          {
            word: "die Schwester",
            translation: "the sister",
            pronunciation: "dee SHVES-ter",
          },
          {
            word: "der Bruder",
            translation: "the brother",
            pronunciation: "dayr BROO-der",
          },
          {
            word: "die Oma",
            translation: "the grandmother",
            pronunciation: "dee OH-mah",
          },
          {
            word: "der Opa",
            translation: "the grandfather",
            pronunciation: "dayr OH-pah",
          },
        ],
      },
      {
        type: "quiz",
        question: "What is 'die Schwester' in English?",
        options: [
          { text: "The sister", isCorrect: true },
          { text: "The mother", isCorrect: false },
          { text: "The brother", isCorrect: false },
          { text: "The grandmother", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u2-l2",
    unitId: "de-unit-2",
    title: "Describing People",
    type: "vocabulary",
    order: 2,
    xpReward: 10,
    estimatedMinutes: 6,
    goals: [{ description: "Describe physical appearance in German" }],
    aiTeacherPrompt:
      "Teach adjectives for physical descriptions in German. Use simple example sentences.",
    activities: [
      {
        type: "vocabulary",
        items: [
          { word: "groß", translation: "tall / big", pronunciation: "grohs" },
          {
            word: "klein",
            translation: "short / small",
            pronunciation: "klayn",
          },
          { word: "jung", translation: "young", pronunciation: "yoong" },
          { word: "alt", translation: "old", pronunciation: "ahlt" },
          {
            word: "freundlich",
            translation: "friendly",
            pronunciation: "FROIND-likh",
          },
          { word: "nett", translation: "nice / kind", pronunciation: "net" },
        ],
      },
      {
        type: "quiz",
        question: "What does 'freundlich' mean?",
        options: [
          { text: "Friendly", isCorrect: true },
          { text: "Tall", isCorrect: false },
          { text: "Old", isCorrect: false },
          { text: "Nice", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u2-l3",
    unitId: "de-unit-2",
    title: "My Family",
    type: "audio",
    order: 3,
    xpReward: 12,
    estimatedMinutes: 7,
    goals: [{ description: "Talk about your family members in German" }],
    aiTeacherPrompt:
      "Teach how to describe one's family in German using 'Ich habe...' and 'Meine Familie...'",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Ich habe zwei Geschwister.",
            translation: "I have two siblings.",
            pronunciation: "ikh HAH-beh tsvay geh-SHVISS-ter",
          },
          {
            text: "Meine Eltern heißen...",
            translation: "My parents are named...",
            pronunciation: "MY-neh EL-tern HY-ssen",
          },
          {
            text: "Ich bin Einzelkind.",
            translation: "I am an only child.",
            pronunciation: "ikh bin EYN-tsel-kint",
          },
          {
            text: "Meine Familie ist groß.",
            translation: "My family is big.",
            pronunciation: "MY-neh fah-MEE-lyeh ist grohs",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you say 'I have two siblings' in German?",
        options: [
          { text: "Ich habe zwei Geschwister.", isCorrect: true },
          { text: "Ich bin zwei Geschwister.", isCorrect: false },
          { text: "Ich habe zwei Kinder.", isCorrect: false },
          { text: "Meine Familie ist zwei.", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u2-l4",
    unitId: "de-unit-2",
    title: "Ages & Birthdays",
    type: "audio",
    order: 4,
    xpReward: 12,
    estimatedMinutes: 6,
    goals: [
      { description: "Ask about and state ages and birthdays in German" },
    ],
    aiTeacherPrompt:
      "Teach how to ask someone's age and birthday in German, and how to answer.",
    activities: [
      {
        type: "phrase",
        items: [
          {
            text: "Wie alt bist du?",
            translation: "How old are you?",
            pronunciation: "vee ahlt bist doo",
          },
          {
            text: "Ich bin 25 Jahre alt.",
            translation: "I am 25 years old.",
            pronunciation: "ikh bin fewnf-oont-TSVAHN-tsikh YAH-reh ahlt",
          },
          {
            text: "Wann hast du Geburtstag?",
            translation: "When is your birthday?",
            pronunciation: "vahn hahst doo geh-BOORTZ-tahk",
          },
          {
            text: "Mein Geburtstag ist am dritten März.",
            translation: "My birthday is on March 3rd.",
            pronunciation: "mayn geh-BOORTZ-tahk ist ahm DRIT-ten mehrts",
          },
        ],
      },
      {
        type: "quiz",
        question: "How do you ask 'How old are you?' in German?",
        options: [
          { text: "Wie alt bist du?", isCorrect: true },
          { text: "Wann bist du geboren?", isCorrect: false },
          { text: "Wie heißt du?", isCorrect: false },
          { text: "Wer bist du?", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u2-l5",
    unitId: "de-unit-2",
    title: "Professions",
    type: "vocabulary",
    order: 5,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [{ description: "Name common professions in German" }],
    aiTeacherPrompt:
      "Teach common German professions and how to state your job using 'Ich bin...'",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "der Arzt / die Ärztin",
            translation: "doctor (m/f)",
            pronunciation: "dayr artst / dee EHRTS-teen",
          },
          {
            word: "der Lehrer / die Lehrerin",
            translation: "teacher (m/f)",
            pronunciation: "dayr LAY-rer / dee LAY-reh-rin",
          },
          {
            word: "der Ingenieur",
            translation: "engineer",
            pronunciation: "dayr een-zheh-NYÖR",
          },
          {
            word: "der Student / die Studentin",
            translation: "student (m/f)",
            pronunciation: "dayr shtoo-DENT",
          },
          {
            word: "der Anwalt / die Anwältin",
            translation: "lawyer (m/f)",
            pronunciation: "dayr AHN-vahlt",
          },
        ],
      },
      {
        type: "quiz",
        question: "What is 'der Lehrer' in English?",
        options: [
          { text: "Teacher", isCorrect: true },
          { text: "Doctor", isCorrect: false },
          { text: "Engineer", isCorrect: false },
          { text: "Lawyer", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "de-u2-l6",
    unitId: "de-unit-2",
    title: "Relationships",
    type: "vocabulary",
    order: 6,
    xpReward: 10,
    estimatedMinutes: 5,
    goals: [
      { description: "Describe relationships and civil status in German" },
    ],
    aiTeacherPrompt:
      "Teach vocabulary for relationships and civil status in German.",
    activities: [
      {
        type: "vocabulary",
        items: [
          {
            word: "verheiratet",
            translation: "married",
            pronunciation: "fer-HY-rah-tet",
          },
          { word: "ledig", translation: "single", pronunciation: "LAY-dikh" },
          {
            word: "der Freund / die Freundin",
            translation: "boyfriend / girlfriend",
            pronunciation: "dayr froind / dee FROYN-din",
          },
          {
            word: "der Kollege / die Kollegin",
            translation: "colleague (m/f)",
            pronunciation: "dayr koh-LAY-geh",
          },
          {
            word: "der Nachbar",
            translation: "the neighbor",
            pronunciation: "dayr NAKH-bar",
          },
        ],
      },
      {
        type: "quiz",
        question: "What does 'verheiratet' mean?",
        options: [
          { text: "Married", isCorrect: true },
          { text: "Single", isCorrect: false },
          { text: "Divorced", isCorrect: false },
          { text: "Engaged", isCorrect: false },
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
