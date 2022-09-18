alert("Hello from JS!")

// difference
function difference(a, b) {
    return a - b;
}

// product
function product(a, b) {
    return a * b;
}

// printDay
function printDay(num) {
    let dates = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday",
    };
    return dates[num];
}

// lastElement
function lastElement(arr) {
    return arr[arr.length - 1];
}

// numberCompare
function numberCompare(a, b) {
    if (a === b) {
        return "Numbers are equal";
    } else if (a > b) {
        return "First is greater";
    }
    return "Second is greater";
}

// singleLetterCount
function singleLetterCount(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

// multipleLetterCount
function multipleLetterCount(str) {
    str = str.toLowerCase();
    let finalObj = {};
    for (let i = 0; i < str.length; i++) {
        if (finalObj[str[i]] === undefined) {
            finalObj[str[i]] = 1;
        } else {
            finalObj[str[i]]++;
        }
    }
    return finalObj;
}

// arrayManipulation
function arrayManipulation(arr, command, location, val) {
    if (command === "remove") {
        if (position === "end") {
            return arr.pop();
        }
        return arr.shift();
    }
    else if (command === "add") {
        if (position === "end") {
            arr.push(val)
            return arr;
        }
        arr.unshift(val);
        return arr;
    }
}

// isPalindrome
function isPalindrome(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}

// Rock / Paper / Scissor
function RPS() {

    function determineComputer(num) {
        if (num <= .33) return "rock";
        else if (num <= .66) return "paper";
        return "scissor";
    }

    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());


    let answers = ["rock", "paper", "scissor"];

    if (!userChoice || answers.indexOf(userChoice) === -1) {
        return "Please select a valid option";
    }

    if (userChoice === computerChoice) return "Tie!";

    if (userChoice === "rock" && computerChoice === "paper") {
        return "You lose, computer picked " + computerChoice;
    }
    if (userChoice === "paper" && computerChoice === "scissor") {
        return "You lose, computer picked " + computerChoice;
    }
    if (userChoice === "scissor" && computerChoice === "rock") {
        return "You lose, computer picked " + computerChoice;
    }

    return "You win! Computer picked " + computerChoice;
}