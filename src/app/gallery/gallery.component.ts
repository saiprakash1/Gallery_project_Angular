import {Component,OnChanges,Input} from '@angular/core';
import {Imageservice} from '../shared/image.service';


@Component({
  selector:'gallery-bar',
  templateUrl:'./gallery.component.html',

})
export class gallerycomponent implements OnChanges {
  title='recent photos';

  @Input() filterBy?: string='all';
  visibleimages: any[] =[];


  constructor(private imageservice: Imageservice){
    this.visibleimages=this.imageservice.getimage();
  }

  ngOnChanges(private imageservice1:Imageservice){
    return this.visibleimages = this.imageservice1.getimage();
  }
}
