#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright.underline('\n\t\t"MULTIPLE CHOICE QUESTIONS"\n'));

const mcqs: {
  Q1: String;
  Q2: String;
  Q3: String;
  Q4: String;
  Q5: String;
  Q6: String;
  Q7: String;
  Q8: String;
  Q9: String;
  Q10: String;
} = await inquirer.prompt([
  {
    message: "\nQ1: What are the three main 'simple types' in TypeScript?",
    type: "list",
    name: "Q1",
    choices: [
      "A) Boolean, Number, String",
      "B) Object, Array, Symbol",
      "C) Array, Object, Boolean",
      "D) Object, String, Number",
    ],
  },
  {
    message:
      "\nQ2: What type of assignment is this variable, `const fullName: string = 'Cardenal Loyal';`?",
    type: "list",
    name: "Q2",
    choices: [
      "A) Explicit",
      "B) Implicit"
    ],
  },
  {
    message: "\nQ3: True or False: TypeScript can always correctly infer a variables type.",
    type: "list",
    name: "Q3",
    choices: [
      "A) True",
      "B) False"
    ],
  },
  {
    message: "\nQ4: You can disable implicit variable type assignment by enabling the compiler option:",
    type: "list",
    name: "Q4",
    choices: [
      "A) noAutoType",
      "B) noImplicitAny",
      "C) autoTypeAssignment = FALSE",
      "D) Implicit = FALSE",
    ],
  },
  {
    message: "\nQ5: You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
    type: "list",
    name: "Q5",
    choices: [
      "A) noAutoType",
      "B) strictNullChecks",
      "C) noFalseyInits",
      "D) strictChecksRequired",
    ],
  },
  {
    message:
      "\nQ6: ______ is similar to 'any', but a safer alternative when uncertain about the type.",
    type: "list",
    name: "Q6",
    choices: [
      "A) unknown",
      "B) never",
      "C) similar",
      "D) None of these"
    ],
  },
  {
    message:
      "\nQ7: What is the inherited type for the variable example in `const example = ['Robert']`?",
    type: "list",
    name: "Q7",
    choices: [
      "A) string[]",
      "B) any[]",
      "C) unknown[]",
      "D) string"
    ],
  },
  {
    message:
      "\nQ8: What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'Good']`?",
    type: "list",
    name: "Q8",
    choices: [
      "A) Allows no changes and is there simply to be read from and not modified",  
      "B) Makes it private and can only be used in the file its created",
      "C) Makes you read it for better clean code",
      "D) Allows only adding but not deleting elements in the array"
    ],
  },
  {
    message:
      "\nQ9: True or False: TypeScript will always correctly infer the type of an array.",
    type: "list",
    name: "Q9",
    choices: [
      "A) True",
      "B) False"
    ],
  },
  {
    message:
      "\nQ10: True or False: a Tuple and an Array are the same thing when discussing types",
    type: "list",
    name: "Q10",
    choices: [
      "A) False",
      "B) True"
    ],
  },
]);

console.log(chalk.italic.yellowBright.underline("\n\t\tView Your Answers\n"));

let totalMcqs = Object.keys(mcqs).length;
let scores: number = 0;

console.log('\t');

switch (mcqs.Q1){
    case "A) Boolean, Number, String":
        console.log(chalk.greenBright('1. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('1. Incorrect Answer'),  "(correct answer: Boolean, Number, String)");
}

switch (mcqs.Q2){
    case "A) Explicit":
        console.log(chalk.greenBright('2. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('2. Incorrect Answer'),  "(correct answer: Explicit)");
}

switch (mcqs.Q3){
    case "B) False":
        console.log(chalk.greenBright('3. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('3. Incorrect Answer'),  "(correct answer: False)");
}

switch (mcqs.Q4){
    case "B) noImplicitAny":
        console.log(chalk.greenBright('4. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('4. Incorrect Answer'),  "(correct answer: noImplicitAny)");
}

switch (mcqs.Q5){
    case "B) strictNullChecks":
        console.log(chalk.greenBright('5. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('5. Incorrect Answer'),  "(correct answer: strictNullChecks)");
}

switch (mcqs.Q6){
    case "A) unknown":
        console.log(chalk.greenBright('6. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('6. Incorrect Answer'),  "(correct answer: unknown)");
}

switch (mcqs.Q7){
    case "A) string[]":
        console.log(chalk.greenBright('7. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('7. Incorrect Answer'),  "(correct answer: string[])");
}

switch (mcqs.Q8){
    case "A) Allows no changes and is there simply to be read from and not modified":
        console.log(chalk.greenBright('8. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('8. Incorrect Answer'),  "(correct answer: Allows no changes and is there simply to be read from and not modified)");
}

switch (mcqs.Q9){
    case "B) False":
        console.log(chalk.greenBright('9. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('9. Incorrect Answer'),  "(correct answer: False)");
}

switch (mcqs.Q10){
    case "A) False":
        console.log(chalk.greenBright('10. Correct Answer'));
        scores++;
        break;
        default:
            console.log(chalk.redBright('10. Incorrect Answer'),  "(correct answer: False)");
}

console.log('\nYour Score is: ', scores , '/' , totalMcqs);
