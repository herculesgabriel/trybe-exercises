function getProfit(costPrice, sellingPrice) {
  let textResult = 'O lucro na venda de 1000 unidades do seu produto é: ';

  if (costPrice <= 0 || sellingPrice <= 0) {
    textResult = 'Por favor, digite um valor maior que zero';
    profitHundredProducts = null;
  } else {
    let tax = (costPrice * 20) / 100;
    let totalCost = costPrice + tax;
    let profit = sellingPrice - totalCost;

    let profitHundredProducts = profit * 1000;

    return `${textResult}: ${profitHundredProducts}`;
  }
}