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
            <p class="Text">Alienígenas invadiram a Terra e começaram seus planos de dominação mundial. Você foi capturado, mas conseguiu escapar e matou o Balharry que o prendeu.<br>
            Agora, você está preso dentro da nave-mãe, mas com uma vantagem: ninguém sabe que você está aqui.<br>
            Sua missão é chegar à sala de navegação e enviá-los de volta para de onde vieram.<br>
            Mas lembre-se, cada decisão o levará a um cenário completamente diferente, e agir de forma descuidada pode e irá levá-lo à morte.<br>
            Então, seja cuidadoso e boa sorte.
            <br>
            <br>
            <br>
            Você está atualmente no térreo da nave, em uma sala pequena e fria com apenas você e o Balharry morto. Você irá:</p>
        `,
        choices: [
            {
                choice: "Vasculhar o corpo",
                destination:'getGun'
            },
            {
                choice: "Sair da sala imediatamente",
                destination:'noGun'
            },
            {
                choice: "Explorar a nave-mãe através do sistema de ventilação",
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
            <p class="Text">Que sorte... Você encontrou uma arma laser! Agora, qual caminho você seguirá?</p>
        `,
        choices: [
            {
                choice: "Sair da sala imediatamente",
                destination:'leaveRoom'
            },
            {
                choice: "Explorar a nave-mãe através do sistema de ventilação",
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
            <p class="Text">Você abre a porta lentamente e se depara com um corredor mal iluminado. Ele é longo e cheio de portas.<br>
            Todas parecem iguais, e você leva um tempo para pensar por onde deve começar.<br>
            Interrompendo seu raciocínio, você ouve dois alienígenas se aproximando no final do corredor.</p>
        `,
        choices: [
            {
                choice: "Mirar no final do corredor com sua arma",
                destination:'gunFail'
            },
            {
                choice: "Entrar na porta mais próxima a você",
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
            <p class="Text">Você mira com confiança em direção às vozes, e quando os dois Balharry aparecem, você puxa o gatilho.<br>
            A arma não funciona, e você tenta desesperadamente disparar de novo e de novo e de novo.<br>
            Mas, à medida que suas tentativas falham, eles rapidamente pegam suas armas e atiram em você.<br>
            Você morreu com vários raios laser atravessando seu corpo.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
                destination:'begin'
            },
        ]
    },
    hallwayDoor: {
        story: `
            <p class="Text">Você rapidamente abre a primeira porta que consegue e se esconde silenciosamente dentro. A sala está completamente escura,<br>
            mas antes de olhar ao redor, você fica em silêncio esperando os alienígenas no corredor irem embora.<br>
            Não demora muito, pois eles passam por você sem dizer uma palavra um ao outro.<br>
            "Será que eles sequer conversam?", você pensa enquanto tenta explorar a sala em busca de algo útil.<br>
            Você sente algum tipo de interruptor, e se pergunta se deveria puxá-lo...</p>
        `,
        choices: [
            {
                choice: "Sim",
                destination:'labOnGun'
            },
            {
                choice: "Não",
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
            <p class="Text">Você puxa o interruptor e as luzes se acendem para revelar o que parece ser um laboratório de ciências, cheio de frascos com líquidos coloridos,<br>
            pedras estranhas, plantas e etcetera. Você olha ao redor e encontra duas camas no canto do laboratório com dois Balharry dormindo tranquilamente nelas.<br>
            Felizmente para você, eles parecem estar em um sono muito profundo, completamente alheios à sua presença,<br>
            mas você decide ser mais cuidadoso para não acordá-los. Perto deles, você encontra uma mesa com quatro frascos, cada um contendo um líquido diferente.<br>
            Não sabendo sobre química alienígena nem humana, qual deles você escolherá?</p>
        `,
        choices: [
            {
                choice: "Frasco Roxo",
                destination:'flaskGoodGun'
            },
            {
                choice: "Frasco Verde",
                destination:'flaskGoodGun'
            },
            {
                choice: "Frasco Laranja",
                destination:'flaskBadGun'
            },
            {
                choice: "Frasco Azul",
                destination:'flaskBadGun'
            }
        ]
    },
    flaskGoodGun: {
        story: `
            <p class="Text">Você pega o frasco e dá outra olhada ao redor para ver se há algo mais que possa ser útil.<br>
            Em uma das prateleiras, você vê o que parece ser uma seringa preenchida com um líquido verde brilhante.<br>
            Pode ser muito útil, mas para alcançá-la você precisará subir na mesa e escalar as prateleiras, o que pode ser perigoso.<br></p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Você tentará alcançar a seringa?</p>
        `,
        choices: [
            {
                choice: "Não, é muito perigoso",
                destination:'leaveSyringeGun'
            },
            {
                choice: "Um frasco E uma seringa, por que não?",
                destination:'takeSyringeGG'
            },
        ]
    },
    takeSyringeGG: {
        story: `
            <p class="Text">Você se equilibra sobre a mesa e começa a escalar. Segurando-se firmemente nas prateleiras inferiores, você começa a subir.<br>
            De repente, uma das prateleiras quebra e tudo desmorona, inclusive você, que cai sobre a mesa e a quebra.<br></p>
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
            <p class="Text">Você se levanta e olha ansiosamente para os cientistas alienígenas, já que ninguém poderia continuar dormindo depois de um barulho desses.<br>
            De fato, eles estão olhando diretamente para você assustados. Eles parecem estar desarmados, e a única arma que você vê é a que está sobre a mesa.<br>
            Um deles rapidamente tenta alcançá-la, agora pense rápido e aja mais rápido ainda!</p>
        `,
        choices: [
            {
                choice: "Jogar o frasco neles",
                destination:'labDeathThrow'
            },
            {
                choice: "Beber o líquido do frasco",
                destination:'drinkFlask'
            },
            {
                choice: "Atirar neles",
                destination:'gunFail2'
            }
        ]
    },
    flaskBadGun: {
        story: `
            <p class="Text">Você pega o frasco e dá outra olhada ao redor para ver se há algo mais que possa ser útil.<br>
            Em uma das prateleiras, você vê o que parece ser uma seringa preenchida com um líquido verde brilhante.<br>
            Pode ser muito útil, mas para alcançá-la você precisará subir na mesa e escalar as prateleiras, o que pode ser perigoso.<br></p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Você tentará alcançar a seringa?</p>
        `,
        choices: [
            {
                choice: "Não, é muito perigoso",
                destination:'leaveSyringeGun'
            },
            {
                choice: "Um frasco E uma seringa, por que não?",
                destination:'takeSyringeBG'
            },
        ]
    },
    takeSyringeBG: {
        story: `
            <p class="Text">Você se equilibra sobre a mesa e começa a escalar. Segurando-se firmemente nas prateleiras inferiores, você começa a subir.<br>
            De repente, uma das prateleiras quebra e tudo desmorona, inclusive você, que cai sobre a mesa e a quebra.<br></p>
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
            <p class="Text">Você se levanta e olha ansiosamente para os cientistas alienígenas, já que ninguém poderia continuar dormindo depois de um barulho desses.<br>
            De fato, eles estão olhando diretamente para você assustados. Eles parecem estar desarmados, e a única arma que você vê é a que está sobre a mesa.<br>
            Um deles rapidamente tenta alcançá-la, agora pense rápido e aja mais rápido ainda!</p>
        `,
        choices: [
            {
                choice: "Jogar o frasco neles",
                destination:'throwFlask'
            },
            {
                choice: "Beber o líquido do frasco",
                destination:'labDeathDrink'
            },
            {
                choice: "Atirar neles",
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
            <p class="Text">Você mira no alienígena e puxa o gatilho antes que ele alcance a mesa,<br>
            mas nada acontece, e você percebe que sua arma não funciona. Talvez isso explique porque o Balharry que a possuía está morto...<br>
            Você morreu quando o cientista alcançou a arma dele e atirou na sua cabeça, explodindo seu cérebro.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
                destination:'begin'
            },
        ]
    },
    labOffGun: {
         story: `
            <p class="Text">Você decide que o que quer que esteja dentro daquela sala deve ser deixado lá. Depois de esperar um pouco, você abre a porta e retorna ao corredor.<br>
            Todas as portas parecem iguais, você anda mais um pouco e encontra uma porta de cor diferente das outras, então decide abri-la.<br>
            Parece uma sala de segurança, cheia de telas e câmeras. Você pode ver o corredor onde estava, a sala escura onde provavelmente entrou e muitas outras salas.<br>
            Você procura uma que se assemelhe a uma sala de navegação, mas tudo parece confuso, embora três salas chamem sua atenção.<br>
            A primeira é uma sala cheia de câmaras criogênicas com humanos dentro. Você quer muito salvá-los antes de sair da nave.<br>
            A segunda é uma sala cheia de equipamentos: trajes de proteção, armas maiores e todos os tipos de dispositivos tecnológicos que poderiam realmente ajudar você agora.<br>
            A terceira é uma sala com uma luz piscando, botões, fios e geradores de energia, provavelmente uma sala de eletricidade. Ao contrário das outras duas, não há alienígenas ali.<br>
            Há também uma entrada para o sistema de ventilação logo atrás de você, que pode ser útil para chegar a algumas dessas salas, e você vê uma luz vermelha fraca vindo de lá.<br>
            Então, para onde você vai?</p>
        `,
        choices: [
            {
                choice: "Sala de criogenia",
                destination:'cryoRoom'
            },
            {
                choice: "Sala de tecnologias",
                destination:'techRoom'
            },
            {
                choice: "Sala de eletricidade",
                destination:'electricRoom'
            },
            {
                choice: "Seguir a luz vermelha",
                destination:'prisonCellGun'
            }
        ]
    },
    vent: {
        story: `
            <p class="Text">Você se agacha para dentro do sistema de ventilação, é pequeno, mas grande o suficiente para caber um humano.<br>
            Lá dentro, você só pode ir para a direita e depois continuar em frente. Você vê o que está acontecendo abaixo de você pelas frestas.<br>
            Parece um corredor escuro, e você não encontrou nada que lhe dê uma pista sobre onde fica a sala de navegação.<br>
            Totalmente sem rumo, a ventilação agora só segue para dois caminhos: à direita você vê uma luz vermelha a uma curta distância,<br>
            enquanto à esquerda você não vê nada além de pura escuridão.<br>
            Qual caminho você escolhe?</p>
        `,
        choices: [
            {
                choice: "Direita",
                destination:'prisonCell'
            },
            {
                choice: "Esquerda",
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
            <p class="Text">Você segue até alcançar a luz vermelha que viu antes. Você olha para baixo<br>
            e vê uma pequena sala com uma porta reforçada, pouca mobilia e um alienígena dentro.<br>
            Ao que parece, é uma cela de prisão, e aquele alienígena deve ser o prisioneiro.<br>
            Ele é muito diferente daquele que te capturou, com cores, tamanho e características diferentes, provavelmente de outro planeta.<br>
            De repente, ele olha diretamente para você e murmura algo que você não consegue compreender.<br>
            Agora, o que você fará?</p>
        `,
        choices: [
            {
                choice: "Ignorá-lo e seguir seu caminho",
                destination:'cryoRoom'
            },
            {
                choice: "Puxá-lo para dentro da ventilação",
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
            <p class="Text">Você consegue facilmente desparafusar a grade de ventilação, e ele então estende a mão e você a puxa.<br>
            Ele te encara de maneira intimidadora, o que te deixa desconfortável, mas então dá um grande sorriso, o que te tranquiliza.<br>
            Antes que você possa tentar se comunicar, ele rasteja pela ventilação, e você apenas o segue.<br>
            De repente, ele para e olha para o teto do duto de ventilação onde vocês estão.<br>
            Ele começa a socar o metal acima de vocês. Ele é incrivelmente forte, e você pensa em como é sortudo por tê-lo como aliado.<br>
            Com apenas quatro socos, ele abre um buraco, se levanta e sobe para dentro da sala. Antes que você possa segui-lo,<br>
            você ouve disparos de laser e várias coisas quebrando e caindo no chão.<br>
            Você permanece escondido, e o barulho para após cerca de trinta segundos.<br>
            Você espia e vê que o alienígena que acabou de conhecer ainda está vivo, mas parece não se importar com sua presença.<br>
            Para onde você vai?</p>
        `,
        choices: [
            {
                choice: "Entrar na sala com ele",
                destination:'councilRoom'
            },
            {
                choice: "Continuar através da ventilação",
                destination:'cryoRoom'
            }
        ]
    },
    councilRoom: {
        story: `
            <p class="Text">Você entra na sala. Há uma grande mesa de conferência no centro e muitas cadeiras,<br>
            algumas ocupadas por Balharry mortos. Você também vê o que parece ser uma TV e rádios.<br>
            Há muito sangue azul, TVs quebradas e alienígenas mortos por toda a sala, mas seu "amigo" ainda está vivo e parece estar procurando algo.<br>
            Ele reconhece você e aponta para o rádio. De repente, uma voz alienígena fala através dele em uma linguagem ininteligível.<br>
            Você sente que precisa dizer algo, mas não sabe o que dizer...<br>
            - Todos os seus líderes estão mortos, e não há nada para vocês neste planeta - você diz, usando sua voz mais grossa - saiam agora, antes que seja tarde demais.<br>
            Alguns segundos de silêncio, então você ouve uma risada e uma resposta que você não consegue entender. Você olha para o alienígena esperando uma resposta,<br>
            e assim que ele acena negativamente com a cabeça, você percebe: eles não vão partir tão facilmente.<br>
            Todos os sistemas de comunicação se desligam, e o alienígena parece ter encontrado o que procurava.<br>
            Ele pega alguns papéis e, antes de sair, entrega um para você: é um mapa.<br>
            Você não tem certeza de como lê-lo, mas descobre que está no segundo andar.<br>
            Do outro lado desta sala do Conselho, há outro laboratório, e você vê o alienígena indo para lá.<br>
            Alguns passos à frente, há uma sala de tecnologias, ou você pode descer as escadas no começo do corredor.<br>
            Você entrará no laboratório com ele ou seguirá por outro caminho?</p>
        `,
        choices: [
            {
                choice: "Entrar no laboratório",
                destination:'cloneRoom'
            },
            {
                choice: "Ir para sala de tecnologias",
                destination:'techRoomAlien'
            },
            {
                choice: "Descer as escadas",
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
            <p class="Text">Você desce as escadas procurando para onde ir em seguida.<br>
            De repente, um grupo Balharry irrompe por uma porta, e você não consegue se esconder a tempo.<br>
            Você morreu sendo atingido pelos rifles dos soldados Balharry.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
                destination:'begin'
            },
        ]
    },
    techRoomAlien: {
        story: `
            <p class="Text">Você entra na sala de tecnologias silenciosamente, mas os Balharry lá dentro logo percebem sua presença.<br>
            Você fecha a porta e corre de volta para a sala de conferência, depois se esconde dentro da ventilação de onde veio.<br>
            Você ouve eles vindo atrás de você, mas antes que eles entrassem na sala, você escuta tiros e gritos vindos do laboratório.<br>
            Muito assustado para sair da sala, sua única saída é a ventilação à sua frente.<br>
            Você continua andando e todas as grades de ventilação parecem pequenas demais para caber você, até que encontra uma na qual pode entrar.<br>
            Ao se aproximar dela, o ar frio vindo da grade causa arrepios, e ao olhar para baixo para inspecionar, vê a confusão ali dentro.<br>
            Todos os alienígenas estão correndo, pegando suas armas e saindo da sala.<br>
            Há muitas câmaras criogênicas, e dentro delas você vê humanos, como você.<br>
            Você se sente apavorado, mas consegue se recompor. Agora há apenas um alienígena na sala lendo alguns documentos,<br>
            convenientemente posicionado abaixo de você, e pelo menos 50 humanos lá embaixo.<br>
            Silenciosamente, você desenrosca a grade e pula sobre o alienígena. Ele parece muito assustado e tenta afastar você.<br>
            Ele é muito forte, mas seus anos de treinamento te tornam mais forte. Sem saber o que fazer para fazê-lo parar,<br>
            você pega um lápis na mesa e o fura até que ele pare de resistir.<br>
            Isso foi brutal... Mas não é como se houvessem outras opções. Agora, você tem um líquido azulado grudando nos braços.<br>
            Você decide limpar o sangue dele antes que possa fazer algo com você.<br>
            Agora que está limpo, você procura algo que possa libertar esses humanos.<br>
            Você encontra um interruptor, puxa-o sem hesitar e todas as câmaras criogênicas se abrem. Os humanos começam a recuperar a consciência lentamente e se levantar.<br>
            - Estamos livres? - Um deles pergunta.<br>
            - Ainda não - você responde - Preciso encontrar a sala de navegação e mandá-los embora.<br>
            - Podemos pegar algumas armas e matá-los nós mesmos. Quando os alienígenas me trouxeram aqui, vi eles descendo com armas.<br>
            - Isso significa - ele continua explicando sua ideia - que há muitas armas no andar de cima que poderíamos usar. Eu sei que é perigoso, mas o que mais poderíamos fazer?<br>
            Ele tem um ponto, você vai considerar a ideia dele ou apenas levá-los para a saída: A sala onde matou o primeiro Balharry?</p>
        `,
        choices: [
            {
                choice: "Subir as escadas",
                destination:'humansUpstairs'
            },
            {
                choice: "Levá-los em segurança para a saída",
                destination:'exitRoom'
            },
        ]
    },
    techRoom: {
        story: `
            <p class="Text">Você segue até a sala de tecnologia e entra silenciosamente, mas os Balharry dentro logo te notam.<br>
            Você fecha a porta e se esconde na ventilação ao lado da porta.<br> 
            Você ouve eles vindo atrás de você, mas antes que eles olhem dentro da ventilação, você escuta tiros e gritos vindos do laboratório.<br>
            Muito assustado para sair da sala, sua única saída é a ventilação à sua frente.<br>
            Você continua andando e todas as grades de ventilação parecem pequenas demais para caber você, até que encontra uma na qual pode entrar.<br>
            É a sala de criogenia, com apenas um alienígena na sala lendo alguns documentos, convenientemente posicionado abaixo de você.<br>
            Silenciosamente, você desenrosca a grade e pula sobre o alienígena. Ele parece muito assustado e tenta afastar você.<br>
            Ele é muito forte, mas seus anos de treinamento te tornam mais forte. Sem saber o que fazer para fazê-lo parar,<br>
            você pega um lápis na mesa e o fura até que ele pare de resistir.<br>
            Isso foi brutal... Mas não é como se houvessem outras opções. Agora, você tem um líquido azulado grudando nos braços.<br>
            Você decide limpar o sangue dele antes que possa fazer algo com você.<br>
            Agora que está limpo, você procura algo que possa libertar esses humanos.<br>
            Você encontra um interruptor, puxa-o sem hesitar e todas as câmaras criogênicas se abrem. Os humanos começam a recuperar a consciência lentamente e se levantar.<br>
            - Estamos livres? - Um deles pergunta.<br>
            - Ainda não - você responde - Preciso encontrar a sala de navegação e mandá-los embora.<br>
            - Podemos pegar algumas armas e matá-los nós mesmos. Quando os alienígenas me trouxeram aqui, vi eles descendo com armas.<br>
            - Isso significa - ele continua explicando sua ideia - que há muitas armas no andar de cima que poderíamos usar. Eu sei que é perigoso, mas o que mais poderíamos fazer?<br>
            Ele tem um ponto, você vai considerar a ideia dele ou apenas levá-los para a saída: A sala onde matou o primeiro Balharry?</p>
            `,
        choices: [
            {
                choice: "Subir as escadas",
                destination:'humansUpstairs'
            },
            {
                choice: "Levá-los em segurança para a saída",
                destination:'exitRoom'
            },
        ]
    },
    techRoomGroup: {
        story: `
            <p class="Text">Você entra na sala com o grupo, atirando nos Balharry que estão lá. Felizmente, ninguém do grupo foi ferido.<br>
            Tudo que você vê são equipamentos de alta tecnologia: Trajes protetores, jetpacks e armas maiores.<br> 
            Há jetpacks suficientes para todo o grupo, então todos se equipam. Uma metralhadora enorme chama sua atenção, e você troca seu rifle por ela.<br>
            Agora que o grupo está melhor equipado, você pode sair e procurar pela sala de navegação sem medo.<br>
            Ao sair, um dos seus companheiros te entrega um pendrive que encontrou, então você o guarda, pois pode ser importante mais tarde.<br>
            De volta ao corredor, as sirenes estão ligadas e todos os Balharry estão vindo em sua direção, mas você os derrota facilmente.<br>
            Você chega ao final do corredor e vê uma grande porta. Você a abre e encontra uma sala cheia de naves menores e, claro, Balharry.<br>
            Seu grupo atira neles e o conflito termina rapidamente, mas alguns de vocês pereceram na batalha.<br>
            Essa sala está aberta como uma garagem e as naves podem sair voando. Você poderia usar as naves para atacar os Balharry lá fora,<br>
            ou poderia fazer com que os humanos saíssem da nave-mãe com os jetpacks e ir para a sala de navegação por conta própria,<br>
            na porta à esquerda no final do corredor, de acordo com o mapa da nave-mãe fixado na parede.<br>
            Qual é a sua decisão?</p>
        `,
        choices: [
            {
                choice: "Entrar nas naves e atacá-los",
                destination:'spaceshipEnd'
            },
            {
                choice: "Ir para sala de navegação",
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
            <p class="Text">Você reúne o grupo e designa um par para cada nave, entra na sua nave sozinho(a), liga-a e sai pela abertura.<br> 
            A cidade não têm humanos, eles devem estar escondidos em abrigos ou algum outro lugar, então você mira na primeira nave Balharry que vê.<br>
            Dois feixes de laser fortes saem da sua nave, então você aprende como ela funciona e dispara em cada Balharry que consegue ver, e seu grupo faz o mesmo.<br>
            Um forte laser vindo da nave-mãe quase atinge você, então você mira nela e dispara.<br>
            Apenas sua nave não causa muito dano, mas então todas as outras naves se voltam para a nave-mãe e disparam. Ela não resiste por muito tempo,<br>
            então explode e agora todos os Balharry estão mortos. A Terra está segura agora graças ao trabalho em equipe e à sua liderança.<br>
            <br>
            <br>
            Obrigada por jogar.</p>
        `,
        choices: [
            {
                choice: "Jogar novamente",
                destination:'begin'
            },
        ]
    },
    navigationRoom: {
        story: `
            <p class="Text">Você diz ao grupo que devem sair da nave-mãe agora, eles obedecem e pulam pela abertura com seus jetpacks.<br> 
            Você sai da sala com sua metralhadora, jetpack e o pendrive, e rapidamente entra na sala de navegação.<br>
            Antes que percebam você, você mata três Balharry na sala e deixa apenas um vivo.<br>
            Você aponta sua arma para a cabeça dele e manda ele pilotar a nave-mãe para longe. Você espera que ele tenha te entendido,<br>
            porque ele começa a digitar no teclado e aperta um botão. Você ouve os motores da nave se ligando,<br>
            o Balharry pega uma arma e antes que você possa atirar nele, ele atira na própria cabeça.<br>
            Uma grade de metal tranca a porta e a luz da sala começa a piscar em vermelho, você vê um gás saindo do teto e segura sua respiração.<br>
            O computador ainda está ligado, e a tela tem um botão para clicar. Você está ficando sem ar e sem opções.<br>
            O que você vai fazer?</p>
        `,
        choices: [
            {
                choice: "Colocar o pendrive no computador",
                destination:'navigationEnd'
            },
            {
                choice: "Apertar o botão",
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
            <p class="Text">Você aperta o botão e o computador desliga.<br>
            Desesperadamente, você procura por uma maneira de abrir a porta até que não consegue mais segurar a respiração.<br>
            Você morreu respirando o gás venenoso e sangrando pelo nariz e boca até não conseguir mais respirar.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
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
            <p class="Text">Você conecta o pendrive no computador, e a fumaça para de sair imediatamente, a porta se abre e a sala é ventilada novamente.<br>
            Você aperta o botão no computador e agora os motores começam a fazer muito mais barulho, até que você sente a nave-mãe tremendo e decolando.<br>
            Você sai da sala para aproveitar sua chance de escapar; cinco Balharry estão correndo na direção da sala de navegação,<br>
            mas você os metralha antes que possam se aproximar. Você entra na sala das naves, liga seu jetpack e corre para a abertura.<br>
            A nave-mãe já está quase no espaço, e você está ansioso(a) para pular, mas quanto mais demorar, pior será.<br>
            Você se lança para fora da nave-mãe e voa pelo céu. Você vê a cidade, as naves seguindo a nave-mãe que está se afastando,<br>
            e os Balharry restantes sendo mortos pelo exército. Você conseguiu mandá-los de volta para onde vieram e salvar a Terra.<br>
            <br>
            <br>
            Obrigada por jogar.</p>
        `,
        choices: [
            {
                choice: "Jogar novamente",
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
            <p class="Text">Você decide seguir o alienígena e, como ele é uma ameaça para os Balharry, provavelmente estará mais seguro com ele por perto.<br>
            Este laboratório é diferente. Não há frascos ou produtos químicos, apenas uma grande câmara no centro conectada a uma máquina.<br>
            O alienígena vai até a máquina e começa a ler os papéis que pegou antes. Em seguida, ele pressiona alguns botões e faz um som, olhando e acenando para você.<br>
            Você se aproxima dele, e ele lhe entrega sua arma e uma folha de papel. Você não consegue ler,<br>
            mas vê uma imagem de uma alavanca exatamente como a que esta máquina possui.<br>
            Então, ele entra na câmara e fecha a porta. Ele faz um movimento de alavanca e você, sem hesitar, a puxa.<br>
            A câmara se tranca e começa a emitir uma luz verde. Começa a fazer barulhos altos e você vê uma agulha penetrar a pele dele e tirar seu sangue.<br>
            Este tubo contendo sangue ilumina-se, e você vê que ele percorre através da máquina e por toda a sala,<br>
            chegando até outras três câmaras no canto, agora iluminadas, que você não havia visto antes.<br>
            De repente, a porta do laboratório se abre e dois Balharry miram na câmara. Você atira neles com a arma que ele lhe deu e permanece vigilante até que o que quer que esteja acontecendo na câmara termine.<br>
            Mais Balharry aparecem e você rapidamente os elimina. As sirenes da nave começam a tocar, mas a câmara finalmente para de fazer barulho e sua porta se abre.<br>
            O alienígena sai dela, e as outras três câmaras também se abrem. Outros três alienígenas idênticos a ele saem delas.<br>
            Um dos clones entra na câmara principal, o outro puxa a alavanca, e eles começam a se clonar repetidamente.<br>
            Cinco minutos se passam, e agora você está com cerca de dezesseis alienígenas. Todos saem da sala, exceto dois, que continuam se clonando.<br>
            Eles entram na sala de tecnologia. Você vai segui-los ou descer as escadas?</p>
        `,
        choices: [
            {
                choice: "Ir para sala de tecnologias",
                destination:'techRoomGroup'
            },
            {
                choice: "Descer as escadas",
                destination:'raidDeath'
            }
        ]
    },
    ventGun: {
        story: `
            <p class="Text">Você se agacha para dentro do sistema de ventilação, é pequeno, mas grande o suficiente para caber um humano.<br>
            Lá dentro, você só pode ir para a direita e depois continuar em frente. Você vê o que está acontecendo abaixo de você pelas frestas.<br>
            Parece um corredor escuro, e você não encontrou nada que lhe dê uma pista sobre onde fica a sala de navegação.<br>
            Totalmente sem rumo, a ventilação agora só segue para dois caminhos: à direita você vê uma luz vermelha a uma curta distância,<br>
            enquanto à esquerda você não vê nada além de pura escuridão.<br>
            Qual caminho você escolhe?</p>
        `,
        choices: [
            {
                choice: "Direita",
                destination:'prisonCellGun'
            },
            {
                choice: "Esquerda",
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
            <p class="Text">Você segue na escuridão e de repente perde o equilíbrio.<br>
            Você tem uma longa queda para se arrepender da sua escolha antes de colidir com as hélices em alta velocidade da sala de ventilação principal.<br>
            Você morreu despedaçado(a) pelas hélices da sala de ventilação.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
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
            <p class="Text">Você segue até alcançar a luz vermelha que viu antes. Você olha para baixo<br>
            e vê uma pequena sala com uma porta reforçada, pouca mobilia e um alienígena dentro.<br>
            Ao que parece, é uma cela de prisão, e aquele alienígena deve ser o prisioneiro.<br>
            Ele é muito diferente daquele que te capturou, com cores, tamanho e características diferentes, provavelmente de outro planeta.<br>
            De repente, ele olha diretamente para você e murmura algo que você não consegue compreender.<br>
            Agora, o que você fará?</p>
        `,
        choices: [
            {
                choice: "Jogar a arma para ele",
                destination:'giveGun'
            },
            {
                choice: "Ignorá-lo e seguir seu caminho",
                destination:'cryoRoom'
            },
            {
                choice: "Puxá-lo para dentro da ventilação",
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
            <p class="Text">Você joga a arma entre as grades de ventilação e ele a pega. Ele aponta para a porta e aperta o gatilho,<br>
            mas a arma não funciona, então ele pega a lâmpada da cela, arranca os fios, pega um pouco do metal da lâmpada e conserta a arma.<br>
            Ele atira na porta, fazendo um buraco maior do que você esperava, sai, e tudo que você ouve são sirenes e muitos disparos de laser.<br>
            Provavelmente é hora de seguir em frente agora que o caos está instalado na nave-mãe, então você continua sem olhar para trás...<br>
            Você caminha e todas as grades de ventilação parecem pequenas demais para você, até encontrar uma que consegue atravessar.<br>
            Ao se aproximar dela, o ar frio vindo da grade causa arrepios, e ao olhar para baixo para inspecionar, vê a confusão ali dentro.<br>
            Todos os alienígenas estão correndo, pegando suas armas e saindo da sala.<br>
            Há muitas câmaras criogênicas, e dentro delas você vê humanos, como você.<br>
            Você se sente apavorado, mas consegue se recompor. Agora há apenas um alienígena na sala lendo alguns documentos,<br>
            convenientemente posicionado abaixo de você, e pelo menos 50 humanos lá embaixo.<br>
            O que você fará?</p>
        `,
        choices: [
            {
                choice: "Desparafusar a grade e pular sobre o Balharry",
                destination:'cryoRoomEmpty'
            },
            {
                choice: "Continuar através da ventilação",
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
            <p class="Text">Você rasteja pela ventilação e encontra uma grade que leva a uma sala com luzes piscando. É a sala de eletricidade da nave.<br>
            Todos aqueles botões e geradores de energia embaralham sua mente, e você não sabe o que fazer.<br>
            Então, você tem uma ideia brilhante: Destruir tudo! O que mais poderia causar mais problemas aos Balharry do que isso?<br>
            Você começa a puxar fios e cabos, chutar os geradores e apertar todos os botões, até fazer uma grande bagunça.<br>
            As luzes param de piscar, e você destrava a porta por dentro, voltando para o corredor.<br>
            Você não vê nada, pois a nave-mãe agora está completamente às escuras, e se pergunta se sua decisão foi realmente brilhante.<br>
            O silêncio é subitamente interrompido por disparos de laser e sirenes, mas você não é o alvo dos Balharry.<br>
            Você corre para o andar de cima, mas enquanto corre, esbarra em algo e ambos caem no chão.<br>
            É um alienígena, mas não um Balharry. Ele se levanta rapidamente, corre para o andar de cima e você o segue, já que não enxerga outro caminho.<br>
            Ele entra em uma sala, deixando a porta aberta. Você também vê uma porta com luzes acesas a poucos passos de distância, e uma ventilação próxima a ela.<br>
            Para onde você irá?</p>
            `,
        choices: [
            {
                choice: "Seguir o alienígena",
                destination:'cloneRoom'
            },
            {
                choice: "Seguir as luzes",
                destination:'techRoom'
            },
            {
                choice: "Entrar na ventilação",
                destination:'warRoom'
            }
        ]
    },
    warRoom: {
        story: `
            <p class="Text">Você se esconde dentro da ventilação e se arrasta, procurando uma sala onde possa pensar e fazer um plano para mandar os alienígenas embora.<br>
            Você vê uma sala vazia com uma mesa cheia de mapas e esboços, uma grande televisão e entra nela. Parece que eles estão planejando algo.<br>
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
            <p class="Text">Você observa melhor e vê que eles planejam invadir outro planeta: Mirkern. Sua localização é muito distante para você compreender,<br>
            mas se os Balharry conseguiram chegar à Terra, podem ser capazes de chegar lá. Então, uma ideia surge na sua mente.<br>
            Se você conseguir encontrar a sala de comunicação e falar com esses outros alienígenas, talvez eles possam ajudar a defender a Terra.<br>
            Não é um plano perfeito, pois eles também podem ser um problema, mas algo te faz acreditar que o inimigo do seu inimigo é seu amigo.<br>
            Você pega um dos mapas, abre a porta da sala e volta para o corredor; vê a porta do laboratório aberta e a sala logo em frente também aberta.<br>
            O que você fará?</p>
        `,
        choices: [
            {
                choice: "Entrar no laboratório",
                destination:'cloneRoom'
            },
            {
                choice: "Ir para a outra sala",
                destination:'startWar'
            }
        ]
    },
    startWar: {
        story: `
            <p class="Text">Você decide entrar na outra porta. Há uma grande mesa de conferência no centro, e todos os Balharry estão mortos.<br> 
            Há três alienígenas ali, iguais ao que você viu antes; eles te percebem, mas não fazem nada.<br>
            Confuso sobre o que fazer, você se aproxima de um deles e mostra o mapa. Ele olha e aponta para o rádio.<br>
            Ele caminha com você até lá, aperta alguns botões e agora você tem um rádio sintonizado com Mirkern.<br>
            - Olá - você começa a falar - Eu sou do planeta Terra. Os Balharry nos invadiram e acabei de descobrir que vocês são o próximo alvo.<br>
            - Saudações, humano - uma voz robótica responde - Como podemos saber que isso é verdade e não apenas outro dos planos deles?<br>
            - Encontrei uma sala cheia de mapas e planos, eles sabem onde vocês estão e, pelo que vi, não serão misericordiosos.<br>
            - Então nos conte os planos deles, e seremos eternamente gratos por sua ajuda.<br>
            - Não. Se quiserem saber os planos, devem vir aqui e vê-los pessoalmente.<br>
            - Nosso planeta precisa de ajuda - você continua explicando seu plano - Então, se vierem aqui e nos ajudarem, ambos os nossos planetas estarão seguros.<br>
            - Atacar de surpresa é uma boa ideia, humano. Você tem minha palavra, como general, de que não começaremos uma guerra com sua espécie.<br>
            O alienígena ao seu lado parece querer dizer algo, e você teme que ele possa dizer algo ruim.<br>
            O que você fará?</p>
        `,
        choices: [
            {
                choice: "Deixá-lo falar",
                destination:'warEnd'
            },
            {
                choice: "Quebrar o rádio",
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
            <p class="Text">Ele diz algo em uma língua que você não compreende, e o general o responde.<br>
            O alienígena então aponta sua arma para a janela da sala e atira até quebrá-la. Ele chama seus companheiros do laboratório,<br>
            e quando eles chegam, os Balharry começam a atirar neles, mas agora há muitos desses alienígenas, que acabam com os Balharry sem esforço.<br>
            Eles pegam alguns fios dos equipamentos, os amarram e os jogam pela janela para pular, e você os segue.<br>
            Agora você está na cidade, fora da nave-mãe, e vê outras naves chegando do céu.<br>
            Elas começam a atirar em todas as naves Balharry, incluindo a nave-mãe. Algumas delas pousam,<br>
            e alienígenas iguais ao que você encontrou na nave descem. Eles eliminam todos os Balharry e ajudam a defender a Terra.<br>
            O alienígena que te ajudou entra em uma nave e acena para você, desaparecendo no céu. A Terra agora está segura dos Balharry.<br>
            <br>
            <br>
            Obrigada por jogar.</p>
        `,
        choices: [
            {
                choice: "Jogar novamente",
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
            <p class="Text">Antes que ele pudesse dizer algo você quebra o rádio, inutilizando-o.<br>
            O alienígena fica muito irritado, te empurra ao chão e grita várias coisas que você não entende.<br>
            Os outros dois se ajoelham e juntam as mãos, como se estivessem rezando.<br>
            Um enorme raio laser atravessa a nave e ela explode. Agora, você e todos os outros tripulantes já estão mortos.<br>
            Muitos outros raios começam a atingir o planeta, que agora está cheio de crateras.<br>
            Você morreu quando a nave-mãe explodiu, e o planeta inteiro explode em seguida.<br>
        `,
        choices: [
            {
                choice: "Tente novamente",
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
            Silenciosamente, você desenrosca a grade e pula sobre o alienígena. Ele parece muito assustado e tenta afastar você.<br>
            Ele é muito forte, mas seus anos de treinamento te tornam mais forte. Sem saber o que fazer para fazê-lo parar,<br>
            você pega um lápis na mesa e o fura até que ele pare de resistir.<br>
            Isso foi brutal... Mas não é como se houvessem outras opções. Agora, você tem um líquido azulado grudando nos braços.<br>
            Você decide limpar o sangue dele antes que possa fazer algo com você.<br>
            Agora que está limpo, você procura algo que possa libertar esses humanos.<br>
            Você encontra um interruptor, puxa-o sem hesitar e todas as câmaras criogênicas se abrem. Os humanos começam a recuperar a consciência lentamente e se levantar.<br>
            - Estamos livres? - Um deles pergunta.<br>
            - Ainda não - você responde - Preciso encontrar a sala de navegação e mandá-los embora.<br>
            - Podemos pegar algumas armas e matá-los nós mesmos. Quando os alienígenas me trouxeram aqui, vi eles descendo com armas.<br>
            - Isso significa - ele continua explicando sua ideia - que há muitas armas no andar de cima que poderíamos usar. Eu sei que é perigoso, mas o que mais poderíamos fazer?<br>
            Ele tem um ponto, você vai considerar a ideia dele ou apenas levá-los para a saída: A sala onde matou o primeiro Balharry?</p>
        `,
        choices: [
            {
                choice: "Subir as escadas",
                destination:'humansUpstairs'
            },
            {
                choice: "Levá-los em segurança para a saída",
                destination:'exitRoom'
            },
        ]
    },
    exitRoom: {
        story: `
            <p class="Text">A segurança dos humanos é sua prioridade, então levá-los até a saída parece a melhor ideia.<br>
            O grupo pega os rifles restantes, e você os conduz até a saída.<br>
            Nenhum alienígena os encontrou no caminho e a sala de saída está vazia. Você abre a porta e vê as ruas da cidade completamente desertas,<br>
            alienígenas andando ao redor e espaçonaves do tamanho de carros voando por ali.<br>
            - Obrigado por nos mostrar o caminho - agradecem os humanos. O que eles farão do lado de fora da nave te preocupa, mas impedir os Balharry é sua prioridade.<br>
            Você deixa a sala e segue em direção às escadas, mas ao ouvir alienígenas vindo do andar de cima, decide ir para o andar de baixo.<br>
            Neste andar, as luzes estão mais fracas e é difícil enxergar. Não há portas, dutos de ventilação ou qualquer lugar para onde você possa ir.<br>
            Você caminha mais um pouco e vê uma única grande porta. Ao abri-la, há uma sala gigante cheia de computadores, geradores e um enorme reator no centro.<br>
            Parece uma sala de reator cheia de Balharry. Eles percebem sua presença, e você se esconde rapidamente enquanto eles disparam em sua direção, atingindo seu braço.<br>
            Felizmente, você ainda tem seu rifle, então dispara até restarem apenas dois e sua arma parar de funcionar.<br>
            Sem ideias, você corre pelos computadores e agarra o Balharry mais próximo. Você o soca, e ele dispara em sua perna enquanto ambos caem no chão.<br>
            Você pega a arma dele e dispara em sua cabeça, vira-se e vê o último Balharry se aproximando. Você atira nele. Agora que todos estão mortos, você explora a sala.<br>
            Procurando algo para se distrair do seu sangramento, você encontra o painel de controle central do reator.<br>
            Você não entende muito, mas o grande botão vermelho no centro é muito autoexplicativo.<br>
            Consultando o manual no painel e pelas imagens, você acha que esse botão implodirá a nave-mãe.<br>
            Seria uma decisão heroica, mas difícil. Você está sangrando, sentindo-se fraco e sem esperança, precisando tomar uma decisão antes que sua vida se esvaia.<br>
            Você se sacrificará pela humanidade ou tentará encontrar outra saída?</p>
        `,
        choices: [
            {
                choice: "Pressionar o botão",
                destination:'reactorEnd'
            },
            {
                choice: "Procurar por algo para parar seu sangramento",
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
            <p class="Text">Você pressiona o botão e segue todo o procedimento de implosão no computador principal, esperando que isso salve a Terra.<br>
            A contagem regressiva começa e, em seus últimos momentos, você pensa na sua família e em como deseja que eles vivam felizes e em um planeta seguro.<br>
            A nave implodiu. Você e todos os Balharry dentro dela morreram. As pequenas naves alienígenas se retiram do planeta e desaparecem no céu azul.<br>
            Não demora para que os Balharry restantes sejam mortos pelo exército, e a Terra finalmente está segura, graças a você.<br>
            <br>
            <br>
            <br>
            Obrigada por jogar.</p>
        `,
        choices: [
            {
                choice: "Jogar novamente",
                destination:'begin'
            },
        ]
    },
    stopBleed: {
        story: `
            <p class="Text">Você espera que ainda existam maneiras de salvar a humanidade e também de se manter vivo.<br>
            Querendo sobreviver, você procura nos corpos ao redor, mas não encontra nada. Você sente tontura e fraqueza,<br>
            então retorna ao botão antes de morrer em vão. Você olha dentro das gavetas na mesa do computador principal e encontra um frasco com um líquido vermelho.<br></p>
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
            <p class="Text">Sua única escolha é beber. Você o faz perto do botão, caso ele faça o contrário de curá-lo.<br>
            A sensação é estranha, mas não parece letal. Uma onda de choque percorre seu corpo e suas feridas se fecham magicamente.<br>
            Agora você se sente melhor do que nunca, então pega um rifle, atira nos geradores de energia e sobe as escadas.<br>
            Você não vê nada, pois a nave-mãe agora está completamente às escuras, e se pergunta se sua decisão foi realmente brilhante.<br>
            O silêncio é subitamente interrompido por disparos de laser e sirenes, mas você não é o alvo dos Balharry.<br>
            Você corre para o andar de cima, mas enquanto corre, esbarra em algo e ambos caem no chão.<br>
            É um alienígena, mas não um Balharry. Ele se levanta rapidamente, corre para o andar de cima e você o segue, já que não enxerga outro caminho.<br>
            Ele entra em uma sala, deixando a porta aberta. Você também vê uma ventilação no outro lado do corredor.<br>
            Para onde você irá?</p>
        `,
        choices: [
            {
                choice: "Seguir o alienígena",
                destination:'cloneRoom'
            },
            {
                choice: "Entrar na ventilação",
                destination:'warRoom'
            }
        ]
    },
    humansUpstairs: {
        story: `
            <p class="Text">Você decide que é uma boa ideia, então pega as armas restantes na sala e segue em direção às escadas.<br>
            Agora, seu grupo consiste em aproximadamente 50 pessoas, das quais 18 estão armadas com rifles, incluindo você.<br>
            Você chega às escadas e sobe, sem nenhum encontro hostil até agora. O segundo andar é muito semelhante ao primeiro,<br>
            mas tem menos portas, e estas são diferentes.<br>
            Como você não sabe qual porta leva à sala de armas, precisa decidir o caminho antes que os Balharry encontrem seu grupo.<br>
            Você pode abrir a porta mais próxima à direita ou continuar andando até encontrar a sala.<br>
            Qual caminho o grupo irá seguir?</p>
        `,
        choices: [
            {
                choice: "Porta à direita",
                destination:'techRoomGroup'
            },
            {
                choice: "Seguir pelo corredor",
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
            <p class="Text">Vocês continuam seguindo pelo corredor.<br>
            De repente, raios laser cortam o ar, e atrás de vocês um grupo de soldados dispara contra seu grupo.<br>
            Vários humanos são atingidos e mortos, e um dos raios atravessa seu estômago.<br>
            Você morreu tentando segurar suas entranhas e observando os Balharry obliterarem os humanos que restaram.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
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
            <p class="Text">Você continua pelo duto de ventilação. Todas as grades parecem pequenas demais para passar, até encontrar uma em que consiga entrar.<br>
            Ao se aproximar dela o ar frio vindo da grade te dá arrepios e ao olhar para baixo, vê algo que te assusta.<br>
            Há cerca de 10 alienígenas e várias câmaras criogênicas com humanos dentro delas.<br>
            Todos os alienígenas vestem jalecos e respiradores, estão desarmados, exceto dois no centro da sala.<br>
            Perto da porta há uma mesa com várias armas do tamanho de rifles e, convenientemente para você, a porta está a cerca de cinco metros da grade.<br>
            A sala é escura, mas não o suficiente para que eles não o vejam.<br>
            Se agir rápido, você pode cair do teto e correr para pegar um rifle antes que os dois Balharry atirem em você.<br>
            Você pensa silenciosamente no seu próximo passo.</p>
        `,
        choices: [
            {
                choice: "Desparafusar a grade e correr para os rifles",
                destination:'saveHumans'
            },
            {
                choice: "Continuar através da ventilação",
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
            <p class="Text">Você desparafusa a grade em silêncio e desce ao chão. Você corre o mais rápido que consegue em direção à porta,<br>
            sente um feixe laser passando perto da sua orelha e se joga atrás da mesa, pegando rapidamente um rifle.<br>
            Eles continuam atirando, então você espera que parem para atirar para mirar e atira, matando os dois.<br>
            Agora, as sirenes já estão ligadas e você está com os outros cientistas na sala.<br> 
            Você aponta sua arma para um deles e, sem dizer nada, ele entende e puxa uma alavanca.<br>
            Agora que está seguro, você procura algo que possa libertar os humanos.<br>
            Todas as câmaras criogênicas se abrem, os humanos recuperam a consciência e se levantam.<br>
            Os cientistas estão paralisados de medo, então agora você precisa decidir o que fará com eles...</p>
        `,
        choices: [
            {
                choice: "Matá-los",
                destination:'killScient'
            },
            {
                choice: "Deixá-los ir",
                destination:'letScient'
            },
        ]
    },
    killScient: {
        story: `
           <p class="Text">Antes que pudessem reagir, você mata todos os Balharry. O medo em seus rostos não o fez se sentir bem, mas você não se arrepende...<br>
            - Estamos livres? - Um deles pergunta.<br>
            - Ainda não - você responde - Preciso encontrar a sala de navegação e mandá-los embora.<br>
            - Podemos pegar algumas armas e matá-los nós mesmos. Quando os alienígenas me trouxeram aqui, vi eles descendo com armas.<br>
            - Isso significa - ele continua explicando sua ideia - que há muitas armas no andar de cima que poderíamos usar. Eu sei que é perigoso, mas o que mais poderíamos fazer?<br>
            Ele tem um ponto, você vai considerar a ideia dele ou apenas levá-los para a saída: A sala onde matou o primeiro Balharry?</p>
            `,
        choices: [
            {
                choice: "Subir as escadas",
                destination:'humansUpstairs'
            },
            {
                choice: "Levá-los em segurança para a saída",
                destination:'exitRoom'
            },
        ]
    },
    letScient: {
        story: `
            <p class="Text">Eles parecem inofensivos, então você os reúne no outro lado da sala, longe da mesa de rifles.<br>
            - Estamos livres? - Pergunta um dos humanos.<br>
            - Ainda não - você responde, enquanto aponta a arma para os reféns - Preciso encontrar a sala de navegação e mandá-los embora.<br>
            - Podemos pegar algumas armas e matá-los nós mesmos. Quando os alienígenas me trouxeram aqui, vi eles descendo com armas.<br>
            - Isso significa - ele continua explicando sua ideia - que há muitas armas no andar de cima que poderíamos usar. Eu sei que é perigoso, mas o que mais poderíamos fazer?<br>
            Ele tem um ponto, você vai considerar a ideia dele ou apenas levá-los para a saída: A sala onde matou o primeiro Balharry?</p>
        `,
        choices: [
            {
                choice: "Subir as escadas",
                destination:'humansUpstairs'
            },
            {
                choice: "Levá-los em segurança para a saída",
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
            <p class="Text">Você abre a porta lentamente e se depara com um corredor mal iluminado. Ele é longo e cheio de portas.<br>
            Todas parecem iguais, e você leva um tempo para pensar por onde deve começar.<br>
            Interrompendo seu raciocínio, você ouve dois alienígenas se aproximando no final do corredor.<br>
            Você rapidamente abre a primeira porta que consegue e se esconde silenciosamente dentro. A sala está completamente escura,<br>
            mas antes de olhar ao redor, você fica em silêncio esperando os alienígenas no corredor irem embora.<br>
            Não demora muito, pois eles passam por você sem dizer uma palavra um ao outro.<br>
            "Será que eles sequer conversam?", você pensa enquanto tenta explorar a sala em busca de algo útil.<br>
            Você sente algum tipo de interruptor, e se pergunta se deveria puxá-lo...</p>
        `,
        choices: [
            {
                choice: "Sim",
                destination:'labOn'
            },
            {
                choice: "Não",
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
            <p class="Text">Você puxa o interruptor e as luzes se acendem para revelar o que parece ser um laboratório de ciências, cheio de frascos com líquidos coloridos,<br>
            pedras estranhas, plantas e etcetera. Você olha ao redor e encontra duas camas no canto do laboratório com dois Balharry dormindo tranquilamente nelas.<br>
            Felizmente para você, eles parecem estar em um sono muito profundo, completamente alheios à sua presença,<br>
            mas você decide ser mais cuidadoso para não acordá-los. Perto deles, você encontra uma mesa com quatro frascos, cada um contendo um líquido diferente.<br>
            Não sabendo sobre química alienígena nem humana, qual deles você escolherá?</p>
        `,
        choices: [
            {
                choice: "Frasco Roxo",
                destination:'flaskGood'
            },
            {
                choice: "Frasco Verde",
                destination:'flaskGood'
            },
            {
                choice: "Frasco Laranja",
                destination:'flaskBad'
            },
            {
                choice: "Frasco Azul",
                destination:'flaskBad'
            }
        ]
    },
    flaskGood: {
        story: `
            <p class="Text">Você pega o frasco e dá outra olhada ao redor para ver se há algo mais que possa ser útil.<br>
            Em uma das prateleiras, você vê o que parece ser uma seringa preenchida com um líquido verde brilhante.<br>
            Pode ser muito útil, mas para alcançá-la você precisará subir na mesa e escalar as prateleiras, o que pode ser perigoso.<br></p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Você tentará alcançar a seringa?</p>
        `,
        choices: [
            {
                choice: "Não, é muito perigoso",
                destination:'leaveSyringe'
            },
            {
                choice: "Um frasco E uma seringa, por que não?",
                destination:'takeSyringeG'
            },
        ]
    },
    takeSyringeG: {
        story: `
            <p class="Text">Você se equilibra sobre a mesa e começa a escalar. Segurando-se firmemente nas prateleiras inferiores, você começa a subir.<br>
            De repente, uma das prateleiras quebra e tudo desmorona, inclusive você, que cai sobre a mesa e a quebra.<br></p>
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
            <p class="Text">Você se levanta e olha ansiosamente para os cientistas alienígenas, já que ninguém poderia continuar dormindo depois de um barulho desses.<br>
            De fato, eles estão olhando diretamente para você assustados. Eles parecem estar desarmados, e a única arma que você vê é a que está sobre a mesa.<br>
            Um deles rapidamente tenta alcançá-la, agora pense rápido e aja mais rápido ainda!</p>
        `,
        choices: [
            {
                choice: "Jogar o frasco neles",
                destination:'labDeathThrow'
            },
            {
                choice: "Beber o líquido do frasco",
                destination:'drinkFlask'
            }
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
           <p class="Text">Você mira e lança o frasco neles, esperando que derreta a pele deles ou algo do tipo, mas assim que o vidro se quebra e o líquido se espalha,<br>
            eles começam a crescer, a pele deles se torna dura como pedra, e eles pulam sobre você antes que possa reagir.<br>
            Você morreu enquanto eles arrancavam sua cabeça e mordiam violentamente seu estômago.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
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
            <p class="Text">Você começa a crescer mais e mais, sente sua pele dura como pedra e seus músculos ficando mais fortes.<br>
            Quando o cientista pega a arma e atira em você, o feixe de laser parece fazer cócegas e não te machuca. Então você aproveita a chance e ataca os alienígenas.<br>
            Você os mata sem esforço e com suas próprias mãos, mas assim que chega à porta do laboratório,<br>
            começa a sentir uma dor excruciante no estômago, vomita, deita no chão e sente seu corpo voltar ao normal.<br>
            Você está pronto para sair agora, então abre a porta e continua andando até encontrar três portas que chamam sua atenção:<br>
            A primeira fica à sua esquerda. Tem arranhões, e quem quer que os tenha feito deve ser muito forte e feroz...<br>
            A segunda parece normal, mas ao se aproximar o ar fica bem frio. Você tenta abri-la por curiosidade, mas está trancada.<br>
            A terceira porta tem uma luz piscando, mas isso é tudo que consegue ver por baixo da porta, que também está trancada.<br>
            Você também vê uma luz vermelha fraca vinda de dentro da ventilação, onde você pode tentar rastejar para chegar às salas trancadas.</p>
        `,
        choices: [
            {
                choice: "Primeira porta",
                destination:'zooRoom'
            },
            {
                choice: "Segunda porta",
                destination:'cryoRoom'
            },
            {
                choice: "Terceira porta",
                destination:'electricRoom'
            },
            {
                choice: "Seguir a luz vermelha",
                destination:'prisonCell'
            }
        ]
    },
    flaskBad: {
        story: `
            <p class="Text">Você pega o frasco e dá outra olhada ao redor para ver se há algo mais que possa ser útil.<br>
            Em uma das prateleiras, você vê o que parece ser uma seringa preenchida com um líquido verde brilhante.<br>
            Pode ser muito útil, mas para alcançá-la você precisará subir na mesa e escalar as prateleiras, o que pode ser perigoso.<br></p>
            <pre class="ascii-art">
                                            |
                      ,------------=--------|___________|
     -=============%%%|         |  |______|_|___________|
                      | | | | | | ||| | | | |___________|
                      '------------=--------|           |
                                            |
            </pre>
            <p class="Text">Você tentará alcançar a seringa?</p>
        `,
        choices: [
            {
                choice: "Não, é muito perigoso",
                destination:'leaveSyringe'
            },
            {
                choice: "Um frasco E uma seringa, por que não?",
                destination:'takeSyringeB'
            },
        ]
    },
    takeSyringeB: {
        story: `
            <p class="Text">Você se equilibra sobre a mesa e começa a escalar. Segurando-se firmemente nas prateleiras inferiores, você começa a subir.<br>
            De repente, uma das prateleiras quebra e tudo desmorona, inclusive você, que cai sobre a mesa e a quebra.<br></p>
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
            <p class="Text">Você se levanta e olha ansiosamente para os cientistas alienígenas, já que ninguém poderia continuar dormindo depois de um barulho desses.<br>
            De fato, eles estão olhando diretamente para você assustados. Eles parecem estar desarmados, e a única arma que você vê é a que está sobre a mesa.<br>
            Um deles rapidamente tenta alcançá-la, agora pense rápido e aja mais rápido ainda!</p>
        `,
        choices: [
            {
                choice: "Jogar o frasco neles",
                destination:'throwFlask'
            },
            {
                choice: "Beber o líquido do frasco",
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
            <p class="Text">Você rapidamente abre o frasco e bebe, esperando que isso lhe dê algum superpoder, mas você imediatamente se arrepende.<br>
            Sua boca, garganta e esôfago começam a derreter, e a última coisa que vê é o cientista pegando a arma e apontando-a para sua cabeça.<br>
            Você morreu com um tiro na cabeça enquanto agonizava de dor devido ao líquido hiper corrosivo.</p>
        `,
        choices: [
            {
                choice: "Tente novamente",
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
           <p class="Text">Você lança o frasco neles, e antes que o cientista possa alcançar a arma, a mão dele começa a derreter, e ambos caem no chão gritando de dor.<br>
            Os corpos deles se derretem até não sobrar nada, e você percebe que provavelmente deveria sair agora.<br>
            Você então abre a porta e continua andando até encontrar três portas que chamam sua atenção:<br>
            A primeira fica à sua esquerda. Tem arranhões, e quem quer que os tenha feito deve ser muito forte e feroz...<br>
            A segunda parece normal, mas ao se aproximar o ar fica bem frio. Você tenta abri-la por curiosidade, mas está trancada.<br>
            A terceira porta tem uma luz piscando, mas isso é tudo que consegue ver por baixo da porta, que também está trancada.<br>
            Você também vê uma luz vermelha fraca vinda de dentro da ventilação, onde você pode tentar rastejar para chegar às salas trancadas.</p>
        `,
        choices: [
            {
                choice: "Primeira porta",
                destination:'zooRoom'
            },
            {
                choice: "Segunda porta",
                destination:'cryoRoom'
            },
            {
                choice: "Terceira porta",
                destination:'electricRoom'
            },
            {
                choice: "Seguir a luz vermelha",
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
            <p class="Text">Você abre a primeira porta. A sala está muito escura e cheia de sangue azul de Balharry e corpos. Então, antes que possa reagir, algo salta sobre você.<br>
            É um animal não identificado que se assemelha a uma pantera. Sua primeira reação é pegar a seringa e injetar o líquido nela.<br>
            A criatura cai no chão, você se levanta e dá uma olhada ao redor.<br>
            Um laboratório cheio de animais da Terra, mas há algo diferente neles, como se tivessem sido experimentados.<br>
            A pantera começa a acordar e rapidamente se aproxima de você, ela o cheira, mas antes que você possa entrar em pânico, o animal se vira e sai pela porta.<br>
            Como ele não atacou você, mas atacou os alienígenas, pode ser uma boa ideia seguir o animal.<br>
            Ele corre pelo corredor e quebra uma porta: É a sala de eletricidade da nave.<br>
            Ele começa a destruir todos os fios e geradores, fazendo uma grande bagunça.<br>
            Você não consegue ver nada, a nave-mãe agora está em completa escuridão, e a pantera simplesmente deita no chão e dorme. É melhor deixá-la dormir em paz agora...<br>
            O silêncio é subitamente interrompido por disparos de laser e sirenes, mas você não é o alvo dos Balharry.<br>
            Você corre para o andar de cima, mas enquanto corre, esbarra em algo e ambos caem no chão.<br>
            É um alienígena, mas não um Balharry. Ele se levanta rapidamente, corre para o andar de cima e você o segue, já que não enxerga outro caminho.<br>
            Ele entra em uma sala, deixando a porta aberta. Você também vê uma porta com luzes acesas a poucos passos de distância, e uma ventilação próxima a ela.<br>
            Para onde você irá?</p>
            `,
        choices: [
            {
                choice: "Seguir o alienígena",
                destination:'cloneRoom'
            },
            {
                choice: "Seguir as luzes",
                destination:'techRoom'
            },
            {
                choice: "Entrar na ventilação",
                destination:'warRoom'
            }
        ]
    },
    leaveSyringe: {
        story: `
            <p class="Text">Você decide que pegar a seringa pode ser perigoso e decide levar apenas o frasco, então abre a porta e volta para o corredor.<br>
            Todas as portas parecem iguais, você anda mais um pouco e encontra uma porta de cor diferente das outras, então decide abri-la.<br>
            Parece uma sala de segurança, cheia de telas e câmeras. Você pode ver o corredor onde estava, a sala escura onde provavelmente entrou e muitas outras salas.<br>
            Você procura uma que se assemelhe a uma sala de navegação, mas tudo parece confuso, embora três salas chamem sua atenção.<br>
            A primeira é uma sala cheia de câmaras criogênicas com humanos dentro. Você quer muito salvá-los antes de sair da nave.<br>
            A segunda é uma sala cheia de equipamentos: trajes de proteção, armas maiores e todos os tipos de dispositivos tecnológicos que poderiam realmente ajudar você agora.<br>
            A terceira é uma sala com uma luz piscando, botões, fios e geradores de energia, provavelmente uma sala de eletricidade. Ao contrário das outras duas, não há alienígenas ali.<br>
            Há também uma entrada para o sistema de ventilação logo atrás de você, que pode ser útil para chegar a algumas dessas salas, e você vê uma luz vermelha fraca vindo de lá.<br>
            Então, para onde você vai?</p>
        `,
        choices: [
            {
                choice: "Sala de criogenia",
                destination:'cryoRoom'
            },
            {
                choice: "Sala de tecnologias",
                destination:'techRoom'
            },
            {
                choice: "Sala de eletricidade",
                destination:'electricRoom'
            },
            {
                choice: "Seguir a luz vermelha",
                destination:'prisonCell'
            }
        ]
    },
    leaveSyringeGun: {
        story: `
            <p class="Text">Você decide que pegar a seringa pode ser perigoso e decide levar apenas o frasco, então abre a porta e volta para o corredor.<br>
            Todas as portas parecem iguais, você anda mais um pouco e encontra uma porta de cor diferente das outras, então decide abri-la.<br>
            Parece uma sala de segurança, cheia de telas e câmeras. Você pode ver o corredor onde estava, a sala escura onde provavelmente entrou e muitas outras salas.<br>
            Você procura uma que se assemelhe a uma sala de navegação, mas tudo parece confuso, embora três salas chamem sua atenção.<br>
            A primeira é uma sala cheia de câmaras criogênicas com humanos dentro. Você quer muito salvá-los antes de sair da nave.<br>
            A segunda é uma sala cheia de equipamentos: trajes de proteção, armas maiores e todos os tipos de dispositivos tecnológicos que poderiam realmente ajudar você agora.<br>
            A terceira é uma sala com uma luz piscando, botões, fios e geradores de energia, provavelmente uma sala de eletricidade. Ao contrário das outras duas, não há alienígenas ali.<br>
            Há também uma entrada para o sistema de ventilação logo atrás de você, que pode ser útil para chegar a algumas dessas salas, e você vê uma luz vermelha fraca vindo de lá.<br>
            Então, para onde você vai?</p>
        `,
        choices: [
            {
                choice: "Sala de criogenia",
                destination:'cryoRoom'
            },
            {
                choice: "Sala de tecnologias",
                destination:'techRoom'
            },
            {
                choice: "Sala de eletricidade",
                destination:'electricRoom'
            },
            {
                choice: "Seguir a luz vermelha",
                destination:'prisonCellGun'
            }
        ]
    },
    labOff: {
        story: `
            <p class="Text">Você decide que o que quer que esteja dentro daquela sala deve ser deixado lá. Depois de esperar um pouco, você abre a porta e retorna ao corredor.<br>
            Todas as portas parecem iguais, você anda mais um pouco e encontra uma porta de cor diferente das outras, então decide abri-la.<br>
            Parece uma sala de segurança, cheia de telas e câmeras. Você pode ver o corredor onde estava, a sala escura onde provavelmente entrou e muitas outras salas.<br>
            Você procura uma que se assemelhe a uma sala de navegação, mas tudo parece confuso, embora três salas chamem sua atenção.<br>
            A primeira é uma sala cheia de câmaras criogênicas com humanos dentro. Você quer muito salvá-los antes de sair da nave.<br>
            A segunda é uma sala cheia de equipamentos: trajes de proteção, armas maiores e todos os tipos de dispositivos tecnológicos que poderiam realmente ajudar você agora.<br>
            A terceira é uma sala com uma luz piscando, botões, fios e geradores de energia, provavelmente uma sala de eletricidade. Ao contrário das outras duas, não há alienígenas ali.<br>
            Há também uma entrada para o sistema de ventilação logo atrás de você, que pode ser útil para chegar a algumas dessas salas, e você vê uma luz vermelha fraca vindo de lá.<br>
            Então, para onde você vai?</p>
        `,
        choices: [
            {
                choice: "Sala de criogenia",
                destination:'cryoRoom'
            },
            {
                choice: "Sala de tecnologias",
                destination:'techRoom'
            },
            {
                choice: "Sala de eletricidade",
                destination:'electricRoom'
            },
            {
                choice: "Seguir a luz vermelha",
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

function test(){
    return 3
}
