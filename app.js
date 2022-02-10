const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-Links');
    const navLinks = document.querySelectorAll('.nav-Links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;

            }
        });

        burger.classList.toggle('toggle');
    });


}

navSlide();


let cart = document.querySelectorAll('.add-cart-btn');

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers();
    });
}


function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.zero11').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.zero11').textContent = 1;
    }

}


function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
   
    const sumvalue = parseInt(totalClicks.innerText) + click;
    totalClicks.innerText = sumvalue;
    console.log()
    if(sumvalue < 0) {
        totalClicks.innerText = 0;
    };
     
    

}

totalClick(click); 

