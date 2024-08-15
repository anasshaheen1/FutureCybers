document.addEventListener('DOMContentLoaded', () => {
    const submitSQLButton = document.getElementById('submit-sql');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');
    const challenge13Unlocked = localStorage.getItem('challenge12Complete');


    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }


    if (!challenge13Unlocked) {
        alert("You must complete Challenge 12 before accessing this challenge.");
        window.location.href = 'challenge12.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge13Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitSQLButton.disabled = true; // Disable the submit button
    }

    // Handle SQL form submission
    submitSQLButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simulate correct SQL Injection payload for validation
        if (username === "admin" && password === "admin' OR '1'='1") {
            resultElement.innerText = "Correct! You've bypassed the login.";
            resultElement.style.color = 'yellow';

            let score = parseInt(localStorage.getItem('score'));
            score += 100; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
            }

            submitSQLButton.disabled = true; // Disable the submit button

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge13Complete', true);

            nextChallengeButton.style.display = 'block'; // Show the next challenge button
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            resultElement.innerText = "Incorrect. Try a different input.";
            resultElement.style.color = 'red';
            nextChallengeButton.style.display = 'none'; // Hide the next challenge button
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
        window.location.href = 'challenge14.html'; 
    });
});








