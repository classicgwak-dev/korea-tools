function formatKRW(num) {
  return num.toLocaleString('en-US') + ' KRW';
}

function calculateSalary() {
  const salaryInput = document.getElementById('salary');
  const salary = parseFloat(salaryInput.value);

  if (!salary || salary <= 0) {
    alert('Please enter a valid salary');
    return;
  }

  // 보험 계산
  const pension = salary * 0.045;
  const health = salary * 0.035;
  const employment = salary * 0.009;

  const total = pension + health + employment;
  const net = salary - total;

  // 결과 출력
  document.getElementById('pension').innerText = formatKRW(pension);
  document.getElementById('health').innerText = formatKRW(health);
  document.getElementById('employment').innerText = formatKRW(employment);
  document.getElementById('total').innerText = formatKRW(total);
  document.getElementById('net').innerText = formatKRW(net);

  document.getElementById('result').style.display = 'block';
}