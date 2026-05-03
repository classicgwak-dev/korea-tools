/**
 * 모든 계산기 도구의 기본이 되는 부모 클래스
 */
class BaseCalculator {
    constructor() {
        this.resultArea = document.getElementById('resultArea');
    }

    // 결과창을 부드럽게 보여주는 공통 기능
    showResult() {
        if (this.resultArea) {
            this.resultArea.classList.remove('hidden');
            this.resultArea.style.animation = "fadeIn 0.5s ease-in-out";
        }
    }

    // 날짜를 YYYY-MM-DD 형식으로 변환하는 유틸리티
    formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 입력값 유효성 검사 공통 로직
    validate(value, message) {
        if (!value) {
            alert(message);
            return false;
        }
        return true;
    }
}