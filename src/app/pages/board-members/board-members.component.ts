import { Component } from '@angular/core';
import boardMembers from '../../../assets/boardMembers.json';
@Component({
  templateUrl: './board-members.component.html',
  styleUrls: ['./board-members.component.scss']
})
export class BoardMembersComponent {
  board_members = boardMembers;
}
