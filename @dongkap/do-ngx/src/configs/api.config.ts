import { APIModel, HttpMethod } from '@dongkap/do-core';
import { environment } from '../environments/environment';

export const apiPath: APIModel = {
    auth: {
        token: {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/do/oauth/token',
        },
    },
    security: {
        'change-password': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/trx/post/change-password/v.1',
        },
        'deactivated': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/trx/post/deactivated/v.1',
        },
        'change-settings': {
            server: environment.host.security,
            method: HttpMethod.PUT,
            path: '/do/api/security/trx/put/settings/v.1',
        },
        'get-settings': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/do/api/security/vw/get/settings/v.1',
        },
        'get-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/do/api/security/vw/get/menus/v.1',
        },
        'get-tree-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/do/api/security/vw/auth/tree/menus/v.1',
        },
        'select-main-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/do/api/security/vw/auth/select/main-menus/v.1',
        },
        'post-menus': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/trx/auth/menu/v.1',
        },
        'datatable-user': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/vw/auth/datatable/user/v.1',
        },
        'datatable-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/vw/auth/datatable/role/v.1',
        },
        'post-role': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/trx/auth/role/v.1',
        },
        'get-profile-other': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/vw/auth/profile-other/v.1',
        },
        'get-profile-system-other': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/do/api/security/vw/auth/profile-system-other/v.1',
        },
    },
    profile: {
        'change-profile': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/do/api/profile/trx/post/profile/v.1',
        },
        'get-profile': {
            server: environment.host.profile,
            method: HttpMethod.GET,
            path: '/do/api/profile/vw/get/profile/v.1',
        },
        'change-profile-system': {
            server: environment.host.profile,
            method: HttpMethod.POST,
            path: '/do/api/profile/trx/auth/profile-system/v.1',
        },
        'get-profile-system': {
            server: environment.host.profile,
            method: HttpMethod.GET,
            path: '/do/api/profile/vw/auth/profile-system/v.1',
        },
    },
    master: {
        'select-country': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/country/v.1',
        },
        'select-province': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/province/v.1',
        },
        'select-city': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/city/v.1',
        },
        'select-district': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/district/v.1',
        },
        'select-subdistrict': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/subdistrict/v.1',
        },
        'datatable-city': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/auth/datatable/city/v.1',
        },
        'select-language': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/language/v.1',
        },
        'select-all-locale': {
            server: environment.host.master,
            method: HttpMethod.GET,
            path: '/do/api/master/vw/get/select/all/locale/v.1',
        },
        'all-locale': {
            server: environment.host.master,
            method: HttpMethod.GET,
            path: '/do/api/master/vw/get/all/locale/v.1',
        },
        'post-locale': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/trx/auth/locale/v.1',
        },
        'datatable-locale': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/auth/datatable/locale/v.1',
        },
        'select-parameter': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/post/select/parameter-i18n/v.1',
        },
        'datatable-parameter-group': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/auth/datatable/parameter-group/v.1',
        },
        'datatable-parameter': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/auth/datatable/parameter/v.1',
        },
        'all-parameter-i18n': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/vw/auth/all/parameter-i18n/v.1',
        },
        'post-parameter-i18n': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/trx/auth/parameter-i18n/v.1',
        },
        'post-parameter-group': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/trx/auth/parameter-group/v.1',
        },
        'delete-parameter-group': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/do/api/master/trx/auth/delete/parameter-group/v.1',
        },
    },
    file: {
        'photo-profile': {
            server: environment.host.file,
            method: HttpMethod.POST,
            path: '/do/api/file/trx/auth/photo-profile/v.1',
        },
        'vw-photo-profile': {
            server: environment.host.file,
            method: HttpMethod.GET,
            path: '/do/api/file/vw/get/photo-profile/v.1',
        },
        'evidence': {
            server: environment.host.file,
            method: HttpMethod.GET,
            path: '/do/api/file/vw/get/evidence/v.1',
        },
    },
    notification: {
        'send-broadcast': {
            server: environment.host.notification,
            method: HttpMethod.POST,
            path: '/do/api/notification/trx/post/broadcast/v.1',
        },
        'push-subscribe': {
            server: environment.host.notification,
            method: HttpMethod.POST,
            path: '/do/api/notification/push/subscribe/v.1',
        },
    },
};
