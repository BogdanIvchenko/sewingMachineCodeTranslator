function compute(){

    reset();

    var userinput = (JSON.stringify(document.getElementById('userinput').value)).toUpperCase();
    var machineCode =[];
    var i = 0;

    for( i = 1; i < userinput.length-1; i++){
        // letters
        if(userinput.charCodeAt(i) >= 65 && userinput.charCodeAt(i) <= 90){
            machineCode.push(" "+(userinput.charCodeAt(i)-64));

        } else if (userinput.charCodeAt(i) >= 48 && userinput.charCodeAt(i) <= 57){
            //Numbers
            machineCode.push(" "+(userinput.charCodeAt(i)-17));
        } else {
            switch (userinput.charAt(i)){
                case '&':
                    machineCode.push(" " + 27);
                    break;
                case '?':
                    machineCode.push(" " + 28);
                    break;
                case '!':
                    machineCode.push(" " + 29);
                    break;
                case '_':
                    machineCode.push(" " + 30);
                    break;
                case ' ':
                    machineCode.push(" " + 30);
                    break;
                case '\'':
                    machineCode.push(" " + 41);
                    break;
                case ',':
                    machineCode.push(" " + 42);
                    break;
                case '.':
                    machineCode.push(" " + 43);
                    break;
                case '(':
                    machineCode.push(" " + 44);
                    break;
                case ')':
                    machineCode.push(" " + 45);
                    break;
                case '-':
                    machineCode.push(" " + 46);
                    break;
                case 'Ä':
                    machineCode.push(" " + 47);
                    break;
                case 'Å':
                    machineCode.push(" " + 48);
                    break;
                case 'Æ':
                    machineCode.push(" " + 49);
                    break;
                case 'Ñ':
                    machineCode.push(" " + 50);
                    break;    
                case 'Ö':
                    machineCode.push(" " + 51);
                    break;
                case 'Ø':
                    machineCode.push(" " + 52);
                    break;
                case 'ç':
                    machineCode.push(" " + 53);
                    break;
                case 'Ü':
                    machineCode.push(" " + 54);
                    break;
                case 'ß':
                    machineCode.push(" " + 55);
                    break;    
            }
        }
    }
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('The code is: ' + machineCode);
    h1.appendChild(textAnswer);
    document.getElementById('resultOutput').appendChild(h1);
}
function reset(){
    document.getElementById('resultOutput').innerHTML = " ";
}
