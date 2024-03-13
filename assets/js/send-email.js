function sendEmail() {
    let params = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_ydzzprr", "template_fv8zhwj", params).then(alert("Message sent!"))
}