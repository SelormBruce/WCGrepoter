import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  //Arrange
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should be upvote', () =>{
    //Act
    component.UpVote();
//Assert
    expect(component.vote).toBe(1);
  });
  it('Should be Downvote', () =>{
    //Act
    component.DownVote();
    //Assert
    expect(component.vote).toBe(-1);
  });
});
