/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export * from './result.module';
export * from './result.component';
export * from './result-cells';
// Making these partial components not visible to users but comprehensible to ng-packagr.
export { NzResultNotFoundComponent as ɵNzResultNotFoundComponent } from './partial/not-found';
export { NzResultServerErrorComponent as ɵNzResultServerErrorComponent } from './partial/server-error.component';
export { NzResultUnauthorizedComponent as ɵNzResultUnauthorizedComponent } from './partial/unauthorized';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmVzdWx0L3B1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLG9CQUFvQixDQUFDO0FBQ25DLGNBQWMsZ0JBQWdCLENBQUM7QUFFL0IseUZBQXlGO0FBQ3pGLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSwwQkFBMEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFBRSw0QkFBNEIsSUFBSSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pILE9BQU8sRUFBRSw2QkFBNkIsSUFBSSw4QkFBOEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9yZXN1bHQubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzdWx0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc3VsdC1jZWxscyc7XG5cbi8vIE1ha2luZyB0aGVzZSBwYXJ0aWFsIGNvbXBvbmVudHMgbm90IHZpc2libGUgdG8gdXNlcnMgYnV0IGNvbXByZWhlbnNpYmxlIHRvIG5nLXBhY2thZ3IuXG5leHBvcnQgeyBOelJlc3VsdE5vdEZvdW5kQ29tcG9uZW50IGFzIMm1TnpSZXN1bHROb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFydGlhbC9ub3QtZm91bmQnO1xuZXhwb3J0IHsgTnpSZXN1bHRTZXJ2ZXJFcnJvckNvbXBvbmVudCBhcyDJtU56UmVzdWx0U2VydmVyRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL3BhcnRpYWwvc2VydmVyLWVycm9yLmNvbXBvbmVudCc7XG5leHBvcnQgeyBOelJlc3VsdFVuYXV0aG9yaXplZENvbXBvbmVudCBhcyDJtU56UmVzdWx0VW5hdXRob3JpemVkQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJ0aWFsL3VuYXV0aG9yaXplZCc7XG4iXX0=