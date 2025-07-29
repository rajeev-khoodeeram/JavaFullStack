package com.enroll;

public class TestMySQLApplication {
public static void main(String[] args) {
    // Create a new MySQL database connection

    System.out.println("Test MySQL Application is running");
    // You can add additional logic here if needed
    String url = "jdbc:mysql://localhost:3306/test"; // Replace with your database URL
    String  username = "root"; // Replace with your database username  

    String password = "Rk2025.;"; // Replace with your database password
    String driver = "com.mysql.cj.jdbc.Driver"; // MySQL JDBC driver

    java.sql.Connection connection = null;
    try {
        Class.forName(driver);
        connection = java.sql.DriverManager.getConnection(url, username, password);
        System.out.println("Successfully connected to MySQL!");             
        // Example: insert a record
        String insertQuery = "INSERT INTO employee (name, age, city) VALUES (?, ?, ?)";
        java.sql.PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
        preparedStatement.setString(1, "John Doe");
        preparedStatement.setInt(2, 30);
        preparedStatement.setString(3, "New York");
        preparedStatement.executeUpdate();
        System.out.println("Record inserted successfully.");      
        
        
        // Example: retrieve records
        String selectQuery = "SELECT * FROM employee"; // Replace with your table name
        java.sql.Statement statement = connection.createStatement();
        java.sql.ResultSet resultSet = statement.executeQuery(selectQuery);
        System.out.println("Records in the employee table:");
        while (resultSet.next()) {
            int id = resultSet.getInt("id"); // Assuming 'id' is a column
            String name = resultSet.getString("name");
            int age = resultSet.getInt("age");
            String city = resultSet.getString("city");
            System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age + ", City: " + city);
        }
    }
    catch (Exception e) {
        System.err.println("Error connecting to MySQL: " + e.getMessage());
        e.printStackTrace();
    } finally {
        // Close the connection if it was opened
        try {
            if (connection != null && !connection.isClosed()) {
                connection.close();
                System.out.println("Connection closed.");
            }
        } catch (Exception e) {
            System.err.println("Error closing connection: " + e.getMessage());
        }
    }


}
}
