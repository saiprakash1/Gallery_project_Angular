import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';
import {navbarcomponent} from './navbar/navbar.component';
import { AppComponent } from './app.component';
import {gallerycomponent} from './gallery/gallery.component';
import {Imageservice} from './shared/image.service';
import {Imagefilter} from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    navbarcomponent,
    gallerycomponent,
    Imagefilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [Imageservice,Imagefilter],
  bootstrap: [AppComponent]
})
export class AppModule { }
