document.addEventListener('DOMContentLoaded', function() {
    // Set the target values for each counter
    const targetValues = {
        counter1: 10, // Counter 1 stops at 10
        counter2: 5,  // Counter 2 stops at 5
        counter3: 8   // Counter 3 stops at 8
    };

    // Initialize counters
    const counters = {
        counter1: { element: document.getElementById('countValue1'), value: 0, target: targetValues.counter1 },
        counter2: { element: document.getElementById('countValue2'), value: 0, target: targetValues.counter2 },
        counter3: { element: document.getElementById('countValue3'), value: 0, target: targetValues.counter3 }
    };

    // Function to update the counter display
    function updateCounterDisplay(counter) {
        counter.element.innerText = counter.value;
    }

    // Function to increment each counter automatically
    function incrementCounter(counter) {
        const interval = setInterval(function() {
            if (counter.value < counter.target) {
                counter.value++;
                updateCounterDisplay(counter);
            } else {
                clearInterval(interval); // Stop incrementing when target is reached
            }
        }, 150); // Increment time (currently set at 150ms)
    }

    // Intersection Observer to detect when the counter elements are visible in the viewport
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the counter element is visible
    };

    // Function to start the counter when visible in the viewport
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterId = entry.target.id; // Get the counter ID (e.g., 'counter1', 'counter2', 'counter3')
                incrementCounter(counters[counterId]); // Start incrementing the counter
                observer.unobserve(entry.target); // Stop observing after it's triggered
            }
        });
    }

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe the counter elements
    Object.keys(counters).forEach(counterId => {
        const counterElement = document.getElementById(counterId);
        observer.observe(counterElement); // Start observing the counter element
    });
});
