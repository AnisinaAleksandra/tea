"use strict";(self.webpackChunkmy_tea_progect=self.webpackChunkmy_tea_progect||[]).push([[706],{3706:(S,C,n)=>{n.r(C),n.d(C,{CatalogTeasModule:()=>d});var u=n(6895),c=n(646),v=n(4466),t=n(1571),T=n(114),h=n(5991);class a{transform(e){return e.length<=95?e:`${e.slice(0,95)}...`}}a.\u0275fac=function(e){return new(e||a)},a.\u0275pipe=t.Yjl({name:"shortText",type:a,pure:!0});const _=function(r){return["/product",r]};class p{constructor(e){this.router=e,this.productItem={},this.openCardTeaEvent=new t.vpe}openCardTea(){this.openCardTeaEvent.emit(this.productItem)}}p.\u0275fac=function(e){return new(e||p)(t.Y36(c.F0))},p.\u0275cmp=t.Xpm({type:p,selectors:[["product-item"]],inputs:{productItem:"productItem"},outputs:{openCardTeaEvent:"openCardTeaEvent"},decls:12,vars:10,consts:[[1,"card"],[1,"card-img-top",3,"href"],["alt","tesImage",1,"w-100",3,"src","id"],[1,"card-body","d-flex","justify-content-between","flex-column"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary","hvr-grow-shadow",2,"padding","7px 41px",3,"routerLink","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h5",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"shortText"),t.qZA(),t.TgZ(9,"div")(10,"a",6),t.NdJ("click",function(){return o.openCardTea()}),t._uU(11,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()()),2&e&&(t.xp6(1),t.s9C("href",o.productItem.image,t.LSH),t.xp6(1),t.s9C("src",o.productItem.image,t.LSH),t.s9C("id",o.productItem.id),t.xp6(3),t.Oqu(o.productItem.title),t.xp6(2),t.Oqu(t.lcZ(8,6,o.productItem.description)),t.xp6(3),t.Q6J("routerLink",t.VKq(8,_,o.productItem.id)))},dependencies:[c.rH,a],styles:[".card[_ngcontent-%COMP%]{width:350px;margin-bottom:30px}"]});const x=function(){return{width:"unset"}};function y(r,e){if(1&r){const o=t.EpF();t.TgZ(0,"product-item",5),t.NdJ("openCardTeaEvent",function(f){t.CHM(o);const L=t.oxw();return t.KtG(L.openCardTeaProduct(f))}),t.qZA()}2&r&&t.Q6J("productItem",e.$implicit)("ngStyle",t.DdM(2,x))}class s{constructor(e,o){this.productTeaService=e,this.productListService=o,this.productItemList=[]}ngOnInit(){this.productListService.getProducts(),this.productItemList=this.productListService.products}openCardTeaProduct(e){this.productTeaService.productTea=e}}s.\u0275fac=function(e){return new(e||s)(t.Y36(T.t),t.Y36(h.N))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-catalog"]],decls:6,vars:1,consts:[[1,"container-part_list_of_tea","pt-5"],[1,"h2","text-center","mb-5"],[1,"container"],[1,"row"],[3,"productItem","ngStyle","openCardTeaEvent",4,"ngFor","ngForOf"],[3,"productItem","ngStyle","openCardTeaEvent"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"\u041d\u0430\u0448\u0438 \u0447\u0430\u0439\u043d\u044b\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,y,1,3,"product-item",4),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",o.productItemList))},dependencies:[u.sg,u.PC,p]});class m{transform(e){return`${e?.split(" ")[1]} ${e?.split(" ")[0]}`}}m.\u0275fac=function(e){return new(e||m)},m.\u0275pipe=t.Yjl({name:"formatPrice",type:m,pure:!0});const Z=function(){return{color:"red"}};function I(r,e){if(1&r&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h5",6),t._uU(5),t.qZA(),t.TgZ(6,"p",7),t._uU(7),t.qZA(),t.TgZ(8,"p",8),t._uU(9),t.ALo(10,"formatPrice"),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"div")(13,"a",9),t._uU(14,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()()()()),2&r){const o=t.oxw();t.xp6(1),t.s9C("href",o.productTea.image,t.LSH),t.xp6(1),t.s9C("src",o.productTea.image,t.LSH),t.s9C("id",o.productTea.id),t.xp6(3),t.Oqu(o.productTea.title),t.xp6(2),t.Oqu(o.productTea.description),t.xp6(1),t.Q6J("ngStyle",t.DdM(14,Z)),t.xp6(1),t.hij(" ",t.lcZ(10,9,t.xi3(11,11,o.productTea.price,"\u0440\u0443\u0431 "))," "),t.xp6(4),t.MGl("routerLink","/product:",o.productTea.id,""),t.Q6J("routerLink","/order")}}function P(r,e){1&r&&(t.TgZ(0,"div"),t._uU(1," Not found\n"),t.qZA())}class l{constructor(e,o,g,f){this.productTeaService=e,this.activatedRoute=o,this.productList=g,this.router=f,this.productTea={}}ngOnInit(){this.activatedRoute.params.subscribe(e=>{if(e.id){const o=this.productList.getProduct(+e.id);o?this.productTea=o:this.router.navigate(["/"])}})}}l.\u0275fac=function(e){return new(e||l)(t.Y36(T.t),t.Y36(c.gz),t.Y36(h.N),t.Y36(c.F0))},l.\u0275cmp=t.Xpm({type:l,selectors:[["product-card-component"]],decls:2,vars:2,consts:[["class","card",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-img-top",3,"href"],["alt","tesImage",1,"w-100",3,"src","id"],[1,"card-body","d-flex","justify-content-between","flex-column"],[1,"card-title"],[1,"card-text"],[1,"card-price",3,"ngStyle"],[1,"btn","btn-primary","hvr-grow-shadow",2,"padding","7px 41px",3,"routerLink"]],template:function(e,o){1&e&&(t.YNc(0,I,15,15,"div",0),t.YNc(1,P,2,0,"div",1)),2&e&&(t.Q6J("ngIf",o.productTea.id),t.xp6(1),t.Q6J("ngIf",!o.productTea.id))},dependencies:[u.O5,u.PC,c.rH,u.H9,m],styles:[".card[_ngcontent-%COMP%]{width:450px}product-card-component[_ngcontent-%COMP%]{display:flex;justify-content:center}"]});const A=[{path:"",component:s},{path:":id",component:l}];class i{}i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(A),c.Bz]});class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[u.ez,c.Bz,v.m,i]})}}]);