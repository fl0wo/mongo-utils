module.exports = { 
    all_products : () => { return {} } ,
    products_by_name : target => {return {name : target} } ,
    products_by_type : target => {return {type : target} } ,
    products_by_price_range : (min_price,max_price) => { return { $and : [{price : { $gt : min_price } }, {price : { $lt : max_price } }] } },
    users_by_code : target => { return { code : target} },
    product_by_code: target => { return { code : target }}
};