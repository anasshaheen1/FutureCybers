document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHintButton = document.getElementById('close-hint');
    const challenge4Unlocked = localStorage.getItem('challenge3Complete');

    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }



    if (!challenge4Unlocked) {
        alert("You must complete Challenge 3 before accessing this challenge.");
        window.location.href = 'challenge3.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge4Complete')) {
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
            if (selectedOption === 'option4') {
                resultElement.innerText = "Correct! Reporting the email is the safest action.";
                resultElement.style.color = 'yellow';

                let score = parseInt(localStorage.getItem('score'));
                score += 10; // Award 10 points for completing the challenge
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
                localStorage.setItem('challenge4Complete', true);

                nextChallengeButton.style.display = 'block';
                popup.style.display = 'flex'; // Show the popup with explanation
            } else {
                resultElement.innerText = "Incorrect. Try again and think about the best way to protect your data.";
                resultElement.style.color = 'red';
                nextChallengeButton.style.display = 'none';
            }
        });
    });

    // Handle closing the popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Handle hint button click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    // Handle closing the hint popup
    closeHintButton.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'challenge5.html'; 
    });
});



