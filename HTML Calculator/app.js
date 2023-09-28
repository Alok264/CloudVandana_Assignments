
function changeMode(){
    document.body.classList.toggle('light-mode');
    var mode = document.querySelector('#mode');
    // toggle mode value
    if(mode.value == "🔆"){
        mode.value = "🌙";}
    else
        mode.value = "🔆";

    mode.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(360deg)'}
    ],{
        duration: 500,
        iterations: 1
    });
}

var isDotClicked = false;
// handling calculator error possibilities i.e., 1+++++, 2*-+.., 3//+*, means repeated operators should not be used
function Operator(value)
{
    var display = document.querySelector('#display');
    var displayValue = display.value;
    var lastChar, secondLastChar;
    if(displayValue.length>=1) lastChar = displayValue[displayValue.length-1];
    if(displayValue.length>2) secondLastChar = displayValue[displayValue.length-2];
    var currentOperator = value;
    if(displayValue==''){
        if(currentOperator == '-' || currentOperator == '+'){
            display.value = '0'+ currentOperator;
        }
        else if(currentOperator == '.')
        {
            display.value = '0'+ currentOperator;
            isDotClicked = true;
        }
        else return;
    }
    else if(displayValue.length == 1)
    {
        if(isDotClicked && currentOperator == '.') return;
        else 
        {
            if(currentOperator == '.') isDotClicked = true;
            else isDotClicked = false;
            display.value += currentOperator;
        }
           
    }
    else if(displayValue.length>1)
    {
        if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '.')
        {
            if(currentOperator == '+' || currentOperator == '-' || currentOperator == '*' || currentOperator == '/' || currentOperator == '.')
            {
                if(lastChar == '.' && currentOperator == '.') return;
                else if(lastChar == '.' && currentOperator != '.') {
                    display.value += '0'+currentOperator; 
                    isDotClicked = false;
                    }
                else if(lastChar != '.' && currentOperator == '.' && isDotClicked)
                {
                    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') display.value += '0'+currentOperator;
                    else display.value += currentOperator;
                    operatorClicked = true;
                }
                else if(lastChar != '.' && currentOperator != '.')
                {
                    if(lastChar=='*' && secondLastChar == '*')  return;
                    else if(lastChar=='*' && secondLastChar != '*' && currentOperator == '*'){
                        display.value += currentOperator;
                        isDotClicked = false;
                    }
                    else if(lastChar =='+' || lastChar =='-' || lastChar == '/'|| lastChar == '*')
                    {
                        display.value = displayValue.substring(0,displayValue.length-1)+currentOperator;
                        isDotClicked = false;
                    }
                }
                else return;
            }
        }
        else
        {
            if(currentOperator == '.') 
            {
                if(isDotClicked) return;
                else
                {
                    display.value += currentOperator;
                    isDotClicked = true;
                }
            }
            else {
                display.value += currentOperator;
                isDotClicked = false;
            }
        }
    }
}

function Operand(value)
{
    var display = document.querySelector('#display');
    var display = document.querySelector('#display');
    var displayValue = display.value;
    var lastChar, secondLastChar;
    if(displayValue.length>=1) lastChar = displayValue[displayValue.length-1];
    if(displayValue.length>2) secondLastChar = displayValue[displayValue.length-2];
    var currentOperand = value;
    if(displayValue=='')
    {
        if(currentOperand == '0') {display.value = '0';}
        else display.value = currentOperand;
    }
    else if(displayValue.length == 1)
    {
        if(lastChar == '0' && currentOperand == '0') return;
        else if(lastChar == '0' && currentOperand != '0') display.value = currentOperand;
        else display.value += currentOperand;
    }
    else if(displayValue.length>1)
    {
        if(lastChar=='0')
        {
            if(secondLastChar=='+' || secondLastChar=='-' || secondLastChar=='*' || secondLastChar=='/') return;
            else if(secondLastChar=='.') display.value += currentOperand;
            else display.value += currentOperand;
        }
        else
        {
            display.value += currentOperand;
        }
    }
}

function ACButtonClicked()
{
    var display = document.querySelector('#display');
    display.value = '';
    isDotClicked = false;
}