const words = [
    "UX/UI",
    "Education",
    "EdTech",
    "Research",
    "Technology",
    "Interactive Learning",
    "Instructional Design"
];

      function createFloatingWord(text) {
        const word = document.createElement("div");
        word.className = "floating-word";
        word.textContent = text;

        word.style.left = Math.random() * 100 + "vw";
        word.style.top = 100 + Math.random() * 100 + "px";
        word.style.fontSize = Math.random() * 20 + 15 + "px";

        document.body.appendChild(word);

        setTimeout(() => {
          word.remove();
        }, 10000);
      }

      setInterval(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        createFloatingWord(randomWord);
      }, 1500);

const form = document.getElementById("chat-form");
            const input = document.getElementById("user-input");
            const chatBox = document.getElementById("chat-box");

const yamkela = {
  name: "Yamkela Lusithi",
  title: "Software Engineer & Full Stack Developer",
  email: "lusithiyamkela@gmail.com",
  phone: "+27 66 543 0254",
  location: "Johannesburg, Gauteng, South Africa",
  github: "https://github.com/Yamkela4458",
  linkedin: "https://www.linkedin.com/in/yamkela-lusithi",
  education: [
    "Artificial Intelligence in the 4IR – B.Ed(Hons), University of Johannesburg (2025)",
    "Bachelor of Education – Walter Sisulu University (2024)"
  ],
  certifications: [
    "Full Stack Web Development – FNB App Academy",
    "AWS Cloud Practitioner – Amazon Web Services",
    "Basics of Data Visualization Using Python – UniAthena",
    "Python Web Development – Udemy",
    "CompTIA A+ (Core 2) – Coursera"
  ],
  skills: [
    "HTML5", "CSS3", "JavaScript", "Python", "PHP",
    "Bootstrap", "Tailwind CSS", "React.js",
    "WordPress", "WIX", "Git & GitHub", "VS Code",
    "UI/UX Design", "Canva", "Chrome DevTools",
    "API Integration", "Database Management", "Responsive Design"
  ],
  projects: [
    {
      name: "Academic Research Website",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "A responsive and accessible website offering 50+ academic resources, improving research efficiency by 70%."
    },
    {
      name: "MoneySave Jr",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Interactive web app teaching financial literacy to children, featuring responsive UI and CSS animations."
    },
    {
      name: "FNB Chatbot Interface",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Responsive chatbot interface mimicking FNB customer support, with dynamic message bubbles and animations."
    }
  ],
  experience: [
    "Freelance Web Developer – built live academic research platform from scratch",
    "Independent UI/UX Designer – developed responsive interfaces for web apps and portfolios"
  ]
};

function getBotReply(userInput) {
  const input = userInput.toLowerCase();

  // Greetings
  if (["hi", "hello", "hey", "yo"].some(word => input.includes(word)))
    return "Hello there! Nice to meet you";
  if (input.includes("how are you")) return "I'm doing great 😊! How about you?";
  if (input.includes("joke")) return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛😂";

  // Personal info
  if (input.includes("name")) return `I'm ${yamkela.name}.`;
  if (input.includes("title") || input.includes("who are you")) return `I'm ${yamkela.name}, a ${yamkela.title}.`;
  if (input.includes("email")) return `You can email me at: ${yamkela.email}`;
  if (input.includes("phone") || input.includes("contact")) return `Reach me at: ${yamkela.phone}`;
  if (input.includes("location") || input.includes("where")) return `I'm based in ${yamkela.location}`;
  if (input.includes("github")) return `Check out my GitHub: ${yamkela.github}`;
  if (input.includes("linkedin")) return `Connect on LinkedIn: ${yamkela.linkedin}`;

  // Skills, education, certifications, experience
  if (input.includes("skills")) return `Here are my technical skills:\n• ${yamkela.skills.join("\n• ")}`;
  if (input.includes("education") || input.includes("study"))
    return `Education:\n• ${yamkela.education.join("\n• ")}`;
  if (input.includes("certifications") || input.includes("course"))
    return `Certifications:\n• ${yamkela.certifications.join("\n• ")}`;
  if (input.includes("experience") || input.includes("worked"))
    return `Experience:\n• ${yamkela.experience.join("\n• ")}`;

  // Projects
  if (input.includes("projects") || input.includes("work")) {
    return yamkela.projects.map(p => `📁 ${p.name} (${p.tech.join(", ")}):\n  ${p.desc}`).join("\n\n");
  }

  // Default fallback
  return "Hmm... I didn't get that. You can ask me about my projects, skills, experience, or even a joke! 😄";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  addMessage("user", userInput);
  const response = getBotReply(userInput);
  setTimeout(() => addMessage("bot", response), 400);
  input.value = "";
});

function addMessage(sender, message) {
  const msg = document.createElement("div");
  msg.className = `chat-message ${sender}`;

  const text = document.createElement("p");
  text.textContent = message;
  msg.appendChild(text);

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Tab navigation fix
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (const tablink of tablinks) tablink.classList.remove("active-link");
  for (const tabcontent of tabcontents) tabcontent.classList.remove("active-tab");

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

      
