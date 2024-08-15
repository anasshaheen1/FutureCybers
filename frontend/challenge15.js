document.addEventListener('DOMContentLoaded', () => {
    const submitFileButton = document.getElementById('submit-file');
    const fileUpload = document.getElementById('file-upload');
    const resultElement = document.getElementById('result');
    const completeChallengeButton = document.getElementById('complete-challenge');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const hintButton = document.getElementById('hint-button');
    const hintPopup = document.getElementById('hint-popup');
    const closeHint = document.getElementById('close-hint');
    const challenge15Unlocked = localStorage.getItem('challenge14Complete');
    const badgePopup = document.getElementById('badge-popup');
    const closeBadgePopup = document.getElementById('close-badge-popup');

    // Check if score exists in localStorage, if not, set it to 0
    if (!localStorage.getItem('score')) {
        localStorage.setItem('score', 0);
    }

    // Display the current score
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.innerText = `Score: ${localStorage.getItem('score')}`;
    }


    if (!challenge15Unlocked) {
        alert("You must complete Challenge 14 before accessing this challenge.");
        window.location.href = 'challenge14.html'; // Redirect back to the previous challenge
    }

    // Check if the challenge has already been completed
    if (localStorage.getItem('challenge15Complete')) {
        // If the challenge is already completed, display a message and show the next challenge button
        resultElement.innerText = "You've already completed this challenge.";
        resultElement.style.color = 'yellow';
        completeChallengeButton.style.display = 'block';
        popup.style.display = 'flex'; // Show the popup with explanation
        fileUpload.disabled = true; // Disable file input
        submitFileButton.disabled = true; // Disable submit button
    }

    // Handle file upload submission
    submitFileButton.addEventListener('click', () => {
        const file = fileUpload.files[0];

        if (file) {
            const fileName = file.name.toLowerCase();

            if (fileName.endsWith('.php')) {
                resultElement.innerText = "File uploaded successfully! Vulnerability exploited.";

                let score = parseInt(localStorage.getItem('score'));
                score += 100; // Award 10 points for completing the challenge
                localStorage.setItem('score', score);
    
                // Update the score display
                const scoreElement = document.getElementById('score');
                if (scoreElement) {
                scoreElement.innerText = `Score: ${score}`;
                }

                fileUpload.disabled = true; // Disable file input
                submitFileButton.disabled = true; // Disable submit button

                // Mark the current challenge as complete in localStorage
                localStorage.setItem('challenge15Complete', true);

                // Award the Gold Badge
                localStorage.setItem('goldBadge', 'earned');

                completeChallengeButton.style.display = 'block';
                popup.style.display = 'flex';
            } else {
                resultElement.innerText = "Invalid file type. Only .php files are allowed.";
                completeChallengeButton.style.display = 'none';
            }
        } else {
            resultElement.innerText = "Please select a file to upload.";
            completeChallengeButton.style.display = 'none';
        }
    });

    // Handle closing the main popup
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';

        badgePopup.style.display = 'flex'; // Show the badge notification pop-up
    });

    // Handle the hint button click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block';
    });

    // Handle closing the hint popup
    closeHint.addEventListener('click', () => {
        hintPopup.style.display = 'none';
    });

    // Handle closing the badge popup
    closeBadgePopup.addEventListener('click', () => {
        badgePopup.style.display = 'none'; // Hide the badge pop-up
    });

    // Handle the completion of the challenge
    completeChallengeButton.addEventListener('click', () => {
        window.location.href = 'completion.html'; 
    });
});

