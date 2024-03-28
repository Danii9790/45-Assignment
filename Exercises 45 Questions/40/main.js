"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_tittle, tracks) {
    let album = {
        artist: artist_name,
        tittle: album_tittle
    };
    if (tracks !== undefined)
        album.tracks = tracks;
    return album;
}
let album1 = make_album("Hassan", "album tittle 1");
let album2 = make_album("usman", "album tittle 2");
let album3 = make_album("Ahmed", "album tittle 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
