const database = {
    fish: [
        "id": 1,
        image: "images/rainbow trout.jpg ",
        name: "Rain",
        species: "Rainbow Trout",
        length: "20 inches",
        location: "Reel Foot Lake"
        food: "crustaceans",
    },
    {   "id": 2
        image: "images/salmon.jpg",
        name: "Solomon",
        species: "Atlantic Salmon",
        length: "30 inches",
        location: "Atlantic Ocean"
        food: "plankton",
    },
    {   "id": 3
        image: "images/yellowtail snapper 1.jpg",
        name: "Snyder",
        species: "Yellowtail Snapper",
        length: "18 inches",
        location: "Bahamas"
        food: "squid",
    },
    {   
        "id": 4
        image: "images/bluegill.jpg",
        name: "Willis",
        species: "Bluegill",
        length: "10 inches",
        location: "Lake Michigan"
        food: "Insects",
    },
    {   
        "id": 5
        image: "images/tuna.jpg",
        name: "Kiss",
        species: "Tuna",
        length: "15 feet",
        location: "East Sea"
        food: "Small fish",
    },  
    {   
        "id": 6
        image: "images/walleyes.jpg",
        name: "Eva",
        species: "Walleye"
        length: "Typically 21 inches"
        location: "Percy Priest Lake"
        food: "crayfish"
    },
    {   
        "id": 7
        image: "images/Grouper (2).jpg",
        name: "Mildred"
        species: "Grouper"
        length: "7 feet"
        location: "Gulf of Mexico"
        food: "crustaceans"
    },  
    {   
        "id": 8
        image: "images/red snapper.jpg",
        name: "Reggie"
        species: "Red Snapper"
        length: "35 inches"
        location: "coral reef"
        food: "mollusks"
        
    },
    {   
        "id": 9
        image: "images/catfish 1.jpg",
        name: "Heathcliff"
        species: "Catfish"
        length: "24 inches"
        location: "Mississippi River"
        food: "small fish"
    },
    {
        "id": 10
        image: "images/clownfish.jpg"
        name: "Bozo"
        species: "Clownfish"
        length: "4 inches"
        location: "Pacific ocean"
        food: "small fish"
        

    // Add more fish objects here...
];

export const getFish = () => {
return database.fish.map(fish => ({...fish}))
}

// Example usage:
//console.log(fishSpecies[0]); // Print information about the first fish
//console.log(fishSpecies.length); // Print the total number of fish species in the array
