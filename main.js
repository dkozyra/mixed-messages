let randGen = (x) => {
    return Math.floor(Math.random() * x);
}

let factsAboutYou = [];

let personality = {
    appearance: ['fat', 'toll', 'ugly', 'bauty', 'skinny', 'short'],
    home: ['tree', 'bin', 'hotel', 'basement', 'superstore', 'apartament'],
    activity: ['football', 'tennis', 'biking', 'mud swimming', 'eating', 'karate']
}

for(let prop in personality){
    switch(prop){
        case 'appearance':
            factsAboutYou.push(`You are really ${prop[randGen(prop.length)]} and ${prop[randGen(prop.length)]} person`);
            break;
        case 'home':
            factsAboutYou.push(`The place you usually live is: ${prop[randGen(prop.length)]} or ${prop[randGen(prop.length)]}. It is really nice place to live`);
            break;
        case 'activity':
            factsAboutYou.push(`Your favorite activity is: ${prop[randGen(prop.length)]}, alternatively you also like ${prop[randGen(prop.length)]}`);
            break;
    }
}

console.log(factsAboutYou);