document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('result');
    const nextChallengeButton = document.getElementById('next-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');

    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHintButton = document.getElementById('close-hint');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const selectedOption = option.id;

            // Check which option was selected
            if (selectedOption === 'option4') {
                resultElement.innerText = "Correct! Reporting the email is the safest action.";
                resultElement.style.color = 'yellow';
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



