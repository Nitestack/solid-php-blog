<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    
    include "classes.php";

    //Connection
    $mysqli = new mysqli("localhost", "root", "praktikant072022", "blogs");
    if ($mysqli->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //Query
    $data = $mysqli->query("SELECT * FROM `articles`");
    //Data Processing
    $blogs = array();
    if ($data->num_rows > 0) {
        while ($row = $data->fetch_assoc()) {
            $blog = new Blog($row["blog_id"], new BlogAuthor($row["author_name"], $row["author_url"]), $row["image_url"], $row["title"], $row["description"], $row["content"], $row["created_at"]);
            array_push($blogs, $blog);
        }
    } else {
        echo json_encode(new Response(false, "No blogs found", null));
        exit;
    };
    echo json_encode(new Response(true, null, $blogs));
    exit;
?>