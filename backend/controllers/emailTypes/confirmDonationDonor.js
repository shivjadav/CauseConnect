const transporter = require('../../config/emailSender');
const confirmDonationDonor = async (req, res) => {
    try {
        // console.log(req, res);
        const{ cause, description, totalcost, kits, date, donorEmail, ngoEmail }=req;
        const options = {
            from: "Cause Connect",
            to: donorEmail,
            subject: "Donation confirmed",
            text: "hello",
            html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Donation confirmed</title>
  </head>
  <body class="bg-gray-100 text-gray-900">
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <!-- Email Header -->
      <div class="bg-indigo-600 text-white p-6 rounded-t-lg">
        <h1 class="text-3xl font-bold">Donation confirmed</h1>
      </div>
      
      <!-- Email Body -->
      <div class="p-6">
        <p class="text-lg mb-4">
          Dear user,
        </p>
        <p class="mb-4">
          We are very thankful to you as we have received the donation for  <strong>${cause}</strong>. Below are the details provided:
        </p>

        <!-- User Information Block -->
        <div class="bg-gray-50 p-4 rounded-lg shadow border border-gray-200 mb-6">
          <p class="mb-2"><strong>Description:</strong> ${description}</p>
          <p class="mb-2"><strong>Dated for:</strong> ${date}</p>
          <p class="mb-2"><strong>Total cost:</strong> ${totalcost}</p>
          <p class="mb-2"><strong>kits to be delivered:</strong> ${kits}</p>
        </div>

        <!-- Message Block -->
        <div class="mb-4">
          <p class="mb-2"><strong>For further conversation with NGO you may contact them on:</strong></p>
          <div class="bg-gray-100 p-4 rounded-lg border border-gray-300">
            <p>${ngoEmail}</p>
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
module.exports = confirmDonationDonor;
