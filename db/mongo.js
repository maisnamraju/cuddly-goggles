const MongoClient = require('mongodb').MongoClient;

class Mongo {
    constructor(){
    }

    async connect(URL,DB_NAME) {
        try {
            let db = await MongoClient.connect(URL);    
            this.db = db;
        } catch (error) {
            throw(new Error(error));
        }
    }
}


module.exports = Mongo;