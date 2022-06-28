<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    
    include "classes.php";
    //Connection
    $mysqli = new mysqli("localhost", "root", null, "php-solid-blog");
    if ($mysqli->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //Validation
    $id = $mysqli->real_escape_string($_POST["blogID"]);
    if (empty($blog_id)) $blog_id = "blog-";
    $title = $mysqli->real_escape_string($_POST["title"]);
    $description = $mysqli->real_escape_string($_POST["description"]);
    $authorName = $mysqli->real_escape_string($_POST["author_name"]);
    $authorUrl = $mysqli->real_escape_string($_POST["author_url"]);
    $authorImageUrl = $mysqli->real_escape_string($_POST["author_image_url"]);
    $content = $mysqli->real_escape_string($_POST["content"]);
    $imageUrl = $mysqli->real_escape_string($_POST["image_url"]);
    $createdAt = time();
    //Query
    $data = $mysqli->query("INSERT INTO `articles` (`blog_id`, `author_name`, `author_url`, `author_image_url`, `title`, `description`, `content`, `created_timestamp`, `image_url`) VALUES ('$id','$authorName','$authorUrl','$authorImageUrl','$title','$description','$content','$createdAt','$imageUrl')");
    //Data Processing
    $row = $data->fetch_assoc();
    if (!empty($row)) {
        $date = new DateTime(); 
        $date->setTimestamp($row["created_timestamp"]);
        $blog = new Blog($row["blog_id"], new BlogAuthor($row["author_name"], $row["author_url"], $row["author_image_url"]), $row["image_url"], $row["title"], $row["description"], $row["content"], $date);
    } else {
        echo json_encode(new GetBlogResponse(false, "Didn't found the blog with the ID: '". $blog_id ."'", null));
        exit;
    };
    echo json_encode(new GetBlogResponse(true, null, $blog));
    exit;
?>