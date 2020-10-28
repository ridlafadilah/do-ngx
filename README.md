# do-ngx
Dongkap | Skeleton of [do-ngx](https://github.com/ridlafadilah/do-ngx)

## Code Scaffolding

### 1.	Generate Project
```sh
$ ng new do-ngx --create-application=false --routing=false --style=scss --skipGit=true --commit=false -S --newProjectRoot=@dongkap
```
- copy source from [akveo](https://github.com/akveo/ngx-admin)

### 2.	Generate Application
```sh
$ ng generate application do-mock --routing=true --prefix=ngx --style=scss
$ ng generate library do-core --prefix=do
$ ng generate library do-theme --prefix=do
```

### 3.	Config Library @dongkap/do-core
- change name angular.json `projects.do-core` to `@dongkap/do-core`
- rename file *@dongkap/do-core/src/public-api.ts* to *index.ts*
- change name *@dongkap/do-core/ng-package.json* `src/public-api.ts` to `src/index.ts`
- change name *@dongkap/do-core/ng-package.json* `/dist/do-core` to `/dist/@dongkap/do-core`
- change name *@dongkap/do-core/package.json* at `"name": "do-core "` to `"name": "@dongkap/do-core"`
- adjust *tsconfig.lib.json*
- adjust *tsconfig.spec.json*
- create new file *@dongkap/do-core/src/lib/core.module.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/analytics.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/layout.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/seo.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils/state.service.ts* to *@dongkap/do-core/src/lib/services/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/module-import-guard.ts* to *@dongkap/do-core/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/data/users.ts* to *@dongkap/do-core/src/lib/models/utils*

### 4.	Config Library @dongkap/do-theme
- change name angular.json `projects.do-theme` to `@dongkap/do-theme`
- rename file *@dongkap/do-theme/src/public-api.ts* to *index.ts*
- change name *@dongkap/do-theme/ng-package.json* `src/public-api.ts` to `src/index.ts`
- change name *@dongkap/do-theme/ng-package.json* `/dist/do-theme` to `/dist/@dongkap/do-theme`
- change name *@dongkap/do-theme/package.json* at `"name": "do-theme "` to `"name": "@dongkap/do-theme"`
- adjust *tsconfig.lib.json*
- adjust *tsconfig.spec.json*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/components* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/directives* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/layouts* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/pipes* to *@dongkap/do-theme/src/lib*
- copy from [akveo](https://github.com/akveo/ngx-admin) *@theme/styles* to *@dongkap/do-theme/src/lib*
- `mkdir @dongkap/do-theme/src/styles`
- copy `@dongkap/do-theme/src/lib/styles/*.scss` to `@dongkap/do-theme/src/styles`
- copy `opensans.css`, `fonts/*` from [master](https://github.com/ridlafadilah/do-ngx/tree/master/%40dongkap/do-theme/src/styles)
- change in *@dongkap/do-theme/src/styles/syles.scss*  `@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');` to `@import 'opensans.css';`
- delete `@dongkap/do-theme/src/lib/components/tiny-mce`
- adjust *do-theme.module.ts*
- change `@dongkap/do-theme/src/lib/layouts/*.scss` `@import '../../styles/themes';` to `@import '../../../styles/themes`
- change `@dongkap/do-theme/src/lib/components/*.scss` `@import '../../styles/themes';` to `@import '../../../styles/themes`
- delete in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/default';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/dark';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/cosmic';`
- add in *@dongkap/do-theme/src/styles/theme.scss* `@import '~@nebular/theme/styles/themes/corporate';`
- delete *@dongkap/do-theme/src/lib/components/index.ts*
- delete *@dongkap/do-theme/src/lib/layouts/index.ts*
- delete *@dongkap/do-theme/src/lib/pipes/index.ts*
- change angular.json `src/app/@theme/styles/styles.scss` to `node_modules/@dongkap/do-theme/styles/styles.scss`
- add angular.json `node_modules/flag-icon-css/css/flag-icon.min.css`

### 5.	Restructure Template @dongkap/do-mock
- change name angular.json `projects.do-mock` to `@dongkap/do-mock`
- adjust *tsconfig.app.json*
- adjust *tsconfig.spec.json*
- `mkdir src/app/@mock`
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/data* to *@dongkap/do-mock/src/app/@mock/data*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/mock* to *@dongkap/do-mock/src/app/@mock/mock*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@core/utils* to *@dongkap/do-mock/src/app/@mock/utils*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages* to *@dongkap/do-mock/src/app/@mock/pages*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages-menu.ts* to *@dongkap/do-mock/src/app/@mock/pages-menu.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages-routing.module.ts* to *@dongkap/do-mock/src/app/@mock/mock-routing.module.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages.component.scss* to *@dongkap/do-mock/src/app/@mock/mock.component.scss*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages.component.ts* to *@dongkap/do-mock/src/app/@mock/mock.component.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/pages/pages.module.ts* to *@dongkap/do-mock/src/app/@mock/mock.module.ts*
- delete *@dongkap/do-mock/src/app/@mock/data/users.ts*
- rename *src/app/@mock/pages/editors/tiny-mce/tiny-mce.component.ts* to *src/app/@mock/pages/editors/tiny-mce/tiny-mce-page.component.ts*
- copy from [akveo](https://github.com/akveo/ngx-admin) *src/app/@theme/components/tiny-mce/tiny-mce.component.ts* to *src/app/@mock/pages/editors/tiny-mce/tiny-mce.component.ts*
- change `@dongkap/do-mock/src/lib/pages/dashboard/rooms/rooms.component.scss` `../../../../assets/images/square_pattern.svg';` to `/assets/images/square_pattern.svg`
- change `@dongkap/do-mock/src/lib/pages/dashboard/rooms/rooms.component.scss` `../../../../assets/images/square_pattern_cosmic.svg';` to `/assets/images/square_pattern_cosmic.svg`
