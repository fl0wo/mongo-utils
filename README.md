# Mongo-Utils

Examples and utils for mongo db , also with atlas and stitch !

For that example we are using a Database for a Bar/Pub/Pizzeria.

So easy and fun! Let's GO!

## Init

 - Clone the repository
 - cd mongo-utils
 - npm install
 - Enjoy :D


## Add User 

 - users.insertOne(inserts.insertUser('cappa@gmail.com','ciao','Alberto Basaglia',1));

## Add Order to User

users.updateOne(selections.users_by_code(0),updates.addUserOrder(
    gens.createOrder('id_order_1')  // crea un ordine
    .addProduct(0)  // aggiunge prodotto 0
    .addProduct(1,2,[2,3,4,5])    //aggiunge 2 prodotti 1 con optionals 2,3,4,5
    .addOptionalToProduct(0,5)    // aggiunge optional 5 all ordine 0
    .addOptionalToProduct(0,3)    // aggiunge optional 3 all ordine 0 
    .finishOrder()
));



# MongoDb CheatSheet

- Cambiare database: `use [nome]`

- Inserire elemento: `db.[collezione].insert([oggetto])`

- Cancellare database: `db.dropDatabase()`

- Creare una collezione: `db.createCollection([nome])`

- Lista collezioni: `show collections`

- Cancellare collezione: `db.[nome].drop()`

- Inserire oggetto: `db.[collezione].insert([oggetto])`

- Cercare oggetto: `db.[collezione].find([criterio],[attributi])`
    Esempio: `db.utenti.find({nome:"Alberto"},{_id: 0})`
    Esempio: `db.utenti.find({nome:"Alberto"},{_id: 0})[1]`

- Comparazioni: [Qui](https://www.tutorialspoint.com/mongodb/mongodb_query_document.htm)

- Update oggetto: `db.[collezione].update([criterio], [data])`
    Esempio: `db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}},{multi:true})`

- Save oggetto: `db.[collezione].save({_id:ObjectId([id]),[data]})`
    Esempio: `db.mycol.save({"_id" : ObjectId(5983548781331adf45ec7), "title":"Tutorials Point New Topic","by":"Tutorials Point"}`

- Remove oggetto: `db.[collezione].remove([criterio])`

- Altro: [Qui](https://www.tutorialspoint.com/mongodb/)
