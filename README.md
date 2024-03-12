# Email Server

This project is a simple email server that can send and receive emails. It is written in Nodejs and uses the `nodemailer` and `express` libraries to send email to user by taking advantage of Gmail SMTP Server.

### Reference link

[W3School Node.js Email tutorial](https://www.w3schools.com/nodejs/nodejs_email.asp)

### How to run

1. Install dependencies

```bash
npm install
```

2. Set environment variables. Copy .env.example to .env and set the following variables:

```bash
PORT= 8080
EMAIL_USER= # origin email
EMAIL_PASS= # origin app password
```

3. Run the server

```bash
npm run start
```

4. Send email. Modify the emailTo(not inclusive to gmail only), subject, text and html in the following curl command and run it in terminal or use a postman if you are a beginner.

```bash
curl --location 'http://localhost:8080/api/email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "emailTo": "mishu@gmail.com",
    "subject": "Postman Params",
    "text": "Postman modified this text for email",
    "html" : "<h1>The Start Up</h1><p>by Harith Iqbal</p>"
}'
```

### How to get App Password

1. Go to your Google Account.
2. On the left navigation panel, click Security.
3. Under "Signing in to Google," click 2-Step Verification and then get started.
4. After enabling 2-Step Verification, go back to the Security page.
5. Under "Signing in to Google," click App Passwords.
6. At the bottom, click Select app and choose the app you using, then click Select device and choose the device you’re using, and then click Generate.
7. Copy the app password and paste it in .env file.
