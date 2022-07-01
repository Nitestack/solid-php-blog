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
    //Query 
    $sql = "UPDATE articles SET author_name = '$authorName', author_url = '$authorUrl', author_image_url = '$authorImageUrl', title = '$title', description = '$description', content = '$content', image_url = '$imageUrl' WHERE blog_id = '$id'";
    //Data Processing
    if ($mysqli->query($sql) == true) {
        echo json_encode(new CreateUpdateDeleteBlogResponse(true, null));
    }
    else {
        echo json_encode(new CreateUpdateDeleteBlogResponse(false, "Couldn't update blog"));
    }
    exit;
?>