// ===================================
// HERO CAROUSEL FUNCTIONALITY
// ===================================

const carouselSlides = document.querySelectorAll(".carousel-slide");
const carouselDots = document.querySelectorAll(".carousel-pagination .dot");
let currentSlide = 0;

// Function to show specific slide
function showSlide(slideIndex) {
  // Remove active class from all slides and dots
  carouselSlides.forEach((slide) => slide.classList.remove("active"));
  carouselDots.forEach((dot) => dot.classList.remove("active"));

  // Add active class to current slide and dot
  carouselSlides[slideIndex].classList.add("active");
  carouselDots[slideIndex].classList.add("active");

  currentSlide = slideIndex;
}

// Add click event to each dot
carouselDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Initialize first slide
showSlide(0);

// ===================================
// ROOMS & COTTAGES CAROUSEL FUNCTIONALITY
// ===================================

const roomSlides = document.querySelectorAll(".rooms-slide");
const roomDots = document.querySelectorAll(".room-dot");
const roomInfos = document.querySelectorAll(".room-info");
const roomPrevBtn = document.getElementById("roomPrev");
const roomNextBtn = document.getElementById("roomNext");
let currentRoomSlide = 0;

function showRoomSlide(slideIndex) {
  // Ensure slideIndex is within bounds
  if (slideIndex < 0) {
    slideIndex = roomSlides.length - 1;
  } else if (slideIndex >= roomSlides.length) {
    slideIndex = 0;
  }

  // Remove active class from all slides, dots, and info panels
  roomSlides.forEach((slide) => slide.classList.remove("active"));
  roomDots.forEach((dot) => dot.classList.remove("active"));
  roomInfos.forEach((info) => info.classList.remove("active"));

  // Add active class to current slide, dot, and info panel
  roomSlides[slideIndex].classList.add("active");
  roomDots[slideIndex].classList.add("active");
  roomInfos[slideIndex].classList.add("active");

  currentRoomSlide = slideIndex;
}

// Add click events to room dots
roomDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showRoomSlide(index);
  });
});

// Add click events to carousel control buttons
if (roomPrevBtn) {
  roomPrevBtn.addEventListener("click", () => {
    showRoomSlide(currentRoomSlide - 1);
  });
}

if (roomNextBtn) {
  roomNextBtn.addEventListener("click", () => {
    showRoomSlide(currentRoomSlide + 1);
  });
}

// Initialize first room slide
showRoomSlide(0);

// Optional: Auto-advance carousel every 8 seconds
setInterval(() => {
  showRoomSlide(currentRoomSlide + 1);
}, 8000);

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

mobileMenuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
  });
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ===================================

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");

    // Only prevent default and smooth scroll for anchor links (starting with #)
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
    // For external links like "about.html", let the default behavior work
  });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.getElementById("navbar");
let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  // Add shadow on scroll
  if (currentScrollPosition > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  lastScrollPosition = currentScrollPosition;
});

// ===================================
// CONTACT FORM SUBMISSION
// ===================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate form
  if (name && email && message) {
    // Show success alert
    alert(
      `Thank you, ${name}! Your message has been received.\n\nWe'll get back to you at ${email} as soon as possible!`
    );

    // Reset form
    contactForm.reset();
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

// ===================================
// SCROLL ANIMATIONS (FADE IN ON SCROLL)
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe sections for fade-in effect
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// ===================================
// GALLERY LIGHTBOX EFFECT (SIMPLE)
// ===================================

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    const imgSrc = img.getAttribute("src");
    const imgAlt = img.getAttribute("alt");

    // Show image in alert (simple implementation)
    // For production, you would use a proper lightbox library
    alert(`Viewing: ${imgAlt}\nClick OK to close`);
  });
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===================================
// FAQ ACCORDION FUNCTIONALITY
// ===================================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const faqAnswer = question.nextElementSibling;
    const isActive = question.classList.contains("active");

    // Close all other FAQ items
    faqQuestions.forEach((q) => {
      q.classList.remove("active");
      q.nextElementSibling.classList.remove("active");
    });

    // Toggle current item
    if (!isActive) {
      question.classList.add("active");
      faqAnswer.classList.add("active");
    }
  });
});

// ===================================
// LOG INITIALIZATION
// ===================================

console.log("Pantukan Water World website initialized successfully!");
console.log("All interactive features loaded.");
