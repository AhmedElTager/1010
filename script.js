// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});


// ===============================
// زر الرجوع لأعلى
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
// ===============================
// العدادات المتحركة
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats-section");

    if (!stats) return;

    const position = stats.getBoundingClientRect().top;

    if (position < window.innerHeight && !counterStarted) {

        counterStarted = true;

        startCounter();

    }

});


// ===============================
// الأسئلة الشائعة FAQ
// ===============================

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const isOpen = answer.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach(item => {

            item.style.display = "none";

        });

        if (!isOpen) {

            answer.style.display = "block";

        }

    });

});
    // ===============================
// Animation عند النزول
// ===============================

const fadeElements = document.querySelectorAll(

".step-card,.feature-card,.client-card,.compare-card,.review-card,.stat-box,.contact-card"

);

function revealOnScroll() {

    fadeElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// Reviews Slider
// ===============================

const reviews = document.querySelectorAll(".review-card");

let currentReview = 0;

function showReview(index){

    reviews.forEach((review)=>{

        review.style.display="none";

    });

    reviews[index].style.display="block";

}

if(reviews.length > 0){

    showReview(0);

    setInterval(()=>{

        currentReview++;

        if(currentReview>=reviews.length){

            currentReview=0;

        }

        showReview(currentReview);

    },5000);

}


// ===============================
// تغيير لون الهيدر أثناء التمرير
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="#0D1B4C";

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";

    }else{

        header.style.background="rgba(13,27,76,.88)";

        header.style.boxShadow="none";

    }

});
    });

});
