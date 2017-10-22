import {Component} from '@angular/core';
import {Imageservice} from './shared/image.service';

@Component({
  selector:'image-detail',
  templateUrl:'./image.component.html',

})
export class imagecomponent {
  contructor(private imageservice: Imageservice ){}
}
