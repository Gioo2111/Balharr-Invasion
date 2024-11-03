var story = {
    currentScene: "begin",
    begin: {
        story: `
            <pre class="ascii-art">
                 .     .       .  .   . .   .   . .    +  .
      .     .  :     .    .. :. .___---------___.
          .  .   .    .  :.:. _&#34;.^ .^ ^.  &#39;.. :&#34;-_. .
        .  :       .  .  .:../:            . .^  :.&#92;.
            .   . :: +. :.:/: .   .    .        . . .:&#92;
    .  :    .     . _ :::/:               .  ^ .  . .:&#92;
      .. . .   . - : :.:./.                        .  .:&#92;
      .      .     . :..|:                    .  .  ^. .:|
        .       . : : ..||        .                . . !:|
      .     . . . ::. ::&#92;(                           . :)/
    .   .     : . : .:.|. ######              .#######::|
      :.. .  :-  : .:  ::|.#######           ..########:|
    .  .  .  ..  .  .. :&#92; ########          :######## :/
      .        .+ :: : -.&#92; ########       . ########.:/
        .  .+   . . . . :.&#92;. #######       #######..:/
          :: . . . . ::.:..:.&#92;           .   .   ..:/
      .   .   .  .. :  -::::.&#92;.       | |     . .:/
         .  :  .  .  .-:.&#34;:.::.&#92;             ..:/
    .      -.   . . . .: .:::.:.&#92;.           .:/
     .   .   .  :      : ....::_:.&#92;   ___.  :/
       .   .  .   .:. .. .  .: :.:.&#92;       :/
        +   .   .   : . ::. :.:. .:.|&#92;  .:/|
        .         +   .  .  ...:: ..|  --.:|
   .      . . .   .  .  . ... :..:..&#34;(  ..)&#34;
    .   .       .      :  .   .: ::/  .  .::&#92;
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
                      &#92;=/ 
                     .-&#34;-. 
                    //&#92; /&#92;&#92; 
                  _// / &#92; &#92;&#92;_ 
                 =./ {,-.} &#92;.= 
                     || || 
                     || ||    
                  _ _|| ||__   
                  &#39;---&#34; &#39;---&#39;
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
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
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
                destination:'labOnGun'
            },
            {
                choice: "No",
                destination:'labOffGun'
            }
        ]
    },
    labOnGun: {
        story: `
            <pre class="ascii-art">
                                       ||              []
                                    __ ||              []
                                    || ||              []
                                  .-||-||-.            [] 
                                 _\\_______/_===========[]=(-o)
                                  )\\_____/(            []  
                                 /     ||  \\           []
                                /      ||   \\          []
                               /       ||    \\         []
                              /~~~~~~~~~~~~~~~\\        []
                             /         ::      \\       []
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
                | |_            /          \\   ________[]____
             ___| |_|==========(____________)_/______________\\ 
            </pre>
            <p class="Text">You pull it and the lights turn on to reveal what seems to look like a science lab, full of flasks filled with colorful liquids,<br>
            weird rocks, plants and etcetera. You take a look around just to find two beds in the corner of the lab and two Balharry sleeping peacefully in it.<br>
            Fortunately for you, they seem to be in a very heavy sleep completely undisturbed by your presence,<br>
            but you decide to be more careful to not wake them up. Close to them, you find a table with four flasks containing each a different liquid.<br>
            Knowing nothing about alien nor human chemistry, which one of them will you pick?</p>
        `,
        choices: [
            {
                choice: "Purple Flask",
                destination:'flaskGoodGun'
            },
            {
                choice: "Green Flask",
                destination:'flaskGoodGun'
            },
            {
                choice: "Orange Flask",
                destination:'flaskBadGun'
            },
            {
                choice: "Blue flask",
                destination:'flaskBadGun'
            }
        ]
    },
    flaskGoodGun: {
        story: `
            <p class="Text">You pick the flask and take another look around to see if there is anything else that can be useful.<br>
            On one of the top shelves you see what looks like a syringe filled with a bright green liquid.<br>
            It could be really useful, but to reach it you'll need to stand over the table and climb the shelves, which can be dangerous.<br></p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Will you attempt to reach the syringe?</p>
        `,
        choices: [
            {
                choice: "No, it's too dangerous",
                destination:'leaveSyringeGun'
            },
            {
                choice: "A flash AND a syringe, why not?",
                destination:'takeSyringeGG'
            },
        ]
    },
    takeSyringeGG: {
        story: `
            <p class="Text">You balance yourself over the table and start climbing. You firmly grab the bottom shelves and start going up.<br>
            Suddenly, one of the shelves break and everything else collapses and falls to the ground, including yourself, who felt in the table and broke it.<br></p>
            <pre class="ascii-art">
            .-&#34;&#34;&#34;&#34;-.        .-&#34;&#34;&#34;&#34;-.
           /        &#92;      /        &#92;
          /_        _&#92;    /_        _&#92;
         // &#92;      / &#92;&#92;  // &#92;      / &#92;&#92;
         |&#92;__&#92;    /__/|  |&#92;__&#92;    /__/|
          &#92;    ||    /    &#92;    ||    /
           &#92;        /      &#92;        /
            &#92;  __  /        &#92;  __  /
             &#39;.__.&#39;          &#39;.__.&#39;
              |  |            |  |
              |  |            |  |
            </pre>
            <p class="Text">You stand up and anxiously look back to the sleeping scientists, thinking that no one could stay sleeping after such a mess.<br>
            They are, in fact, staring directly at you in a mix of confusion and fear. They appear to be unarmed, and the only gun you see is the one on the table.<br>
            One of them quickly tries to reach for it, now think fast and act faster!</p>
        `,
        choices: [
            {
                choice: "Throw the flask at them",
                destination:'labDeathThrow'
            },
            {
                choice: "Drink the flask",
                destination:'drinkFlask'
            },
            {
                choice: "Shoot them",
                destination:'gunFail2'
            }
        ]
    },
    flaskBadGun: {
        story: `
            <p class="Text">You pick the flask and take another look around to see if there is anything else that can be useful.<br>
            On one of the top shelves you see what looks like a syringe filled with a bright green liquid.<br>
            It could be really useful, but to reach it you'll need to stand over the table and climb the shelves, which can be dangerous.<br></p>
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
                destination:'leaveSyringeGun'
            },
            {
                choice: "A flash AND a syringe, why not?",
                destination:'takeSyringeBG'
            },
        ]
    },
    takeSyringeBG: {
        story: `
            <p class="Text">You balance yourself over the table and start climbing. You firmly grab the bottom shelves and start going up.<br>
            Suddenly, one of the shelves break and everything else collapses and falls to the ground, including yourself, who felt in the table and broke it.<br></p>
            <pre class="ascii-art">
            .-&#34;&#34;&#34;&#34;-.        .-&#34;&#34;&#34;&#34;-.
           /        &#92;      /        &#92;
          /_        _&#92;    /_        _&#92;
         // &#92;      / &#92;&#92;  // &#92;      / &#92;&#92;
         |&#92;__&#92;    /__/|  |&#92;__&#92;    /__/|
          &#92;    ||    /    &#92;    ||    /
           &#92;        /      &#92;        /
            &#92;  __  /        &#92;  __  /
             &#39;.__.&#39;          &#39;.__.&#39;
              |  |            |  |
              |  |            |  |
            </pre>
            <p class="Text">You stand up and anxiously look back to the sleeping scientists, thinking that no one could stay sleeping after such a mess.<br>
            They are, in fact, staring directly at you in a mix of confusion and fear. They appear to be unarmed, and the only gun you see is the one on the table.<br>
            One of them quickly tries to reach for it, now think fast and act faster!</p>
        `,
        choices: [
            {
                choice: "Throw the flask at them",
                destination:'throwFlask'
            },
            {
                choice: "Drink the flask",
                destination:'labDeathDrink'
            },
            {
                choice: "Shoot them",
                destination:'gunFail2'
            }
        ]
    },
    gunFail2: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">You aim your gun at the alien and pull the trigger before he can reach the table,<br>
            but nothing comes out of it, and you realise the gun you've been carrying is not working. That explains why the Balharry that had it is dead...<br>
            You died when the scientist reeach his gun and shoots your head, exploding your brain.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    labOffGun: {
         story: `
            <p class="Text">You decide that wathever is inside that room must be left alone. After waiting a little more, you open the door and return to the hallway.<br>
            All the doors seem to look the same, you walk a little more, finding one with a different color than the others and decide to open it.<br>
            It looks like a security room, full of screens and cameras. You can see the corridor you were before, the dark room you probably entered before and all kinds of rooms.<br>
            You search for one that resembles a navigation room but everything looks confusing, although three rooms catch your attention.<br>
            The first one is a room filled with cryogenic chambers with humans inside of it. You really want to save them before leaving the ship and look around to find any other humans.<br>
            The second one is a room full of equipments. protective suits, bigger guns and all sorts of technologic devices that could really help you right now.<br>
            The third one is a room with a flashing light, buttons, wires and energy generators, probably an electricity room. Unlike the other two, there are no aliens there<br>
            There is also a entry to the ventilation system right behind you that can be useful to get to some of these rooms, and you can see a dim red light coming from inside it.<br>
            So which way are you going?</p>
        `,
        choices: [
            {
                choice: "Cryo room",
                destination:'cryoRoom'
            },
            {
                choice: "Tech room",
                destination:'techRoom'
            },
            {
                choice: "Electricity room",
                destination:'electricRoom'
            },
            {
                choice: "Go for the red light",
                destination:'prisonCell'
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
                 \\                  #########                  /
                  \\                                           /
                   \\                                         /
                    \\                                       /
                     \\                                     /
                      \\                                   /
                       \\_________________________________/
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
               */     )|           I         |     \\_____\\    
               /___.,';|           |         |     \\\\     \\     
               |     ; |___________|_________|______\\\\     \\      
               | ._,'  /                             \\\\     \\      
               |,'    /                               \\\\     \\
               ||    /                                 \\\\_____\\
               ||   /                                   \\_____|
               ||  /              ___________                \\
            </pre>
            <p class="Text">You follow until you reach the red light you've seen before. You look under you<br>
            to see a small room with a reinforced door, simple and few furniture and an alien inside it.<br>
            From your perspective, it looks like a jail cell, and that alien must be the prisoner.<br>
            This one looks very different from the one that captured you, with different shape, color, size and features, probably from another planet.<br>
            He suddenly looks up directly at you and whispers something you cannot comprehend.<br>
            Now, what will you do?</p>
        `,
        choices: [
            {
                choice: "Ignore him and keep going",
                destination:'cryoRoom'
            },
            {
                choice: "Pull him up to the ventilation",
                destination:'escapeCell'
            },
        ]
    },
    escapeCell: {
        story: `
            <pre class="ascii-art">
            ______              ______
           /___   &#92;___&#92; || /___/   ___&#92;
          //&#92;]/&#92; ___  &#92;&#92;||//  ___ /&#92;[&#92;//
          &#92;&#92;/[&#92;//  _)   &#92;/   (_  &#92;&#92;/]&#92;//
           &#92;___/ _/   o    o   &#92;_ &#92;___/
               _/                &#92;_
              //'VvvvvvvvvvvvvvvV'&#92;&#92;
             ( &#92;.'^^^^^^^^^^^^^^'.&#92; )
              &#92;____   . .. .   ____/
                   &#92; . .&#39;&#39;. . /        
                    )________(
            </pre>
            <p class="Text">You manage to easily unscrew the ventilation grid, and once he notices the ventilation is now open he extends his hand and you pull him up.<br> 
            He gives you an intimidating stare that unsettles you, then does a big smile that makes you a little less worried.<br>
            Before you can try to communicate he crawls through the ventilation and you just follow him.<br>
            Suddenly, he stops and stare at the top of the ventilation duct you are currently in.<br>
            He starts punching above where you are. He is incredibly strong, and you think how you are lucky to have him on your side.<br>
            With only four punches he opens a hole, stands up and climbs inside the room. Before you could follow him,<br>
             you hear laser beams and a lot of things breaking and falling to the ground.<br>
            You stay hidden and all the noise stopped after about thirty seconds.<br>
            You spy and see the alien you just met is still alive, but doesn't seem to mind your company.<br>
            Were will you go?</p>
        `,
        choices: [
            {
                choice: "Enter the room with him",
                destination:'councilRoom'
            },
            {
                choice: "Keep going through the ventilation",
                destination:'cryoRoom'
            }
        ]
    },
    councilRoom: {
        story: `
            <p class="Text">You enter the room. It has a big conference table in the center and a lot of chairs,<br>
            some of them occupied by dead Balharry. You can also see what looks like tv and radios.<br> 
            There is a lot of blue blood, broken tvs and dead aliens all around the room, but your "friend" is still alive and appears to be searching for something.<br>
            He acknowledges you and points to the radio. Suddenly, an alien voice speaks from it in an undistinguishable language.<br>
            You feel that you have to say something, but don't know what to say...<br>
            - All yours leaders are dead, and there is nothing for you in this planet - You say in your deepest voice - leave now, before it's too late.<br>
            Some seconds of silence, then you hear a laugh and a response you cannot comprehend. You look at the alien hoping for a answer,<br>
            and as he nods his head you finally realise it: They are not leaving this easily.<br>
            All the comunication systems turn off, and the alien seems to have found what he wanted.<br>
            He takes some papers and before leaving, gives you one of them: It's a map.<br>
            You're not sure how to read it, but you find out you are in the second floor.<br>
            Across this Council room, there is another lab, and you see the alien going there.<br>
            A few steps away, there is a Tech room, or you could go down the stairs.<br>
            Will you enter the lab with him or will you go another way?</p>
        `,
        choices: [
            {
                choice: "Enter the lab",
                destination:'cloneRoom'
            },
            {
                choice: "Go to tech room",
                destination:'techRoomAlien'
            },
            {
                choice: "Go downstairs",
                destination:'raidDeath'
            }
        ]
    },
    raidDeath: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">You go downstairs, looking for where to go next.<br>
            Suddenly, a bunch of Balharry burst through a door, and you cannot hide in time.<br>
            You died being shot by the Balharry soldiers' rifles.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    techRoomAlien: {
        story: `
            <p class="Text">You enter the tech room quietly, but the Balharry inside quickly notice you.<br>
             You close the door and run back to the council room, then hides inside the ventilation you came from.<br> 
            You hear they coming after you, but before they enter the council room you hear laser beams and screams coming from the lab.<br>
            Too scared to leave the room, your only way is the ventilation ahead of you.<br>
            You keep walking and all the ventilation grids seem too small to fit you, until you find one that you can get in.<br>
            As you get close to it, the cold air coming from the grid gives you shivers, and as you look down to inspect you see what a mess is in there.<br>
            All the aliens are running around, grabbing their guns and leaving the room.<br>
            There are a lot of cryogenic chambers, and inside them you see humans, just like you.<br>
            You feel frightened but is able to pull yourself together. Now there's only one alien in the room reading some documents,<br>
            conveniently positioned below you, and at least 50 humans down there.<br>
            You silently unscrew the grid and jump over the alien. He seems really scared and tries to get you off him.<br>
            He is really strong, but your years of training make you stronger. You don't know what to do to make him stop,<br>
            so you grab a pencil from his desk and stab him until he stops struggling.<br>
            That was brutal... But it's not like you had other choices. Now, you have some blueish liquid sticking to your arms.<br>
            You decide to clean his blood before it can do something to you.<br>
            Now that you are clean, you search for anything that could free these humans.<br>
            You find a switch, pull it without hesitation and all the cryogenic chambers open. The humans start to slowly regain consciousness and stand up.<br>
            - Are we free? - One of them asks.<br>
            - Not yet - you respond - I have to find the navigation room and send them back.<br>
            - We could also grab some guns and kill them ourselves. When the aliens were bringing me here, I could see them coming downstairs with guns.<br>
            - That means - he continues explaining his idea - that there are a lot of guns upstairs that we could use. I know it's dangerous, but what else could we do?<br>
            He has a point, will you consider his idea or just lead them to the exit: The room you killed the first Balharry?</p>
        `,
        choices: [
            {
                choice: "Go upstairs",
                destination:'humansUpstairs'
            },
            {
                choice: "Take them to safety",
                destination:'exitRoom'
            },
        ]
    },
    techRoom: {
        story: `
            <p class="Text">You make your way to the tech room and enter it quietly, but the Balharry inside quickly notice you.<br>
            You close the door and hide in the ventilation next to the door.<br> 
            You hear they coming after you, but before they look inside the ventilation you hear laser beams and screams coming from the lab.<br>
            Too scared to leave, your only way is the ventilation ahead of you.<br>
            You keep walking and all the ventilation grids seem too small to fit you, until you find one that you can get in.<br>
            It's the cryogenic room, with only one alien in the room reading some documents conveniently positioned below you.<br>
            You silently unscrew the grid and jump over the alien. He seems really scared and tries to get you off him.<br>
            He is really strong, but your years of training make you stronger. You don't know what to do to make him stop,<br>
            so you grab a pencil from his desk and stab him until he stops struggling.<br>
            That was brutal... But it's not like you had other choices. Now, you have some blueish liquid sticking to your arms.<br>
            You decide to clean his blood before it can do something to you.<br>
            Now that you are clean, you search for anything that could free these humans.<br>
            You find a switch, pull it without hesitation and all the cryogenic chambers open. The humans start to slowly regain consciousness and stand up.<br>
            - Are we free? - One of them asks.<br>
            - Not yet - you respond - I have to find the navigation room and send them back.<br>
            - We could also grab some guns and kill them ourselves. When the aliens were bringing me here, I could see them coming downstairs with guns.<br>
            - That means - he continues explaining his idea - that there are a lot of guns upstairs that we could use. I know it's dangerous, but what else could we do?<br>
            He has a point, will you consider his idea or just lead them to the exit: The room you killed the first Balharry?</p>
        `,
        choices: [
            {
                choice: "Go upstairs",
                destination:'humansUpstairs'
            },
            {
                choice: "Take them to safety",
                destination:'exitRoom'
            },
        ]
    },
    techRoomGroup: {
        story: `
            <p class="Text">You enter the room with the group, shooting the Balharry in there. Fortunately, no one in the group was harmed.<br>
            All you can see are high tech equipments: Protective suits, jetpacks, and bigger guns.<br> 
            There are enought jetpacks for all the group, so everyone takes one. A huge machine gun caught your attention, so you take switch your rifle for it.<br>
            Now that the group is better equipped, you can leave and look for the navigation room with no fear.<br>
            On your way out, one of your companions hands you a pendrive that they've found, so you keep it since it can be important later.<br>
            Back to the corridor, the sirens are on and all the Balharry are coming for you, but you take them down easily.<br>
            You get to the end of the hallway and see a big door. You open it and is a room filled with smaller spaceships and, of course, Balharry.<br>
            Your group shoots them all and the conflict is over quick, but few of you perished in the battle.<br>
            This room is open like a garage and the spaceships can fly out. You could use the spaceships to attack the Balharry outside,<br>
            But you could make the humans leave the spaceship with jetpacks and go to the navigation room,<br>
            the left door in the end of the hallway according to the mothership map stuck to the wall.<br>
            What is your decision?</p>
        `,
        choices: [
            {
                choice: "Enter the spaceships and shoot them",
                destination:'spaceshipEnd'
            },
            {
                choice: "Enter the navigation room",
                destination:'navigationRoom'
            },
        ]
    },
    spaceshipEnd: {
        story: `
            <pre class="ascii-art">
              _,--=--._
            ,'    _    '.
           -    _(_)_o   -
      ____'    /_  _/]    '____
-=====::(+):::::::::::::::::(+)::=====-
        (+).""""""""""""",(+)
            .           ,
              '  -=-  '
            </pre>
            <p class="Text">You gather the group around the spaceships and assign a pair to each one. You enter yours alone, turn it on and fly into the sky.<br> 
            The city has no humans, they must be hidden in shelters or somewhere else, so you aim at the first Balharry spaceship you see and press one button.<br>
            Two strong laser beams come from your ship, so you learn how it works and shoot every Balharry you can see, and your group does the same.<br>
            A strong laser coming from the mothership almost hits you, so you aim at it and shoot.<br>
            You are not doing much alone, but then all the other ships turn to the mothership and shoot. It doesn't resist for much time,<br>
            so it explodes and now all the Balharry are dead. The earth is now safe thanks to your teamwork and leadership.<br>
            <br>
            <br>
            Thanks for playing.</p>
        `,
        choices: [
            {
                choice: "Play again",
                destination:'begin'
            },
        ]
    },
    navigationRoom: {
        story: `
            <p class="Text">You tell the group they should leave the mothership now, they obey and jump through the opening with their jetpacks.<br> 
            You get out the room with your machine gun, jetpack and the pendrive and quickly enter the navigation room.<br>
            Before they could notice you, you kill three Balharry in the room and leaves only one alive.<br>
            You point your gun to his head and tells him to make the mothership go away. You hope he understood what you said,<br>
            because he starts typing on the keyboard and presses a button. You hear the spaceship's engines turning on,<br>
            the Balharry takes his gun and before you could shoot him, he shoots himself in the head.<br>
            A metal grid locks the door and the room's light starts flashing red, you see a gas coming from the ceiling and you hold your breath.<br>
            The computer is still on, an the screen has one button to click. You are getting out of breath and out of options.<br>
            What will you do?</p>
        `,
        choices: [
            {
                choice: "Plug the pendrive in the computer",
                destination:'navigationEnd'
            },
            {
                choice: "Press the button",
                destination:'navigationDeath'
            }
        ]
    },
    navigationDeath: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">You press the button and the computer shuts off.<br>
            You desperately look for a way to open the door until you can't hold your breath anymore.<br>
            You died breathing the poisonous gas and bleeding from your nose and mouth until you can't breathe anymore.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    navigationEnd: {
        story: `
            <pre class="ascii-art">

                       .-"L"-.  
      .--""L""---___    J  |  |
      J    J        ""L  L J  J              J----"""J""---__
       |    |         J  J  L  L_--""|"--L   |       F      J
        L    L__ ___   L  L |  J     |   J   F      J       F
     \\"""""""   |   """""-----, L    |   J  J       F      |
      \\          L            L L    |   |  |      J      J      _.---"""
       \\         J            | |    |   |  F      F      F     /
        \\         |           J |    |   | J      J      |     /
         \\         L      ___---++...;.++'--__    F     J     /
          \\        J      L""----____ __---""J__--=----_E_   /
           \\        |     J          |       |--__   __--"/ /
      __    \\        L     L         |       F    ""F    / /
        """--__      J     J         |      J      |    / /
               "";    |     L        |      |     J    / /
          __--""" \\    L    J        |      F     F   / /
    __--""         \\   J     L       |     J     |   / /
--""                \\   |    J       |      |    J   / /
                     \\   L    L      |     F    F  / /
                      \\  J    J      |    J    |  / /
                       \\  |    L     |    |   J  / /
                        \\  L   J     |    F   F / /
                         \\ J    L    |   J   | / /
                          \\ |  _J    |   |"-J+' /
                           \\-L"  L   |   F     /
                            \\    J   |  J     /
    '-.                      \\    "-.|+'     /
       '-.                    \\             /                   .
          '-.                  \\           /                 .-'
             '-.             .-'            "-.           .-'
                '-.       .-'        .         "-.     .-'
                   '-. .-'         .' '.          '-.-'
                      '          .'     '.
            </pre>
            <p class="Text">You plug the pendrive in the computer, and the smoke immediately stops coming out, the door opens and the room ventilates again.<br>
            You press the button in the computer and now the engines start making way more noise, until you feel the mothership shaking and flying away.<br>
            You run out of the room to take your chance to escape, five Balharry are running in the navigation room's direction,<br>
            but you laser them before they could get close. You enter the spaceships room and starts turning on your jetpack and running to the opening.<br>
            The spaceship is pretty high on the sky, and you are really scared to jump, but the longer you take the worse it'll be.<br>
            You dive out the mothership and fly into the sky. You can see the city, the ships following the mothership going away,<br>
            and the remaining Balharry being killed by the army. You were able to send them back to where they came from and save earth.<br>
            <br>
            <br>
            Thanks for playing.</p>
        `,
        choices: [
            {
                choice: "Play again",
                destination:'begin'
            },
        ]
    },
    cloneRoom: {
        story: `
            <pre class="ascii-art">
            -._    _.--&#39;&quot;&#39;&#39;--._    _.--&#39;&quot;&#39;&#39;--._    _.--&#39;&quot;&#39;&#39;--._    _ 
    &#39;-:&#39;.&#39;|&#39;|&quot;&#39;:-.  &#39;-:&#39;.&#39;|&#39;|&quot;&#39;:-.  &#39;-:&#39;.&#39;|&#39;|&quot;&#39;:-.  &#39;.&#39; : &#39;.   
  &#39;.  &#39;.  | |  | |&#39;.  &#39;.  | |  | |&#39;.  &#39;.  | |  | |&#39;.  &#39;.:   &#39;.  &#39;.
  : &#39;.  &#39;.| |  | |  &#39;.  &#39;.| |  | |  &#39;.  &#39;.| |  | |  &#39;.  &#39;.  : &#39;.  &#39;.
  &#39;   &#39;.  &#39;.:_ | :_.&#39; &#39;.  &#39;.:_ | :_.&#39; &#39;.  &#39;.:_ | :_.&#39; &#39;.  &#39;.&#39;   &#39;.
         &#39;-..,..-&#39;       &#39;-..,..-&#39;       &#39;-..,..-&#39;       &#39;         &#39;

            </pre>
            <p class="Text">You decide to follow the alien, and as you've seen he's a threat to the Balharry, you'll probably be safer with him around.<br> 
            This lab is different. It has no flasks or chemicals, only a big chamber in the center connected to a machine.<br>
            The alien goes to the machine and starts reading the papers he got before. He then presses some buttons and makes a noise looking and waving at you.<br>
            You approach him, and he gives you his gun and a piece of papers. You cannot read it,<br>
            but sees an image of a lever that looks just like the one this machine has.<br>
            Then, he gets inside the chamber and closes the door. He signals you a lever motion and you unhesitatingly pull it.<br>
            The chamber locks and starts glowing a green light from it. It starts making loud noises and you can see a needle stick his skin and take his blood.<br>
            This tube countaining his blood lightens and you can see it goes through another machine and all across the room,<br>
            arriving at three other chambers in the corner you couldn't see before.<br>
            Suddenly, the lab door opens and two Balharry are aiming at the chamber. You shoot them both with the gun he gave you and stays vigilant until whatever is happening in this chamber ends.<br>
            More Balharry appears and you quickly eliminate them, the spaceship sirens start ringing but the chamber finally stops making noises and its door opens.<br>
            The aliens comes out of it and the other three chambers open, too. Another three aliens identical to this one come out of them.<br>
            One of the clones goes inside the main chamber, the other pulls the lever and they start cloning themselves again and again.<br>
            Five minutes have passed and you are now with around sixteen aliens. They all leave the room except for two, that stay cloning themselves.<br>
            They all enter the tech room, will you follow them or go downstairs?</p>
        `,
        choices: [
            {
                choice: "Enter the tech room",
                destination:'techRoomGroup'
            },
            {
                choice: "Go downstairs",
                destination:'raidDeath'
            }
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
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
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
                 \\                  #########                  /
                  \\                                           /
                   \\                                         /
                    \\                                       /
                     \\                                     /
                      \\                                   /
                       \\_________________________________/
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
               */     )|           I         |     \\_____\\    
               /___.,';|           |         |     \\\\     \\     
               |     ; |___________|_________|______\\\\     \\      
               | ._,'  /                             \\\\     \\      
               |,'    /                               \\\\     \\
               ||    /                                 \\\\_____\\
               ||   /                                   \\_____|
               ||  /              ___________                \\
            </pre>
            <p class="Text">You follow until you reach the red light you've seen before. You look under you<br>
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
                destination:'cryoRoom'
            },
            {
                choice: "Pull him up to the ventilation",
                destination:'escapeCell'
            },
        ]
    },
    giveGun: {
        story: `
            <pre class="ascii-art">                                                           
                           (_)  (_)                  &lt;&gt; &#92;  / &lt;&gt;
                            .&#92;::/.                   &#92;_&#92;/  &#92;_&#92;/
           .:.          _.=._&#92;&#92;//_.=._                  &#92;&#92;//
      ..   &#92;o/   ..      &#39;=&#39; //&#92;&#92; &#39;=&#39;             _&lt;&gt;_&#92;&#92;_&lt;&gt;/_/_&lt;&gt;_
      :o|   |   |o:         &#39;/::&#92;&#39;                 &lt;&gt; / /&lt;&gt;&#92; &#92; &lt;&gt;
       ~ &#39;. &#39; .&#39; ~         (_)  (_)      _    _       _ //&#92;&#92; _
           &gt;O&lt;             &#39;      &#39;     /_/  &#92;&#92;_     / /&#92;  /&#92; &#92;
       _ .&#39; . &#39;. _                        &#92;&#92;//       &lt;&gt; /  &#92; &lt;&gt;
      :o|   |   |o:                   /&#92;_&#92;&#92;&gt;&lt;&#92;&#92; &#92;/
           &#39;:&#39;                           _//&#92;&#92;_
                                        &#92;&#92;_&#92;/_&#92;/
            </pre>  
            <p class="Text">You throw the gun between the ventilation grid and he catches it. As he points it to the door and pulls the trigger,<br>
            the gun does not work, he then grabs the lamp in his cell, rip its wires off, grab some metal from it and repairs the gun.<br>
            He shoots the door, making a hole larger than you were expecting, leaves and all you can hear are sirens and plenty laser beams.<br>
            You should probably keep going now that the chaos is installed in the mothership, and since the only way to keep going is forward, you follow without looking back...<br>
            You keep walking and all the ventilation grids seem too small to fit you, until you find one that you can get in.<br>
            As you get close to it, the cold air coming from the grid gives you shivers, and as you look down to inspect you see what a mess is in there.<br>
            All the aliens are running around, grabbing their guns and leaving the room. There are a lot of cryogenic chambers, and inside them you see humans, just like you.<br>
            You feel frightened but is able to pull yourself together. Now there's only one alien in the room reading some documents, conveniently positioned below you, and at least 50 humans down there.<br>
            What will you do?</p>
        `,
        choices: [
            {
                choice: "Unscrew the grid and jump over the Balharry",
                destination:'cryoRoomEmpty'
            },
            {
                choice: "Keep going through the ventilation",
                destination:'electricRoom'
            },
        ]
    },
    electricRoom: {
        story: `
            <pre class="ascii-art">                                                           
                 ___
             .-&quot;'   '&quot;-.
           .&#39;    .-.    &#39;.
          /     (/^&#92;)     &#92;
         /  #   (&#92; /)      &#92;
         | #    .-&#39;-.      |
         |     /(_I_)&#92;     |
         ;     &#92;&#92;) (//     ;
          ;     / Y &#92;     ;
           &#92;    &#92; | /    /
            &#92;    &#92;|/    /
             &#92;   /|&#92;   /
              |  &#92;|/  |
              |__/Y&#92;__|
              {=======}
              }======={
              {=======}
              }======={
              {=======}
               &#39;&quot;&quot;u&quot;&quot;&#39;
            </pre> 
            <p class="Text">You crawl the ventilation and find a grid that takes you to a flashing light room. It is the electricity room of the spaceship.<br>
            All those buttons and energy generators are a bit overwhelming, and you don't know what to do.<br>
            Then you come up with a brilliant idea: Destroying all of it! What else could you do that would put the Balharry in more trouble than that?<br>
            You start pulling all the wires and cables, kicking the generators and pressing all the buttons until you've made a big mess.<br>
            The light stops flashing and you unlock the door from inside, going back to the hallway.<br>
            You can see nothing, the mothership is now in complete darkness and you wonder if your decision was brilliant after all.<br>
            The silence is abruptly disrupted by laser beams and sirens, but you are not the Balharry' target.<br>
            You run upstairs, but as you are running you bump into something and you both fall to the ground.<br>
            It's an alien, but not a Balharry. He quickly gets up, runs upstairs and you follow him, since there is no way for you to go and you can't see much in the dark.<br>
            He enters a room, leaving the door open. You can also see a door with the lights on a few steps away, and a ventilation close to it.<br>
            Where will you go?</p>
        `,
        choices: [
            {
                choice: "Follow him",
                destination:'cloneRoom'
            },
            {
                choice: "Follow the lights",
                destination:'techRoom'
            },
            {
                choice: "Enter the ventilation",
                destination:'warRoom'
            }
        ]
    },
    warRoom: {
        story: `
            <p class="Text">You hide inside the ventilation, and crawl looking for a room you can gather your thoughs and make a plan to send them away.<br>
            You see an empty room with a conference table filled with maps and sketches, a big television and enters it. Looks like they are planning something.<br>
            <pre class="ascii-art">                                                           
                .                                            .
     *   .                  .              .        .   *          .
  .         .                     .       .           .      .        .
        o                             .                   .
         .              .                  .           .
          0     .
                 .          .                 ,                ,    ,
 .          \\          .                         .
      .      \\   ,
   .          o     .                 .                   .            .
     .         \\                 ,             .                .
               #\\##\\#      .                              .        .
             #  #O##\\###                .                        .
   .        #*#  #\\##\\###                       .                     ,
        .   ##*#  #\\##\\##               .                     .
      .      ##*#  #o##\\#         .                             ,       .
          .     *#  #\\#     .                    .             .          ,
                      \\          .                         .
____^/\\___^--____/\\____O______________/\\/\\---/\\___________---______________
   /\\^   ^  ^    ^                  ^^ ^  '\\ ^          ^       ---
         --           -            --  -      -         ---  __       ^
   --  __                      ___--  ^  ^                         --  __
            </pre> 
            <p class="Text"> You take a better look and see they plan in invading another planet: Mirkern. It's location is too far for you to comprehend,<br>
            But if the Balharry were able to come to earth, they might be able to come there. So, an idea crosses your mind.<br>
            If you could find the communication room and communicate with these other aliens, maybe they could help defend eart.<br>
            It's not a flawless plan, since they could also be a problem, but as far as you know, the enemy of your enemy is your friend.<br>
            You grab one of the maps, open the room's door and goes back to the corridor, you see the lab door open and the room across of it also open.<br>
            What will you do?</p>
        `,
        choices: [
            {
                choice: "Enter the lab",
                destination:'cloneRoom'
            },
            {
                choice: "Go to the other door",
                destination:'startWar'
            }
        ]
    },
    startWar: {
        story: `
            <p class="Text">You decide to enter the other door. It has a big conference table in the center and all the Balharry are dead.<br> 
            There are three aliens in there, just like the one you saw before, they notice you but do nothing.<br>
            Confused on what to do, you approach one of them and shown him the map. He takes a look and points to the radio.<br>
            He walks with you there, presses some buttons and now you have a radio syntonized with Mirkern.<br>
            - Hello - you start your speech - I am from planet Earth. The Balharry invaded us and i just found out you are their next target.<br>
            - Greetings, human - a robotic voice answers - How can we know this is true? And not just another of their stupid plans?<br>
            - I found a room full of maps and plans, they know were you are located and for what i've seen wil not be merciful.<br>
            - So tell us their plans, and we will be forever grateful for your help.<br>
            - No. If you want to know their plans, you should come here and see them yourself.<br>
            - Our planet needs help - You continue explaining your plan - So if you come here and help us both of our planets will be safe.<br>
            - Attacking them off guard is a good idea, human. You have my world, as a general, we will not start a war with your kind.<br>
            The alien on your side wants to speak something and you fear he may say something bad<br>
            What will you do?</p>
        `,
        choices: [
            {
                choice: "Let him say it",
                destination:'warEnd'
            },
            {
                choice: "Break the radio",
                destination:'warDeath'
            }
        ]
    },
    warEnd: {
        story: `
            <pre class="ascii-art">                                                           
    .-.                                                               .-.<br>
   /   \\           .-.                                 .-.           /   \\<br>
  /     \\         /   \\       .-.     _     .-.       /   \\         /     \\<br>
-/-------\\-------/-----\\-----/---\\---/-\\---/---\\-----/-----\\-------/-------\\--<br>
          \\     /       \\   /     '-'   '-'     \\   /       \\     /<br>
           \\   /         '-'                     '-'         \\   /<br>
            '-'                                               '-'
            </pre> 
            <p class="Text">He speaks something in a language you cannot comprehend, and the general answers him.<br>
            The alien then poins his rifle to the room window and shoots until it breaks. He then calls his companions from the lab,<br>
            And as they come the Balharry start shooting them, but there are a lot of these aliens now, and they kill the Balharry with no effort.<br>
            They grab somes wires from the equipments, tie and throw them out of the window to jump, and you follow them.<br>
            You are now in the city, out of the spaceship, and you see other ships approaching from the sky.<br>
            They start shooting all of the Balharry spaceships, including the mothership. Some of them land,<br>
            and aliens looking just like the one you met in the ship come out. They shoot all the Balharry and help you defending earth.<br>
            The alien who helped you enters one spaceship and waves at you, disappearing in the sky. The earth is now safe from the Balharry.<br>
            <br>
            <br>
            <br>
            Thanks for playing.</p>
        `,
        choices: [
            {
                choice: "Play again",
                destination:'begin'
            },
        ]
    },
    warDeath: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">Before he could say anything, you break the radio and leaves it unusable.<br>
            The alien gets very angry and pushes you to the ground, then he starts screaming a lot of things you cannot understand.<br>
            The other two knee on the ground and hold their hands together, as if they were praying.<br>
            A huge laser beam rips through the spaceship and it explodes. At this point, you and all the other things in the ship are already dead.<br>
            A lot more of these beams come and then the whole planet is now filled with holes.<br>
            You died as the mothership explodes, and the whole planet explodes next.<br>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    cryoRoomEmpty: {
        story: `
            <pre class="ascii-art">                                                           
        _ 
       / | 
       |_|  _                                                   __ _
       | |_( |_____________ _____________|:::|__________________&#92;_&#39;_|___
      |' ||=====___________) |___________&#92;___/______________________|(o)|| 
      &#92;__|(o)|        ||------------------------------------------------||| 
      |__|___)        ||         _______________________________        ||| 
      |               ||        |_______________________________|       ||) 
      |   ____      __||__()__)        /________________________________||| 
      |  /    )    (           /___ _/ /   |      
            </pre> 
            <p class="Text">You silently unscrew the grid and jump over the alien. He seems really scared and tries to get you off him.<br>
            He is really strong, but your years of training make you stronger. You don't know what to do to make him stop, so you grab a pencil from his desk and stab him until he stops struggling.<br>
            That was brutal... But it's not like you had other choices. Now, you have some blueish liquid sticking to your arms. You decide to clean his blood before it can do something to you.<br>
            Now that you are clean, you search for anything that could free these humans.<br>
            You find a switch, pull it without hesitation and all the cryogenic chambers open. The humans start to slowly regain consciousness and stand up.<br>
            - Are we free? - One of them asks.<br>
            - Not yet - you respond - I have to find the navigation room and send them back.<br>
            - We could also grab some guns and kill them ourselves. When the aliens were bringing me here, I could see them coming downstairs with guns.<br>
            - That means - he continues explaining his idea - that there are a lot of guns upstairs that we could use. I know it's dangerous, but what else could we do?<br>
            He has a point, will you consider his idea or just lead them to the exit: The room you killed the first Balharry?</p>
        `,
        choices: [
            {
                choice: "Go upstairs",
                destination:'humansUpstairs'
            },
            {
                choice: "Take them to safety",
                destination:'exitRoom'
            },
        ]
    },
    exitRoom: {
        story: `
            <p class="Text">The humans' safety is your priority, so taking them to the exit would be the best idea.<br>
            The group grabs the laser rifles remaining and you lead them to the exit room.<br>
            No aliens found you in the way and the exit room is empty. You open the door and can see the city's streets completely empty,<br>
            aliens walking around and spaceships the size of cars flying around.<br>
            -Thanks for showing us the way - the humans thank you. What they will do outside the spaceship worries you a little, but stopping them is your job now.<br>
            You leave the room and follows yor way to the stairs, but as you hear aliens coming down from them, you decide that instead of going up, you are goin downstairs.<br>
            In this floor, the lights are weaker and you can hardly see. There are no doors, vents or anywhere you can go.<br>
            You walk a little more and see one single big door. You open it and inside there is a giant room with lots of computers, generators and a huge reactor in the center.<br>
            It looks like a reactor room full of Balharry. They notice you, you quickly take cover as they start shooting in your direction and hit you in the arm.<br>
            Luckly, you still got your rifle with you, so you shoot them until there are only two left and your gun is not working anymore.<br>
            With no ideas left, you sprint through the computers and grabs the closets Balharry. You punch him and he shoots your leg as you both fall to the ground.<br>
            You grab his gun and shoots his head, turn around to see the last Balharry approaching you and shoots him. Now that they are all dead, you explore the room.<br>
            You try to find something to distract you from your bleeding. And you find it: The reactor's central control panel.<br>
            You can't understand much, but the big red button in the center is pretty self explanatory.<br>
            You look it in the manual on the panel and by the images, you think this button will implode the mothership.<br>
            It would be a heroic decision, but a difficult one. You are bleeding, feeling weak and hopeless, and need to make a decision before your life fades away.<br>
            Will you sacrifice yourself for the sake of humanity or will you try finding another way?</p>
        `,
        choices: [
            {
                choice: "Press the button",
                destination:'reactorEnd'
            },
            {
                choice: "Look for something to stop your bleeding",
                destination:'stopBleed'
            },
        ]
    },
    reactorEnd: {
        story: `
            <pre class="ascii-art">
                                ____ 
                     __,-~~/~    &#39;---. 
                   _/_,---(      ,    ) 
               __ /        &lt;    /   )  \___ 
- ------===;;;&#39;====------------------===;;;===----- -  - 
                  \/  ~&quot;~&quot;~&quot;~&quot;~&quot;~\~&quot;~)~&quot;/ 
                  (_ (   \  (     &gt;    \) 
                   \_( _ &lt;         &gt;_&gt;&#39; 
                      ~ &#39;-i&#39; ::&gt;|--&quot; 
                          I;|.|.| 
                         &lt;|i::|i|&#39;. 
                        (&#39;&#39; ^&#39;&quot;&#39;-&#39; &quot;)

            </pre>
            <p class="Text">You press the button and follow all the implosion procedure in the main computer, hoping it will save earth.<br>
            The countdown starts, and in your last moments you think about your family and how you want them to live happily in a safe planet.<br>
            The spaceship implodes. You and all the Balharry inside it are dead. The smaller spaceships retreat and disappear into the blue sky.<br>
            It doesn't take long for the remaining Balharry to be killed by the army, and the earth is finally safe, thanks to you.<br>
            <br>
            <br>
            <br>
            Thanks for playing.</p>
        `,
        choices: [
            {
                choice: "Play again",
                destination:'begin'
            },
        ]
    },
    stopBleed: {
        story: `
            <p class="Text">You realise there are still ways to save humanity and also keeping you alive.<br>
            Willing to live, you go around searching the bodies, but found nothing. You are feeling dizzy and fainty,<br>
            So you walk back to the button before you die in vain. You look inside the drawers of the main computer's desk and found a flask with a red liquid.<br></p>
            <pre class="ascii-art">
                    ______
                   (______)
                    |    |
                    |    |
                    |    |
                    |    |          
                    |    |             
                    |'--'|           
                    |    |           
                    |    |              
                    |    |             
                    |    |         
                    |    |          
                    |    |
                    |    |
                    '.__.'
            </pre>
            <p class="Text">Your only choice is to drink it. You do it close to the button in case it does the opposite of healing you.<br>
            It feels weird, but not in a dying way. You feel a shockwave running through your body and your wounds magically close.<br>
            You are now feeling best than ever, so you grab a rifle, shoot the generators and walk upstairs.<br>
            You can see nothing, the mothership is now in complete darkness and you wonder if your decision was brilliant after all.<br>
            The silence is abruptly disrupted by laser beams and sirens, but you are not the Balharry' target.<br>
            You run to the second floor, but as you are running you bump into something and you both fall to the ground.<br>
            It's an alien, but not a Balharry. He quickly gets up, runs upstairs and you follow him, since there is no way for you to go and you can't see much in the dark.<br>
            He enters a room, leaving the door open. You can also see a ventilation in the other side of the corridor.<br>
            Where will you go?</p>
        `,
        choices: [
            {
                choice: "Follow him",
                destination:'cloneRoom'
            },
            {
                choice: "Enter the ventilation",
                destination:'warRoom'
            }
        ]
    },
    humansUpstairs: {
        story: `
            <p class="Text">You decide that it's a good idea, so you take the guns remaining in the room and follow to the stairs.<br>
            Now your group consists in approximately 50 people, which 18 of them are armed with rifles, including yourself.<br>
            You arrive at the stairs and go up, no hostile encounters until now. The second floor looks pretty much the same as the first,<br>
            but it has lesser doors and these ones are different.<br>
            Since you don't know which door leads to the Weapon room, you have to decide which way to go before the Balharry finds your group.<br>
            You can open the closest door to the right or you can keep walking until you find where the room is.<br>
            Which way is the group following?<br></p>
        `,
        choices: [
            {
                choice: "Right door",
                destination:'techRoomGroup'
            },
            {
                choice: "Walk the hallway",
                destination:'groupDeath'
            },
        ]
    },
    groupDeath: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">You keep going through the hallway undisturbed.<br>
            Suddenly, laser beams start flying through the air, and behind you a group of soldiers is shooting your group.<br>
            Multiple humans are shot and killed, and one of the laser beams rip through your stomach.<br>
            You died while trying to hold your insides and watching the Balharry obliterate the humans that are left.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    cryoRoom: {
        story: `
            <pre class="ascii-art">                                                           
                           (_)  (_)                  &lt;&gt; &#92;  / &lt;&gt;
                            .&#92;::/.                   &#92;_&#92;/  &#92;_&#92;/
           .:.          _.=._&#92;&#92;//_.=._                  &#92;&#92;//
      ..   &#92;o/   ..      &#39;=&#39; //&#92;&#92; &#39;=&#39;             _&lt;&gt;_&#92;&#92;_&lt;&gt;/_/_&lt;&gt;_
      :o|   |   |o:         &#39;/::&#92;&#39;                 &lt;&gt; / /&lt;&gt;&#92; &#92; &lt;&gt;
       ~ &#39;. &#39; .&#39; ~         (_)  (_)      _    _       _ //&#92;&#92; _
           &gt;O&lt;             &#39;      &#39;     /_/  &#92;&#92;_     / /&#92;  /&#92; &#92;
       _ .&#39; . &#39;. _                        &#92;&#92;//       &lt;&gt; /  &#92; &lt;&gt;
      :o|   |   |o:                   /&#92;_&#92;&#92;&gt;&lt;&#92;&#92; &#92;/
           &#39;:&#39;                           _//&#92;&#92;_
                                        &#92;&#92;_&#92;/_&#92;/
            </pre>  
            <p class="Text">You follow your way inside the ventilation, all the grids seem too small to fit you, until you find one that you can get in.<br>
            As you get close to it, the cold air coming from the grid gives you shivers, and as you look down to inspect you see something that frightens you.<br>
            There are around 10 aliens in there and a lot of cryogenic chambers that contains humans inside them.<br>
            All the aliens are wearing lab coats and respirators, they are unarmed except for two in the center of the room.<br>
            Close to the door there's a desk with lots of guns the size of rifles, and conveniently for you, the door is about five meters from the grid.<br>
            The room is dark, but not dark enough for them not to see you. If you act quick,<br>
            you could fall from the ceiling and run to grab a rifle before the two Balharry shoot you.<br>
            You silently think about your next step.</p>
        `,
        choices: [
            {
                choice: "Unscrew the grid and sprint for the rifles",
                destination:'saveHumans'
            },
            {
                choice: "Keep going through the ventilation",
                destination:'electricRoom'
            },
        ]
    },
    saveHumans: {
        story: `
            <pre class="ascii-art">                                                           
        _ 
       / | 
       |_|  _                                                   __ _
       | |_( |_____________ _____________|:::|__________________&#92;_&#39;_|___
      |' ||=====___________) |___________&#92;___/______________________|(o)|| 
      &#92;__|(o)|        ||------------------------------------------------||| 
      |__|___)        ||         _______________________________        ||| 
      |               ||        |_______________________________|       ||) 
      |   ____      __||__()__)        /________________________________||| 
      |  /    )    (           /___ _/ /   |      
            </pre>  
            <p class="Text">You silently unscrew the grid and go down to the ground. You run as fast as you can in the direction of the door,<br>
            you feel a laser beam passing close to your ear, so you jump to behind the desk and quickly grab a rifle.<br>
            They keep shooting at you, so you wait for them to stop shooting you to shoot and kill them both.<br>
            Now, the sirens are already on and you are left with the other scientists in the room.<br> 
            You point your gun to one of them, and without saying nothing he understands the assignment and pulls a switch.<br>
            Now that you are clean, you search for anything that could free these humans.<br>
            All the cryogenic chambers open, and the humans start to slowly regain consciousness and stand up.<br>
            The scientists are all paralyzed with fear, so now you have to decide what you will do with them...</p>
        `,
        choices: [
            {
                choice: "Kill them",
                destination:'killScient'
            },
            {
                choice: "Let them go",
                destination:'letScient'
            },
        ]
    },
    killScient: {
        story: `
            <p class="Text">Before they could react, you kill all the Balharry. The fear in their faces didn't make you feel good, but you didn't feel bad either...<br>
            - Are we free? - One of them asks.<br>
            - Not yet - you respond - I have to find the navigation room and send them back.<br>
            - We could also grab some guns and kill them ourselves. When the aliens were bringing me here, I could see them coming downstairs with guns.<br>
            - That means - he continues explaining his idea - that there are a lot of guns upstairs that we could use. I know it's dangerous, but what else could we do?<br>
            He has a point, will you consider his idea or just lead them to the exit: The room you killed the first Balharry?</p>
        `,
        choices: [
            {
                choice: "Go upstairs",
                destination:'humansUpstairs'
            },
            {
                choice: "Take them to safety",
                destination:'exitRoom'
            },
        ]
    },
    letScient: {
        story: `
            <p class="Text">They seem no harm, so you gather them in the other side of the room, further from the rifle table.<br>
            - Are we free? - One of them asks.<br>
            - Not yet - you respond, while pointing your gun at the hostages - I have to find the navigation room and send them back.<br>
            - We could also grab some guns and kill them ourselves. When the aliens were bringing me here, I could see them coming downstairs with guns.<br>
            - That means - he continues explaining his idea - that there are a lot of guns upstairs that we could use. I know it's dangerous, but what else could we do?<br>
            He has a point, will you consider his idea or just lead them to the exit: The room you killed the first Balharry?</p>
        `,
        choices: [
            {
                choice: "Go upstairs",
                destination:'humansUpstairs'
            },
            {
                choice: "Take them to safety",
                destination:'exitRoom'
            },
        ]
    },
    noGun: {
        story: `
            <pre class="ascii-art">
                     o   o                                         
                      )-( 
                     (O O)                                        
                      &#92;=/ 
                     .-&#34;-. 
                    //&#92; /&#92;&#92; 
                  _// / &#92; &#92;&#92;_ 
                 =./ {,-.} &#92;.= 
                     || || 
                     || ||    
                  _ _|| ||__   
                  &#39;---&#34; &#39;---&#39;
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
                                 _\\_______/_===========[]=(-o)
                                  )\\_____/(            []  
                                 /     ||  \\           []
                                /      ||   \\          []
                               /       ||    \\         []
                              /~~~~~~~~~~~~~~~\\        []
                             /         ::      \\       []
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
                | |_            /          \\   ________[]____
             ___| |_|==========(____________)_/______________\\ 
            </pre>
            <p class="Text">You pull it and the lights turn on to reveal what seems to look like a science lab, full of flasks filled with colorful liquids,<br>
            weird rocks, plants and etcetera. You take a look around just to find two beds in the corner of the lab and two Balharry sleeping peacefully in it.<br>
            Fortunately for you, they seem to be in a very heavy sleep completely undisturbed by your presence,<br>
            but you decide to be more careful to not wake them up. Close to them, you find a table with four flasks containing each a different liquid.<br>
            Knowing nothing about the alien language in the labels nor chemistry, which one of them will you pick?</p>
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
            <p class="Text">You pick the flask and take another look around to see if there is anything else that can be useful.<br>
            On one of the top shelves you see what looks like a syringe filled with a bright green liquid.<br>
            It could be really useful, but to reach it you'll need to stand over the table and climb the shelves, which can be dangerous.<br></p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Will you attempt to reach the syringe?</p>
        `,
        choices: [
            {
                choice: "No, it's too dangerous",
                destination:'leaveSyringe'
            },
            {
                choice: "A flash AND a syringe, why not?",
                destination:'takeSyringeG'
            },
        ]
    },
    takeSyringeG: {
        story: `
            <p class="Text">You balance yourself over the table and start climbing. You firmly grab the bottom shelves and start going up.<br>
            Suddenly, one of the shelves break and everything else collapses and falls to the ground, including yourself, who felt in the table and broke it.<br></p>
            <pre class="ascii-art">
            .-&#34;&#34;&#34;&#34;-.        .-&#34;&#34;&#34;&#34;-.
           /        &#92;      /        &#92;
          /_        _&#92;    /_        _&#92;
         // &#92;      / &#92;&#92;  // &#92;      / &#92;&#92;
         |&#92;__&#92;    /__/|  |&#92;__&#92;    /__/|
          &#92;    ||    /    &#92;    ||    /
           &#92;        /      &#92;        /
            &#92;  __  /        &#92;  __  /
             &#39;.__.&#39;          &#39;.__.&#39;
              |  |            |  |
              |  |            |  |
            </pre>
            <p class="Text">You stand up and anxiously look back to the sleeping scientists, thinking that no one could stay sleeping after such a mess.<br>
            They are, in fact, staring directly at you in a mix of confusion and fear. They appear to be unarmed, and the only gun you see is the one on the table.<br>
            One of them quickly tries to reach for it, now think fast and act faster!</p>
        `,
        choices: [
            {
                choice: "Throw the flask at them",
                destination:'labDeathThrow'
            },
            {
                choice: "Drink the flask",
                destination:'drinkFlask'
            },
        ]
    },
    labDeathThrow: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">You aim and throw the flask at them hoping it will melt their skin or something similar, but once the glass breaks and the liquid spills in both<br>
            they start growing in size, their skin gets tougher and they jump over you faster than you can react.<br>
            You died while they beheaded you and violently bit through your stomach.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    drinkFlask: {
        story: `
            <pre class="ascii-art">    
                                  _.-&#34;&#34;&#34;-._ 
                            _    /     (#&#92; &#92;
    _.-&#34;&#34;&#34;-._           .nNNNNNn:       &#92;#) :
   /     (#&#92; &#92;_.-&#34;&#34;&#34;-._/NNNNN(#&#92;N&#92;         /
  :       &#92;#) |.:|||:.|NNNNNNN&#92;#)N&#34;-.___.-&#34;
   &#92;         /|||||(#&#92;|&#92;NNNNNNNNN/
    &#34;-.___.-&#34;||||||&#92;#)||&#34;*NNNNN*&#34;
             &#92;|||||||||/
              &#39;:|||:&#39;
              .-&#34;   &#34;-.
            .&#39;     (#&#92; &#39;.
            :       &#92;#) :
            &#39;.         .&#39;
               &#34;-...-&#34;
            </pre>
            <p class="Text">You start getting bigger and bigger, you feel your skin hard like rock and your muscles getting stronger. You feel like you could lift anything.<br>
            When the scientist grabs the gun and shoots you, the laser beam feels ticklish and does nothing against you. So you take your chance and attack the aliens with your bare hands.<br>
            You kill them with no effort, but as soon as you get to the lab door,<br>
            you start feeling an excruciating pain in your stomach, throw up, lay in the ground and feel your body going back to normal.<br>
            You are ready to leave now, so you open the door and keep walking until you find three doors that caugh your attention:<br>
            The first one is to your left. It has scratches in it, and whoever made them must be really strong and angry...<br>
            The second one looks normal but as you get closer the air fells really cold. You try opening it out of curiosity but it's locked.<br>
            The third one has a light flashing, but that's all you can see from under the door, which is also locked.<br>
            You also see a dim red light coming from inside the ventilation, which you can try crawling inside to make your way to the locked rooms.</p>
        `,
        choices: [
            {
                choice: "First door",
                destination:'zooRoom'
            },
            {
                choice: "Second door",
                destination:'cryoRoom'
            },
            {
                choice: "Third door",
                destination:'electricRoom'
            },
            {
                choice: "Go for the red light",
                destination:'prisonCell'
            }
        ]
    },
    flaskBad: {
        story: `
            <p class="Text">You pick the flask and take another look around to see if there is anything else that can be useful.<br>
            On one of the top shelves you see what looks like a syringe filled with a bright green liquid.<br>
            It could be really useful, but to reach it you'll need to stand over the table and climb the shelves, which can be dangerous.<br></p>
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
                destination:'takeSyringeB'
            },
        ]
    },
    takeSyringeB: {
        story: `
            <p class="Text">You balance yourself over the table and start climbing. You firmly grab the bottom shelves and start going up.<br>
            Suddenly, one of the shelves break and everything else collapses and falls to the ground, including yourself, who felt in the table and broke it.<br></p>
            <pre class="ascii-art">
            .-&#34;&#34;&#34;&#34;-.        .-&#34;&#34;&#34;&#34;-.
           /        &#92;      /        &#92;
          /_        _&#92;    /_        _&#92;
         // &#92;      / &#92;&#92;  // &#92;      / &#92;&#92;
         |&#92;__&#92;    /__/|  |&#92;__&#92;    /__/|
          &#92;    ||    /    &#92;    ||    /
           &#92;        /      &#92;        /
            &#92;  __  /        &#92;  __  /
             &#39;.__.&#39;          &#39;.__.&#39;
              |  |            |  |
              |  |            |  |
            </pre>
            <p class="Text">You stand up and anxiously look back to the sleeping scientists, thinking that no one could stay sleeping after such a mess.<br>
            They are, in fact, staring directly at you in a mix of confusion and fear. They appear to be unarmed, and the only gun you see is the one on the table.<br>
            One of them quickly tries to reach for it, now think fast and act faster!</p>
        `,
        choices: [
            {
                choice: "Throw the flask at them",
                destination:'throwFlask'
            },
            {
                choice: "Drink the flask",
                destination:'labDeathDrink'
            },
        ]
    },
    labDeathDrink: {
        story: `
            <pre class="ascii-art">
                _.--&#34;&#34;--._ 
               /  _    _  &#92;
            _  ( (_&#92;  /_) )  _ 
           { &#92;._&#92;   /&#92;   /_./ }
           /_&#34;=-.}______{.-=&#34;_&#92;
           _  _.=(&#34;&#34;&#34;&#34;&#34;&#34;)=._  _ 
           (_&#39;&#34;_.-&#39;&#34;~~&#39;&#34;-.&#34;&#39;_)
            {_&#34;            &#34;_}  
            </pre>
            <p class="Text">You quickly open the flask and drink it hoping it will give any superpower, but once the liquid goes down your throat you immediately regret it.<br>
            Your mouth, throat and esophagus start melting and the last thing you can see is the scientist grabbing the gun and pointing it to your head.<br>
            You died from a headshot while agonizing in pain from the hyper corrosive liquid.</p>
        `,
        choices: [
            {
                choice: "Try again",
                destination:'begin'
            },
        ]
    },
    throwFlask: {
        story: `
            <pre class="ascii-art">    
                                  _.-&#34;&#34;&#34;-._ 
                            _    /     (#&#92; &#92;
    _.-&#34;&#34;&#34;-._           .nNNNNNn:       &#92;#) :
   /     (#&#92; &#92;_.-&#34;&#34;&#34;-._/NNNNN(#&#92;N&#92;         /
  :       &#92;#) |.:|||:.|NNNNNNN&#92;#)N&#34;-.___.-&#34;
   &#92;         /|||||(#&#92;|&#92;NNNNNNNNN/
    &#34;-.___.-&#34;||||||&#92;#)||&#34;*NNNNN*&#34;
             &#92;|||||||||/
              &#39;:|||:&#39;
              .-&#34;   &#34;-.
            .&#39;     (#&#92; &#39;.
            :       &#92;#) :
            &#39;.         .&#39;
               &#34;-...-&#34;
            </pre>
            <p class="Text">You throw the flask at them, and before the scientist can reach the gun, its hand starts melting and both of the aliens fall to the ground screaming in pain.<br>
            Their bodies melt until there's nothing left of them, and you realise you should probably leave now.<br>
            You open the door and keep walking until you find three doors that caugh your attention:<br>
            The first one is to your left. It has scratches in it, and whoever made them must be really strong and angry...<br>
            The second one looks normal but as you get closer the air fells really cold. You try opening it out of curiosity but it's locked.<br>
            The third one has a light flashing, but that's all you can see from under the door, which is also locked.<br>
            You also see a dim red light coming from inside the ventilation, which you can try crawling inside to make your way to the locked rooms.</p>
        `,
        choices: [
            {
                choice: "First door",
                destination:'zooRoom'
            },
            {
                choice: "Second door",
                destination:'cryoRoom'
            },
            {
                choice: "Third door",
                destination:'electricRoom'
            },
            {
                choice: "Go for the red light",
                destination:'prisonCell'
            }
        ]
    },
    zooRoom: {
        story: `
            <pre class="ascii-art">    
                         _.----~~~~~~-----..__ 
                  __..------~~~~-     .._     ~~-. 
     ___.--.--~~~~     --~~~~---~ __  ~~----.__   ~~~~~~~---...._____ 
(~~~~_..----~       ~~--=&lt; O &gt;- .----. -&lt; O &gt;=--~~             ..   .) 
 ~-..__..--         ..  ___-----_...__-----___        _.  ~-=___..-~ 
         '   _    ..   (     ' :_.}{._; ' '   )      _-     ' 
          \   ~~-      '   ' ' __###__  ''    '    -~     .' 
           '-._  ~-.    _'--~~~VvvvvVV~~---'_     ~..    _. 
               -.     '~##\(            )/###~' .     _.~ 
                 -    '.###\#    {     #/####.'    _-~ 
                  -_    -####    !     #####-  .. 
                    -._  ~.###   }     ###-~ ___.-~ 
                       ~-  \##  / '   ##.~ /~ 
                         \ |###  '   ###' / 
                          \`/\#######/'\ ; 
                           ~-.^^^^^^^ .-~ 
                              ~~~~~~~~

            </pre>
            <p class="Text">You open the first door. The room is really dark and filled with Balharry' blue blood and corpses. Then, before you can react, something jumps over you.<br>
            It's an unidentified animal that resembles a panther. Your first reaction is to take the syringe an inject the liquid in it.<br>
            The creature falls to the ground, you get up and take a look around.<br>
             A lab filled with animals from earth, but there is something different with them, like if they were experimented on.<br>
            The panther starts waking up and quickly approach you, it sniffs you but before you could panic the animla turns around and walks out the door.<br>
            Since it didn't attack you but attacked the aliens, it may be a good idea to follow the animal.<br>
            It runs through the hallway and breaks a door: It is the electricity room of the spaceship.<br>
            It starts destroying all of the wires and generators, making a big mess.<br>
            You can see nothing, the mothership is now in complete darkness and the panther simply lays on the floor and sleeps. You better let it sleep peacefully.<br>
            The silence is abruptly disrupted by laser beams and sirens, but you are not the Balharry' target.<br>
            You run upstairs, but as you are running you bump into something and you both fall to the ground.<br>
            It's an alien, but not a Balharry. He then runs upstairs and you follow him, since there is no way for you to go and you can't see much in the dark.<br>
            He enters a room, leaving the door open. You can also see a door with the lights on a few steps away, and a ventilation close to it.<br>
            Where will you go?</p>
        `,
        choices: [
            {
                choice: "Follow him",
                destination:'cloneRoom'
            },
            {
                choice: "Follow the lights",
                destination:'techRoom'
            },
            {
                choice: "Enter the ventilation",
                destination:'warRoom'
            }
        ]
    },
    leaveSyringe: {
        story: `
            <p class="Text">You decide that taking the syringe could be dangerous and decides to take only the flask, so you open the door and return to the hallway.<br>
            All the doors seem to look the same, you walk a little more, finding one with a different color than the others and decide to open it.<br>
            It looks like a security room, full of screens and cameras. You can see the corridor you were before, the dark room you probably entered before and all kinds of rooms.<br>
            You search for one that resembles a navigation room but everything looks confusing, although three rooms catch your attention.<br>
            The first one is a room filled with cryogenic chambers with humans inside of it. You really want to save them before leaving the ship and look around to find any other humans.<br>
            The second one is a room full of equipments. protective suits, bigger guns and all sorts of technologic devices that could really help you right now.<br>
            The third one is a room with a flashing light, buttons, wires and energy generators, probably an electricity room. Unlike the other two, there are no aliens there<br>
            There is also a entry to the ventilation system right behind you that can be useful to get to these rooms, and you can see a dim red light coming from inside it.<br>
            So which way are you going?</p>
        `,
        choices: [
            {
                choice: "Cryo room",
                destination:'cryoRoom'
            },
            {
                choice: "Tech room",
                destination:'techRoom'
            },
            {
                choice: "Electricity room",
                destination:'electricRoom'
            },
            {
                choice: "Go for the red light",
                destination:'prisonCell'
            }
        ]
    },
    leaveSyringeGun: {
        story: `
            <p class="Text">You decide that taking the syringe could be dangerous and decides to take only the flask, so you open the door and return to the hallway.<br>
            All the doors seem to look the same, you walk a little more, finding one with a different color than the others and decide to open it.<br>
            It looks like a security room, full of screens and cameras. You can see the corridor you were before, the dark room you probably entered before and all kinds of rooms.<br>
            You search for one that resembles a navigation room but everything looks confusing, although three rooms catch your attention.<br>
            The first one is a room filled with cryogenic chambers with humans inside of it. You really want to save them before leaving the ship and look around to find any other humans.<br>
            The second one is a room full of equipments. protective suits, bigger guns and all sorts of technologic devices that could really help you right now.<br>
            The third one is a room with a flashing light, buttons, wires and energy generators, probably an electricity room. Unlike the other two, there are no aliens there<br>
            There is also a entry to the ventilation system right behind you that can be useful to get to these rooms, and you can see a dim red light coming from inside it.<br>
            So which way are you going?</p>
        `,
        choices: [
            {
                choice: "Cryo room",
                destination:'cryoRoom'
            },
            {
                choice: "Tech room",
                destination:'techRoom'
            },
            {
                choice: "Electricity room",
                destination:'electricRoom'
            },
            {
                choice: "Go for the red light",
                destination:'prisonCellGun'
            }
        ]
    },
    labOff: {
        story: `
            <p class="Text">You decide that wathever is inside that room must be left alone. After waiting a little more, you open the door and return to the hallway.<br>
            All the doors seem to look the same, you walk a little more, finding one with a different color than the others and decide to open it.<br>
            It looks like a security room, full of screens and cameras. You can see the corridor you were before, the dark room you probably entered before and all kinds of rooms.<br>
            You search for one that resembles a navigation room but everything looks confusing, although three rooms catch your attention.<br>
            The first one is a room filled with cryogenic chambers with humans inside of it. You really want to save them before leaving the ship and look around to find any other humans.<br>
            The second one is a room full of equipments. protective suits, bigger guns and all sorts of technologic devices that could really help you right now.<br>
            The third one is a room with a flashing light, buttons, wires and energy generators, probably an electricity room. Unlike the other two, there are no aliens there<br>
            There is also a entry to the ventilation system right behind you that can be useful to get to some of these rooms, and you can see a dim red light coming from inside it.<br>
            So which way are you going?</p>
        `,
        choices: [
            {
                choice: "Cryo room",
                destination:'cryoRoom'
            },
            {
                choice: "Tech room",
                destination:'techRoom'
            },
            {
                choice: "Electricity room",
                destination:'electricRoom'
            },
            {
                choice: "Go for the red light",
                destination:'prisonCell'
            }
        ]
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
    <p class="Text"><code>${story[story.currentScene].story}</code></p>
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        ${getButtons()}
    </div>
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

