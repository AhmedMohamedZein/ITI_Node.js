const client = require ('../database');
class Course {

    async getAllCourses () {
        try {
            const data = await client.db("school").collection("courses").find({}).project({_id : 0}).toArray();
            client.close();
            return data;        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async getSpecificCourse (courseName) {
        try {
            const data = await client.db("school").collection("courses").findOne({name:courseName["name"]}).project({_id : 0}).toArray();
            client.close();
            return data;        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async createCourses (coursObject) {
        try {
            await client.db("school").collection("courses").insertOne({name:coursObject["name"],creditHours:coursObject["creditHours"]});
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
    async updateSpecificCourse(courseObject) {
        try {
            await client.db("school").collection("courses").updateOne({name:courseObject["rename"]},{ "$set": { name:courseObject["name"]} });
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }  
    }
    async deleteSpecificCourse (courseName){
        try {
            const data = await client.db("school").collection("courses").deleteOne({name:courseName["name"]});
            client.close();        
        }catch(error) {
            console.log(error);
            client.close();
            throw new Error ();
        }
    }
}



module.exports = Course ;