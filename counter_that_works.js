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
        }, 150); // Increment timne / currently set at 150ms
    }

    // Start the counters automatically when the DOM is ready
    incrementCounter(counters.counter1);
    incrementCounter(counters.counter2);
    incrementCounter(counters.counter3);
});
