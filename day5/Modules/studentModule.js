const client = require ('../database');
class Student {

    async getAllStudents () {
        try {
            const data = await client.db("school").collection("students").find({}).project({_id : 0}).toArray();
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
            const data = await client.db("school").collection("students").findOne({_id:sid["id"]}).project({_id : 0}).toArray();
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
            await client.db("school").collection("students").insertOne({name:coursObject["name"],creditHours:coursObject["creditHours"]});
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async updateSpecificCourse(courseObject) {
        try {
            await client.db("school").collection("students").updateOne({name:courseObject["rename"]},{ "$set": { name:courseObject["name"]} });
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }  
    }
    async deleteSpecificCourse (courseName){
        try {
            const data = await client.db("school").collection("students").deleteOne({name:courseName["name"]});
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
}



module.exports = Student ;