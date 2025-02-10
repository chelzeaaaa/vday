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

document.addEventListener('DOMContentLoaded', function () {
    const questions = [
        { question: "What is the name of the discord server where we had our first interaction? (enter the color part of the sv name)", answer: "violet", spotifyEmbed:"https://open.spotify.com/embed/track/0EFa7HXaZUAzu9q1UdVPBR?si=95c50157b6a54762" },
        { question: "Who was the first to send a text in dms? (name, not nickname)", answer: "chelsy", spotifyEmbed: "https://open.spotify.com/embed/track/4IeuTj1pEHuL9vJSiEqEfR?si=8fe91a37649f482c" },
        { question: "When did I first send you a text on ig?", answer: "november 21, 2024", spotifyEmbed: "https://open.spotify.com/embed/track/5CUQnKjA6nlteCnxMKsjIu?si=08c470e25cdc495c" },
        { question: "What response did you give whenever I flirted with you before I confessed? (hint: starts with a, 4 letter word)", answer: "asim", spotifyEmbed: "https://open.spotify.com/embed/track/63bmIgH9sS6sX5Sc7MetGq?si=8bc3da54e6824f5f" },
        { question: "When did we first match pfps?", answer: "november 30, 2024", spotifyEmbed: "https://open.spotify.com/embed/track/4u8RkgV6P4TLi89SmlUtv8?si=5c4f010158b24fe3" },
        { question: "When did I confess my feelings for you?", answer: "december 2, 2024", spotifyEmbed:"https://open.spotify.com/embed/track/3h8uWt8HNyDNubPSEBgTPG?si=a7bdda5284a141a7" },
        { question: "What date did I give you my first letter?", answer: "december 24, 2024", spotifyEmbed:"https://open.spotify.com/embed/track/1AuxZd50Dpaz0cCWphYryh?si=925363e2d7834578" },
        { question: "When did we watch squid game season 2?", answer: "december 27, 2024", spotifyEmbed:"https://open.spotify.com/embed/track/2jbf9EytR7fzpSrPWAYCf9?si=34d9cb63c1284443" },
        { question: "When did we watch the notebook?", answer: "january 2, 2025", spotifyEmbed:"https://open.spotify.com/embed/track/47OFMuRu5lzJHRbtEXPBbs?si=36c0a0da856748c4" },
        { question: "When did we first say I love you to each other?", answer: "january 24, 2025", spotifyEmbed:"https://open.spotify.com/embed/track/4iRRAvxPPWXQp3mV1rAbPF?si=dc2516de245148df" }
    ];

    let currentQuestionIndex = 0;

    const questionContainer = document.getElementById('question-container');
    const answerInput = document.getElementById('answer-input');
    const formContainer = document.querySelector('.form-container');
    const spotifyContainer = document.getElementById('spotify-container');

    function showQuestion(index) {
        questionContainer.innerHTML = '';
        const questionElement = document.createElement('p');
        questionElement.className = 'question';
        questionElement.textContent = questions[index].question;
        questionContainer.appendChild(questionElement);
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        if (userAnswer === questions[currentQuestionIndex].answer) {

            const newSpotifyEmbed = document.createElement('iframe');
                newSpotifyEmbed.src = questions[currentQuestionIndex ].spotifyEmbed;
                newSpotifyEmbed.width = "300";
                newSpotifyEmbed.height = "80";
                newSpotifyEmbed.frameBorder = 'none';
                newSpotifyEmbed.allow = "encrypted-media";
                spotifyContainer.appendChild(newSpotifyEmbed);
                spotifyContainer.style.display = 'flex';

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
                answerInput.value = '';

            } else {
                questionContainer.innerHTML = '';
                const congratsMessage = document.createElement('p');
                congratsMessage.textContent = 'i previously made you a playlist, but i did not want to reuse it. to make the q&a fun, i showed a song for each question. i hope you enjoyed the mini quiz and the songs! and yes, puro opm. i have been listening to opm for you cause you asked me a question noon kung ano gusto ko na opm song, hehe';
                questionContainer.appendChild(congratsMessage);

                formContainer.style.display = 'none';
                answerInput.value = '';
            }
        } else {
            showPopup();
        }
    }

    function showPopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
        popup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    answerInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });

    showQuestion(currentQuestionIndex);
});

document.querySelectorAll('.drink-button').forEach(button => {
    button.addEventListener('click', function() {
        const drinkType = this.dataset.drink;
        const modal = document.getElementById('drink-modal');
        const messageElement = document.getElementById('drink-message');

        let message = '';
        switch(drinkType) {
            case 'Water':
                message = 'always drink lots of water okay? warm water if your throat hurts or if you have cough! make sure you have water beside your bed so that you don\'t need to get up if you\'re lazy.';
                break;

            case 'Juice':
                message = 'strawberry juice because it\'s pink... you love pink so much and i think it\'s really cute that you incorporate your favorite color into the food and drinks you like. every time i see pink, i remember you.';
                break;

            case 'Soda':
                message = 'very unhealthy drink but you like it a lot, and i like you a lot. even though i do love you, i still like you very much, and none of that will ever fade away.';
                break;

            case 'Coffee':
                message = 'you love love love coffee so much, and so do i! but you can\'t drink too much coffee okay? just like how coffee is your favorite, you\'re my favorite person.';
                break;

            case 'Milk':
                message = 'i\'m not sure, but from what i\'ve noticed, you drink milk every night. it\'s sort of a routine, and you talk to me everyday, so i\'m glad to be a part of not only your daily routine, but your every day life.';
                break;

            case 'Matcha':
                message = 'i asked if you like this and you said medyo. you\'re uncertain whether you actually like it or not, but i\'m more than certain that i want to spend forever with you.';
                break;

            case 'Kitkat':
                message = 'have a break, have a kitkat? i know we took a short break (cool off...), but you\'re still the person that i love and you\'re still the person that i want to be with.';
                break;

            case 'Toblerone':
                message = 'i recently learned that you like this chocolate, and i get excited whenever i get to learn new things about you. i want to know and understand you so i can love you better.';
                break;

            case 'Icecream':
                message = 'ice cream seems to make you happy when you\'re feeling down. i hope i can make you happy whenever you\'re sad and take care of you when you\'re unwell.';
                break;

            default:
                message = 'what?';
        }

        messageElement.textContent = message;
        modal.style.display = 'flex';
    });
});

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('drink-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    const modal = this.document.getElementById('drink-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})
