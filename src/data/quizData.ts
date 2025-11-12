// Easy-to-edit quiz questions
// Add as many questions as you want following this format

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does NITC stand for in Nepal?",
    options: [
      "National Information Technology Council",
      "Nepal Information Technology Centre",
      "Nepal Institute of Technology and Computing",
      "National Internet and Technology Committee"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which mobile app allows Nepali citizens to access government e-services?",
    options: ["Facebook", "Nagarik App", "TikTok", "WhatsApp"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which of the following is a popular Nepali e-wallet?",
    options: ["PayPal", "eSewa", "Google Pay", "Apple Pay"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "ConnectIPS is primarily used for:",
    options: ["Gaming", "Online Banking and Payment Integration", "Social Media", "E-Learning"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Who regulates the telecommunication sector in Nepal?",
    options: ["Nepal Rastra Bank", "Nepal Telecommunication Authority (NTA)", "Ministry of Finance", "Ministry of Education"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "The Digital Nepal Framework was launched to:",
    options: ["Promote physical infrastructure", "Improve digital governance and ICT adoption", "Build sports facilities", "Replace traditional media"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which of these is a Nepali online learning platform?",
    options: ["e-Sikshya", "Coursera", "Khan Academy", "Udemy"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Which service allows paying taxes digitally in Nepal?",
    options: ["ConnectIPS", "eSewa", "Khalti", "Facebook Pay"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "The government body responsible for ICT policy formulation in Nepal is:",
    options: ["Ministry of Health", "National Information Technology Center (NITC)", "Nepal Electricity Authority", "Nepal Telecom"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which mobile payment app in Nepal is known for integrating with banks and utility payments?",
    options: ["eSewa", "PayPal", "Venmo", "Google Pay"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Nepal’s first internet connection was established in which year?",
    options: ["1990", "1995", "1999", "2001"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which of the following is a Nepali fintech startup?",
    options: ["Prabhu Pay", "Stripe", "Square", "Robinhood"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What does ICT stand for in Nepalese context?",
    options: ["Internet and Communication Technology", "Information and Communication Technology", "Integrated Computing Technology", "International Communication Technology"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which Nepali app provides digital ID verification and citizen records?",
    options: ["Nagarik App", "Khalti", "ConnectIPS", "eSewa"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Which organization is responsible for digital payments infrastructure in Nepal?",
    options: ["NTA", "Nepal Rastra Bank", "Ministry of Finance", "NITC"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "eSewa was launched in which year?",
    options: ["2004", "2007", "2010", "2012"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Which Nepali bank was the first to integrate with ConnectIPS?",
    options: ["Nabil Bank", "Rastriya Banijya Bank", "Himalayan Bank", "Standard Chartered Nepal"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "What is the primary objective of the Digital Nepal Framework?",
    options: ["Promote traditional businesses", "Improve digital literacy and ICT adoption", "Build roads", "Promote tourism only"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which Nepali e-wallet app allows QR-based payments?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 20,
    question: "Who is responsible for ICT development policy in Nepal?",
    options: ["Ministry of Science and Technology", "Ministry of Education", "Ministry of Finance", "Nepal Rastra Bank"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Which mobile network provider in Nepal is the largest?",
    options: ["Ncell", "Nepal Telecom (NTC)", "SmartCell", "UTL"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Which of the following is an ICT initiative by the Government of Nepal?",
    options: ["Digital Nepal Framework", "Build Nepal Roads Project", "Tourism Promotion App", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Which Nepali app is used for citizen grievance redressal digitally?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "Which of these is an example of a Nepali digital bank service?",
    options: ["PrabhuPay", "Stripe", "PayPal", "Venmo"],
 correctAnswer: 0
  },
  {
    id: 25,
    question: "What is the official website of the National Information Technology Center?",
    options: ["www.nitc.gov.np", "www.nitc.org", "www.nitc.com", "www.nitc.edu.np"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Which Nepali mobile banking app allows bill payment, mobile recharge, and fund transfers?",
    options: ["eSewa", "PayPal", "Google Pay", "Apple Pay"],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "Which of the following is an ICT policy initiative in Nepal to promote entrepreneurship?",
    options: ["ICT Entrepreneurship Program", "Industrial Development Policy", "Tourism Policy", "Health Sector Policy"],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "Which Nepali e-wallet app supports linking multiple bank accounts?",
    options: ["Khalti", "PayPal", "Venmo", "Google Pay"],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "Which year was the Digital Nepal Framework launched?",
    options: ["2017", "2018", "2019", "2020"],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "Which of the following is a Nepali platform for online education?",
    options: ["e-Sikshya", "Khan Academy", "Coursera", "EdX"],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "Which Nepalese bank first introduced mobile banking in Nepal?",
    options: ["Nabil Bank", "Nepal SBI Bank", "Standard Chartered Bank Nepal", "Himalayan Bank"],
    correctAnswer: 3
  },
  {
    id: 32,
    question: "Which of the following is a Nepali government initiative to increase ICT literacy?",
    options: ["Digital Nepal Framework", "ICT Literacy Program", "Cyber Education Initiative", "ICT Youth Program"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "What does “Digital Nepal” initiative primarily focus on?",
    options: ["Infrastructure", "Digital services, e-governance, and ICT development", "Agriculture", "Tourism"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Which Nepali e-wallet provides loyalty points on transactions?",
    options: ["eSewa", "Khalti", "ConnectIPS", "PayPal"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "Who oversees the implementation of ICT projects in Nepal?",
    options: ["Ministry of Health", "Ministry of Science and Technology", "Ministry of Finance", "Nepal Rastra Bank"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which Nepali app allows citizens to download their birth certificate digitally?",
    options: ["Nagarik App", "eSewa", "Khalti", "ConnectIPS"],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "Which year did eSewa introduce QR-based payments?",
    options: ["2015", "2017", "2019", "2020"],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "Which Nepali mobile banking app allows international remittance transfers?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 39,
    question: "Which government body in Nepal manages the national IT policy?",
    options: ["NTA", "NITC", "Ministry of Finance", "Nepal Rastra Bank"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which app allows citizens to file online complaints with the government?",
    options: ["Nagarik App", "eSewa", "Khalti", "ConnectIPS"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "Which of the following is a Nepali mobile banking app for school fee payments?",
    options: ["Khalti", "eSewa", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 42,
    question: "What is the full form of ATM in Nepal’s banking context?",
    options: ["Automated Teller Machine", "Automatic Transaction Machine", "Automated Transfer Module", "Applied Teller Mechanism"],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "Which Nepali e-wallet provides insurance premium payments digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 44,
    question: "What is the main goal of Nepal’s ICT policy?",
    options: ["Promote tourism", "Develop ICT infrastructure and e-governance", "Improve agriculture", "Build sports facilities"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Which Nepali app allows viewing land records digitally?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "Which Nepali bank uses the ConnectIPS platform for fund transfers?",
    options: ["Nabil Bank", "Rastriya Banijya Bank", "Standard Chartered Bank Nepal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 47,
    question: "Which year did ConnectIPS launch in Nepal?",
    options: ["2012", "2013", "2014", "2015"],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "Which Nepali e-wallet is most widely used for online shopping?",
    options: ["eSewa", "Khalti", "ConnectIPS", "PayPal"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "Which organization is responsible for internet infrastructure in Nepal?",
    options: ["Nepal Telecom", "Nepal Rastra Bank", "Ministry of Education", "NITC"],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which Nepali fintech startup focuses on digital lending?",
    options: ["Prabhu Pay", "eSewa", "Khalti", "ConnectIPS"],
    correctAnswer: 0
  },
  {
    id: 51,
    question: "Which Nepali ICT initiative focuses on startup incubation?",
    options: ["Nepal Startup Program", "Digital Nepal Framework", "NITC Entrepreneurship Hub", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 52,
    question: "Which Nepali mobile banking app allows investment in government bonds digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 53,
    question: "Which Nepali e-wallet allows peer-to-peer fund transfer?",
    options: ["eSewa", "Khalti", "Both A and B", "ConnectIPS"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "Which year was the Digital Nepal Policy announced?",
    options: ["2014", "2015", "2016", "2017"],
    correctAnswer: 3
  },
  {
    id: 55,
    question: "Which app allows digital verification of citizenship in Nepal?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "Which Nepali e-wallet supports QR-based merchant payments?",
    options: ["eSewa", "Khalti", "Both A and B", "ConnectIPS"],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "What is the full form of POS in Nepalese banking?",
    options: ["Point of Sale", "Payment on Site", "Processing of Sales", "Payment Order System"],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Which Nepali app provides vehicle tax payment digitally?",
    options: ["Nagarik App", "ConnectIPS", "eSewa", "Khalti"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Which Nepali e-wallet provides mobile recharge services?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 60,
    question: "Which Nepali government portal provides e-services for business registration?",
    options: ["Nagarik App", "Company Registrar Portal", "eSewa", "ConnectIPS"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "Which Nepali ICT initiative focuses on women entrepreneurship?",
    options: ["Women in ICT Program", "Digital Nepal Framework", "Startup Nepal Program", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Which Nepali bank first integrated mobile banking with QR payments?",
    options: ["Nabil Bank", "NTC", "Himalayan Bank", "Rastriya Banijya Bank"],
    correctAnswer: 2
  },
  {
    id: 63,
    question: "Which Nepali app allows viewing tax payment history digitally?",
    options: ["ConnectIPS", "eSewa", "Nagarik App", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "Which year was Khalti launched?",
    options: ["2012", "2013", "2014", "2015"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "Which Nepali app allows government scholarship application submission digitally?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "Which Nepali initiative provides free digital skills training?",
    options: ["Digital Nepal Framework", "ICT Literacy Program", "Both A and B", "None"],
    correctAnswer: 2
  },
  {
    id: 67,
    question: "Which Nepali e-wallet allows utility bill payment?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 68,
    question: "What is the full form of IT in Nepalese ICT context?",
    options: ["Internet Technology", "Information Technology", "Integrated Technology", "International Technology"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "Which Nepali app provides digital verification for land ownership records?",
    options: ["Nagarik App", "ConnectIPS", "eSewa", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 70,
    question: "Which Nepali fintech platform allows school fee payment digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 71,
    question: "Which Nepali bank first introduced QR-based payments?",
    options: ["Nabil Bank", "NTC", "Himalayan Bank", "Rastriya Banijya Bank"],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "Which Nepali e-wallet allows flight ticket booking digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "Which Nepali app allows checking pension fund contributions digitally?",
    options: ["ConnectIPS", "eSewa", "Nagarik App", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "Which year did Nagarik App officially launch?",
    options: ["2016", "2017", "2018", "2019"],
    correctAnswer: 2
  },
  {
    id: 75,
    question: "Which Nepali initiative focuses on digital entrepreneurship?",
    options: ["Startup Nepal Program", "Digital Nepal Framework", "ICT Entrepreneurship Program", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 76,
    question: "Which Nepali e-wallet provides cashback offers on transactions?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "Which Nepali app allows digital verification of vehicle ownership?",
    options: ["Nagarik App", "ConnectIPS", "eSewa", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "Which Nepali fintech platform supports pension contributions digitally?",
    options: ["ConnectIPS", "eSewa", "Khalti", "Both A and C"],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "Which Nepali government portal allows company registration digitally?",
    options: ["Company Registrar Portal", "Nagarik App", "ConnectIPS", "eSewa"],
    correctAnswer: 0
  },
  {
    id: 80,
    question: "Which Nepali app allows online submission of government forms?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 81,
    question: "Which Nepali mobile payment app provides mutual fund investment digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 82,
    question: "Which Nepali app allows passport application digitally?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "Which Nepali e-wallet provides movie ticket booking digitally?",
    options: ["eSewa", "Khalti", "Both A and B", "ConnectIPS"],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "Which Nepali initiative promotes ICT research and development?",
    options: ["NITC R&D Program", "Digital Nepal Framework", "Both A and B", "None"],
    correctAnswer: 2
  },
  {
    id: 85,
    question: "Which Nepali app allows online submission of educational scholarship forms?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "Which Nepali e-wallet allows bus ticket booking digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 87,
    question: "Which Nepali fintech platform supports insurance premium payment digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 88,
    question: "Which Nepali initiative promotes ICT literacy in rural areas?",
    options: ["Digital Nepal Framework", "ICT Literacy Program", "Both A and B", "None"],
    correctAnswer: 2
  },
  {
    id: 89,
    question: "Which Nepali mobile banking app allows international remittance?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 90,
    question: "Which Nepali e-wallet allows hospital bill payment digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 91,
    question: "Which Nepali app allows citizens to get a driving license digitally?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 92,
    question: "Which Nepali mobile payment app provides electricity bill payment?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "Which Nepali app allows digital verification of academic certificates?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "Which Nepali fintech platform supports online share trading?",
    options: ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 95,
    question: "Which Nepali e-wallet allows charity donations digitally?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 96,
    question: "Which Nepali initiative promotes ICT skill development among youth?",
    options: ["Digital Nepal Framework", "ICT Youth Program", "Both A and B", "None"],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "Which Nepali app allows online submission of government feedback forms?",
    options: ["Nagarik App", "eSewa", "ConnectIPS", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "Which Nepali e-wallet supports airline ticket booking?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 99,
    question: "Which Nepali mobile payment app provides online bus ticket booking?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 100,
    question: "Which Nepali initiative focuses on promoting e-governance?",
    options: ["Digital Nepal Framework", "Startup Nepal Program", "ICT Entrepreneurship Program", "ICT Youth Program"],
    correctAnswer: 0
  },
  {
    id: 101,
    question: "What does AI stand for in modern technology?",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interface", "Applied Innovation"],
    correctAnswer: 1
  },
  {
    id: 102,
    question: "Which of the following is an example of AI application?",
    options: ["ChatGPT", "Microsoft Word", "Zoom", "WhatsApp"],
    correctAnswer: 0
  },
  {
    id: 103,
    question: "IoT stands for:",
    options: ["Internet of Technology", "Internet of Things", "Intelligent Online Tools", "Integrated Operational Technology"],
    correctAnswer: 1
  },
  {
    id: 104,
    question: "Which of these is an IoT device?",
    options: ["Smart thermostat", "Desktop PC", "Notebook", "Printer"],
    correctAnswer: 0
  },
  {
    id: 105,
    question: "Which technology is primarily used in self-driving cars?",
    options: ["Artificial Intelligence", "Cloud Computing", "Blockchain", "Augmented Reality"],
    correctAnswer: 0
  },
  {
    id: 106,
    question: "What is the main purpose of blockchain technology?",
    options: ["Centralized data storage", "Secure and decentralized data recording", "Virtual reality", "Cloud computing"],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "Which of the following is an example of blockchain use?",
    options: ["Bitcoin", "Zoom", "Google Maps", "YouTube"],
    correctAnswer: 0
  },
  {
    id: 108,
    question: "AR stands for:",
    options: ["Automated Reality", "Augmented Reality", "Artificial Reality", "Advanced Robotics"],
    correctAnswer: 1
  },
  {
    id: 109,
    question: "Which of these is an example of AR application?",
    options: ["Pokémon Go", "WhatsApp", "Instagram text post", "Google Drive"],
    correctAnswer: 0
  },
  {
    id: 110,
    question: "VR stands for:",
    options: ["Virtual Reality", "Verified Response", "Visual Robotics", "Variable Resource"],
    correctAnswer: 0
  },
  {
    id: 111,
    question: "Which device is used to experience Virtual Reality?",
    options: ["VR headset", "Tablet", "Laptop", "Printer"],
    correctAnswer: 0
  },
  {
    id: 112,
    question: "Cloud computing allows:",
    options: ["Storing data on local devices only", "Accessing data and apps over the internet", "Printing documents remotely", "Watching movies offline"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "Which of these is a cloud storage service?",
    options: ["Google Drive", "VLC Media Player", "Adobe Photoshop", "Microsoft Word"],
    correctAnswer: 0
  },
  {
    id: 114,
    question: "What is a smart city?",
    options: ["A city with advanced robotics", "A city using ICT and IoT for better governance and services", "A city with tall buildings", "A city with online gaming centers"],
    correctAnswer: 1
  },
  {
    id: 115,
    question: "Which of these is an example of wearable technology?",
    options: ["Smartwatch", "Desktop PC", "Laptop", "Print"],
    correctAnswer: 0
  },
  {
    id: 116,
    question: "Fintech stands for:",
    options: ["Finance and Technology", "Financial Internet Tools", "Fast Technology", "Fiscal Tech Network"],
    correctAnswer: 0
  },
  {
    id: 117,
    question: "Which of the following is a popular fintech application globally?",
    options: ["PayPal", "Microsoft Excel", "WhatsApp", "YouTube"],
    correctAnswer: 0
  },
  {
    id: 118,
    question: "Edge computing is mainly used for:",
    options: ["Reducing latency by processing data near its source", "Increasing storage in the cloud", "Creating virtual reality apps", "Social media management"],
    correctAnswer: 0
  },
  {
    id: 119,
    question: "Which of these is an AI-powered voice assistant?",
    options: ["Siri", "Adobe Acrobat", "WhatsApp", "VLC"],
    correctAnswer: 0
  },
  {
    id: 120,
    question: "Robotics is primarily used for:",
    options: ["Automating tasks", "Data storage", "Cloud computing", "Video streaming"],
    correctAnswer: 0
  },
  {
    id: 121,
    question: "Which AI technology is used for image recognition?",
    options: ["Machine Learning", "Blockchain", "Cloud Computing", "IoT"],
    correctAnswer: 0
  },
  {
    id: 122,
    question: "Which technology is trending in Nepal for contactless payments?",
    options: ["QR code-based payments", "Cash only", "Checks", "Postal Money Order"],
    correctAnswer: 0
  },
  {
    id: 123,
    question: "Drones are an example of which type of technology?",
    options: ["Robotics", "Blockchain", "AR/VR", "Cloud Computing"],
    correctAnswer: 0
  },
  {
    id: 124,
    question: "Which technology allows virtual collaboration in offices?",
    options: ["Cloud Computing", "Robotics", "IoT", "AR/VR"],
    correctAnswer: 0
  },
  {
    id: 125,
    question: "Which of the following apps uses AI for chat support?",
    options: ["ChatGPT", "VLC Media Player", "Calculator", "Paint"],
    correctAnswer: 0
  },
  {
    id: 126,
    question: "Which global company is famous for AI research?",
    options: ["OpenAI", "Walmart", "Ford", "Nike"],
    correctAnswer: 0
  },
  {
    id: 127,
    question: "Which Nepali app is integrating AI for personal finance management?",
    options: ["eSewa", "Khalti", "ConnectIPS", "Nagarik App"],
    correctAnswer: 1
  },
  {
    id: 128,
    question: "Which type of VR is commonly used in gaming?",
    options: ["Immersive VR", "Cloud VR", "Mobile VR", "Desktop VR"],
    correctAnswer: 0
  },
  {
    id: 129,
    question: "Which blockchain platform is widely used for smart contracts?",
    options: ["Ethereum", "Bitcoin", "PayPal", "Ripple"],
    correctAnswer: 0
  },
  {
    id: 130,
    question: "Which of these is an example of AI in healthcare?",
    options: ["Predictive diagnostics", "Excel spreadsheet", "Online shopping app", "Cloud storage"],
    correctAnswer: 0
  },
  {
    id: 131,
    question: "Which IoT device is commonly used in smart homes?",
    options: ["Smart light bulbs", "Desktop PC", "Printer", "Keyboard"],
    correctAnswer: 0
  },
  {
    id: 132,
    question: "Which AI technology can generate human-like text?",
    options: ["Natural Language Processing (NLP)", "Blockchain", "IoT", "Cloud Computing"],
    correctAnswer: 0
  },
  {
    id: 133,
    question: "Which of these is an example of AR in education?",
    options: ["Interactive 3D models", "Google Docs", "VLC Player", "Zoom"],
    correctAnswer: 0
  },
  {
    id: 134,
    question: "Which wearable device tracks heart rate and activity?",
    options: ["Fitness tracker", "Laptop", "Printer", "VR headset"],
    correctAnswer: 0
  },
  {
    id: 135,
    question: "Which fintech technology enables peer-to-peer lending?",
    options: ["Blockchain", "Cloud Computing", "AR/VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 136,
    question: "Which technology is widely used in smart agriculture?",
    options: ["IoT sensors", "VR headset", "Desktop PC", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 137,
    question: "AI in gaming is used for:",
    options: ["NPC behavior and game difficulty scaling", "Printing", "Storage", "Video editing"],
    correctAnswer: 0
  },
  {
    id: 138,
    question: "Which company developed ChatGPT?",
    options: ["OpenAI", "Microsoft", "Google", "Facebook"],
    correctAnswer: 0
  },
  {
    id: 139,
    question: "Which global AI chatbot is used in customer service?",
    options: ["ChatGPT", "Notepad", "VLC", "Windows Media Player"],
    correctAnswer: 0
  },
  {
    id: 140,
    question: "Which technology is key for autonomous vehicles?",
    options: ["AI, sensors, and IoT", "Blockchain", "VR", "Cloud storage"],
    correctAnswer: 0
  },
  {
    id: 141,
    question: "Which wearable is used for AR experiences?",
    options: ["AR glasses", "Laptop", "Printer", "Desktop monitor"],
    correctAnswer: 0
  },
  {
    id: 142,
    question: "Cloud computing reduces the need for:",
    options: ["Local storage", "Internet connection", "Keyboard", "Monitor"],
    correctAnswer: 0
  },
  {
    id: 143,
    question: "Which technology is widely used in e-commerce personalization?",
    options: ["AI and Machine Learning", "Blockchain", "VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 144,
    question: "Blockchain ensures:",
    options: ["Data integrity and security", "Video editing", "AR gaming", "Cloud storage only"],
    correctAnswer: 0
  },
  {
    id: 145,
    question: "Smart cities use IoT for:",
    options: ["Traffic management and energy efficiency", "Playing games", "Cloud storage", "Printing"],
    correctAnswer: 0
  },
  {
    id: 146,
    question: "Which AR app is used for interior design visualization?",
    options: ["IKEA Place", "Zoom", "WhatsApp", "Gmail"],
    correctAnswer: 0
  },
  {
    id: 147,
    question: "Which AI technology is used in spam email detection?",
    options: ["Machine Learning", "Blockchain", "VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "Which device is used to interact with VR content?",
    options: ["VR headset and controllers", "Keyboard only", "Printer", "Monitor"],
    correctAnswer: 0
  },
  {
    id: 149,
    question: "Which fintech innovation is transforming lending services?",
    options: ["Peer-to-peer lending", "Cash payment", "Cheque only", "Postal money order"],
    correctAnswer: 0
  },
  {
    id: 150,
    question: "Which technology is used in AI-driven voice assistants?",
    options: ["Natural Language Processing (NLP)", "Blockchain", "IoT", "Cloud gaming"],
    correctAnswer: 0
  },
  {
    id: 151,
    question: "Which AI technology is used in face recognition systems?",
    options: ["Machine Learning", "Blockchain", "IoT", "Cloud Storage"],
    correctAnswer: 0
  },
  {
    id: 152,
    question: "Which wearable device is used to monitor sleep patterns?",
    options: ["Smartwatch", "Desktop PC", "Printer", "VR headset"],
    correctAnswer: 0
  },
  {
    id: 153,
    question: "Which Nepali fintech platform uses AI for personal finance insights?",
    options: ["Khalti", "eSewa", "ConnectIPS", "Nagarik App"],
    correctAnswer: 0
  },
  {
    id: 154,
    question: "Which technology is widely used in voice-to-text applications?",
    options: ["NLP (Natural Language Processing)", "VR", "Blockchain", "Io IOT"],
    correctAnswer: 0
  },
  {
    id: 155,
    question: "Which technology is used in smart agriculture drones?",
    options: ["IoT and AI", "VR", "Blockchain", "Cloud Storage"],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "Which of these is an example of an AI-powered recommendation system?",
    options: ["Netflix", "VLC Media Player", "Microsoft Word", "Notepad"],
    correctAnswer: 0
  },
  {
    id: 157,
    question: "Edge computing is most useful for:",
    options: ["Reducing latency in data processing", "Storing offline documents", "Playing games", "Watching movies offline"],
    correctAnswer: 0
  },
  {
    id: 158,
    question: "Which AI technology is used in self-driving cars for object detection?",
    options: ["Computer Vision", "Blockchain", "IoT", "Cloud Computing"],
    correctAnswer: 0
  },
  {
    id: 159,
    question: "Which technology enables remote health monitoring?",
    options: ["IoT", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 160,
    question: "Which of these is a popular AR app used in education?",
    options: ["Google Expeditions", "VLC Media Player", "Zoom", "Microsoft Word"],
    correctAnswer: 0
  },
  {
    id: 161,
    question: "Which emerging technology is used in cryptocurrency mining?",
    options: ["Blockchain", "AI", "VR", "Cloud Computing"],
    correctAnswer: 0
  },
  {
    id: 162,
    question: "Which AI technology can analyze and summarize text?",
    options: ["NLP", "IoT", "VR", "Blockchain"],
    correctAnswer: 0
  },
  {
    id: 163,
    question: "Which wearable device is used for fitness tracking?",
    options: ["Fitness band", "Desktop PC", "Printer", "VR headset"],
    correctAnswer: 0
  },
  {
    id: 164,
    question: "Which technology is widely used in autonomous drones?",
    options: ["AI and IoT", "Blockchain", "Cloud Gaming", "AR/VR"],
    correctAnswer: 0
  },
  {
    id: 165,
    question: "Which AI tool is used for automated customer service chatbots?",
    options: ["ChatGPT", "VLC Media Player", "Microsoft Paint", "Notepad"],
    correctAnswer: 0
  },
  {
    id: 166,
    question: "Which technology allows vehicles to communicate with traffic systems?",
    options: ["IoT", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 167,
    question: "Which technology allows real-time language translation?",
    options: ["NLP", "Blockchain", "IoT", "VR"],
    correctAnswer: 0
  },
  {
    id: 168,
    question: "Which wearable device can monitor heart rate, steps, and sleep?",
    options: ["Smartwatch", "Desktop PC", "Printer", "VR headset"],
    correctAnswer: 0
  },
  {
    id: 169,
    question: "Which blockchain platform is widely used for decentralized finance (DeFi)?",
    options: ["Ethereum", "Bitcoin", "Ripple", "PayPal"],
    correctAnswer: 0
  },
  {
    id: 170,
    question: "Which technology is used for predictive maintenance in industries?",
    options: ["AI and IoT", "Blockchain", "Cloud Gaming", "VR"],
    correctAnswer: 0
  },
  {
    id: 171,
    question: "Which AI technology is used in spam email filtering?",
    options: ["Machine Learning", "Blockchain", "IoT", "VR"],
    correctAnswer: 0
  },
  {
    id: 172,
    question: "Which technology enables contactless payment?",
    options: ["NFC (Near Field Communication)", "Blockchain", "VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 173,
    question: "Which technology is used in smart home security systems?",
    options: ["IoT", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 174,
    question: "Which AI technology can generate images from text descriptions?",
    options: ["Generative AI", "Blockchain", "IoT", "Cloud Computing"],
    correctAnswer: 0
  },
  {
    id: 175,
    question: "Which technology is widely used in e-wallets for security?",
    options: ["Blockchain and encryption", "VR", "IoT only", "Cloud gaming"],
    correctAnswer: 0
  },
  {
    id: 176,
    question: "Which technology enables voice-controlled home assistants like Alexa?",
    options: ["NLP and AI", "Blockchain", "VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 177,
    question: "Which wearable device is commonly used in AR experiences?",
    options: ["AR glasses", "Desktop PC", "Printer", "Laptop"],
    correctAnswer: 0
  },
  {
    id: 178,
    question: "Which AI technology is used in predictive analytics for business?",
    options: ["Machine Learning", "Blockchain", "VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 179,
    question: "Which technology allows drones to navigate autonomously?",
    options: ["AI and IoT", "Blockchain", "Cloud Computing", "VR"],
    correctAnswer: 0
  },
  {
    id: 180,
    question: "Which AI application is used in speech recognition?",
    options: ["Virtual assistants like Siri", "VLC Media Player", "Excel", "Notepad"],
    correctAnswer: 0
  },
  {
    id: 181,
    question: "Which technology is widely used in predictive healthcare?",
    options: ["AI and Machine Learning", "Blockchain", "Cloud Gaming", "VR"],
    correctAnswer: 0
  },
  {
    id: 182,
    question: "Which technology is used in smart wearables for health tracking?",
    options: ["IoT and sensors", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 183,
    question: "Which AI tool can generate human-like text content?",
    options: ["ChatGPT", "VLC Media Player", "Calculator", "Paint"],
    correctAnswer: 0
  },
  {
    id: 184,
    question: "Which technology is used in real-time traffic monitoring in smart cities?",
    options: ["IoT sensors", "VR", "Blockchain", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 185,
    question: "Which technology allows cryptocurrency transactions to be secure?",
    options: ["Blockchain", "AI", "VR", "IoT"],
    correctAnswer: 0
  },
  {
    id: 186,
    question: "Which emerging tech is used in AR-based navigation apps?",
    options: ["AR (Augmented Reality)", "VR", "Blockchain", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 187,
    question: "Which wearable device is used for fitness and location tracking?",
    options: ["Smartwatch with GPS", "Desktop PC", "Printer", "VR headset"],
    correctAnswer: 0
  },
  {
    id: 188,
    question: "Which technology is key for autonomous robotic systems?",
    options: ["AI and IoT", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 189,
    question: "Which AI application can translate languages in real-time?",
    options: ["Google Translate", "VLC Media Player", "Paint", "Calculator"],
    correctAnswer: 0
  },
  {
    id: 190,
    question: "Which fintech innovation allows QR-based payments?",
    options: ["e-wallet apps like eSewa and Khalti", "Blockchain only", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 191,
    question: "Which technology enables virtual meetings and collaboration?",
    options: ["Cloud Computing and AI", "Blockchain", "VR only", "IoT"],
    correctAnswer: 0
  },
  {
    id: 192,
    question: "Which AI tool can summarize long texts automatically?",
    options: ["NLP-based AI", "VLC Media Player", "Excel", "Notepad"],
    correctAnswer: 0
  },
  {
    id: 193,
    question: "Which technology is used in predictive maintenance of machines?",
    options: ["AI and IoT", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 194,
    question: "Which AR app is widely used for interior design visualization?",
    options: ["IKEA Place", "Zoom", "WhatsApp", "Gmail"],
    correctAnswer: 0
  },
  {
    id: 195,
    question: "Which technology is key in self-service kiosks and ATMs?",
    options: ["AI and IoT", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "Which wearable device can monitor ECG and heart rate?",
    options: ["Smartwatch", "Desktop PC", "Printer", "VR headset"],
    correctAnswer: 0
  },
  {
    id: 197,
    question: "Which emerging tech is used in AR-based shopping apps?",
    options: ["AR (Augmented Reality)", "VR", "Blockchain", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 198,
    question: "Which technology is used in AI-powered fraud detection?",
    options: ["Machine Learning", "Blockchain", "IoT", "VR"],
    correctAnswer: 0
  },
  {
    id: 199,
    question: "Which fintech innovation supports digital lending?",
    options: ["Peer-to-peer lending", "Cash-only lending", "Cheque-based lending", "Postal money order"],
    correctAnswer: 0
  },
  {
    id: 200,
    question: "Which technology helps smart cities manage energy efficiently?",
    options: ["IoT and AI", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 201,
    question: "What does CPU stand for in computers?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing Unit"],
    correctAnswer: 0
  },
  {
    id: 202,
    question: "Which is the first step in writing an algorithm?",
    options: ["Define the problem", "Write code", "Compile", "Execute"],
    correctAnswer: 0
  },
  {
    id: 203,
    question: "In flowchart symbols, a rectangle represents:",
    options: ["Process/Instruction", "Decision", "Start/End", "Input/Output"],
    correctAnswer: 0
  },
  {
    id: 204,
    question: "In flowcharts, a diamond shape represents:",
    options: ["Decision", "Process", "Input/Output", "Start/End"],
    correctAnswer: 0
  },
  {
    id: 205,
    question: "Scratch is primarily used for:",
    options: ["Block-based programming for beginners", "Web development", "Database management", "Operating system development"],
    correctAnswer: 0
  },
  {
    id: 206,
    question: "Which of the following is a Scratch block category?",
    options: ["Motion", "Motion and Control", "Looks, Sound, and Variables", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 207,
    question: "In Scratch, which block is used to start a script when the green flag is clicked?",
    options: ["“When green flag clicked”", "“Forever”", "“Repeat”", "“If then”"],
    correctAnswer: 0
  },
  {
    id: 208,
    question: "In Scratch, which block is used to repeat instructions multiple times?",
    options: ["Loop/Repeat", "Motion", "Sound", "Looks"],
    correctAnswer: 0
  },
  {
    id: 209,
    question: "Python is a:",
    options: ["High-level programming language", "Assembly language", "Machine language", "Markup language"],
    correctAnswer: 0
  },
  {
    id: 210,
    question: "Which symbol is used for comments in Python?",
    options: ["#", "//", "/* */", "$"],
    correctAnswer: 0
  },
  {
    id: 211,
    question: "Which Python data type is used to store text?",
    options: ["String", "Integer", "Float", "Boolean"],
    correctAnswer: 0
  },
  {
    id: 212,
    question: "Which Python data type is used for true/false values?",
    options: ["Boolean", "Integer", "String", "Float"],
    correctAnswer: 0
  },
  {
    id: 213,
    question: "What is the output of `print(2 + 3 * 4)` in Python?",
    options: ["14", "20", "24", "12"],
    correctAnswer: 0
  },
  {
    id: 214,
    question: "Which keyword is used to define a function in Python?",
    options: ["def", "function", "func", "define"],
    correctAnswer: 0
  },
  {
    id: 215,
    question: "Which operator is used for equality comparison in Python?",
    options: ["==", "=", "!=", "<>"],
    correctAnswer: 0
  },
  {
    id: 216,
    question: "Which operator is used for assignment in Python?",
    options: ["=", "==", "!=", "<="],
    correctAnswer: 0
  },
  {
    id: 217,
    question: "Which block in Scratch changes the sprite’s appearance?",
    options: ["Looks", "Motion", "Control", "Operators"],
    correctAnswer: 0
  },
  {
    id: 218,
    question: "Which Scratch block is used to play sounds?",
    options: ["Sound", "Motion", "Looks", "Events"],
    correctAnswer: 0
  },
  {
    id: 219,
    question: "Which Python keyword is used for conditional statements?",
    options: ["if", "for", "while", "def"],
    correctAnswer: 0
  },
  {
    id: 220,
    question: "In Python, a loop that runs a fixed number of times is called:",
    options: ["for loop", "while loop", "do-while loop", "if loop"],
    correctAnswer: 0
  },
  {
    id: 221,
    question: "In Python, a loop that runs until a condition is false is called:",
    options: ["while loop", "for loop", "if loop", "repeat loop"],
    correctAnswer: 0
  },
  {
    id: 222,
    question: "Which Python function is used to take input from the user?",
    options: ["input()", "scan()", "read()", "get()"],
    correctAnswer: 0
  },
  {
    id: 223,
    question: "In Scratch, which block is used to wait for a specified number of seconds?",
    options: ["“wait ___ seconds”", "“forever”", "“repeat”", "“if then”"],
    correctAnswer: 0
  },
  {
    id: 224,
    question: "In Scratch, which block can detect key presses?",
    options: ["Sensing", "Motion", "Looks", "Control"],
    correctAnswer: 0
  },
  {
    id: 225,
    question: "Which Python function converts a string to an integer?",
    options: ["int()", "str()", "float()", "bool()"],
    correctAnswer: 0
  },
  {
    id: 226,
    question: "Which Python function converts an integer to a string?",
    options: ["str()", "int()", "float()", "bool()"],
    correctAnswer: 0
  },
  {
    id: 227,
    question: "Which symbol is used for multiplication in Python?",
    options: ["*", "x", "%", "**"],
    correctAnswer: 0
  },
  {
    id: 228,
    question: "Which symbol is used for exponentiation in Python?",
    options: ["**", "^", "*", "%"],
    correctAnswer: 0
  },
  {
    id: 229,
    question: "Which Scratch block category is used for mathematical operations?",
    options: ["Operators", "Motion", "Control", "Sensing"],
    correctAnswer: 0
  },
  {
    id: 230,
    question: "In programming, a variable is used to:",
    options: ["Store data", "Display graphics", "Make sounds", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 231,
    question: "In Scratch, which block is used to ask the user a question?",
    options: ["“ask ___ and wait”", "“say ___ for ___ seconds”", "“wait ___ seconds”", "“forever”"],
    correctAnswer: 0
  },
  {
    id: 232,
    question: "What does IDE stand for in programming?",
    options: ["Integrated Development Environment", "Internal Debugging Editor", "Internet Development Engine", "Interactive Design Editor"],
    correctAnswer: 0
  },
  {
    id: 233,
    question: "Which of the following is a popular Python IDE?",
    options: ["PyCharm", "VLC", "Notepad", "Microsoft Word"],
    correctAnswer: 0
  },
  {
    id: 234,
    question: "What is the correct way to start a comment in Scratch?",
    options: ["Use the “comment” option in the block menu", "Use # symbol", "Use // symbol", "Use /* */"],
    correctAnswer: 0
  },
  {
    id: 235,
    question: "In Scratch, which block is used to move the sprite to a specific position?",
    options: ["Motion – “go to x: ___ y: ___”", "Looks – “say ___”", "Sound – “play sound ___”", "Control – “wait ___ seconds”"],
    correctAnswer: 0
  },
  {
    id: 236,
    question: "Which Python statement is used to stop a loop?",
    options: ["break", "continue", "pass", "exit"],
    correctAnswer: 0
  },
  {
    id: 237,
    question: "Which Python statement skips the rest of the loop and continues?",
    options: ["continue", "break", "pass", "exit"],
    correctAnswer: 0
  },
  {
    id: 238,
    question: "In multimedia, what does GIF stand for?",
    options: ["Graphics Interchange Format", "Graphics Internet File", "General Image Format", "Graphic Integrated File"],
    correctAnswer: 0
  },
  {
    id: 239,
    question: "What is a common audio file format?",
    options: ["MP3", "JPG", "GIF", "TXT"],
    correctAnswer: 0
  },
  {
    id: 240,
    question: "What is a common video file format?",
    options: ["MP4", "TXT", "PDF", "JPG"],
    correctAnswer: 0
  },
  {
    id: 241,
    question: "What does RGB stand for in multimedia?",
    options: ["Red Green Blue", "Red Green Black", "Red Gray Blue", "Random Green Blue"],
    correctAnswer: 0
  },
  {
    id: 242,
    question: "What is the main function of a flowchart?",
    options: ["Represent algorithm visually", "Store data", "Play multimedia", "Edit videos"],
    correctAnswer: 0
  },
  {
    id: 243,
    question: "Which Scratch block is used to detect touching colors or objects?",
    options: ["Sensing", "Motion", "Control", "Operators"],
    correctAnswer: 0
  },
  {
    id: 244,
    question: "In Python, which data type is used for decimal numbers?",
    options: ["float", "int", "string", "bool"],
    correctAnswer: 0
  },
  {
    id: 245,
    question: "Which Scratch block is used to control loops and conditionals?",
    options: ["Control", "Motion", "Sound", "Looks"],
    correctAnswer: 0
  },
  {
    id: 246,
    question: "Which multimedia element combines text, images, audio, and video?",
    options: ["Interactive presentation", "Spreadsheet", "Text file", "Database"],
    correctAnswer: 0
  },
  {
    id: 247,
    question: "In Python, what is the output of `print(type(5))`?",
    options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    correctAnswer: 0
  },
  {
    id: 248,
    question: "Which Scratch block category is used for logical comparisons?",
    options: ["Operators", "Motion", "Sound", "Looks"],
    correctAnswer: 0
  },
  {
    id: 249,
    question: "Which Python operator is used for modulus (remainder)?",
    options: ["%", "//", "**", "*"],
    correctAnswer: 0
  },
  {
    id: 250,
    question: "In Scratch, which block repeats instructions indefinitely?",
    options: ["“forever”", "“repeat until”", "“repeat ___ times”", "“if then”"],
    correctAnswer: 0
  },
  {
    id: 251,
    question: "In Python, which symbol is used for exponentiation?",
    options: ["**", "^", "*", "%"],
    correctAnswer: 0
  },
  {
    id: 252,
    question: "Which Scratch block is used to change the sprite’s costume?",
    options: ["Looks", "Motion", "Control", "Sensing"],
    correctAnswer: 0
  },
  {
    id: 253,
    question: "In Python, what is the output of `print(10 // 3)`?",
    options: ["3", "3.33", "4", "3.0"],
    correctAnswer: 0
  },
  {
    id: 254,
    question: "Which flowchart symbol is used to start or end a process?",
    options: ["Oval", "Rectangle", "Diamond", "Parallelogram"],
    correctAnswer: 0
  },
  {
    id: 255,
    question: "Which Scratch block allows detecting mouse clicks?",
    options: ["Sensing", "Motion", "Looks", "Control"],
    correctAnswer: 0
  },
  {
    id: 256,
    question: "In Python, which function prints output on the screen?",
    options: ["print()", "input()", "output()", "display()"],
    correctAnswer: 0
  },
  {
    id: 257,
    question: "Which Scratch block is used to change the sprite's position gradually?",
    options: ["Glide", "Move", "Go to", "Point in direction"],
    correctAnswer: 0
  },
  {
    id: 258,
    question: "In Python, what is the output of `print(2 * (3 + 4))`?",
    options: ["14", "10", "20", "9"],
    correctAnswer: 0
  },
  {
    id: 259,
    question: "In flowcharts, a parallelogram represents:",
    options: ["Input/Output", "Process", "Decision", "Start/End"],
    correctAnswer: 0
  },
  {
    id: 260,
    question: "Which Scratch block category is used for mathematical calculations?",
    options: ["Operators", "Motion", "Looks", "Sound"],
    correctAnswer: 0
  },
  {
    id: 261,
    question: "Which Python keyword is used to handle exceptions?",
    options: ["try", "catch", "except", "handle"],
    correctAnswer: 0
  },
  {
    id: 262,
    question: "In Python, which operator checks inequality?",
    options: ["!=", "==", "=", "<>"],
    correctAnswer: 0
  },
  {
    id: 263,
    question: "In Scratch, which block is used to repeat instructions until a condition is met?",
    options: ["“repeat until”", "“forever”", "“repeat ___ times”", "“if then”"],
    correctAnswer: 0
  },
  {
    id: 264,
    question: "Which multimedia element represents moving images?",
    options: ["Video", "Audio", "Text", "Image"],
    correctAnswer: 0
  },
  {
    id: 265,
    question: "In Python, which data type is used for decimal numbers?",
    options: ["float", "int", "string", "bool"],
    correctAnswer: 0
  },
  {
    id: 266,
    question: "Which Scratch block is used to broadcast messages to other sprites?",
    options: ["Events – “broadcast ___”", "Motion – “move ___ steps”", "Control – “wait ___ seconds”", "Looks – “say ___”"],
    correctAnswer: 0
  },
  {
    id: 267,
    question: "Which Python keyword is used to define a function?",
    options: ["def", "function", "func", "define"],
    correctAnswer: 0
  },
  {
    id: 268,
    question: "In Python, which keyword exits a loop immediately?",
    options: ["break", "continue", "pass", "exit"],
    correctAnswer: 0
  },
  {
    id: 269,
    question: "In Scratch, which block is used to detect touching a color?",
    options: ["Sensing - “touching color?”", "Motion - “go to x: ___ y: ___”", "Looks - “say ___”", "Control - “wait ___ seconds”"],
    correctAnswer: 0
  },
  {
    id: 270,
    question: "Which file format is commonly used for images in multimedia?",
    options: ["JPG/JPEG", "MP3", "MP4", "TXT"],
    correctAnswer: 0
  },
  {
    id: 271,
    question: "In Python, which function converts a string to an integer?",
    options: ["int()", "str()", "float()", "bool()"],
    correctAnswer: 0
  },
  {
    id: 272,
    question: "Which Scratch block is used to change a sprite's size?",
    options: ["Looks - “change size by ___”", "Motion - “move ___ steps”", "Control - “wait ___ seconds”", "Sound - “play sound ___”"],
    correctAnswer: 0
  },
  {
    id: 273,
    question: "Which Python operator is used for floor division?",
    options: ["//", "/", "%", "*"],
    correctAnswer: 0
  },
  {
    id: 274,
    question: "Which multimedia element represents sound?",
    options: ["Audio", "Video", "Image", "Text"],
    correctAnswer: 0
  },
  {
    id: 275,
    question: "In Python, what is the output of `print(bool(0))`?",
    options: ["False", "True", "0", "1"],
    correctAnswer: 0
  },
  {
    id: 276,
    question: "Which Scratch block is used to detect key presses?",
    options: ["Sensing - “key ___ pressed?”", "Motion - “move ___ steps”", "Looks - “say ___”", "Control - “wait ___ seconds”"],
    correctAnswer: 0
  },
  {
    id: 277,
    question: "In Python, which function reads input from the user?",
    options: ["input()", "print()", "read()", "scan()"],
    correctAnswer: 0
  },
  {
    id: 278,
    question: "Which Scratch block is used to glide a sprite to a position over time?",
    options: ["Motion - “glide ___ secs to x: ___ y: ___”", "Motion - “move ___ steps”", "Looks - “say ___”", "Control - “wait ___ seconds”"],
    correctAnswer: 0
  },
  {
    id: 279,
    question: "In multimedia, what does MP4 represent?",
    options: ["Video format", "Audio format", "Image format", "Text format"],
    correctAnswer: 0
  },
  {
    id: 280,
    question: "In Python, which operator calculates the remainder?",
    options: ["%", "//", "*", "**"],
    correctAnswer: 0
  },
  {
    id: 281,
    question: "Which Python data type is used for storing True/False values?",
    options: ["Boolean", "Integer", "Float", "String"],
    correctAnswer: 0
  },
  {
    id: 282,
    question: "Which Scratch block is used to display messages?",
    options: ["Looks - “say ___ for ___ seconds”", "Motion - “move ___ steps”", "Control - “wait ___ seconds”", "Sound - “play sound ___”"],
    correctAnswer: 0
  },
  {
    id: 283,
    question: "In Python, which symbol is used for single-line comments?",
    options: ["#", "//", "/* */", "$"],
    correctAnswer: 0
  },
  {
    id: 284,
    question: "Which flowchart symbol is used for input/output?",
    options: ["Parallelogram", "Rectangle", "Diamond", "Oval"],
    correctAnswer: 0
  },
  {
    id: 285,
    question: "In Scratch, which block is used to repeat instructions a specific number of times?",
    options: ["“repeat ___”", "“forever”", "“repeat until”", "“if then”"],
    correctAnswer: 0
  },
  {
    id: 286,
    question: "In Python, which function converts a number to a string?",
    options: ["str()", "int()", "float()", "bool()"],
    correctAnswer: 0
  },
  {
    id: 287,
    question: "Which multimedia element uses a combination of text, audio, video, and graphics?",
    options: ["Interactive presentation", "Text file", "Spreadsheet", "PDF"],
    correctAnswer: 0
  },
  {
    id: 288,
    question: "In Python, what is the output of `print(3 > 2)`?",
    options: ["True", "False", "1", "0"],
    correctAnswer: 0
  },
  {
    id: 289,
    question: "In Scratch, which block checks if a sprite is touching the edge?",
    options: ["Sensing - “touching edge?”", "Motion - “move ___ steps”", "Looks - “say ___”", "Control - “wait ___ seconds”"],
    correctAnswer: 0
  },
  {
    id: 290,
    question: "Which Python operator performs addition?",
    options: ["+", "-", "*", "/"],
    correctAnswer: 0
  },
  {
    id: 291,
    question: "In Scratch, which block is used to stop a script?",
    options: ["Control - “stop ___”", "Motion - “move ___ steps”", "Looks - “say ___”", "Sound - “play sound ___”"],
    correctAnswer: 0
  },
  {
    id: 292,
    question: "Which Python keyword is used to skip the rest of a loop iteration?",
    options: ["continue", "break", "pass", "exit"],
    correctAnswer: 0
  },
  {
    id: 293,
    question: "In multimedia, what is the full form of JPEG?",
    options: ["Joint Photographic Experts Group", "Joint Photo Exchange Graphics", "Java Photo Experts Group", "Joint Picture Editing Group"],
    correctAnswer: 0
  },
  {
    id: 294,
    question: "In Python, what is the output of `print(len(\"Hello\"))`?",
    options: ["5", "4", "6", "0"],
    correctAnswer: 0
  },
  {
    id: 295,
    question: "In Scratch, which block changes a sprite's direction?",
    options: ["Motion - “point in direction ___”", "Looks - “say ___”", "Sound - “play sound ___”", "Control - “wait ___ seconds”"],
    correctAnswer: 0
  },
  {
    id: 296,
    question: "Which Python data type is used to store decimal numbers?",
    options: ["float", "int", "string", "bool"],
    correctAnswer: 0
  },
  {
    id: 297,
    question: "In multimedia, which file format is used for sound?",
    options: ["MP3", "JPG", "MP4", "PNG"],
    correctAnswer: 0
  },
  {
    id: 298,
    question: "Which Python function reads a line of input from the user?",
    options: ["input()", "print()", "read()", "scan()"],
    correctAnswer: 0
  },
  {
    id: 299,
    question: "In Scratch, which block repeats instructions indefinitely?",
    options: ["“forever”", "“repeat until”", "“repeat ___ times”", "“if then”"],
    correctAnswer: 0
  },
  {
    id: 300,
    question: "In Python, which operator performs division?",
    options: ["/", "//", "%", "**"],
    correctAnswer: 0
  },
  {
    id: 301,
    question: "Which Nepali e-wallet allows digital payments and QR-based transactions?",
    options: ["eSewa", "PayPal", "Stripe", "Google Pay"],
    correctAnswer: 0
  },
  {
    id: 302,
    question: "Which Nepali digital payment platform supports utility bill payments?",
    options: ["Khalti", "Venmo", "Cash App", "Samsung Pay"],
    correctAnswer: 0
  },
  {
    id: 303,
    question: "ConnectIPS is used in Nepal for:",
    options: ["Bank payments and fund transfers", "Social media", "Online gaming", "Video streaming"],
    correctAnswer: 0
  },
  {
    id: 304,
    question: "Which government initiative in Nepal allows online tax filing?",
    options: ["e-Filing (Inland Revenue Department)", "ConnectIPS", "eSewa", "Khalti"],
    correctAnswer: 0
  },
  {
    id: 305,
    question: "Which technology is used for QR-based payment apps?",
    options: ["NFC (Near Field Communication)", "AI", "Blockchain", "VR"],
    correctAnswer: 0
  },
  {
    id: 306,
    question: "Which Nepali app allows students to check exam results online?",
    options: ["E-Pathshala", "TikTok", "Instagram", "YouTube"],
    correctAnswer: 0
  },
  {
    id: 307,
    question: "Which Nepali government app provides citizen services digitally?",
    options: ["Nagarik App", "WhatsApp", "Facebook", "Twitter"],
    correctAnswer: 0
  },
  {
    id: 308,
    question: "Which technology allows online voting and digital ballots?",
    options: ["E-voting platforms", "Social media", "Video streaming", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    id: 309,
    question: "Which multimedia element combines audio and visuals?",
    options: ["Video", "Text", "Image", "Spreadsheet"],
    correctAnswer: 0
  },
  {
    id: 310,
    question: "Which technology helps banks detect fraud automatically?",
    options: ["AI and Machine Learning", "Blockchain", "VR", "Cloud Gaming"],
    correctAnswer: 0
  },
  {
    "id": 311,
    "question": "Which Nepali bank first launched mobile banking services?",
    "options": ["Nabil Bank", "Himalayan Bank", "Standard Chartered Bank", "Rastriya Banijya Bank"],
    "correctAnswer": 0
  },
  {
    "id": 312,
    "question": "Which government platform allows online company registration in Nepal?",
    "options": ["Office of the Company Registrar (OCR) portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 313,
    "question": "Which technology is used for online document verification in Nepal?",
    "options": ["Digital Signature / Public Key Infrastructure", "Blockchain", "VR", "AI only"],
    "correctAnswer": 0
  },
  {
    "id": 314,
    "question": "Which Nepali mobile banking app supports QR payments, top-ups, and ticketing?",
    "options": ["eSewa", "PayPal", "Venmo", "Google Pay"],
    "correctAnswer": 0
  },
  {
    "id": 315,
    "question": "Which technology is used in Nepali smart traffic management systems?",
    "options": ["IoT sensors", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 316,
    "question": "Which IT trend is widely used in Nepali hospitals for patient management?",
    "options": ["Hospital Management Systems (HMS)", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 317,
    "question": "Which Nepali app allows digital land records access?",
    "options": ["eKitta / Land Revenue Office portal", "WhatsApp", "Facebook", "Instagram"],
    "correctAnswer": 0
  },
  {
    "id": 318,
    "question": "Which technology is used in digital classrooms and smart boards?",
    "options": ["Interactive software and multimedia", "Blockchain", "VR only", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 319,
    "question": "Which Nepali e-service allows paying electricity bills online?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    "correctAnswer": 3
  },
  {
    "id": 320,
    "question": "Which type of multimedia uses moving text, graphics, audio, and video?",
    "options": ["Interactive presentation", "PDF", "Spreadsheet", "Text document"],
    "correctAnswer": 0
  },
  {
    "id": 321,
    "question": "Which Nepali bank provides USSD-based mobile banking without internet?",
    "options": ["Nabil Bank", "Himalayan Bank", "Everest Bank", "NIC Asia Bank"],
    "correctAnswer": 0
  },
  {
    "id": 322,
    "question": "Which technology is used in e-learning apps for quizzes and assignments?",
    "options": ["Multimedia and interactive UI", "Blockchain", "IoT", "VR"],
    "correctAnswer": 0
  },
  {
    "id": 323,
    "question": "Which Nepali e-governance platform allows online passport applications?",
    "options": ["Department of Passport portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 324,
    "question": "Which Nepali platform is used for digital land survey and cadastral mapping?",
    "options": ["Survey Department GIS portal", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 325,
    "question": "Which multimedia format is widely used for animations?",
    "options": ["GIF", "JPG", "TXT", "PDF"],
    "correctAnswer": 0
  },
  {
    "id": 326,
    "question": "Which Nepali e-service allows digital vehicle registration and tax payment?",
    "options": ["Department of Transport Management (DoTM) e-service", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 327,
    "question": "Which technology allows real-time attendance in Nepali schools?",
    "options": ["Biometric / RFID systems", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 328,
    "question": "Which Nepali app provides online university application services?",
    "options": ["Tribhuvan University online portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 329,
    "question": "Which IT trend is used in Nepali hospitals for telemedicine?",
    "options": ["Video conferencing and remote diagnostics", "Blockchain", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 330,
    "question": "Which multimedia file format is commonly used for animations with sound?",
    "options": ["MP4", "JPG", "TXT", "PNG"],
    "correctAnswer": 0
  },
  {
    "id": 331,
    "question": "Which Nepali government portal allows online company tax filing?",
    "options": ["Inland Revenue Department e-Filing", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 332,
    "question": "Which Nepali app provides disaster management alerts digitally?",
    "options": ["Nepal Disaster Risk Reduction Portal / MoHA", "Facebook", "Twitter", "Instagram"],
    "correctAnswer": 0
  },
  {
    "id": 333,
    "question": "Which technology is widely used in Nepali banks for ATM and card security?",
    "options": ["Encryption and Chip-based cards", "Blockchain only", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 334,
    "question": "Which Nepali mobile banking platform allows international remittance?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "PayPal"],
    "correctAnswer": 0
  },
  {
    "id": 335,
    "question": "Which multimedia element is essential in online learning videos?",
    "options": ["Audio and video", "Text only", "Spreadsheet", "PDF"],
    "correctAnswer": 0
  },
  {
    "id": 336,
    "question": "Which Nepali IT trend allows smart classroom teaching?",
    "options": ["Digital projectors and interactive boards", "Blockchain", "VR only", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 337,
    "question": "Which Nepali platform allows online voter registration?",
    "options": ["Election Commission of Nepal portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 338,
    "question": "Which technology allows digital signatures for Nepali government documents?",
    "options": ["Public Key Infrastructure (PKI)", "Blockchain", "VR", "AI only"],
    "correctAnswer": 0
  },
  {
    "id": 339,
    "question": "Which Nepali app provides health services and online appointment booking?",
    "options": ["Hamro Doctor", "WhatsApp", "TikTok", "Instagram"],
    "correctAnswer": 0
  },
  {
    "id": 340,
    "question": "Which IT technology enables QR code scanning in mobile apps?",
    "options": ["Camera and NFC", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 341,
    "question": "Which Nepali platform allows online certificate verification for education?",
    "options": ["Ministry of Education digital certificate portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 342,
    "question": "Which multimedia element stores still images?",
    "options": ["JPG / PNG", "MP3", "MP4", "TXT"],
    "correctAnswer": 0
  },
  {
    "id": 343,
    "question": "Which Nepali fintech app allows splitting bills digitally?",
    "options": ["Khalti", "eSewa", "ConnectIPS", "PayPal"],
    "correctAnswer": 0
  },
  {
    "id": 344,
    "question": "Which technology is used in Nepali smart traffic lights?",
    "options": ["IoT sensors", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 345,
    "question": "Which Nepali government portal provides online birth and death registration?",
    "options": ["Civil Registration Portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 346,
    "question": "Which multimedia element represents moving text or graphics?",
    "options": ["Animation", "Audio", "Image", "Text"],
    "correctAnswer": 0
  },
  {
    "id": 347,
    "question": "Which Nepali IT trend allows online public grievance submissions?",
    "options": ["e-Services / Nagarik App", "Blockchain", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 348,
    "question": "Which Nepali e-government platform allows online land tax payment?",
    "options": ["Land Revenue Office portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 349,
    "question": "Which multimedia element combines visuals and interactivity?",
    "options": ["Interactive presentation", "PDF", "Spreadsheet", "TXT"],
    "correctAnswer": 0
  },
  {
    "id": 350,
    "question": "Which Nepali bank first launched USSD banking for feature phones?",
    "options": ["Nabil Bank", "Everest Bank", "NIC Asia", "Standard Chartered Bank"],
    "correctAnswer": 0
  },
  {
    "id": 351,
    "question": "Which IT technology allows automated billing in Nepali restaurants?",
    "options": ["POS (Point of Sale) systems", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 352,
    "question": "Which Nepali government portal allows online marriage registration?",
    "options": ["Civil Registration Portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 353,
    "question": "Which multimedia element represents digital sound effects in games?",
    "options": ["Audio", "Video", "Image", "Text"],
    "correctAnswer": 0
  },
  {
    "id": 354,
    "question": "Which Nepali IT trend is used for digital attendance in offices?",
    "options": ["Biometric scanners", "Blockchain", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 355,
    "question": "Which Nepali app allows online electricity meter readings submission?",
    "options": ["Nepal Electricity Authority mobile app", "WhatsApp", "Facebook", "Instagram"],
    "correctAnswer": 0
  },
  {
    "id": 356,
    "question": "Which multimedia format is commonly used for high-quality images?",
    "options": ["PNG", "MP3", "MP4", "TXT"],
    "correctAnswer": 0
  },
  {
    "id": 357,
    "question": "Which Nepali fintech platform provides microloans digitally?",
    "options": ["Khalti", "eSewa", "ConnectIPS", "PayPal"],
    "correctAnswer": 0
  },
  {
    "id": 358,
    "question": "Which IT trend helps Nepali farmers monitor crop health remotely?",
    "options": ["IoT and Drone technology", "Blockchain only", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 359,
    "question": "Which Nepali e-service provides online driving license application?",
    "options": ["Department of Transport Management (DoTM) portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 360,
    "question": "Which multimedia element enhances e-learning with audio narration?",
    "options": ["Audio", "Image", "Text", "Spreadsheet"],
    "correctAnswer": 0
  },
  {
    "id": 361,
    "question": "Which Nepali platform allows online land ownership verification?",
    "options": ["Land Revenue Office e-Kitta portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 362,
    "question": "Which IT trend is widely used in Nepali hospitals for patient record management?",
    "options": ["Hospital Information System (HIS)", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 363,
    "question": "Which Nepali government app provides disaster warnings and alerts?",
    "options": ["MoHA Disaster Alert app", "Facebook", "Twitter", "Instagram"],
    "correctAnswer": 0
  },
  {
    "id": 364,
    "question": "Which multimedia format is used for looping short animations?",
    "options": ["GIF", "JPG", "TXT", "PDF"],
    "correctAnswer": 0
  },
  {
    "id": 365,
    "question": "Which Nepali fintech app allows splitting payments among friends?",
    "options": ["Khalti", "eSewa", "ConnectIPS", "PayPal"],
    "correctAnswer": 0
  },
  {
    "id": 366,
    "question": "Which technology enables remote monitoring of industrial machines in Nepal?",
    "options": ["IoT sensors", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 367,
    "question": "Which Nepali platform allows online registration of NGOs?",
    "options": ["Social Welfare Council portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 368,
    "question": "Which multimedia element is essential for online tutorials?",
    "options": ["Video and Audio", "Text only", "Image only", "Spreadsheet"],
    "correctAnswer": 0
  },
  {
    "id": 369,
    "question": "Which Nepali IT trend allows real-time weather updates?",
    "options": ["Mobile apps and web portals", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 370,
    "question": "Which Nepali bank allows online account opening through mobile app?",
    "options": ["Nabil Bank", "Himalayan Bank", "NIC Asia", "Everest Bank"],
    "correctAnswer": 0
  },
  {
    "id": 371,
    "question": "Which multimedia element allows interactive simulations?",
    "options": ["Animation with scripting", "PDF", "Spreadsheet", "TXT"],
    "correctAnswer": 0
  },
  {
    "id": 372,
    "question": "Which Nepali government portal allows online pension management?",
    "options": ["Employees Provident Fund (EPF) portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 373,
    "question": "Which IT trend allows smart home automation in Nepal?",
    "options": ["IoT devices and apps", "Blockchain", "VR only", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 374,
    "question": "Which Nepali platform provides digital health certificates?",
    "options": ["Hamro Doctor / MoHP portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 375,
    "question": "Which multimedia element is used to enhance presentations with moving content?",
    "options": ["Animation", "Image", "Audio only", "Text"],
    "correctAnswer": 0
  },
  {
    "id": 376,
    "question": "Which Nepali IT trend enables digital library services?",
    "options": ["E-Library portals", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 377,
    "question": "Which Nepali fintech platform supports recurring payments?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "PayPal"],
    "correctAnswer": 0
  },
  {
    "id": 378,
    "question": "Which technology allows online ticket booking for buses in Nepal?",
    "options": ["E-ticketing apps", "Blockchain", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 379,
    "question": "Which Nepali platform provides online scholarship application submission?",
    "options": ["Ministry of Education scholarship portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 380,
    "question": "Which multimedia element is used for background music in e-learning?",
    "options": ["Audio", "Video", "Image", "Text"],
    "correctAnswer": 0
  },
  {
    "id": 381,
    "question": "Which Nepali IT trend is widely used for online polling?",
    "options": ["E-voting platforms", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 382,
    "question": "Which Nepali government portal allows online land ownership transfer?",
    "options": ["Land Revenue Office portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 383,
    "question": "Which IT trend helps Nepali farmers get weather alerts for agriculture?",
    "options": ["Mobile apps and IoT", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 384,
    "question": "Which Nepali fintech platform allows bill payments and mobile top-ups?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "All of the above"],
    "correctAnswer": 3
  },
  {
    "id": 385,
    "question": "Which multimedia element is commonly used in educational slideshows?",
    "options": ["Animation and Audio", "Text only", "Spreadsheet", "PDF"],
    "correctAnswer": 0
  },
  {
    "id": 386,
    "question": "Which Nepali government platform allows online company tax clearance?",
    "options": ["Inland Revenue Department portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 387,
    "question": "Which IT trend is used for digital queue management in Nepali hospitals?",
    "options": ["Mobile apps and digital tokens", "Blockchain", "VR", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 388,
    "question": "Which Nepali platform provides online health insurance services?",
    "options": ["Health Insurance Board portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 389,
    "question": "Which multimedia element allows adding narration to slides?",
    "options": ["Audio", "Video only", "Text only", "Image only"],
    "correctAnswer": 0
  },
  {
    "id": 390,
    "question": "Which Nepali IT trend is used for online land dispute resolution?",
    "options": ["e-Land portal / GIS mapping", "Blockchain", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 391,
    "question": "Which Nepali fintech app allows QR payment without internet?",
    "options": ["eSewa via USSD", "Khalti", "ConnectIPS", "PayPal"],
    "correctAnswer": 0
  },
  {
    "id": 392,
    "question": "Which technology is widely used in Nepali banks for cyber security?",
    "options": ["Encryption and firewalls", "Blockchain only", "VR only", "Cloud Gaming only"],
    "correctAnswer": 0
  },
  {
    "id": 393,
    "question": "Which Nepali app provides online COVID-19 updates?",
    "options": ["Hamro Doctor / MoHP portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 394,
    "question": "Which multimedia element is used in explainer videos?",
    "options": ["Audio + Video + Animation", "Image only", "Text only", "Spreadsheet"],
    "correctAnswer": 0
  },
  {
    "id": 395,
    "question": "Which Nepali IT trend helps in online education during lockdown?",
    "options": ["E-learning platforms", "Blockchain", "VR only", "Cloud Gaming"],
    "correctAnswer": 0
  },
  {
    "id": 396,
    "question": "Which Nepali government portal allows online tax clearance certificates?",
    "options": ["Inland Revenue Department portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 397,
    "question": "Which technology is used in Nepali banks for two-factor authentication?",
    "options": ["OTP via SMS / App", "Blockchain", "VR", "IoT only"],
    "correctAnswer": 0
  },
  {
    "id": 398,
    "question": "Which Nepali app allows online property tax payment?",
    "options": ["Municipal e-service portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 399,
    "question": "Which multimedia element helps in interactive storytelling?",
    "options": ["Animation + Audio + Video", "Text only", "Image only", "Spreadsheet"],
    "correctAnswer": 0
  },
  {
    "id": 400,
    "question": "Which Nepali platform allows online pension tracking for government employees?",
    "options": ["Employees Provident Fund (EPF) portal", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 401,
    "question": "What does AI stand for in technology?",
    "options": ["Artificial Intelligence", "Automated Interface", "Advanced Internet", "Applied Innovation"],
    "correctAnswer": 0
  },
  {
    "id": 402,
    "question": "Which AI technology is used for chatbots?",
    "options": ["Natural Language Processing (NLP)", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 403,
    "question": "Which technology allows storing data over the internet instead of local devices?",
    "options": ["Cloud Computing", "Blockchain", "VR", "AI"],
    "correctAnswer": 0
  },
  {
    "id": 404,
    "question": "Which Nepali bank uses AI-based fraud detection?",
    "options": ["Nabil Bank", "Himalayan Bank", "NIC Asia", "Everest Bank"],
    "correctAnswer": 0
  },
  {
    "id": 405,
    "question": "Which IoT device is commonly used in smart homes?",
    "options": ["Smart thermostat", "Desktop computer", "Printer", "Scanner"],
    "correctAnswer": 0
  },
  {
    "id": 406,
    "question": "Which networking device connects multiple computers within a LAN?",
    "options": ["Switch", "Router", "Modem", "Hub"],
    "correctAnswer": 0
  },
  {
    "id": 407,
    "question": "What does VPN stand for?",
    "options": ["Virtual Private Network", "Variable Protocol Network", "Virtual Public Node", "Verified Private Network"],
    "correctAnswer": 0
  },
  {
    "id": 408,
    "question": "Which cybersecurity technique is used to prevent unauthorized access to a network?",
    "options": ["Firewall", "Cloud storage", "IoT", "AI"],
    "correctAnswer": 0
  },
  {
    "id": 409,
    "question": "Which AI technology allows face recognition?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 410,
    "question": "What does HTTP stand for?",
    "options": ["Hypertext Transfer Protocol", "Hyperlink Text Transfer Process", "Hypertext Transmission Protocol", "Hyperlink Text Transmission Process"],
    "correctAnswer": 0
  },
  {
    "id": 411,
    "question": "Which cloud service allows hosting websites?",
    "options": ["Infrastructure as a Service (IaaS)", "SaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 412,
    "question": "Which cybersecurity concept ensures data is not altered during transmission?",
    "options": ["Integrity", "Confidentiality", "Availability", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 413,
    "question": "Which AI technology is used in autonomous vehicles?",
    "options": ["Machine Learning and Computer Vision", "Blockchain", "VR", "Cloud Storage"],
    "correctAnswer": 0
  },
  {
    "id": 414,
    "question": "Which IoT application is used in smart agriculture?",
    "options": ["Soil moisture sensors", "Desktop PCs", "Printers", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 415,
    "question": "What is the purpose of DNS in networking?",
    "options": ["Converts domain names to IP addresses", "Provides Wi-Fi access", "Encrypts data", "Monitors traffic"],
    "correctAnswer": 0
  },
  {
    "id": 416,
    "question": "Which cybersecurity technique encrypts data to protect confidentiality?",
    "options": ["Encryption", "Firewall", "VPN", "IDS"],
    "correctAnswer": 0
  },
  {
    "id": 417,
    "question": "Which AI technology predicts trends from data?",
    "options": ["Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 418,
    "question": "Which networking device connects multiple networks together?",
    "options": ["Router", "Switch", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 419,
    "question": "Which cloud model provides ready-to-use software over the internet?",
    "options": ["SaaS (Software as a Service)", "IaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 420,
    "question": "Which IoT application is used in smart cities for traffic management?",
    "options": ["IoT sensors for traffic lights", "Desktop PCs", "Printers", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 421,
    "question": "What does SSL stand for in cybersecurity?",
    "options": ["Secure Sockets Layer", "Secure System Login", "Safe Server Layer", "Secure Software Link"],
    "correctAnswer": 0
  },
  {
    "id": 422,
    "question": "Which AI concept allows machines to learn from experience?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 423,
    "question": "Which cloud model provides a platform to develop applications?",
    "options": ["PaaS (Platform as a Service)", "SaaS", "IaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 424,
    "question": "Which cybersecurity technique detects intrusions in a network?",
    "options": ["IDS (Intrusion Detection System)", "Firewall", "Encryption", "VPN"],
    "correctAnswer": 0
  },
  {
    "id": 425,
    "question": "Which AI application is widely used in recommendation systems?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 426,
    "question": "Which IoT device is used for home security?",
    "options": ["Smart cameras", "Desktop PCs", "Printers", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 427,
    "question": "What does IP stand for in networking?",
    "options": ["Internet Protocol", "Internal Process", "Internet Programming", "Internal Protocol"],
    "correctAnswer": 0
  },
  {
    "id": 428,
    "question": "Which AI concept is used in voice assistants like Siri and Alexa?",
    "options": ["Natural Language Processing (NLP)", "Computer Vision", "Cloud Computing", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 429,
    "question": "Which cloud deployment model is fully public and available over the internet?",
    "options": ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 430,
    "question": "Which cybersecurity technique monitors outgoing and incoming network traffic?",
    "options": ["Firewall", "VPN", "Encryption", "IDS"],
    "correctAnswer": 0
  },
  {
    "id": 431,
    "question": "Which AI technology allows object detection in images?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 432,
    "question": "Which networking device allows wireless connectivity?",
    "options": ["Access Point", "Switch", "Router", "Hub"],
    "correctAnswer": 0
  },
  {
    "id": 433,
    "question": "Which IoT application monitors energy usage in buildings?",
    "options": ["Smart meters", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 434,
    "question": "What does HTTPS stand for?",
    "options": ["Hypertext Transfer Protocol Secure", "Hyperlink Text Transfer Process Secure", "Hypertext Transmission Protocol Secure", "Hyperlink Text Transmission Protocol Secure"],
    "correctAnswer": 0
  },
  {
    "id": 435,
    "question": "Which AI technology is used in language translation apps?",
    "options": ["NLP (Natural Language Processing)", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 436,
    "question": "Which cybersecurity principle ensures data is accessible to authorized users?",
    "options": ["Availability", "Confidentiality", "Integrity", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 437,
    "question": "Which networking device assigns IP addresses automatically in a LAN?",
    "options": ["DHCP Server", "Router", "Switch", "Hub"],
    "correctAnswer": 0
  },
  {
    "id": 438,
    "question": "Which cloud service provides virtual desktops to users?",
    "options": ["DaaS (Desktop as a Service)", "SaaS", "PaaS", "IaaS"],
    "correctAnswer": 0
  },
  {
    "id": 439,
    "question": "Which AI technology is used in fraud detection for banks?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 440,
    "question": "Which IoT device monitors patient health remotely?",
    "options": ["Wearable health trackers", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 441,
    "question": "Which cybersecurity protocol is used to secure email?",
    "options": ["SSL / TLS", "HTTP", "FTP", "DHCP"],
    "correctAnswer": 0
  },
  {
    "id": 442,
    "question": "Which AI technology is used in autonomous drones?",
    "options": ["Computer Vision and Machine Learning", "NLP", "Cloud Computing", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 443,
    "question": "Which cloud model combines public and private clouds?",
    "options": ["Hybrid Cloud", "Public Cloud", "Private Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 444,
    "question": "Which networking device forwards packets based on MAC addresses?",
    "options": ["Switch", "Router", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 445,
    "question": "Which AI technology is used in spam email detection?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 446,
    "question": "Which IoT application is used in smart parking systems?",
    "options": ["Sensors and mobile app integration", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 447,
    "question": "Which networking device connects a LAN to the internet?",
    "options": ["Router", "Switch", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 448,
    "question": "Which cloud computing model provides storage as a service?",
    "options": ["IaaS", "SaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 449,
    "question": "Which cybersecurity attack intercepts communication between two parties?",
    "options": ["Man-in-the-Middle (MITM)", "Phishing", "Ransomware", "Malware"],
    "correctAnswer": 0
  },
  {
    "id": 450,
    "question": "Which AI technology is used in handwriting recognition?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 451,
    "question": "Which networking protocol is used for file transfer?",
    "options": ["FTP (File Transfer Protocol)", "HTTP", "HTTPS", "SMTP"],
    "correctAnswer": 0
  },
  {
    "id": 452,
    "question": "Which IoT device is used for weather monitoring?",
    "options": ["Weather sensors", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 453,
    "question": "Which AI technology powers self-driving cars?",
    "options": ["Computer Vision + Machine Learning", "NLP", "Cloud Computing", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 454,
    "question": "Which cybersecurity practice involves creating strong passwords?",
    "options": ["Authentication", "Encryption", "VPN", "Firewall"],
    "correctAnswer": 0
  },
  {
    "id": 455,
    "question": "Which cloud service allows running virtual machines?",
    "options": ["IaaS", "SaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 456,
    "question": "Which networking protocol is used for secure web browsing?",
    "options": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "correctAnswer": 0
  },
  {
    "id": 457,
    "question": "Which IoT application monitors energy consumption in industries?",
    "options": ["Smart meters and sensors", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 458,
    "question": "Which AI technology is used in recommendation systems like Netflix and YouTube?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 459,
    "question": "Which cybersecurity practice ensures data is accessible during system failure?",
    "options": ["Availability", "Integrity", "Confidentiality", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 460,
    "question": "Which networking device converts digital signals to analog for internet connection?",
    "options": ["Modem", "Switch", "Router", "Hub"],
    "correctAnswer": 0
  },
  {
    "id": 461,
    "question": "Which AI technology is used in predictive text input on mobile phones?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 462,
    "question": "Which IoT device helps in smart lighting systems?",
    "options": ["Smart bulbs", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 463,
    "question": "Which cloud computing benefit allows users to scale resources on demand?",
    "options": ["Elasticity", "Confidentiality", "Integrity", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 464,
    "question": "Which cybersecurity attack locks user files and demands payment?",
    "options": ["Ransomware", "Phishing", "MITM", "Spyware"],
    "correctAnswer": 0
  },
  {
    "id": 465,
    "question": "Which AI technology enables real-time language translation?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 466,
    "question": "Which networking device amplifies signals in a large network?",
    "options": ["Repeater", "Switch", "Router", "Hub"],
    "correctAnswer": 0
  },
  {
    "id": 467,
    "question": "Which IoT device is used for smart water management?",
    "options": ["Flow sensors", "Desktop PCs", "Printers", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 468,
    "question": "Which AI technology powers facial recognition in security systems?",
    "options": ["Computer Vision", "NLP", "Cloud Computing", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 469,
    "question": "Which cloud computing model combines SaaS, PaaS, and IaaS?",
    "options": ["Full-stack cloud", "Private Cloud", "Public Cloud", "Hybrid Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 470,
    "question": "Which cybersecurity technique hides the origin of data packets?",
    "options": ["VPN", "Firewall", "Encryption", "IDS"],
    "correctAnswer": 0
  },
  {
    "id": 471,
    "question": "Which AI technology detects anomalies in financial transactions?",
    "options": ["Machine Learning", "NLP", "Computer Vision", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 472,
    "question": "Which networking protocol is used for sending emails?",
    "options": ["SMTP (Simple Mail Transfer Protocol)", "FTP", "HTTP", "HTTPS"],
    "correctAnswer": 0
  },
  {
    "id": 473,
    "question": "Which IoT device is used in smart refrigerators?",
    "options": ["Temperature sensors", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 474,
    "question": "Which AI technology is used in autonomous warehouse robots?",
    "options": ["Computer Vision + Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 475,
    "question": "Which cloud computing benefit allows users to pay only for resources used?",
    "options": ["Pay-as-you-go", "Subscription only", "Fixed cost", "None of the above"],
    "correctAnswer": 0
  },
  {
    "id": 476,
    "question": "Which cybersecurity practice ensures that only authorized users can access data?",
    "options": ["Authentication", "Integrity", "Availability", "Encryption"],
    "correctAnswer": 0
  },
  {
    "id": 477,
    "question": "Which networking device helps connect different LANs over long distances?",
    "options": ["Router", "Switch", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 478,
    "question": "Which AI technology helps detect spam messages in apps?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 479,
    "question": "Which IoT application monitors traffic congestion in smart cities?",
    "options": ["Traffic sensors and cameras", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 480,
    "question": "Which cloud service allows developers to build apps without managing servers?",
    "options": ["PaaS (Platform as a Service)", "IaaS", "SaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 481,
    "question": "Which cybersecurity attack tricks users into giving sensitive information?",
    "options": ["Phishing", "Ransomware", "MITM", "DDoS"],
    "correctAnswer": 0
  },
  {
    "id": 482,
    "question": "Which AI technology enables handwriting-to-text conversion?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 483,
    "question": "Which networking device connects multiple computers and manages traffic within a LAN?",
    "options": ["Switch", "Router", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 484,
    "question": "Which IoT device monitors air quality in smart cities?",
    "options": ["Air quality sensors", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 485,
    "question": "Which AI technology helps in autonomous delivery drones?",
    "options": ["Machine Learning + Computer Vision", "NLP", "Cloud Computing", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 486,
    "question": "Which cloud computing benefit allows access from anywhere with internet?",
    "options": ["Accessibility", "Confidentiality", "Integrity", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 487,
    "question": "Which cybersecurity technique blocks unwanted emails?",
    "options": ["Spam filters", "Firewall", "VPN", "IDS"],
    "correctAnswer": 0
  },
  {
    "id": 488,
    "question": "Which AI technology enables real-time speech-to-text?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 489,
    "question": "Which networking protocol is used to receive emails?",
    "options": ["POP3 / IMAP", "SMTP", "HTTP", "FTP"],
    "correctAnswer": 0
  },
  {
    "id": 490,
    "question": "Which IoT application is used for smart irrigation?",
    "options": ["Soil moisture sensors + automated valves", "Desktop PCs", "Printers", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 491,
    "question": "Which AI technology helps in predictive maintenance of machines?",
    "options": ["Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 492,
    "question": "Which cloud computing model is used in private company infrastructure?",
    "options": ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 493,
    "question": "Which cybersecurity attack floods network with traffic to make services unavailable?",
    "options": ["DDoS (Distributed Denial of Service)", "Phishing", "MITM", "Ransomware"],
    "correctAnswer": 0
  },
  {
    "id": 494,
    "question": "Which AI technology is used in fraud detection in e-commerce?",
    "options": ["Machine Learning", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 495,
    "question": "Which networking protocol allows secure remote login?",
    "options": ["SSH (Secure Shell)", "FTP", "HTTP", "SMTP"],
    "correctAnswer": 0
  },
  {
    "id": 496,
    "question": "Which IoT device is used in smart garbage management?",
    "options": ["Level sensors in bins", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 497,
    "question": "Which AI technology powers real-time video analytics?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 498,
    "question": "Which cloud service is commonly used for email hosting?",
    "options": ["SaaS", "IaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 499,
    "question": "Which cybersecurity concept ensures the authenticity of users?",
    "options": ["Authentication", "Integrity", "Availability", "Confidentiality"],
    "correctAnswer": 0
  },
  {
    "id": 500,
    "question": "Which AI technology is used in autonomous checkout systems in stores?",
    "options": ["Computer Vision + Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 501,
    "question": "In which year was the first IT Policy of Nepal introduced?",
    "options": ["2000", "1995", "2010", "1990"],
    "correctAnswer": 0
  },
  {
    "id": 502,
    "question": "Which ministry is responsible for ICT development in Nepal?",
    "options": ["Ministry of Communications and Information Technology (MoCIT)", "Ministry of Education", "Ministry of Finance", "Ministry of Industry"],
    "correctAnswer": 0
  },
  {
    "id": 503,
    "question": "What does ICT stand for?",
    "options": ["Information and Communication Technology", "Integrated Computer Tools", "Internet and Computing Technology", "Internal Communication Terminal"],
    "correctAnswer": 0
  },
  {
    "id": 504,
    "question": "Which organization manages the .np domain in Nepal?",
    "options": ["Mercantile Communications Pvt. Ltd.", "Nepal Telecom", "APNIC", "ICANN"],
    "correctAnswer": 0
  },
  {
    "id": 505,
    "question": "When was the first internet service officially introduced in Nepal?",
    "options": ["1996", "1992", "2000", "1990"],
    "correctAnswer": 0
  },
  {
    "id": 506,
    "question": "What is the full form of ISP?",
    "options": ["Internet Service Provider", "International Service Protocol", "Internet Security Platform", "Integrated Software Provider"],
    "correctAnswer": 0
  },
  {
    "id": 507,
    "question": "Which Nepalese university introduced the first computer education program?",
    "options": ["Tribhuvan University", "Kathmandu University", "Pokhara University", "Purbanchal University"],
    "correctAnswer": 0
  },
  {
    "id": 508,
    "question": "What does VPN stand for?",
    "options": ["Virtual Private Network", "Verified Private Node", "Variable Protocol Network", "Virtual Protocol Node"],
    "correctAnswer": 0
  },
  {
    "id": 509,
    "question": "Which is the national ICT award in Nepal recognizing innovative IT projects?",
    "options": ["National ICT Award", "Digital Nepal Award", "Nepal Tech Award", "e-Nepal Award"],
    "correctAnswer": 0
  },
  {
    "id": 510,
    "question": "Which protocol is used to transfer files over the internet?",
    "options": ["FTP", "HTTP", "SMTP", "SNMP"],
    "correctAnswer": 0
  },
  {
    "id": 511,
    "question": "Who is known as the father of computers?",
    "options": ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
    "correctAnswer": 0
  },
  {
    "id": 512,
    "question": "Which Nepali e-governance platform provides online company registration?",
    "options": ["Office of Company Registrar e-Service", "ConnectIPS", "eSewa", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 513,
    "question": "What does HTTP stand for?",
    "options": ["HyperText Transfer Protocol", "Hyperlink Text Transfer Process", "HyperText Transport Process", "Hyperlink Transmission Protocol"],
    "correctAnswer": 0
  },
  {
    "id": 514,
    "question": "Which AI technology enables language translation in real time?",
    "options": ["Natural Language Processing (NLP)", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 515,
    "question": "What does DNS stand for?",
    "options": ["Domain Name System", "Digital Name Server", "Domain Networking Service", "Data Name System"],
    "correctAnswer": 0
  },
  {
    "id": 516,
    "question": "Which cloud model allows organizations to host software and applications internally?",
    "options": ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 517,
    "question": "What does AI stand for in technology?",
    "options": ["Artificial Intelligence", "Automated Interface", "Advanced Internet", "Applied Innovation"],
    "correctAnswer": 0
  },
  {
    "id": 518,
    "question": "Which Nepali fintech app first introduced mobile wallet services?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "IME Pay"],
    "correctAnswer": 0
  },
  {
    "id": 519,
    "question": "Which Nepalese policy promotes ICT education and digital literacy?",
    "options": ["National IT Policy 2000", "ICT Act 2010", "Digital Nepal Framework", "E-Governance Strategy"],
    "correctAnswer": 0
  },
  {
    "id": 520,
    "question": "What does LAN stand for?",
    "options": ["Local Area Network", "Large Access Network", "Linked Application Node", "Local Access Node"],
    "correctAnswer": 0
  },
  {
    "id": 521,
    "question": "Which networking device connects multiple networks together?",
    "options": ["Router", "Switch", "Hub", "Repeater"],
    "correctAnswer": 0
  },
  {
    "id": 522,
    "question": "What is the full form of AI?",
    "options": ["Artificial Intelligence", "Automated Interface", "Advanced Internet", "Application Integration"],
    "correctAnswer": 0
  },
  {
    "id": 523,
    "question": "Which IoT device is used in smart homes for temperature control?",
    "options": ["Smart thermostat", "Desktop PC", "Printer", "Scanner"],
    "correctAnswer": 0
  },
  {
    "id": 524,
    "question": "Which Nepali IT award recognizes young innovators under 25?",
    "options": ["Young ICT Innovators Award", "Digital Youth Award", "Tech Nepal Youth Award", "e-Nepal Junior Award"],
    "correctAnswer": 0
  },
  {
    "id": 525,
    "question": "Which AI technology enables face recognition systems?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 526,
    "question": "Which cloud service allows software to be accessed online without installation?",
    "options": ["SaaS", "PaaS", "IaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 527,
    "question": "Which cybersecurity attack floods a network with traffic to cause disruption?",
    "options": ["DDoS", "Phishing", "MITM", "Spyware"],
    "correctAnswer": 0
  },
  {
    "id": 528,
    "question": "What is the first internet domain extension for Nepal?",
    "options": [".np", ".ne", ".nt", ".gov.np"],
    "correctAnswer": 0
  },
  {
    "id": 529,
    "question": "Which Nepali university first offered a degree in computer science?",
    "options": ["Tribhuvan University", "Kathmandu University", "Pokhara University", "Purbanchal University"],
    "correctAnswer": 0
  },
  {
    "id": 530,
    "question": "Which networking protocol is used for sending emails?",
    "options": ["SMTP", "FTP", "HTTP", "SNMP"],
    "correctAnswer": 0
  },
  {
    "id": 531,
    "question": "Which Nepali e-governance platform allows online tax payment?",
    "options": ["Inland Revenue Department Portal", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 532,
    "question": "Which AI technology is used in predictive analytics for banking?",
    "options": ["Machine Learning", "NLP", "Computer Vision", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 533,
    "question": "What does WAN stand for?",
    "options": ["Wide Area Network", "Wireless Access Network", "Web Area Node", "Wide Application Network"],
    "correctAnswer": 0
  },
  {
    "id": 534,
    "question": "Which Nepalese IT policy encourages e-Governance?",
    "options": ["National IT Policy 2000", "Digital Nepal Framework", "ICT Act 2010", "E-Governance Strategy"],
    "correctAnswer": 0
  },
  {
    "id": 535,
    "question": "Which AI technology powers chatbots?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 536,
    "question": "Which cybersecurity protocol secures web browsing?",
    "options": ["HTTPS", "HTTP", "FTP", "SMTP"],
    "correctAnswer": 0
  },
  {
    "id": 537,
    "question": "Which IoT device monitors water levels in smart agriculture?",
    "options": ["Level sensors", "Desktop PC", "Printer", "Projector"],
    "correctAnswer": 0
  },
  {
    "id": 538,
    "question": "Which networking device forwards data based on MAC addresses?",
    "options": ["Switch", "Router", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 539,
    "question": "What is the first Nepali website launched by the government?",
    "options": ["Nepal.gov.np", "eSewa.com", "ConnectIPS.com", "MinistryNepal.gov"],
    "correctAnswer": 0
  },
  {
    "id": 540,
    "question": "Which AI technology is used in autonomous vehicles?",
    "options": ["Machine Learning + Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 541,
    "question": "What does DNS stand for?",
    "options": ["Domain Name System", "Digital Name Server", "Domain Networking Service", "Data Name System"],
    "correctAnswer": 0
  },
  {
    "id": 542,
    "question": "Which cloud model provides computing infrastructure as a service?",
    "options": ["IaaS", "SaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 543,
    "question": "Which Nepali fintech app introduced QR payment first?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "IME Pay"],
    "correctAnswer": 0
  },
  {
    "id": 544,
    "question": "Which AI technology detects fraud in banking transactions?",
    "options": ["Machine Learning", "NLP", "Computer Vision", "IoT"],
    "correctAnswer": 0
  },
  {
    "id": 545,
    "question": "Which cybersecurity practice ensures that data is not altered?",
    "options": ["Integrity", "Availability", "Confidentiality", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 546,
    "question": "Which Nepali initiative promotes digital literacy in schools?",
    "options": ["Digital Nepal Framework", "ICT Act 2010", "E-Governance Strategy", "National IT Policy 2000"],
    "correctAnswer": 0
  },
  {
    "id": 547,
    "question": "Which AI technology is used in online recommendation systems?",
    "options": ["Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 548,
    "question": "Which networking device connects multiple LANs?",
    "options": ["Router", "Switch", "Hub", "Access Point"],
    "correctAnswer": 0
  },
  {
    "id": 549,
    "question": "What does SSL stand for?",
    "options": ["Secure Sockets Layer", "Secure System Link", "Safety Security Layer", "System Socket Link"],
    "correctAnswer": 0
  },
  {
    "id": 550,
    "question": "Which IoT device is used for smart lighting in cities?",
    "options": ["Smart bulbs", "Printers", "Desktop PCs", "Projectors"],
    "correctAnswer": 0
  },
  {
    "id": 551,
    "question": "Which Nepali portal provides online passport services?",
    "options": ["Department of Passport e-Service", "eSewa", "ConnectIPS", "Nepal Telecom"],
    "correctAnswer": 0
  },
  {
    "id": 552,
    "question": "Which AI technology helps in analyzing traffic patterns?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 553,
    "question": "Which cloud model allows shared computing resources over the internet?",
    "options": ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 554,
    "question": "What does IoT stand for?",
    "options": ["Internet of Things", "Internet on Technology", "Intelligent Operations Tool", "Integrated Online Technology"],
    "correctAnswer": 0
  },
  {
    "id": 555,
    "question": "Which Nepali platform is used for online payment of government services?",
    "options": ["ConnectIPS", "eSewa", "Khalti", "IME Pay"],
    "correctAnswer": 0
  },
  {
    "id": 556,
    "question": "What does URL stand for?",
    "options": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "Unique Resource Locator"],
    "correctAnswer": 0
  },
  {
    "id": 557,
    "question": "Which Nepali bank first adopted biometric authentication?",
    "options": ["Nabil Bank", "Nepal Bank", "Rastriya Banijya Bank", "Everest Bank"],
    "correctAnswer": 0
  },
  {
    "id": 558,
    "question": "Which AI technology is used in voice assistants?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 559,
    "question": "Which networking device amplifies signals to extend network coverage?",
    "options": ["Repeater", "Router", "Switch", "Hub"],
    "correctAnswer": 0
  },
  {
    "id": 560,
    "question": "Which Nepali government portal allows online vehicle registration?",
    "options": ["Department of Transport Management e-Service", "eSewa", "ConnectIPS", "Nepal.gov.np"],
    "correctAnswer": 0
  },
  {
    "id": 561,
    "question": "Which AI technology powers automatic email filtering for spam?",
    "options": [" pelle Learning", "NLP", "IoT", "Computer Vision"],
    "correctAnswer": 0
  },
  {
    "id": 562,
    "question": "What does MAC stand for in networking?",
    "options": ["Media Access Control", "Main Access Control", "Media Application Code", "Main Application Control"],
    "correctAnswer": 0
  },
  {
    "id": 563,
    "question": "Which Nepali fintech app allows cross-bank fund transfers?",
    "options": ["ConnectIPS", "eSewa", "Khalti", "IME Pay"],
    "correctAnswer": 0
  },
  {
    "id": 564,
    "question": "Which cloud service provides development tools online?",
    "options": ["PaaS", "SaaS", "IaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 565,
    "question": "Which cybersecurity technique hides data using algorithms?",
    "options": ["Encryption", "Firewall", "VPN", "Authentication"],
    "correctAnswer": 0
  },
  {
    "id": 566,
    "question": "Which AI technology powers self-driving cars?",
    "options": ["Machine Learning + Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 567,
    "question": "Which Nepali IT initiative promotes open data access?",
    "options": ["Open Government Data Portal", "Digital Nepal Framework", "ICT Education Program", "eSewa"],
    "correctAnswer": 0
  },
  {
    "id": 568,
    "question": "What does SMTP stand for?",
    "options": ["Simple Mail Transfer Protocol", "Secure Mail Transmission Process", "Standard Mail Transfer Protocol", "System Mail Transfer Process"],
    "correctAnswer": 0
  },
  {
    "id": 569,
    "question": "Which IoT device helps monitor soil moisture?",
    "options": ["Moisture sensor", "Printer", "Desktop PC", "Router"],
    "correctAnswer": 0
  },
  {
    "id": 570,
    "question": "Which Nepali e-governance service allows online voter registration?",
    "options": ["Election Commission e-Service", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 571,
    "question": "What does API stand for?",
    "options": ["Application Programming Interface", "Automated Process Integration", "Advanced Programming Internet", "Application Protocol Integration"],
    "correctAnswer": 0
  },
  {
    "id": 572,
    "question": "Which AI technology is used in online handwriting recognition?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 573,
    "question": "Which cloud model allows both private and public cloud resources?",
    "options": ["Hybrid Cloud", "Public Cloud", "Private Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 574,
    "question": "Which Nepali mobile wallet app supports QR payments?",
    "options": ["eSewa", "ConnectIPS", "Khalti", "IME Pay"],
    "correctAnswer": 0
  },
  {
    "id": 575,
    "question": "Which networking protocol is used to assign IP addresses automatically?",
    "options": ["DHCP", "HTTP", "FTP", "SMTP"],
    "correctAnswer": 0
  },
  {
    "id": 576,
    "question": "Which Nepali portal provides online business tax filing?",
    "options": ["Inland Revenue Department Portal", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 577,
    "question": "Which AI application predicts customer behavior in banking?",
    "options": ["Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 578,
    "question": "Which cybersecurity practice confirms user identity?",
    "options": ["Authentication", "Encryption", "Firewall", "VPN"],
    "correctAnswer": 0
  },
  {
    "id": 579,
    "question": "Which Nepali ICT policy encourages digital government services?",
    "options": ["National IT Policy 2000", "ICT Act 2010", "Digital Nepal Framework", "E-Governance Strategy"],
    "correctAnswer": 0
  },
  {
    "id": 580,
    "question": "Which AI technology is used for object detection in CCTV cameras?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 581,
    "question": "Which Nepali e-service portal allows online tax payment for businesses?",
    "options": ["Inland Revenue Department Portal", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 582,
    "question": "What does URL stand for?",
    "options": ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "Unique Resource Locator"],
    "correctAnswer": 0
  },
  {
    "id": 583,
    "question": "Which IoT device is used in smart garbage bins?",
    "options": ["Level sensor", "Printer", "Desktop PC", "Router"],
    "correctAnswer": 0
  },
  {
    "id": 584,
    "question": "Which AI technology is used in speech-to-text applications?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 585,
    "question": "Which Nepali fintech app first introduced contactless payment?",
    "options": ["eSewa", "Khalti", "ConnectIPS", "IME Pay"],
    "correctAnswer": 0
  },
  {
    "id": 586,
    "question": "Which cloud service provides storage and backup solutions online?",
    "options": ["IaaS", "SaaS", "PaaS", "DaaS"],
    "correctAnswer": 0
  },
  {
    "id": 587,
    "question": "Which networking device connects multiple devices in a LAN?",
    "options": ["Switch", "Router", "Hub", "Repeater"],
    "correctAnswer": 0
  },
  {
    "id": 588,
    "question": "Which Nepali platform provides e-learning content to schools?",
    "options": ["Digital Nepal Framework", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 589,
    "question": "Which AI technology is used in facial recognition attendance systems?",
    "options": ["Computer Vision", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 590,
    "question": "Which Nepali government portal allows online land registration?",
    "options": ["Department of Land Management e-Service", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 591,
    "question": "What does IP stand for in networking?",
    "options": ["Internet Protocol", "Internal Process", "Internet Programming", "Internal Protocol"],
    "correctAnswer": 0
  },
  {
    "id": 592,
    "question": "Which AI technology is used in recommendation systems like Netflix?",
    "options": ["Machine Learning", "NLP", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 593,
    "question": "Which Nepali initiative promotes ICT in rural areas?",
    "options": ["Digital Nepal Framework", "National IT Policy 2000", "eSewa Program", "ConnectIPS"],
    "correctAnswer": 0
  },
  {
    "id": 594,
    "question": "Which cybersecurity tool monitors network traffic for suspicious activity?",
    "options": ["Intrusion Detection System (IDS)", "VPN", "SSL", "SMTP"],
    "correctAnswer": 0
  },
  {
    "id": 595,
    "question": "Which IoT device is used for smart street lighting?",
    "options": ["Smart bulbs", "Desktop PC", "Printer", "Scanner"],
    "correctAnswer": 0
  },
  {
    "id": 596,
    "question": "Which Nepali portal allows online application for scholarships?",
    "options": ["Ministry of Education e-Service", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 597,
    "question": "Which cloud model is suitable for government internal use only?",
    "options": ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
    "correctAnswer": 0
  },
  {
    "id": 598,
    "question": "Which AI technology helps in sentiment analysis of social media posts?",
    "options": ["NLP", "Computer Vision", "IoT", "Cloud Computing"],
    "correctAnswer": 0
  },
  {
    "id": 599,
    "question": "Which Nepali e-service portal allows online vehicle tax payment?",
    "options": ["Department of Transport Management e-Service", "eSewa", "ConnectIPS", "Khalti"],
    "correctAnswer": 0
  },
  {
    "id": 600,
    "question": "Which cybersecurity protocol encrypts data transmitted over the internet?",
    "options": ["SSL/TLS", "HTTP", "FTP", "SMTP"],
    "correctAnswer": 0
  },
  
  ];

// TO ADD MORE QUESTIONS:
// Simply copy the format above and add new objects to the array
// Make sure to:
// 1. Give each question a unique id
// 2. Write your question text
// 3. Add exactly 4 options
// 4. Set correctAnswer to the index (0, 1, 2, or 3) of the correct option
