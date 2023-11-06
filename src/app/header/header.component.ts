import { Component } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links: Link[] = [
    {path: 'app-hero', title: 'HOME'},
    {path: 'app-about', title: 'ABOUT'},
    {path: 'app-skill', title: 'SKILL'},
    {path: 'app-work', title: 'WORK'},
    {path: 'app-projects', title: 'PROJECT'},
    {path: 'app-contacts', title: 'CONTACTS'},
  ] 

}
