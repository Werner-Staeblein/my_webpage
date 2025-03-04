document.addEventListener('DOMContentLoaded', function() {

  // // Set the duration in milliseconds (2000ms = 2 seconds)
  // const hideDuration = 3000;

  // // Select all alerts with the class 'alert-custom'
  // const alerts = document.querySelectorAll('.alert-custom');

  // alerts.forEach(alert => {
  //     // Sets the timeout for each alert
  //     setTimeout(() => {
  //         // Add the 'fade' and 'show' classes to hide the alert
  //         alert.classList.add('fade');
  //         alert.classList.remove('show');
          
  //         // After fade transition ends, remove the alert from the DOM
  //         alert.addEventListener('transitionend', () => {
  //             alert.remove();
  //         });
  //     }, hideDuration);
  // });

// Manually add event listeners to the close buttons
document.querySelectorAll('.btn-close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        // Find the parent alert and remove it
        let alert = closeButton.closest('.alert');
        if (alert) {
            alert.style.display = 'none';  // Manually hide the alert
        }
    });
});

/**
 * Scroll top button
 */
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    };

    // Call togglescrollTop on page load to ensure the correct visibility on initial load
    window.addEventListener('load', togglescrollTop);

    // Call togglescrollTop when the user scrolls
    document.addEventListener('scroll', togglescrollTop);

    // Scroll to top when the button is clicked
    scrollTop.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default anchor click behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

const mobileNavShow = document.getElementById('mobile-nav-show');
const mobileNavHide = document.getElementById('mobile-nav-hide');
const navbarNav = document.getElementById('navbarNav');

// Ensure the navbarNav transition is ready when the page loads
navbarNav.style.transition = 'right 1.5s ease-in-out';
navbarNav.style.right = '-100%'; // Make sure it starts off-screen initially

// Show the navbar when the hamburger icon is clicked
mobileNavShow.addEventListener('click', function() {
    navbarNav.classList.add('show');
    mobileNavShow.style.display = 'none';  // Hide hamburger icon
    mobileNavHide.style.display = 'block'; // Show close icon

    // Trigger the slide-in effect (ensure reflow)
    setTimeout(() => {
        navbarNav.style.right = '0';  // Trigger the sliding effect after a short delay
    }, 10); // Short delay to allow for reflow to happen
});

// Hide the navbar when the close icon is clicked
mobileNavHide.addEventListener('click', function() {
    navbarNav.classList.remove('show');
    mobileNavShow.style.display = 'block';  // Show hamburger icon
    mobileNavHide.style.display = 'none';   // Hide close icon

    // Trigger the slide-out effect
    navbarNav.style.right = '-100%';  // Slide out effect
});

/**
 * Preloader
 */

const preloader = document.querySelector('#preloader');
if (preloader) {
    // Show the preloader for XX seconds
    setTimeout(() => {
        preloader.style.transition = 'opacity 1s ease-out';  // Set up the fade-out transition
        preloader.style.opacity = 0;  // Fade out the preloader after 10 seconds

        // Remove the preloader after the fade-out transition is complete
        setTimeout(() => {
            preloader.remove();  // Remove the preloader element after fade-out
        }, 1000);  // 1 second delay to match the fade-out transition duration
    }, 500); // Show preloader for XX seconds before fading out
}

/**
 * Animation on scroll function and init
 */
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Call the aos_init function after window load
window.addEventListener('load', () => {
    aos_init();
});





















}); // <-- Closing parenthesis for DOMContentLoaded listener



