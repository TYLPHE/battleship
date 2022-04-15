# Battleship
###### First project with Test Driven Development

![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/battleship.gif)

## Links
- [Try Battleship here!](https://TYLPHE.github.io/battleship/dist/)

- [Link to the Assignment](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/battleship)

## Features
- 

## About


## Challenges
### CSS - Click and drag

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

### Babel - Could not "export default" & "import from" with Jest.
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

### Jest - So cool