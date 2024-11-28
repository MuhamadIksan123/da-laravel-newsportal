<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class NewsController extends Controller
{
    public function index() {
        $news = new NewsCollection(News::OrderByDesc('id')->paginate(8));
        return Inertia::render('Homepage', [
            'title' => 'Newsportal',
            'description' => 'Selamat datang di website Newsportal',
            'data' => $news
        ]);
    }

    public function create(Request $request) {
        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->category = $request->category;
        $news->author = auth()->user()->email;
        $news->save();

        return redirect()->back()->with('message', 'Berita berhasil dibuat');
    }

    public function show() {
        $myNews = News::where('author', auth()->user()->email)->get();
        return Inertia::render('Dashboard', [
            'myNews' => $myNews
        ]);
    }

    public function edit(Request $request)
    {
        return Inertia::render('EditNews', [
            'myNews' => News::find($request->id)
        ]);
    }

    public function update(Request $request)
    {
        News::find($request->id)->update([
            'title' => $request->title,
            'description' => $request->description,
            'category' => $request->category
        ]);

        return to_route('dashboard');
    }

    public function destroy(Request $request)
    {
        $news = News::find($request->id);
        $news->delete();

        return redirect()->back()->with('message', 'Berita berhasil dihapus');
    }
}
