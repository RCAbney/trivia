const myQuestions = [
    {
      question: "What is Billy's maid's name?",
      answers: {
        a: "Jaunita",
        b: "Agnes",
        c: "Consuela"
      },
      correctAnswer: "a"
    },
    {
      question: "What does Scotty tell Billy he had for breakfast?",
      answers: {
        a: "Eggs",
        b: "Beans",
        c: "Burritos"
      },
      correctAnswer: "b"
    },
    {
      question: "Who would Billy rather do?",
      answers: {
        a: "Jack Nicholson (now)",
        b: "Jack Nicholson (1974)",
        c: "Meg Ryan"
      },
      correctAnswer: "c"
    },
    {
      question: "Who wins the pickle race?",
      answers: {
        a: "Frank",
        b: "Billy",
        c: "Jack"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of the song Billy dances to after he comes up with the idea to go back to school?",
      answers: {
        a: "Karma Chameleon",
        b: "Electric Avenue",
        c: "I'll Tumble For You"
      },
      correctAnswer: "c"
    },
    {
      question: "What song plays during the dodgeball game at recess?",
      answers: {
        a: "Beat on the Brat",
        b: "Black Betty",
        c: "Blitzkrieg Bop"
      },
      correctAnswer: "a"
    },
    {
      question: "What is Karl Alphonse's job title at Madison Hotel?",
      answers: {
        a: "Marketing Director",
        b: "Senior Vice President",
        c: "Operations Manager"
      },
      correctAnswer: "c"
    },
    {
        question: "How does Jaunita offer to cheer Billy up?",
        answers: {
            a: "She asks him if he wants a snack pack",
            b: "She offers to take her shirt off for him",
            c: "She lets him skip school for the day"
        },
        correctAnswer: "b"
    },
    {
        question: "What sport does Billy play in fifth grade",
        answers: {
            a: "basketball",
            b: "dodgeball",
            c: "track and field"
        },
        correctAnswer: "a"
    },
    {
        question: "What color is Miss Lippy's car?",
        answers: {
            a: "red",
            b: "yellow",
            c: "green"
        },
        correctAnswer: "c"
    },
    {
        question: "What does Miss Vaughn catch Billy doing while he is daydreaming?",
        answers: {
            a: "Drawing a picture of her that says 'do me Billy'",
            b: "Pretending he's singing a song with her",
            c: "He's making out with a picture of her"
        },
        correctAnswer: "a"
    },
    {
        question: "Which word did Billy not write in cursive?",
        answers: {
            a: "Dugout",
            b: "Bunt",
            c: "Buzz"
        },
        correctAnswer: "c"
    },
    {
        question: "Who does Eric coerce into stopping Billy?",
        answers: {
            a: "Frank",
            b: "The Bus Driver",
            c: "Principal Anderson"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is NOT a flavor on Billy's Slurpee machine?",
        answers: {
            a: "Raspberry",
            b: "Coca-Cola",
            c: "Orange"
        },
        correctAnswer: "a"
    },
    {
        question: "What page does Miss Vaughn tell her class to open their books to?",
        answers: {
            a: "45",
            b: "92",
            c: "69"
        },
        correctAnswer: "c"
    },
    
    {
        question: "What band's t-shirt is Billy wearing when he arrives at high school for the first time?",
        answers: {
            a: "Journey",
            b: "REO Speedwagon",
            c: "Styx"
        },
        correctAnswer: "b"
    },
    {
      question: 'Where does Eric get shot?',
      answers: {
        a: 'In the knee',
        b: 'In the butt',
        c: 'In the shoulder'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What instrument does Billy play during the music portion of the academic decathlon?',
      answers: {
        a: 'Trombone',
        b: 'French Horn',
        c: 'Clarinet'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What does Billy say the first time Ms Vaughn enters the classroom?',
      answers: {
        a: 'Jackpot',
        b: 'Holy Shit',
        c: 'GOO!'
      },
      correctAnswer: 'a'
    },
    
    {
        question: "If peeing your pants is cool, consider me _________",
        answers: {
            a: "Robert Redford",
            b: "Miles Davis",
            c: "Jack Nicholson"
        },
        correctAnswer: "b"
    },
    {
        question: "If Billy stays home from school, what must he help Jaunita do?",
        answers: {
            a: "Shave her armpits",
            b: "Wax her upper lip",
            c: "Clip her toenails"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the classmate that Billy phones to apologize to?",
        answers: {
            a: "Bob Simonds",
            b: "Perry Blake",
            c: "Danny McGrath"
        },
        correctAnswer: "c"
    },
    {
        question: "After Billy is bullied in the high school cafe, what do the other nerds say he has a case of?",
        answers: {
            a: "Loser denial",
            b: "Lack of popularity",
            c: "Being a total loser"
        },
        correctAnswer: "a"
    },
    {
        question: "How many words of A Tale of Two Cities can Billy understand?",
        answers: {
            a: "Four",
            b: "Eleven",
            c: "Nine"
        },
        correctAnswer: "c"
    },
    {
        question: "What did the Revolting Blob do in June, 1983",
        answers: {
            a: "Sat on a guy's head and killed him",
            b: "Broke a guy's arm",
            c: "Knocked a guy unconscious with a steel chair"
        },
        correctAnswer: "a"
    },
    {
        question: "According to the lunch lady, how do the kid's like their sloppy joe's?",
        answers: {
            a: "Extra meaty",
            b: "Extra sloppy",
            c: "Nice and messy"
        },
        correctAnswer: "b"
    },
    {
        question: "How much money did Principal Anderson claim Billy bribed him with?",
        answers: {
            a: "$10,000",
            b: "$5,000",
            c: "$25,000"
        },
        correctAnswer: "b"
    },
    {
        question: "What actor played Billy's high school science teacher?",
        answers: {
            a: "Kevin Nealon",
            b: "David Spade",
            c: "Robert Smigel"
        },
        correctAnswer: "c"
    },
    {
        question: "What story are the 3rd graders reading from their reading is fun book?",
        answers: {
            a: "The Puppy Who Lost His Way",
            b: "Superfudge",
            c: "My Sister Fanny"
        },
        correctAnswer: "c"
    },
    
    {
      question: "What is the name of Billy's favorite nudey magazine?",
      answers: {
        a: "Women Over 80",
        b: "She-male Fiesta",
        c: "Drunk Chicks"
      },
      correctAnswer: "c"
    },
    {
      question: "What did Jaunita pack in Billy's lunch instead of a snack pack?",
      answers: {
        a: "apple",
        b: "banana",
        c: "orange"
      },
      correctAnswer: "b"
    },
    {
      question: "What is Billy's dad's name?",
      answers: {
        a: "William",
        b: "Edward",
        c: "Brian"
      },
      correctAnswer: "c"
    },
    {
      question: "What kind of crackers did Karl have in the car on the way to the Madison's house?",
      answers: {
        a: "Triscuit",
        b: "Saltines",
        c: "Ritz"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following did not write the film?",
      answers: {
        a: "Adam Sandler",
        b: "Robert Smigel",
        c: "Tim Herlihy"
      },
      correctAnswer: "b"
    },
    {
      question: "How many kids did Billy hit while playing dodgeball?",
      answers: {
        a: "11",
        b: "12",
        c: "13"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of Billy's elementary school?",
      answers: {
        a: "Knibb Elementary",
        b: "Ben Franklin Elementary",
        c: "Polly Fector Elementary"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Eric Gordon's job title at Madison Hotels?",
      answers: {
        a: "Chief Operating Officer",
        b: "Executive Vice President",
        c: "Chairman of the Board"
      },
      correctAnswer: "b"
    },
    {
      question: "How many employees work for Madison Hotel?",
      answers: {
        a: "61,000",
        b: "5,000",
        c: "25,000"
      },
      correctAnswer: "a"
    },
    
    {
      question: "True or False: Billy has one week to finish each grade.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: 'What university was Eric a 2nd team All-American in track and field',
      answers: {
        a: 'Princeton',
        b: 'Harvard',
        c: 'Yale'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What year was the Norman invasion of England',
      answers: {
        a: '1066',
        b: '1776',
        c: '1215'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What is the score going into the final event of the academic decathlon?',
      answers: {
        a: 'Eric leads 5-4',
        b: 'Billy leads 5-4',
        c: 'Its a tie'
      },
      correctAnswer: 'b'
    },
    {
      question: 'Who does Frank (Norm MacDonald) make out with at the end?',
      answers: {
        a: 'The Lunch Lady',
        b: 'The Penguin',
        c: 'No one, he is shot down by the snotty girl from Billys science class'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What SNL writer played the high school principal?',
      answers: {
        a: 'James Downey',
        b: 'Lorne Michaels',
        c: 'Robert Smigel'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What happens when Eric cant answer his final academic decathlon question?',
      answers: {
        a: 'He pees his pants',
        b: 'He pulls out a gun',
        c: 'He yells at everyone to shut up'
      },
      correctAnswer: 'b'
    },
    
    {
      question: "What is the name of the puppy in 'The Puppy who lost his Way'?",
      answers: {
        a: "Skippy",
        b: "Happy",
        c: "Friendly"
      },
      correctAnswer: "b"
    },
    {
      question: "What does Veronica give Billy for his 3rd grade graduation gift?",
      answers: {
        a: "A kiss",
        b: "Snack Packs",
        c: "A Tale of Two Cities by Charles Dickens"
      },
      correctAnswer: "b"
    },
    {
      question: "What date is Billy's deadline to all 12 grades?",
      answers: {
        a: "June 15",
        b: "May 15",
        c: "July 15"
      },
      correctAnswer: "a"
    },
    {
      question: "What is Billy's mother's name?",
      answers: {
        a: "Emily",
        b: "Dolores",
        c: "Martha"
      },
      correctAnswer: "a"
    },
    {
      question: "Besides candy, what can be found in the pinatas at Billy's graduation parties?",
      answers: {
        a: "Bottles of beer",
        b: "Stuffed animals",
        c: "Rolex watches"
      },
      correctAnswer: "c"
    },
    {
      question: "What did Billy exclaim after he won his 2nd grade spelling bee?",
      answers: {
        a: "PLENTY MORE WHERE THAT CAME FROM!",
        b: "I AM THE SMARTEST MAN ALIVE!",
        c: "THANK YOU VERY MUCH MISS LIPPY!"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of Billy's third grade friend?",
      answers: {
        a: "Ernie",
        b: "Michael",
        c: "Steven"
      },
      correctAnswer: "a"
    },{
      question: 'Which goes on first, Shampoo or Conditioner?',
      answers: {
        a: 'Shampoo',
        b: 'Conditioner',
      },
      correctAnswer: 'a'
    },
    {
      question: 'According to Billys Father, why did Billy graduate the first time he went to school',
      answers: {
        a: 'Billy studied harder than anyone',
        b: 'Billy cheated on all of his test',
        c: 'Billys dad paid his teachers to give him good grades'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What word does Billy spell correctly to pass 2nd grade?',
      answers: {
        a: 'Rock',
        b: 'Bunt',
        c: 'Couch'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What was Karls original job when he first started at Madison Hotels?',
      answers: {
        a: 'Night Bell Boy',
        b: 'Front Desk Clerk',
        c: 'Room Service Waiter'
      },
      correctAnswer: 'a'
    },
    {
      question: 'When Billy starts 3rd grade, which subject does NOT make him nervous?',
      answers: {
        a: 'Social Studies',
        b: 'Division',
        c: 'Science'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What is Ms. Lippy doing while Billy cleans chalkboard erasers?',
      answers: {
        a: 'Wiping paste on her face',
        b: 'Dancing some weirdass yoga dance',
        c: 'Drinking alcohol'
      },
      correctAnswer: 'a'
    },
    {
      question: 'How did Madison Hotels originally start?',
      answers: {
        a: 'Mr. Madison bought it from the Hilton Family',
        b: 'It was a 15 unit motel in Patchogue Long Island',
        c: 'Mr. Madison did a hostile takeover of Howard Johnsons'
      },
      correctAnswer: 'b'
    },
    {
      question: 'When Billy gets caught saying Jeez whats up her butt, what does he tell Ms Vaughn he actually said? ',
      answers: {
        a: 'Who likes to eat coconuts?',
        b: 'I fell down and landed in a rut!',
        c: 'Reading is good! Can we start the story now?'
      },
      correctAnswer: 'c'
    },
    {
      question: 'Who dares Billy to touch Ms Vaughns boobs?',
      answers: {
        a: 'Ernie',
        b: 'Dan',
        c: 'O Doyle'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What issue of Wrestling World was the Revolting Blob featured in?',
      answers: {
        a: 'August 1983',
        b: 'February 1984',
        c: 'July 1985'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What number was Billy on Danny McGraths hit list?',
      answers: {
        a: '4',
        b: '5',
        c: '6'
      },
      correctAnswer: 'a'
    },
    {
      question: 'Who is the first person at school that Billy talks to?',
      answers: {
        a: 'Ms. Lippy',
        b: 'Scottys mom the Mucus Queen',
        c: 'Ms. Vaughn'
      },
      correctAnswer: 'c'
    },
    {
      question: 'During the academic decathlon, what did Billy write down as his math answer?',
      answers: {
        a: 'Here is X <-- its right here',
        b: 'Eric drinks his own pee',
        c: 'I like pi'
      },
      correctAnswer: 'b'
    },
    {
      question: 'What does Mr. Madison beg Billy not to do during his business dinner?',
      answers: {
        a: 'Make fun of Eric',
        b: 'Bite the man sitting next to him',
        c: 'Speak jibberish'
      },
      correctAnswer: 'c'
    },
    {
      question: 'What happens to Eric during the Home Ec portion of the academic decathlon?',
      answers: {
        a: 'He gets a pie in the face',
        b: 'He sets himself on fire',
        c: 'He slips on a banana peel'
      },
      correctAnswer: 'b'
    },
    
    {
      question: "What is Old Man Clemen's wife's name?",
      answers: {
        a: "Barbara",
        b: "Emily",
        c: "Veronica"
      },
      correctAnswer: "a"
    }
  ];