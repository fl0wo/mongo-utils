module.exports = {
    createOrder : (orderId)=>{
        var order =  {
            orderId,
            productsIds : [],
            addProduct : (productId,quantity,optionals) => {
                order.productsIds.push({
                    productId,
                    quantity,
                    optionals
                });
                return order;
            },
            addProduct : (productId) => {
                order.productsIds.push({
                    productId,
                    quantity : 1,
                    optionals
                });
                return order;            },
            addProduct : (productId,quantity) => {
                order.productsIds.push({
                    productId,
                    quantity,
                    optionals : []
                });
                return order;            },
            addOptionalToProduct : (productId,optionalId) => {
                order.productsIds.forEach(product => {
                    if(product.productId == productId){
                        product.optionals.push(optionalId);
                    }
                });
                return order;
            },
            finishOrder(){
                return {
                    orderId : order.orderId,
                    productsIds : order.productsIds
                }
            }
        };
        return order;
    }
};