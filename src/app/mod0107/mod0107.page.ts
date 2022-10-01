import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CookieService  } from 'ngx-cookie-service';
import { ServiceService } from '../mastermodule/service/service.service';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mod0107',
  templateUrl: './mod0107.page.html',
  styleUrls: ['./mod0107.page.scss'],
})
export class Mod0107Page implements OnInit {

  constructor(private storage:Storage, private api:ServiceService,public platform: Platform,private router: Router,private cookies:CookieService) {

  }
    

  ngOnInit() {}

  check_no()
  {

    if($("#number").val()!="")
    {
      
      var no = $("#number").val();
      var no_count =no.toString().length;

      if( no_count !=10){
        this.api.presentAlert("Please Enter Valid Mobile number")
      }
      else
      {
        //this.login();
      }

    }
    
  }

  ajax_search_mob(){
    var no = $("#number").val();
    var res={}
    this.api.call_api_post(environment.API_URL+"mastermodule/login",{ "number": no })
    .subscribe((res:any) => {
      var result = res.data;
      console.log('login',result)
  
      if(result['message']=="ok")
      {  
      
          this.storage.create();
          
          //this.cookies.delete('session_key')
          this.storage.set('session_key',result['session_key']);
          this.cookies.set('session_key',result['session_key']);
        
          this.api.presentAlert("Login successfully")

            let timeInMs = 3000;
            let timeout= setTimeout( () => {
              this.login_reset_form()
              this.router.navigate(['/master'])
            }, timeInMs );
        
      }
      else if (result['message']=="incorrect_password")
      {
          this.api.presentAlert("Incorrect Password")
          $("#password").val("")

          let timeInMs = 1500;
          let timeout= setTimeout( () => {
            $("#password").focus()
          }, timeInMs );
        
      }
      else 
      {
        this.api.presentAlertConfirm()
      }
    })
  }
  
}