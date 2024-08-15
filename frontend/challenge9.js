document.addEventListener('DOMContentLoaded', () => {
    const submitPasswordButton = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password-input');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');

    const correctPassword = 'password'; // The password corresponding to the MD5 hash

    // Handle password submission
    submitPasswordButton.addEventListener('click', () => {
        const userPassword = passwordInput.value.trim();

        if (userPassword === correctPassword) {
            resultElement.innerText = "Correct! You've cracked the password.";
            resultElement.style.color = 'yellow';
            nextChallengeButton.style.display = 'block';
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            resultElement.innerText = "Incorrect password. Try again!";
            resultElement.style.color = 'red';
            nextChallengeButton.style.display = 'none';
        }
    });

    // Handle closing the popup
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
        window.location.href = 'challenge10.html'; 
    });
});








