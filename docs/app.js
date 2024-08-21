document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation from main page to level selection page
    const startButton = document.getElementById('start-challenges');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = 'select-level.html';
        });
    }

    // Handle navigation from main page to How to Play page
    const howToPlayButton = document.getElementById('how-to-play');
    if (howToPlayButton) {
        howToPlayButton.addEventListener('click', () => {
            window.location.href = 'how-to-play.html';
        });
    }

    // Handle navigation to badges page
    const viewBadgesButton = document.getElementById('view-badges');
    if (viewBadgesButton) {
        viewBadgesButton.addEventListener('click', () => {
            window.location.href = 'badges.html';
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


    // Handle challenge buttons (for all levels) with completion and locking logic
    const challenges = [
        { id: 'challenge1', key: 'challenge1Complete' },
        { id: 'challenge2', key: 'challenge2Complete' },
        { id: 'challenge3', key: 'challenge3Complete' },
        { id: 'challenge4', key: 'challenge4Complete' },
        { id: 'challenge5', key: 'challenge5Complete' },
        { id: 'challenge6', key: 'challenge6Complete' },
        { id: 'challenge7', key: 'challenge7Complete' },
        { id: 'challenge8', key: 'challenge8Complete' },
        { id: 'challenge9', key: 'challenge9Complete' },
        { id: 'challenge10', key: 'challenge10Complete' },
        { id: 'challenge11', key: 'challenge11Complete' },
        { id: 'challenge12', key: 'challenge12Complete' },
        { id: 'challenge13', key: 'challenge13Complete' },
        { id: 'challenge14', key: 'challenge14Complete' },
        { id: 'challenge15', key: 'challenge15Complete' }
    ];

    challenges.forEach((challenge, index) => {
        const button = document.getElementById(challenge.id);
        if (button) {
            const isComplete = localStorage.getItem(challenge.key);
            if (isComplete) {
                button.classList.add('completed');
                button.disabled = true; // Disable completed challenges
            } else if (index > 0 && !localStorage.getItem(challenges[index - 1].key)) {
                button.classList.add('locked');
                button.disabled = true; // Lock challenges if previous is not completed
            }
            button.addEventListener('click', () => {
                window.location.href = `${challenge.id}.html`;
            });
        }
    });

});

















