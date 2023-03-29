class Account {
    id;
    username;
    password;
    email;
    sdt;

    constructor( username, password,) {
        this.username = username;
        this.password = password;
    }

    getId() {
        return this.id
    }
    getUserName(){
        return this.username
    }
    getPassword(){
        return this.password
    }
    getEmail(){
        return this.email
    }
    getSdt(){
        return this.sdt
    }

}
let arr = []
function dangKy() {
    let tk = document.getElementById("tk").value
    let mk = document.getElementById("mk").value
    let account1 = new Account(tk, mk)
    arr.push(account1)
    location.href= "Account_dang_nhap.html"
    window.localStorage.setItem("user",JSON.stringify(arr))
}
function login (){
    let arr1 = JSON.parse(window.localStorage.getItem("user"));
    let user =document.getElementById("user").value
    let pass =document.getElementById("pass").value
   for ( let i = 0 ; i < arr1.length ; i++){
       if (user === arr1[i].username && pass === arr1[i].password){
           localStorage.setItem("ok", true)
           alert("Đã đăng nhập")
           location.href="Case.html"
       }else{
           localStorage.setItem("ok",false)
           alert("Không đúng thông tin đăng nhập")
       }
   }
}

