document.addEventListener('DOMContentLoaded', () => {
    const submitPasswordButton = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password-input');
    const resultElement = document.getElementById('result');
    const attemptsElement = document.getElementById('attempts');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');

    const correctPassword = '123456'; // The correct password to guess
    let attemptsRemaining = 5;

    const challenge10Unlocked = localStorage.getItem('challenge9Complete');

    if (!challenge10Unlocked) {
        alert("You must complete Challenge 9 before accessing this challenge.");
        window.location.href = 'challenge9.html'; // Redirect back to the previous challenge
    }

    // Handle password submission
    submitPasswordButton.addEventListener('click', () => {
        const userPassword = passwordInput.value.trim();

        if (userPassword === correctPassword) {
            resultElement.innerText = "Correct password!";
            resultElement.style.color = 'yellow';

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge10Complete', true);

            nextChallengeButton.style.display = 'block'; // Show the next challenge button
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            attemptsRemaining--;
            attemptsElement.innerText = `Attempts remaining: ${attemptsRemaining}`;

            if (attemptsRemaining > 0) {
                resultElement.innerText = "Incorrect password. Try again!";
                resultElement.style.color = 'red';
            } else {
                resultElement.innerText = "No attempts left. You've been locked out!";
                resultElement.style.color = 'red';
                submitPasswordButton.disabled = true; // Disable the submit button
            }
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
        window.location.href = 'level3.html'; 
    });
});

