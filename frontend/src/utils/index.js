const splitAmountByComma = (amount) => {
    const strAmount = amount.toFixed(2);
    return strAmount.split('.');
}

const formatDate = (date) => {
    //date > 2022-06-14T00:05:10.393Z
    return date.split('T')[0];
}

const getCategoryLabel = (id) => {
    const categories = {
        1: 'SALARY',
        2: 'FOOD',
        3: 'OTHER'
    };

    return categories[id];
    
}

module.exports = { splitAmountByComma, formatDate, getCategoryLabel };