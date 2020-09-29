# do-ngx
Dongkap | Web Application

## Code Scaffolding

### 1.	Generate Application
```sh
$ ng generate application do-ngx --routing=true --prefix=do --style=scss
$ ng generate library ngx-common --prefix=do
$ ng generate library ngx-auth --prefix=do
$ ng generate library ngx-extra --prefix=do
```

### 2.	Restructure @dongkap/do-mock
- Added features :
1. *@dongkap/do-mock/src/app/@mock/pages/exercise*
2. *@dongkap/do-mock/src/assets/data*
3. *@dongkap/do-mock/src/assets/images/avatars*
4. *@dongkap/do-mock/src/assets/i18n*
- Changed features :
1. *@dongkap/do-mock/src/environments*
2. *@dongkap/do-mock/src/app/app.module.ts*
3. *@dongkap/do-mock/src/app/app.component.ts*
4. *@dongkap/do-mock/src/index.html*
5. *@dongkap/do-mock/src/app/@mock/pages/editors/ckeditor/ckeditor.component.ts*