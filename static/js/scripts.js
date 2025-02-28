document.addEventListener('DOMContentLoaded', function() {
    // Set the duration in milliseconds (2000ms = 2 seconds)
    const hideDuration = 3000;

    // Select all alerts with the class 'alert-custom'
    const alerts = document.querySelectorAll('.alert-custom');

    alerts.forEach(alert => {
        // Sets the timeout for each alert
        setTimeout(() => {
            // Add the 'fade' and 'show' classes to hide the alert
            alert.classList.add('fade');
            alert.classList.remove('show');
            
            // After fade transition ends, remove the alert from the DOM
            alert.addEventListener('transitionend', () => {
                alert.remove();
            });
        }, hideDuration);
    });

    const mobileNavShow = document.getElementById('mobile-nav-show');
    const mobileNavHide = document.getElementById('mobile-nav-hide');
    const navbarNav = document.getElementById('navbarNav');

    // Ensure the navbarNav transition is ready when the page loads
    navbarNav.style.transition = 'right 2s ease-in-out'; // This ensures the transition is set from the beginning
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
});

