/* **************************************** */
/* description : 미래유망 온다쌤
/* keywords : 온다프로필, 온다자기소개
/* author : 온다 */ 
/* create Date : 2024-09-19
/* update Date : 2024-09-19
/* **************************************** */

/* **************************************** */
/* 해상도 업데이트 기능 */
/* **************************************** */
function updateResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const resolutionElement = document.getElementById('resolution');
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');
    const row3 = document.getElementById('row3');

    // .custom-innerWrap 클래스 요소의 width를 가져오기
    const innerWrapElement = document.querySelector('.custom-innerWrap');
    const innerWrapWidth = innerWrapElement ? innerWrapElement.getBoundingClientRect().width : 0;

    // 해상도 정보 표시
    if (resolutionElement) {
        resolutionElement.textContent = `Window Size: ${width} x ${height}`;
        if (innerWrapWidth) {
            resolutionElement.textContent += `, .custom-innerWrap width: ${innerWrapWidth}px`;
        }
    }

    // 해상도에 따른 배경색 변경
    const row1Tds = row1 ? row1.querySelectorAll('td') : [];
    const row2Tds = row2 ? row2.querySelectorAll('td') : [];
    const row3Tds = row3 ? row3.querySelectorAll('td') : [];

    if (width >= 1200) {
        row1Tds.forEach(td => td.style.backgroundColor = 'lightblue');
        row2Tds.forEach(td => td.style.backgroundColor = '');
        row3Tds.forEach(td => td.style.backgroundColor = '');
    } else if (width >= 577 && width < 1200) {
        row1Tds.forEach(td => td.style.backgroundColor = '');
        row2Tds.forEach(td => td.style.backgroundColor = 'lightgreen');
        row3Tds.forEach(td => td.style.backgroundColor = '');
    } else {
        row1Tds.forEach(td => td.style.backgroundColor = '');
        row2Tds.forEach(td => td.style.backgroundColor = '');
        row3Tds.forEach(td => td.style.backgroundColor = 'lightcoral');
    }
}

// 페이지 로드 시와 창 크기 변경 시 해상도 업데이트 적용
window.addEventListener('resize', updateResolution);
document.addEventListener('DOMContentLoaded', updateResolution);

/* **************************************** */
/* description : 미래유망 온다쌤
/* keywords : 온다프로필, 온다자기소개
/* author : 온다 */ 
/* create Date : 2024-09-19
/* update Date : 2024-09-19
/* **************************************** */

/* **************************************** */
/* 다크 모드 감지 및 테마 적용 기능 */
/* **************************************** */
function applyTheme(theme) {
    const html = document.documentElement;
    html.setAttribute('data-bs-theme', theme);
    
    // 선택된 테마를 colorthememode에 업데이트
    const colorThemeMode = document.getElementById('colorthememode');
    if (colorThemeMode) {
        colorThemeMode.textContent = `현재 테마 칼라 모드: ${theme === 'dark' ? '다크 모드' : '라이트 모드'}`;
    }
}

function initThemeMode() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const colorThemeMode = document.getElementById('colorthememode');

    // 초기 테마 적용
    applyTheme(prefersDarkMode.matches ? 'dark' : 'light');
    
    // 시스템 테마 감지 결과를 표시 (요소가 존재할 경우에만)
    if (colorThemeMode) {
        colorThemeMode.textContent = `초기 시스템 테마 칼라 모드 감지: ${prefersDarkMode.matches ? '다크 모드' : '라이트 모드'}`;
    }

    // 모드 변경 시 자동 적용
    prefersDarkMode.addEventListener('change', (e) => {
        applyTheme(e.matches ? 'dark' : 'light');
    });
}

// 테마 토글 버튼 기능 추가
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);

    // 테마 전환 버튼 존재시 버튼 텍스트 변경
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.textContent = newTheme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환';
    }
}

// 페이지 로드 시 시스템 테마 모드 적용 및 버튼 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', () => {
    initThemeMode();

    // 테마 전환 버튼 존재시 테마 전환
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
});