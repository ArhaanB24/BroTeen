function overfunc(){
    window.location.href = "over.html";
}
function underfunc(){
    window.location.href = "under.html";
}

function mybmi(){
    let height,weight,age,bmr,act,maint;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    age = document.getElementById("age").value;
    let bmi;
    bmi = parseFloat(weight)/(parseFloat(height)**2)
    document.getElementById("result").innerHTML = bmi.toFixed(2);
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
        document.getElementById("final").innerHTML = '<br><form action="over.html"><button type="submit">View Diet Plan</button></form>'
    }

    var ele = document.getElementsByName('gender');
    var gen_value;
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
        gen_value = ele[i].value;
    }

    if (gen_value == "male")
    {
        bmr = 66.47 + (13.75*weight) + (5.0003*height*100) - (6.755*age);
        
    }
    else if (gen_value == "female")
    {
        bmr = 655.1 + (9.563*weight) + (1.85*height*100) - (4.676*age);
    }
    act = document.getElementById('exc').value;
    // document.getElementById("tp").innerHTML = "Your Activity level: " + act;
    if (act == 1)
    {
        maint = bmr*1.2;
    } 
    else if (act == 2)
    {
        maint = bmr*1.375;
    }
    else if (act == 3)
    {
        maint = bmr*1.55;
    }
    else if (act == 4)
    {
        maint = bmr*1.725;
    }
    else if (act == 5)
    {
        maint = bmr*1.9;
    }
    document.getElementById("tp").innerHTML = "Using Oxford Formula BMR: " + bmr.toFixed(2) + "<br>Maintainance Calories: " + maint.toFixed(2);
}