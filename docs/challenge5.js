document.addEventListener('DOMContentLoaded', () => {
    const submitDecryptedButton = document.getElementById('submit-decrypted');
    const decryptedInput = document.getElementById('decrypted-input');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHintButton = document.getElementById('close-hint');

    const correctDecryption = 'There is a secret message'; // The decrypted message

    const badgePopup = document.getElementById('badge-popup');
    const closeBadgePopup = document.getElementById('close-badge-popup');

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
    if (localStorage.getItem('challenge5Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitDecryptedButton.disabled = true; // Disable the submit button
    }

    // Handle decryption submission
    submitDecryptedButton.addEventListener('click', () => {
        const userDecryption = decryptedInput.value.trim();

        if (userDecryption === correctDecryption) {
            resultElement.innerText = "Correct! You've decrypted the message.";
            resultElement.style.color = 'yellow';

            let score = parseInt(localStorage.getItem('score'));
            score += 10; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
            } 

            submitDecryptedButton.disabled = true; // Disable the submit button

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge5Complete', true);

            // Award the Bronze Badge
            localStorage.setItem('bronzeBadge', 'earned');

            nextChallengeButton.style.display = 'block';
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            resultElement.innerText = "Incorrect decryption. Try again!";
            resultElement.style.color = 'red';
            nextChallengeButton.style.display = 'none';
        }
    });

    // Handle hint button click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    // Handle closing the hint popup
    closeHintButton.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });

    // Handle closing the main popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup

        badgePopup.style.display = 'flex'; // Show the badge notification pop-up
    });

    // Handle closing the badge popup
    closeBadgePopup.addEventListener('click', () => {
        badgePopup.style.display = 'none'; // Hide the badge pop-up
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'level2.html'; 
    });
});

