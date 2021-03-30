'use strict';

const uuid = require('uuid').v4;

class Foods {
    constructor() {
        this.db = [];
    }

    create(obj){
        const record = {
            id: uuid(),
            data: obj
        };
        this.db.push(record);
        return record;
    }

    read(id){
        if(id){
            return this.db.find((record) => {
                return record.id === id ;
            })
        } else {
            return this.db;
        }
    }

    update(id, obj){
        for (let counter = 0; counter < this.db.length; counter++){
            if(this.db[counter].id === id){
                this.db[counter].data = obj;
                return this.db[counter];
            }
        }
    }

    delete(id){
        this.db = this.db.filter((food) => {
            food.id !== id;
        })
    }
}

module.exports = Foods;