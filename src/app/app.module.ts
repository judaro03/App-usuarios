import { SharedModule } from './shared/shared.module';
import { ObjToArrayPipe } from './pipes/objToArray.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components

import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AlbumesComponent } from './components/dashboard/albumes/albumes.component';
import { PublicacionesComponent } from './components/dashboard/publicaciones/publicaciones.component';
@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    HomeComponent,
    PublicacionesComponent,
    AlbumesComponent,
    ObjToArrayPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
