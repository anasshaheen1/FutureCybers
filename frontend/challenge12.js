document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    // Hint Button and Popup
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHintButton = document.getElementById('close-hint');
    const challenge12Unlocked = localStorage.getItem('challenge11Complete');

    if (!challenge12Unlocked) {
        alert("You must complete Challenge 11 before accessing this challenge.");
        window.location.href = 'challenge11.html'; // Redirect back to the previous challenge
    }

    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block'; // Show the hint popup
    });

    closeHintButton.addEventListener('click', () => {
        hintPopup.style.display = 'none'; // Hide the hint popup
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedOption = option.id;

            // Check which option was selected
            if (selectedOption === 'option1') {
                resultElement.innerText = "Correct! Logging out and changing your password is the best action.";
                resultElement.style.color = 'yellow';

                // Mark the current challenge as complete in localStorage
                localStorage.setItem('challenge12Complete', true);

                nextChallengeButton.style.display = 'block';
                popup.style.display = 'flex'; // Show the popup with explanation
            } else {
                resultElement.innerText = "Incorrect. Try again and think about the best way to secure your account.";
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
        window.location.href = 'challenge13.html'; 
    });
});



