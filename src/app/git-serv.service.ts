// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GitServService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class GitServe {
  getUser(value: any) {
    throw new Error("Method not implemented.");
  }

  private username: string;
  private clientid = '4900d3dcfcb7e3742215';
  private clientsecret = '625b7f159f295828cc3824752bd0fe95790202dd';
  constructor(private http: Http) {
    // tslint:disable-next-line: quotemark
    // console.log("Service is now ready!");
    this.username = 'YomiRich';
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	// tslint:disable-next-line: indent
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
