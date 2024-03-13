export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}
//<script type="module" src="./scripts/main.js"></script>
//</body>