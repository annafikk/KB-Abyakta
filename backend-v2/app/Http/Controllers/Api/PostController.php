<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
    public function index()
    {
        return response()->json(
            Post::with('category')
                ->latest()
                ->paginate(10)
        );
    }

    public function show($slug)
    {
        $post = Post::with('category', 'comments.user')
            ->where('slug', $slug)
            ->firstOrFail();

        return response()->json($post);
    }
}
