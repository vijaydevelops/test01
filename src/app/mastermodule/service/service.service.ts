import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as $ from "jquery";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { CookieService  } from 'ngx-cookie-service';
import { Storage } from '@ionic/storage';
import { Http,HttpOptions } from '@capacitor-community/http';
import { from,Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  session_key="";
  result={
    'action':'1',
    'response':{}
  }
  response={}
  action="1"
  isLoading = false;

  constructor(public loadingController: LoadingController,public alertController:AlertController,private storage:Storage,public platform: Platform,private router: Router,private cookies:CookieService) 
  {
    
  }

  call_api_post(url,data) :Observable<any>{
    const options :HttpOptions= {
      url: url,
      method:"POST",
      headers: {"Content-Type":"application/json" },
      data: data,
    };

    return from(Http.request(options));

  }
  call_api_post_for_image(url,data) :Observable<any>{
    const options :HttpOptions= {
      url: url,
      method:"POST",
      headers: {"Content-Type":"multipart/form-data" },
      data: data,
    };

    return from(Http.request(options));

  }






  get_session_id_login()
  {
    if (this.platform.is('cordova')) {
           return "";
      
      }
      else
      {

        return this.cookies.get('session_key');
      }

  }

// For alert 
  async presentAlert(input_msg) 
  {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Message',
      
      message: input_msg,
      buttons: ['OK']
    });
  
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  } 


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'User not Found',
      message: 'Are you want to register?',
      buttons: [
        {
          text: 'Try again',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Register',
          id: 'confirm-button',
          handler: () => {
            this.router.navigate(['/register'])
          }
        }
      ]
    });

    await alert.present();
  }




  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

}
