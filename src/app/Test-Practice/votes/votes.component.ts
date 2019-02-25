import { Component} from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent {

  vote: number = 0;

  UpVote() {
     this.vote++;
  }

  DownVote() {
     this.vote--; }
}
