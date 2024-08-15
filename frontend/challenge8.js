document.addEventListener('DOMContentLoaded', () => {
    const submitXSSButton = document.getElementById('submit-xss');
    const xssInput = document.getElementById('xss-input');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');
    const xssOutput = document.getElementById('xss-output'); // The div to output the script
    const challenge8Unlocked = localStorage.getItem('challenge7Complete');


    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }


    if (!challenge8Unlocked) {
        alert("You must complete Challenge 7 before accessing this challenge.");
        window.location.href = 'challenge7.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge8Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitXSSButton.disabled = true; // Disable the submit button
    }

    // Clear the textarea on page load
    xssInput.value = '';

    // Handle XSS script submission
    submitXSSButton.addEventListener('click', () => {
        const userInput = xssInput.value.trim();

        // Inject the user input into the output div
        xssOutput.innerHTML = userInput;

        // Check if the script tag is correctly inserted and handled
        try {
            const scripts = xssOutput.getElementsByTagName('script');
            if (scripts.length > 0) {
                eval(scripts[0].innerHTML); // Execute the script within the div
                resultElement.innerText = "Correct! You've executed the XSS payload.";
                resultElement.style.color = 'yellow';

                let score = parseInt(localStorage.getItem('score'));
                score += 50; // Award 10 points for completing the challenge
                localStorage.setItem('score', score);
    
                // Update the score display
                const scoreElement = document.getElementById('score');
                if (scoreElement) {
                scoreElement.innerText = `Score: ${score}`;
                }

                // Mark the current challenge as complete in localStorage
                localStorage.setItem('challenge8Complete', true);

                nextChallengeButton.style.display = 'block'; // Show the next challenge button
                popup.style.display = 'flex'; // Show the popup with explanation
            } else {
                resultElement.innerText = "Try again! Input a script payload.";
                resultElement.style.color = 'red';
            }
        } catch (error) {
            console.error('Error executing script:', error);
            resultElement.innerText = "An error occurred. Check your script and try again.";
            resultElement.style.color = 'red';
        }
    });

    // Handle closing the main popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Handle the hint button click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    // Handle closing the hint popup
    closeHint.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'challenge9.html'; // Replace with the actual URL for the next challenge
    });
});












