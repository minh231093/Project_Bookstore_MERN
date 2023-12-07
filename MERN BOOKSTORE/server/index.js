const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
//linh thêm
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
dotenv.config();

//middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://MVPOmega:10161416@mvpcluster.kvnexas.mongodb.net/?retryWrites=true&w=majority";
const { ObjectId } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create a collection of documents
    const bookCollections = client.db("bookInvetory").collection("books");
    const userModel = client.db("bookInvetory").collection("userModel");
    //alo
    // Insert a book to the db: post method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });

    // Get all books from the database
    // app.get("/all-books", async(req, res) => {
    //     const books = bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result);
    // });

    // Update a book data: patch or update methods
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };
      const options = { upsert: true };
      // Update
      const result = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // Delete a book data
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    });

    // Find by category
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query && req.query.category) {
        query = { category: req.query.category };
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    });

    // To get single book data
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.findOne(filter);
      res.send(result);
    });

    //api Register
    //ROUTES
    app.use("/v1/auth", authRoute);
    app.use("/v1/user", userRoute);
    // app.post("/Register", async (req, res) => {
    //   // Hash password
    //   const salt = await bcrypt.genSaltSync();
    //   const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    //   // Create new user
    //   const user = new userModel({
    //     email: req.body.email,
    //     password: hashedPassword,
    //   });
    //   const result = await userModel.insertOne(user);
    //   // Save user
    //   await user.save();
    //   res.send(result);
    //   // Send success response
    //   // res.send({
    //   //   message: "Sign up is successfully",
    //   // });
    // });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }

  //api login

  // app.post("/login", (req, res) => {
  //   // console.log(req.body);
  //   const { email } = req.body;
  //   userModel.findOne({ email: email }, (err, result) => {
  //     if (result) {
  //       const dataSend = {
  //         _id: result._id,
  //         firstName: result.firstName,
  //         lastName: result.lastName,
  //         email: result.email,
  //         image: result.image,
  //       };
  //       console.log(dataSend);
  //       res.send({
  //         message: "Login is successfully",
  //         alert: true,
  //         data: dataSend,
  //       });
  //     } else {
  //       res.send({
  //         message: "Email is not available, please sign up",
  //         alert: false,
  //       });
  //     }
  //   });
  // });
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
