function calculateSalesTax(allSales, allTaxes) {
  var results = {};
  //for each transaction in the list of sales
  for (var i = 0; i < allSales.length; i++) {
    var transaction = allSales[i];
    var current_total_sales = transaction.sales.reduce(function(sum, current) {
      return sum + current;
    }, 0);

    // Calculate tax
    var tax_rate = allTaxes[transaction.province]; // ex: taxRates['AB']
    var current_total_tax = current_total_sales * tax_rate;

    // check if we have already seen a transaction by this company
    if (results[transaction.name]) {
      //if name is already there add current total sales and current total tax to object
      results[transaction.name]['totalSales'] += current_total_sales;
      results[transaction.name]['totalSales'] += current_total_tax;
    } else {
      // if name is new make a new object
      results[transaction.name] = {
      'totalSales': current_total_sales,
      'totalTax': current_total_tax
      };
    }
  }
  // TODO: return final object
  return results;
}

var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, taxRates))