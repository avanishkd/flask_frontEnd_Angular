import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  VkontakteLoginProvider
} from 'angular-6-social-login-v2';
import { LinkedinLoginProvider } from "angular-6-social-login-v2";


@Component({
  selector: 'app-social2',
  templateUrl: './social2.component.html',
  styleUrls: ['./social2.component.css']
})
export class Social2Component implements OnInit {

  constructor(private socialAuthService: AuthService) { }



  ngOnInit() {
  }


  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "vkontakte") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }


    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);

      }
    );
  }

}