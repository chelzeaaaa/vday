function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    if (sectionId === 'aquarium') {
        initializeSharks();
    }
}
function initializeSharks() {
    const sharks = document.querySelectorAll('.shark');
    sharks.forEach(shark => {

        shark.addEventListener('click', function startSwim() {
            const randomTop = Math.floor(Math.random() * 450) + 'px';
            shark.style.top = randomTop;

            const randomDelay = Math.random() * 5 + 's';
            shark.style.animationDelay = randomDelay;

            const randomDuration = Math.random() * 7 + 8 + 's';
            shark.style.setProperty('--swim-duration', randomDuration);

            shark.style.animation = 'swim var(--swim-duration) linear infinite';
            shark.removeEventListener('click', startSwim);

            shark.addEventListener('animationiteration', () => {
                const newRandomTop = Math.floor(Math.random() * 450) + 'px';
                shark.style.top = newRandomTop;

                const newRandomDuration = Math.random() * 7 + 8 + 's';
                shark.style.setProperty('--swim-duration', newRandomDuration);

                shark.style.animation = 'none';
                shark.offsetHeight;
                shark.style.animation = 'swim var(--swim-duration) linear infinite';
            });
        });
        });
}

document.querySelectorAll('.strawberry').forEach(strawberry => {
    strawberry.addEventListener('click', () => {
        const hiddenText = strawberry.nextElementSibling;

        hiddenText.style.display = 'block';

        strawberry.classList.add('fall');

        setTimeout(() => {
            hiddenText.style.display = 'none';
            strawberry.classList.remove('fall');
            strawberry.style.top = '30%';
            strawberry.style.display = 'block';
        }, 2000);
    });
});

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter');
    envelope.classList.toggle('open');
    if (envelope.classList.contains('open')) {
        letter.style.transform = 'translate(-50%, -00%) translateY(-50%) rotateX(0deg)';
        letter.style.opacity = '1';
    } else {
        letter.style.transform = 'translate(-50%, -50%) translateY(-50%) rotateX(0deg)';
        letter.style.opacity = '0';
    }
}

function showLetter(event) { 
    event.stopPropagation();
    const letter = document.querySelector('.letter');
    letter.style.transform = 'translate(-50%, -0%) translateY(-50%) rotateX(0deg)';
    letter.style.opacity = '1';
}