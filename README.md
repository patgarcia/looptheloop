[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

---
Title: Loop the Loop! Two Dimensional Sums<br>
Type: Coding Challenge <br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Adapted for SEIR<br/>
Competencies:  Arrays, Loops, Breaking down a problem into smaller steps<br>
Prerequisites: JavaScript or Python Fundamentals<br>

---

Coding challenges are a chance for you to practice thinking through problems like a developer. It's okay to not finish all of them all of the time. If you get stuck, write some pseudo-code, talk to your teammates, and/or rubber-duck it out! 

#### Instructions: 

It is up to you how and where you'd like to store your coding challenge work. One option is to use an online REPL (like [CodePen](https://codepen.io/) or [repl.it](https://repl.it/languages/nodejs)--sign up for an account so you can save your REPLs and progress), and the other is to work in a JavaScript file in your code editor. There are pros and cons to each option, but if you'd like to set up a JavaScript file, you may follow the instructions below: 

1. Change directory into `./sei/sandbox`
2. Clone this directory into `sandbox`. 
3. `cd` into `loopTheLoop` then use `code . ` to open. 
4. Create a JavaScript file: `touch index.html script.js`
5. Add boilerplate to your `index.html`, add a `console.log("hello world")` to your `script.js` file, and connect `script.js` to your `index.html` file with a `<script>` tag, then open `index.html` with Live Server. 
6. If you set up and connected files correctly, you should see "hello world" in the console in Dev Tools. Now you're ready for your coding challenge! 

(After today's lesson, you will be able to check JavaScript code output using a Node command from terminal instead of setting up an extraneous index.html file.)

## Part 1: It's Hip to Be Square

**Make a function that that squares each number passed into it from an array, and sums the results.**

```
const arr = [1, 2, 2] 

sumOfSquares(arr); //should return 9, because 1^2 + 2^2 + 2^2 = 9.
```

## Part 2: Loop the Loop: 2D Array Addition

**Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array**


Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.
```
const arr = [ [10, 20, 30],
            [40, 50, 60],
            [70, -80, 90] ];

greatestSum(arr); //180
```

## Part 3: Bonus - Row, Column or Diagonal? 


Test your function on this data set and let me know if it was a row, column or diagonal that had the greatest sum!

```
const bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];
```

## Part 4: Super Bonus - Generate 2D Arrays 

Create a function that takes one argument, an integer, that makes a 2D array of random integers between 0  and 1000 where the length of the rows and columns is determined by the argument.

Add a 30% chance that the integer will become negative.

**Was this TOO EASY?**<br/>
Sign up for [codewars](codewars.com) and choose a code challenge (in JavaScript) or three and solve them. Found a fun one? Share it in slack!
