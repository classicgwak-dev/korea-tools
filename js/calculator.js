function formatKRW(num) {
  return num.toLocaleString('en-US') + ' KRW';
}

function calculateSalary() {
  const salary = parseFloat(document.getElementById('salary').value);

  if (!salary || salary <= 0) {
    alert('Please enter a valid salary');
    return;
  }

  const pension = salary * 0.045;
  const health = salary * 0.035;
  const employment = salary * 0.009;

  // 🔥 세금 추가 (핵심)
  const tax = salary * 0.05;

  const total = pension + health + employment + tax;
  const net = salary - total;

  document.getElementById('pension').innerText = formatKRW(pension);
  document.getElementById('health').innerText = formatKRW(health);
  document.getElementById('employment').innerText = formatKRW(employment);
  document.getElementById('tax').innerText = formatKRW(tax);
  document.getElementById('total').innerText = formatKRW(total);
  document.getElementById('net').innerText = formatKRW(net);

  document.getElementById('result').style.display = 'block';
}