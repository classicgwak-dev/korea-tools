/**
 * BaseCalculator를 상속받은 비자 전용 계산기
 */
class VisaCalculator extends BaseCalculator {
    constructor() {
        super(); // 부모 클래스의 생성자 호출 (필수)
    }

    init() {
        const btn = document.getElementById('calculateBtn');
        if (btn) {
            btn.addEventListener('click', () => this.calculate());
        } else {
            console.error("오류: 'calculateBtn'을 찾을 수 없습니다. HTML의 버튼 ID를 확인하세요.");
        }
    }

    calculate() {
        const entryDateVal = document.getElementById('entryDate').value;
        const visaDays = parseInt(document.getElementById('visaType').value);

        // 부모(BaseCalculator)의 validate 기능 사용
        if (!this.validate(entryDateVal, "Please select your entry date.")) return;

        const entryDate = new Date(entryDateVal);
        const expireDate = new Date(entryDate);
        
        // 비자 기간 계산 (입국 당일 포함 여부에 따라 필요시 조정 가능)
        expireDate.setDate(entryDate.getDate() + (visaDays - 1);

        // 결과 출력
        const departDateElem = document.getElementById('departDate');
        if (departDateElem) {
            departDateElem.innerText = this.formatDate(expireDate);
        }
        
        this.calculateRemaining(expireDate);
        this.showResult(); // 부모의 결과창 표시 기능 호출
    }

    calculateRemaining(expireDate) {
        const today = new Date();
        today.setHours(0,0,0,0);
        const diff = Math.ceil((expireDate - today) / (1000 * 60 * 60 * 24));
        
        const resElem = document.getElementById('remainingDays');
        if (resElem) {
            resElem.innerText = diff >= 0 ? `${diff} days left` : `Expired (${Math.abs(diff)} days ago)`;
            resElem.style.color = diff >= 0 ? "#2a9d8f" : "#e63946";
        }
    }
}

// [핵심] HTML이 모두 로드된 후 객체를 생성하고 초기화합니다.
document.addEventListener('DOMContentLoaded', () => {
    // BaseCalculator가 로드되었는지 확인
    if (typeof BaseCalculator !== 'undefined') {
        const visaApp = new VisaCalculator();
        visaApp.init();
    } else {
        console.error("오류: main.js(BaseCalculator)가 로드되지 않았습니다. 파일 경로를 확인하세요.");
    }
});