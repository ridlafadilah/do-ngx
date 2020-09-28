# do-ngx
Dongkap | Web Application

## Code Scaffolding

### 1.	Generate Application
```sh
$ ng generate application do-ngx --routing=true --prefix=ngx --style=scss
$ ng generate library ngx-common --prefix=ngx
$ ng generate library ngx-auth --prefix=ngx
$ ng generate library ngx-extra --prefix=ngx
```

### 5.	Restructure @dongkap/do-mock
- Add features :
1. *@dongkap/do-mock/src/app/@mock/pages/exercise*
2. *@dongkap/do-mock/src/configs*
3. *@dongkap/do-mock/src/assets/data*
3. *@dongkap/do-mock/src/assets/images/avatars*
- Changed features :
1. *@dongkap/do-mock/src/environments*
2. *@dongkap/do-mock/src/app/app.module.ts*