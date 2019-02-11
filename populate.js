/* Mongo */
const mongo = require('mongodb').MongoClient;

const ATLAS_USER_NAME = 'flo';
const ATLAS_HASH_PASSWD = 'flo';

/* Atlas Url */
//mongodb://username:password@host1:port1,...,hostN:portN/database?authSource=admin&...
const atlas_url = "mongodb+srv://" + ATLAS_USER_NAME + ":"+ ATLAS_HASH_PASSWD +"@fiero-gojey.gcp.mongodb.net/admin";

/* Local Mongo Url */
const local_url = "mongodb://localhost:27017/";

/* Utils for Queries */
const selections = require('./utils/selections.js');
const projections = require('./utils/projections.js');
const inserts = require('./utils/inserts.js');
const updates = require('./utils/updates.js');
const gens = require('./utils/generators.js');

/* Used to read from File */
var fs = require('fs');

/* DataBase we need */
var dbo;

/* Connection Settings */
const conn_options = {
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true // otherwise deprecated warning {current URL string parser is deprecated}
};

/* Afer Connection */
function callback(err, db) {
    if (err) throw err;

    dbo = db.db("test");

    console.log("Connected as "+ ATLAS_USER_NAME + " to Atlas ");

    var users = dbo.collection('users');
    var products = dbo.collection('products');

    var products_json = JSON.parse(fs.readFileSync('./utils/parser/files/prodottiFiniti.json', 'utf8'));

    // Clears DataBase 
    products.drop();
    users.drop();

    // Insert all products read from json file...
    products.insertMany(products_json.prodotti);

    // Insert 2 users ...
    users.insertOne(inserts.insertUser('sabaniflorian@gmail.com','ciao123','Florian',0));
    users.insertOne(inserts.insertUser('cappa@gmail.com','ciao','Alberto Basaglia',1));

    // Ehehe siamo programmatori reattivi noi eh .cit Basaglia
    users.updateOne(selections.users_by_code(0),updates.addUserOrder(
        gens.createOrder('id_order_1')  // crea un ordine
        .addProduct(0)  // aggiunge prodotto 0
        .addProduct(1,2,[2,3,4,5])    //aggiunge 2 prodotti 1 con optionals 2,3,4,5
        .addOptionalToProduct(0,5)    // aggiunge optional 5 all ordine 0
        .addOptionalToProduct(0,3)    // aggiunge optional 3 all ordine 0 
        .finishOrder()
    ));
    users.updateOne(selections.users_by_code(1),updates.addUserOrder(
        gens.createOrder('id_order_2')  // crea un ordine
        .addProduct(8)  // aggiunge prodotto 0
        .addProduct(1,6,[2,5])    //aggiunge 2 prodotti 1 con optionals 2,3,4,5
        .addOptionalToProduct(8,9)    // aggiunge optional 3 all ordine 0 
        .finishOrder()
    ));

}

/* Connection to the Database */
mongo.connect(atlas_url,conn_options,callback);

/*
    dbo.collection("products")
    .find(selections.products_by_price_range(0,2))
    .project(projections.only_type())
    .project(projections.no_id())
    .toArray(function(err, result) {
        if (err) throw err;

        console.log(result);
        
        db.close();
    });
*/