document.getElementById('calculateBtn').addEventListener('click', function() {  
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);  
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value) / 100;  
    const numberOfInstallments = parseFloat(document.getElementById('numberOfInstallments').value);  
    const installmentInterval = parseFloat(document.getElementById('installmentInterval').value); // فاصله بین اقساط  

    // محاسبه نرخ بهره ماهیانه با توجه به فاصله زمانی بین اقساط  
    const numberOfPeriods = 12 / installmentInterval; // تعداد دوره‌ها در سال  
    const monthlyInterestRate = annualInterestRate / numberOfPeriods; // نرخ بهره موثر بر اساس فاصله   

    // محاسبه قسط ماهانه با فرمول قسط  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfInstallments));  

    if (!isNaN(monthlyPayment) && (monthlyPayment !== Infinity) && (monthlyPayment > 0)) {  
        const totalPayment = monthlyPayment * numberOfInstallments; // جمع کل اقساط  
        const totalInterest = totalPayment - loanAmount; // سود کل  

        // نمایش نتایج با استفاده از toLocaleString()  
        /*document.getElementById('result1').innerText = `مبلغ هر قسط`
        document.getElementById('result-a').innerText = `${Math.round(monthlyPayment).toLocaleString()} تومان `
        document.getElementById('result2').innerText = `جمع کل اقساط`
        document.getElementById('result-b').innerText = `${Math.round(totalPayment).toLocaleString()} تومان `
        document.getElementById('result3').innerText = `سود کل وام`
        document.getElementById('result-c').innerText = `${Math.round(totalInterest).toLocaleString()} تومان`;*/
        document.getElementById("result").innerHTML = `
        <div class="bottom" id="result">
            <p id="result1">مبلغ هر قسط</p>
            <p id="result-a">${Math.round(monthlyPayment).toLocaleString()} تومان </p>
            <p id="result2">جمع کل اقساط</p>
            <p id="result-b">${Math.round(totalPayment).toLocaleString()} تومان </p>
            <p id="result3">سود کل وام</p>
            <p id="result-c">${Math.round(totalInterest).toLocaleString()} تومان</p>
        </div>`

        document.getElementById("resultModal").style.display = 'block'; // نمایش مدال  

    } else {  
        document.getElementById('result1').innerText = 'لطفاً مقادیر معتبر وارد کنید';  
        document.getElementById('result-a').innerText = '';  
        document.getElementById('result-b').innerText = '';  
        document.getElementById('result2').innerText = '';  
        document.getElementById('result3').innerText = '';  
    }  
});

// بستن پنجره مدالی  
document.getElementById("closeModal").onclick = function() {  
    document.getElementById("resultModal").style.display = "none"; // پنهان کردن مدال  
}  

// بستن پنجره مدالی با کلیک خارج از آن  
window.onclick = function(event) {  
    const modal = document.getElementById("resultModal");  
    if (event.target === modal) {  
        modal.style.display = "none"; // پنهان کردن مدال  
    }  
}  



