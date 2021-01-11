import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpAbstractService } from './http-abstract.service';
import { signatureHeader, HttpMethod } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
var HttpCommonService = /** @class */ (function (_super) {
    __extends(HttpCommonService, _super);
    function HttpCommonService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    HttpCommonService.prototype.HTTP_AUTH = function (api, body, headers, params, pathVariable, responseType) {
        if (headers) {
            headers = headers.append(signatureHeader.mark, 'true');
        }
        else
            headers = new HttpHeaders().append(signatureHeader.mark, 'true');
        responseType = responseType ? responseType : 'json';
        return this.HTTP_BASE(api, body, headers, params, pathVariable, responseType);
    };
    HttpCommonService.prototype.HTTP_BASE = function (api, body, headers, params, pathVariable, responseType) {
        var response = null;
        responseType = responseType ? responseType : 'json';
        switch (api.method) {
            case HttpMethod.POST:
                response = this.POST(this.API(api, pathVariable), body, headers, params, responseType);
                break;
            case HttpMethod.PUT:
                response = this.PUT(this.API(api, pathVariable), body, headers, params);
                break;
            case HttpMethod.DELETE:
                response = this.DELETE(this.API(api, pathVariable), headers, params);
                break;
            default:
                response = this.GET(this.API(api, pathVariable), headers, params, responseType);
                break;
        }
        return response;
    };
    HttpCommonService.prototype.GET = function (url, headers, params, responseType) {
        return this.http.get(url, { headers: headers, params: params, responseType: responseType });
    };
    HttpCommonService.prototype.POST = function (url, body, headers, params, responseType) {
        return this.http.post(url, body, { headers: headers, params: params, responseType: responseType });
    };
    HttpCommonService.prototype.PUT = function (url, body, headers, params) {
        return this.http.put(url, body, { headers: headers, params: params });
    };
    HttpCommonService.prototype.DELETE = function (url, headers, params) {
        return this.http.delete(url, { headers: headers, params: params });
    };
    HttpCommonService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    HttpCommonService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HttpCommonService_Factory() { return new HttpCommonService(i0.ɵɵinject(i1.HttpClient)); }, token: HttpCommonService, providedIn: "root" });
    HttpCommonService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    HttpCommonService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return HttpCommonService;
}(HttpAbstractService));
export { HttpCommonService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1jb21tb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bkb25na2FwL2RvLWNvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdXRpbHMvaHR0cC1jb21tb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBaUIsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRTFFO0lBR3VDLHFDQUFtQjtJQUV4RCwyQkFBc0IsSUFBZ0I7UUFBdEMsWUFDRSxpQkFBTyxTQUNSO1FBRnFCLFVBQUksR0FBSixJQUFJLENBQVk7O0lBRXRDLENBQUM7SUFFTSxxQ0FBUyxHQUFoQixVQUFpQixHQUFrQixFQUNqQixJQUFVLEVBQ1YsT0FBcUIsRUFDckIsTUFBbUIsRUFDbkIsWUFBdUIsRUFDdkIsWUFBcUM7UUFDckQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEOztZQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlB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ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBBYnN0cmFjdFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtYWJzdHJhY3Quc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQmFzZU1vZGVsLCBzaWduYXR1cmVIZWFkZXIsIEh0dHBNZXRob2QgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgSHR0cENvbW1vblNlcnZpY2UgZXh0ZW5kcyBIdHRwQWJzdHJhY3RTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgSFRUUF9BVVRIKGFwaTogSHR0cEJhc2VNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgYm9keT86IGFueSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBwYXRoVmFyaWFibGU/OiBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nIHwgJ2FycmF5YnVmZmVyJyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLmFwcGVuZChzaWduYXR1cmVIZWFkZXIubWFyaywgJ3RydWUnKTtcbiAgICB9IGVsc2UgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLmFwcGVuZChzaWduYXR1cmVIZWFkZXIubWFyaywgJ3RydWUnKTtcbiAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgPyByZXNwb25zZVR5cGUgOiAnanNvbic7XG4gICAgcmV0dXJuIHRoaXMuSFRUUF9CQVNFKGFwaSwgYm9keSwgaGVhZGVycywgcGFyYW1zLCBwYXRoVmFyaWFibGUsIHJlc3BvbnNlVHlwZSk7XG4gIH1cblxuICBwdWJsaWMgSFRUUF9CQVNFKGFwaTogSHR0cEJhc2VNb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgYm9keT86IGFueSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycz86IEh0dHBIZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM/OiBIdHRwUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBwYXRoVmFyaWFibGU/OiBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlPzogJ2pzb24nIHwgJ2FycmF5YnVmZmVyJyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IHJlc3BvbnNlOiBPYnNlcnZhYmxlPGFueT4gPSBudWxsO1xuICAgIHJlc3BvbnNlVHlwZSA9IHJlc3BvbnNlVHlwZSA/IHJlc3BvbnNlVHlwZSA6ICdqc29uJztcbiAgICBzd2l0Y2ggKGFwaS5tZXRob2QpIHtcbiAgICAgIGNhc2UgSHR0cE1ldGhvZC5QT1NUOlxuICAgICAgICByZXNwb25zZSA9IHRoaXMuUE9TVCh0aGlzLkFQSShhcGksIHBhdGhWYXJpYWJsZSksIGJvZHksIGhlYWRlcnMsIHBhcmFtcywgcmVzcG9uc2VUeXBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBNZXRob2QuUFVUOlxuICAgICAgICByZXNwb25zZSA9IHRoaXMuUFVUKHRoaXMuQVBJKGFwaSwgcGF0aFZhcmlhYmxlKSwgYm9keSwgaGVhZGVycywgcGFyYW1zKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEh0dHBNZXRob2QuREVMRVRFOlxuICAgICAgICByZXNwb25zZSA9IHRoaXMuREVMRVRFKHRoaXMuQVBJKGFwaSwgcGF0aFZhcmlhYmxlKSwgaGVhZGVycywgcGFyYW1zKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXNwb25zZSA9IHRoaXMuR0VUKHRoaXMuQVBJKGFwaSwgcGF0aFZhcmlhYmxlKSwgaGVhZGVycywgcGFyYW1zLCByZXNwb25zZVR5cGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIEdFVCh1cmw6IHN0cmluZywgaGVhZGVycz86IEh0dHBIZWFkZXJzLCBwYXJhbXM/OiBIdHRwUGFyYW1zLCByZXNwb25zZVR5cGU/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwge2hlYWRlcnM6IGhlYWRlcnMsIHBhcmFtczogcGFyYW1zLCByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZX0pO1xuICB9XG5cbiAgcHVibGljIFBPU1QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgaGVhZGVycz86IEh0dHBIZWFkZXJzLCBwYXJhbXM/OiBIdHRwUGFyYW1zLCByZXNwb25zZVR5cGU/OiBhbnkpOlxuICAgIE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnMsIHBhcmFtczogcGFyYW1zLCByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZX0pO1xuICB9XG5cbiAgcHVibGljIFBVVCh1cmw6IHN0cmluZywgYm9keTogYW55LCBoZWFkZXJzPzogSHR0cEhlYWRlcnMsIHBhcmFtcz86IEh0dHBQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnMsIHBhcmFtczogcGFyYW1zfSk7XG4gIH1cblxuICBwdWJsaWMgREVMRVRFKHVybDogc3RyaW5nLCBoZWFkZXJzPzogSHR0cEhlYWRlcnMsIHBhcmFtcz86IEh0dHBQYXJhbXMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge2hlYWRlcnM6IGhlYWRlcnMsIHBhcmFtczogcGFyYW1zfSk7XG4gIH1cblxufVxuIl19