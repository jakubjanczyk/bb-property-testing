const contains = function(pattern, text) {
    // return text.substr(1).indexOf(pattern) !== -1;
    return text.indexOf(pattern) !== -1;
};

module.exports = { contains };