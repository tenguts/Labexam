<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Book;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $books = [
            [
                'title' => 'Harry Potter and the Philosopher\'s Stone',
                'author' => 'J.K. Rowling',
                'published_year' => 1997,
                'genre' => 'Fantasy',
                'description' => 'A young boy discovers he\'s a wizard and attends Hogwarts School of Witchcraft and Wizardry.',
            ],
            [
                'title' => 'Harry Potter and the Chamber of Secrets',
                'author' => 'J.K. Rowling',
                'published_year' => 1998,
                'genre' => 'Fantasy',
                'description' => 'Harry returns to Hogwarts, where a hidden chamber holds a dark secret.',
            ],
            [
                'title' => 'Harry Potter and the Prisoner of Azkaban',
                'author' => 'J.K. Rowling',
                'published_year' => 1999,
                'genre' => 'Fantasy',
                'description' => 'Harry learns about his past and faces danger from an escaped prisoner.',
            ],
            [
                'title' => 'Harry Potter and the Goblet of Fire',
                'author' => 'J.K. Rowling',
                'published_year' => 2000,
                'genre' => 'Fantasy',
                'description' => 'Harry competes in the Triwizard Tournament and faces a dark wizard.',
            ],
            [
                'title' => 'Harry Potter and the Order of the Phoenix',
                'author' => 'J.K. Rowling',
                'published_year' => 2003,
                'genre' => 'Fantasy',
                'description' => 'Harry fights back against the rising power of Voldemort and the Ministry of Magic.',
            ],
            [
                'title' => 'Harry Potter and the Half-Blood Prince',
                'author' => 'J.K. Rowling',
                'published_year' => 2005,
                'genre' => 'Fantasy',
                'description' => 'Harry learns more about Voldemort\'s past and discovers a crucial potion book.',
            ],
            [
                'title' => 'Harry Potter and the Deathly Hallows',
                'author' => 'J.K. Rowling',
                'published_year' => 2007,
                'genre' => 'Fantasy',
                'description' => 'Harry\'s final battle against Voldemort leads to a climactic showdown.',
            ],

            [
                'title' => 'Fantastic Beasts and Where to Find Them',
                'author' => 'J.K. Rowling',
                'published_year' => 2001,
                'genre' => 'Fantasy',
                'description' => 'A guide to magical creatures found in the wizarding world, written by Newt Scamander.',
            ],
            [
                'title' => 'Quidditch Through the Ages',
                'author' => 'J.K. Rowling',
                'published_year' => 2001,
                'genre' => 'Fantasy',
                'description' => 'A history of the magical sport of Quidditch, detailing its evolution and rules.',
            ],
            [
                'title' => 'The Tales of Beedle the Bard',
                'author' => 'J.K. Rowling',
                'published_year' => 2008,
                'genre' => 'Fantasy',
                'description' => 'A collection of wizarding fairy tales with moral lessons, beloved by young witches and wizards.',
            ],
        
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
