import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//GoogleMapモジュールのimport
import { Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the Example1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-example1',
  templateUrl: 'example1.html',
})
export class Example1Page {

  map: GoogleMap;

  /*
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  */
  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }
  /*
    ionViewDidLoad() {
      console.log('ionViewDidLoad example1');
      this.loadMap();
    }
    */
  /*
   loadMap() {
 
     console.log('loadMap Start');
 
     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
     };
 
     console.log('GoogleMaps Create');
     this.map = GoogleMaps.create('map_canvas', mapOptions);
 
     let marker: Marker = this.map.addMarkerSync({
       title: 'Ionic',
       icon: 'blue',
       animation: 'DROP',
       position: {
         lat: 43.0741904,
         lng: -89.3809802
       }
     });
     console.log('GoogleMapsEvent marker on');
     marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
       alert('clicked');
     });
   }
 */
  /*
    loadMap() {
  
      console.log('loadMap');
      // 表示したい位置にある<div>のidを指定
      this.map = GoogleMaps.create('map_canvas');
  
      // MAP_READYイベントが来るまで待ちます
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map Ready');
      });
    }

  loadMap() {
    console.log('loadMap Start');

    this.map = GoogleMaps.create('map_canvas');

    // The `MAP_READY` event notifies the native map view is fully ready.
    this.map.one(GoogleMapsEvent.MAP_READY).then(this.onMapReady.bind(this));
 /*
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map Ready');
    });

  }

  onMapReady() {
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe((params: any[]) => {

    })
    console.log('MAP_READY!');
  }
}
*/

  loadMap() {
    console.log('loadMap Start');

    let element: HTMLElement = document.getElementById('map_canvas');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    let map: GoogleMap = GoogleMaps.create(element, mapOptions);

    console.log('Map Event');
    // Wait the MAP_READY before using any methods.
    map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
              alert('clicked');
            });
          });
      });
  }
}