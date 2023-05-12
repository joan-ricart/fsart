<?php

namespace App\Http\Controllers;

use App\Enums\ImageType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class UploadController extends Controller
{
    public function uploadImage(Request $request)
    {
        $image_type = ImageType::Profile;

        if ($image_type == ImageType::Profile) {
            $img = Image::make($request->image);
            Storage::put(\Str::random() . '.jpg', $img->stream('jpg'));
            Storage::put(\Str::random() . '.jpg', $img->fit(400, 400)->stream('jpg'));
            return 'match!';
        }

        return 'try again loser';



        // $img = Image::make($request->image);

        // echo "initial filesize:" . $img->filesize() . "<br>";
        // $img->fit(400, 400, function ($constraint) {
        //     $constraint->upsize();
        // });

        // dd(Storage::disk('local')->put(\Str::random() . '.jpg', $img->stream()));

        // return;


        // resize the image so that the largest side fits within the limit; the smaller
        // side will be scaled to maintain the original aspect ratio
        // $img->rotate(90)->resize(500, 1000, function ($constraint) {
        //     $constraint->aspectRatio();
        //     $constraint->upsize();
        // });

        // return $img->response();
    }
}
