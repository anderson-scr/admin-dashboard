exports.login = async (req, res, _next) => {
  if (Object.keys(req.body)[0] != "userName" || Object.keys(req.body)[1] != "password")
		return res.status(400).json({ success: false, msg: "Bad request. Please check the request structure." });

  const username = req.body.userName;
  const password = req.body.password;

  const usersData = require("../data/usersMockData.json");
  let validLogin = false;
  
  usersData.find(user => {
    if(user.username == username && user._password == password) validLogin = true;
  });
  validLogin ? 
    res.status(200).json({ success: true }) 
      : 
    res.status(401).json({ success: false, modalIcon: "warning", modalTitle: "Invalid login.", modalBodyText: "Invalid username or password." });
};

exports.listAll = (req, res, _next) => {
  const mockData = require("../data/usersMockData.json");

  if (!mockData.length)
    return res.status(204).json();
  else
    res.status(200).json(mockData);
};

exports.signUp = (req, res, _next) => {

};