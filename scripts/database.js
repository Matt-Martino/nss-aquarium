
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            sizae: 3

        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}