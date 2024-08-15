document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation from main page to level selection page
    const startButton = document.getElementById('start-challenges');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = 'select-level.html';
        });
    }

    // Handle navigation from level selection page to specific levels
    const levelButtons = {
        level1: 'level1.html',
        level2: 'level2.html',
        level3: 'level3.html'
    };

    Object.keys(levelButtons).forEach(levelId => {
        const button = document.getElementById(levelId);
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = levelButtons[levelId];
            });
        }
    });

    // Handle challenge buttons (for all levels)
    const challengeButtons = {
        challenge1: 'challenge1.html',
        challenge2: 'challenge2.html',
        challenge3: 'challenge3.html',
        challenge4: 'challenge4.html',
        challenge5: 'challenge5.html',
        challenge6: 'challenge6.html',
        challenge7: 'challenge7.html',
        challenge8: 'challenge8.html',
        challenge9: 'challenge9.html',
        challenge10: 'challenge10.html',
        challenge11: 'challenge11.html',
        challenge12: 'challenge12.html',
        challenge13: 'challenge13.html',
        challenge14: 'challenge14.html',
        challenge15: 'challenge15.html',
    };

    Object.keys(challengeButtons).forEach(challengeId => {
        const button = document.getElementById(challengeId);
        if (button) {
            button.addEventListener('click', () => {
                window.location.href = challengeButtons[challengeId];
            });
        }
    });

    // Handle finish button if needed
    const finishButton = document.getElementById('finish');
    if (finishButton) {
        finishButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to the main page or a completion page
        });
    }
    

});
















