let height = document.querySelector(".inp1");
let weight = document.querySelector(".inp2");
let btn = document.querySelector(".btn");
let  bmi = document.querySelector(".bmi")
let text = document.querySelector(".text")
let pic = document.querySelector(".pic")
let img = document.createElement("img")
btn.addEventListener('click' , function(){
    let x = height.value
    let y = weight.value
    let result = y/(x*x/10**4)
    result = result.toFixed(2)
    bmi.classList.add("bmiclass")
    bmi.innerHTML = "BMI = " + result
    if (x == '' || y  == ''){
        alert("Please provide the height and weight values")
    }else if (result <= 18.5) {
        text.style.color = "blue"
        text.innerHTML = "Underweight"
        img.src = "img/2.png"
        document.body.appendChild(img)
        img.classList.add("pic")
        text.after(img)
    }else if (result > 18.5 && result <= 24.9) {
        text.style.color = "green"
        text.innerHTML = "Normal weight"
        img.src = "img/1.png"
        document.body.appendChild(img)
        img.classList.add("pic")
        text.after(img)

    }else if (result > 24.9 && result <= 29.9) {
        text.style.color = "#F5E216"
        text.innerHTML = "Overweight"
        img.src = "img/3.png"
        document.body.appendChild(img)
        img.classList.add("pic")
        text.after(img)
    }else if (result > 29.9) {
        text.style.color = "red"
        text.innerHTML = "Obesity"
        img.src = "img/4.png"
        document.body.appendChild(img)
        img.classList.add("pic")
        text.after(img)
    }


})