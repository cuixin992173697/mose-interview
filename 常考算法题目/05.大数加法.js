function maxProfit(prices) {
    if (prices.length < 1) {
        return 0;
    }
    let profit = 0,
        initPrice = prices[0];
    for (var i = 0; i < prices.length; i++) {
        initPrice = Math.min(initPrice, prices[i]);
 
        if (i > 0) {
            profit = Math.max(profit, prices[i] - initPrice);
            console.log(profit, initPrice, prices[i] - initPrice);
        }
    }
    return profit;
}