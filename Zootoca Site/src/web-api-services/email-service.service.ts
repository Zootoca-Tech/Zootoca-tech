import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  Base_Url = 'https://localhost:7290/';

  constructor(private http: HttpClient) { }

  ///send email///
  sendemail(data:any){
   console.log(data)
    return this.http.post(this.Base_Url + 'api/Email/Sendmail', data).pipe(map((res: any) => res));
   
  }

}
