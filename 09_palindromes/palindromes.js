const palindromes = function (string) {
    const text = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
        text.split("")
            .reverse()
            .join("") === text
    );
};

// Do not edit below this line
module.exports = palindromes;
