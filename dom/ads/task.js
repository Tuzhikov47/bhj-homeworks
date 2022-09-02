const rotator = document.querySelectorAll('.rotator');

function change(rot) {
    let rotArr = Array.from(rot);
    let activeIndex = rotArr.findIndex(item => item.classList.contains('rotator__case_active'));
    rotArr[activeIndex].classList.remove('rotator__case_active');
    if (activeIndex == rotArr.length - 1) {
        rotArr[0].classList.add('rotator__case_active');
    } else {
        rotArr[activeIndex + 1].classList.add('rotator__case_active');
    }
}
rotator.forEach(item => setInterval(change, 1000, item.querySelectorAll('.rotator__case')))