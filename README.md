# Mongo-Utils

Examples and utils for mongo db , also with atlas and stitch !

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
