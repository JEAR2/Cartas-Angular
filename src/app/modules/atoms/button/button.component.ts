import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() texto:string='';
  @Input() url:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ruta(){
    this.router.navigate([`${this.url}`]);
  }

}
