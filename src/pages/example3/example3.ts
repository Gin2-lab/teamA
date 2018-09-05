import { Component } from '@angular/core';
import { IonicPage, NavController/*, NavParams*/ } from 'ionic-angular';

//api呼び出し用
import { GitHubUsersServiceProvider } from '../../providers/git-hub-users-service/git-hub-users-service';
import { User } from '../../providers/git-hub-users-service/User';

/**
 * Generated class for the Example3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-example3',
  templateUrl: 'example3.html',
})
export class Example3Page {
  users: User[];

  constructor(public navCtrl: NavController, /*public navParams: NavParams*/
    private githubUsersSevice: GitHubUsersServiceProvider) {

      console.log('constructor Load Example3Page');
      githubUsersSevice.getUsers().subscribe(users => {this.users = users;

      }, 
    err => console.log(err),
    () => {});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Example3Page');
  }

}
