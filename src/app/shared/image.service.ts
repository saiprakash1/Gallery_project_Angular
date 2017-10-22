import {Injectable} from '@angular/core';

@Injectable()
export class Imageservice{
visibleimage=[];
getimage(){
  return this.visibleimage = Images.slice(0);
}
}

const Images=[
  {"id":1,"category":"sai","caption":"check","url":"assets/img/profile.png"},
  {"id":2,"category":"all","caption":"check","url":"assets/img/IMG-20150927-WA0017.jpg"}
]
