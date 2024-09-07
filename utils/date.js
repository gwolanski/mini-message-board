const getFormattedDate = () => {
    const today = new Date();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return today.toLocaleString("en-US", options);
};

module.exports = getFormattedDate;