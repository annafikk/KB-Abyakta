<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;
use App\Models\Post;
use App\Models\Comment;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/posts/{post}/comments', function (Request $request, Post $post) {
        $validated = $request->validate([
            'content' => 'required|string',
            'parent_id' => 'nullable|exists:comments,id',
        ]);

        $comment = $post->comments()->create([
            'user_id' => $request->user()->id,
            'parent_id' => $validated['parent_id'] ?? null,
            'content' => $validated['content'],
        ]);

        return response()->json($comment, 201);
    });
});

Route::get('/posts/{post}/comments', function (Post $post) {
    return $post->comments()
        ->whereNull('parent_id')
        ->with(['replies.user', 'user'])
        ->orderByDesc('created_at')
        ->get();
});

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{slug}', [PostController::class, 'show']);

require __DIR__.'/auth.php';
