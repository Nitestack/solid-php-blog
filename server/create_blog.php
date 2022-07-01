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
    $title = $mysqli->real_escape_string($_POST["title"]);
    $description = $mysqli->real_escape_string($_POST["description"]);
    $authorName = $mysqli->real_escape_string($_POST["author"]);
    $authorUrl = $mysqli->real_escape_string($_POST["authorUrl"]);
    $authorImageUrl = $mysqli->real_escape_string($_POST["authorImageUrl"]);
    $content = $mysqli->real_escape_string($_POST["content"]);
    $imageUrl = $mysqli->real_escape_string($_POST["imageUrl"]);
    $createdAt = time();
    //Query 
    $sql = "INSERT INTO articles (blog_id, author_name, author_url, author_image_url, title, description, content, created_timestamp, image_url) VALUES ('$id','$authorName','$authorUrl','$authorImageUrl','$title','$description','$content','$createdAt','$imageUrl')";
    //Data Processing
    if ($mysqli->query($sql) == true) {
        echo json_encode(new CreateUpdateDeleteBlogResponse(true, null));
    }
    else {
        echo json_encode(new CreateUpdateDeleteBlogResponse(false, "Couldn't create blog"));
    }
    exit;
?>