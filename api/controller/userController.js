exports.login = (req, res, _next) => {
  if (!Object.keys(req.body).length)
		return res.status(400).json({ success: false, msg: "Bad request. Please, check the request structure" });

    const username = req.body.username;
    const password = req.body.password;

    if(username == "Anderson" && password == "2818") 
      res.status(200).json({ success: true });
}