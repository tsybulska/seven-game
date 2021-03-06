document.addEventListener('DOMContentLoaded', () => {
    function openAcc(el) {
        let panel = el.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;

            if (el === chooseTitle) chooseTitle.querySelector('svg').style.transform = 'rotate(180deg)'
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';

            if (el === chooseTitle) chooseTitle.querySelector('svg').style.transform = 'rotate(0deg)'
        }
    }

    const chooseTitle = document.querySelector('.hero__title')
    const gameList = document.querySelector('.hero').querySelector('ul')
    const gameListItems = gameList.querySelectorAll('li')
    const gameContent = document.querySelectorAll('.content__item')
    let stopGameFlag = true

    openAcc(chooseTitle)

    chooseTitle.addEventListener('click', function () {
        openAcc(chooseTitle)
    })

    gameList.addEventListener('click', function (event) {
        let clickedItem = event.target
        let clickedItemName = clickedItem.dataset.type

        openAcc(chooseTitle)

        gameListItems.forEach(item => {
            item.style.textDecoration = 'none'
            item.querySelector('svg').style.opacity = '0'
        })

        memoryGame(stopGameFlag)
        whackAMole(stopGameFlag)
        connectFour(stopGameFlag)
        snake(stopGameFlag)
        spaceInvaders(stopGameFlag)
        frogger(stopGameFlag)
        tetris(stopGameFlag)

        for (let i = 0; i < gameContent.length; i++) {
            gameContent[i].style.display = 'none'

            if (gameContent[i].classList.contains(clickedItemName)) {
                gameContent[i].style.display = 'flex'
                clickedItem.style.textDecoration = 'underline'
                clickedItem.querySelector('svg').style.opacity = '1'

                if (clickedItemName === 'memory-game') {
                    memoryGame()
                } else if (clickedItemName === 'whack-a-mole') {
                    whackAMole()
                } else if (clickedItemName === 'connect-four') {
                    connectFour()
                } else if (clickedItemName === 'snake') {
                    snake()
                } else if (clickedItemName === 'space-invaders') {
                    spaceInvaders()
                } else if (clickedItemName === 'frogger') {
                    frogger()
                } else if (clickedItemName === 'tetris') {
                    tetris()
                }
            }
        }
    })
})