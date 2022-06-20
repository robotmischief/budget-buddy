// spliting decimals from integer
// to <span> them and CSS style font-sizes
// returns an array >> idx 0 integer
const splitAmountByComma = (amount) => {
    const strAmount = amount.toFixed(2).toString();
    return strAmount.split('.');
};

// format the UTC date stored in the db
// into a shorter display MM-DD
// returns a String
const formatDate = (date) => {
    //date > 2022-06-14T00:05:10.393Z
    //returns < 06-14
    return date.split('T')[0].substring(5,10);
};

// momentary workaround until
// category feature is added
// returns a string name-label
// from the table id
const getCategoryLabel = (id) => {
    const categories = {
        1: 'SALARY',
        2: 'FOOD',
        3: 'OTHER'
    };

    return categories[id];
};

// calculate the total amount of a specific category (1: earnt || 2: spent)
// reduces filtered records
// returns number
const calcTotalByType = (category, records) => {
    if (records) {
        const categoryFiltered = records.filter((record)=>record.type_id === category);
        if (categoryFiltered.length > 0) {
            return categoryFiltered.reduce((total, record) => (total += record.amount), 0);
         }
    }
    return 0.0;
};

// calculates the balance total (absolute total, no negative number)
// asigns color for the larger and shorter bar on the BalanceCard's graph
const calcBalanceTotal = (earntTotal, spentTotal) => {
    const balanceTotal = Math.abs(earntTotal - spentTotal);
    const grandtotalColor = (earntTotal >= spentTotal) ? 'earnt' : 'spent';
    const opositeGrandTotalColor = (grandtotalColor === 'earnt') ? 'spent' : 'earnt';
    const graphBarPercentage = (earntTotal <= spentTotal) ? parseInt((earntTotal * 100 / spentTotal)) : parseInt((spentTotal * 100 / earntTotal));
    return {balanceTotal, grandtotalColor, opositeGrandTotalColor, graphBarPercentage};
};

// formats the description text on the RecordItem component
// if the App runs on a shorter screen
// returns a substring of the original description
const calcDescription = (description, windowWidth) => {
    const descriptionTruncated = (windowWidth < 400)
    ? description.substring(0,3)  + '...'
    : description;

    return descriptionTruncated;    
};

module.exports = { splitAmountByComma, formatDate, getCategoryLabel, calcTotalByType, calcBalanceTotal, calcDescription };