import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit {

  public profilname: string | null = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.changeDiscussion(this.route.snapshot.params['id']);
  }

  public changeDiscussion(profilname: string): void {
    this.profilname = profilname;
  }
}
