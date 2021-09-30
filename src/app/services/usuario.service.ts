import { User } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  api = 'https://jsonplaceholder.typicode.com';
  getAllUsers() {
    const path = `${this.api}/users`;
    return this.http.get<User[]>(path);
  }

  getUser(id: string) {
    const path = `${this.api}/users/${id}`;
    return this.http.get<User>(path);
  }

  createUser(user: User) {
    const path = `${this.api}/users/`;
    return this.http.post(path, user);
  }

  updateUser(user: User) {
    const path = `${this.api}/users/${user.id}`;
    return this.http.put(path, user);
  }
  deleteUser(id: string) {
    const path = `${this.api}/users/${id}`;
    return this.http.delete(path);
  }
}
