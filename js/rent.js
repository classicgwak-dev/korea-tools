function formatKRW(num) {
  return Number(num).toLocaleString('en-US') + ' KRW';
}

function calculateRent() {

  const deposit =
    parseFloat(document.getElementById('deposit').value) || 0;

  const rent =
    parseFloat(document.getElementById('rent').value) || 0;

  const maintenance =
    parseFloat(document.getElementById('maintenance').value) || 0;

  const exchangeRate =
    parseFloat(document.getElementById('exchangeRate').value) || 1490;

  const total = rent + maintenance;

  // USD 계산
  const usd = total / exchangeRate;

  // 결과 출력
  document.getElementById('depositResult').innerText =
    formatKRW(deposit);

  document.getElementById('rentResult').innerText =
    formatKRW(rent);

  document.getElementById('maintenanceResult').innerText =
    formatKRW(maintenance);

  document.getElementById('totalCost').innerText =
    formatKRW(total);

  document.getElementById('usdCost').innerText =
    '$' + usd.toFixed(2);

  // 결과 표시
  document.getElementById('result').style.display = 'block';
}