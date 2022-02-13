import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-description',
  templateUrl: './repo-description.component.html',
  styleUrls: ['./repo-description.component.scss']
})
export class RepoDescriptionComponent implements OnInit {


  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() topics: String[] | undefined;
  constructor() { }

  ngOnInit(): void {

  }

}
