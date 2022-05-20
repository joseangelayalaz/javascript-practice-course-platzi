// Code of price and discounts

// formula for discounts
function discountPrice(price, discount){
    return [price * (100 - discount)] / 100;
}


// Conecting our discount to our HTML
function calculatePriceAndDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const price = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount");
    const discountWrite = Number(InputDiscount.value);

    const InputCupon = document.getElementById("InputCupon");
    const CuponValue = InputCupon.value;

    const cupons = [
        {nombre: "Beast" , descuento: 60},
        {nombre: "BeastMan" , descuento: 50},
        {nombre: "IronBeast" , descuento: 40},
        {nombre: "HeroBeast" , descuento: 30},
        {nombre: "DarkBeast" , descuento: 20},
    ];
    
    const isCuponValueValid = function(cupon){
        return cupon.nombre === CuponValue;
    };
    
    const userCupon = cupons.find(isCuponValueValid);
    
    if (!userCupon) {
        alert("The cupon " + CuponValue + " is not valid");
    } 
    
    else {
        const discountCupon = Number(userCupon.descuento);
        const discount = discountCupon + discountWrite;

        const priceAndDiscount = discountPrice(price, discount);
        const resultDiscount = document.getElementById("resultDiscount");

        resultDiscount.innerText = "The cost is $" + priceAndDiscount;
    }

}

// cupons



