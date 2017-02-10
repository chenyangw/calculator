var sum = 0             // Sum for memory buttons
var answer = 0          // Answer variable for evalu()
var equalClear = 0      // Flag for clearing screen after answer

// Adds symbol to display based on button pressed
function addToScreen(value){

    // If a value has been returned, clear the screen for the next input
    if(value=='+' || value=='-' || value=='*' || value=='/'){
            equalClear = 0
    }else{
            if (equalClear == 1) {
                clearScreen()
                equalClear = 0
            }
    }

    // Get current display contents
    var display = document.getElementById("disp").value

    // Ff display is showing an error, clear screen
    if(display == "ERROR"){
            clearScreen();
    }

    // Add '*' for implicit multiplication
    if(display.length > 0){
            
            var lastChar = display.charAt(display.length - 1)

            if(value == '('){

                    if(lastChar >= '0' && lastChar <= '9'){
                            value = "*" + value
                    }

                    if(lastChar == ')'){
                            value = "*" + value
                    }
            }
    }

        document.getElementById("disp").value += value
        document.getElementById("disp").focus()

}

// Clears the screen
function clearScreen(){
        document.getElementById("disp").value = ""
}

// Attempts to evaluate contents of display
function evalu() { 
        try { 
                answer = eval(document.getElementById("disp").value)
                clearScreen()
                addToScreen(answer) 
                equalClear = 1
        } 
        catch(evalu) {
                clearScreen()
                addToScreen('ERROR') 
        } 
}

// Pastes contents of memory to display
function memRecall() {
        addToScreen(sum)
}

// Clears memory
function memClear() {
        sum = 0
}

// Attempts to add contents of display to what is stored in memory  
function memPlus() {
        try {
            sum += eval(document.getElementById("disp").value)
        }
        catch (mPlus) {
            clearScreen();
            addToScreen('ERROR')
        }
        //  clearScreen()
        equalClear = 1;
}

// Attempts to subtract contents of display from what is stored in memory  
function memMinus() {
        try {
                sum -= eval(document.getElementById("disp").value)
        }
        catch (mPlus) {
                 clearScreen();
                addToScreen('ERROR')
        }
       // clearScreen()
       equalClear = 1;       
}