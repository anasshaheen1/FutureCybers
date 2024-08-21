document.addEventListener('DOMContentLoaded', () => {
    const submitHTMLButton = document.getElementById('submit-html');
    const htmlInput = document.getElementById('html-input');
    const targetDiv = document.getElementById('target-div');
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
    if (localStorage.getItem('challenge7Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitHTMLButton.disabled = true; // Disable the submit button
    }

    // Handle HTML submission
    submitHTMLButton.addEventListener('click', () => {
        const userHTML = htmlInput.value.trim();

        // Validate and apply HTML injection
        if (userHTML) {
            targetDiv.innerHTML = userHTML;
            resultElement.innerText = "HTML injected successfully!";
            resultElement.style.color = 'yellow';

            let score = parseInt(localStorage.getItem('score'));
            score += 50; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
            }

            submitHTMLButton.disabled = true; // Disable the submit button

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge7Complete', true);

            nextChallengeButton.style.display = 'block'; // Show the next challenge button
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            resultElement.innerText = "Please enter valid HTML.";
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
        window.location.href = 'challenge8.html'; 
    });
});


