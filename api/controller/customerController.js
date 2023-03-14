exports.listAll = async (req, res, _next) => {
  if(__atWork) {
    const mockData = require("../mock/customersMockData.json");
    if (!mockData.length) 
      return res.status(204).json();
  };
}

exports.monthlyNewCustomers = async (req, res, _next) => {
  if(__atWork) {
    const mockData = require("../mock/customersMockData.json");
    if(!mockData.length) 
      return res.status(204).json();

    const moment = require("moment");
    const currMonth = moment().format("MMM/YYYY");
    let filteredUsers = [];

    // Loop trough the data to find any new customer in current month
    mockData.forEach( user => {
      let userRegisterDate = moment(user.register_date).format("MMM/YYYY");
      if(userRegisterDate == currMonth) {
        filteredUsers.push(user);
      }
    });

    return res.status(200).json({
      monthlyNewCustomers: filteredUsers, 
      monthlyNewCustomersCount: filteredUsers.length
    });
  };
};