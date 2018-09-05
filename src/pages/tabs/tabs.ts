import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

//各サンプルのページをインポート
import { Example1Page } from '../example1/example1';
import { Example2Page } from '../example2/example2';
import { Example3Page } from '../example3/example3';
import { Example4Page } from '../example4/example4';
import { Example5Page } from '../example5/example5';
import { Example6Page } from '../example6/example6';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Example1Page;
  tab3Root = Example2Page;
  tab4Root = Example3Page;
  tab5Root = Example4Page;
  tab6Root = Example5Page;
  tab7Root = Example6Page;

  constructor() {

  }
}
