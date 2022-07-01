<?php
    //Responses
    class GetBlogsResponse
    {
        public bool $success;
        public ?string $error;
        public ?array $data;

        function __construct(bool $success, ?string $error, ?array $data)
        {
            $this->success = $success;
            if (!empty($error)) {
                $this->error = $error;
            }
            if (!empty($data)) {
                $this->data = $data;
            }
        }
    }
    class CreateUpdateDeleteBlogResponse
    {
        public bool $success;
        public ?string $error;

        function __construct(bool $success, ?string $error)
        {
            $this->success = $success;
            if (!empty($error)) {
                $this->error = $error;
            }
        }
    }
    class GetBlogResponse
    {
        public bool $success;
        public ?string $error;
        public Blog $data;

        function __construct(bool $success, ?string $error, ?Blog $data)
        {
            $this->success = $success;
            if (!empty($error)) {
                $this->error = $error;
            }
            if (!empty($data)) {
                $this->data = $data;
            }
        }
    }

    //Blog
    class Blog
    {
        public string $id;
        public BlogAuthor $author;
        public string $imageUrl;
        public string $title;
        public string $description;
        public string $content;
        public DateTime $createdAt;

        function __construct(string $id, BlogAuthor $author, string $imageUrl, string $title, string $description, string $content, DateTime $createdAt)
        {
            $this->id = $id;
            $this->author = $author;
            $this->imageUrl = $imageUrl;
            $this->title = $title;
            $this->description = $description;
            $this->content = $content;
            $this->createdAt = $createdAt;
        }
    }
    class BlogAuthor
    {
        public string $name;
        public ?string $url;
        public ?string $imageUrl;

        function __construct(string $name, ?string $url, ?string $imageUrl)
        {
            $this->name = $name;
            if (!empty($url)) {
                $this->url = $url;
            }
            if (!empty($imageUrl)) {
                $this->imageUrl = $imageUrl;
            }
        }
    }
?>