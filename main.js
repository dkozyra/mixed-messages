let randGen = (x) => {
    return Math.floor(Math.random() * x);
}

let factsAboutYouArray = [];

let personality = {
    appearance: ['fat', 'tall', 'ugly', 'bauty', 'skinny', 'short','small', 'huge', 'funny', 'smart', 'grumpy', 'positive', 'egoistic'],
    home: ['tree', 'bin', 'hotel', 'basement', 'superstore', 'apartament', 'car', 'wood', 'forest', 'roadside', 'mountains', 'ocean', 'lake'],
    activity: ['football', 'tennis', 'biking', 'mud swimming', 'eating', 'karate', 'barking', 'cleaning', 'watching anime', 'hoovering', 'flying']
}

for(let prop in personality){
    switch(prop){
        case 'appearance':
            factsAboutYouArray.push(`You are really ${personality[prop][randGen(personality[prop].length)]} and ${personality[prop][randGen(personality[prop].length)]} person. `);
            break;
        case 'home':
            factsAboutYouArray.push(`The place you usually live is: ${personality[prop][randGen(personality[prop].length)]} or ${personality[prop][randGen(personality[prop].length)]}. It is really nice place to live. `);
            break;
        case 'activity':
            factsAboutYouArray.push(`Your favorite activity is: ${personality[prop][randGen(personality[prop].length)]}, alternatively you also like ${personality[prop][randGen(personality[prop].length)]}. `);
            break;
    }
}

let message = factsAboutYouArray.toString().replace(/,/g, '');

console.log(message);