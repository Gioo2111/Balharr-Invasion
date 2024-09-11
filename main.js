
var story = {
    currentScene: "begin",
    begin: {
        story: `
            <pre class="ascii-art">
                 .     .       .  .   . .   .   . .    +  .
      .     .  :     .    .. :. .___---------___.
          .  .   .    .  :.:. _".^ .^ ^.  '.. :"-_. .
        .  :       .  .  .:../:            . .^  :.:\.
            .   . :: +. :.:/: .   .    .        . . .:\
    .  :    .     . _ :::/:               .  ^ .  . .:\
      .. . .   . - : :.:./.                        .  .:\
      .      .     . :..|:                    .  .  ^. .:|
        .       . : : ..||        .                . . !:|
      .     . . . ::. ::\(                           . :)/
    .   .     : . : .:.|. ######              .#######::|
      :.. .  :-  : .:  ::|.#######           ..########:|
    .  .  .  ..  .  .. :\ ########          :######## :/
      .        .+ :: : -.:\ ########       . ########.:/
        .  .+   . . . . :.:\. #######       #######..:/
          :: . . . . ::.:..:.\           .   .   ..:/
      .   .   .  .. :  -::::.\.       | |     . .:/
          .  :  .  .  .-:.":.::.\             ..:/
    .      -.   . . . .: .:::.:.\.           .:/
    .   .   .  :      : ....::_:..:\   ___.  :/
      .   .  .   .:. .. .  .: :.:.:\       :/
        +   .   .   : . ::. :.:. .:.|\  .:/|
        .         +   .  .  ...:: ..|  --.:|
    .      . . .   .  .  . ... :..:.."(  ..)"
    .   .       .      :  .   .: ::/  .  .::\ 
            </pre>
            <p class="Text">Aliens invaded earth and started their world domination plans. You got caught but escaped and killed the Balharry that captured you.<br>
            Now, you are stuck inside their mothership, but with an advantage: Nobody knows you are here.<br>
            Your mission is to get to the navigation room and send them back to where they came from.<br>
            But remember, each decision will take you to a completely different scenario, and acting carelessly may and will lead you to death.<br>
            So be careful, and good luck.
            <br>
            <br>
            <br>
            You are currently in the floor-level of the spaceship, in a small and cold room with only you and the dead Balharry. Will you:</p>
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
            <pre class="ascii-art">
                                 __ 1      1 __        _.xxxxxx.
                 [xxxxxxxxxxxxxx|##|xxxxxxxx|##|xxxxxxXXXXXXXXX|
 ____            [XXXXXXXXXXXXXXXXXXXXX/.\||||||XXXXXXXXXXXXXXX|
|::: '-------.-.__+=========---___/::::|::::::|::::||X O^XXXXXX|
|::::::::::::|2|%%%%%%%%%%%%\::::::::::|::::::|::::||X /
|::::,-------|_|~~~~~~~~~~~~~'---=====-------------':||  5
 ~~~~                       |===|:::::|::::::::|::====:\O
                            |===|:::::|:.----.:|:||::||:|
                            |=3=|::4::''::::::'':||__||:|
                            |===|:::::::/  ))\:::'----':/
                            '===|::::::|  // //~'######b
                                '--------=====/  ######B
                                                 '######b
                                                  #######b
                                                  #######B
                                                  '#######b
                                                   #######P
                                                   '#####B

            </pre>
            <p class="Text">You found a laser gun! Really lucky... Now, which way will you go?</p>
        `,
        choices: [
            {
                choice: "Leave the room immediately",
                destination:'leaveRoom'
            },
            {
                choice: "Explore the mothership through the ventilation system",
                destination:'ventGun'
            }
        ]
    },
    leaveRoom: {
        story: `
            <pre class="ascii-art">
                     o   o                                         
                      )-(
                     (O O)                                       
                      \=/
                     .-"-.
                    //\ /\\
                  _// / \ \\_
                 =./ {,-.} \.=
                     || ||
                     || ||    
                  _ _|| ||__  
                  '---" "---'    
            </pre>
            <p class="Text">You slowly open the door to a poorly lit hallway, it is really elongated and full of doors.<br>
            They look all the same, and you take some time to think about where you should go first.<br>
            Interrupting your thoughts, you hear two aliens approaching from the end of the hallway.</p>
        `,
        choices: [
            {
                choice: "Aim at the end of the hallway with you laser gun",
                destination:'gunFail'
            },
            {
                choice: "Enter the closest door to you",
                destination:'hallwayDoor'
            },
        ]
    },
    gunFail: {
        story: `
            <pre class="ascii-art">
                _.--""--._
               /  _    _  \
            _  ( (_\  /_) )  _
           { \._\   /\   /_./ }
           /_"=-.}______{.-="_\
            _  _.=("""")=._  _
           (_'"_.-"'~~'"-._"'_)
            {_"            "_}  
            </pre>
            <p class="Text">You aim confidently at the voices, and when the two Balharry appear, you pull the trigger.<br>
            The gun did not work, and you try desperately to shoot again and again and again,<br>
            but as your attempts fail, they quickly take their guns and shoot you.<br>
            You died with multiple laser beams ripping through your body.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    hallwayDoor: {
        story: `
            <p class="Text">You quickly open the first door you can and hide inside quietly. The room is completely dark,<br> 
            but before looking around you sit in silence waitinng for the aliens in the hallway to leave.<br>
            It doesn't take long, as they walk past you without saying a word to each other.<br>
            "Do they even talk?", you wonder as you try to feel the room for something useful.<br>
            You feel some kind of switch, wondering if you shoud pull it...</p>
        `,
        choices: [
            {
                choice: "Yes",
                destination:'labOn'
            },
            {
                choice: "No",
                destination:'labOff'
            }
        ]
    },
    vent: {
        story: `
            <p class="Text">You crawl inside the ventilation system, it is small but big enough to fit a human.<br> 
            Inside, you can only go right, and then keep going forward. You can see what's going on under you from the gaps.<br>
            It looks like a dark hallway, and you haven't found anything that gives you a clue to where is the navigation room.<br>
            Completely clueless, the ventilation now only goes two ways: to the right, where you can see a red light from a short distance,<br>
            while to the left you see nothing but pure darkness.<br>
            Which way are you choosing?</p>
        `,
        choices: [
            {
                choice: "Right",
                destination:'prisonCell'
            },
            {
                choice: "Left",
                destination:'fanDeath'
            }
        ]
    },
    prisonCell: {
        story: `
            <pre class="ascii-art">
                                  ###########                  /
                 \                  #########                  /
                  \                                           /
                   \                                         /
                    \                                       /
                     \                                     /
                      \                                   /
                       \_________________________________/
                       |                                 |
                       |                                 |
                       |                                 |
                       |            _________            |
                       |           |         |           |
                       |           |   ___   |           |
                       |           I  |___|  |           |
                       |           |         |           |
                       |           |         |           |
                       |           |        _|           |
                       |           |       |#|           |  
               -- ___  |           |         |           |  
                 /   ' |           |         |      _____|    
               */     )|           I         |     \_____\    
               /___.,';|           |         |     \\     \     
               |     ; |___________|_________|______\\     \      
               | ._,'  /                             \\     \      
               |,'    /                               \\     \
               ||    /                                 \\_____\
               ||   /                                   \_____|
               ||  /              ___________                \
         
            </pre>
            <p class="Text">You follow to the right and crawl until you reach the red light you've seen before. You look under you<br>
            to see a small room with a reinforced door, simple and few furniture and an alien inside it.<br>
            From your perspective, it looks like a jail cell, and that alien must be the prisoner.<br>
            This one looks very different from the one that captured you, with different shape, color, size and features, probably from another planet.<br>
            He suddenly looks up directly at you and whispers something you cannot comprehend.<br>
            Now, what will you do?</p>
        `,
        choices: [
            {
                choice: "Ignore him and keep going",
                destination:'secRoom'
            },
            {
                choice: "Get inside the cell",
                destination:'escapeCell'
            },
        ]
    },
    ventGun: {
        story: `
            <p class="Text">You crawl inside the ventilation system, it is small but big enough to fit a human.<br> 
            Inside, you can only go right, and then keep going forward. You can see what's going on under you from the gaps.<br>
            It looks like a dark hallway, and you haven't found anything that gives you a clue to where is the navigation room.<br>
            Completely clueless, the ventilation now only goes two ways: to the right, where you can see a red light from a short distance,<br>
            while to the left you see nothing but pure darkness.<br>
            Which way are you choosing?</p>
        `,
        choices: [
            {
                choice: "Right",
                destination:'prisonCellGun'
            },
            {
                choice: "Left",
                destination:'fanDeath'
            }
        ]
    },
    fanDeath: {
        story: `
            <pre class="ascii-art">
                _.--""--._
               /  _    _  \
            _  ( (_\  /_) )  _
           { \._\   /\   /_./ }
           /_"=-.}______{.-="_\
            _  _.=("""")=._  _
           (_'"_.-"'~~'"-._"'_)
            {_"            "_}  
            </pre>
            <p class="Text">You follow in the darkness and suddenly lose your step.<br>
            You have quite a long fall to regret your choice before colliding with the high speed fans from the main ventilation room.<br>
            You died falling in the ventilation room's fans that tore you apart.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    prisonCellGun: {
        story: `
            <pre class="ascii-art">
                                  ###########                  /
                 \                  #########                  /
                  \                                           /
                   \                                         /
                    \                                       /
                     \                                     /
                      \                                   /
                       \_________________________________/
                       |                                 |
                       |                                 |
                       |                                 |
                       |            _________            |
                       |           |         |           |
                       |           |   ___   |           |
                       |           I  |___|  |           |
                       |           |         |           |
                       |           |         |           |
                       |           |        _|           |
                       |           |       |#|           |  
               -- ___  |           |         |           |  
                 /   ' |           |         |      _____|    
               */     )|           I         |     \_____\    
               /___.,';|           |         |     \\     \     
               |     ; |___________|_________|______\\     \      
               | ._,'  /                             \\     \      
               |,'    /                               \\     \
               ||    /                                 \\_____\
               ||   /                                   \_____|
               ||  /              ___________                \
         
            </pre>
            <p class="Text">You follow to the right and crawl until you reach the red light you've seen before. You look under you<br>
            to see a small room with a reinforced door, simple and few furniture and an alien inside it.<br>
            From your perspective, it looks like a jail cell, and that alien must be the prisoner<br>
            This one looks very different from the one that captured you, with different shape, color, size and features, probably from another planet.<br>
            He suddenly looks up directly at you and whispers something you cannot comprehend.<br>
            Now, what will you do?</p>
        `,
        choices: [
            {
                choice: "Throw him the gun",
                destination:'giveGun'
            },
            {
                choice: "Ignore him and keep going",
                destination:'secRoom'
            },
            {
                choice: "Get inside the cell",
                destination:'escapeCell'
            },
        ]
    },
    giveGun: {
        story: `
            <p class="Text">You throw the gun between the ventilation grid and he catches it. As he points it to the door and pulls the trigger,<br>
            the gun does not work, he then grabs the lamp in his cell, rip its wires off, grab some metal from it and repairs the gun.<br>
            He shoots the door, making a hole larger than you were expecting, leaves and all you can hear are sirens and plenty laser beams.<br>
            You should probably keep going now that the chaos is installed in the mothership, and since the only way to keep going is straight, you follow without looking back...</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    noGun: {
        story: `
            <pre class="ascii-art">
                     o   o                                         
                      )-(
                     (O O)                                       
                       \=/
                     .-"-.
                    //\ /\\
                  _// / \ \\_
                 =./ {,-.} \.=
                     || ||
                     || ||    
                  _ _|| ||__  
                  '---" "---'    
            </pre>
            <p class="Text">You slowly open the door to a poorly lit hallway, it is really elongated and full of doors.<br>
            They look all the same, and you take some time to think about where you should go first.<br>
            Interrupting your thoughts, you hear two aliens approaching from the end of the hallway and you<br>
            quickly open the first door you can and hide inside quietly. The room is completely dark, but before<br>
            looking around you sit in silence waitinng for the aliens in the hallway to leave. It doesn't take long,<br>
            as they walk past you without saying a word to each other. 'Do they even talk?', you wonder as you<br>
            try to feel the room for something useful.<br>
            You feel some kind of switch, wondering if you shoud pull it...</p>
        `,
        choices: [
            {
                choice: "Yes",
                destination:'labOn'
            },
            {
                choice: "No",
                destination:'labOff'
            }
        ]
    },
    labOn: {
        story: `
            <pre class="ascii-art">

                                       ||              []
                                    __ ||              []
                                    || ||              []
                                  .-||-||-.            [] 
                                  _\_______/_===========[]=(-o)
                                   )\_____/(            []  
                                  /     ||  \           []
                                 /      ||   \          []
                                /       ||    \         []
                               /~~~~~~~~~~~~~~~\        []
                              /         ::      \       []
                            (          ::       )      []
                             '-----------------'       []
                                     )                 []
                                   (   )               []
                                     )( . (            []
                                  .) @@)   )           []
                               ' ) @@(@@)@             []
                                 (@@(@@)@              []
                                  @(@.@)@@             []
                                ' (@{__}@)'            []
                                    :__;               []
                ___                  {}+               []
               ( = )             .---''---.            []
                | |_            /          \   ________[]____
             ___| |_|==========(____________)_/______________\         
            </pre>
            <p class="Text">You pull it and the lights turn on to reveal what seems to look like a science lab, full of flasks<br>
            filled with colorful liquids, weird rocks, plants and etcetera. You take a look around just to find two beds<br>
            in the corner of the lab and two Balharry sleeping peacefully in it. Fortunately,<br>
            they seem to be in a very heavy sleep completely undisturbed by your presence, but you decide to be more<br>
            careful to not wake them up. Close to them, you find a table with four flasks containing each a<br>
            different liquid. Knowing nothing about alien nor human chemistry, which one of them will you pick?</p>
        `,
        choices: [
            {
                choice: "Purple Flask",
                destination:'flaskGood'
            },
            {
                choice: "Green Flask",
                destination:'flaskGood'
            },
            {
                choice: "Orange Flask",
                destination:'flaskBad'
            },
            {
                choice: "Blue flask",
                destination:'flaskBad'
            }
        ]
    },
    flaskGood: {
        story: `
            <p class="Text">You pick the flask and take another look around to see if there is anything else that can be useful.
            On one of the top shelves you see what looks like a syringe filled with a bright green liquid.
            It could be really useful, but to reach it you'll need to stand over the table and 
            climb the shelves, which can be dangerous.</p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Will you attemp to reach the syringe?</p>
        `,
        choices: [
            {
                choice: "No, it's too dangerous",
                destination:'leaveSyringe'
            },
            {
                choice: "A flash AND a syringe, why not?",
                destination:'takeSyringe'
            },
        ]
    },
    flaskBad: {
        story: `
            <p class="Text">You pick the flask and take another look around to see if there is anything else that can be useful.
            On one of the top shelves you see what looks like a syringe filled with a bright green liquid.
            It could be really useful, but to reach it you'll need to stand over the table and 
            climb the shelves, which can be dangerous.</p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Will you attemp to reach the syringe?</p>
        `,
        choices: [
            {
                choice: "No, it's too dangerous",
                destination:'leaveSyringe'
            },
            {
                choice: "A flash AND a syringe, why not?",
                destination:'takeSyringe'
            },
        ]
    },
    labOff: {
        story: `
            You decide that wathever is inside that room must be left alone. After waiting a little more, you open the door and return to the hallway.
        `,
        // choices: [
        //     {
        //         choice: "Purple Flask",
        //         destination:'flaskGood'
        //     },
        //     {
        //         choice: "Green Flask",
        //         destination:'flaskGood'
        //     },
        //     {
        //         choice: "Orange Flask",
        //         destination:'flaskBad'
        //     },
        //     {
        //         choice: "Blue flask",
        //         destination:'flaskBad'
        //     }
        // ]
    },
}

document.addEventListener('DOMContentLoaded', function () {
    let StartGame = document.querySelector('#StartGame')
    let start = document.querySelector('#start')
    StartGame.addEventListener('click', function () {
        renderScene();
        let bgAudio = new Audio("Assets/BGSound.mp3")
        bgAudio.loop = true
        bgAudio.play().catch(function(error) {
            console.log("Erro ao tentar reproduzir BGSound:", error)
        })
    })
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
            let clickAudio = new Audio("Assets/ClickSound.mp3");
            clickAudio.play();
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

