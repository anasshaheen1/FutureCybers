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

    // Handle file upload submission
    submitFileButton.addEventListener('click', () => {
        const file = fileUpload.files[0];

        if (file) {
            const fileName = file.name.toLowerCase();

            if (fileName.endsWith('.php')) {
                resultElement.innerText = "File uploaded successfully! Vulnerability exploited.";
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
    });

    // Handle the hint button click
    hintButton.addEventListener('click', () => {
        hintPopup.style.display = 'block';
    });

    // Handle closing the hint popup
    closeHint.addEventListener('click', () => {
        hintPopup.style.display = 'none';
    });

    // Handle the completion of the challenge
    completeChallengeButton.addEventListener('click', () => {
        window.location.href = 'completion.html'; 
    });
});

