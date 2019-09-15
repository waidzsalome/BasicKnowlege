// 非立即执行版： 出发事件后函数不会立即执行，而是在n秒后时候执行如果n秒内又触发了时间，则会重新计算函数执行时间。
function debounceOne (func, wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            func.apply(context, args)
        },wait)
    }
}

// 立即执行版： 触发后函数立即执行，n秒内不触发事件才能继续执行。
function debounceTwo(func,wait) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        let callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null;
        }, wait);

        if (callNow) func.apply(context, args)
    }
}


//时间戳版
function throttleOne(func, wait) {
    let previous = 0;
    return function() {
        let now = Date.now();
        let context = this;
        if (now - previous > wait) {
            func.apply(context, arguments); //????????????????
            previous = now;
        }
    }
}
//定时器版
function throttleTwo(func, wait) {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}


