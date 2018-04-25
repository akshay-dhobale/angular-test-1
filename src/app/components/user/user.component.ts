import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string
  phone_number:number
  info:Info
  others:any[]
  work:any
  posts:Post[]

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.name = 'Akshay'
    this.phone_number = 788787878
    this.info = {
      company:'Neosoft',
      designation:'Developer',
      technology:'RoR'
    }
    this.others = [2,4,2,'faas','afasafsfa','afsasfxzzx']
    this.dataservice.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    })
  }

  onClick(){
    this.work = 'Now'
    this.others.push('Work done')
  }

}

interface Info{
  company:string,
  designation:string,
  technology:string
}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}