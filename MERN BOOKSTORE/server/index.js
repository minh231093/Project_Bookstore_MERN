const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MVPOmega:10161416@mvpcluster.kvnexas.mongodb.net/?retryWrites=true&w=majority";
const { ObjectId } = require('mongodb');

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
    
    // Create a collection of documents
    const bookCollections = client.db("bookInvetory").collection("books");

    const authorCollections = client.db("authorList").collection("authors");

    //Book sector
    // Insert a book to the db: post method
    app.post("/upload-books", async (req, res) => {
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
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateBookData
            },
        }
        const options = {upsert: true};
        // Update
        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    });

    //delete a book with id - HoangMinh
    app.delete("/delete-book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.deleteOne(filter);
        res.json(result);
      } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Find by category
    // app.get("/all-books", async (req, res) => {
    //   let query = {};
    //   if (req.query && req.query.category) {
    //     query = { category: req.query.category };
    //   }
    //   const result = await bookCollections.find(query).toArray();
    //   res.send(result);
    // });

    app.get("/all-books", async (req, res) => {
      try {
        let query = {};

        // Check if there's a category parameter in the query
        if (req.query && req.query.category) {
          query.category = req.query.category;
        }

        // Check if there's a title parameter in the query
        if (req.query && req.query.title) {
          query = {
            ...query,
            title: { $regex: new RegExp(req.query.title, "i") },
          };
        }

        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // To get single book data
    // app.get("/book/:id", async (req, res) => {
    //   const id = req.params.id;
    //   const filter = { _id: new ObjectId(id) };
    //   const result = await bookCollections.findOne(filter);
    //   res.send(result);
    // });

    app.get("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.findOne(filter);
        res.send(result);
      } catch (error) {
        console.error("Error fetching book by ID:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // Lấy danh sách sách theo categories
    app.post("/books-by-category", async (req, res) => {
      try {
        const { categories } = req.body;

        // Sử dụng $in để lấy các sách thuộc các categories được chỉ định
        const query = { category: { $in: categories } };

        const result = await bookCollections.find(query).toArray();
        res.json(result);
      } catch (error) {
        console.error("Error fetching books by category:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    //Lấy danh sách sách theo title
    app.get("/books-by-title/:title", async (req, res) => {
      try {
        const title = req.params.title;

        // Sử dụng $regex để tìm kiếm title dựa trên keyword
        const query = { bookTitle: { $regex: new RegExp(title, "i") } };
        const result = await bookCollections.find(query).toArray();

        res.json(result);
      } catch (error) {
        console.error("Error fetching books by title:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Author HMinh/TTuyen
    // Insert book author to db: post method
    app.post("/create-author", async (req, res) => {
      const data = req.body;
      const result = await authorCollections.insertOne(data);
      res.send(result);
    });

    // Update author data: patch methods
    app.patch("/author/:id", async (req, res) => {
      const id = req.params.id;
      const updateAuthor = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          ...updateAuthor,
        },
      };
      const options = { upsert: true };
      // Update
      const result = await authorCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    //delete an author with id HoangMinh
    app.delete("/delete-author/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await authorCollections.deleteOne(filter);
        res.json(result);
      } catch (error) {
        console.error("Error deleting author:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // To get single author data
    app.get("/author/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await authorCollections.findOne(filter);
      res.send(result);
    });

    // Get all authors from the database
    app.get("/all-authors", async (req, res) => {
      const authors = authorCollections.find();
      const result = await authors.toArray();
      res.send(result);
    });

    //api Register
    //ROUTES
    app.use("/v1/auth", authRoute);
    app.use("/v1/user", userRoute);

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})