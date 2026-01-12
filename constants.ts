import { Language, Project, ProjectType, Translation, Experience } from './types';
import { Briefcase, Coffee, Code, Zap, Globe, Github, Gamepad2, Rocket, Heart, Monitor } from 'lucide-react';

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    language: 'EN',
    nav: { pro: "Professional", personal: "Personal", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      role: "Full-Stack Web Developer",
      location: "Based in Nigeria | Delivering High-Scale Solutions",
      cta: "View Resume"
    },
    professional: {
      journeyTitle: "Professional Hub",
      selectedWorksTitle: "Selected Works",
      viewCaseStudy: "View Case Study",
      tabs: { work: "Work", education: "Education", journey: "Journey" },
      journey: {
        j1Title: "University Enrollment",
        j1Desc: "Coming out of the pandemic, I enrolled in university as a Computer Engineering student, eager to turn my passion for technology into practical skills. During my first year, I built a strong foundation in mathematics and engineering principles. It was a year of growth, discovery, and laying the groundwork for the rest of my journey.",
        j2Title: "The Growth",
        j2Desc: "Following my first year in the university, I focused on deepening my expertise in programming, learning new languages and frameworks such as JavaScript, React, and Python. I immersed myself in engineering, building a strong foundation toward becoming a well-rounded engineer. Beyond technical skills, I also expanded my network, connecting with peers and mentors, while continuing to strengthen my problem-solving abilities through hands-on projects and challenges.",
        j3Title: "Further Growth",
        j3Desc: "In 2024, I focused on expanding my technical skills and building a solid foundation for my career. I learned new languages and frameworks, including Next.js, Node.js, MySQL, Django, Wagtail, and explored Docker. I completed my first Udemy certification and began a new certification in UI/UX design, applying my knowledge to develop various demo projects. Alongside certifications, I worked on engineering projects from school assignments, gaining hands-on experience and reinforcing my understanding of software development and systems design. While much of the year was focused on schoolwork, it was an important period of skill growth and preparation for more advanced projects.",
        j4Title: "Opportunities",
        j4Desc: "2025 has been an exciting and transformative year. I completed a 6-month internship at an auditing firm, gaining valuable experience in a different field and developing essential interpersonal and teamwork skills. I also worked on my first freelance project, creating a website for NUESA at my university alongside a talented partner. Entering my final year, I began developing a hybrid attendance monitoring system, started writing my thesis, and later got a second freelance project: an e-commerce store for a thrift shop. Beyond school and work, I continued my personal growth by learning German, achieving the B1 certificate, and collaborating with friends on two business ventures, exploring entrepreneurship and teamwork. Balancing academics, projects, freelancing, and personal growth has been challenging, but this year has been deeply rewarding, full of learning, skill development, and real-world impact.",
        j5Title: "Coming Soon.....",
        work1Role: "Full-Stack Web Developer",
        work1Desc: "Designed and developed a website for the 2025 Administration of NUESA ABUAD Chapter using Node.js.",
        edu1Role: "West African Examination Council (WAEC) Certificate",
        edu1Desc: "High School Graduation.",
        edu2Role: "Bachelor of Engineering (B.Eng)",
        edu2Desc: "Computer Engineering student at Afe Babalola University."
      }
    },
    contact: {
      title: "Let's Connect",
      submit: "Send Message",
      personas: { RECRUITER: "Recruiter", DEVELOPER: "Developer", ADVENTURER: "Adventurer" },
      placeholders: {
        name: "Your Name / Company",
        email: "Work Email",
        message: "Details about the opportunity...",
        extra: "Tech Stack / Github (Optional)"
      }
    },
    personal: {
      heroPrefix: "Donzel's World",
      heroMain: "PASSIONATE",
      heroDescription: "I'm Donzel Asira. I merge technical logic with creative soul, solving complex problems by day and exploring digital realms by night.",
      aboutValues: ["Innovator", "Builder", "Dreamer"],
      hobbiesTitle: "Asira's Hobbies",
      lifeComponentsTitle: "Components of Asira's Life",
      codingTitle: "Coding Playground",
      footerTitle: "THANKS FOR VISITING.",
      copyright: "DESIGNED & BUILT BY DONZEL ASIRA",
      tabs: { live: "Live Production", demo: "Prototypes", vibe: "Vibe Coding" },
      links: { live: "Visit Site", repo: "View Repo" },
      fcb: { title: "FC Barcelona", description: "Watching sports is more than a hobby for me, it’s part of my identity. As a devoted FC Barcelona fan, I appreciate the tactical beauty and philosophy that define the Blaugrana style." },
      manhwa: { title: "Reading Manhwas", featured: "Solo Leveling • TBATE", quote: "Always level up.", backDescription: "Deeply immersed in the world of Manhwas like Solo Leveling where progression matters and like Jin-Woo, I always arise when it counts." },
      gaming: { title: "Gaming", description: "Exploring high-fidelity digital frontiers, from strategy games to open-world RPGs. If the mechanics make me stop and think, I’m in." },
      solving: { title: "Solving Problems", description: "Solving problems is my natural state. I find peace in debugging complex systems and building logic that operates with efficiency." },
      hobbies: { gaming: "Playing Games", sports: "Watching Sports", anime: "Watching Anime", manhwa: "Reading Manhwas", languages: "Learning Languages", movies: "Watching Movies", solving: "Solving Problems" },
      stories: {
        gaming: "I’ve always loved gaming and I always will. It feels hard-coded into me. From strategy titles to open-world RPGs, gaming is where I naturally gravitate. It brings me a sense of calm and focus… even if some games try their best to stress me out 😄. Gaming isn’t just a hobby, it’s part of who I am. Some of my favorites include Madden NFL, F1, Football Manager (the best of them all), Solitaire, and Crossword puzzles.",
        sports: "I love sports—always have, always will. I started watching sports at a young age, and growing up in an environment where everyone watched sports made it part of my DNA. After God and family, sports come next… because honestly, what is life without sports? Football (yes, football, not soccer) is at the top of the list, where I proudly support the greatest club of all time — FC Barcelona (Força Barça ❤️💙). The Blaugrana blood definitely runs through me. I also follow basketball and support the Golden State Warriors. Beyond that, I enjoy the NFL, F1, Tennis, Track & Field, and the Holy Grail — WWE (yes, it counts 😄). I could spend an entire day talking about sports, and I’d still have more to say.",
        anime: "I never really liked anime—yeah, I was that guy who rolled his eyes when someone mentioned it 😂. But that changed when I got introduced to Black Clover (still waiting for it to resume 😴). Since then, I’ve been hooked, binge-watching everything from Attack on Titan to Kuroko no Basket to My Hero Academia.My favorites? Attack on Titan (the G.O.A.T.) and Classroom of the Elite.",
        manhwa: "What can I say, at this stage in my life, I read manhwas and mangas more than I watch movies or anime. The only hobby I enjoy more is sports. I got into manhwas in my third year during a particularly stressful period. I needed something to take the edge off, so I started with Solo Leveling, then moved on to TBATE, Bastard, and now I just keep reading. I don’t really have a favorite series or genre — I enjoy it all. P.S. I did fail that test because I was too distracted by reading Solo-leveling… but I still passed the course 😂.",
        languages: "I love learning new things, and learning languages is always a joy for me. My language journey started with French, which I studied from primary school all the way to my second year at university — I mostly understand it, though I speak just a little. I also learned Hausa, a native language of my country, as part of my university curriculum. But the language I chose to learn on my own was German. Why? I love Germany—their culture, history, and language—and hope to travel there someday. I started learning German in 2025, and currently I'm at B1 level, able to speak, read, listen, and write confidently. Growing up, English has been my main language, and it’s the one I’m most fluent in.",
        movies: "I love watching movies, it’s more than just entertainment; it’s a way to experience stories, ideas, and emotions I might not encounter in everyday life. I watch a wide range of genres, from action-packed adventures and thought-provoking dramas to light-hearted comedies. Each movie teaches me something, whether it’s storytelling, character development, or simply a fresh perspective on the world. My favorite genre is Horror.",
        solving: "Solving problems comes naturally to me, it’s where I feel most focused and engaged. I enjoy debugging complex systems, breaking down challenges into manageable pieces, and creating solutions that are both efficient and effective. Whether it’s in coding, gaming, or real-life scenarios, tackling problems gives me a sense of accomplishment and drives me to keep learning and improving. "
      },
      footer: { thanks: "Thanks for dropping by.", connect: "Let's build something impossible." }
    }
  },
  [Language.DE]: {
    language: 'DE',
    nav: { pro: "Beruflich", personal: "Persönlich", contact: "Kontakt" },
    hero: {
      greeting: "Hallo, ich bin",
      role: "Full-Stack-Webentwickler",
      location: "Aus Nigeria | Skalierbare Lösungen",
      cta: "Lebenslauf ansehen"
    },
    professional: {
      journeyTitle: "Professional Hub",
      selectedWorksTitle: "Ausgewählte Arbeiten",
      viewCaseStudy: "Fallstudie Ansehen",
      tabs: { work: "Arbeit", education: "Bildung", journey: "Reise" },
      journey: {
        j1Title: "Immatrikulation an der Universität",
        j1Desc: "Nach der Pandemie schrieb ich mich als Student für Computertechnik ein, begierig darauf, meine Leidenschaft für Technologie in praktische Fähigkeiten umzuwandeln. Im ersten Jahr baute ich ein starkes Fundament in Mathematik und technischen Grundlagen auf. Es war ein Jahr des Wachstums, der Entdeckung und der Grundsteinlegung für den Rest meines Weges.",
        j2Title: "Das Wachstum",
        j2Desc: "Nach meinem ersten Jahr an der Universität konzentrierte ich mich darauf, meine Expertise in der Programmierung zu vertiefen und lernte neue Sprachen und Frameworks wie JavaScript, React und Python. Ich tauchte tief in die Ingenieurwissenschaften ein, um ein vielseitiger Ingenieur zu werden. Neben den technischen Fähigkeiten erweiterte ich mein Netzwerk und stärkte meine Problemlösungskompetenz durch praktische Projekte.",
        j3Title: "Weitere Entwicklung",
        j3Desc: "Im Jahr 2024 erweiterte ich meine technischen Fähigkeiten um Next.js, Node.js, MySQL, Django, Wagtail und Docker. Ich schloss meine erste Udemy-Zertifizierung ab und begann eine Fortbildung in UI/UX-Design. Neben den Zertifizierungen arbeitete ich an technischen Projekten aus dem Studium und sammelte praktische Erfahrung in der Softwareentwicklung und dem Systemdesign. Es war eine wichtige Phase der Kompetenzentwicklung.",
        j4Title: "Möglichkeiten",
        j4Desc: "2025 war ein transformatives Jahr. Ich absolvierte ein 6-monatiges Praktikum in einer Wirtschaftsprüfungsgesellschaft und entwickelte Teamfähigkeit. Ich arbeitete an meinem ersten Freelance-Projekt für NUESA an meiner Universität. In meinem letzten Studienjahr begann ich mit der Entwicklung eines hybriden Anwesenheitssystems und meiner Abschlussarbeit. Zudem lernte ich Deutsch und erreichte das B1-Zertifikat.",
        j5Title: "Demnächst.....",
        work1Role: "Full-Stack-Webentwickler",
        work1Desc: "Entwurf und Entwicklung einer Website für die NUESA ABUAD Administration 2025 mit Node.js.",
        edu1Role: "West African Examination Council (WAEC) Zertifikat",
        edu1Desc: "High-School.",
        edu2Role: "Bachelor of Engineering (B.Eng)",
        edu2Desc: "Student der Computertechnik an der Afe Babalola University."
      }
    },
    contact: {
      title: "Kontakt aufnehmen",
      submit: "Nachricht Senden",
      personas: { RECRUITER: "Recruiter", DEVELOPER: "Entwickler", ADVENTURER: "Abenteurer" },
      placeholders: {
        name: "Ihr Name / Firma",
        email: "Geschäfts-E-Mail",
        message: "Details zur Möglichkeit...",
        extra: "Tech Stack / Github (Optional)"
      }
    },
    personal: {
      heroPrefix: "Donzels Welt",
      heroMain: "LEIDENSCHAFTLICH",
      heroDescription: "Ich bin Donzel Asira. Ich verbinde technische Logik mit kreativer Seele, löse tagsüber komplexe Probleme und erkunde nachts digitale Welten.",
      aboutValues: ["Innovator", "Entdecker", "Macher", "Träumer"],
      hobbiesTitle: "Asiras Hobbys",
      lifeComponentsTitle: "Komponenten meines Lebens",
      codingTitle: "Coding Spielplatz",
      footerTitle: "DANKE FÜR IHREN BESUCH.",
      copyright: "ENTWORFEN & GEBAUT VON DONZEL ASIRA",
      tabs: { live: "Live Projekte", demo: "Prototypen", vibe: "Vibe Coding" },
      links: { live: "Site besuchen", repo: "Code ansehen" },
      fcb: { title: "FC Barcelona", description: "FC Barcelona", description: "Sport zu schauen ist für mich mehr als nur ein Hobby, es ist Teil meiner Identität. Als leidenschaftlicher Fan des FC Barcelona schätze ich die taktische Finesse und die Philosophie, die den Spielstil der Blaugrana prägen." },
      manhwa: { title: "Manhwas lesen", featured: "Solo Leveling • TBATE", quote: "Immer aufsteigen.", backDescription: "Tief eingetaucht in die Welt von Manhwas wie Solo Leveling, wo Fortschritt wichtig ist und wo ich wie Jin-Woo immer dann aufstehe, wenn es darauf ankommt." },
      gaming: { title: "Gaming", description: "Ich erkunde detailreiche digitale Welten, von Strategiespielen bis hin zu Open-World-RPGs. Wenn mich die Spielmechanik zum Nachdenken anregt, bin ich dabei." },
      solving: { title: "Problemlösung", description: "Problemlösung liegt mir im Blut. Ich finde Ruhe darin, komplexe Systeme zu debuggen und effiziente Logik zu entwickeln." },
      hobbies: { gaming: "Spielen", sports: "Sport schauen", anime: "Anime schauen", manhwa: "Manhwas lesen", languages: "Sprachen lernen", movies: "Filme schauen", solving: "Probleme lösen" },
      stories: {
        gaming: "Ich habe Videospiele schon immer geliebt und werde sie immer lieben. Es ist mir quasi in die Wiege gelegt worden. Von Strategiespielen bis hin zu Open-World-RPGs – Videospiele sind einfach meine große Leidenschaft. Sie geben mir Ruhe und Konzentration … auch wenn manche Spiele alles daransetzen, mich zu stressen 😄. Videospiele sind nicht nur ein Hobby, sie gehören zu mir. Zu meinen Lieblingsspielen zählen Madden NFL, F1, Football Manager (mein absoluter Favorit), Solitaire und Kreuzworträtsel.",
        sports: "Ich liebe Sport – schon immer und für immer. Ich habe schon früh angefangen, Sport zu schauen, und da ich in einem Umfeld aufgewachsen bin, in dem jeder Sport geschaut hat, ist er mir in die Wiege gelegt worden. Nach Gott und Familie kommt Sport gleich danach… denn mal ehrlich, was wäre das Leben ohne Sport? Fußball (ja, Fußball, nicht Soccer) steht ganz oben auf meiner Liste, und ich bin stolzer Fan des besten Vereins aller Zeiten – des FC Barcelona (Força Barça ❤️💙). Das Blaugrana-Blut fließt definitiv in meinen Adern. Ich verfolge auch Basketball und bin Fan der Golden State Warriors. Darüber hinaus interessiere ich mich für NFL, Formel 1, Tennis, Leichtathletik und den Heiligen Gral – WWE (ja, das zählt 😄). Ich könnte einen ganzen Tag über Sport reden und hätte immer noch mehr zu erzählen.",
        anime: "Ich mochte Anime nie wirklich – ja, ich war der Typ, der immer die Augen verdrehte, wenn jemand das Thema ansprach 😂. Aber das änderte sich, als ich Black Clover entdeckte (ich warte immer noch sehnsüchtig auf die Fortsetzung 😴). Seitdem bin ich total begeistert und habe alles Mögliche durchgesuchtet, von Attack on Titan über Kuroko no Basket bis hin zu My Hero Academia. Meine Favoriten? Attack on Titan (der absolute Wahnsinn!) und Classroom of the Elite.",
        manhwa: "Was soll ich sagen? In meinem jetzigen Lebensabschnitt lese ich mehr Manhwas und Mangas als Filme oder Animes. Mein einziges Hobby, das mir noch mehr Spaß macht, ist Sport. Ich habe im dritten Studienjahr, während einer besonders stressigen Phase, mit Manhwas angefangen. Ich brauchte etwas zum Entspannen, also begann ich mit Solo Leveling, dann las ich TBATE, Bastard und lese jetzt einfach immer weiter. Ich habe keine wirkliche Lieblingsserie oder ein Lieblingsgenre – ich mag alles. P.S.: Ich bin bei der Prüfung durchgefallen, weil ich zu sehr von Solo Leveling abgelenkt war … aber den Kurs habe ich trotzdem bestanden 😂.",
        languages: "Ich lerne unheimlich gern Neues, und Sprachenlernen bereitet mir immer wieder große Freude. Meine Sprachreise begann mit Französisch, das ich von der Grundschule bis zum zweiten Studienjahr lernte – ich verstehe es größtenteils, spreche es aber nur ein bisschen. Im Rahmen meines Studiums lernte ich auch Hausa, die Sprache meines Heimatlandes. Doch die Sprache, die ich mir selbst beibringen wollte, war Deutsch. Warum? Ich liebe Deutschland – die Kultur, die Geschichte und die Sprache – und hoffe, eines Tages dorthin zu reisen. Ich habe 2025 angefangen, Deutsch zu lernen, und bin derzeit auf dem Niveau B1. Ich kann fließend sprechen, lesen, hören und schreiben. Englisch war schon immer meine Muttersprache und ist die, die ich am besten beherrsche.",
        movies: "Ich liebe Filme. Sie sind für mich mehr als nur Unterhaltung; sie ermöglichen mir, Geschichten, Ideen und Emotionen zu erleben, die mir im Alltag vielleicht verborgen bleiben. Ich schaue die unterschiedlichsten Genres, von actionreichen Abenteuern und tiefgründigen Dramen bis hin zu unbeschwerten Komödien. Jeder Film lehrt mich etwas, sei es Erzählkunst, Charakterentwicklung oder einfach eine neue Perspektive auf die Welt. Mein Lieblingsgenre ist Horror.",
        solving: "Problemlösung liegt mir im Blut; dabei bin ich am konzentriertesten und engagiertesten. Ich liebe es, komplexe Systeme zu debuggen, Herausforderungen in überschaubare Teilaufgaben zu zerlegen und effiziente sowie effektive Lösungen zu entwickeln. Ob beim Programmieren, in Spielen oder im Alltag – Probleme anzugehen gibt mir ein Erfolgserlebnis und motiviert mich, ständig dazuzulernen und mich zu verbessern."
      },
      footer: { thanks: "Danke für den Besuch.", connect: "Lass uns etwas Unmögliches bauen." }
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ABUAD NUESA Website',
    description: 'A website for the 2025 administration of the ABUAD Chapter of NUESA.',
    tags: ['Node.js', 'Tailwind CSS'],
    image: '/images/img2.jpeg',
    type: ProjectType.LIVE,
    liveUrl: "https://nuesaabuad.ng",
    githubUrl: "#"
  },

{
    id: '2',
    title: 'BREW',
    description: 'BREW. is a high-end e-commerce showcase designed with a "Linear" aesthetic. It moves beyond traditional storefronts by integrating a Gemini-powered AI Sommelier, creating a sophisticated, personalized shopping experience for coffee enthusiasts.',
    tags: ['Node.js', 'Next', 'React'],
    image: '/images/img1.jpg',
    type: ProjectType.VIBE,
    githubUrl: "https://github.com/AsiraDonzel/Brew"
  },

{
    id: '3',
    title: 'TaskFlow Pro',
    description: 'A high-performance Kanban board built with React 19, Framer Motion, and Gemini 2.0. AuraFlow automates task breakdown using AI, features real-time productivity analytics, and delivers a premium "glassmorphism" user experience with fluid drag-and-drop interactions.',
    tags: ['Next', 'React', 'TypeSript'],
    image: '/images/img6.jpg',
    type: ProjectType.VIBE,
    githubUrl: "https://github.com/AsiraDonzel/TaskFlow"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    year: '2025',
    role: 'Full-Stack Web Developer',
    company: '2025 ABUAD NUESA Adminstration',
    description: 'Designed and developed a website for the 2025 Adminstration of NUESA ABUAD Chapter using Node.js.',
    type: 'WORK'
  },
  {
    id: 'edu1',
    year: '2017 - 2020',
    role: 'West African Examination Council (WAEC) Certificate',
    company: 'Christian Science College',
    description: 'High School',
    type: 'EDUCATION'
  },
  {
    id: 'edu2',
    year: '2021 - Present',
    role: 'Bachelor of Engineering (B.Eng)',
    company: 'Afe Babalola University, Ado-Ekiti',
    description: 'Computer Engineering.',
    type: 'EDUCATION'
  },
  { 
    id: 'j1', 
    year: '2021', 
    role: 'University Enrollment', 
    company: 'Afe Babalola Univeristy', 
    description: 'Coming out of the pandemic, I enrolled in university as a Computer Engineering student, eager to turn my passion for technology into practical skills. During my first year, I built a strong foundation in mathematics and engineering principles. It was a year of growth, discovery, and laying the groundwork for the rest of my journey.', 
    type: 'JOURNEY', 
    image: '/images/img4.JPG'
  },
  { 
    id: 'j2', 
    year: '2022-2023', 
    role: 'The Growth', 
    company: 'Skill Mastering', 
    description: 'Following my first year in the university, I focused on deepening my expertise in programming, learning new languages and frameworks such as JavaScript, React, and Python. I immersed myself in engineering, building a strong foundation toward becoming a well-rounded engineer. Beyond technical skills, I also expanded my network, connecting with peers and mentors, while continuing to strengthen my problem-solving abilities through hands-on projects and challenges.', 
    type: 'JOURNEY' 
  },
  { 
    id: 'j3', 
    year: '2024', 
    role: 'Further Growth', 
    company: 'Foundations & Skills Expansion', 
    description: 'In 2024, I focused on expanding my technical skills and building a solid foundation for my career. I learned new languages and frameworks, including Next.js, Node.js, MySQL, Django, Wagtail, and explored Docker. I completed my first Udemy certification and began a new certification in UI/UX design, applying my knowledge to develop various demo projects. Alongside certifications, I worked on engineering projects from school assignments, gaining hands-on experience and reinforcing my understanding of software development and systems design. While much of the year was focused on schoolwork, it was an important period of skill growth and preparation for more advanced projects.', 
    type: 'JOURNEY',
    image: '/images/img7.jpg'
  },
  { 
    id: 'j4', 
    year: '2025', 
    role: 'Opportunities', 
    company: 'Experience & Impact', 
    description: '2025 has been an exciting and transformative year. I completed a 6-month internship at an auditing firm, gaining valuable experience in a different field and developing essential interpersonal and teamwork skills. I also worked on my first freelance project, creating a website for NUESA at my university alongside a talented partner. Entering my final year, I began developing a hybrid attendance monitoring system, started writing my thesis, and later got a second freelance project: an e-commerce store for a thrift shop. Beyond school and work, I continued my personal growth by learning German, achieving the B1 certificate, and collaborating with friends on two business ventures, exploring entrepreneurship and teamwork. Balancing academics, projects, freelancing, and personal growth has been challenging, but this year has been deeply rewarding, full of learning, skill development, and real-world impact.', 
    type: 'JOURNEY',
    image: '/images/img5.jpg',
  },
  { 
    id: 'j5', 
    year: '2026', 
    role: 'Coming Soon.....', 
    company: '', 
    description: '', 
    type: 'JOURNEY' 
  }
];

export const ICONS = {
  Briefcase, Coffee, Code, Zap, Globe, Github, Gamepad2, Rocket, Heart, Monitor
};