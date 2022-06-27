<?php
    class Response {
        public bool $success;
        public ?string $error;
        public ?array $data;
        
        function __construct(bool $success, ?string $error, ?array $data) {
            $this->success = $success;
            if (!empty($error)) {
                $this->error = $error;
            }
            if (!empty($data)) {
                $this->data = $data;
            }
        }
    }

    class Blog {
        public string $id;
        public BlogAuthor $author;
        public string $imageUrl;
        public string $title;
        public string $description;
        public string $content;
        public DateTime $createdAt;

        function __construct(string $id, BlogAuthor $author, string $imageUrl, string $title, string $description, string $content, DateTime $createdAt) {
            $this->id = $id;
            $this->author = $author;
            $this->imageUrl = $imageUrl;
            $this->title = $title;
            $this->description = $description;
            $this->content = $content;
            $this->createdAt = $createdAt;
        }
    }

    class BlogAuthor {
        public string $name;
        public ?string $url;
        
        function __construct(string $name, ?string $url) {
            $this->name = $name;
            if (!empty($url)) {
                $this->url = $url;
            }
        }
    }
?>