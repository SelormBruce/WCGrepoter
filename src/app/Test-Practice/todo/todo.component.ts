import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
form:FormGroup;
  constructor(fb:FormBuilder) {
    this.form = fb.group(
      {
        name: ['',Validators.required],
        email:['']
      }
    );
   }



}
