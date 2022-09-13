#!/usr/bin/env node

import readlineSync from 'readline-sync';
import cli from '../src/cli.js'

console.log('Welcome to the Brain Games!');

let userName = cli();

let questionValue = [];

const isEven = (num) => num % 2 === 0;
const correctAnswer = (num) => isEven(num) ? 'yes' : 'no';

for (let i = 0; i < 3; i++) {
    questionValue.push(Math.floor(Math.random() * 100) + 1);
}

let count = 0

const game = (questionValue, correctAnswer, name) => {
    while(count < 3) {
        let value = questionValue[count];

        console.log(`Qusetion: ${value}`);  
    
        let userAnswer = readlineSync.question('Your answer: ');
        
        if (userAnswer === correctAnswer(value)) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${correctAnswer(value)}\'`);
            console.log('Let\'s try again, ' + name + '!');
            break;
        }
    
        if (count === 3) {
            console.log('Congratulations, ' + name + '!');
        }
    }
}

game(questionValue, correctAnswer, userName);