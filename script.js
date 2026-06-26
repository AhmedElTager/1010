// =========================
// عداد الأرقام
// =========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 80;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        }

        update();

    });

};


// =========================
// تشغيل العداد عند الوصول للقسم
// =========================

const numberSection = document.querySelector("#numbers");

let started = false;

window.addEventListener("scroll", () => {

    if (window.scrollY >= numberSection.offsetTop - 300) {

        if (!started) {

            startCounter();

            started = true;

        }

    }

});


// =========================
// ظهور العناصر أثناء النزول
// =========================

const hiddenElements = document.querySelectorAll(

".step,.card,.client,.compare div,.number"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

});

hiddenElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(50px)";

    el.style.transition = ".8s";

    observer.observe(el);

});


// =========================
// تنقل سلس
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// =========================
// زر واتساب
// =========================

const whatsapp = document.querySelector(".floating");

whatsapp.addEventListener("mouseenter", () => {

    whatsapp.style.transform = "scale(1.15)";

});

whatsapp.addEventListener("mouseleave", () => {

    whatsapp.style.transform = "scale(1)";

});


// =========================
// تغيير لون الهيدر أثناء النزول
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0d2b55";

        header.style.transition = ".4s";

        document.querySelectorAll("nav a").forEach(link => {

            link.style.color = "#fff";

        });

    } else {

        header.style.background = "#fff";

        document.querySelectorAll("nav a").forEach(link => {

            link.style.color = "#0d2b55";

        });

    }

});


// =========================
// رسالة تجريبية عند الضغط على زر ابدأ الآن
// =========================

const startBtn = document.querySelector(".btn");

if(startBtn){

startBtn.addEventListener("click", () => {

console.log("Welcome To OneOrder");

});

}
