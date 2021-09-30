import { AlbumService } from '../../../services/album.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css'],
})
export class AlbumesComponent implements OnInit {
  albums: object[];
  loading: boolean;
  constructor(
    private albumService: AlbumService,
    private _snackBar: MatSnackBar
  ) {
    this.albums = [];
    this.loading= true;
  }

  ngOnInit(): void {
    this.getAllAlbums();
    this.loading=false;
  }
  getAllAlbums() {
    this.albumService.getAllAlbums().subscribe((albums) => {
      console.log(albums);
      this.albums = albums;
    });
  }
}
