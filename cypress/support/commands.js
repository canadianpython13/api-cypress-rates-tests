

Cypress.Commands.add('calculateRateAvg', (allRecentRates, observationsCount) => {
    let rateSum = 0;
    allRecentRates.forEach(element => {
        rateSum += element;
    })
    let avg = rateSum/observationsCount
    let avgConverted = (avg/10000).toFixed(4)
        return avgConverted
})