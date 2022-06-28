<?php
header("Access-Control-Allow-Origin: http://localhost:3000");

include "classes.php";

//Connection
$mysqli = new mysqli("localhost", "root", null, "php-solid-blog");
if ($mysqli->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//Query
$data = $mysqli->query("SELECT * FROM articles");
//Data Processing
$blogs = array();
if ($data->num_rows > 0) {
    while ($row = $data->fetch_assoc()) {
        $date = new DateTime();
        $date->setTimestamp($row["created_timestamp"]);
        $blog = new Blog($row["blog_id"], new BlogAuthor($row["author_name"], $row["author_url"], $row["author_image_url"]), $row["image_url"], $row["title"], $row["description"], $row["content"], $date);
        array_push($blogs, $blog);
    }
}
else {
    echo json_encode(new GetBlogsResponse(false, "No blogs found", null));
    exit;
}
;
echo json_encode(new GetBlogsResponse(true, null, $blogs));
exit;
?>