const myQuestions = [
    {
      question: "What is the name of the song the bookends the movie?",
      answers: {
        a: "Freebird",
        b: "Endless Love",
        c: "Tuesdays Gone"
      },
      correctAnswer: "c"
    },
    {
        question: 'Who directed Happy Gilmore?',
        answers: {
            a: 'Adam Sandler',
            b: 'Dennis Dugan',
            c: 'Judd Apatow'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Why was Happys grandmother losing her house?',
        answers: {
            a: 'She hadnt paid her taxes in over a decade',
            b: 'She sold it to Shooter McGavin',
            c: 'She couldnt afford homeowners insurance'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Who did Happys grandmother dress up as to cheer him up?',
        answers: {
            a: 'Gene Simmons',
            b: 'Paul Stanley',
            c: 'Ace Frehley'
        },
        correctAnswer: 'a'
    },
    {
        question: 'What is the name of the moving company that was packing up Happys grandmothers house?',
        answers: {
            a: 'Two Guys, One Truck',
            b: 'Jesses Moving Company',
            c: 'Madison Movers'
        },
        correctAnswer: 'b'
    },
    {
        question: 'At the start of the film, what is Happys girlfriends occupation',
        answers: {
            a: 'Nurse',
            b: 'Librarian',
            c: 'Kindergarten Teacher'
        },
        correctAnswer: 'c'
    },
    {
        question: 'How much does Mrs. Gilmore owe in back taxes to the IRS',
        answers: {
            a: '150,000',
            b: '270,000',
            c: '375,000'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Which fingers on chubbs prosthetic hand are broken off?',
        answers: {
            a: 'Thumb, Middle, Pinky',
            b: 'Index, Ring, Pinky',
            c: 'Thumb, Index, Ring'
        },
        correctAnswer: 'a'
    },
    {
        question: 'What is the name of the first tournament Happy plays in?',
        answers: {
            a: 'The Visa Everglades Open',
            b: 'The Waterbury Open',
            c: 'The Pepsi Pro-am Invitational'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What city is Happys first professional tourmanet held in?',
        answers: {
            a: 'Seattle',
            b: 'San Francisco',
            c: 'Portland'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What famous golfer did Sports Illustrated compare Chubbs Peterson to?',
        answers: {
            a: 'Lee Trevino',
            b: 'Jack Nicklaus',
            c: 'Arnold Palmer'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What video game is calling Happys name from the game room in the back?',
        answers: {
            a: 'Space Invaders',
            b: 'Asteroids',
            c: 'Pac-Man'
        },
        correctAnswer: 'b'
    },
    {
        question: 'How many lines of dialogue does golfer Lee Trevino have in the film?',
        answers: {
            a: '0',
            b: '1',
            c: '2'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Why does Virginia initially turn down Happy when he asks her on a date?',
        answers: {
            a: 'She only dates nice men',
            b: 'She already has a boyfriend',
            c: 'She does not date golfers   '
        },
        correctAnswer: 'c'
    },
    {
        question: 'What club does Shooters first caddy incorrectly recommend to him, prompting his firing?',
        answers: {
            a: 'Wedge',
            b: 'Five Iron',
            c: 'Nine Iron'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What score does Happy get on his first professional hole?',
        answers: {
            a: '2',
            b: '3',
            c: '4'
        },
        correctAnswer: 'a'
    },
    {
        question: 'What does Happy tell Virginia happened to his girlfriend?',
        answers: {
            a: 'She fell off a cliff and died on impact',
            b: 'She got hit by a car - shes dead',
            c: 'She was in a plane crash'
        },
        correctAnswer: 'a'
    },
    {
        question: 'What hockey teams arena does Happy ice skate with Virginia?',
        answers: {
            a: 'Los Angeles Kings',
            b: 'Minnesota Moose',
            c: 'Boston Bruins'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Before Happy and Bob Barker start fighting, what place are they at in the Pepsi Pro-Am Tournament',
        answers: {
            a: 'First',
            b: 'Nineteenth',
            c: 'Dead Last'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What is the name of the Putt Putt place that Chubbs takes Happy to?',
        answers: {
            a: 'Waterbury Mini Golf',
            b: 'Happy Land Mini Golf',
            c: 'Just Puttin Around'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What does Donald the Heckler continually call Happy?',
        answers: {
            a: 'Jackass',
            b: 'Jerk Face',
            c: 'Stupid Idiot'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which is not seen during Happys first visit to his Happy place?',
        answers: {
            a: 'Grandma playing a slot machine',
            b: 'Virginia in Lingerie',
            c: 'Chubbs playing piano'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What brand of putter is Happy using during the Tour Championship?',
        answers: {
            a: 'Odyssey',
            b: 'Taylor Made',
            c: 'Nike'
        },
        correctAnswer: 'a'
    },
    {
        question: 'What type of car is Happy hit by?',
        answers: {
            a: 'Buick',
            b: 'Volkswagen',
            c: 'Mini Cooper'
        },
        correctAnswer: 'b'
    },
    {
        question: 'How many Subway sandwhiches does Happy eat every day to keep him strong?',
        answers: {
            a: 'three',
            b: 'four',
            c: 'five'
        },
        correctAnswer: 'a'
    },
    {
        question: 'On the final hole of the tour championship, where does Shooters ball land?',
        answers: {
            a: 'on the knocked over TV tower',
            b: 'on Mr. Larsons foot',
            c: 'in the water'
        },
        correctAnswer: 'b'
    },
    {
        question: 'How much did Shooter pay at auction for Mrs Gilmores house?',
        answers: {
            a: '250,000',
            b: '375,000',
            c: '500,000'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What SNL actor plays Gary Potter, the pro golfer that is first paired with Happy?',
        answers: {
            a: 'Kevin Nealon',
            b: 'Dennis Miller',
            c: 'Phil Hartman'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Who is the play by play announcer at all of Happys pro tournaments',
        answers: {
            a: 'Jim Nantz',
            b: 'Gus Johnson',
            c: 'Verne Lundquist'
        },
        correctAnswer: 'c'
    },
    {
        question: 'How much was Hal L. charging per quilt?',
        answers: {
            a: '200',
            b: '350',
            c: '500'
        },
        correctAnswer: 'a'
    },
    {
        question: 'How much money did Shooter McGavin earn for winning the ATT Invitational in Portland?',
        answers: {
            a: '216,000',
            b: '520,000',
            c: '742,000'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Does Shooter McGavin eat pieces of shit for breakfast?',
        answers: {
            a: 'yes',
            b: 'NO!?!?'
        },
        correctAnswer: 'b'
    },
    
    {
      question: "Where did Happy's mom move to?",
      answers: {
        a: "Egypt",
        b: "Mexico",
        c: "South Africa"
      },
      correctAnswer: "c"
    }
  ];