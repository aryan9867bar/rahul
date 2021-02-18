import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  typeWriter:any;
  showInfo:boolean;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.showInfo = true
    var i = 0;
    var txt = 'Lorem ipsum dummy text blabla.';
    var speed = 50;
    
     this.typeWriter = () => {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(this.typeWriter, speed);
      }
    }

  }


  showText(){
    if(this.showInfo) {
      this.typeWriter();
      this.showInfo = false;
    } else {
      document.getElementById("demo").innerHTML ="";
      this.showInfo = true;
    }
    

  } 
}
