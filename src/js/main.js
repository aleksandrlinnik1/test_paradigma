const findEl = (sel, parent) =>(parent || document).querySelector(sel);

overlay = findEl('.overlay');
cardClientBtn = findEl('.main__button-value');
cardCloseBtn = findEl('.close');
popCloseBtn = findEl('.close-popap');
popUp = findEl('.popap');
burgerBtn = findEl('.burger');
modalBtn = findEl('.modal__btn');
headerBtn = findEl('.header__button');
mobMenu = findEl('.mob__menu');
closeBurger = findEl('.close-burger');


headerBtn.addEventListener('click', displayBlock);
cardClientBtn.addEventListener('click', displayBlock);
cardCloseBtn.addEventListener('click', displayNone);
burgerBtn.addEventListener('click', burgMenuOn);
modalBtn.addEventListener('click', displayNone);
modalBtn.addEventListener('click', opacity1);
popCloseBtn.addEventListener('click', opacity0);
closeBurger.addEventListener('click', burgMenuOf);


function displayBlock() {
    overlay.classList.remove('not-view');
    overlay.classList.add('view')
    };
function displayNone() {
    overlay.classList.remove('view')
    overlay.classList.add('not-view');    
    };
function opacity1() {
        popUp.style.opacity = '1';
    };
function opacity0() {
        popUp.style.opacity = '0';
    };
function burgMenuOn() {
        mobMenu.style.left = '0';
    };  
function burgMenuOf() {
        mobMenu.style.left = '-999rem';
    }; 

// custom select

let select = function () {
    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.custom-select-wrap'),
            currentText = select.querySelector('.select-current');
            currentText.innerText = text;
            select.classList.remove('is-active');

    }
};
select();
