/**
 * BaseCalculator를 상속받은 비자 전용 계산기
 */
class VisaCalculator extends BaseCalculator {
    init() {
        document.getElementById('calculateBtn').addEventListener('click', () => this.calculate());
    }

    calculate() {
        const entryDateVal = document.getElementById('entryDate').value;
        const visaDays = parseInt(document.getElementById('visaType').value);

        // 부모의 validate 기능 사용
        if (!this.validate(entryDateVal, "Please select your entry date.")) return;

        const entryDate = new Date(entryDateVal);
        const expireDate = new Date(entryDate);
        expireDate.setDate(entryDate.getDate() + visaDays);

        // 부모의 formatDate 및 showResult 사용
        document.getElementById('departDate').innerText = this.formatDate(expireDate);
        
        this.calculateRemaining(expireDate);
        this.showResult();
    }

    calculateRemaining(expireDate) {
        const today = new Date();
        today.setHours(0,0,0,0);
        const diff = Math.ceil((expireDate - today) / (1000 * 60 * 60 * 24));
        
        const resElem = document.getElementById('remainingDays');
        resElem.innerText = diff >= 0 ? `${diff} days left` : `Expired (${Math.abs(diff)} days ago)`;
        resElem.style.color = diff >= 0 ? "#2a9d8f" : "#e63946";
    }
}

// 실행
const visaApp = new VisaCalculator();
visaApp.init();