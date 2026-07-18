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
  name:     "Your Full Name",
  title:    "Embedded Systems & FPGA Engineer",
  tagline:  "I design reliable electronics, embedded firmware, and FPGA-based digital systems — from schematic to silicon-ready RTL.",
  location: "Your City, Country",
  email:    "your.email@example.com",
  phone:    "+00 000 000 0000",          // optional — set to "" to hide

  // Your CV file. Put your PDF in the "assets" folder and name it CV.pdf
  // (or change the name here to match your file).
  cvFile:   "assets/CV.pdf",

  // Optional profile photo. Put a square image in "assets" and set the name,
  // or leave it as "" to show your initials instead.
  profileImage: "",                        // e.g. "assets/profile.jpg"

  /* ------------------------------------------------------------ SOCIAL LINKS
     Supported icons: "github", "linkedin", "email", "website", "orcid",
     "twitter". Delete any line you don't need. */
  social: [
    { label: "GitHub",   url: "https://github.com/yourusername",       icon: "github"   },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername",  icon: "linkedin" },
    { label: "Email",    url: "mailto:your.email@example.com",         icon: "email"    },
  ],

  /* -------------------------------------------------------------------- ABOUT
     One or more short paragraphs. Add/remove lines as you like. */
  about: [
    "I'm an electronics and embedded systems engineer with a passion for building hardware that just works. My focus areas are FPGA/digital design (VHDL & Verilog), microcontroller firmware, and mixed-signal PCB design.",
    "I enjoy taking a project from a blank schematic all the way to a tested, manufacturable board — writing clean RTL, bring-up, debugging with a logic analyzer, and optimising for timing, power and cost.",
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
    { category: "FPGA / Digital Design", items: ["VHDL", "Verilog", "SystemVerilog", "Vivado", "Quartus", "Timing Closure", "AXI / Wishbone"] },
    { category: "Embedded / Firmware",   items: ["C", "C++", "ARM Cortex-M", "RTOS", "Bare-metal", "I2C / SPI / UART", "CAN"] },
    { category: "Hardware / PCB",        items: ["Altium", "KiCad", "Schematic Capture", "Signal Integrity", "Power Design", "DFM"] },
    { category: "Tools & Methods",       items: ["Git", "Python", "MATLAB", "Oscilloscope", "Logic Analyzer", "Linux"] },
  ],

  /* ------------------------------------------------------------- EXPERIENCE
     Your work history, newest first. */
  experience: [
    {
      role:     "Embedded Systems Engineer",
      company:  "Company Name",
      period:   "2023 — Present",
      location: "City, Country",
      points: [
        "Led the FPGA design for a real-time signal-processing module, achieving timing closure at 200 MHz.",
        "Developed bare-metal and RTOS firmware for ARM Cortex-M microcontrollers used in production devices.",
        "Designed and brought up multi-layer PCBs, reducing board cost by 18% through component optimisation.",
      ],
    },
    {
      role:     "Junior Electronics Engineer",
      company:  "Previous Company",
      period:   "2021 — 2023",
      location: "City, Country",
      points: [
        "Wrote Verilog RTL and testbenches for peripheral interface controllers.",
        "Supported hardware bring-up and debugging using oscilloscopes and logic analyzers.",
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
      degree:      "B.Sc. in Electronics & Communication Engineering",
      institution: "Your University",
      period:      "2017 — 2021",
      detail:      "First Class Honours. Final-year project: FPGA-accelerated image processing.",
    },
  ],

  /* ---------------------------------------------------- CERTIFICATIONS (optional)
     Leave the list empty  ( certifications: [], )  to hide this section. */
  certifications: [
    { name: "Certified LabVIEW Associate Developer", issuer: "NI", year: "2022" },
  ],

};

/* (Leave this line at the very bottom — it makes your details available to the page.) */
window.CONTENT = CONTENT;
