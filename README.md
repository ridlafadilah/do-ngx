# do-ngx [![Actions Status](https://github.com/ridlafadilah/do-ngx/workflows/Dongkap%20CI/badge.svg)](https://github.com/ridlafadilah/do-ngx/actions)
Dongkap | Web Application with Angular

```

   __| |   ___    _ __     __ _  | | __   __ _   _ __  
  / _` |  / _ \  | '_ \   / _` | | |/ /  / _` | | '_ \ 
 | (_| | | (_) | | | | | | (_| | |   <  | (_| | | |_) |
  \__,_|  \___/  |_| |_|  \__, | |_|\_\  \__,_| | .__/ 
                          |___/                 |_|    

```

## Features
A big thank you to [Akveo team](https://www.akveo.com?utm_campaign=services%20-%20akveo%20website%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=from_developers_made_by) for their contribution in building [ngx-admin](https://github.com/akveo/ngx-admin) with full feature support. :thumbsup:

In this framework I only added a few features, including:
* __Integrate with API__
  * OAuth2
  * JWT
  * Interceptor Header Signature (Hmac SHA-256)
  * Interceptor Header Accept-Language

* __IndexedDB__

* __Social Sign On__
  * Google

* __Google reCAPTCHA v2__

* __i18n with ngx-translate__

* __Simple Admin Template__
  * Login
  * Registration
  * Forgot Password
  * Change Password
  * Update Profile
  * Upload Photo Profile
  * Change Language
  * Dark Mode
  * Permission Management
  * System Configuration

* __Components__
  * Input Currency
  * @ng-select
  * @swimlane/ngx-datatable
  * @ng-idle
  * crypto-js
  * tree-ngx

* __PWA__
  * Service Worker
  * Web Push Notification ( _soon_ )

* __Web Socket__ ( _soon_ )


## Environment setup
Make sure following software is installed on your PC.
* [NodeJS 12](https://nodejs.org/en/download/) or later
* [Angular CLI 10](https://www.npmjs.com/package/@angular/cli)
* [NPM 6](https://www.npmjs.com/package/npm) or later
* [Visual Studio Code](https://code.visualstudio.com/download)


## Compile & Test
* __Development__

  ```
  $ npm install
  $ npm run start:do-ngx
  ```
  or
  ```
  $ npm install
  $ npm run install:do-core
  $ npm run install:do-theme
  $ npm run install:do-common
  $ npm run install:do-storage
  $ npm run install:do-auth
  $ npm run install:do-extra
  $ npm run install:do-sys
  $ npm run install:do-exercise
  $ npm run start:do-ngx
  ```

* __API__
  
  Please testing with [Dongkap Java API](https://github.com/ridlafadilah/do-api)
  
  or you can try the Dongkap development API:
  ```
  $ npm run start:do-ngx:heroku
  ```
  > :warning: _If you are using the Dongkap Develpoment API, sometimes the connection to the server may timeout_

## Demo
* [do-ngx](https://ridlafadilah.github.io/do-ngx/index.html)
* [ngx-admin](http://www.akveo.com/ngx-admin/?utm_campaign=ngx_admin%20-%20demo%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=live_demo_link)

## How can I support?
  * Star Dongkap GitHub repo :star:
  * Create pull requests, submit bugs, suggest new features
  * If this project help you reduce time to develop, you can give me a cup of coffee :smiley:
    
    [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](http://paypal.me/ridlafadilah)
