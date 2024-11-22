function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.style.display = 'none';
    errorDiv.style.display = 'none';

    if (num1 === '' || num2 === '') {
        showError('Vui long nhap so vao cho trong');
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                showError('Khong the chia cho 0');
                return;
            }
            result = (number1 / number2).toFixed(2);
            result = parseFloat(result);
            break;
        default:
            showError('Invalid operation');
            return;
    }

    showResult(result);
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function showResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.display = 'block';
}

