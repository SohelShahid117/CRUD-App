const express = require('express')
const cors = require("cors")
require('dotenv').config()

const app = express()
const port =process.env.PORT || 3000

//middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!enJoy express JS,MongoDB.enJoy React')
})

//crudApp
//rDgL6yB1oizenc2T


const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.hfhifix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb+srv://crudApp:rDgL6yB1oizenc2T@cluster0.hfhifix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const crudUserCollection = client.db("CRUDuserDB").collection("crudUsers");

    //CREATE
    app.post("/addUser",async(req,res)=>{
        const newUser = req.body
        console.log(newUser)
        const result = await crudUserCollection.insertOne(newUser);
        console.log(result)
        res.send(result)

    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
    console.log(`Example app listening on port ${port}`)
})

//https://youtu.be/3ywB6hstbfw?si=h8kEuTrM2kOjdiJE-15 min done