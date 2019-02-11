module.exports = {   
    updateUserName : (data) => {
        return {
            $set : {name: data} 
        };
    },

    addUserOrder : (order) => {
        return {
            $push : {orders : order } 
        };
    }

}