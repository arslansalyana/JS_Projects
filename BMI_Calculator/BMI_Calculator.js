const form = document.querySelector('form');

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        results.textContent = "Please provide a valid height";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.textContent = "Please provide a valid weight";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.textContent = `Your BMI is ${bmi}`;
        if (bmi < 18.5){
            results.textContent += ", you are underweight";
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            results.textContent += ', you are normal weight';
        }
        else{
            results.textContent += ', you are overweight';
        }
    }
});