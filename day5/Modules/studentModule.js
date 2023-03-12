const client = require ('../database');
class Student {

    async getAllStudents () {
        try {
            const data = await client.db("school").collection("students").find({}).toArray();
            client.close();
            return data;        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async getSpecificStudent (sid) {
        try {
            // console.log(typeof sid["id"]);
            const data = await client.db("school").collection("students").findOne({_id:Number(sid["id"])});
            client.close();
            return data;        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async createStudnt (studentObject) {
        try {
            await client.db("school").collection("students").insertOne({name:studentObject["name"],_id:Number(studentObject["id"])});
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async updateSpecificStudent(studentObject) {
        try {
            await client.db("school").collection("students").updateOne({_id:Number(studentObject["id"])},{ "$set": { name:studentObject["name"]} });
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }  
    }
    async deleteSpecificStudent (sid){
        try {
            await client.db("school").collection("students").deleteOne({_id:Number(sid["id"])});
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
}



module.exports = Student ;