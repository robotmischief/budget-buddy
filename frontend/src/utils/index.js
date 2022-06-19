const splitAmountByComma = (amount) => {
    const strAmount = amount.toFixed(2).toString();
    return strAmount.split('.');
};

const formatDate = (date) => {
    //date > 2022-06-14T00:05:10.393Z
    //returns < 06-14
    return date.split('T')[0].substring(5,10);
};

const getCategoryLabel = (id) => {
    const categories = {
        1: 'SALARY',
        2: 'FOOD',
        3: 'OTHER'
    };

    return categories[id];
};

const calcTotalByType = (category, records) => {
    if (records) {
        const categoryFiltered = records.filter((record)=>record.type_id === category);
        if (categoryFiltered.length > 0) {
            return categoryFiltered.reduce((total, record) => (total += record.amount), 0);
         }
    }
    return 0.0;
};

const calcBalanceTotal = (earntTotal, spentTotal) => {
    const balanceTotal = Math.abs(earntTotal - spentTotal);
    const grandtotalColor = (earntTotal >= spentTotal) ? 'earnt' : 'spent';
    const opositeGrandTotalColor = (grandtotalColor === 'earnt') ? 'spent' : 'earnt';
    const graphBarPercentage = (earntTotal <= spentTotal) ? parseInt((earntTotal * 100 / spentTotal)) : parseInt((spentTotal * 100 / earntTotal));
    return {balanceTotal, grandtotalColor, opositeGrandTotalColor, graphBarPercentage};
};

const calcDescription = (description, windowWidth) => {
    console.log('SW', windowWidth);
    console.log('DESC', description);
    const descriptionTruncated = (windowWidth < 400)
    ? description.substring(0,3)  + '...'
    : description;

    return descriptionTruncated;    
};

module.exports = { splitAmountByComma, formatDate, getCategoryLabel, calcTotalByType, calcBalanceTotal, calcDescription };