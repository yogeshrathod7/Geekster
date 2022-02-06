var s = "abc";
var indices = [0,1,2];
var restoreString = function(s, indices) {
    return [...Array(s.length)].map((el,index, array) => s[indices.indexOf(index)] ).join('')
};

