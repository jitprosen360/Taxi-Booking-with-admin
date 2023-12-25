"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[251],{5251:(L,m,d)=>{d.r(m),d.d(m,{UsersModule:()=>V});var g=d(6814),a=d(6223),v=d(425),_=d(4506),e=d(5879),C=d(9862);let U=(()=>{var o;class l{constructor(t){this.http=t,this.serverUrl=_.N.apiUrl,this.countryAPI="https://restcountries.com/v3.1/all"}getcode(){return this.http.get(`${this.serverUrl}/countrydata`)}addUser(t){return this.http.post(`${this.serverUrl}/adduser`,t)}deleteUser(t){return this.http.delete(`${this.serverUrl}/userdata/${t}`)}updateUser(t,n){return console.log(n),this.http.put(`${this.serverUrl}/updateuser/${t}`,n)}getUsers(t,n,i,s,u){const c={search:t,page:n.toString(),limit:i.toString(),sortBy:s,sortOrder:u};return this.http.get(`${this.serverUrl}/userdata`,{params:c})}}return(o=l).\u0275fac=function(t){return new(t||o)(e.LFG(C.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),l})();var x=d(9229),Z=d(7682),b=d(7700),p=d(7988),h=d(617),f=d(2296);function A(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Name is required."),e.qZA())}function P(o,l){if(1&o&&(e.TgZ(0,"div",49),e.YNc(1,A,2,0,"div",50),e.qZA()),2&o){const r=e.oxw(2);let t;e.xp6(1),e.Q6J("ngIf",null==(t=r.AddForm.get("username"))||null==t.errors?null:t.errors.required)}}function M(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Email is required."),e.qZA())}function T(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Please enter a valid email."),e.qZA())}function O(o,l){if(1&o&&(e.TgZ(0,"div",49),e.YNc(1,M,2,0,"div",50),e.YNc(2,T,2,0,"div",50),e.qZA()),2&o){const r=e.oxw(2);let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.AddForm.get("useremail"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=r.AddForm.get("useremail"))||null==n.errors?null:n.errors.email)}}function F(o,l){if(1&o&&(e.TgZ(0,"option",51),e._uU(1),e.qZA()),2&o){const r=l.$implicit;e.Q6J("value",r),e.xp6(1),e.Oqu(r)}}function y(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Phone is required."),e.qZA())}function q(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Phone number must be 10 digits."),e.qZA())}function N(o,l){if(1&o&&(e.TgZ(0,"div",52),e.YNc(1,y,2,0,"div",50),e.YNc(2,q,2,0,"div",50),e.qZA()),2&o){const r=e.oxw(2);let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.AddForm.get("userphone"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=r.AddForm.get("userphone"))||null==n.errors?null:n.errors.minlength)}}function J(o,l){if(1&o){const r=e.EpF();e.TgZ(0,"div",32)(1,"h2",33),e._uU(2,"User Registration"),e.qZA(),e.TgZ(3,"form",34),e.NdJ("ngSubmit",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.AddUser())}),e.TgZ(4,"div",33)(5,"label",35),e._uU(6,"User Name"),e.qZA(),e._UZ(7,"input",36),e.YNc(8,P,2,1,"div",37),e.qZA(),e.TgZ(9,"div",33)(10,"label",35),e._uU(11,"User Email"),e.qZA(),e._UZ(12,"input",38),e.YNc(13,O,3,2,"div",37),e.qZA(),e.TgZ(14,"div",39)(15,"label",35),e._uU(16,"Phone Number"),e.qZA(),e.TgZ(17,"div",40)(18,"select",41,42),e.NdJ("change",function(){e.CHM(r);const n=e.MAs(19),i=e.oxw();return e.KtG(i.onSelected(n.value))}),e.TgZ(20,"option",43),e._uU(21,"Select"),e.qZA(),e.YNc(22,F,2,2,"option",44),e.qZA(),e._UZ(23,"input",45),e.YNc(24,N,3,2,"div",46),e.qZA()(),e.TgZ(25,"div",33)(26,"label",35),e._uU(27,"Upload Profile"),e.qZA(),e.TgZ(28,"input",47),e.NdJ("change",function(n){e.CHM(r);const i=e.oxw();return e.KtG(i.onFileSelected(n))}),e.qZA()(),e.TgZ(29,"div")(30,"button",48),e._uU(31," Submit"),e.qZA()()()()}if(2&o){const r=e.oxw();let t,n,i,s,u,c;e.xp6(3),e.Q6J("formGroup",r.AddForm),e.xp6(4),e.ekj("is-invalid",(null==(t=r.AddForm.get("username"))?null:t.invalid)&&((null==(t=r.AddForm.get("username"))?null:t.touched)||(null==(t=r.AddForm.get("username"))?null:t.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(n=r.AddForm.get("username"))?null:n.invalid)&&((null==(n=r.AddForm.get("username"))?null:n.touched)||(null==(n=r.AddForm.get("username"))?null:n.dirty))),e.xp6(4),e.ekj("is-invalid",(null==(i=r.AddForm.get("useremail"))?null:i.invalid)&&((null==(i=r.AddForm.get("useremail"))?null:i.touched)||(null==(i=r.AddForm.get("useremail"))?null:i.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(s=r.AddForm.get("useremail"))?null:s.invalid)&&((null==(s=r.AddForm.get("useremail"))?null:s.touched)||(null==(s=r.AddForm.get("useremail"))?null:s.dirty))),e.xp6(9),e.Q6J("ngForOf",r.countrycode),e.xp6(1),e.ekj("is-invalid",(null==(u=r.AddForm.get("userphone"))?null:u.invalid)&&((null==(u=r.AddForm.get("userphone"))?null:u.touched)||(null==(u=r.AddForm.get("userphone"))?null:u.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(c=r.AddForm.get("userphone"))?null:c.invalid)&&((null==(c=r.AddForm.get("userphone"))?null:c.touched)||(null==(c=r.AddForm.get("userphone"))?null:c.dirty)))}}function k(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Name is required."),e.qZA())}function w(o,l){if(1&o&&(e.TgZ(0,"div",49),e.YNc(1,k,2,0,"div",50),e.qZA()),2&o){const r=e.oxw(2);let t;e.xp6(1),e.Q6J("ngIf",null==(t=r.userupdateForm.get("updateusername"))||null==t.errors?null:t.errors.required)}}function I(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Email is required."),e.qZA())}function S(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Please enter a valid email."),e.qZA())}function Q(o,l){if(1&o&&(e.TgZ(0,"div",49),e.YNc(1,I,2,0,"div",50),e.YNc(2,S,2,0,"div",50),e.qZA()),2&o){const r=e.oxw(2);let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.userupdateForm.get("updateuseremail"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=r.userupdateForm.get("updateuseremail"))||null==n.errors?null:n.errors.email)}}function Y(o,l){if(1&o&&(e.TgZ(0,"option",51),e._uU(1),e.qZA()),2&o){const r=l.$implicit;e.Q6J("value",r),e.xp6(1),e.Oqu(r)}}function E(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Phone is required."),e.qZA())}function D(o,l){1&o&&(e.TgZ(0,"div"),e._uU(1,"Phone number must be 10 digits."),e.qZA())}function G(o,l){if(1&o&&(e.TgZ(0,"div",52),e.YNc(1,E,2,0,"div",50),e.YNc(2,D,2,0,"div",50),e.qZA()),2&o){const r=e.oxw(2);let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.userupdateForm.get("updateuserphone"))||null==t.errors?null:t.errors.required),e.xp6(1),e.Q6J("ngIf",null==(n=r.userupdateForm.get("updateuserphone"))||null==n.errors?null:n.errors.minlength)}}function j(o,l){if(1&o){const r=e.EpF();e.TgZ(0,"div",53)(1,"div",54)(2,"form",34),e.NdJ("ngSubmit",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.updateUSER())}),e.TgZ(3,"div",33)(4,"label",35),e._uU(5,"User Name"),e.qZA(),e._UZ(6,"input",55),e.YNc(7,w,2,1,"div",37),e.qZA(),e.TgZ(8,"div",33)(9,"label",35),e._uU(10,"User Email"),e.qZA(),e._UZ(11,"input",56),e.YNc(12,Q,3,2,"div",37),e.qZA(),e.TgZ(13,"div",39)(14,"label",35),e._uU(15,"Phone Number"),e.qZA(),e.TgZ(16,"div",40)(17,"select",57,42),e.NdJ("change",function(){e.CHM(r);const n=e.MAs(18),i=e.oxw();return e.KtG(i.onSelected(n.value))}),e.YNc(19,Y,2,2,"option",44),e.qZA(),e._UZ(20,"input",58),e.YNc(21,G,3,2,"div",46),e.qZA()(),e.TgZ(22,"div",33)(23,"label",35),e._uU(24,"Profile"),e.qZA(),e.TgZ(25,"input",59),e.NdJ("change",function(n){e.CHM(r);const i=e.oxw();return e.KtG(i.onFileSelected(n))}),e.qZA()(),e.TgZ(26,"div",60)(27,"button",61),e._UZ(28,"i",62),e._uU(29,"\xa0 Update "),e.qZA(),e.TgZ(30,"button",63),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.updateCancel())}),e._uU(31," Cancel \xa0"),e._UZ(32,"i",64),e.qZA()()()()()}if(2&o){const r=e.oxw();let t,n,i,s,u,c;e.xp6(2),e.Q6J("formGroup",r.userupdateForm),e.xp6(4),e.ekj("is-invalid",(null==(t=r.userupdateForm.get("updateusername"))?null:t.invalid)&&((null==(t=r.userupdateForm.get("updateusername"))?null:t.touched)||(null==(t=r.userupdateForm.get("updateusername"))?null:t.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(n=r.userupdateForm.get("updateusername"))?null:n.invalid)&&((null==(n=r.userupdateForm.get("updateusername"))?null:n.touched)||(null==(n=r.userupdateForm.get("updateusername"))?null:n.dirty))),e.xp6(4),e.ekj("is-invalid",(null==(i=r.userupdateForm.get("updateuseremail"))?null:i.invalid)&&((null==(i=r.userupdateForm.get("updateuseremail"))?null:i.touched)||(null==(i=r.userupdateForm.get("updateuseremail"))?null:i.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(s=r.userupdateForm.get("updateuseremail"))?null:s.invalid)&&((null==(s=r.userupdateForm.get("updateuseremail"))?null:s.touched)||(null==(s=r.userupdateForm.get("updateuseremail"))?null:s.dirty))),e.xp6(7),e.Q6J("ngForOf",r.countrycode),e.xp6(1),e.ekj("is-invalid",(null==(u=r.userupdateForm.get("updateuserphone"))?null:u.invalid)&&((null==(u=r.userupdateForm.get("updateuserphone"))?null:u.touched)||(null==(u=r.userupdateForm.get("updateuserphone"))?null:u.dirty))),e.xp6(1),e.Q6J("ngIf",(null==(c=r.userupdateForm.get("updateuserphone"))?null:c.invalid)&&((null==(c=r.userupdateForm.get("updateuserphone"))?null:c.touched)||(null==(c=r.AddForm.get("updateuserphone"))?null:c.dirty)))}}function $(o,l){if(1&o){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",65),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"button",66)(11,"mat-icon"),e._uU(12,"edit"),e.qZA()(),e.TgZ(13,"mat-menu",null,67)(15,"button",68),e.NdJ("click",function(){const i=e.CHM(r).$implicit,s=e.oxw();return e.KtG(s.updateBtnClick(i))}),e.TgZ(16,"mat-icon"),e._uU(17,"update"),e.qZA(),e._uU(18,"Update"),e.qZA(),e.TgZ(19,"button",69),e.NdJ("click",function(){const i=e.CHM(r).$implicit,s=e.oxw();return e.KtG(s.deleteUser(i._id))}),e.TgZ(20,"mat-icon"),e._uU(21,"delete_forever"),e.qZA(),e._uU(22,"Delete"),e.qZA(),e.TgZ(23,"button",70),e.NdJ("click",function(){const i=e.CHM(r).$implicit,s=e.oxw();return e.KtG(s.openDialog(i))}),e.TgZ(24,"mat-icon"),e._uU(25,"credit_card"),e.qZA(),e._uU(26," Add Card "),e.qZA()()()()}if(2&o){const r=l.$implicit,t=e.MAs(14),n=e.oxw();e.xp6(2),e.Q6J("src",n.apiUrl+"/"+r.profile,e.LSH),e.xp6(2),e.Oqu(r.username),e.xp6(2),e.Oqu(r.useremail),e.xp6(2),e.Oqu(r.countrycode+" "+r.userphone),e.xp6(2),e.Q6J("matMenuTriggerFor",t)}}function B(o,l){if(1&o){const r=e.EpF();e.ynx(0),e.TgZ(1,"button",71),e.NdJ("click",function(){const i=e.CHM(r).$implicit,s=e.oxw();return e.KtG(s.onPageChange(i))}),e._uU(2),e.qZA(),e.BQk()}if(2&o){const r=l.$implicit,t=e.oxw();e.xp6(1),e.ekj("active",r===t.currentPage),e.xp6(1),e.hij(" ",r," ")}}let H=(()=>{var o;class l{constructor(t,n,i,s,u){this._users=t,this.formBuilder=n,this.toastr=i,this.authService=s,this.dialog=u,this.apiUrl=_.N.apiUrl,this.AddbuttonForm=!1,this.updateForm=!1,this.countrycode=[],this.search="",this.usersArray=[],this.paginatedUsers=[],this.currentPage=1,this.limit=5,this.totalPages=0,this.selectedSortBy="name",this.selectedSortOrder="desc"}ngOnInit(){this.getUserData(),this.getcountryCode(),this.AddForm=this.formBuilder.group({profile:[""],username:["",[a.kI.required]],useremail:["",[a.kI.required,a.kI.email]],countrycode:["",[a.kI.required]],userphone:["",[a.kI.required,a.kI.minLength(10)]]}),this.userupdateForm=this.formBuilder.group({updateusername:["",[a.kI.required]],updateuseremail:["",[a.kI.required,a.kI.email]],updatecountrycode:[""],updateuserphone:["",[a.kI.required,a.kI.minLength(10)]]})}getcountryCode(){this._users.getcode().subscribe({next:t=>{t.countrydata.forEach(i=>{this.countrycode.push(i.countryCode)}),this.countrycode.sort()},error:t=>{console.log(t)}})}onSelected(t){this.selectedCC=t,console.log(t)}onFileSelected(t){this.file=t.target.files[0],console.log(this.file)}AddUser(){var t=new FormData;t.append("profile",this.file),t.append("username",this.AddForm.value.username),t.append("useremail",this.AddForm.value.useremail),t.append("countrycode",this.selectedCC),t.append("userphone",this.AddForm.value.userphone),this.AddForm.valid?this._users.addUser(t).subscribe({next:n=>{this.usersArray.push(n.newUser),this.AddForm.reset(),this.AddbuttonForm=!1,this.getUserData(),this.file=null,this.toastr.success(n.message)},error:n=>{console.log(n),this.toastr.warning(n.error.message)}}):this.toastr.info("All Fields are Required")}getUserData(){this._users.getUsers(this.search,this.currentPage,this.limit,this.selectedSortBy,this.selectedSortOrder).subscribe({next:t=>{this.usersArray=t.userdata,this.totalPages=t.totalPage,this.count=t.count,this.updatePaginatedUsers()},error:t=>{console.log(t)}})}onPageSizeChange(t){this.limit=parseInt(t.target.value),this.currentPage=1,this.updatePaginatedUsers(),this.getUserData()}onPageChange(t){t>=1&&t<=this.totalPages&&(this.currentPage=t,this.updatePaginatedUsers(),this.getUserData())}getPagesArray(){return Array(this.totalPages).fill(0).map((t,n)=>n+1)}updatePaginatedUsers(){const t=(this.currentPage-1)*this.limit;this.paginatedUsers=this.usersArray.slice(t,t+this.limit)}deleteUser(t){confirm("Are you sure you want to delete this user?")&&this._users.deleteUser(t).subscribe({next:i=>{this.usersArray.push(i.newUser),this.getUserData(),this.toastr.success(i.message)},error:i=>{console.log(i.error.message),this.toastr.error(i.error.message)}})}updateBtnClick(t){this.id=t._id,this.updateForm=!0,this.AddbuttonForm=!1,this.userupdateForm.patchValue({updateusername:t.username,updateuseremail:t.useremail,updatecountrycode:t.countrycode,updateuserphone:t.userphone})}updateUSER(){const t=this.userupdateForm.value;var n=new FormData;n.append("profile",this.file),n.append("updateusername",t.updateusername),n.append("updateuseremail",t.updateuseremail),n.append("updatecountrycode",t.updatecountrycode),n.append("updateuserphone",t.updateuserphone),console.log(n),this._users.updateUser(this.id,n).subscribe({next:i=>{console.log(i),this.usersArray.push(i.updatedUser),this.getUserData(),this.userupdateForm.reset(),this.file=null,this.updateForm=!this.updateForm,this.toastr.success(i.message)},error:i=>{console.log(i),this.toastr.error(i.error.message)}})}openDialog(t){this.dialog.open(v.g,{width:"650px",data:{userdata:t}}).afterClosed().subscribe(s=>{console.log(s)})}updateCancel(){this.updateForm=!this.updateForm}toggleFormVisibility(){this.AddbuttonForm=!this.AddbuttonForm,this.updateForm=!1,this.AddForm.reset(),this.AddForm.patchValue({countrycode:""})}resetTimer(){this.authService.resetInactivityTimer()}}return(o=l).\u0275fac=function(t){return new(t||o)(e.Y36(U),e.Y36(a.qu),e.Y36(x._W),e.Y36(Z.e),e.Y36(b.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-users"]],decls:67,vars:10,consts:[[1,"container"],[1,"filter-section"],["id","showbtn",3,"click"],["aria-hidden","true",1,"fa","fa-user-plus"],["type","text","id","search-input","placeholder","Search by ID, Name, Email, Phone...",3,"ngModel","ngModelChange"],["id","searchbtn",3,"click"],["id","pageSize",1,"m-2",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","50"],["value","100"],["id","filter-dropdown",3,"ngModel","ngModelChange","change"],["value","name"],["value","email"],["value","phone"],["value","desc"],["value","asc"],[1,"parentFormContainer"],["id","formContainer",4,"ngIf"],[1,"container-fluid",3,"mousemove"],["class","updateContainer py-4",4,"ngIf"],["id","tableContainer"],[1,"table-responsive"],[1,"table"],[1,"bg-light","text-dark"],[4,"ngFor","ngForOf"],["id","parentpagination",1,"pagination","d-flex","justify-content-center"],[1,"pagination","table-responsive","rounded"],[1,"page-link",3,"disabled","click"],["aria-hidden","true",1,"fa","fa-angle-double-left"],["aria-hidden","true",1,"fa","fa-angle-double-right"],["id","formContainer"],[1,"mb-3"],[1,"container",3,"formGroup","ngSubmit"],[1,"form-label","d-flex","justify-content-start"],["type","text","formControlName","username","placeholder","Enter Username",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","useremail","placeholder","Enter Email",1,"form-control"],[1,"parent","mb-3"],[1,"phone-input","w-100"],["id","country-code","formControlName","countrycode","name","code",1,"form-control","w-25",3,"change"],["code",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","tel","id","phone-number","formControlName","userphone","placeholder","Enter Phone","maxlength","10","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control"],["class","invalid-feedback text-danger",4,"ngIf"],["type","file","formControlName","profile","name","profile",1,"form-control",3,"change"],["type","submit","id","submitBtn",1,"btn","btn-primary","w-100"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"],[1,"invalid-feedback","text-danger"],[1,"updateContainer","py-4"],["id","Container"],["type","text","formControlName","updateusername","placeholder","Enter Username",1,"form-control"],["type","email","formControlName","updateuseremail","placeholder","Enter Email",1,"form-control"],["id","country-code","name","code","formControlName","updatecountrycode",1,"form-control","w-25",3,"change"],["type","tel","id","phone-number","formControlName","updateuserphone","placeholder","Enter Phone","maxlength","10","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control"],["type","file",1,"form-control",3,"change"],[1,"d-flex","justify-content-between"],["type","submit","id","userupdate",1,"btn","btn-success","w-50","m-2"],[1,"fa-solid","fa-thumbs-up"],["type","button","id","updateCancel",1,"w-50","m-2","btn","btn-danger",3,"click"],["aria-hidden","true",1,"fa","fa-user-times"],["alt","user-profile",3,"src"],["color","accent","mat-button","",3,"matMenuTriggerFor"],["lvl2master","matMenu"],["mat-menu-item","","id","updatebtn",3,"click"],["mat-menu-item","","id","deletebtn",3,"click"],["mat-raised-button","",3,"click"],[1,"page-link",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.toggleFormVisibility()}),e._UZ(3,"i",3),e._uU(4,"\xa0 Add Users"),e.qZA(),e.TgZ(5,"input",4),e.NdJ("ngModelChange",function(s){return n.search=s}),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return n.getUserData()}),e._uU(7,"Search"),e.qZA(),e.TgZ(8,"select",6),e.NdJ("ngModelChange",function(s){return n.limit=s})("change",function(s){return n.onPageSizeChange(s)}),e.TgZ(9,"option",7),e._uU(10,"Select Page"),e.qZA(),e.TgZ(11,"option",7),e._uU(12,"5"),e.qZA(),e.TgZ(13,"option",8),e._uU(14,"10"),e.qZA(),e.TgZ(15,"option",9),e._uU(16,"20"),e.qZA(),e.TgZ(17,"option",10),e._uU(18,"50"),e.qZA(),e.TgZ(19,"option",11),e._uU(20,"100"),e.qZA()(),e.TgZ(21,"select",12),e.NdJ("ngModelChange",function(s){return n.selectedSortBy=s})("change",function(){return n.getUserData()}),e.TgZ(22,"option",13),e._uU(23,"Name"),e.qZA(),e.TgZ(24,"option",14),e._uU(25,"Email"),e.qZA(),e.TgZ(26,"option",15),e._uU(27,"Phone"),e.qZA()(),e.TgZ(28,"select",12),e.NdJ("ngModelChange",function(s){return n.selectedSortOrder=s})("change",function(){return n.getUserData()}),e.TgZ(29,"option",16),e._uU(30,"Sorting Order"),e.qZA(),e.TgZ(31,"option",17),e._uU(32,"Ascending"),e.qZA(),e.TgZ(33,"option",16),e._uU(34,"Descending"),e.qZA()()()(),e._uU(35,"\ns "),e.TgZ(36,"div",18),e.YNc(37,J,32,11,"div",19),e.qZA(),e.TgZ(38,"div",20),e.NdJ("mousemove",function(){return n.resetTimer()}),e.YNc(39,j,33,11,"div",21),e.qZA(),e.TgZ(40,"div",18)(41,"div",22)(42,"div",23)(43,"table",24)(44,"thead",25)(45,"tr")(46,"th"),e._uU(47,"Profile"),e.qZA(),e.TgZ(48,"th"),e._uU(49,"Name"),e.qZA(),e.TgZ(50,"th"),e._uU(51,"Email"),e.qZA(),e.TgZ(52,"th"),e._uU(53,"Phone"),e.qZA(),e.TgZ(54,"th"),e._uU(55,"Action"),e.qZA()()(),e.TgZ(56,"tbody"),e.YNc(57,$,27,5,"tr",26),e.qZA()()(),e.TgZ(58,"div",27)(59,"div",28)(60,"button",29),e.NdJ("click",function(){return n.onPageChange(n.currentPage-1)}),e._UZ(61,"i",30),e._uU(62," Previous "),e.qZA(),e.YNc(63,B,3,3,"ng-container",26),e.TgZ(64,"button",29),e.NdJ("click",function(){return n.onPageChange(n.currentPage+1)}),e._uU(65," Next "),e._UZ(66,"i",31),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("ngModel",n.search),e.xp6(3),e.Q6J("ngModel",n.limit),e.xp6(13),e.Q6J("ngModel",n.selectedSortBy),e.xp6(7),e.Q6J("ngModel",n.selectedSortOrder),e.xp6(9),e.Q6J("ngIf",n.AddbuttonForm),e.xp6(2),e.Q6J("ngIf",n.updateForm),e.xp6(18),e.Q6J("ngForOf",n.usersArray),e.xp6(3),e.Q6J("disabled",1===n.currentPage),e.xp6(3),e.Q6J("ngForOf",n.getPagesArray()),e.xp6(1),e.Q6J("disabled",n.currentPage===n.totalPages))},dependencies:[g.sg,g.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.nD,a.On,a.sg,a.u,p.VK,p.OP,p.p6,h.Hw,f.lW],styles:[".sortby[_ngcontent-%COMP%]{margin-right:40px}.sortorder[_ngcontent-%COMP%]{margin-left:40px}.parentFormContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #ccc;width:40%;max-width:600px;padding:20px;margin:40px}.parent[_ngcontent-%COMP%]{align-items:center;justify-content:center}.phone-input[_ngcontent-%COMP%]{width:40%;background-color:#fff;display:flex}.phone-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-right:10px}.updateContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin-top:5%}.container[_ngcontent-%COMP%]{border-radius:5px;padding:20px;transition:all linear .3s}.container[_ngcontent-%COMP%]:hover{transform:scale(1);transition:all linear .3s;z-index:1}#pageSize[_ngcontent-%COMP%]{justify-content:center}label[_ngcontent-%COMP%]{font-size:large;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}#tableContainer[_ngcontent-%COMP%]{background-color:#333;border-radius:10px;box-shadow:4px 4px 16px #17b009;width:90%;max-width:800px;padding:20px;margin:40px}.table-responsive[_ngcontent-%COMP%]{overflow-x:auto}tbody[_ngcontent-%COMP%]{color:#fff}img[_ngcontent-%COMP%]{height:40px}.container[_ngcontent-%COMP%]{margin:0 auto;padding:20px}.filter-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:20px}#filter-dropdown[_ngcontent-%COMP%], #pageSize[_ngcontent-%COMP%]{padding:5px}#search-input[_ngcontent-%COMP%]{flex-grow:1;padding:5px}#showbtn[_ngcontent-%COMP%]{padding:6px;background-color:#00b800;color:#fff;border:none;cursor:pointer;border-radius:3px}#searchbtn[_ngcontent-%COMP%]{padding:6px;background-color:#7200c4;color:#fff;border:none;cursor:pointer;border-radius:3px}@media (max-width: 780px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:12px;color:#fff}#tableContainer[_ngcontent-%COMP%]{background-color:#333;border-radius:10px;box-shadow:4px 4px 16px #17b009;width:90%;max-width:600px;padding:20px;margin:40px}.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{color:#000}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #000;width:90%;max-width:600px;padding:20px;margin:40px}}@media (max-width: 480px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:14px}}"]}),l})();var K=d(1896);const z=[{path:"",component:H,pathMatch:"full"}];let V=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,K.Bz.forChild(z),a.u5,a.UX,p.Tx,h.Ps,f.ot]}),l})()}}]);