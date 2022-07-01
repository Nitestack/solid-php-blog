<?php
    //Allow access to localhost on PORT 3000
    header("Access-Control-Allow-Origin: http://localhost:3000");
    //Classes
    include "classes.php";
    //Connection
    $mysqli = new mysqli("localhost", "root", null, "php-solid-blog");
    if ($mysqli->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //Validation
    $id = $mysqli->real_escape_string($_POST["id"]);
    if (empty($blog_id)) $blog_id = "blog-";
    //Query 
    $sql = "DELETE FROM articles WHERE blog_id = '$id'";
    //Data Processing
    if ($mysqli->query($sql) == true) {
        echo json_encode(new CreateUpdateDeleteBlogResponse(true, null));
    }
    else {
        echo json_encode(new CreateUpdateDeleteBlogResponse(false, "Couldn't delete blog"));
    }
    exit;
?>