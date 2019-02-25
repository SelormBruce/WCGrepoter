import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { FormBuilder } from '@angular/forms';

describe('TodoComponent', () => {
  //Arrange
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should expect to form controls', () => {
    component = new TodoComponent(new FormBuilder());
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });
  it('form control with name is required', () => {
    let  control=component.form.get('name');
   
  //Act
   control.setValue('');
   //Assert
   expect(control.valid).toBeFalsy();
  });
});
