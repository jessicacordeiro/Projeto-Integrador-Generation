import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artesao',
  templateUrl: './artesao.component.html',
  styleUrls: ['./artesao.component.css']
})
export class ArtesaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void  {  
  };

  classApplied = false;

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  

  
}
