document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');
    const challenge14Unlocked = localStorage.getItem('challenge13Complete');


    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }



    if (!challenge14Unlocked) {
        alert("You must complete Challenge 13 before accessing this challenge.");
        window.location.href = 'challenge13.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge14Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation

        // Disable all option buttons by adding the 'disabled' class
        options.forEach(option => {
            option.classList.add('disabled');
        });
    }

    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedOption = option.id;

            // Check which option was selected
            if (selectedOption === 'option2') {
                resultElement.innerText = "Correct! Verifying the connection and checking for tampering is the safest action.";
                resultElement.style.color = 'yellow';

                let score = parseInt(localStorage.getItem('score'));
                score += 100; // Award 10 points for completing the challenge
                localStorage.setItem('score', score);
    
                // Update the score display
                const scoreElement = document.getElementById('score');
                if (scoreElement) {
                scoreElement.innerText = `Score: ${score}`;
                }

                // Disable all option buttons by adding the 'disabled' class
                options.forEach(option => {
                    option.classList.add('disabled');
                });

                // Mark the current challenge as complete in localStorage
                localStorage.setItem('challenge14Complete', true);

                nextChallengeButton.style.display = 'block';
                popup.style.display = 'flex'; // Show the popup with explanation
            } else {
                resultElement.innerText = "Incorrect. Try again and think about the best way to secure your communication.";
                resultElement.style.color = 'red';
                nextChallengeButton.style.display = 'none';
            }
        });
    });

    // Handle closing the popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'challenge15.html'; 
    });

    // Handle the hint button
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    // Handle closing the hint popup
    closeHint.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });
});
