const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#result')

    if(height === '' || isNaN(height) || height < 0){
        results.innerHTML=`Please Enter a valid height `;
    }
    else if(weight=== '' || weight <= 0 || isNaN(weight)){
        results.innerHTML =` Please Enter a valid weight`;

    }else{
       const  bmi= (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML= `<h2>Your BMI is <b>${bmi}</b> </h2>`;
        if(bmi < 18.6){
            results.innerHTML =`You are Underweight : <b>${bmi}</b>`;
            results.style.color="blue";
        }
        else if(bmi >= 18.6 && bmi <= 24.6){
            results.innerHTML = `You are Healthy : <b>${bmi}</b>`;
            results.style.color="green";
        }
        else{
            results.innerHTML = ` You are Overweight : <b>${bmi}</b>`;
            results.style.color= "red";
        }
    }



})