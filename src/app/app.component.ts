import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //this is a var
  title = 'My-First-Project-New';
  assignment1:String = "Created Starter Angular file and completed Assignment 1"
  assignment1Var:Number = 23;
}
