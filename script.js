

//random number in 4 digits.

function pinGenerating(){
    let random = Math.random();
    let number = Math.round(random*10000).toString();
    if(number.length == 4){
        document.getElementById('pin').value = number;
        if(document.getElementById('tested-pin').value == '123' && submitChecker == false){
            findSubmitButton();
        }
        return;
    }
    pinGenerating();
}

//submission button

function findSubmitButton(){
    document.getElementById('submit').style.display = "block";
    document.getElementById('submit').style.margin = "0 auto";
    document.getElementById('submit').style.marginTop = "20px";
    document.getElementById('tested-pin').placeholder = "Required: 4 digits of pin";
    document.getElementById('tested-pin').value = "";
    document.getElementById('pin').value = "";
    document.getElementById('try-left').innerHTML = "3";
    submitChecker = true;
}



let number = document.getElementsByClassName('button');
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click', function(){
        invisibleNotify();
        pinCatenating(this.id);
    });
}

//Pin user

function pinCatenating(digit){
    let previousPin = document.getElementById('tested-pin').value;
    document.getElementById('tested-pin').value += digit;
}


let operation = document.getElementsByClassName('operation');
for(let i=0;i<operation.length;i++){
    operation[i].addEventListener('click', function(){
        invisibleNotify();
        clearingTestedPin(this.id);
    });
}


function clearingTestedPin(id){
    if(id=='clear'){
        document.getElementById('tested-pin').value = "";
    }else{
        let deleteValue = document.getElementById('tested-pin').value;
        document.getElementById('tested-pin').value = deleteValue.substr(0,deleteValue.length-1);
        
    }
}

//Submission.

const submit = document.getElementById('submit');
submit.addEventListener('click', isMatched);
function isMatched(){
    const generative = document.getElementById('pin');
    const tested = document.getElementById('tested-pin');
    if(generative.value == "" && tested.value ==""){
        return;
    }
    submissionCount -= 1;
    if(parseInt(generative.value)>-1 || parseInt(tested.value)>-1){
        if(generative.value == tested.value){
            document.getElementById('matched').style.display = 'block';
            submissionCount = 3;
            document.getElementById('try-left').innerHTML = "3";
        }else{
            document.getElementById('not-matched').style.display = 'block';
            document.getElementById('matched').style.display = 'none';
        }
    }else{
        invisibleNotify();
    }
    if(submissionCount == 0){
        submit.style.display = 'none';
        document.getElementById('try-left').innerHTML = 'You have no';
        tested.placeholder = "Please, enter the secrete code! & click GP";
        submitChecker = false;
        submissionCount = 3;
    }else{
        document.getElementById('try-left').innerHTML = submissionCount.toString();
    }
    
}

//Notification

function invisibleNotify(){
    document.getElementById('matched').style.display = 'none';
    document.getElementById('not-matched').style.display = 'none';
}


document.getElementById('cross').addEventListener('click', function(){
    document.getElementById('not-matched').style.display = 'none';
});


//Submission three times...

let submissionCount = 3;
let submitChecker = true;

const pin = document.getElementById('generate-button');
pin.addEventListener('click', function(){
    invisibleNotify();
    pinGenerating();
});