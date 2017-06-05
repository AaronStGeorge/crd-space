(function() {
    var cards = [
        {
            'question': {
                'text': 'What is the meaning of life?'
            },
            'answer': {
                'text': '42'
            }
        },
        {
            'question': {
                'text': 'Who are you?'
            },
            'answer': {
                'text': 'Me'
            }
        }
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function displayCard(card) {
        document.querySelector('#front-content').textContent = card.question.text;
        document.querySelector('#back-content').textContent = card.answer.text;
    }

    function displayRandomCard() {
        var index = getRandomInt(0, cards.length);
        displayCard(cards[index]);
    }

    function loadCards(jsonPath) {
    }

    function resetCard() {
        document.querySelector('#card').classList.remove('flip');
    }

    function flipCard() {
        document.querySelector('#card').classList.toggle('flip');
    }

    document.querySelector('#flip-button').addEventListener('click', flipCard);
    document.querySelector('#random-button').addEventListener('click', displayRandomCard);
})();
