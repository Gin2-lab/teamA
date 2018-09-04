import { Component } from '@angular/core';
import { IonicPage, NavController/*, NavParams*/ } from 'ionic-angular';

//api呼び出し用
import { GitHubUsersServiceProvider } from '../../providers/git-hub-users-service/git-hub-users-service';
import { User } from '../../providers/git-hub-users-service/User';

/**
 * Generated class for the YaguchiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yaguchi',
  templateUrl: 'yaguchi.html',
})
export class YaguchiPage {
  users: User[];

  constructor(public navCtrl: NavController, /*public navParams: NavParams*/
    private githubUsersSevice: GitHubUsersServiceProvider) {

      console.log('constructor Load YaguchiPage');
      githubUsersSevice.getUsers().subscribe(users => {this.users = users;

      }, 
    err => console.log(err),
    () => {});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YaguchiPage');
  }

}
