import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

//各人のページをインポート
import { MikiPage } from '../miki/miki';
import { KawaguchiPage } from '../kawaguchi/kawaguchi';
import { HasegawaPage } from '../hasegawa/hasegawa';
import { YaguchiPage } from '../yaguchi/yaguchi';
import { TaguchiPage } from '../taguchi/taguchi';
import { NishimuraPage } from '../nishimura/nishimura';
import { RyuPage } from '../ryu/ryu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MikiPage;
  tab2Root = KawaguchiPage;
  tab3Root = HasegawaPage;
  tab4Root = YaguchiPage;
  tab5Root = TaguchiPage;
  tab6Root = NishimuraPage;
  tab7Root = RyuPage;

  constructor() {

  }
}
