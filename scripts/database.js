export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

const database = {
    fish: [
        {
            name: "Bart",
            image: "https://miarrecife.com/wp-content/uploads/2020/07/clownfish-1-scaled.jpg",
            species: "Clown Fish",
            food: "crustaceans",
            length: 3,
            location: "Gulf of Mexico",
            TravelTips: "Don't eat the local fish!  Fish are friends not food",
            Keeping: "Likes clean salty water at a temp of 83F"

        }, 
        {
            name: "Pink Terror",
            image: "https://www.buildyouraquarium.com/wp-content/uploads/2020/02/kole-tang.jpg",
            species: "Pink Kale Tang",
            food: "Fish",
            length: 6,
            location: "Haiti",
            TravelTips: "Don't upset the locals",
            Keeping: "Likes clean water, temps around 75-85F, and salty ass water."
        },
        {
            name: "Peppermint",
            igame: "https://treasuresoftheseaandmore.com/wp-content/uploads/2017/06/fish1.jpg",
            species: "Pomascus",
            food: "Kelp and little bugs",
            length: 2.5,
            location: "Dominican Republic",
            TravelTips: "Visit Peurto Plata",
            Keeping: "Likes clean water, temps around 75-85F, and salty ass water."
        },
        {
            name: "Big Buddah",
            image: "https://1.bp.blogspot.com/-EImP9NrxXNo/XtkrOyu6PVI/AAAAAAAAC6k/UJUefitWLLgSxoC9AlKxOxdhvLpZi0zfACNcBGAsYHQ/w1200-h630-p-k-no-nu/Untitled-1.webp",
            species: "Yellow Tang",
            food: "aquatic bugs",
            length: 2,
            location: "Keys of Florida",
            TravelTips: "Ask for Dive Master Steve",
            Keeping: "Likes clean water, temps around 75-85F, and salty ass water."
        },
        {
            name: "Pissed off Pete",
            image: "https://images1.ratemyfishtank.com/photo/13/860x640h/38000/37863/16239_2.jpg",
            species: "Yellow blenny",
            food: "small crabs",
            length: 4,
            location: "Bahamas",
            TravelTips: "Get a drink from The Frosty Fish",
            Keeping: "Likes clean water, temps around 75-85F, and salty ass water."
        },
        {
            name: "Patty Mayonnaise",
            image: "https://www.buildyouraquarium.com/wp-content/uploads/2020/02/dwarf-lionfish.jpg",
            species: "Blenny",
            food: "small crabs and crunchy bugs",
            length: 3.5,
            location: "coast of Florida",
            TravelTips: "Take the bus for half price.",
            Keeping: "Likes clean water, temps around 75-85F, and salty ass water."
        },  

    ]
}
/*
What is the data type of the database variable?  -An object with an array full of objects inside it.
What is the data type of the fish property?      -An array of fish objects
What is the data type of the name property?      -A string with a name in it.
What is the data type of the size property?      -An intiger 
What data types will the fish array contain?     -3x strings and one intiger.  
*/

