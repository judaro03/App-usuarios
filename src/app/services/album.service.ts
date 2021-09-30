import { HttpClient } from '@angular/common/http';
import { Album } from './../interfaces/album';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}
  api = 'https://jsonplaceholder.typicode.com';
  getAllAlbums() {
    const path = `${this.api}/albums`;
    return this.http.get<Album[]>(path);
  }

  getAlbum(id: string) {
    const path = `${this.api}/albums/${id}`;
    return this.http.get<Album>(path);
  }

  createAlbum(album: Album) {
    const path = `${this.api}/albums/`;
    return this.http.post(path, album);
  }

  updateAlbum(album: Album) {
    const path = `${this.api}/albums/${album.id}`;
    return this.http.put(path, album);
  }
  deleteAlbum(id: string) {
    const path = `${this.api}/albums/${id}`;
    return this.http.delete(path);
  }
}
