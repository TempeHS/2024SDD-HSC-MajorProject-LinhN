//alert("Hello, world"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "Debug the innerHTML"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Debug the console log"); //Output to the console (Open dev tools and look at the console)

let myArray = [8, 9, 6, 1, 0, 3, 5, 7, 2, 4 ];

/*
START
    SET num1 to GET keyboard input
    SET pressed = GET calc key
    SET num2 to GET keyboard input
    SET result = 0

    IF pressed = plus
        
        result = addNum(num1, num2)

    ELSE IF pressed = minus

        result = minusNum(num1, num2)

    ELSE IF pressed = multiplication 

        result = multiply(num1, num2)

    ELSE IF pressed = division 

        result = divide(num1, num2)

    ELSE pressed = square

        result = square(num1)

    END IF

    DISPLAY result to UI

END



BEGIN SUBROUTINE addNum(a ,b)
    return a + b
END

BEGIN SUBROUTINE minusNum(a ,b)
    return a - b

BEGIN SUBROUTINE multiply(a ,b)
    return a * b

BEGIN SUBROUTINE divideNum(a ,b)
    return a / b

BEGIN SUBROUTINE squareNum(a)
    return a*a  

*/

/*
let a = 3;
let b = 4;

function addNum(){
    result = a + b;
    alert("The answer is " + result);
}

function divideNum(){
    result = a / b;
    alert("The answer is " + result);
}

function multiplyNum(){
    result = a * b;
    alert("The answer is " + result);
}

function minusNum(){
    result = a - b;
    alert("The answer is " + result);
}

function squareNum(){
    result = a*a;
    alert("The answer is " + result);
}
*/





// wage/tax calculator

/*
START 

SET salary to keyboard input

GET salary type

CALCULATE feeHelp
    IF feeHelp is checked
        IF salary < $39,999
            calcFeeHelp()

CALULATE tax
    calcTax()

END

START SUBROUTINE calcTax

IF salary is 0 - $19,999
    tax = salary * 0.1

ELSE IF salary is $20,000 - $39,999
    tax = salary * 0.2

ELSE IF salary is > $40,000
    tax = salary * 0.3

END IF

END


START SUBROUTINE normSal
    return weekly
END

START SUBROUTINE calcFeeHelp
    feeHelp = salary * 0.1
END


START SUBROUTINE printUI
    DISPLAY "net salary is " + sal + ", tax liability is $" + tax
END 



*/



salType();



function salType() {
    salaryType = prompt("What is your salary type? Enter 1 if it's weekly, 2 if it's fortnightly, 3 if it's monthly and 4 if it's yearly");
    salary = parseFloat(prompt("Please enter your salary, make sure not to include $ signs or commas"));

    if (salaryType === "1") {
        salary = salary * 52; 
    } else if (salaryType === "2") {
        salary = salary * 26; 
    } else if (salaryType === "3") {
        salary = salary * 12; 
    } 

    alertTax();
}

function calcTax(salary) {
    if (salary <= 19000) {
        return salary * 0.1;
    } else if (salary >= 20000 && salary <= 39000) {
        return salary * 0.2;
    } else if (salary >= 40000) {
        return salary * 0.3;
    }
  
}

function calcFeeHelp(salary){
    let feeHelpChecker = prompt("Do you have help fee, type 1 if you do, and 2 if you don't")
        if (feeHelpChecker === "1"){
            if (salary > 39999){
                feeHelp = salary * 0.1;
                alert("Your help fee is " + feeHelp);
                return feeHelp;
            }

            else{
                feeHelp = 0;
                alert("Your help fee is " + feeHelp);
                return feeHelp;
            }
        }

        if (feeHelpChecker === "2"){
            feeHelp = 0;
            return feeHelp;
        }
}

function alertTax(){
    let tax = Math.floor((calcTax(salary) + calcFeeHelp(salary))/52);
    alert("Your weekly tax is " + tax);
}






