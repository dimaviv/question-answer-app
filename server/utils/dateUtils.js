const calculateNextUpdateDate = async (lastUpdateDate, days) => {
    const nextUpdateDate = new Date(lastUpdateDate);
    nextUpdateDate.setDate(nextUpdateDate.getDate() + days);

    const formattedNextUpdateDate = `${nextUpdateDate.getFullYear()}-${(nextUpdateDate.getMonth() + 1)
        .toString().padStart(2, '0')}-${nextUpdateDate.getDate().toString().padStart(2, '0')}`;

    return formattedNextUpdateDate; // ex: 2022-05-22
};
const isLaterDate = async (firstDateString, secondDateString) => {
    const firstDate = new Date(firstDateString)
    const secondDate = new Date(secondDateString)
    
    return firstDate > secondDate;
};

module.exports = {
    calculateNextUpdateDate,
    isLaterDate
};
