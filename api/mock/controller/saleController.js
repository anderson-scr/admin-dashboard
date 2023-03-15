const moment = require("moment");

//#region Route Calls
exports.listAll = (req, res, _next) => {
  
};

exports.saleValues = (req, res, _next) => {
  try {
    const mockData = require("../data/salesMockData.json");
    const saleValues = {
      todaySales: 0.0,
      monthlySales: 0.0,
      yearSales: 0.0,
      totalSales: 0.0
    }
    const currDate = moment().format("DD/MMM/YYYY");

    mockData.forEach(sale => {
      compareSaleDateToCurrentDate(sale, currDate, saleValues);
    });

    res.status(200).json({ saleValues });
  }
  catch(err) {
    console.log(err.message);
  }
};
//#endregion


//#region Functions
const compareSaleDateToCurrentDate = (sale, currDate, saleValues) => {
  const saleDate = moment(sale.sale_date).format("DD/MMM/YYYY");

  if(saleDate == currDate) {
    calculateDaySalesValue(sale, saleValues);
  }
  else if(moment(saleDate).month() == moment(currDate).month() && moment(saleDate).year() == moment(currDate).year()) {
    calculateMonthlySalesValue(sale, saleValues);
  }
  else if(moment(saleDate).year() == moment(currDate).year()) {
    calculateYearSalesValue(sale, saleValues);
  }
  calculateTotalSalesValue(sale, saleValues);
};

const calculateDaySalesValue = (sale, saleValues) => {
  saleValues.todaySales += Math.round(parseFloat((sale.value).slice(1)) * 100) / 100;
};

const calculateMonthlySalesValue = (sale, saleValues) => {
  saleValues.monthlySales += Math.round(parseFloat((sale.value).slice(1)) * 100) / 100;
};

const calculateYearSalesValue = (sale, saleValues) => {
  saleValues.yearSales += Math.round(parseFloat((sale.value).slice(1)) * 100) / 100;
};

const calculateTotalSalesValue = (sale, saleValues) => {
  saleValues.totalSales += Math.round(parseFloat((sale.value).slice(1)) * 100) / 100;
};
//#endregion