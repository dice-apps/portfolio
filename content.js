/* ============================================================================
   ⭐  THIS IS THE ONLY FILE YOU NEED TO EDIT  ⭐
   ----------------------------------------------------------------------------
   Everything shown on your portfolio comes from this file.
   - Replace the placeholder text between the "quotes" with your own details.
   - Keep the punctuation (quotes, commas, brackets) exactly as it is.
   - To add another item to a list, copy one { ... } block and paste it below,
     separated by a comma.
   - Anything you don't want to show? Just delete that item, or leave the list
     empty like this:  [] .
   After editing, save the file and re-upload it to GitHub (see README.md).
   ========================================================================== */

const CONTENT = {

  /* ---------------------------------------------------------------- BASICS */
  name:     "Disanda Epaladeniya",
  title:    "Final Year Undergraduate Student",
  tagline:  "Strong enthusiast on Digital Hardware Design, FPGA Design and Embedded Systems.",
  location: "Wennappuwa, Sri Lanka",
  email:    "disanda63@gmail.com",
  phone:    "+94 7672 42392",          // optional — set to "" to hide

  // Your CV file. Put your PDF in the "assets" folder and name it CV.pdf
  // (or change the name here to match your file).
  cvFile:   "assets/Disanda_Epaladeniya.pdf",

  // Optional profile photo. Put a square image in "assets" and set the name,
  // or leave it as "" to show your initials instead.
  profileImage: "Photo.jpg",                        // e.g. "assets/profile.jpg"

  /* ------------------------------------------------------------ SOCIAL LINKS
     Supported icons: "github", "linkedin", "email", "website", "orcid",
     "twitter". Delete any line you don't need. */
  social: [
    { label: "GitHub",   url: "https://github.com/dice-apps",       icon: "github"   },
    { label: "LinkedIn", url: "www.linkedin.com/in/disanda",  icon: "linkedin" },
    { label: "Email",    url: "mailto:disanda63@gmail.com",         icon: "email"    },
  ],

  /* -------------------------------------------------------------------- ABOUT
     One or more short paragraphs. Add/remove lines as you like. */
  about: [
    "I'm a dynamic final year undergraduate student specializing in Electrical and Information Engineering, eager to apply my skills in innovative projects while gaining practical experience.",
    "I have a strong interest in Digital Electronics, FPGA Design, Embedded Systems Design, Robotics and Signal Processing. I have engaged in projects which are based on Digital Design using HDL, Embedded Systems and Robotics.",
    "With a solid foundation in problem solving, a collaborative mindset, and a passion for continuous learning, I strive to be a reliable team player and well rounded engineering professional.",
  ],

  /* ------------------------------------------------------------- HIGHLIGHTS
     The small stat cards under your intro. Keep them short. */
  highlights: [
    { value: "5+",  label: "Years of experience" },
    { value: "20+", label: "Boards & designs shipped" },
    { value: "10+", label: "FPGA / embedded projects" },
  ],

  /* ----------------------------------------------------------------- SKILLS
     Grouped skill chips. Add/remove groups and items freely. */
  skills: [
    { category: "FPGA / Digital Design", items: ["Verilog", "SystemVerilog", "Vivado"] },
    { category: "Embedded / Firmware",   items: ["C", "C++", "ARM Cortex-M", "Bare-metal", "I2C / SPI / UART"] },
    { category: "Hardware / PCB",        items: ["Altium", "KiCad", "Schematics"] },
    /*{ category: "Tech Skills",           items: ["Git", "Python", "ROS"] },*/
    { category: "Tools & Methods",       items: ["Git", "Python", "MATLAB", "ROS", "ns-3", "Linux"] },
  ],

  /* ------------------------------------------------------------- EXPERIENCE
     Your work history, newest first. */
  experience: [

    {
      role:     "Student Instructor",
      company:  "Faculty of Engineering, University of Ruhuna",
      period:   "JAN-2026 — Present",
      location: "Galle, Sri Lanka",
      points: [
        "Conducted laboratory sessions for the module EE2201-Fundamentals of Electroincs for the second semester students.",
        "Engaged with students in providing technical explanations and logical reasoning",
      ],
    },
    {
      role:     "Trainee Electronics Engineer",
      company:  "National Engineering Research & Development Centre (NERDC)",
      period:   "AUG-2025 — SEP-2025",
      location: "Ja-Ela, Sri Lanka",
      points: [
        "Designed a driver circuit for a buck converter as part of a Solar Battery Charging System with MPPT.",
        "Developed and validated circuit schematics and PCB layouts using industry standard EDA tools.",
        "Gained hands-on experience with STM32 micro-controllers, including peripheral configuration.",
        "Represented NERDC at the nationally exposed exhibition Industry Expo-2025 and demonstrated projects including the Elephant Fence Energizer",
      ],
    },
    {
      role:     "Trainee Telecommunications Engineer",
      company:  "Sri Lanka Telecom PLC",
      period:   "JUN-2024 — AUG-2024",
      location: "Negombo, Sri Lanka",
      points: [
        "Gained hands-on experience in telecommunication and networking.",
        "Had exposure to technologies such as fiber-optic communication, ADSL, and voice communication systems",
        "Involved in several sections: Maintenance, New-Connection, Networking, Circuit Repair Centre",
        "Engaged in a circuit design project to test repaired telephones which was capable to optimize the daily routine of the repair centre",
        "Had the opportunity to have direct involvement in customer and employee interactions",
      ],
    },
  ],

  /* --------------------------------------------------------------- PROJECTS
     Highlight your best work. "link" is optional (set to "" to hide it). */
  projects: [
    {
      name:        "FPGA-Based Digital Oscilloscope",
      description: "A real-time waveform capture system on an Artix-7 FPGA with a high-speed ADC front-end and USB streaming to a host PC.",
      tags:        ["VHDL", "Artix-7", "ADC", "USB"],
      link:        "https://github.com/yourusername/project",
    },
    {
      name:        "Low-Power IoT Sensor Node",
      description: "A battery-powered environmental sensor with sub-µA sleep current, LoRa connectivity and over-the-air firmware updates.",
      tags:        ["STM32", "LoRa", "Low Power", "OTA"],
      link:        "",
    },
    {
      name:        "Custom Motor Controller Board",
      description: "A 4-layer PCB driving a BLDC motor with FOC firmware, current sensing and CAN bus telemetry.",
      tags:        ["Altium", "BLDC", "FOC", "CAN"],
      link:        "",
    },
  ],

  /* -------------------------------------------------------------- EDUCATION */
  education: [
    {
      degree:      "B.Sc. in Electrical & Information Engineering",
      institution: "University of Ruhuna",
      period:      "2022 — 2026",
      detail:      "Second Class Honours (Upper Division). Final-year project: Multi-UAV Simulation Framework using Open Source Tools.",
    },

    {
      degree:      "General Certificate of Education - Advanced Level",
      institution: "St. Joseph Vaz College",
      period:      "2018 — 2020",
      detail:      "Year: 2020 , Combined Mathematics: A, Physics: B, Chemistry: A",
    },

    {
      degree:      "General Certificate of Education - Ordinary Level",
      institution: "Loyola College",
      period:      "2007 — 2017",
      detail:      "Year: 2017",
    },
  ],

  /* ---------------------------------------------------- CERTIFICATIONS (optional)
     Leave the list empty  ( certifications: [], )  to hide this section. */
  certifications: [
    { name: "Learning FPGA Development", issuer: "LinkedIn", year: "2025" },
    { name: "Learning Verilog for FPGA Development", issuer: "LinkedIn", year: "2025"},
    { name: "Git: Become an Expert in Git & GitHub", issuer: "Udemy", year: "2026"},
    
  ],

  /* ---------------------------------------------------------- VOLUNTEERING
     Shown on its own page (volunteering.html). Add/remove blocks freely.
     Leave the list empty  ( volunteering: [], )  to hide the whole page. */
  volunteering: [
    {
      role:         "STEM Workshop Mentor",
      organization: "Local Robotics Club",
      period:       "2022 — Present",
      location:     "City, Country",
      points: [
        "Teach school students the basics of electronics, Arduino and simple circuit design.",
        "Mentor a team preparing for regional robotics competitions.",
      ],
    },
    {
      role:         "Volunteer — Community Repair Café",
      organization: "Green Tech Initiative",
      period:       "2021 — 2022",
      location:     "City, Country",
      points: [
        "Diagnosed and repaired household electronics to reduce e-waste.",
        "Ran monthly sessions helping the public fix their own devices.",
      ],
    },
  ],

};

/* (Leave this line at the very bottom — it makes your details available to the page.) */
window.CONTENT = CONTENT;
