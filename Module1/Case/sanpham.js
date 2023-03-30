class Product {
    name;
    companyName;
    price;
    img;

    constructor(img, companyName, name, price) {
        this.img = img;
        this.companyName = companyName;
        this.name = name
        this.price = price;

    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getCompanyName() {
        return this.companyName
    }

    setCompanyName(companyName) {
        this.companyName = companyName
    }

    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price
    }

    getImg() {
        return this.img
    }

    setImg(img) {
        this.img = img
    }
}

let arrProduct = [];
let demo;
let product1 = new Product("Marie-Jeanne-Vetiver-Santal-300x300.png", "Marie Jeanne", "Vetiver Santal", "5100000");
let product2 = new Product("Nuoc-hoa-Creed-Aventus-300x300.png", "Creed", "Aventus", "7900000");
let product3 = new Product("Orto-Parisi-Megamare-1-300x300.png", "Orto Parisi", "Orto Parisi Megamare", "5300000 ");
let product4 = new Product("ysl-300x300.png", "Yves Saint Laurent", "Y EDP", "3350000");
let product5 = new Product("Kilian-Angels-Share-300x300.png", "By Kilian", "Angels’ Share", "4800000 ");
let product6 = new Product("Gio-trắng-300x300.png", "Giorgio Armani", "Acqua Di Gio Pour Homme", "2500000 ");
let product7 = new Product("Nuoc-hoa-Dior-Sauvage-EDT-300x300.png", "Dior", "Sauvage EDT", "3150000 ");
let product8 = new Product("Nuoc-hoa-Roja-Enigma-Parfum-Cologne-300x300.png", "Roja Parfum", "Enigma Parfum Cologne", "6950000 ");
let product9 = new Product("LOrchestre-Piano-Santal-300x300.png", "L'Orchestre Parfum", "Piano Santal", "4800000 ");
arrProduct.push(product1, product2, product3, product4, product5, product6, product7, product8, product9);

function product() {
    let data = "<table style='text-align: center;margin-left: 200px ' > ";
    data += "<tr>";
    let login = window.localStorage.getItem("ok")
    for (let i = 0; i < arrProduct.length; i++) {
        if (i % 5 === 0) {
            data += "<tr></tr>"
        }
        data += `<td><div> <img width="150" height="150" src="${arrProduct[i].img}"/>  <br>  ${arrProduct[i].name} <hr>
         <br> ${arrProduct[i].companyName} <br> ${arrProduct[i].price + "đ"} </div> <br> <br>
         <div>`
        if (login === "true") {
            data += ` <button onclick='deleteProduct(` + i + `)' >Delete</button>  
            <button onclick='editProduct(` + i + `)' >Edit</button> <br> <br> `
        }
        data += `<button onclick='clickbuy(` + i + `)'>Thêm vào giỏ hàng </button></td>
    </div>`
    }
    data += "</tr>";
    data += "</table>";

    document.getElementById("product").innerHTML = data;
}

function addProduct() {
    let product1 = new Product(
        document.getElementById("img").value,
        document.getElementById("name").value,
        document.getElementById("companyname").value,
        document.getElementById("price").value
    )
    arrProduct.push(product1)
    product()
}


function editProduct(index) {
    document.getElementById("img").value = arrProduct[index].img
    document.getElementById("name").value = arrProduct[index].name
    document.getElementById("companyname").value = arrProduct[index].companyName
    document.getElementById("price").value = arrProduct[index].price
    demo = index
}

function editProduct2() {
    arrProduct[demo].img = document.getElementById("img").value
    arrProduct[demo].companyName = document.getElementById("companyname").value
    arrProduct[demo].name = document.getElementById("name").value
    arrProduct[demo].price = document.getElementById("price").value
    product();
}

function deleteProduct(index) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: ?")) {
        arrProduct.splice(index, 1)
        product();
    }

}

function searchProduct() {
    let searchInput = document.getElementById('search');
    let filterValue = searchInput.value.toUpperCase();
    let filteredProduct = arrProduct.filter(product => {
        return product.name.toUpperCase().includes(filterValue);
    });
    let data = "<table style='text-align: center;margin-left: 200px ' > ";
    data += "<tr>";
    for (let i = 0; i < filteredProduct.length; i++) {
        if (i % 5 === 0) {
            data += "<tr></tr>"
        }
        data += `<td><div> <img width="150" height="150" src="${filteredProduct[i].img}"/> 
          <br>  ${filteredProduct[i].name} <hr>
          <br> ${filteredProduct[i].companyName} <br> ${filteredProduct[i].price} </div> <br> <br>
          <button onclick='deleteProduct(` + i + `)'>Delete</button> <br> <br> 
          <button onclick='addProduct(` + i + ` )'>Edit</button></td>`;
    }
    data += "</tr>";
    data += "</table>";
    document.getElementById("product").innerHTML = data;
}

function showAdd() {
    let hienNut = window.localStorage.getItem("ok")
    if (hienNut === "true") {
        document.getElementById("showadd").style.display = "block"
    }
}

function login() {
    location.href = "Account_dang_nhap.html"
}

function logout() {
    window.localStorage.setItem("ok", false);
    alert("Đã dăng xuất");
    product();
}

function regester() {
    location.href = "Account_dang_ki.html"
}

let cart = [];

function clickbuy(index) {
    cart.push(arrProduct[index]);
    alert("Thêm giỏ hàng thành công");
}

function buy() {
    let sum = 0
    let buy = "<table style='text-align: center;'> ";
    buy += "<tr>";
    for (let i = 0; i < cart.length; i++) {
        buy += `<td><div> <img width="150" height="150" src="${cart[i].img}"/> 
          <br>  ${cart[i].name} <hr>
          <br> ${cart[i].companyName} <br> ${cart[i].price} </div>
           <button onclick='deleteInCart(` + i + ` )'>X</button></td>`

        buy += "<tr></tr>";
        sum += +cart[i].price;
    }
    buy += "</tr>";
    buy += "</table>";


    buy += "Tổng tiền là : = " + sum + " <button onclick='closeOutCast()'>X</button>"
    document.getElementById("showbuy").style.display = "block";
    document.getElementById("mua").innerHTML = buy;
}

function closeOutCast() {
    document.getElementById("showbuy").style.display = "none";
}

function deleteInCart(index) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: ?")) {
        cart.splice(index, 1)
        buy()
    }
}
