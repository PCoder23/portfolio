const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  console.log("1");
  header.classList.toggle("sticky", window.scrollY > 60);
});
$(document).ready(function () {
  $(this).scrollTop(0);
});

function loading() {
  document.querySelectorAll(".bar").forEach(function (current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;

    /* 
    setInterval() time sholud be set as trasition time / 100. 
    In our case, 2 seconds / 100 = 20 milliseconds. 
    */
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
        startWidth++;
        current.style.width = `${endWidth}%`;
        current.firstElementChild.innerText = `${startWidth}%`;
      }
    }
  });
}
setTimeout(loading, 300);
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      console.log(sectionId);
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active");
      if (sectionId === "about") {
      }
    } else {
      // console.log(sectionId);
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
$(".form-contact input,.form-contact textarea").on("input focusin", (e) => {
  $(e.target).parent().addClass("focusIn");
  if ($(e.target).val().trim().length > 0) {
    $(e.target).parent().addClass("valid");
    $(e.target).parent().removeClass("invalid");
  } else {
    $(e.target).parent().addClass("invalid");
    $(e.target).parent().removeClass("valid");
  }
});

$(".form-contact input,.form-contact textarea").on("focusout", (e) => {
  $(e.target).parent().removeClass("focusIn");
});

window.addEventListener("scroll", scrollActive);
var typed = new Typed(".type-text", {
  strings: [
    "A backend Developer",
    "An Android developer",
    "A Full-Stack Developer",
  ],
  smartBackspace: true,
  startDelay: 1000,
  typeSpeed: 130,
  backDelay: 1000,
  backSpeed: 60,
  loop: true,
});

// form email
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  console.log("it was here");
  event.preventDefault();
  var status = document.getElementById("alert");
  console.log("it was here3");
  var data = new FormData(event.target);
  console.log("it was here4");
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log("it was here5");
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        document.querySelector(".alert_style").style.display = "block";
        setTimeout(function () {
          document.querySelector(".alert_style").style.display = "none";
        }, 4000);
        form.reset();
      }
    })
    .catch((error) => {
      console.log(error);
      status.innerHTML = "Oops! There was a problem submitting your form";
      document.querySelector(".alert_style").style.display = "block";
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);
