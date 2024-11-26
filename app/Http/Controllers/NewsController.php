<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index() {
        $news = News::all();
        return Inertia::render('Homepage', [
            'title' => 'Newsportal',
            'description' => 'Selamat datang di website Newsportal',
            'data' => $news
        ]);
    }
}
