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
### CSS box-sizing: border-box
For this project, I am using HTML to create each invididual box seen on the top and bottom halves. Each element is arranged using `display: flex`. Originally, I had the boxes calculate to the size of 100% / 12 (boxes per row) - 2px. This, however did not work when the whole webpage is resized under 100%.

In order to fix this, I had to make use of `box-sizing: border-box`, which tells the browser to take all borders and padding and limit the total size to the element's width and height. By default, adding a 1px border will increase the box's size from, say (100px x 100px) to (102px x 102px).

### CSS A fast way to center absolute divs
When loading the page for the first time, all the ships should have absolute positioning next to the ocean grid. In order to get the default positioning, I turned everything to `display: flex` and then used `justify-content: center` and `align-items: center` with the proper `gap`.

Then I used the console's ruler to measure the top position of each div and then used that data to go back to `position: absolute` and changing the top values. for example, the destroyer's position in the CSS file is: `.destroyer {top: calc(290/448 * 100%)}`.

### Click and drag ships
