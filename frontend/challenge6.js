document.addEventListener('DOMContentLoaded', () => {
    const submitFlagButton = document.getElementById('submit-flag');
    const flagInput = document.getElementById('flag-input');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');

    const hiddenFlag = 'FLAG{hidden_information_found}'; // The correct flag
    const challenge6Unlocked = localStorage.getItem('challenge5Complete');


    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }


    if (!challenge6Unlocked) {
        alert("You must complete Challenge 5 before accessing this challenge.");
        window.location.href = 'challenge5.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge6Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitFlagButton.disabled = true; // Disable the submit button
    }

    // Handle flag submission
    submitFlagButton.addEventListener('click', () => {
        const userFlag = flagInput.value.trim();

        if (userFlag === hiddenFlag) {
            resultElement.innerText = "Correct! You've found the hidden information.";
            resultElement.style.color = 'yellow'; // Set the result text color to yellow

            let score = parseInt(localStorage.getItem('score'));
            score += 50; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
            }

            submitFlagButton.disabled = true; // Disable the submit button

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge6Complete', true);

            nextChallengeButton.style.display = 'block'; // Show the next challenge button
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            resultElement.innerText = "Incorrect flag. Try again!";
            resultElement.style.color = 'red'; // Set incorrect message color to red
            nextChallengeButton.style.display = 'none'; // Hide the next challenge button
        }
    });

    // Handle closing the popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'challenge7.html'; 
    });

    // Handle Hint Button Click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    // Handle Closing Hint Popup
    closeHint.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });
});






