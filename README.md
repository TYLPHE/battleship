# Battleship
###### First project with Test Driven Development

![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/battleship.gif)

## Links
- [Try Battleship here!](https://tylphe.github.io/battleship/)

- [Link to the Assignment](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship)

## Features
- Simulates real gameplay by creating click-and-drag ships and markers
- CPU mode actively hunts to sink ship after a hit
- 2-player mode by loading separate browsers

## About
Battleship is assigned to focus on testing cpu and game logic with Jest. I also wanted to simulate the actual board game by giving the player the ability to manage their ship and marker placements.

The CPU will also hunt try to sink the ship after hitting it, which more closely resembles how a human player would play this game.

## Challenges
### CSS - Click and drag
When I think about Battleship the board game, I was reminded of my childhood and how fun it was to keep track of my own pieces. The feeling of placing the pegs in the right square was what made the game fun for me. I wanted to simulate that feeling in this project by creating elements that were draggable by mouse. This turned out to be a deep challenge but a very satisfying one to face.

I used [this particular guide](https://javascript.info/mouse-drag-and-drop) to help me get started. Sure, it is easy to follow the code, but to interpret this code and translate it into the way I wrote Battleship was a different story.

I needed to make the click-and-drag elements as easy to interpret for the user as possible. to do so, I needed to incorporate highlighting and error handling. You can [navigate to my code](https://github.com/TYLPHE/battleship/blob/main/src/DOM/ship/clickDrag.js) to see how I handle highlighting, as well as error handling. For example, the app crashes if the dragging DOM cannot stay under the mouse (in the case where the user drags the element but flicks their mouse really fast back and forth).

For extra practice, I recreated the click-and-drag feature for marker placement. [You can find it here](https://github.com/TYLPHE/battleship/blob/main/src/DOM/markers/addMarkers.js)

### CSS - box-sizing: border-box
For this project, I am using HTML to create each invididual box seen on the top and bottom halves. Each element is arranged using `display: flex`. Originally, I had the boxes calculate to the size of 100% / 12 (boxes per row) - 2px. This, however did not work when the whole webpage is resized under 100%.

In order to fix this, I had to make use of `box-sizing: border-box`, which tells the browser to take all borders and padding and limit the total size to the element's width and height. By default, adding a 1px border will increase the box's size from, say (100px x 100px) to (102px x 102px).

### CSS - A fast way to center absolute divs
When loading the page for the first time, all the ships should have absolute positioning next to the ocean grid. In order to get the default positioning, I turned everything to `display: flex` and then used `justify-content: center` and `align-items: center` with the proper `gap`.

Then I used the console's ruler to measure the top position of each div and then used that data to go back to `position: absolute` and changing the top values. for example, the destroyer's position in the CSS file is: `.destroyer {top: calc(290/448 * 100%)}`.

### Organization - Folder structuring
I ended up writing about 650 lines of code for a 2-player game. It should feel like the actual physical Battleship game! At this point of the project, I am ready for a player vs CPU mode. However, my single javascript file seemed unorganized. I decided to take advantage of Webpack and VSCode to split and organize functions into folders. This wil make it easier for me to work on the files I need instead of sifting through lines of unnecessary code.

It was a challenge to organize the files in a logical way and I think I will continue to shift things around as I develop this app. The great thing is that VSCode will automatically update its `import` address. For example, if I move a file to different folder, VSCode will update from this: `import addShip from './DOM/addShip'` to this `import addShip from './DOM/ship/addShip'`.

I need to remember to manually save the file, however. The terminal doesn't know that VSCode updated some lines for me.

### JavaScript - webpack.config.js: mode
Up until now, I've always set my webpack.config.js mode to `mode: 'production'`. I just learned that its better to leave it that way if we were to publish our app and have yet to look into this.

Leaving it at `mode: 'production'`, however is a nightmare for debugging. for example, the console ends up looking like this:

![](https://github.com/TYLPHE/battleship/blob/main/readmeAssets/mode%20-%201.jpg)

when I changed the mode to `mode: 'development'`, it displays things in a way that makes sense! See below:

![](https://github.com/TYLPHE/battleship/blob/main/readmeAssets/mode%20-%202.jpg)

That's some cool webpack stuff! I also learned that I dont need to export everything so the dist folder only has 2 files. I wonder if that makes things secure. I'll look into that later!

### Babel - Could not "export default" & "import * from" with Jest.
Because I learned Webpack before Jest, I learned how to export my code like this:
```
function test() {
  // test
}

export default test;
```

To import it to a different file, I use this:
```
import test from './test';

function main(){
  test();
}
```

Jest, however seemed like it was using an older way of importing and exporting files. It was not accepting the newer ES6 format. I needed to use:
```
function test() {
  // test
}

module.exports = test;
```

and import it like this:
```
let test = require('./test');

function main() {
  test();
}
```

After a thorough Google search, I learned about Babel! 

> Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

I learned to install babel into my project by using:

`npm install --save-dev @babel/plugin-transform-modules-commonjs`

Next, I created a new `.babelrc` file within my project with the following content:

```
{
  ""env"": {
    ""test"": {
      ""plugins"": [""@babel/plugin-transform-modules-commonjs""]
    }
  }
}
```

This allowed me to continue to use the ES6 import/export formatting!

### Jest - Testing saves me so much time!
This is the first time using test-driven development and I'm in love.

This project requires a CPU. This is the greatest challenge becuase I've been doing a lot of front-end work. creating a bunch of tests before writing the actual code helped a lot. It allowed me to break things down into smaller pieces.

For example, I have a function called `randomSquare()`. It selects a random square. Pretty simple, right? With testing, however, I can call this function 1000 times:

```
  describe('randomSquare.js', () => {
    it('Should return a valid coordinate', () => {
      let numRef = [
        'a','b','c','d','e',
        'f','g','h','i','j'
      ];
      let alphaRef = [
        'one','two','three','four','five',
        'six','seven','eight','nine','ten'
      ];

      let test;
      for (let i = 0; i < 1000; i += 1) {
        let square = randomSquare();
        let row = square.slice(0, 1);
        let col = square.substring(0, 1);

        for (let i = 0; i < numRef.length; i += 1) {
          if (numRef[i] === row) {
            test = 'pass';
          }
        }
        for (let i = 0; i < alphaRef.length; i += 1) {
          if (alphaRef[i] === col) {
            test = 'pass';
          }
        }

        if (test !== 'pass') {
          pass = 'fail';
          break;
        }
      }

      expect(test).toBe('pass');
    });
  });
```

If this randomizer can select a random square 1000 times in a row correctly, then I can move forward with confidence that this portion of my code works. Testing makes debugging so much easier. If something breaks, then I can look at other code becasue I know this is solid.

### Recursion - Placing the CPU's ships on the board
Because of test-driven development, I was able to create a nice function that uses recursion. For example, the function will continue to call itself as long as there are ships to be placed for the CPU. It will not stop until all 5 ships are placed. 

I was running into an error where the function kept pushing coordinates into the same ship. 

I was able to narrow my issues from 5 functions to 1 function thanks to test-driven coding. I knew most of my functions had solid tests, which meant that the chances of that particular section of code breaking was smaller than other sections.

In the end, I was able to identify the issue in my function that saves the coordinates of a valid space.
