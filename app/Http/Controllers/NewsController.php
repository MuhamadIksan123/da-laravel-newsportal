<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index() {
        $news = new NewsCollection(News::paginate(8));
        return Inertia::render('Homepage', [
            'title' => 'Newsportal',
            'description' => 'Selamat datang di website Newsportal',
            'data' => $news
        ]);
    }
}
