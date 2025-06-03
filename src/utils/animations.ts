/**
 * Types text into an element with a typewriter effect
 * @param element The DOM element to type text into
 * @param textArray Array of text strings to type sequentially
 * @param speed Typing speed in ms
 * @param delay Delay between text items in ms
 * @param callback Optional callback function after all text is typed
 */
export const typeEffect = (
  element: HTMLElement,
  textArray: string[],
  speed: number = 50,
  delay: number = 1000,
  callback?: () => void
): void => {
  let textIndex = 0;
  let charIndex = 0;
  
  const type = () => {
    if (textIndex < textArray.length) {
      const currentText = textArray[textIndex];
      
      if (charIndex < currentText.length) {
        element.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        // Move to next text after delay
        setTimeout(() => {
          textIndex++;
          charIndex = 0;
          if (textIndex < textArray.length) {
            element.innerHTML += '<br>';
            type();
          } else if (callback) {
            callback();
          }
        }, delay);
      }
    } else if (callback) {
      callback();
    }
  };
  
  type();
};

/**
 * Creates a glitch animation effect on an element
 * @param element The DOM element to apply the glitch effect to
 * @param intensity Intensity of the glitch (1-10)
 * @param duration Duration of each glitch in ms
 * @param interval Interval between glitches in ms
 */
export const glitchEffect = (
  element: HTMLElement,
  intensity: number = 5,
  duration: number = 100,
  interval: number = 3000
): void => {
  const originalText = element.innerText;
  const glitchChars = 'x!@#$%^&*()_+-=[]{}|;:,.<>?/\\';
  
  const createGlitch = () => {
    // Number of characters to glitch
    const glitchLength = Math.floor((originalText.length * intensity) / 10);
    let newText = originalText;
    
    // Replace random characters with glitch characters
    for (let i = 0; i < glitchLength; i++) {
      const pos = Math.floor(Math.random() * originalText.length);
      const glitchChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      newText = newText.substring(0, pos) + glitchChar + newText.substring(pos + 1);
    }
    
    element.innerText = newText;
    
    // Restore original text after duration
    setTimeout(() => {
      element.innerText = originalText;
    }, duration);
  };
  
  // Initial glitch
  createGlitch();
  
  // Set interval for repeating glitches
  setInterval(createGlitch, interval);
};

/**
 * Add a scrolling observer that adds animation classes to elements as they come into view
 */
export const initScrollAnimations = (): void => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
};

/**
 * Highlights the active navigation link based on scroll position
 */
export const initScrollSpy = (): void => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');
  
  const observerOptions = {
    rootMargin: '-100px 0px -80% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach((section) => {
    observer.observe(section);
  });
};