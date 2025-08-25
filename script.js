let role="user";
let subscription = "pro";
let productStatus ="sale";

if(role==="admin"){
    console.log(" Полный доступ");
} else if(role==="user"){
    console.log("Ограниченный доступ");
} else if(role==="guest" ){
    console.log("Только просмотр")
}else {
    console.log("Неизвестный пользователь");
}


switch(subscription){
    case "free":
        console.log("Минимум функций");
    break;
    case "pro":
        console.log("Полный доступ");
    break;
    case "enterprise":
        console.log("VIP-поддержка");
    break;
    default:
        console.log("Неизвестный тариф");
}

if (productStatus ==="available" && (subscription==="pro"|| subscription==="enterprise")){
    console.log("Можно заказать");
}else if(productStatus==="sale" && (role==="user"||role==="guest")){
    console.log("Доступна акция");
}else if(productStatus==="out-of-stock"){
    console.log("Товар недоступен");

}