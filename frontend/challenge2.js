document.addEventListener('DOMContentLoaded', () => {
    const submitResponseButton = document.getElementById('submit-response');
    const responseTextarea = document.getElementById('response');
    const resultElement = document.getElementById('result');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const nextChallengeButton = document.getElementById('next-challenge');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');

    // Handle response submission
    submitResponseButton.addEventListener('click', () => {
        const userResponse = responseTextarea.value.trim().toLowerCase();

        const containsSuspiciousLinks = userResponse.includes("suspicious links") || userResponse.includes("suspicious link");
        const containsUrgentLanguage = userResponse.includes("urgent language") || userResponse.includes("urgent message");

        if (containsSuspiciousLinks && containsUrgentLanguage) {
            resultElement.innerText = "Correct!";
            resultElement.style.color = 'yellow';
            popup.style.display = 'flex'; // Show the popup with explanation
            nextChallengeButton.style.display = 'block'; // Show the next challenge button
        } else {
            resultElement.innerText = "Try again! Make sure to look for signs of phishing.";
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
        window.location.href = 'challenge3.html'; 
    });
});








