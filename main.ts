
import inquirer from "inquirer";

let answer = await inquirer.prompt(
    [
         
           { message :" enter your first number", type: "number" ,name: "firstnumber" },
           {message :" enter your second number", type : "number" , name : "secondnumber"},
           {
             message :"select one operator to perform a operation ",
             type : "list",
             name : "operator",
             choices: ["addition", "subraction", "multiplication", "division"],
           }
    ]
)

if(answer.operator === "addition"){
console.log(answer.firstnumber + answer.secondnumber)
}
  else if( answer. opeartor === "subraction"){
    console.log(answer.firstnumber - answer.secondnumber)
  }
  else if(answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
  }
  else if(answer.operator){
 console.log(answer.firstnumber / answer.secondnumber)
  }













