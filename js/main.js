console.log("work")
// console.log(document.body.style)



// send email
var btn = document.getElementById("submit")
btn.addEventListener("click", function (e) {

    var alt = document.getElementById('alert-mail')
    console.log(alt.style)

    var params = {
        name: document.getElementById("mail_name").value,
        email: document.getElementById("mail_email").value,
        subject: document.getElementById("mail_subject").value,
        message: document.getElementById("mail_text").value
    }

    const serviceID = 'service_6f8b9qe'
    const templateID = 'template_h7pjnsg'


    if (params.name != "" && params.email != "" && params.subject != "" & params.message != "") {
        emailjs.send(serviceID, templateID, params)
            .then(
                res => {
                    document.getElementById("mail_name").value = "";
                    document.getElementById("mail_email").value = "";
                    document.getElementById("mail_subject").value = "";
                    document.getElementById("mail_text").value = "";
                    console.log(res)
                    alt.style.opacity = 0
                    alert("your message send successful")
                }
            ).catch((err) => console.log(err))
    } else {
        alt.style.opacity = 1
    }


})

//change mood
var mood = document.getElementById("mood")

// mood.addEventListener('click', function () {
//     mood.classList.toggle('toggle')
//     document.body.classList.toggle('light-mood-bg')
//     document.body.classList.toggle('light-mood-color')
// })


// arrow
var arrow = document.getElementById('arrow')

arrow.addEventListener("click", function (e) {
    e.preventDefault()
    scroll(0, 0)
})

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 600) {
        arrow.style.visibility = "visible"
    } else {
        arrow.style.visibility = "hidden"
    }
});


//animation behavior
const hiddenElementLeft = document.querySelectorAll('.hidden-left')
const hiddenElementRight = document.querySelectorAll('.hidden-right')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})


hiddenElementLeft.forEach((el) => observer.observe(el))
hiddenElementRight.forEach((el) => observer.observe(el))