/*https://www.codewars.com/kata/554a44516729e4d80b000012*/
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0;
    let totalSave = 0;
    let priceOld = startPriceOld;
    let priceNew = startPriceNew;
    let loosePercent = percentLossByMonth;

    while ((priceOld + totalSave) < priceNew) {
        months += 1;
        months % 2 === 0 ? loosePercent += 0.5 : null;

        totalSave += savingperMonth;
        priceOld -= priceOld * (loosePercent / 100);
        priceNew -= priceNew * (loosePercent / 100)
    }
    return [months, Math.round(totalSave + priceOld - priceNew)]
}
