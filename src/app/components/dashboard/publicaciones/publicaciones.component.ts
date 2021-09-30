import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
})
export class PublicacionesComponent implements OnInit {
  form: FormGroup;
  posts: object[];
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      titulo: ['', Validators.required],
      cuerpo: ['', Validators.required],
    });
    this.posts=[];
  }

  ngOnInit(): void {
    this.getAllPosts();
  }
  guardar(): void {
    const id = this.form.value.id;
    const titulo = this.form.value.titulo;
    const cuerpo = this.form.value.cuerpo;
    console.log(cuerpo);
  }

  getAllPosts() {
    this.postService.getAllPosts().subscribe((posts) => {
      console.log(posts);
      this.posts=posts;
    });
  }
  getPost() {
    this.postService.getPost(this.form.value.id).subscribe((post) => {
      console.log(post);
    });
  }
  deletePost() {
    this.postService.deletePost(this.form.value.id).subscribe((data) => {
      console.log(data);
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  createPost() {
    if (this.validate()) {
      const post = {
        userId: this.form.value.id,
        title: this.form.value.titulo,
        body: this.form.value.cuerpo,
      };
      this.postService.createPost(post).subscribe((newPost) => {
        console.log(newPost);
        this.form = this.fb.group({
          id: ['', Validators.required],
          titulo: ['', Validators.required],
          cuerpo: ['', Validators.required],
        });
        this.openSnackBar('Publicación agregada con éxito', 'Cerrar');
      });
    }
  }
  validate(): boolean {
    if ((this.form.value.id = '')) {
      this.openSnackBar('Por favor ingrese un id', 'Cerrar');
      return false;
    }
    if (this.form.value.titulo == '') {
      this.openSnackBar('Por favor ingrese un titulo', 'Cerrar');
      return false;
    }
    if (this.form.value.cuerpo == '') {
      this.openSnackBar('Por favor ingrese un cuerpo', 'Cerrar');
      return false;
    }
    return true;
  }
  updatePost() {
    const post = {
      id: '200',
      userId: this.form.value.id,
      title: this.form.value.titulo,
      body: this.form.value.cuerpo,
    };
    this.postService.updatePost(post).subscribe((postUpdate) => {
      console.log(postUpdate);
      this.form.value.id = '';
      this.form.value.titulo = '';
      this.form.value.cuerpo = '';
    });
  }
}
