const score = document.querySelectorAll("li");
const btn = document.querySelector("button");

const scoreCard = document.querySelector(".score-card");
const thankYou = document.querySelector(".thank-you");

const grade = document.querySelector(".grade");

// I want to select a score. So there are two states: active/selected and passive.

const selected = score.forEach((num) => {
    num.addEventListener('click', () => {
        // Remove 'active' class from all nums elements
        score.forEach((otherNum) => {
            otherNum.classList.remove('active');
        });

        // Add 'active' class to the clicked num element
        num.classList.add('active');
    });
});

btn.addEventListener('click', () => {
    const activeNum = document.querySelector('.active');

    if (activeNum) {
        scoreCard.style.display = 'none';
        thankYou.style.display = 'flex';
        grade.textContent = `You selected ${activeNum.innerText} out of 5`;
    } else {
        invalidGrade.textContent = 'Please select a number first.';
    }
});