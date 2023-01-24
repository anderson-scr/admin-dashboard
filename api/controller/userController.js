exports.login = async (req, res, _next) => {
  if (Object.keys(req.body)[0] != "username" || Object.keys(req.body)[1] != "password")
		return res.status(400).json({ success: false, msg: "Bad request. Please check the request structure." });

  // console.log(Object.keys(req.body));  
  const username = req.body.username;
  const password = req.body.password;

  if(__atWork) {
    if(username == "Anderson" && password == "2818") {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, msg: "Invalid email/password." });
    }
  }
};

exports.all = (req, res, _next) => {
  res.send("Called the all users route");
};