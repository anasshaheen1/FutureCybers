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

    // Handle SQL form submission
    submitSQLButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simulate correct SQL Injection payload for validation
        if (username === "admin" && password === "admin' OR '1'='1") {
            resultElement.innerText = "Correct! You've bypassed the login.";
            resultElement.style.color = 'yellow';
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








