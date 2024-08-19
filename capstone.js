class PageHeader1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header class="header1">
        <div class="header1-logo">
            <span class="logo"><img src="logo.png" alt="website logo"></span>
            <form id="search">
                <input type="search" class="item-search" placeholder="Product name, Category name , etc">
                <button type="submit" class="item-search-button">Search</button>
            </form>
            <div id="search1">
                <a href="login.html" class="item-login">Login</a>
                <a href="cart.html"><i class="fa-solid fa-cart-shopping " id="i-login"></i></a>
            </div>
        </div>
        <span id="icon" onclick="myFunction(),myFunction1()">
            <i class=" fas fa-bars"></i>
        </span>
    </header>`
    }
}

class PageHeader2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="header2-nav" id="header2" >
    <ul class="nav nav-pills header2-ul">
        <li class="nav-item"><a href="homepage.html" class="nav-link header2-a ">Home</a></li>
        <li class="nav-item"><a href="allproduct.html" class="nav-link header2-a ">All Products</a></li>
        <li class="nav-item dropdown"><a href="#" class="nav-link dropdown-toggle header2-a " data-toggle="dropdown"
                data-bs-toggle="dropdown">Women</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a href="women.html" class="dropdown-item">All Products</a>
                <a href="womendress.html" class="dropdown-item">Dresses</a>
                <a href="womenpants.html" class="dropdown-item">Pants</a>
                <a href="womenskirt.html" class="dropdown-item">Skirts</a>
            </div>
        </li>
        <li class="nav-item dropdown"><a href="" class="nav-link dropdown-toggle header2-a " data-toggle="dropdown"
                data-bs-toggle="dropdown">Men</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a href="men.html" class="dropdown-item">All Products</a>
                <a href="menshirts.html" class="dropdown-item">Shirts</a>
                <a href="menpants.html" class="dropdown-item">Pants</a>
                <a href="menhoodies.html" class="dropdown-item">Hoodies</a>
            </div>
        </li>
        <li class="nav-item"><a href="kid.html" class="nav-link header2-a ">Kid</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link header2-a ">Contact Us</a></li>
    </ul>
</nav>`
    }
}

class PageFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="footer-parent" >
            <div class="footer-child">
                <div >
                    <ol class="footer-ol">
                        <li><h1><a class="footer-a" href="women.html" >Women</a></h1></li>
                        <li><a class="footer-a" href="womendress.html" >Dresses</a></li>
                        <li><a class="footer-a" href="womenpants.html" >Pants</a></li>
                        <li><a class="footer-a" href="womenskirt.html" >Skirts</a></li>
                    </ol>
                </div>
                <div >
                    <ol class="footer-ol">
                        <li><h1><a class="footer-a" href="men.html">Men</a></h1></li>
                        <li><a class="footer-a" href="menshirts.html">Shirt</a></li>
                        <li><a class="footer-a" href="menpants.html">Pants</a></li>
                        <li><a class="footer-a" href="menhoodies.html">Hoodies</a></li>
                    </ol>
                </div>
                <div >
                    <ol class="footer-ol">
                        <li><h1><a class="footer-a" href="kid.html">Kid</a></h1></li>
                    </ol>
                </div>
                <div >
                    <ol class="footer-ol">
                        <li><h1>Links</h1></li>
                        <li><a class="footer-a" href="homepage.html">Home</a></li>
                        <li><a class="footer-a" href="login.html">Login</a></li>
                        <li><a class="footer-a" href="contact.html">Contact</a></li>
                    </ol>
                </div>
            </div>
            <hr style="background-color:white;">
            <div class="text-center">Copyright &#169; Ecommerce 2023-2024</div>
        </div>`
    }
}
customElements.define('page-header1', PageHeader1)
customElements.define('page-header2', PageHeader2)
customElements.define('page-footer', PageFooter)

let i = Number(document.getElementById("number").value)
function increment() {
    i += 1;
    document.getElementById("number").value = i;
}
function decrement() {
    if (i >= 1) {
        i -= 1;
        document.getElementById("number").value = i;
    } else {
        i = i
    }
}
function checkinput() {
    let emailvalue = document.getElementById("email").value;
    let passvalue = document.getElementById("pass").value;
    const pattern = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
    if (emailvalue.match(pattern) && passvalue !== "") {
        alert("login successful");
    } else {
        alert("Incorrect email or password")
    }
}

function myFunction() {
    var x = document.getElementById('search');
    if (x.style.display !== 'none') {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
  }
function myFunction1(){
    var  y= document.getElementById('search1');
    if (y.style.display !== 'none') {
        y.style.display = "none";
    } else {
        y.style.display = "flex";
    }
}
