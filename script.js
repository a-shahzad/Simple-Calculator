function insert(num) {
    document.form1.screen.value = document.form1.screen.value + num;
}

function equal() {
    var equ = document.form1.screen.value;
    if(equ) {
        document.form1.screen.value = eval(equ)
    }
}

function backspace() {
    var equ = document.form1.screen.value;
    document.form1.screen.value = equ.substring(0, equ.length - 1);
    }