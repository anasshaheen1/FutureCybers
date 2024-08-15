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
    const challenge5Unlocked = localStorage.getItem('challenge4Complete');

    if (!challenge5Unlocked) {
        alert("You must complete Challenge 4 before accessing this challenge.");
        window.location.href = 'challenge4.html'; // Redirect back to the previous challenge
    }

    // Handle decryption submission
    submitDecryptedButton.addEventListener('click', () => {
        const userDecryption = decryptedInput.value.trim();

        if (userDecryption === correctDecryption) {
            resultElement.innerText = "Correct! You've decrypted the message.";
            resultElement.style.color = 'yellow';

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge5Complete', true);

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
    });

    // Handle the next challenge button
    nextChallengeButton.addEventListener('click', () => {
        window.location.href = 'level2.html'; 
    });
});

