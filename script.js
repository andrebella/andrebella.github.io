// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with fade-in-on-scroll class
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in-on-scroll');
  fadeElements.forEach(el => observer.observe(el));
});

// Modal functionality
function showTopicDetails(topicId) {
  const modal = document.getElementById('topicModal');
  const modalContent = document.getElementById('modalContent');
  
  const topics = {
    1: {
      title: "The Dangerous Lie of 'I Deserve It' — and How It Holds Us Back",
      duration: "45-60 minutes",
      description: "A high-energy, thought-provoking talk on how entitlement infiltrates our work, life, and culture. Learn how to break free from this mindset to unlock real progress and resilience.",
      keyPoints: [
        "How entitlement manifests in modern workplaces",
        "The psychology behind 'deserving' vs 'earning'",
        "Practical strategies for breaking entitlement patterns",
        "Building a culture of earned success"
      ],
      audience: "Corporate teams, startups, universities, conferences"
    },
    2: {
      title: "Entitlement Kills Resilience: How to Build Grit in a Soft World",
      duration: "30-45 minutes",
      description: "Why mental toughness matters now more than ever. This talk shows how to develop resilience in teams, startups, and personal growth to combat a culture of entitlement.",
      keyPoints: [
        "The connection between entitlement and weak resilience",
        "Building mental toughness in modern environments",
        "Creating resilient teams and organizations",
        "Personal development strategies for grit"
      ],
      audience: "Leadership teams, HR professionals, entrepreneurs"
    },
    3: {
      title: "From Blame to Ownership: Transforming the Way We Face Challenges",
      duration: "60-90 minutes",
      description: "Shifting from a mindset of blame to ownership rewires success. Whether you're an individual, leader, or innovator, learn how to build the ownership mindset needed for growth and success.",
      keyPoints: [
        "The psychology of blame vs ownership",
        "Transforming organizational culture",
        "Personal accountability frameworks",
        "Building ownership in teams and individuals"
      ],
      audience: "Executives, managers, individual contributors, students"
    }
  };
  
  const topic = topics[topicId];
  if (topic) {
    modalContent.innerHTML = `
      <h2>${topic.title}</h2>
      <div class="topic-details">
        <div class="detail-item">
          <strong>Duration:</strong> ${topic.duration}
        </div>
        <div class="detail-item">
          <strong>Description:</strong> ${topic.description}
        </div>
        <div class="detail-item">
          <strong>Key Points:</strong>
          <ul>
            ${topic.keyPoints.map(point => `<li>${point}</li>`).join('')}
          </ul>
        </div>
        <div class="detail-item">
          <strong>Ideal Audience:</strong> ${topic.audience}
        </div>
      </div>
    `;
    modal.style.display = 'block';
  }
}

function openBookingForm() {
  const modal = document.getElementById('bookingModal');
  modal.style.display = 'block';
}

function openContactForm() {
  // For now, just scroll to contact section
  scrollToSection('contact');
}

// Close modals when clicking outside or on close button
window.addEventListener('click', function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Close modals with X button
document.addEventListener('DOMContentLoaded', function() {
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Simulate form submission (replace with actual endpoint)
      console.log('Booking request:', data);
      
      // Show success message
      alert('Thank you for your booking request! Andre will get back to you within 24 hours.');
      
      // Close modal
      document.getElementById('bookingModal').style.display = 'none';
      
      // Reset form
      this.reset();
    });
  }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.getElementById('hero');
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero h1 span');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 150);
    }, 1000);
  }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  const interactiveElements = document.querySelectorAll('.topic-card, .comparison-card, .cta-button');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Counter animation for statistics (if added later)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  
  updateCounter();
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// Smooth reveal animation for sections
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', function() {
  // Add loading animation
  document.body.classList.add('loaded');
  
  // Initialize tooltips (if needed)
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(element => {
    element.addEventListener('mouseenter', function() {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = this.dataset.tooltip;
      document.body.appendChild(tooltip);
      
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    });
    
    element.addEventListener('mouseleave', function() {
      const tooltip = document.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedRevealOnScroll = debounce(revealOnScroll, 10);
window.addEventListener('scroll', debouncedRevealOnScroll); 