<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';

    protected $fillable = [
        'title',
        'slug',
        'content',
        'thumbnail',
        'category_id',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
