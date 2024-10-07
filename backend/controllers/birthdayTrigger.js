const user = require('../models/user');
const moment = require('moment')
const sendBirthdayEmail=require('../controllers/emailTypes/birthdayEmails')
const checkBirthdays = async () => {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  today.setDate(today.getDate()+6)
  // Create month-day format for today and next week
  const todayMonthDay = moment(today).format('MM-DD');
  const nextWeekMonthDay = moment(nextWeek).format('MM-DD');

  // Fetch users with matching month and day
  const clients = await user.aggregate([
    {
      $addFields: {
        monthDay: { $dateToString: { format: "%m-%d", date: "$dob" } }
      }
    },
    {
      $match: {
        monthDay: { $gte: todayMonthDay, $lte: nextWeekMonthDay }
      }
    }
  ]);

  // Send birthday emails
  clients.forEach(async client => {
    console.log("A client found with upcoming birthday");
    await sendBirthdayEmail(client.email, client.username);
  });
};
module.exports =  {checkBirthdays} ;