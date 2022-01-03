function name() {
    const helloBlock = document.getElementById('name-block');
    let count = 0;

    helloBlock.style.display = 'flex';
    const firstEl = document.createElement('span');
    firstEl.innerHTML = 'Наст';
    helloBlock.append(firstEl);
    let timerId = setInterval(function() {
        if (count < 10) {
            const secondEl = document.createElement('span');
            secondEl.innerHTML = 'ю';
            helloBlock.append(secondEl);
            count++;
        } else if (count === 10) {
            const thirdEl = document.createElement('span');
            thirdEl.innerHTML = 'х';
            helloBlock.append(thirdEl);
            count++;
        }
    }, 100);
    setTimeout(function() {
        clearInterval(timerId);
        helloBlock.style.display = 'none';
    }, 3000);
}

function animation() {
    name();

    const hello = document.getElementById('hello');
    const cat = document.getElementById('cat');
    const question = document.getElementById('question');
    const why = document.getElementById('why');
    const sadness = document.getElementById('sadness');
    const worry = document.getElementById('worry');
    const worry2 = document.getElementById('worry2');
    const what = document.getElementById('what');
    const ifBlock = document.getElementById('if');
    const honestly = document.getElementById('honestly');
    const tell = document.getElementById('tell');
    const tell2 = document.getElementById('tell2');
    const btns = document.getElementById('btns');

    timeoutAnimation(hello, 3500, 5500);
    timeoutAnimation(cat, 6000, 8000);
    timeoutAnimation(question, 8500, 11500);
    timeoutAnimation(why, 12000, 17000);
    timeoutAnimation(sadness, 17500, 23500);
    timeoutAnimation(worry, 18500, 22500);
    timeoutAnimation(worry2, 20500, 22500);
    timeoutAnimation(what, 23000, 25000);
    timeoutAnimation(ifBlock, 25500, 29500);
    timeoutAnimation(honestly, 30000, 34000);
    timeoutAnimation(tell, 34500, 38500);
    timeoutAnimation(tell2, 39000, 43000);

    setTimeout(() => {
        const btns = document.createElement('div');
        btns.classList.add('btns');
        const ok = document.createElement('button');
        ok.innerHTML = 'Хорошо, я всё объясню';
        ok.classList.add('ok');
        const no = document.createElement('button');
        no.classList.add('no');
        no.innerHTML = 'Я вонючка и ничего объяснять не буду';
        ok.addEventListener('click', () => {
            btns.style.display = 'none';
            const answerOk = document.getElementById('answer-ok');
            answerOk.style.display = 'flex';
        });
        no.addEventListener('click', () => {
            btns.style.display = 'none';
            const answerNo = document.getElementById('answer-no');
            answerNo.style.display = 'flex';
        });
        btns.append(ok);
        btns.append(no);
        const wrapper = document.getElementById('wrapper');
        wrapper.append(btns);
    }, 43500);
}

function timeoutAnimation(el, time1, time2) {
    setTimeout(() => {
        el.style.display = 'flex';
    }, time1);
    setTimeout(() => {
        el.style.display = 'none';
    }, time2);
}

animation();