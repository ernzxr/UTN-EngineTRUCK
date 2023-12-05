const capitalizeFirstLetters = (str) => {
    return str.replace(/(?:^|\s)\S/g, function(letter) {
        return letter.toUpperCase();
    });
}

module.exports = capitalizeFirstLetters;