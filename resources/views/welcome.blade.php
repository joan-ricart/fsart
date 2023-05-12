<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body>

        <form action="{{route('upload')}}" method="POST" enctype="multipart/form-data">
            @csrf
            <input type="file" name="image">
            <input type="submit" value="Upload">
        </form>

        @php(phpinfo())
    </body>
</html>
