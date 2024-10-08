const transporter = require('../../config/emailSender');
const ContactAdmin = async (req, res) => {
    try {
        const { name, email, phone, age, message } = req.body;
        const options = {
            from: "Cause Connect Support",
            to: "smitdhimar47@gmail.com",
            subject: "Feedback Received",
            text: "hello",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Feedback Received</title>
  </head>
  <body class="bg-gray-100 text-gray-900">
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <!-- Email Header -->
      <div class="bg-indigo-600 text-white p-6 rounded-t-lg">
        <h1 class="text-3xl font-bold">Feedback Received</h1>
        <p class="text-sm mt-2">Cause Connect Team</p>
      </div>
      
      <!-- Email Body -->
      <div class="p-6">
        <p class="text-lg mb-4">
          Dear Admin,
        </p>
        <p class="mb-4">
          We have received feedback from <strong>${name}</strong>. Below are the details provided:
        </p>

        <!-- User Information Block -->
        <div class="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 mb-6">
          <p class="mb-2"><strong>Email:</strong> ${email}</p>
          <p class="mb-2"><strong>Phone:</strong> ${phone}</p>
          <p class="mb-2"><strong>Age:</strong> ${age}</p>
        </div>

        <!-- Message Block -->
        <div class="mb-4">
          <p class="mb-2"><strong>Message:</strong></p>
          <div class="bg-gray-100 p-4 rounded-lg border border-gray-300">
            <p>${message}</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="bg-gray-50 p-6 text-center rounded-b-lg">
        <p class="text-sm text-gray-600">Best Regards,</p>
        <p class="text-sm text-gray-600 font-bold">The Cause Connect Team</p>
      </div>
    </div>
  </body>
</html>`
        };
        const send = await transporter.sendMail(options);
        if (!send) {
            return res.status(400).json({ "msg": "Error in sending mail" });
        }
        return res.status(200).json({ "msg": "Your response has been recorded. We will get in touch with you." });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ "msg": "Internal error" });
    }
};
module.exports = ContactAdmin;
