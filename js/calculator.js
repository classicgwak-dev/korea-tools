function formatKRW(num) {
  return '₩' + Math.round(num).toLocaleString('ko-KR');
}

function calculateSalary() {
  const salary = parseFloat(document.getElementById('salary').value);

  if (isNaN(salary) || salary <= 0) {
    alert('Please enter a valid salary');
    return;
  }

  const el = {
    pension: document.getElementById('pension'),
    health: document.getElementById('health'),
    employment: document.getElementById('employment'),
    tax: document.getElementById('tax'),
    total: document.getElementById('total'),
    net: document.getElementById('net'),
    result: document.getElementById('result')
  };

  const pension = salary * 0.045;
  const health = salary * 0.035;
  const employment = salary * 0.009;

  const taxRate = 0.05;
  const tax = salary * taxRate;

  const total = pension + health + employment + tax;
  const net = salary - total;

  el.pension.innerText = formatKRW(pension);
  el.health.innerText = formatKRW(health);
  el.employment.innerText = formatKRW(employment);
  el.tax.innerText = formatKRW(tax);
  el.total.innerText = formatKRW(total);
  el.net.innerText = formatKRW(net);

  el.result.style.display = 'block';
}