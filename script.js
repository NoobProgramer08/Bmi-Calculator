const condition = document.getElementById("condition");
const result = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
//.value ang gamiton basta input na HTML tag
function calculate(){
    const height = document.getElementById("input1").value / 100;
    const weight = document.getElementById("input2").value;
    const bmi = weight / (height * height);

    if(height != 0 && weight != 0){
        result.value = bmi;
    }else{
        result.value = 0;
        condition.innerText = "Please complete the required forms!"
    }
    if(bmi < 18.5){
        condition.innerText = "Weight Condition: Under weight"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        condition.innerText = "Weight Condition: Normal weight"

    }else if(bmi >= 25 && bmi <= 29.9){
        condition.innerText = "Weight Condition: Overweight"

    }else if(bmi >= 30){
         condition.innerText = "Weight Condition: Obese"

    }

}
function erase(){
   result.value = "";
   condition.innerText = "Weight Condition:";
   input1.value = "";
   input2.value = "";
}
