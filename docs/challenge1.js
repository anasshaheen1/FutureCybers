document.addEventListener('DOMContentLoaded', () => {
    const submitChallengeButton = document.getElementById('submit-challenge');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');

    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge1Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitChallengeButton.disabled = true; // Disable the submit button
    }

    // Handle challenge submission
    submitChallengeButton.addEventListener('click', () => {
        const userMessage = document.getElementById('decoded-message').value.trim().toLowerCase();
        const correctMessage = "hello world!"; // Example correct message in lowercase

        if (userMessage === correctMessage) {
            resultElement.innerText = "Correct! You've completed the challenge.";
            resultElement.style.color = 'yellow';

            let score = parseInt(localStorage.getItem('score'));
            score += 10; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            if (scoreElement) {
                scoreElement.innerText = `Score: ${score}`;
            }

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge1Complete', true);

            nextChallengeButton.style.display = 'block';
            popup.style.display = 'flex'; // Show the popup with explanation
            submitChallengeButton.disabled = true; // Disable the submit button to prevent further submissions
        } else {
            resultElement.innerText = "Incorrect. Try again!";
            resultElement.style.color = 'red';
            nextChallengeButton.style.display = 'none';
        }
    });

    // Handle closing the main popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Handle hint button click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    // Handle closing the hint popup
    closeHint.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'challenge2.html'; 
    });
});



