module.exports = {
    insertUser : (email,name,code,imageUrl) => { 
        return {
            name ,
            email ,
            money : 0,
            orders : [],
            imageUrl: imageUrl,
            code
        };
    },
    insertProduct : (type,name,price,code) => {
        return {
            name,
            price,
            type,
            code,
            desc : '',
            optionals : []
        };
    }
};
/*
    order = {
        status : 0 ,//-1 0 1 (-1 rejected) (0 pending) (1 accepted)
        products : [],


    }
*/