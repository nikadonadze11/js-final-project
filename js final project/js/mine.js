let dropdownbtn = document.querySelector('.current1');
let dropcontent = document.querySelector('.droplist1');
let alllists = document.querySelectorAll('.droplist1 li');

dropdownbtn.addEventListener('click', function () {
    dropcontent.classList.toggle('show1')
})

for (const x of alllists) {
    x.addEventListener('click', function () {
        let litext = this.innerText;
        dropdownbtn.innerText = litext;
        dropcontent.classList.remove('show1')
    })
}



let dropdownbtn2 = document.querySelector('.current2');
let dropcontent2 = document.querySelector('.droplist2');
let alllists2 = document.querySelectorAll('.droplist2 li');

dropdownbtn2.addEventListener('click', function () {
    dropcontent2.classList.toggle('show2')
})

for (const y of alllists2) {
    y.addEventListener('click', function () {
        let litext2 = this.innerText;
        dropdownbtn2.innerText = litext2;
        dropcontent2.classList.remove('show2')
    })
}



let dropdownbtn3 = document.querySelector('.current3');
let dropcontent3 = document.querySelector('.droplist3');
let alllists3 = document.querySelectorAll('.droplist3 li');

dropdownbtn3.addEventListener('click', function () {
    dropcontent3.classList.toggle('show3')
})

for (const z of alllists3) {
    z.addEventListener('click', function () {
        let litext3 = this.innerText;
        dropdownbtn3.innerText = litext3;
        dropcontent3.classList.remove('show3')
    })
}

let mydropdown4 = document.querySelector('.mydropdown4');
let dropdownbtn4 = document.querySelector('.current4');
let dropcontent4 = document.querySelector('.droplist4');
let alllists4 = document.querySelectorAll('.droplist4 li');

dropdownbtn4.addEventListener('click', function () {
    dropcontent4.classList.toggle('show4');
    mydropdown4.classList.toggle('color4');
})

for (const c of alllists4) {
    c.addEventListener('click', function () {
        let litext4 = this.innerText;
        dropdownbtn4.innerText = litext4;
        dropcontent4.classList.remove('show4')
        mydropdown4.classList.remove('color4');
    })
}
