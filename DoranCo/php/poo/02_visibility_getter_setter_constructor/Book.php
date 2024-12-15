<?php

class Book
{
    /**
     * @var string
     */
    private string $title;

    /**
     * @var string
     */
    private string $author;

    /**
     * @var int
     */
    private int $pages;

    /**
     * @var int
     */
    private int $year;

    public function __construct($title, $author, $pages, $year)
    {
        $this->title = $title;
        $this->author = $author;
        $this->pages = $pages;
        $this->year = $year;
    }

    /**
     * Get the value of title
     *
     * @return  string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @param  string  $title
     *
     * @return  self
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of author
     *
     * @return  string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * Set the value of author
     *
     * @param  string  $author
     *
     * @return  self
     */
    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    /**
     * Get the value of pages
     *
     * @return  int
     */
    public function getPages(): int
    {
        return $this->pages;
    }

    /**
     * Set the value of pages
     *
     * @param  int  $pages
     *
     * @return  self
     */
    public function setPages(int $pages): self
    {
        $this->pages = $pages;

        return $this;
    }

    /**
     * Get the value of year
     *
     * @return  int
     */
    public function getYear(): int
    {
        return $this->year;
    }

    /**
     * Set the value of year
     *
     * @param  int  $year
     *
     * @return  self
     */
    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function read(): string
    {
        return "I'm currently reading $this->title by $this->author";
    }
}
