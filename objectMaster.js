const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
    // create a list of pokemon that have names thats start with the letter B

    const filteredName = pokemon.filter(a => a.name[0] === "B");
    

    // return an array of just the ids
    const nameWithId = pokemon.map(a => a.id);
    // console.log(nameWithId);

    // an array of pokemon objects where the id is evenly divisible by 3

    const firstProblem = pokemon.filter(a => a.id % 3 === 0);
    // console.log(firstProblem);

    // ----- an array of pokemon objects that are fire type

    const secondProblem = pokemon.filter(a => a.types.includes("fire"));
    // console.log(secondProblem);


    // an array of pokemon objects that have more than one type

    const thirdProblem = pokemon.filter(a => a.types.length > 1);
    // console.log(thirdProblem);

    // an array with just names of the pokemon

    const fourthProblem = pokemon.map(a => a.name);
    // console.log(fourthProblem);

    //an array with just the names of pokemon with an id greater than 99

    const fifthProblem = pokemon.filter(a => a.id > 99).map(a => a.name);
    // console.log(fifthProblem);

    const sixthProblem = pokemon.filter(a => a.types.includes("poison")).map(a => a.name);
    // console.log(sixthProblem);

    // 
    const seventhProblem = pokemon.filter(a=>a.types.includes("flying")).map(a=>a.types[0]);
    // console.log(seventhProblem);

    const eigthProblem = pokemon.filter(a=>a.types.includes("normal"));
    console.log(eigthProblem.length);