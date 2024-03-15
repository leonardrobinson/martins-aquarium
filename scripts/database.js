const database = {
    fish: [
    {
        "image": "images/rainbow trout.jpg",
        "name": "Rain",
        "species": "Rainbow Trout",
        "length": "20 inches",
        "location": "Reel Foot Lake",
        "food": "shrimp",
    },
    {   
        "image": "images/salmon.jpg",
        "name": "Solomon",
        "species": "Atlantic Salmon",
        "length": "30 inches",
        "location": "Atlantic Ocean",
        "food": "plankton",
    },
    {   
        "image": "images/yellowtail snapper 1.jpg",
        "name": "Snyder",
        "species": "Yellowtail Snapper",
        "length": "18 inches",
        "location": "Bahamas",
        "food": "squid",
    },
    {   
        "image": "images/bluegill.jpg",
        "name": "Willis",
        "species": "Bluegill",
        "length": "10 inches",
        "location": "Lake Michigan",
        "food": "Insects",
    },
    {   
        "image": "images/tuna.jpg",
        "name": "Kiss",
        "species": "Tuna",
        "length": "15 feet",
        "location": "East Sea",
        "food": "Small fish",
    },  
    {   
        "image": "images/walleyes.jpg",
        "name": "Eva",
        "species": "Walleye",
        "length": "Typically 21 inches",
        "location": "Percy Priest Lake",
        "food": "crayfish",
    },
    {   
        "image": "images/Grouper (2).jpg",
        "name": "Mildred",
        "species": "Grouper",
        "length": "7 feet",
        "location": "Gulf of Mexico",
        food: "crustaceans",
    },  
    {   
        "image": "images/red snapper.jpg",
        "name": "Reggie",
        "species": "Red Snapper",
        "length": "35 inches",
        "location": "coral reef",
        "food": "mollusks",
        
    },
    {   
        "image": "images/catfish 1.jpg",
        "name": "Heathcliff",
        "species": "Catfish",
        "length": "24 inches",
        "location": "Mississippi River",
        "food": "small fish",
    },
    {
        "image": "images/clownfish.jpg",
        "name": "Bozo",
        "species": "Clownfish",
        "length": "4 inches",
        "location": "Pacific ocean",
        "food": "small fish",
    }

    // Add more fish objects here...
 ]
}; 


export const getFish = () => {
return database.fish.map(fish => ({...fish}))
}
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }
    }

    return holyFish;
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish);
        }
    }

    return soldiers;
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of database.fish) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0) {
            regularFish.push(fish);
        }
    }

    return regularFish;
}
// Example usage:
//console.log(fishSpecies[0]); // Print information about the first fish
//console.log(fishSpecies.length); // Print the total number of fish species in the array
