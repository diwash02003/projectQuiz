// const mix_quiz = [
//   {
//     question: "Who is the President of Nepal?",
//     options: {
//       a: "Civilization Bhattarai",
//       b: "Madhumalla Poudal",
//       c: "Monu Kumar Nayabania",
//       d: "Omega Siddique",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: {
//       a: "Venus",
//       b: "Jupiter",
//       c: "Mars",
//       d: "Saturn",
//     },
//     correctAnswer: "c",
//   },
//   {
//     question: "Which language is used for styling web pages?",
//     options: {
//       a: "HTML",
//       b: "JQuery",
//       c: "CSS",
//       d: "XML",
//     },
//     correctAnswer: "c",
//   },
//   {
//     question: "What does HTML stand for?",
//     options: {
//       a: "Hyper Trainer Marking Language",
//       b: "Hyper Text Marketing Language",
//       c: "Hyper Text Markup Language",
//       d: "Hyper Text Markup Leveler",
//     },
//     correctAnswer: "c",
//   },
// ];

// const history_quiz = [
//   {
//     question: "Who was the first king of unified Nepal?",
//     options: {
//       a: "Prithvi Narayan Shah",
//       b: "Tribhuvan Bir Bikram Shah",
//       c: "Mahendra Bir Bikram Shah",
//       d: "Gyanendra Bir Bikram Shah",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "In which year did the Kot Massacre take place?",
//     options: {
//       a: "1846",
//       b: "1850",
//       c: "1860",
//       d: "1872",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Who was the first Prime Minister of Nepal?",
//     options: {
//       a: "Bhimsen Thapa",
//       b: "Jung Bahadur Rana",
//       c: "Chandra Shumsher Jang Bahadur Rana",
//       d: "Madhav Kumar Nepal",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Which treaty ended the Anglo-Nepalese War?",
//     options: {
//       a: "Treaty of Sugauli",
//       b: "Treaty of Sagauli",
//       c: "Treaty of Kathmandu",
//       d: "Treaty of Gorkha",
//     },
//     correctAnswer: "a",
//   },
//   {
//     question: "Who is known as the 'Father of the Nation' in Nepal?",
//     options: {
//       a: "Bhimsen Thapa",
//       b: "Jung Bahadur Rana",
//       c: "Prithvi Narayan Shah",
//       d: "King Tribhuvan",
//     },
//     correctAnswer: "c",
//   },
// ];

let currentQuestionIndex = 0;

function loadQuiz(questiontype) {
  deselectAnswers();
  const questionEl = document.getElementById("question");
  const aText = document.getElementById("a_text");
  const bText = document.getElementById("b_text");
  const cText = document.getElementById("c_text");
  const dText = document.getElementById("d_text");

  const currentQuizData = questiontype[currentQuestionIndex];
  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.options.a;
  bText.innerText = currentQuizData.options.b;
  cText.innerText = currentQuizData.options.c;
  dText.innerText = currentQuizData.options.d;
}

function getSelected() {
  const answers = document.querySelectorAll(".answer");
  let answer = undefined;
  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.checked = false;
  });
}

// Shuffle function to randomize the questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// ----------------------------------------

const mix_quiz = [
  {
    question: "What is the largest desert in the world?",
    options: {
      a: "Sahara Desert",
      b: "Arabian Desert",
      c: "Gobi Desert",
      d: "Antarctic Desert",
    },
    correctAnswer: "d",
  },
  {
    question: "Which river is the longest in the world?",
    options: {
      a: "Amazon River",
      b: "Nile River",
      c: "Yangtze River",
      d: "Mississippi River",
    },
    correctAnswer: "b",
  },
  {
    question: "Mount Everest is located in which mountain range?",
    options: {
      a: "Andes",
      b: "Rockies",
      c: "Himalayas",
      d: "Alps",
    },
    correctAnswer: "c",
  },
  {
    question: "Which country has the most time zones?",
    options: {
      a: "Russia",
      b: "USA",
      c: "Canada",
      d: "France",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the capital of Australia?",
    options: {
      a: "Sydney",
      b: "Melbourne",
      c: "Brisbane",
      d: "Canberra",
    },
    correctAnswer: "d",
  },
  {
    question: "Which is the largest island in the world?",
    options: {
      a: "Greenland",
      b: "New Guinea",
      c: "Borneo",
      d: "Madagascar",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the smallest country in the world by land area?",
    options: {
      a: "Monaco",
      b: "San Marino",
      c: "Vatican City",
      d: "Liechtenstein",
    },
    correctAnswer: "c",
  },
  {
    question:
      "The Great Barrier Reef is located off the coast of which country?",
    options: {
      a: "Brazil",
      b: "Indonesia",
      c: "Australia",
      d: "Philippines",
    },
    correctAnswer: "c",
  },
  {
    question: "Which river flows through Paris?",
    options: {
      a: "Thames",
      b: "Danube",
      c: "Seine",
      d: "Rhine",
    },
    correctAnswer: "c",
  },
  {
    question: "Which U.S. state is the Grand Canyon located in?",
    options: {
      a: "Utah",
      b: "Nevada",
      c: "Arizona",
      d: "Colorado",
    },
    correctAnswer: "c",
  },
  {
    question: "Which is the largest continent by land area?",
    options: {
      a: "Africa",
      b: "Asia",
      c: "North America",
      d: "Europe",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the capital of Canada?",
    options: {
      a: "Toronto",
      b: "Vancouver",
      c: "Montreal",
      d: "Ottawa",
    },
    correctAnswer: "d",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: {
      a: "China",
      b: "South Korea",
      c: "Japan",
      d: "Thailand",
    },
    correctAnswer: "c",
  },
  {
    question: "The Amazon rainforest is primarily located in which country?",
    options: {
      a: "Brazil",
      b: "Colombia",
      c: "Peru",
      d: "Venezuela",
    },
    correctAnswer: "a",
  },
  {
    question: "Which ocean is the largest by surface area?",
    options: {
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Southern Ocean",
      d: "Pacific Ocean",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the longest mountain range in the world?",
    options: {
      a: "Andes",
      b: "Rockies",
      c: "Himalayas",
      d: "Alps",
    },
    correctAnswer: "a",
  },
  {
    question: "Which European country is divided into departments?",
    options: {
      a: "Spain",
      b: "Germany",
      c: "France",
      d: "Italy",
    },
    correctAnswer: "c",
  },
  {
    question: "Which African country has the highest population?",
    options: {
      a: "South Africa",
      b: "Nigeria",
      c: "Egypt",
      d: "Ethiopia",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the capital city of Argentina?",
    options: {
      a: "Buenos Aires",
      b: "Rio de Janeiro",
      c: "Santiago",
      d: "Lima",
    },
    correctAnswer: "a",
  },
  {
    question: "Which desert is the largest hot desert in the world?",
    options: {
      a: "Arabian Desert",
      b: "Sahara Desert",
      c: "Kalahari Desert",
      d: "Sonoran Desert",
    },
    correctAnswer: "b",
  },
  {
    question: "Who is the current Prime Minister of Nepal as of 2024?",
    options: {
      a: "Pushpa Kamal Dahal",
      b: "Sher Bahadur Deuba",
      c: "K P Sharma Oli",
      d: "Sushil Koirala",
    },
    correctAnswer: "a",
  },
  {
    question: "When did Nepal become a federal democratic republic?",
    options: {
      a: "1990",
      b: "2006",
      c: "2008",
      d: "2015",
    },
    correctAnswer: "c",
  },
  {
    question: "Which political party has the symbol of a tree?",
    options: {
      a: "Nepali Congress",
      b: "CPN-UML",
      c: "Rastriya Prajatantra Party",
      d: "Janata Samajwadi Party",
    },
    correctAnswer: "a",
  },
  {
    question: "Who was the first President of Nepal?",
    options: {
      a: "Bidya Devi Bhandari",
      b: "Ram Baran Yadav",
      c: "Krishna Prasad Bhattarai",
      d: "Girija Prasad Koirala",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the name of Nepal's legislative parliament?",
    options: {
      a: "House of Representatives",
      b: "National Assembly",
      c: "Federal Parliament",
      d: "Constituent Assembly",
    },
    correctAnswer: "c",
  },
  {
    question: "Which political leader is known by the alias 'Prachanda'?",
    options: {
      a: "Baburam Bhattarai",
      b: "Madhav Kumar Nepal",
      c: "Pushpa Kamal Dahal",
      d: "Jhala Nath Khanal",
    },
    correctAnswer: "c",
  },
  {
    question:
      "In which year was the first Constituent Assembly election held in Nepal?",
    options: {
      a: "1991",
      b: "2008",
      c: "2013",
      d: "2017",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What is the maximum number of terms a Prime Minister can serve in Nepal?",
    options: {
      a: "Two terms",
      b: "Three terms",
      c: "Four terms",
      d: "There is no term limit",
    },
    correctAnswer: "d",
  },
  {
    question: "Which river is depicted on the emblem of Nepal?",
    options: {
      a: "Koshi",
      b: "Gandaki",
      c: "Bagmati",
      d: "Trishuli",
    },
    correctAnswer: "a",
  },
  {
    question: "Who was the first female Chief Justice of Nepal?",
    options: {
      a: "Sushila Karki",
      b: "Meera Dhungana",
      c: "Sapana Malla Pradhan",
      d: "Anup Raj Sharma",
    },
    correctAnswer: "a",
  },
  {
    question: "Which political party is known for its Maoist ideology?",
    options: {
      a: "Nepali Congress",
      b: "CPN-Maoist Centre",
      c: "CPN-UML",
      d: "Rastriya Prajatantra Party",
    },
    correctAnswer: "b",
  },
  {
    question: "Who is the current President of Nepal as of 2024?",
    options: {
      a: "Bidya Devi Bhandari",
      b: "Ram Chandra Poudel",
      c: "Ram Baran Yadav",
      d: "Krishna Prasad Bhattarai",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the term length for a Member of Parliament in Nepal?",
    options: {
      a: "4 years",
      b: "5 years",
      c: "6 years",
      d: "7 years",
    },
    correctAnswer: "b",
  },
  {
    question: "Which is the largest administrative division in Nepal?",
    options: {
      a: "Province No. 1",
      b: "Bagmati Province",
      c: "Lumbini Province",
      d: "Sudurpashchim Province",
    },
    correctAnswer: "b",
  },
  {
    question: "When was the new constitution of Nepal promulgated?",
    options: {
      a: "2006",
      b: "2008",
      c: "2013",
      d: "2015",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which political leader served as both Prime Minister and President of Nepal?",
    options: {
      a: "Girija Prasad Koirala",
      b: "Krishna Prasad Bhattarai",
      c: "Ram Baran Yadav",
      d: "No leader has served both roles",
    },
    correctAnswer: "d",
  },
  {
    question: "Who is the current Chief Justice of Nepal as of 2024?",
    options: {
      a: "Cholendra Shumsher JB Rana",
      b: "Hari Krishna Karki",
      c: "Gopal Parajuli",
      d: "Sushila Karki",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the voting age in Nepal?",
    options: {
      a: "16",
      b: "18",
      c: "21",
      d: "25",
    },
    correctAnswer: "b",
  },
  {
    question: "Which Nepali Prime Minister was assassinated in 1955?",
    options: {
      a: "Bishweshwar Prasad Koirala",
      b: "Matrika Prasad Koirala",
      c: "Mohan Shamsher Jang Bahadur Rana",
      d: "No Nepali Prime Minister was assassinated in 1955",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the full form of CPN-UML?",
    options: {
      a: "Communist Party of Nepal - Unified Marxist-Leninist",
      b: "Communist Party of Nepal - United Marxist-Leninist",
      c: "Communist Party of Nepal - Union Marxist-Leninist",
      d: "Communist Party of Nepal - Universal Marxist-Leninist",
    },
    correctAnswer: "a",
  },
];

const sports_quiz = [
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: {
      a: "Brazil",
      b: "Germany",
      c: "France",
      d: "Argentina",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Who holds the record for the most Grand Slam titles in men's tennis?",
    options: {
      a: "Roger Federer",
      b: "Rafael Nadal",
      c: "Novak Djokovic",
      d: "Pete Sampras",
    },
    correctAnswer: "c",
  },
  {
    question:
      "In which year did Michael Jordan retire for the first time from professional basketball?",
    options: {
      a: "1991",
      b: "1993",
      c: "1995",
      d: "1997",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which country has won the most Olympic gold medals in gymnastics?",
    options: {
      a: "USA",
      b: "China",
      c: "Russia",
      d: "Romania",
    },
    correctAnswer: "a",
  },
  {
    question: "Who is the all-time leading scorer in the NBA?",
    options: {
      a: "Michael Jordan",
      b: "LeBron James",
      c: "Kareem Abdul-Jabbar",
      d: "Kobe Bryant",
    },
    correctAnswer: "c",
  },
  {
    question: "Which team won the first Super Bowl?",
    options: {
      a: "Green Bay Packers",
      b: "Kansas City Chiefs",
      c: "Dallas Cowboys",
      d: "New York Jets",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the maximum score in a single frame of bowling?",
    options: {
      a: "150",
      b: "200",
      c: "300",
      d: "350",
    },
    correctAnswer: "c",
  },
  {
    question: "Which country has won the most Cricket World Cups?",
    options: {
      a: "India",
      b: "Australia",
      c: "West Indies",
      d: "England",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Who won the Tour de France seven consecutive times from 1999 to 2005?",
    options: {
      a: "Lance Armstrong",
      b: "Miguel Indurain",
      c: "Eddy Merckx",
      d: "Bernard Hinault",
    },
    correctAnswer: "a",
  },
  {
    question: "Which female athlete has won the most Olympic medals?",
    options: {
      a: "Larisa Latynina",
      b: "Simone Biles",
      c: "Nadia Comăneci",
      d: "Jackie Joyner-Kersee",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the national sport of Japan?",
    options: {
      a: "Baseball",
      b: "Judo",
      c: "Sumo",
      d: "Karate",
    },
    correctAnswer: "c",
  },
  {
    question: "Who is known as the 'Lightning Bolt' in athletics?",
    options: {
      a: "Carl Lewis",
      b: "Usain Bolt",
      c: "Yohan Blake",
      d: "Justin Gatlin",
    },
    correctAnswer: "b",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: {
      a: "China",
      b: "Brazil",
      c: "UK",
      d: "Japan",
    },
    correctAnswer: "b",
  },
  {
    question: "Which NBA team has the most championships?",
    options: {
      a: "Chicago Bulls",
      b: "Los Angeles Lakers",
      c: "Golden State Warriors",
      d: "Boston Celtics",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Who was the first cricketer to score 10,000 runs in Test cricket?",
    options: {
      a: "Sunil Gavaskar",
      b: "Sachin Tendulkar",
      c: "Viv Richards",
      d: "Brian Lara",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which football club has won the most UEFA Champions League titles?",
    options: {
      a: "Manchester United",
      b: "Barcelona",
      c: "Real Madrid",
      d: "Bayern Munich",
    },
    correctAnswer: "c",
  },
  {
    question: "Who won the women's singles title at Wimbledon in 2021?",
    options: {
      a: "Ashleigh Barty",
      b: "Serena Williams",
      c: "Simona Halep",
      d: "Naomi Osaka",
    },
    correctAnswer: "a",
  },
  {
    question: "In which sport is the term 'home run' used?",
    options: {
      a: "Cricket",
      b: "Baseball",
      c: "Hockey",
      d: "Football",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which athlete has won the most medals in a single Olympic Games?",
    options: {
      a: "Mark Spitz",
      b: "Larisa Latynina",
      c: "Michael Phelps",
      d: "Usain Bolt",
    },
    correctAnswer: "c",
  },
  {
    question: "Which country won the ICC T20 World Cup in 2022?",
    options: {
      a: "West Indies",
      b: "Australia",
      c: "England",
      d: "India",
    },
    correctAnswer: "c",
  },
];

const history_quiz = [
  {
    question: "Who was the first king of unified Nepal?",
    options: {
      a: "Prithvi Narayan Shah",
      b: "Tribhuvan Bir Bikram Shah",
      c: "Mahendra Bir Bikram Shah",
      d: "Gyanendra Bir Bikram Shah",
    },
    correctAnswer: "a",
  },
  {
    question: "In which year did the Kot Massacre take place?",
    options: {
      a: "1846",
      b: "1850",
      c: "1860",
      d: "1872",
    },
    correctAnswer: "a",
  },
  {
    question: "Who was the first Prime Minister of Nepal?",
    options: {
      a: "Bhimsen Thapa",
      b: "Jung Bahadur Rana",
      c: "Chandra Shumsher Jang Bahadur Rana",
      d: "Madhav Kumar Nepal",
    },
    correctAnswer: "a",
  },
  {
    question: "Which treaty ended the Anglo-Nepalese War?",
    options: {
      a: "Treaty of Sugauli",
      b: "Treaty of Sagauli",
      c: "Treaty of Kathmandu",
      d: "Treaty of Gorkha",
    },
    correctAnswer: "a",
  },
  {
    question: "Who is known as the 'Father of the Nation' in Nepal?",
    options: {
      a: "Bhimsen Thapa",
      b: "Jung Bahadur Rana",
      c: "Prithvi Narayan Shah",
      d: "King Tribhuvan",
    },
    correctAnswer: "c",
  },
  {
    question: "When did Nepal officially become a republic?",
    options: {
      a: "2006",
      b: "2008",
      c: "2010",
      d: "2015",
    },
    correctAnswer: "b",
  },
  {
    question: "Who was the first elected Prime Minister of Nepal?",
    options: {
      a: "Bishweshwar Prasad Koirala",
      b: "Ganesh Man Singh",
      c: "Krishna Prasad Bhattarai",
      d: "Girija Prasad Koirala",
    },
    correctAnswer: "a",
  },
  {
    question: "Which year marks the beginning of the Rana rule in Nepal?",
    options: {
      a: "1846",
      b: "1850",
      c: "1860",
      d: "1872",
    },
    correctAnswer: "a",
  },
  {
    question:
      "When was the People's Movement (Jana Andolan) that led to the end of absolute monarchy in Nepal?",
    options: {
      a: "1990",
      b: "1996",
      c: "2001",
      d: "2006",
    },
    correctAnswer: "d",
  },
  {
    question: "Who was the first female cabinet minister of Nepal?",
    options: {
      a: "Sahana Pradhan",
      b: "Shailaja Acharya",
      c: "Bharati Silwal-Giri",
      d: "Anuradha Koirala",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What is the name of the treaty that was signed between Nepal and India in 1950?",
    options: {
      a: "Treaty of Peace and Friendship",
      b: "Treaty of Sagauli",
      c: "Treaty of Gorkha",
      d: "Treaty of Kathmandu",
    },
    correctAnswer: "a",
  },
  {
    question: "Who was the king during the 1990 People's Movement in Nepal?",
    options: {
      a: "King Mahendra",
      b: "King Birendra",
      c: "King Gyanendra",
      d: "King Tribhuvan",
    },
    correctAnswer: "b",
  },
  {
    question: "When was the Narayanhiti Palace Massacre?",
    options: {
      a: "1990",
      b: "1996",
      c: "2001",
      d: "2005",
    },
    correctAnswer: "c",
  },
  {
    question: "Which historical figure is known as the 'Great Saint' of Nepal?",
    options: {
      a: "Prithvi Narayan Shah",
      b: "Bhimsen Thapa",
      c: "Gautama Buddha",
      d: "Araniko",
    },
    correctAnswer: "c",
  },
  {
    question: "Who was the first woman to climb Mount Everest from Nepal?",
    options: {
      a: "Pasang Lhamu Sherpa",
      b: "Chhurim Sherpa",
      c: "Lhakpa Sherpa",
      d: "Maya Sherpa",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the significance of the year 1951 in Nepalese history?",
    options: {
      a: "End of Rana rule",
      b: "Beginning of democracy",
      c: "King Tribhuvan's return from India",
      d: "All of the above",
    },
    correctAnswer: "d",
  },
  {
    question: "Who built the Swayambhunath Stupa in Kathmandu?",
    options: {
      a: "King Ashoka",
      b: "King Manadeva",
      c: "King Pratap Malla",
      d: "King Bhaskar Varma",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which historical figure unified the Malla kingdoms into modern Nepal?",
    options: {
      a: "King Tribhuvan",
      b: "King Mahendra",
      c: "King Prithvi Narayan Shah",
      d: "King Rana Bahadur Shah",
    },
    correctAnswer: "c",
  },
  {
    question: "When did King Birendra announce Nepal as a zone of peace?",
    options: {
      a: "1973",
      b: "1975",
      c: "1978",
      d: "1980",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which Nepali king was known for his contributions to modern education and health sectors?",
    options: {
      a: "King Tribhuvan",
      b: "King Mahendra",
      c: "King Birendra",
      d: "King Gyanendra",
    },
    correctAnswer: "c",
  },
];

const science_and_tech_quiz = [
  {
    question: "What is the chemical symbol for the element oxygen?",
    options: {
      a: "O",
      b: "O2",
      c: "O3",
      d: "Oh",
    },
    correctAnswer: "a",
  },
  {
    question: "Who is considered the father of modern physics?",
    options: {
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Galileo Galilei",
      d: "Niels Bohr",
    },
    correctAnswer: "b",
  },
  {
    question: "What does DNA stand for?",
    options: {
      a: "Deoxyribonucleic acid",
      b: "Deoxyribonuclear acid",
      c: "Dinucleic acid",
      d: "Dioxygen acid",
    },
    correctAnswer: "a",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: {
      a: "Venus",
      b: "Jupiter",
      c: "Mars",
      d: "Saturn",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: {
      a: "Gold",
      b: "Diamond",
      c: "Graphite",
      d: "Platinum",
    },
    correctAnswer: "b",
  },
  {
    question: "Who developed the theory of relativity?",
    options: {
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Galileo Galilei",
      d: "Stephen Hawking",
    },
    correctAnswer: "b",
  },
  {
    question: "What unit is used to measure electric current?",
    options: {
      a: "Volt",
      b: "Ampere",
      c: "Watt",
      d: "Ohm",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the largest organ of the human body?",
    options: {
      a: "Liver",
      b: "Skin",
      c: "Brain",
      d: "Heart",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the chemical symbol for the element gold?",
    options: {
      a: "Go",
      b: "Gd",
      c: "Au",
      d: "Ag",
    },
    correctAnswer: "c",
  },
  {
    question: "Who is known as the 'father of computer science'?",
    options: {
      a: "Alan Turing",
      b: "Bill Gates",
      c: "Steve Jobs",
      d: "Tim Berners-Lee",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the largest bone in the human body?",
    options: {
      a: "Femur",
      b: "Humerus",
      c: "Tibia",
      d: "Fibula",
    },
    correctAnswer: "a",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: {
      a: "Oxygen",
      b: "Nitrogen",
      c: "Carbon dioxide",
      d: "Hydrogen",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the process by which plants make their own food called?",
    options: {
      a: "Respiration",
      b: "Digestion",
      c: "Photosynthesis",
      d: "Fermentation",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the chemical formula for water?",
    options: {
      a: "H2O2",
      b: "CO2",
      c: "H2O",
      d: "CH4",
    },
    correctAnswer: "c",
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: {
      a: "Mars",
      b: "Venus",
      c: "Mercury",
      d: "Jupiter",
    },
    correctAnswer: "b",
  },
  {
    question: "Who discovered penicillin?",
    options: {
      a: "Alexander Fleming",
      b: "Louis Pasteur",
      c: "Marie Curie",
      d: "Albert Einstein",
    },
    correctAnswer: "a",
  },
  {
    question: "Which scientist proposed the three laws of motion?",
    options: {
      a: "Isaac Newton",
      b: "Galileo Galilei",
      c: "Albert Einstein",
      d: "Stephen Hawking",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the unit of measurement for frequency?",
    options: {
      a: "Hertz",
      b: "Watt",
      c: "Ohm",
      d: "Volt",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the Earth's primary source of energy?",
    options: {
      a: "Nuclear fusion",
      b: "Geothermal energy",
      c: "Fossil fuels",
      d: "Solar radiation",
    },
    correctAnswer: "d",
  },
  {
    question: "Which chemical element has the atomic number 1?",
    options: {
      a: "Oxygen",
      b: "Hydrogen",
      c: "Nitrogen",
      d: "Carbon",
    },
    correctAnswer: "b",
  },
  {
    question: "What type of energy is stored in a battery?",
    options: {
      a: "Kinetic energy",
      b: "Potential energy",
      c: "Chemical energy",
      d: "Mechanical energy",
    },
    correctAnswer: "c",
  },
  {
    question: "Who proposed the theory of general relativity?",
    options: {
      a: "Isaac Newton",
      b: "Albert Einstein",
      c: "Stephen Hawking",
      d: "Galileo Galilei",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: {
      a: "Earth",
      b: "Saturn",
      c: "Jupiter",
      d: "Mars",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the smallest unit of matter?",
    options: {
      a: "Atom",
      b: "Molecule",
      c: "Proton",
      d: "Neutron",
    },
    correctAnswer: "a",
  },
  {
    question: "What causes the phenomenon of auroras?",
    options: {
      a: "Solar wind",
      b: "Tornadoes",
      c: "Volcanic eruptions",
      d: "Earthquakes",
    },
    correctAnswer: "a",
  },
  {
    question: "Which metal is liquid at room temperature?",
    options: {
      a: "Gold",
      b: "Silver",
      c: "Mercury",
      d: "Copper",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What is the name of the force that pulls objects towards the center of the Earth?",
    options: {
      a: "Magnetic force",
      b: "Gravitational force",
      c: "Electromagnetic force",
      d: "Centrifugal force",
    },
    correctAnswer: "b",
  },
  {
    question: "Which part of the atom has a positive charge?",
    options: {
      a: "Electron",
      b: "Proton",
      c: "Neutron",
      d: "Photon",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the largest type of big cat in the world?",
    options: {
      a: "Lion",
      b: "Jaguar",
      c: "Tiger",
      d: "Leopard",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the unit of measurement for electric resistance?",
    options: {
      a: "Ohm",
      b: "Volt",
      c: "Ampere",
      d: "Watt",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the longest bone in the human body?",
    options: {
      a: "Femur",
      b: "Humerus",
      c: "Radius",
      d: "Tibia",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which type of electromagnetic radiation has the shortest wavelength?",
    options: {
      a: "Radio waves",
      b: "Microwaves",
      c: "X-rays",
      d: "Gamma rays",
    },
    correctAnswer: "d",
  },
  {
    question:
      "What is the process by which plants release water vapor into the atmosphere called?",
    options: {
      a: "Photosynthesis",
      b: "Transpiration",
      c: "Respiration",
      d: "Condensation",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which planet has the Great Red Spot, a giant storm that has been raging for centuries?",
    options: {
      a: "Mars",
      b: "Saturn",
      c: "Jupiter",
      d: "Uranus",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the pH scale used to measure?",
    options: {
      a: "Temperature",
      b: "Acidity",
      c: "Pressure",
      d: "Brightness",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the name of the closest star to Earth, besides the Sun?",
    options: {
      a: "Alpha Centauri",
      b: "Proxima Centauri",
      c: "Sirius",
      d: "Betelgeuse",
    },
    correctAnswer: "b",
  },
  {
    question: "Which gas do humans exhale when they breathe out?",
    options: {
      a: "Oxygen",
      b: "Carbon monoxide",
      c: "Carbon dioxide",
      d: "Nitrogen",
    },
    correctAnswer: "c",
  },
  {
    question:
      "What is the name of the particle that carries a negative charge?",
    options: {
      a: "Proton",
      b: "Electron",
      c: "Neutron",
      d: "Photon",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which type of energy is generated by the movement or flow of electrons?",
    options: {
      a: "Solar energy",
      b: "Wind energy",
      c: "Electrical energy",
      d: "Geothermal energy",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the study of fossils called?",
    options: {
      a: "Archaeology",
      b: "Paleontology",
      c: "Geology",
      d: "Biology",
    },
    correctAnswer: "b",
  },
  {
    question: "Which force holds the nucleus of an atom together?",
    options: {
      a: "Gravitational force",
      b: "Electromagnetic force",
      c: "Strong nuclear force",
      d: "Weak nuclear force",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: {
      a: "Atlantic Ocean",
      b: "Arctic Ocean",
      c: "Indian Ocean",
      d: "Pacific Ocean",
    },
    correctAnswer: "d",
  },
  {
    question: "What is the study of earthquakes called?",
    options: {
      a: "Seismology",
      b: "Meteorology",
      c: "Geology",
      d: "Botany",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which type of electromagnetic radiation has wavelengths longer than visible light?",
    options: {
      a: "Infrared radiation",
      b: "Ultraviolet radiation",
      c: "X-rays",
      d: "Gamma rays",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the chemical formula for methane?",
    options: {
      a: "CH2",
      b: "CH3",
      c: "C2H4",
      d: "CO2",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What is the study of the behavior and properties of matter called?",
    options: {
      a: "Physics",
      b: "Chemistry",
      c: "Biology",
      d: "Psychology",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the chemical symbol for the element iron?",
    options: {
      a: "Ir",
      b: "Fe",
      c: "Io",
      d: "In",
    },
    correctAnswer: "b",
  },
  {
    question: "Which organ in the human body produces insulin?",
    options: {
      a: "Liver",
      b: "Pancreas",
      c: "Kidney",
      d: "Stomach",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the study of the Earth's atmosphere called?",
    options: {
      a: "Ecology",
      b: "Meteorology",
      c: "Geology",
      d: "Astronomy",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the name of the smallest bone in the human body?",
    options: {
      a: "Femur",
      b: "Stapes",
      c: "Humerus",
      d: "Radius",
    },
    correctAnswer: "b",
  },
  {
    question: "Which type of rock is formed by the cooling of molten magma?",
    options: {
      a: "Sedimentary",
      b: "Metamorphic",
      c: "Igneous",
      d: "Granite",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the chemical symbol for the element sodium?",
    options: {
      a: "So",
      b: "Sd",
      c: "Na",
      d: "No",
    },
    correctAnswer: "c",
  },
];
