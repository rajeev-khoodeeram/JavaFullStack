package com.enroll;

import com.mongodb.client.*;

import org.bson.Document;


public class TestMongoApplication {
public static void main(String[] args) {
    System.out.println("Test Mongo Application is running");
    // You can add additional logic here if needed
 String connectionString = "mongodb://localhost:27017";

        // For a MongoDB Atlas cluster, you'd get this from your Atlas dashboard:
        // String connectionString = "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority";

        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            // Get a reference to the database
            MongoDatabase database = mongoClient.getDatabase("test"); // Replace "mydatabase" with your database name

            // Get a reference to a collection
            MongoCollection<Document> collection = database.getCollection("test"); // Replace "mycollection" with your collection name

            System.out.println("Successfully connected to MongoDB!");

            // Example: Insert a document
            Document doc = new Document("name", "John Doe")
                                .append("age", 30)
                                .append("city", "New York");
            collection.insertOne(doc);
            System.out.println("Document inserted successfully.");

            // Example: Retrieve documents
            FindIterable<Document> iterable = collection.find();
            System.out.println("Documents in the collection:");
            for (Document document : iterable) {
                String name = document.getString("name");
                int age = document.getInteger("age");
                String city = document.getString("city");
                System.out.println("Name: " + name + ", Age: " + age + ", City: " + city);
            }

            // Example: Close the connection (handled by try-with-resources)
            System.out.println("Connection closed.");

        } catch (Exception e) {
            System.err.println("Error connecting to MongoDB: " + e.getMessage());
            e.printStackTrace();
        }


}
}
