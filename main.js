
var story = {
    currentScene: "begin",
    begin: {
        story: `
            Aliens invaded earth and started their world domination plans. You got caught but managed to escape and kill the Balharry that captured you.
            <br>
            Now, you are stuck inside their mothership, but with an advantage: Nobody knows you are here.
            <br>
            Your mission is to get to the navigation room and send them back to where they came from.
            <br>
            But remember, each decision will take you to a completely different scenario, and acting carelessly may and will lead you to death.
            <br>
            So be careful, and good luck.
            <br>
            <br>
            <br>
            You are currently in the floor-level of the spaceship, in a small and cold room with only you and the dead Balharry. Will you:
        `,
        choices: [
            {
                choice: "Search the Body",
                destination:'getGun'
            },
            {
                choice: "Leave the room immediately",
                destination:'noGun'
            },
            {
                choice: "Explore the mothership through the ventilation system",
                destination:'vent'
            }
        ]
    },
    getGun: {
        story: `

            <br>
            Now, you are stuck inside their mothership, but with an advantage: Nobody knows you are here.
            <br>
            Your mission is to get to the navigation room and send them back to where they came from.
            <br>
            But remember, each decision will take you to a completely different scenario, and acting carelessly may and will lead you to death.
            <br>
            So be careful, and good luck.
            <br>
            <br>
            <br>
            You are currently in the floor-level of the spaceship, in a small and cold room with only you and the dead Balharry. Will you:
        `,
        choices: [
            {
                choice: "Search the Body",
                destination:'getGun'
            },
            {
                choice: "Leave the room immediately",
                destination:'noGun'
            },
            {
                choice: "Explore the mothership through the ventilation system",
                destination:'vent'
            }
        ]
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var StartGame = document.querySelector('#StartGame')
    var start = document.querySelector('#start')
    StartGame.addEventListener('click', renderScene)
})

function renderScene() {
    start.innerHTML = `
    <p class="Text">${story[story.currentScene].story}</p>
    ${getButtons()}
 `
    for (let i = 0; i < story[story.currentScene].choices.length; i++) {
        let btnId = `#Choice${i}`
        let button = document.querySelector(btnId);
        button.addEventListener('click', () => {
            const destination = story[story.currentScene].choices[i].destination
            story.currentScene = destination
            renderScene()
        })
    }
}

function getButtons() {
    let buttons = ""
    for (let i = 0; i < story[story.currentScene].choices.length; i++) {
        buttons += `
        <button data-destination = ${story[story.currentScene].choices[i].destination} class="Button" id="Choice${i}" name="choices">${story[story.currentScene].choices[i].choice}
        </button>
        `
    }
    return buttons;
}

