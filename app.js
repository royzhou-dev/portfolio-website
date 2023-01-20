function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "royzhou01@gmail.com",
        Password: "410B2246954727D88C943B3762F3904FD13F",
        To: 'royzhou01@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Inquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Sucessfully")
    );
}