import { Component, OnInit } from '@angular/core';
import { RepoDetails } from './dataModel';
import { RepoServiceService } from './services/repo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'fyleSumitPOC';
  repos: RepoDetails[] = [];
  page: number = 1;
  itemsPerPage = 6;
  totalItems: any;
  isLoading: boolean = false;
  currentUser: string = 'johnpapa';
  userName: string = "johnpapa";

  imageSource = `https://avatars.githubusercontent.com/${this.currentUser}`;
  constructor(private repoService: RepoServiceService) {

  }

  ngOnInit(): void {
    this.getData(this.page, this.itemsPerPage, true, this.currentUser);
  }

  getUserRepos(event: Event) {
    this.currentUser = this.userName;
    this.getData(this.page, this.itemsPerPage, true, this.currentUser);
  }


  async getData(page: number, itemsPerPage: number, isFirstCall: boolean, userName: string) {
    this.isLoading = true;
    this.repoService.getRepos(page, itemsPerPage, isFirstCall, userName).subscribe(res => {
      this.repos = res;
      if (isFirstCall) {
        this.totalItems = res.length;
      }
    });
    await this.delay(3000);
    this.isLoading = false;
  }

  getPageData(page: any) {
    this.getData(page, this.itemsPerPage, false, this.currentUser);
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}





