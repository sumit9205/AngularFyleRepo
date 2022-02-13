import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {

  constructor(private http: HttpClient) { }

    getRepos(page: number , itemsPerPage: number , isFirstCall: boolean, userName: string) : Observable<any>{
      let queryParams = new HttpParams();
      if(page)
      queryParams = queryParams.append("page",page);
      if(itemsPerPage)
      queryParams = queryParams.append("per_page",itemsPerPage);


      var httpHeaders = new HttpHeaders().set('Accept', 'application/vnd.github.v3+json');
      // httpHeaders.append("Accept", "application/vnd.github.v3+json");
      let httpOptions = {} ; 
      if(isFirstCall==false){
       httpOptions =  {
        'headers': httpHeaders,
        'params':   queryParams
    };
  }

      return  this.http.get(`https://api.github.com/users/${userName}/repos`,httpOptions)
      .pipe(
        catchError((err) => {
          console.error(err);
          //Handle the error here
          return throwError(err);    //Rethrow it back to component
        })
      ) ;
      
    }
}
