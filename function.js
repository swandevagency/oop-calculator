//* importing button
const numberKey = document.querySelectorAll('[data-number]')
const OperatorKey = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('.delete')
const allClearButton = document.querySelector('.clear')

//* importing inputs 
const previousNumber = document.querySelector('[previous-number]').innerText
const currentNumber = document.querySelector('[current-number]')

//* defining variables
let previous;
let current;
let result;
let operator;


class calculator {
    
    constructor(previousNumber, currentNumber){
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber 
    
        if(currentNumber && previousNumber){
            this.previousNumber = this.currentNumber;
            this.currentNumber = '';
        }
    }

    allClear(){
        this.currentNumber = ''
        this.previousNumber = ''
        console.clear()
    }

    del(){
        if (this.currentNumber.length === 1) {
            show.innerText = "";
        } else { 
            this.currentNumber = this.currentNumber.substring(0, this.currentNumber.length - 1)
        }
    }

    operation(){
        if(currentNumber.innerText && previousNumber.innerText) {
            calculated()
        }
        operation = event.target.innerText;
        currentNumber.innerText += operation
        console.log('operation',operation)
        
        
        previousNumber.innerText = currentNumber.innerText
        currentNumber.innerText = null
    
    }

    calculate(){
        previous = parseFloat(this.currentNumber) 
        current = parseFloat(this.previousNumber)
        

        switch(operation) {

            case '+':
                result = previous + current;
                console.log(`${previous} + ${current} = ${result}`);
                break;
      
            case '-':
                result = previous - current;
                console.log(`${previous} - ${current} = ${result}`);
                break;
      
            case '*':
                result = previous * current;
                console.log(`${previous} * ${current} = ${result}`);
                break;
      
            case '/':
                if(current == 0){
                    return currentNumber.innerText = "Error!";
                }
                result = previous / current;
                console.log(`${previous} / ${current} = ${result}`);
                break;
    
            default:
                break
        }
        this.currentNumber = result;
        this.previousNumber = '';
    }

}







