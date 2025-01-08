function smoothScroll(targetId, offset = 0) {
    const target = document.getElementById(targetId);
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Thời gian cuộn (ms)
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Hàm easing (điều chỉnh tốc độ cuộn)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Thêm sự kiện click cho các nút
document.getElementById("link-com").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("com", 95); // 95px là chiều cao của navbar
});

document.getElementById("link-my-udon").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("my-udon", 95);
});

document.getElementById("link-takoyaki").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("takoyaki", 95);
});

document.getElementById("link-okonomiyaki").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("okonomiyaki", 95);
});

document.getElementById("link-doankem").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("doankem", 95);
});

document.getElementById("link-drink").addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("drink", 95);
});


//User ấn vào "Đăng nhập/ Đăng ký" thì sẽ hiện mục "modal"
function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }

  function closeModal() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    usernameInput.value = '';
    passwordInput.value = '';
    document.getElementById('modal').style.display =  'none';
  }
