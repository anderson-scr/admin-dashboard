exports.login = async (req, res, _next) => {
  // This is because when im at work, i cannot access my DB. So i use this mock response from the API.
  if(Global.__atWord) {

  }
  if (!Object.keys(req.body).length)
		return res.status(400).json({ success: false, msg: "Bad request. Please, check the request structure" });

    const username = req.body.username;
    const password = req.body.password;

    if(username == "Anderson" && password == "2818") 
      res.status(200).json({ success: true });
};

exports.all = (req, res, _next) => {
  res.send("Called the all users route");
};