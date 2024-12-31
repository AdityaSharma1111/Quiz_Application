// Array of questions grouped by category (25 questions each)

const questions = [
    {
      category: "Programming",
      questions: [
        
        {
          question: "Which of the following is NOT a semantic HTML element?",
          options: ["<header>", "<footer>", "<div>", "<article>"],
          correctAnswer: 2,
        },
        {
          question: "What is the primary purpose of a 'for' loop in programming?",
          options: ["Repeat code for a specified number of times", "Repeat code until a condition is true", "Define a function", "Evaluate conditions in the loop"],
          correctAnswer: 0,
        },
        {
          question: "Which data structure is ideal for LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Linked list", "Array"],
          correctAnswer: 1,
        },
        {
          question: "Which command is used in Git to store changes in the repository?",
          options: ["git commit", "git push", "git pull", "git add"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'map()' function do in JavaScript?",
          options: ["Sorts an array", "Filters out items", "Creates a new array", "Modifies the original array"],
          correctAnswer: 2,
        },
        {
          question: "What is an IDE?",
          options: ["An Integrated Development Environment", "A function for code execution", "An interpreter", "An input method for writing code"],
          correctAnswer: 0,
        },
        {
          question: "Which of the following is a feature of object-oriented programming?",
          options: ["Encapsulation", "Modularity", "Recursion", "Memory Management"],
          correctAnswer: 0,
        },
        {
          question: "What does SQL stand for?",
          options: ["Simple Question Language", "Systematic Query Language", "Standard Question Language", "Structured Query Language"],
          correctAnswer: 3,
        },
        {
          question: "Which of these is an example of a non-relational database?",
          options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
          correctAnswer: 0,
        },
        {
          question: "How do you write comment in CSS?",
          options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "<!-- This is a comment -->"],
          correctAnswer: 1,
        },
        {
          question: "Which of the following algorithms is used to sort an array by comparing elements?",
          options: ["Bubble sort", "Insertion sort", "Quick sort", "Merge sort"],
          correctAnswer: 0,
        },
        {
          question: "What does the 'finally' block in Java do?",
          options: ["Handles all exceptions", "Attempts to handle runtime exceptions", "Executes code after try-catch", "Defines execution start point"],
          correctAnswer: 2,
        },
        {
          question: "Which data structure is best for searching elements quickly?",
          options: ["Binary search tree", "Array", "Linked list", "Queue"],
          correctAnswer: 0,
        },
        {
          question: "What is the correct syntax for a JavaScript if statement?",
          options: ["if (condition) {}", "if condition {}", "if {} else", "if {condition}"],
          correctAnswer: 0,
        },
      ],
    },
  
    {
      category: "Geography",
      questions: [
        {
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "South Korea", "Japan", "Thailand"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest ocean in the world?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which country has the largest population in the world?",
          options: ["India", "China", "United States", "Indonesia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Great Barrier Reef?",
          options: ["Australia", "United States", "South Africa", "New Zealand"],
          correctAnswer: 0,
        },
        {
          question: "Which is the smallest country in the world?",
          options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
          correctAnswer: 2,
        },
        {
          question: "Which is the tallest mountain in the world?",
          options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital of Canada?",
          options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
          correctAnswer: 0,
        },
        {
          question: "Which desert is the largest hot desert in the world?",
          options: ["Gobi Desert", "Atacama Desert", "Sahara Desert", "Karakum Desert"],
          correctAnswer: 2,
        },
        {
          question: "Which country is known as the Land of the Midnight Sun?",
          options: ["Sweden", "Finland", "Norway", "Denmark"],
          correctAnswer: 2,
        },
        {
          question: "What is the longest mountain range in the world?",
          options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
          correctAnswer: 2,
        },
        {
          question: "Which river flows through Egypt?",
          options: ["Amazon River", "Yangtze River", "Nile River", "Ganges River"],
          correctAnswer: 2,
        },
        {
          question: "Which is the largest island in the world?",
          options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
          correctAnswer: 0,
        },
        {
          question: "What is the capital of Japan?",
          options: ["Beijing", "Seoul", "Tokyo", "Hong Kong"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most time zones?",
          options: ["United States", "Russia", "Canada", "Australia"],
          correctAnswer: 1,
        },
        {
          question: "Which country is known for the Eiffel Tower?",
          options: ["Germany", "Italy", "Spain", "France"],
          correctAnswer: 3,
        },
        {
          question: "Which is the most populous city in the world?",
          options: ["Tokyo", "Shanghai", "New York City", "Delhi"],
          correctAnswer: 0,
        },
        {
          question: "Which mountain range is located in South America?",
          options: ["Himalayas", "Rocky Mountains", "Appalachian Mountains", "Andes"],
          correctAnswer: 3,
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Asia", "Africa", "South America", "Europe"],
          correctAnswer: 1,
        },
        {
          question: "What is the capital of Brazil?",
          options: ["Buenos Aires", "Rio de Janeiro", "Brasília", "Sao Paulo"],
          correctAnswer: 2,
        },
        {
          question: "What is the official language of Brazil?",
          options: ["Spanish", "English", "Portuguese", "French"],
          correctAnswer: 2,
        },
        {
          question: "Which country has the most volcanoes?",
          options: ["Japan", "Indonesia", "United States", "Italy"],
          correctAnswer: 1,
        },
        {
          question: "Which city is known as the Big Apple?",
          options: ["Los Angeles", "New York City", "Chicago", "San Francisco"],
          correctAnswer: 1,
        },
        {
          question: "Which ocean is located to the east of Africa?",
          options: ["Indian Ocean", "Pacific Ocean", "Southern Ocean", "Atlantic Ocean"],
          correctAnswer: 3,
        },
        {
          question: "Which is the second largest continent by area?",
          options: ["Asia", "Africa", "North America", "Europe"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "Maths",
      questions: [
        {
          question: "What is the square root of 144?",
          options: ["10", "11", "12", "13"],
          correctAnswer: 2,
        },
        {
          question: "What is 15 × 13?",
          options: ["180", "185", "195", "200"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 8³?",
          options: ["512", "216", "256", "128"],
          correctAnswer: 0,
        },
        {
          question: "What is 48 ÷ 6?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 3 + 5 x 4?",
          options: ["20", "22", "24", "23"],
          correctAnswer: 3,
        },
        {
          question: "What is the sum of the angles in a triangle?",
          options: ["180°", "360°", "90°", "270°"],
          correctAnswer: 0,
        },
        {
          question: "What is the perimeter of a square with a side length of 4 cm?",
          options: ["12 cm", "16 cm", "20 cm", "24 cm"],
          correctAnswer: 1,
        },
        {
          question: "What is 11²?",
          options: ["121", "131", "141", "111"],
          correctAnswer: 3,
        },
        {
          question: "What is 9 × 12?",
          options: ["105", "110", "108", "120"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 16 ÷ 4?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
        },
        {
          question: "What is 25% of 200?",
          options: ["30", "40", "50", "60"],
          correctAnswer: 2,
        },
        {
          question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
          options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 ÷ 2 + 3?",
          options: ["8", "7", "9", "6"],
          correctAnswer: 1,
        },
        {
          question: "What is 3 × 7 + 2?",
          options: ["20", "21", "22", "23"],
          correctAnswer: 1,
        },
        {
          question: "What is the greatest common divisor (GCD) of 24 and 36?",
          options: ["4", "6", "8", "12"],
          correctAnswer: 3,
        },
        {
          question: "What is the least common multiple (LCM) of 6 and 8?",
          options: ["24", "32", "48", "56"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 2³ × 3?",
          options: ["12", "15", "18", "24"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of 10 × (5 + 3)?",
          options: ["80", "70", "60", "50"],
          correctAnswer: 1,
        },
        {
          question: "What is the value of 14 × 14?",
          options: ["186", "196", "206", "216"],
          correctAnswer: 1,
        },
        {
          question: "What is the sum of the first 10 positive integers?",
          options: ["50", "55", "60", "65"],
          correctAnswer: 1,
        },
        {
          question: "What is 12 × 15?",
          options: ["150", "160", "170", "180"],
          correctAnswer: 3,
        },
        {
          question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
          options: ["28.26 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
          correctAnswer: 0,
        },
        {
          question: "What is the value of (8 + 2) × 3?",
          options: ["30", "32", "34", "28"],
          correctAnswer: 3,
        },
        {
          question: "What is the value of 50% of 80?",
          options: ["30", "35", "40", "45"],
          correctAnswer: 2,
        },
        {
          question: "What is the value of 25 ÷ 5 × 3?",
          options: ["12", "15", "18", "20"],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "History",
      questions: [
        {
          question: "Who was the first Mughal Emperor of India?",
          options: ["Babur", "Akbar", "Humayun", "Shah Jahan"],
          correctAnswer: 0,
        },
        {
          question: "Who is known as the Father of the Indian Constitution?",
          options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
          correctAnswer: 2,
        },
        {
          question: "Which movement was launched by Mahatma Gandhi in 1942?",
          options: ["Non-Cooperation Movement", "Dandi March", "Quit India Movement", "Civil Disobedience Movement"],
          correctAnswer: 2,
        },
        {
          question: "Who was the first Governor-General of independent India?",
          options: ["C. Rajagopalachari", "Lord Mountbatten", "Dr. Rajendra Prasad", "Sardar Patel"],
          correctAnswer: 1,
        },
        {
          question: "Who founded the Maurya Empire in ancient India?",
          options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Harsha"],
          correctAnswer: 2,
        },
        {
          question: "When was the Battle of Plassey fought?",
          options: ["1757", "1764", "1857", "1780"],
          correctAnswer: 0,
        },
        {
          question: "Who was the last ruler of the Maurya dynasty?",
          options: ["Ashoka", "Bindusara", "Brihadratha", "Chandragupta Maurya"],
          correctAnswer: 2,
        },
        {
          question: "Who led the Revolt of 1857 in Kanpur?",
          options: ["Rani Laxmi Bai", "Bahadur Shah Zafar", "Tantia Tope", "Nana Sahib"],
          correctAnswer: 3,
        },
        {
          question: "Which Gupta ruler is known as the 'Napoleon of India'?",
          options: ["Chandragupta I", "Samudragupta", "Skandagupta", "Vishnugupta"],
          correctAnswer: 1,
        },
        {
          question: "What was the name of the tax system introduced by Sher Shah Suri?",
          options: ["Zamindari System", "Ryotwari System", "Bandobast System", "Iqtadari System"],
          correctAnswer: 2,
        },
        {
          question: "Who was the founder of the Indian National Congress?",
          options: ["Mahatma Gandhi", "W.C. Bonnerjee", "A.O. Hume", "Bal Gangadhar Tilak"],
          correctAnswer: 2,
        },
        {
          question: "Who composed India's national song 'Vande Mataram'?",
          options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Subhas Chandra Bose", "Ishwar Chandra Vidyasagar"],
          correctAnswer: 1,
        },
        {
          question: "Who was the first female ruler of Delhi?",
          options: ["Nur Jahan", "Razia Sultana", "Jahanara Begum", "Rani Laxmi Bai"],
          correctAnswer: 1,
        },
        {
          question: "Which Indian freedom fighter is known as 'Netaji'?",
          options: ["Bhagat Singh", "Mahatma Gandhi", "Subhas Chandra Bose", "Lala Lajpat Rai"],
          correctAnswer: 2,
        },
        {
          question: "In which year did the Jallianwala Bagh massacre take place?",
          options: ["1917", "1919", "1921", "1923"],
          correctAnswer: 1,
        },
        {
          question: "Which empire did Akbar rule?",
          options: ["Maurya Empire", "Mughal Empire", "Gupta Empire", "Chola Empire"],
          correctAnswer: 1,
        },
        {
          question: "Which movement was started by Swami Vivekananda?",
          options: ["Brahmo Samaj", "Arya Samaj", "Ramkrishna Mission", "Theosophical Society"],
          correctAnswer: 2,
        },
        {
          question: "Who wrote the book 'Arthashastra'?",
          options: ["Kalidasa", "Chanakya", "Panini", "Megasthenes"],
          correctAnswer: 1,
        },
        {
          question: "Which dynasty built the Khajuraho temples?",
          options: ["Maurya", "Chola", "Chalukya", "Chandela"],
          correctAnswer: 3,
        },
        {
          question: "Who established the Slave dynasty in India?",
          options: ["Qutb-ud-din Aibak", "Alauddin Khilji", "Babur", "Shivaji"],
          correctAnswer: 0,
        },
        {
          question: "Which famous Indian ruler adopted Buddhism after the Kalinga War?",
          options: ["Chandragupta Maurya", "Harshavardhana", "Ashoka", "Samudragupta"],
          correctAnswer: 2,
        },
        {
          question: "Who was the Prime Minister of India during the Indo-Pak war of 1971?",
          options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajiv Gandhi"],
          correctAnswer: 2,
        },
        {
          question: "Which Indian king fought against Alexander the Great?",
          options: ["Chandragupta Maurya", "Porus", "Bindusara", "Ashoka"],
          correctAnswer: 1,
        },
        {
          question: "Which monument was built by Shah Jahan in memory of his wife Mumtaz Mahal?",
          options: ["Qutub Minar", "Red Fort", "Taj Mahal", "Fatehpur Sikri"],
          correctAnswer: 2,
        },
        {
          question: "When was the Constitution of India adopted?",
          options: ["15th August 1947", "26th January 1950", "26th November 1949", "2nd October 1947"],
          correctAnswer: 2,
        },
      ],
    }      
  ];
  