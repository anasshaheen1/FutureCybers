document.addEventListener('DOMContentLoaded', () => {
    const submitVigenereButton = document.getElementById('submit-vigenere');
    const vigenereInput = document.getElementById('vigenere-input');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHintButton = document.getElementById('close-hint');

    const encryptedMessage = "WIVVSRWGRFLZLLH"; // Encrypted message
    const keyword = "KEY"; // Keyword for decryption
    const correctDecryption = decryptVigenere(encryptedMessage, keyword); // The correct decrypted message


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
    if (localStorage.getItem('challenge11Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        nextChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        submitVigenereButton.disabled = true; // Disable the submit button
    }

    function decryptVigenere(cipherText, keyword) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let decryptedText = '';

        for (let i = 0; i < cipherText.length; i++) {
            const cipherChar = cipherText[i];
            const keyChar = keyword[i % keyword.length];
            const cipherIndex = alphabet.indexOf(cipherChar);
            const keyIndex = alphabet.indexOf(keyChar);

            if (cipherIndex !== -1) {
                const decryptedIndex = (cipherIndex - keyIndex + 26) % 26;
                decryptedText += alphabet[decryptedIndex];
            } else {
                decryptedText += cipherChar;
            }
        }

        return decryptedText;
    }

    // Handle decryption submission
    submitVigenereButton.addEventListener('click', () => {
        const userDecryption = vigenereInput.value.trim().toUpperCase();

        if (userDecryption === correctDecryption) {
            resultElement.innerText = "Correct! You've decrypted the message.";
            resultElement.style.color = 'yellow';

            let score = parseInt(localStorage.getItem('score'));
            score += 100; // Award 10 points for completing the challenge
            localStorage.setItem('score', score);

            // Update the score display
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
            scoreElement.innerText = `Score: ${score}`;
            }

            submitVigenereButton.disabled = true; // Disable the submit button

            // Mark the current challenge as complete in localStorage
            localStorage.setItem('challenge11Complete', true);

            nextChallengeButton.style.display = 'block';
            popup.style.display = 'flex'; // Show the popup with explanation
        } else {
            resultElement.innerText = "Incorrect decryption. Try again!";
            resultElement.style.color = 'red';
            nextChallengeButton.style.display = 'none';
        }
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
        window.location.href = 'challenge12.html'; 
    });
});

