const projectsData = {
  1: {
    title: "Smart Healthcare IoT — Diabetes Management",
    type: "Final Year Design Project · Apr 2025 – Jun 2026",
    desc: "A comprehensive hardware-software pipeline designed for non-invasive glucose monitoring. By leveraging near-infrared (NIR) spectroscopy, this system eliminates the need for painful daily finger-pricks, making diabetes management pain-free and continuous. A neural network model runs prediction based on light absorption parameters, transmitting telemetry wirelessly to a custom mobile dashboard.",
    outcomes: [
      "Designed and calibrated an analog sensor circuit utilizing specific wavelengths (940nm-1050nm) to measure dermal blood-glucose absorption rates.",
      "Preprocessed absorption signals through discrete filtering to remove movement artifacts and pulse pressure fluctuations.",
      "Trained a TensorFlow-based Multi-Layer Perceptron (MLP) model, achieving 92% correlation (R²) with clinical capillary blood glucose meters.",
      "Programmed an ESP32 in Embedded C++ to handle sensor ADC sampling, baseline calibration, and Bluetooth Low Energy (BLE) transmissions.",
      "Created a cross-platform mobile application providing real-time data streaming, trend forecasting, and high/low threshold notifications."
    ],
    tech: ["ESP32", "IR Spectroscopy", "Python", "TensorFlow", "Signal Processing", "BLE/WiFi", "Flutter"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="50" width="80" height="100" rx="6" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="50" y="105" fill="var(--text)" font-family="monospace" font-size="10" text-anchor="middle">ESP32 MCU</text>
        <text x="50" y="125" fill="var(--muted)" font-family="monospace" font-size="8" text-anchor="middle">BLE & WiFi</text>
        
        <path d="M 90,80 L 140,80" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="115" y="70" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">ADC</text>
        
        <rect x="140" y="60" width="50" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="165" y="85" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">NIR Amp</text>
        
        <line x1="165" y1="100" x2="165" y2="130" stroke="var(--gold)" stroke-width="1.5"/>
        <circle cx="165" cy="135" r="5" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="165" y="155" fill="var(--muted)" font-family="monospace" font-size="8" text-anchor="middle">IR Diode</text>
        
        <line x1="90" y1="120" x2="210" y2="120" stroke="var(--accent2)" stroke-width="2" stroke-dasharray="4"/>
        <rect x="210" y="90" width="80" height="60" rx="6" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="250" y="120" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">Cloud / ML</text>
        <text x="250" y="135" fill="var(--accent2)" font-family="monospace" font-size="7" text-anchor="middle">TF Inference</text>
      </svg>
    `
  },
  2: {
    title: "Real-Time Hand Gesture Recognition",
    type: "ML / Computer Vision Project",
    desc: "An intelligent Human-Computer Interaction (HCI) interface that translates hand gestures into OS-level commands. By coupling OpenCV frame analysis with MediaPipe's hand landmark pipeline, the project extracts 2D joint coordinate matrices, feeding them into a lightweight classification model. Operating at 30+ frames per second on CPU, the system allows touchless control of presentations, media players, and accessibility software.",
    outcomes: [
      "Extracted 21 hand-joint coordinate maps in real-time using MediaPipe framework from standard webcam video.",
      "Engineered relative distance and angular translation features to make hand posture recognition independent of camera distance and scale.",
      "Trained a Random Forest classifier in Scikit-learn, yielding 98.7% test accuracy across 10 custom gesture classes.",
      "Optimized pipeline latency, achieving sub-15ms inference speeds without requiring dedicated GPU hardware.",
      "Integrated OS actions mapping through PyAutoGUI, enabling gestures to control slide navigation and system volume."
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "Scikit-learn", "Random Forest", "HCI"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="55" y="105" fill="var(--text)" font-family="monospace" font-size="10" text-anchor="middle">Webcam</text>
        
        <line x1="90" y1="100" x2="130" y2="100" stroke="var(--accent)" stroke-width="2"/>
        <polygon points="130,95 140,100 130,105" fill="var(--accent)"/>
        
        <rect x="140" y="50" width="80" height="100" rx="6" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="180" y="90" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">MediaPipe</text>
        <text x="180" y="110" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">Random Forest</text>
        
        <line x1="220" y1="100" x2="250" y2="100" stroke="var(--accent2)" stroke-width="2"/>
        <circle cx="270" cy="100" r="20" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="270" y="104" fill="var(--gold)" font-family="monospace" font-size="9" text-anchor="middle">OS</text>
      </svg>
    `
  },
  3: {
    title: "MathWeaver — Voice-Based Pedagogy Agent",
    type: "ML / NLP / Ed-Tech Project",
    desc: "An innovative voice-driven tutoring platform tailored for children in multilingual environments. The agent processes spoken mathematical queries in Roman Urdu, translates or resolves them to mathematical operations, and answers with synthesized spoken Roman Urdu speech. It bridges the literacy and accessibility gap in regions where traditional written interfaces present barriers.",
    outcomes: [
      "Configured and fine-tuned an Automatic Speech Recognition (ASR) framework to transcribe phonetics of Roman Urdu speech.",
      "Developed a rule-based NLP mapping engine to translate conversational phrases into computational algebraic queries.",
      "Integrated a Text-to-Speech (TTS) engine configured with customized prosody and phonetic libraries for local linguistic accents.",
      "Tested the end-to-end conversational loops with student test groups, showing a 40% increase in comprehension speed for basic mathematics.",
      "Optimized speech buffering to reduce audio pipeline round-trip latency to under 1.2 seconds."
    ],
    tech: ["Python", "ASR", "TTS", "NLP", "Roman Urdu", "Educational Tech"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="100" r="30" fill="none" stroke="var(--accent)" stroke-width="2"/>
        <text x="50" y="104" fill="var(--text)" font-family="monospace" font-size="10" text-anchor="middle">User Audio</text>
        
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        
        <rect x="120" y="60" width="70" height="80" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="155" y="90" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">ASR Engine</text>
        <text x="155" y="110" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">NLP Parse</text>
        
        <line x1="190" y1="100" x2="230" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        
        <circle cx="260" cy="100" r="30" fill="none" stroke="var(--gold)" stroke-width="2"/>
        <text x="260" y="104" fill="var(--text)" font-family="monospace" font-size="10" text-anchor="middle">TTS Out</text>
      </svg>
    `
  },
  4: {
    title: "16-bit RISC-V Processor",
    type: "Electronics / Digital Design Project",
    desc: "A fully synthesized hardware design implementation of a 16-bit RISC-V Instruction Set Architecture (ISA) variant. Built entirely in Verilog, the processor incorporates execution phases including fetch, decode, execute, memory access, and writeback, proving digital design competency at the Register-Transfer Level (RTL).",
    outcomes: [
      "Designed a custom 16-bit RISC-V instruction format optimized for memory and datapath constraints.",
      "Implemented a comprehensive Arithmetic Logic Unit (ALU) supporting addition, subtraction, logical shifts, and branch evaluations.",
      "Created a robust Control Unit capable of orchestrating multi-cycle instructions and branch target address computation.",
      "Wrote behavioral and structural testbenches to verify logical operations, register routing, and program counter increments.",
      "Simulated and analyzed timing, critical path delays, and gate counts using modern HDL simulation tools."
    ],
    tech: ["Verilog", "RISC-V", "HDL", "Digital Logic Design", "Simulation"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="50" width="70" height="40" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="75" fill="var(--accent)" font-family="monospace" font-size="9" text-anchor="middle">PC / ROM</text>
        
        <line x1="45" y1="90" x2="45" y2="110" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="10" y="110" width="70" height="40" rx="4" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <text x="45" y="135" fill="var(--accent2)" font-family="monospace" font-size="9" text-anchor="middle">Decode</text>
        
        <path d="M 80,130 L 140,130" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <polygon points="140,125 150,130 140,135" fill="var(--accent2)"/>
        
        <rect x="150" y="105" width="80" height="50" rx="4" fill="none" stroke="var(--text)" stroke-width="2"/>
        <text x="190" y="135" fill="var(--text)" font-family="monospace" font-size="10" text-anchor="middle">ALU Core</text>
        
        <path d="M 190,105 L 190,70 L 80,70" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="3"/>
        <text x="135" y="60" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Feedback</text>
      </svg>
    `
  },
  5: {
    title: "Three-Phase Fault Detection",
    type: "ML / Power Systems Project",
    desc: "An intelligent diagnostics tool designed for automated anomaly classification in electrical distribution lines. By integrating machine learning models with simulated three-phase grid data, the system instantly identifies the nature of grid faults (e.g., line-to-line, double-line-to-ground, single-phase), accelerating restoration actions and improving power grid resilience.",
    outcomes: [
      "Simulated various fault conditions on a multi-bus power system model in MATLAB/Simulink to harvest current and voltage waveforms.",
      "Extracted time-domain statistical indicators and frequency-domain spectral features using Fast Fourier Transform (FFT).",
      "Trained a Support Vector Machine (SVM) and Multi-Layer Perceptron classifier to categorize fault patterns at 96.5% accuracy.",
      "Designed a real-time fault detection threshold framework using sliding-window standard deviation indices.",
      "Constructed predictive maintenance alerts based on early voltage drop signatures prior to complete circuit isolation."
    ],
    tech: ["Python", "Scikit-learn", "MATLAB", "Simulink", "Power Systems", "Grid Diagnostics"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="60" x2="160" y2="60" stroke="var(--accent)" stroke-width="2"/>
        <line x1="20" y1="80" x2="160" y2="80" stroke="var(--accent)" stroke-width="2"/>
        <line x1="20" y1="100" x2="160" y2="100" stroke="var(--accent)" stroke-width="2"/>
        <text x="40" y="50" fill="var(--accent)" font-family="monospace" font-size="7">3-Phase Line</text>
        
        <rect x="80" y="120" width="80" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="120" y="145" fill="var(--gold)" font-family="monospace" font-size="9" text-anchor="middle">Sensors / FFT</text>
        <path d="M 120,100 L 120,120" stroke="var(--gold)" stroke-width="1.5"/>
        
        <line x1="160" y1="140" x2="190" y2="140" stroke="var(--gold)" stroke-width="1.5"/>
        <rect x="190" y="110" width="90" height="60" rx="6" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="235" y="140" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">SVM Model</text>
        <text x="235" y="155" fill="var(--accent2)" font-family="monospace" font-size="7" text-anchor="middle">Fault Class</text>
      </svg>
    `
  },
  6: {
    title: "FM Transmitter",
    type: "RF / Analog Electronics Project",
    desc: "Designed and implemented a high-frequency FM transmitter using a PN2222 transistor and LC tank circuit. The system modulates audio inputs and transmits stable radio frequency signals across the standard commercial 88–108 MHz VHF broadcast band.",
    outcomes: [
      "Designed and simulated a high-frequency Colpitts RF oscillator using a PN2222 transistor in Proteus software.",
      "Calculated LC tank values (inductance and capacitance) to achieve stable frequency tuning between 88 MHz and 108 MHz.",
      "Designed and etched a single-sided Printed Circuit Board (PCB) layout, ensuring optimized traces to reduce parasitic capacitance.",
      "Verified clear transmission across the full FM broadcast band (88–108 MHz) over a 50-meter test range."
    ],
    tech: ["Analog Design", "RF Electronics", "Colpitts Oscillator", "Proteus", "PCB Etching", "Tuning Circuits"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="120" r="15" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="40" y="124" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">MIC</text>
        
        <line x1="55" y1="120" x2="90" y2="120" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="90" y="95" width="60" height="50" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="120" y="125" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">Pre-Amp</text>
        
        <line x1="150" y1="120" x2="185" y2="120" stroke="var(--accent2)" stroke-width="1.5"/>
        
        <rect x="185" y="95" width="60" height="50" rx="4" fill="none" stroke="var(--gold)" stroke-width="2"/>
        <text x="215" y="125" fill="var(--gold)" font-family="monospace" font-size="9" text-anchor="middle">LC Tank</text>
        
        <line x1="215" y1="95" x2="215" y2="60" stroke="var(--gold)" stroke-width="1.5"/>
        <line x1="215" y1="60" x2="245" y2="60" stroke="var(--text)" stroke-width="1.5"/>
        <path d="M 245,60 L 255,45 L 265,60 L 255,45 L 255,75" fill="none" stroke="var(--text)" stroke-width="1.5"/>
        <text x="270" y="64" fill="var(--muted)" font-family="monospace" font-size="8">ANT</text>
      </svg>
    `
  },
  7: {
    title: "Multi-rate Filter Bank System",
    type: "DSP / Signal Processing Project",
    desc: "Built a multi-rate analysis and synthesis filter bank system in MATLAB for audio and image compression, splitting signals into multiple sub-bands to optimize storage, fidelity, and frequency-domain bandwidth occupancy.",
    outcomes: [
      "Designed and simulated a multi-rate analysis and synthesis filter bank in MATLAB for signal decomposition.",
      "Implemented decimation and interpolation stages to adjust signal sampling rates without introducing aliasing.",
      "Optimized FIR filter coefficients to ensure perfect reconstruction (PR) properties with minimal reconstruction error.",
      "Analyzed sub-band energy distributions to enable adaptive quantization and compression of high-frequency sub-bands."
    ],
    tech: ["MATLAB", "DSP", "Filter Design", "Signal Compression"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="60" width="70" height="30" rx="3" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="78" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">H0(z) Low</text>
        <rect x="10" y="110" width="70" height="30" rx="3" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <text x="45" y="128" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">H1(z) High</text>
        
        <line x1="80" y1="75" x2="110" y2="75" stroke="var(--accent)" stroke-width="1.5"/>
        <circle cx="120" cy="75" r="10" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="120" y="79" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">↓2</text>
        
        <line x1="80" y1="125" x2="110" y2="125" stroke="var(--accent2)" stroke-width="1.5"/>
        <circle cx="120" cy="125" r="10" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <text x="120" y="129" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">↓2</text>
        
        <path d="M 130,75 L 180,75 M 130,125 L 180,125" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="3"/>
        <rect x="180" y="75" width="110" height="50" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="235" y="105" fill="var(--gold)" font-family="monospace" font-size="9" text-anchor="middle">Perfect Recon</text>
      </svg>
    `
  },
  8: {
    title: "Audio Amplifier",
    type: "Analog Electronics Project",
    desc: "Designed and built an adjustable-gain audio amplifier using discrete transistor and operational amplifier stages. The circuit boosts weak microphone signals and drives dynamic speakers with minimal total harmonic distortion (THD).",
    outcomes: [
      "Designed a common-emitter transistor input stage to pre-amplify low-level audio signals from dynamic microphones.",
      "Implemented a push-pull Class AB power output stage to drive an 8-ohm speaker load efficiently.",
      "Integrated negative feedback networks to stabilize closed-loop voltage gain and expand signal bandwidth.",
      "Assembled and verified circuit performance on a breadboard, measuring DC operating points and frequency response curve."
    ],
    tech: ["Analog Design", "Transistors", "Op-Amps", "Proteus", "Power Amplifiers"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="55" y="105" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">Pre-Amp</text>
        
        <path d="M 90,100 L 140,100" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <polygon points="150,75 150,125 190,100" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="162" y="104" fill="var(--text)" font-family="monospace" font-size="9">OpAmp</text>
        
        <path d="M 190,100 L 230,100" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <circle cx="250" cy="100" r="20" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="250" y="104" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">SPKR</text>
        
        <path d="M 210,100 L 210,150 L 115,150 L 115,120" fill="none" stroke="var(--gold)" stroke-width="1.2" stroke-dasharray="3"/>
        <text x="162" y="145" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Feedback</text>
      </svg>
    `
  },
  9: {
    title: "Feedback-Controlled Servo System",
    type: "Arduino / Embedded Systems Project",
    desc: "An Arduino-based mechanical positioning and target-tracking system. Incorporates an ultrasonic distance sensor and a servo motor configured with a closed-loop Proportional-Integral-Derivative (PID) controller to track moving objects smoothly without overshoot.",
    outcomes: [
      "Designed a closed-loop controller on an Arduino microcontroller to translate ultrasonic distance inputs into mechanical angles.",
      "Implemented a Proportional-Integral-Derivative (PID) algorithm in C++ to achieve smooth, overshoot-free servo positioning.",
      "Filtered noisy ADC range readings using moving average algorithms to prevent mechanical jitter.",
      "Calibrated transient response times to stabilize target tracking under sudden distance fluctuations."
    ],
    tech: ["Arduino", "Ultrasonic Sensor", "Servo", "C++", "PID Control", "Feedback Systems"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="70" height="50" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="95" fill="var(--accent)" font-family="monospace" font-size="9" text-anchor="middle">Ultrasonic</text>
        
        <path d="M 80,95 L 120,95" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <circle cx="130" cy="95" r="10" fill="none" stroke="var(--text)" stroke-width="1.5"/>
        <text x="130" y="99" fill="var(--text)" font-family="monospace" font-size="12" text-anchor="middle">±</text>
        
        <line x1="140" y1="95" x2="175" y2="95" stroke="var(--text)" stroke-width="1.5"/>
        <rect x="175" y="70" width="50" height="50" rx="4" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <text x="200" y="100" fill="var(--accent2)" font-family="monospace" font-size="9" text-anchor="middle">PID C++</text>
        
        <line x1="225" y1="95" x2="250" y2="95" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="250" y="80" width="40" height="30" rx="2" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="270" y="99" fill="var(--gold)" font-family="monospace" font-size="9" text-anchor="middle">Servo</text>
        
        <path d="M 270,110 L 270,140 L 130,140 L 130,105" fill="none" stroke="var(--gold)" stroke-width="1.2" stroke-dasharray="4"/>
        <text x="200" y="135" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Feedback loop</text>
      </svg>
    `
  },
  10: {
    title: "Smart Attendance System",
    type: "Digital Electronics / Hardware Automation",
    desc: "Developed an automated attendance scanning system designed purely from discrete digital ICs (logic gates, counters, decoders, and registers). Operates without any microcontroller unit, emphasizing basic digital logic and hardware optimization.",
    outcomes: [
      "Constructed a hardware logic block using 74-series logic gate ICs to handle sequential seat-occupation scanning.",
      "Designed a debounced switch matrix network to register student inputs without multiple triggering.",
      "Implemented binary ripple counters and BCD-to-7-segment decoders to display attendance tallies on LED arrays.",
      "Simulated the gate-level timing diagram in Proteus to identify and eliminate race conditions in the registers."
    ],
    tech: ["Digital ICs", "Logic Design", "74-Series Gates", "Debouncing", "Proteus"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="60" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="40" y="100" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">Switches</text>
        <text x="40" y="115" fill="var(--accent)" font-family="monospace" font-size="7" text-anchor="middle">Debounce</text>
        
        <line x1="70" y1="100" x2="110" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="110" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="1.5"/>
        <text x="145" y="100" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">74HC191</text>
        <text x="145" y="115" fill="var(--accent2)" font-family="monospace" font-size="7" text-anchor="middle">Counter</text>
        
        <line x1="180" y1="100" x2="220" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="220" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="255" y="100" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">74HC47</text>
        <text x="255" y="115" fill="var(--gold)" font-family="monospace" font-size="7" text-anchor="middle">Decoder</text>
      </svg>
    `
  },
  11: {
    title: "Electronic Voting Machine",
    type: "ATMEGA32 / Embedded Systems Project",
    desc: "A secure, micro-controlled voting terminal built around the ATMEGA32 architecture. Implements tamper-resistant voting keys, multi-voter login locks, and secure EPROM routines to maintain data validation.",
    outcomes: [
      "Programmed an ATMEGA32 microcontroller in Embedded C to control input keys and 16x2 LCD status screens.",
      "Implemented non-volatile EEPROM storage routines to preserve vote tallies during sudden power disruptions.",
      "Developed a robust anti-tampering state machine to lockout concurrent keypresses and log voter validation states.",
      "Verified logic integrity across multiple test election cycles, maintaining 100% tally accuracy without voter collusion."
    ],
    tech: ["ATMEGA32", "Arduino IDE", "Embedded C", "EEPROM", "State Machines"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="55" y="105" fill="var(--accent)" font-family="monospace" font-size="9" text-anchor="middle">Keypad</text>
        
        <line x1="90" y1="100" x2="130" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="130" y="60" width="80" height="80" rx="6" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="170" y="100" fill="var(--text)" font-family="monospace" font-size="10" text-anchor="middle">ATmega32</text>
        <text x="170" y="115" fill="var(--accent2)" font-family="monospace" font-size="7" text-anchor="middle">Control Core</text>
        
        <path d="M 210,90 L 240,90" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="240" y="75" width="40" height="30" rx="2" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="260" y="93" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">EEPROM</text>
        
        <path d="M 170,140 L 170,170 L 230,170" fill="none" stroke="var(--text)" stroke-width="1.5"/>
        <rect x="230" y="155" width="50" height="30" rx="2" fill="none" stroke="var(--text)" stroke-width="1.5"/>
        <text x="255" y="173" fill="var(--muted)" font-family="monospace" font-size="8" text-anchor="middle">LCD</text>
      </svg>
    `
  },
  12: {
    title: "Air Quality Monitoring System",
    type: "Embedded Systems / Environmental Sensing",
    desc: "A real-time environmental monitoring node. Leverages gas absorption sensors and an embedded C++ framework to read pollutant parameters (like CO2, CO, and smoke particles), triggering visual alarms if concentrations cross hazardous thresholds.",
    outcomes: [
      "Interfaced analog gas sensors (MQ-135/MQ-2) with microcontroller ADC channels for environmental monitoring.",
      "Developed C++ code to convert raw sensor voltage outputs into PPM (parts per million) concentration curves.",
      "Programmed a threshold-based interrupt routine to trigger immediate auditory and visual alert sirens.",
      "Designed low-power sleep modes to extend battery-powered operation during offline deployment windows."
    ],
    tech: ["C++", "MQ Sensors", "Embedded C", "ADC Calibration", "Low Power Modes"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="55" y="100" fill="var(--accent)" font-family="monospace" font-size="9" text-anchor="middle">MQ Gas</text>
        <text x="55" y="115" fill="var(--accent)" font-family="monospace" font-size="7" text-anchor="middle">Sensor</text>
        
        <line x1="90" y1="100" x2="130" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="130" y="60" width="70" height="80" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="165" y="100" fill="var(--text)" font-family="monospace" font-size="9" text-anchor="middle">MCU ADC</text>
        <text x="165" y="115" fill="var(--accent2)" font-family="monospace" font-size="7" text-anchor="middle">Logic</text>
        
        <line x1="200" y1="100" x2="235" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <circle cx="250" cy="100" r="15" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="250" y="104" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Alarm</text>
      </svg>
    `
  },
  13: {
    title: "Variable Power Supply & Water Level Indicator",
    type: "Power Electronics / Hardware Design",
    desc: "A dual-function bench power supply and liquid level telemetry circuit. Combines a linear AC-to-adjustable-DC voltage converter with a multi-transistor switch-level sensor system.",
    outcomes: [
      "Designed a linear voltage regulator circuit using an LM317 IC, delivering adjustable DC outputs from 1.2V to 15V.",
      "Integrated step-down AC transformer, bridge rectifier, and filter capacitors to generate low-ripple DC rails.",
      "Constructed a multi-level water sensor using transistor switches (BC547) acting as water-contact detectors.",
      "Designed a custom display panel with LED indicators mapping empty, half, and full water levels."
    ],
    tech: ["Power Electronics", "LM317 Regulation", "Analog Design", "Transistor Switches", "Sensors"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="60" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="40" y="100" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">Transformer</text>
        <text x="40" y="112" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">& Rectifier</text>
        
        <line x1="70" y1="100" x2="110" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="110" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="145" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">LM317</text>
        <text x="145" y="112" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">Regulator</text>
        
        <line x1="180" y1="100" x2="210" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="210" y="80" width="80" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="250" y="102" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Adj. DC Out</text>
      </svg>
    `
  },
  14: {
    title: "YouTube Clone",
    type: "React & Frontend Web Development",
    desc: "A fully responsive video streaming platform replication. Built with React and Material UI, the app connects to a video API, enabling search functions, video playback, and category-based recommendations.",
    outcomes: [
      "Developed a responsive single-page video streaming frontend using React functional components and hooks.",
      "Integrated a third-party YouTube v3 API via Axios to fetch video lists, channel details, and comments.",
      "Built customizable UI components with Material UI (MUI) components, supporting dark and light themes.",
      "Implemented dynamic search query parsing and live video recommendations sidebar feeds."
    ],
    tech: ["React", "Material UI", "Axios", "REST API", "Responsive CSS", "React Player"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">React UI</text>
        <text x="45" y="112" fill="var(--accent)" font-family="monospace" font-size="8" text-anchor="middle">(Material UI)</text>
        
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="120" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="155" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Axios</text>
        <text x="155" y="112" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">Fetch Broker</text>
        
        <line x1="190" y1="100" x2="220" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="220" y="80" width="70" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="255" y="102" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">YouTube API</text>
      </svg>
    `
  },
  15: {
    title: "E-commerce Storefront",
    type: "React Web Development",
    desc: "A modern e-commerce web application with a dynamic product catalog, category filters, and a real-time shopping cart management system.",
    outcomes: [
      "Created a React shopping cart system utilizing state context to track additions, removals, and price calculations.",
      "Designed a grid-based responsive product catalog fetching items from a mock product API.",
      "Implemented price-range filters, alphabetical sorting, and category switches for smooth shopping navigation.",
      "Constructed custom styling using CSS Flexbox/Grid for cross-device mobile compatibility."
    ],
    tech: ["React", "State Context", "CSS Grid", "Dynamic Filtering", "State Management"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Catalog Grid</text>
        
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="120" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="155" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Cart Context</text>
        <text x="155" y="112" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">React State</text>
        
        <line x1="190" y1="100" x2="220" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="220" y="80" width="70" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="255" y="102" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Checkout API</text>
      </svg>
    `
  },
  16: {
    title: "AI Support Chatbot",
    type: "Full-Stack Web Dev & AI Integration",
    desc: "An interactive support chatbot application utilizing host-server communication and LLM API endpoints to deliver real-time user assistance.",
    outcomes: [
      "Built an interactive client-side chat interface with message bubbles, typing indicators, and user avatars.",
      "Configured a Node.js/Express server to securely host backend logic and proxy AI model requests.",
      "Integrated a LLM API to process user questions and reply with context-aware responses.",
      "Implemented session-based chat history persistence using client sessionStorage cache."
    ],
    tech: ["Node.js", "Express", "LLM API", "JavaScript", "Fetch API", "sessionStorage"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Chat UI</text>
        
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="120" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="155" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Express Server</text>
        <text x="155" y="112" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">Proxy Node</text>
        
        <line x1="190" y1="100" x2="220" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="220" y="80" width="70" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="255" y="102" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">AI API</text>
      </svg>
    `
  },
  17: {
    title: "Jobs Finder Portal",
    type: "React & Vite Frontend Development",
    desc: "A high-performance jobs directory app built with React, Vite, and HMR (Hot Module Replacement) for instant UI updates, utilizing ESLint and SWC compiler.",
    outcomes: [
      "Configured a high-efficiency development pipeline using Vite, enabling sub-second Hot Module Replacement (HMR) for responsive editing.",
      "Designed a directory dashboard displaying job listings, location filtering, and remote/on-site switches.",
      "Enforced strict linting rules and code formatting with ESLint to maintain enterprise-level code quality.",
      "Optimized bundle size utilizing SWC compile optimizations for fast initial page load times."
    ],
    tech: ["React", "Vite", "ESLint", "SWC Compiler", "Babel", "Responsive Design"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Vite Server</text>
        
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="120" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="155" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">React HMR</text>
        <text x="155" y="112" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">Hot Swap</text>
        
        <line x1="190" y1="100" x2="220" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="220" y="80" width="70" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="255" y="102" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Production</text>
      </svg>
    `
  },
  18: {
    title: "Business Model Canvas Poster",
    type: "Frontend Web Development",
    desc: "A fully responsive HTML/CSS visual dashboard representing the 9 key building blocks of the Business Model Canvas structure.",
    outcomes: [
      "Designed a CSS Grid layout aligning the 9 distinct blocks of the Business Model Canvas (Key Partners, Channels, Costs, etc.).",
      "Implemented responsive media queries enabling the poster to render as an interactive column list on mobile phones.",
      "Added subtle hover animations and tooltip expansions detailing the business definition of each block.",
      "Configured dark-mode support using CSS custom variables matching user system preferences."
    ],
    tech: ["HTML5", "Vanilla CSS", "CSS Grid", "Responsive Design", "Tooltips"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="50" width="260" height="100" rx="6" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <line x1="150" y1="50" x2="150" y2="150" stroke="var(--accent)" stroke-width="1"/>
        <line x1="85" y1="50" x2="85" y2="150" stroke="var(--accent)" stroke-width="1"/>
        <line x1="215" y1="50" x2="215" y2="150" stroke="var(--accent)" stroke-width="1"/>
        <text x="150" y="105" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">9 BMC Elements Grid</text>
      </svg>
    `
  },
  19: {
    title: "Friskay / Kitty Food",
    type: "Interactive Frontend Web Development",
    desc: "An interactive, visually appealing and animated cat food product portal showcasing layouts, product categories, and dynamic ingredient calculators.",
    outcomes: [
      "Built an interactive nutritional calculator dynamically displaying cat food portion distributions based on feline weight.",
      "Engineered fluid CSS parallax scrolling elements and hover effects for a premium product marketing experience.",
      "Created responsive navigation menus with custom hamburger toggles and interactive sliding galleries.",
      "Structured semantic HTML5 components ensuring accessibility standards (a11y) are met."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Parallax Scroll", "Animations", "Nutritional Calc"],
    schematic: `
      <svg class="schematic-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>
        <text x="45" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Product Portal</text>
        
        <line x1="80" y1="100" x2="120" y2="100" stroke="var(--accent)" stroke-width="1.5"/>
        <rect x="120" y="70" width="70" height="60" rx="4" fill="none" stroke="var(--accent2)" stroke-width="2"/>
        <text x="155" y="100" fill="var(--text)" font-family="monospace" font-size="8" text-anchor="middle">Feline Calc</text>
        <text x="155" y="112" fill="var(--accent2)" font-family="monospace" font-size="8" text-anchor="middle">JS Controller</text>
        
        <line x1="190" y1="100" x2="220" y2="100" stroke="var(--accent2)" stroke-width="1.5"/>
        <rect x="220" y="80" width="70" height="40" rx="4" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
        <text x="255" y="102" fill="var(--gold)" font-family="monospace" font-size="8" text-anchor="middle">Dynamic SVG</text>
      </svg>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. THEME SWITCHING (DARK / LIGHT MODE)
  // ==========================================
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? '🌙' : '⚡';
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.textContent = newTheme === 'light' ? '🌙' : '⚡';
    });
  }

  // ==========================================
  // 2. NAVIGATION SCROLL BACKGROUND & HAMBURGER
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scroll-scrolled');
      } else {
        navbar.classList.remove('scroll-scrolled');
      }
    });
  }
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    
    // Close menu when link clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ==========================================
  // 2.5 ACTIVE NAV LINK HIGHLIGHTING & SMOOTH SCROLLING
  // ==========================================
  const updateActiveNavLink = () => {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    const navAnchors = document.querySelectorAll('.nav-links a');
    
    navAnchors.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const isHomeLink = href === 'index.html';
      const isAboutLink = href.includes('about.html');
      const isFypLink = href.includes('fyp.html');
      const isExperienceLink = href.includes('experience.html');
      const isAcademicsLink = href.includes('academics.html');
      const isSkillsLink = href.includes('skills.html');
      const isCertificatesLink = href.includes('certificates.html');
      const isAchievementsLink = href.includes('achievements.html');
      const isProjectsLink = href.includes('projects.html');
      const isContactLink = href.includes('contact.html');
      
      let isActive = false;
      
      if (currentPath.includes('projects.html')) {
        isActive = isProjectsLink;
      } else if (currentPath.includes('contact.html')) {
        isActive = isContactLink;
      } else if (currentPath.includes('about.html')) {
        isActive = isAboutLink;
      } else if (currentPath.includes('fyp.html')) {
        isActive = isFypLink;
      } else if (currentPath.includes('experience.html')) {
        isActive = isExperienceLink;
      } else if (currentPath.includes('academics.html')) {
        isActive = isAcademicsLink;
      } else if (currentPath.includes('skills.html')) {
        isActive = isSkillsLink;
      } else if (currentPath.includes('certificates.html')) {
        isActive = isCertificatesLink;
      } else if (currentPath.includes('achievements.html')) {
        isActive = isAchievementsLink;
      } else {
        // We are on index.html or root
        isActive = isHomeLink;
      }
      
      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  updateActiveNavLink();
  window.addEventListener('hashchange', updateActiveNavLink);

  // Smooth scroll for hash links on the same page
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const currentPath = window.location.pathname;
      const isHome = currentPath === '/' || currentPath.endsWith('/') || currentPath.endsWith('index.html');
      const href = this.getAttribute('href');
      
      if (isHome && href.includes('#')) {
        const hash = href.split('#')[1];
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          history.pushState(null, null, `#${hash}`);
          updateActiveNavLink();
        }
      }
    });
  });

  // ==========================================
  // 3. CUSTOM CURSOR TRAILING EFFECT
  // ==========================================
  const cursor = document.getElementById('customCursor');
  if (cursor) {
    let cursorX = -100;
    let cursorY = -100;
    let targetX = -100;
    let targetY = -100;
    
    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });
    
    const updateCursor = () => {
      cursorX += (targetX - cursorX) * 0.15;
      cursorY += (targetY - cursorY) * 0.15;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(updateCursor);
    };
    updateCursor();
    
    const hoverables = document.querySelectorAll('a, button, input, textarea, .filter-btn, .btn-more');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // ==========================================
  // 4. CANVAS INTERACTIVE DSP WAVE ANIMATION
  // ==========================================
  const canvas = document.getElementById('waveCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let width = canvas.width = canvas.offsetWidth;
      let height = canvas.height = canvas.offsetHeight;
      
      window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      });
      
      let phase = 0;
      let frequencyScale = 1;
      let amplitudeScale = 1;
      
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
          const relativeX = e.clientX / window.innerWidth;
          const relativeY = e.clientY / window.innerHeight;
          frequencyScale = 0.5 + relativeX * 2.0;
          amplitudeScale = 0.3 + (1.0 - relativeY) * 1.4;
        });
      }
      
      const drawWave = () => {
        ctx.clearRect(0, 0, width, height);
        const colorAccent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        const colorAccent2 = getComputedStyle(document.documentElement).getPropertyValue('--accent2').trim();
        
        ctx.lineWidth = 2.5;
        
        // Wave 1
        ctx.beginPath();
        ctx.strokeStyle = colorAccent2;
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.005 * frequencyScale + phase) * 45 * amplitudeScale;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Wave 2
        ctx.beginPath();
        ctx.strokeStyle = colorAccent;
        ctx.lineWidth = 1.5;
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.cos(x * 0.012 * frequencyScale - phase * 1.5) * 20 * amplitudeScale + 
                    Math.sin(x * 0.003 * frequencyScale + phase) * 30 * amplitudeScale;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        phase += 0.015;
        requestAnimationFrame(drawWave);
      };
      drawWave();
    }
  }

  // ==========================================
  // 5. ESP32 INTERACTIVE TERMINAL SIMULATOR
  // ==========================================
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');
  
  if (terminalInput && terminalBody) {
    const addTerminalLine = (text, className = '') => {
      const line = document.createElement('div');
      line.className = `terminal-line ${className}`;
      line.innerHTML = text;
      terminalBody.appendChild(line);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    };
    
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        terminalInput.value = '';
        
        addTerminalLine(`<span class="t-prompt">SR-ESP32 ~ $</span> ${command}`);
        if (!command) return;
        
        setTimeout(() => {
          switch (command) {
            case 'help':
              addTerminalLine('Available commands:<br>' +
                '  <strong>status</strong>   - Check current ESP32 device status and health metrics.<br>' +
                '  <strong>sensors</strong>  - Show live streaming ADC data from inputs.<br>' +
                '  <strong>run-ml</strong>   - Execute glucose/gesture prediction model inference.<br>' +
                '  <strong>sysinfo</strong>  - Show microarchitecture and hardware specifications.<br>' +
                '  <strong>clear</strong>    - Clear the command logs window.', 't-output');
              break;
              
            case 'status':
              addTerminalLine('Gathering status metrics... Done.', 't-system');
              const rssi = -45 - Math.floor(Math.random() * 15);
              const heap = 180 + Math.floor(Math.random() * 20);
              addTerminalLine(`DEVICE_NAME: nust-seecs-node-04<br>` +
                `WIFI_STATUS: Connected (RSSI: <span class="t-green">${rssi} dBm</span>)<br>` +
                `CPU_TEMP:    <span class="t-amber">${(40 + Math.random()*5).toFixed(1)}°C</span><br>` +
                `SYS_UPTIME:  82410 seconds (Active)<br>` +
                `FREE_HEAP:   <span class="t-green">${heap} KB</span>`, 't-output');
              break;
              
            case 'sensors':
              addTerminalLine('Initiating sensor streaming (2s telemetry frame)...', 't-system');
              let samples = 0;
              const interval = setInterval(() => {
                if (samples >= 4) {
                  clearInterval(interval);
                  addTerminalLine('Telemetry stream suspended.', 't-system');
                  return;
                }
                const glucose_ir = (0.72 + Math.random()*0.1).toFixed(4);
                const battery = (3.78 + Math.random()*0.1).toFixed(2);
                addTerminalLine(`[FRAME_${samples}] NIR_ABS: <span class="t-green">${glucose_ir}</span> | Batt: ${battery}V | Temp: 24.8°C`, 't-output');
                samples++;
              }, 800);
              break;
              
            case 'run-ml':
              addTerminalLine('Loading neural net parameters from ESP32 partition... Done.', 't-system');
              addTerminalLine('Feeding telemetry vector into model input tensor...', 't-system');
              setTimeout(() => {
                const glucose = Math.floor(80 + Math.random() * 60);
                const abnormal = glucose > 120 || glucose < 80 ? '<span class="t-red">YES</span>' : '<span class="t-green">NO</span>';
                addTerminalLine(`Prediction outputs:<br>` +
                  `  - Model Type: TensorFlow Lite MLP (Regression)<br>` +
                  `  - Output Value: <span class="t-amber">${glucose} mg/dL</span><br>` +
                  `  - Alert Status: ${abnormal}<br>` +
                  `  - Conf. Index:  98.6%`, 't-output');
              }, 600);
              break;
              
            case 'sysinfo':
              addTerminalLine(`HARDWARE: ESP32-WROOM-32E (Revision 3)<br>` +
                `CORE_ARCH: Xtensa Dual-Core 32-bit LX6 Microprocessor<br>` +
                `CLOCK_SPD: 240 MHz<br>` +
                `FIRMWARE:  FreeRTOS v10.4.3 (IDF v5.1.0-stable)<br>` +
                `MEMORY:    448 KB ROM, 520 KB SRAM, 4 MB External Flash`, 't-output');
              break;
              
            case 'clear':
              terminalBody.innerHTML = '';
              addTerminalLine('<span class="terminal-title">Terminal Cleared. Type "help" for a list of command options.</span>', 't-system');
              break;
              
            default:
              addTerminalLine(`bash: command not found: ${command}. Type <strong>help</strong> for options.`, 't-red');
          }
        }, 100);
      }
    });
  }

  // ==========================================
  // 6. SCROLL INTERSECTION OBSERVER FOR VISUALS
  // ==========================================
  const revealElements = document.querySelectorAll(
    '.exp-card, .edu-card, .proj-card, .skill-cat, .cert-card, .achieve-card, .contact-form, .contact-info, .glimpse-card'
  );
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const listItems = entry.target.querySelectorAll('ul li');
          if (listItems.length > 0) {
            listItems.forEach((li, index) => {
              setTimeout(() => {
                li.classList.add('visible');
              }, index * 100);
            });
          }
        }
      });
    }, { threshold: 0.15 });
    
    revealElements.forEach(el => {
      if (el.classList.contains('exp-card')) {
        if (el.classList.contains('from-right')) {
          el.classList.add('reveal-slide-right');
        } else {
          el.classList.add('reveal-slide-left');
        }
      } else {
        el.classList.add('reveal-fade');
      }
      revealObserver.observe(el);
    });
  }
  
  // Mission & Vision observer
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const avatar = document.getElementById('aboutAvatar');
          const mission = document.getElementById('missionCard');
          const vision = document.getElementById('visionCard');
          if (avatar) avatar.classList.add('visible');
          if (mission) setTimeout(() => mission.classList.add('visible'), 200);
          if (vision) setTimeout(() => vision.classList.add('visible'), 400);
        }
      });
    }, { threshold: 0.25 });
    aboutObserver.observe(aboutSection);
  }
  
  // Skill Bars observer
  document.querySelectorAll('.skill-cat').forEach(cat => {
    const catObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.bar-fill').forEach((bar, index) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.val + '%';
            }, index * 120);
          });
        }
      });
    }, { threshold: 0.3 });
    catObserver.observe(cat);
  });
  
  // Stats Counter observer
  const achievementsSection = document.getElementById('achievements');
  if (achievementsSection) {
    let countsTriggered = false;
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countsTriggered) {
          countsTriggered = true;
          entry.target.querySelectorAll('.stat-num[data-count]').forEach(el => {
            const target = parseInt(el.dataset.count);
            let current = 0;
            const duration = 1500;
            const stepTime = 30;
            const increment = Math.ceil(target / (duration / stepTime));
            
            const timer = setInterval(() => {
              current = Math.min(current + increment, target);
              el.textContent = current + '+';
              if (current >= target) {
                clearInterval(timer);
              }
            }, stepTime);
          });
        }
      });
    }, { threshold: 0.25 });
    countObserver.observe(achievementsSection);
  }

  // ==========================================
  // 6.5 FEATURED CAPSTONE PROJECT TAB SYSTEM
  // ==========================================
  const codeTabButtons = document.querySelectorAll('.code-tab-btn');
  const codeSegments = document.querySelectorAll('.code-pre');
  
  if (codeTabButtons.length > 0 && codeSegments.length > 0) {
    codeTabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        
        codeTabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        codeSegments.forEach(segment => {
          if (segment.id === `code-${tab}`) {
            segment.classList.add('active');
          } else {
            segment.classList.remove('active');
          }
        });
      });
    });
  }

  // ==========================================
  // 7. PROJECTS DYNAMIC FILTERING
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.proj-card');
  
  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        projectCards.forEach(card => {
          const categories = card.dataset.category.split(' ');
          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1) translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95) translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ==========================================
  // 8. PROJECT DETAIL MODALS
  // ==========================================
  const modalOverlay = document.getElementById('modalOverlay');
  const projectModal = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalType = document.getElementById('modalType');
  const modalDesc = document.getElementById('modalDesc');
  const modalOutcomesList = document.getElementById('modalOutcomesList');
  const modalTechTags = document.getElementById('modalTechTags');
  const schematicContainer = document.querySelector('.schematic-canvas-wrap');
  
  if (modalOverlay) {
    const openModal = (projectId) => {
      const data = projectsData[projectId];
      if (!data) return;
      
      modalTitle.textContent = data.title;
      modalType.textContent = data.type;
      modalDesc.textContent = data.desc;
      
      modalOutcomesList.innerHTML = '';
      modalTechTags.innerHTML = '';
      
      data.outcomes.forEach((outcome, i) => {
        const outcomeItem = document.createElement('div');
        outcomeItem.className = 'outcome-item';
        outcomeItem.innerHTML = `
          <span class="outcome-num">${i + 1}</span>
          <span>${outcome}</span>
        `;
        modalOutcomesList.appendChild(outcomeItem);
      });
      
      data.tech.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = t;
        modalTechTags.appendChild(tag);
      });
      
      if (schematicContainer) {
        schematicContainer.innerHTML = data.schematic;
      }
      
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    
    const closeModal = () => {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    };
    
    document.querySelectorAll('.proj-card').forEach(card => {
      const btn = card.querySelector('.btn-more');
      const id = card.dataset.id;
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(id);
        });
      }
    });
    
    if (modalClose) modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ==========================================
  // 9. CONTACT FORM MAILTO REDIRECTION
  // ==========================================
  window.handleSend = function() {
    const nameEl = document.getElementById('fname');
    const emailEl = document.getElementById('femail');
    const subjectEl = document.getElementById('fsubject');
    const messageEl = document.getElementById('fmessage');
    const feedbackEl = document.getElementById('formFeedback');
    const formEl = document.getElementById('contactForm');
    
    if (!nameEl || !emailEl || !subjectEl || !messageEl) return;
    
    const name = nameEl.value;
    const email = emailEl.value;
    const subject = subjectEl.value;
    const message = messageEl.value;
    
    if (!name || !email || !subject || !message) {
      alert("Please fill out all required fields.");
      return;
    }
    
    if (feedbackEl) feedbackEl.style.display = 'block';
    
    setTimeout(() => {
      const emailRecipient = "seemab.ramzan@gmail.com";
      const emailSubject = encodeURIComponent(`[Portfolio Contact] ${subject}`);
      const emailBodyStr = `Hello Seemab,\n\nYou have received a message from your portfolio contact form:\n\nSender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}\n\n---\nSent from Portfolio Website.`;
      const emailBody = encodeURIComponent(emailBodyStr);
      
      window.location.href = `mailto:${emailRecipient}?subject=${emailSubject}&body=${emailBody}`;
      
      if (formEl) formEl.reset();
      if (feedbackEl) feedbackEl.style.display = 'none';
    }, 1500);
  };
});
