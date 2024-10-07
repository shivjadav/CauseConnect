const transporter = require('../../config/emailSender');
const sendBirthdayEmail = async (email, name) => {
    try {
        // console.log(req, res);
        const options = {
            from: "Cause Connect",
            to: email,
            subject: "Lighten up your birthday",
            text: "hello",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Lighten up your birthday</title>
  </head>
  <body class="bg-gray-100 text-gray-900">
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <!-- Email Header -->
      <div class="bg-indigo-600 text-white p-6 rounded-t-lg">
        <h1 class="text-3xl font-bold">Lighten up your birthday</h1>
      </div>
      
      <!-- Email Body -->
      <div class="p-6">
        <p class="text-lg mb-4">
          Dear ${name},
        </p>
        <p class="mb-4">
          Preparing for your next birthday? ... here's how you can bright up things to others.
        </p>
        <!-- Message Block -->
        <div class="mb-4">
          <p class="mb-2">Donate money to those who are in need. here's what we offer as options to donate: </p>
          <div class="bg-gray-100 p-4 rounded-lg border border-gray-300">
            <p>Donate to orphanage help children to get nourished</p>
            <p>Donate to old age home so they can get the required medication</p>
            <p>Help to clean rivers contribute to nature</p>
            <p>Help to plant trees , save environment</p>
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

    } 
    catch (e) {
        console.log(e);
        return res.status(400).json({ "msg": "Internal error" });
    }
};
module.exports = sendBirthdayEmail;
