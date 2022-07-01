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
    $blog_id = mysqli_real_escape_string($mysqli, $_POST["id"]);
    if (empty($blog_id)) $blog_id = "blog-";
    //Query
    $data = $mysqli->query("SELECT * FROM articles WHERE blog_id = '$blog_id'");
    //Data Processing
    $row = $data->fetch_assoc();
    if (!empty($row)) {
        $date = new DateTime(); 
        $date->setTimestamp($row["created_timestamp"]);
        $blog = new Blog($row["blog_id"], new BlogAuthor($row["author_name"], $row["author_url"], $row["author_image_url"]), $row["image_url"], $row["title"], $row["description"], $row["content"], $date);
        echo json_encode(new GetBlogResponse(true, null, $blog));
    } else {
        echo json_encode(new GetBlogResponse(false, "Didn't found the blog with the ID: '". $blog_id ."'", null));
    }
    exit;
?>