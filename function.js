//* importing button
const numberKey = document.querySelectorAll('[data-number]')
const OperatorKey = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('.delete')
const allClearButton = document.querySelector('.clear')
const equal = document.querySelector('.equal')
const DecimalNum = document.querySelector(".Decimal")
const error = document.querySelector(".dontClick")

//* importing inputs 
const previousNumber = document.querySelector('[previous-number]')
const currentNumber = document.querySelector('[current-number]')

//* defining variables
let previous;
let current;
let result;
let operation;


// * defining class
class calculator {
    
    constructor(previousNumber, currentNumber){
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber 
    
        if(currentNumber && previousNumber){
            this.previousNumber = this.currentNumber;
            this.currentNumber = '';
        }
    }

    del(){
        if (currentNumber.length === 1) {
            currentNumber.innerText = "";
        } else { 
            currentNumber.innerText = currentNumber.innerText.substring(0, currentNumber.innerText.length - 1)
        }
    }

    allClear(){
        let clearMonitor = document.querySelector('.current-number') 
        document.querySelector('.current-number').innerHTML = '';  
        document.querySelector('.previous-number').innerHTML = '';
        console.clear()
    }

    error(){
        document.querySelector('.calculator').style.display = "none";
        document.querySelector('.container-secion-wrapper').innerHTML = "<h1> I Said Don't Click </h1>"
    }

    decimal(){
        currentNumber.innerText += '.';
        if(currentNumber.innerText == '.'){
            DecimalNum.Disabled == true
        }
    }

    numbers(){
        const x = event.target.innerText;
        console.log('Number',x)
        return currentNumber.innerText += x;
    }

   
    calculate(){
        previous = parseFloat(currentNumber.innerText) 
        current = parseFloat(previousNumber.innerText)
        

        switch(operation) {

            case '+':
                result = current + previous;
                console.log(`${previous} + ${current} = ${result}`);
                break;
      
            case '-':
                result = current - previous;
                console.log(`${previous} - ${current} = ${result}`);
                break;
      
            case '*':
                result = current * previous;
                console.log(`${previous} * ${current} = ${result}`);
                break;
      
            case '/':
                if(current == 0){
                    return currentNumber.innerText = "Error!";
                }
                result = current / previous;
                console.log(`${previous} / ${current} = ${result}`);
                break;
    
            default:
                break
        }
        currentNumber.innerText = result;
        previousNumber.innerText = '';
    }

    operate(){
        if(currentNumber.innerText && previousNumber.innerText) {
            this.calculate()
        }
        operation = event.target.innerText;
        currentNumber.innerText += operation
        console.log('operation',operation)
        
        
        previousNumber.innerText = currentNumber.innerText
        currentNumber.innerText = null
    
    }


}

calculator = new calculator(
    previousNumber,
    currentNumber
)

// * defining buttons

deleteButton.addEventListener('click', () => {
    calculator.del()
})

allClearButton.addEventListener("click", () => {
     calculator.allClear()
});

numberKey.forEach(button => {
    button.addEventListener('click', (event) => {
        calculator.numbers()        
    })
})

DecimalNum.addEventListener('click', () => {
    calculator.decimal()
})

OperatorKey.forEach(butOperation => {
    butOperation.addEventListener('click', () => {
        calculator.operate()        
    })    
});

equal.addEventListener('click', () => {
    calculator.calculate()
})


error.addEventListener('click', function(){
    calculator.error()
})  

function refreshPage(){
    if (confirm('Are you sure you want to reload this page?')){
        window.location.reload();
    }else{
        //do nothing
    }
} 





