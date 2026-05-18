const themeToggle =
document.getElementById("theme-toggle");

const body =
document.body;

const themeIcon =
themeToggle.querySelector("i");


/* LOAD SAVED THEME */

if(localStorage.getItem("theme") === "light"){

    body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");
}


themeToggle.addEventListener(
"click",

() => {

    body.classList.toggle("light-mode");


    /* SAVE THEME */

    if(body.classList.contains("light-mode")){

        localStorage.setItem("theme", "light");

    }

    else{

        localStorage.setItem("theme", "dark");
    }


    if(body.classList.contains("light-mode")){

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

    else{

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");
    }

});

/* ===================================
   CERTIFICATE MODAL
=================================== */

const certButtons =
document.querySelectorAll(".view-cert-btn");

const certModal =
document.querySelector(".cert-modal");

const modalImg =
document.querySelector(".modal-img");

const closeModal =
document.querySelector(".close-modal");


certButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const certCard =
        button.closest(".certificate-card");

        const certImg =
        certCard.querySelector("img");


        modalImg.src = certImg.src;

        certModal.classList.add("active");

    });

});


closeModal.addEventListener("click", () => {

    certModal.classList.remove("active");

});
/* ===================================
   EMAIL JS
=================================== */


/* INIT */

emailjs.init("64DjAEViKtYTcxST0");


/* FORM */

const contactForm =
document.getElementById("contactForm");


contactForm.addEventListener(
"submit",

function(e){

    e.preventDefault();


    const submitBtn =
    contactForm.querySelector("button");


    const originalText =
    submitBtn.innerHTML;


    submitBtn.disabled = true;

   submitBtn.innerHTML =

`
<i class="fas fa-spinner fa-spin"></i>

Sending...
`;

    emailjs.sendForm(

        "service_rgnp8kg",

        "template_69c01ah",

        this

    )

    .then(() => {

      /* SUCCESS POPUP */

const successPopup =

document.querySelector(
".success-popup"
);


successPopup.classList.add(
"show"
);


setTimeout(() => {

    successPopup.classList.remove(
    "show"
    );

}, 2500);


        contactForm.reset();


        submitBtn.disabled = false;

        submitBtn.innerHTML =
        originalText;

    })


    .catch((error) => {

        console.error(error);


        alert(
        "❌ Failed To Send Message"
        );


        submitBtn.disabled = false;

        submitBtn.innerHTML =
        originalText;

    });

});