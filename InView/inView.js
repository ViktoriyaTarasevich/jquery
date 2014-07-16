$.expr[':'].inView = function (obj) {
    var elementArea = obj.getBoundingClientRect();
    var isInView =
        elementArea.top >= 0 &&
        elementArea.bottom <= document.documentElement.clientHeight &&
        elementArea.left >= 0 &&
        elementArea.right <= document.documentElement.clientWidth;
    return isInView;
};
