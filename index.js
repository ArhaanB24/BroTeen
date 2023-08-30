function overfunc(){
    window.location.href = "over.html";
}
function underfunc(){
    window.location.href = "under.html";
}

function mybmi(){
    let height,weight;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    let bmi;
    bmi = parseFloat(weight)/(parseFloat(height)**2)
    document.getElementById("result").innerHTML = bmi;
    if (bmi<18.5){
        document.getElementById("otpt").innerHTML = "Underweight";
        document.getElementById("final").innerHTML = '<br><form action="under.html"><button type="submit">View Diet Plan</button></form>';
    }
    else if (bmi>=18.5 && bmi<25){
        document.getElementById("otpt").innerHTML = "Healthy Weight";
        document.getElementById("final").innerHTML = '<br><button type="submit" value="gain" onclick="underfunc()">Gain Weight</button><br><button type="submit" value="lose" onclick="overfunc()">Lose Weight</button>';

    }
    else if (bmi>=25 && bmi<30){
        document.getElementById("otpt").innerHTML = "Overweight";
        document.getElementById("final").innerHTML = '<br><form action="over.html"><button type="submit">View Diet Plan</button></form>';
    }
    else{
        document.getElementById("otpt").innerHTML = "Obese";
    }
    
}