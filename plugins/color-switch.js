var randomColor = '';
var elements = '';

var colorswitch = {
    type: 'call-function',
    func: function () {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor = '#' + randomColor
        elements = document.getElementsByTagName('strong');
        for (var i in elements) {
            //if (elements.hasOwnProperty(i)) {
                elements[i].style.color = setColor;
            //}
        }
    }
};
