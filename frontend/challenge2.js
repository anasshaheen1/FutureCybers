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
    const challenge2Unlocked = localStorage.getItem('challenge1Complete');

    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }


    if (!challenge2Unlocked) {
        alert("You must complete Challenge 1 before accessing this challenge.");
        window.location.href = 'challenge1.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge2Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitResponseButton.disabled = true; // Disable the submit button
    }
    
    // Handle response submission
    submitResponseButton.addEventListener('click', () => {
        const userResponse = responseTextarea.value.trim().toLowerCase();

        const containsSuspiciousLinks = userResponse.includes("suspicious links") || userResponse.includes("suspicious link");
        const containsUrgentLanguage = userResponse.includes("urgent language") || userResponse.includes("urgent message");
        
        if (containsSuspiciousLinks && containsUrgentLanguage) {
            resultElement.innerText = "Correct!";
            resultElement.style.color = 'yellow';

            let score = parseInt(localStorage.getItem('score'));
            score += 10; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
            }

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge2Complete', true);

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








