function emailSend() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password"
    })
}