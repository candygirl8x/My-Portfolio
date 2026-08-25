// Document load hone ke baad script run hogi
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("typed-element")) {
    var typed = new Typed('#typed-element', {
      strings: [
        'BCA Student',
        'Frontend Developer',
        'Programmer',
        'Full Stack Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    });
  }
});

//About Section
document.addEventListener("DOMContentLoaded", function () {

  // 1. Top Cards Data
  const topCardsData = [
    { title: "BCA", category: "EDUCATION", icon: "fa-graduation-cap" },
    { title: "Full Stack Development", category: "FOCUS", icon: "fa-bolt" },
    { title: "Open for Opportunities", category: "STATUS", icon: "fa-location-dot" }
  ];

  // 2. Left Bio Data
  const bioData = `
    <p>I'm <strong>Sneha Singh</strong>, a BCA student focused on building end-to-end software solutions using modern development practices and AI-assisted workflows. I work across the full stack, developing web applications using HTML, CSS, JavaScript, React.js, and backend technologies with API integration.</p>
<p>I actively use AI-assisted development tools (ChatGPT, GitHub Copilot) to accelerate coding, debugging, and testing, improving development efficiency and iteration speed. I am comfortable with the complete development lifecycle—from designing and building to testing and deployment.</p>
`;
  // 3. Right Side Feature Cards Data
  const rightCardsData = [
    {
      title: "Full-Stack Web Development",
      description: "Building responsive frontends and robust web applications",
      icon: "fa-code"
    },

  ];

  // Render Top Cards
  const topCardsContainer = document.getElementById("top-cards");
  if (topCardsContainer) {
    topCardsContainer.innerHTML = topCardsData.map(card => `
      <div class="card-top">
        <div class="icon-box"><i class="fa-solid ${card.icon}"></i></div>
        <div class="card-info">
          <span>${card.category}</span>
          <h4>${card.title}</h4>
        </div>
      </div>
    `).join('');
  }

  // Render Bio Card
  const bioCardContainer = document.getElementById("bio-card");
  if (bioCardContainer) {
    bioCardContainer.innerHTML = `<p>${bioData}</p>`;
  }

  // Render Right Cards
  const rightCardsContainer = document.getElementById("right-cards");
  if (rightCardsContainer) {
    rightCardsContainer.innerHTML = rightCardsData.map(card => `
      <div class="right-card">
        <div class="icon-box"><i class="fa-solid ${card.icon}"></i></div>
        <div>
          <h4>${card.title}</h4>
          <p>${card.description}</p>
        </div>
      </div>
    `).join('');
  }

});

//Education

document.addEventListener("DOMContentLoaded", function () {

  const educationData = [
    {
      step: "01",
      icon: "fa-graduation-cap",
      title: "BCA (Bachelor of Computer Applications)",
      institution: "Kanpur University / Chhatrapati Shahu Ji Maharaj University",
      year: "2024 - Present",
      score: "Pursuing"
    },
    {
      step: "02",
      icon: "fa-school",

      title: "12th Standard (Higher Secondary)",
      institution: "DR.C.V Raman Intermediate College / UP Board",
      year: "2022 - 2024",
      score: "73% / 1st Division"
    },
    {
      step: "03",
      icon: "fa-book-open",
      title: "10th Standard (High School)",
      institution: "DR.C.V Raman Intermediate College / UP Board",
      year: "2021 - 2022",
      score: "78% / 1st Division"
    }
  ];

  const container = document.getElementById("roadmap-container");

  if (container) {
    container.innerHTML = educationData.map(item => `
      <div class="roadmap-card">
        <span class="card-step">${item.step}</span>
        <div>
          <div class="card-icon">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <span class="card-year">${item.year}</span>
          <h3>${item.title}</h3>
          <p class="institution">${item.institution}</p>
        </div>
        <div class="score-badge">
          <i class="fa-solid fa-award"></i> ${item.score}
        </div>
      </div>
    `).join('');
  }

});

//Certificate
document.addEventListener("DOMContentLoaded", function () {

  const certificatesData = [
    {
      title: " Python Full Stack Development",
      platform: "CSJMU Python Full Stack Workshop",
      issuer: " Chhatrapati Shahu Ji Maharaj University",
      date: "March 2026",
      skills: ["Python"],
      image: "WhatsApp Image 2026-08-24 at 9.50.01 PM.jpeg" // Insert your verification link or image path
    }

  ];

  const certContainer = document.getElementById("cert-grid");

  if (certContainer) {
    certContainer.innerHTML = certificatesData.map(cert => `
      <div class="cert-card">
        <div class="cert-banner"></div>
        <div class="cert-body">
          <div>
            <div class="cert-top-info">
              <span class="cert-platform">${cert.platform}</span>
              <span class="cert-date">${cert.date}</span>
            </div>
            <h3 class="cert-title">${cert.title}</h3>
            <div class="cert-issuer">
              <i class="fa-solid fa-award"></i> Issued by ${cert.issuer}
            </div>
            <div class="cert-skills">
              ${cert.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
          </div>
          <a href="${cert.link}" target="_blank" class="cert-btn">
            View Certificate <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `).join('');
  }

});

// Project
document.addEventListener("DOMContentLoaded", function () {

  const projectsData = [
    {
      title: "Smart Home AI",
      category: "AI & IoT Platform",
      description: "An intelligent home automation dashboard utilizing AI algorithms to optimize energy consumption, predict user routines, and provide seamless voice/app controls.",
      techStack: ["HTML", "CSS", "javascript", "SQUL", "Python Django", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop", // Replace with your image filename

    },
    {
      title: "Lunara Quill",
      category: "Novel AI Generator",
      description: "A novel writing assistant powered by generative AI that creates long-form stories, helps build complex character profiles, and generates creative plot twists.",
      techStack: ["HTML", "CSS", "javascript", "LocalStorage API ", "Web Speech API", "Blob + URL.createObjectURL", "Web Crypto API", "DOM API"],
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop", // Replace with your image filename
      demoLink: "https://lunara-quill-novel.vercel.app/",
      githubLink: "https://github.com/candygirl8x/Lunara-Quill-Novel.git"
    }
  ];

  const container = document.getElementById("projects-grid");

  if (container) {
    container.innerHTML = projectsData.map(project => `
      <div class="project-card">
        <div class="project-img-box">
          <img src="${project.image}" alt="${project.title}">
          <span class="project-badge">${project.category}</span>
        </div>
        <div class="project-content">
          <div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tech">
              ${project.techStack.map(tech => `<span class="tech-chip">${tech}</span>`).join('')}
            </div>
          </div>
          <div class="project-actions">
            <a href="${project.demoLink}" target="_blank" class="btn-demo">
              Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href="${project.githubLink}" target="_blank" class="btn-github">
              GitHub <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

});

//Contact

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const btn = document.getElementById("submit-btn");

  if (form) {
    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      btn.disabled = true;
      btn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

      const data = new FormData(event.target);

      try {
        const response = await fetch(event.target.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.style.color = "#10b981";
          status.innerHTML = "Message sent successfully!";
          form.reset();
        } else {
          status.style.color = "#ef4444";
          status.innerHTML = "Failed to send message.";
        }
      } catch (error) {
        status.style.color = "#ef4444";
        status.innerHTML = "Network error. Please try again.";
      } finally {
        btn.disabled = false;
        btn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-arrow-right"></i>';
      }
    });
  }
});