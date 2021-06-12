module.exports = {
    sum: (a, b) => {
        let result = a + b;
        if (result == 10 || result == 20 || result == 30) result = 0;
        return result;
    }
}