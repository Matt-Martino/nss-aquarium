

import { getFish } from './database.js'
// Import the FishList function from the correct module
import { FishList } from './FishList.js'


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}



/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".containerOfFish")
console.dir(parentHTMLElement)

parentHTMLElement.innerHTML = FishList()


/*
    <div id="container"
        <h1>Hello World!</h1>
        <p>I was created with Javascript</p>
    </div>
*/

/*
    const message = `<h1>Hello World!</h1> <p>I was created with javascript</p>`

    const messageContainer = document.querySelector("#container") HTMLElement === Object
    messageContainer.innerHTML = message
*/


