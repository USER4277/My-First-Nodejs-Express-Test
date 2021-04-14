var fortunes = [
    "征服恐惧或者被恐惧征服",
    "河流需要春天",
    "不要畏惧未知",
    "你终将获得快乐的结局",
    "无论如何，保持简单"
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};