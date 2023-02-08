exports.listAll = async (req, res, _next) => {
  if(__atWork) {
    const mockData = require("../mock/customersMockData.json");

    if (!mockData.length)
      return res.status(204).json();
    else
      res.status(200).json(mockData);
  };
}