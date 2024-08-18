// about section scroll trigger
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('scrollButton');
  const targetSection = document.getElementById('targetSection');
  const targetSectionOffsetTop = targetSection.offsetTop;
  
  // Function to handle scroll event
  function handleScroll() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= targetSectionOffsetTop) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }
  
  // Scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Click event listener for the button
  button.addEventListener('click', function() {
    window.scrollTo({
      top: targetSectionOffsetTop,
      behavior: 'smooth'
    });
  });
});

// work section scroll trigger
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('scrollButton');
  const targetSection = document.getElementById('workSection');
  const targetSectionOffsetTop = targetSection.offsetTop;
  
  // Function to handle scroll event
  function handleScroll() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= targetSectionOffsetTop) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  }
  
  // Scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Click event listener for the button
  button.addEventListener('click', function() {
    window.scrollTo({
      top: targetSectionOffsetTop,
      behavior: 'smooth'
    });
  });
});

// controls scroll left and right functions for the works section
document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.works-section');
  const scrollLeftButton = document.getElementById('scrollLeft');
  const scrollRightButton = document.getElementById('scrollRight');
  const scrollAmount = 200; // Adjust this to match the width of your items + spacing

  scrollLeftButton.addEventListener('click', function() {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollRightButton.addEventListener('click', function() {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});

