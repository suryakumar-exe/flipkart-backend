(this.webpackJsonpflipkart=this.webpackJsonpflipkart||[]).push([[0],{32:function(t,e,a){},40:function(t,e,a){},41:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),d=a(34),s=a.n(d),i=(a(40),a(8)),r=a(2),j=(a(41),a(9)),l=a(10),h=a(13),b=a(12),o=a(15),u=a.n(o),O=new(function(){function t(){Object(j.a)(this,t)}return Object(l.a)(t,[{key:"orderproduct",value:function(t){return u.a.post("http://localhost:2021/flipkart_curd/savepro",t)}},{key:"displayproduct",value:function(){return u.a.get("http://localhost:2021/flipkart_curd/fetchpro")}},{key:"deleteproduct",value:function(t){return u.a.delete("http://localhost:2021/flipkart_curd/deletepro/"+t)}},{key:"findById",value:function(t){return u.a.get("http://localhost:2021/flipkart_curd/search/"+t)}},{key:"updateproduct",value:function(t){return u.a.put("http://localhost:2021/flipkart_curd/updatepro",t)}}]),t}()),x=(a(32),a(0)),p=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var c;return Object(j.a)(this,a),(c=e.call(this,t)).state={product:[],no:1},c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;O.displayproduct().then((function(e){t.setState({product:e.data})}))}},{key:"deletepro",value:function(t){var e=this;O.deleteproduct(t).then((function(a){e.setState({product:e.state.product.filter((function(e){return e.id!==t})),no:1})}))}},{key:"updatepro",value:function(t){this.props.history.push("/update/"+t)}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{color:"blue",fontFamily:"cursive",fontWeight:"bold"},children:"YOUR ORDER LIST"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("table",{class:"table table-striped",style:{backgroundColor:"lightblue"},children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.No"}),Object(x.jsx)("th",{children:"PRODUCT NAME"}),Object(x.jsx)("th",{children:"QUANTITY"}),Object(x.jsx)("th",{children:"PRICE"}),Object(x.jsx)("th",{children:"PAYMENT MODE"}),Object(x.jsx)("th",{children:"ORDER DATE"}),Object(x.jsx)("th",{children:"DELIVERY DATE"}),Object(x.jsx)("th",{children:"CUSTOMER NAME"}),Object(x.jsx)("th",{children:"EMAIL"}),Object(x.jsx)("th",{children:"CONTACT"}),Object(x.jsx)("th",{children:"ADDRESS"}),Object(x.jsx)("th",{children:"ACTION"})]})}),Object(x.jsx)("tbody",{children:this.state.product.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:t.state.no++}),Object(x.jsx)("td",{children:e.pname}),Object(x.jsx)("td",{children:e.quantity}),Object(x.jsx)("td",{children:e.price}),Object(x.jsx)("td",{children:e.paymode}),Object(x.jsx)("td",{children:e.odate}),Object(x.jsx)("td",{children:e.ddate}),Object(x.jsx)("td",{children:e.cname}),Object(x.jsx)("td",{children:e.email}),Object(x.jsx)("td",{children:e.contact}),Object(x.jsx)("td",{children:e.address}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{class:"btn btn-danger",onClick:function(){return t.deletepro(e.id)},children:"Delete"}),Object(x.jsx)("button",{class:"btn btn-primary",onClick:function(){return t.updatepro(e.id)},children:"Update"})]})]})}))})]}),Object(x.jsx)(i.b,{to:"/order",children:Object(x.jsx)("button",{class:"btn btn-success",children:"Order more"})})]})}}]),a}(c.Component),m=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){return Object(j.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{color:"blue",fontFamily:"cursive",fontWeight:"bold"},children:"WELCOME TO FLIPKART"}),Object(x.jsx)("hr",{}),Object(x.jsx)(i.b,{to:"/order",children:Object(x.jsx)("button",{class:"btn btn-outline-success",children:"Order Product"})})," \xa0\xa0",Object(x.jsx)(i.b,{to:"/display",children:Object(x.jsx)("button",{class:"btn btn-outline-success",children:"Display Order List"})})]})}}]),a}(c.Component),y=m,v=a(19),g=a(11),f=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var c;Object(j.a)(this,a),c=e.call(this,t);var n=new Date,d=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),s=new Date,i=s.getDate()+7+"-"+(s.getMonth()+1)+"-"+n.getFullYear();return c.state={pname:"",quantity:null,price:null,paymode:"",odate:"",ddate:"",cname:"",email:"",contact:"",address:"",date:d,date1:i},c.changedata=c.changedata.bind(Object(g.a)(c)),c.changedata1=c.changedata1.bind(Object(g.a)(c)),c.validateData=c.validateData.bind(Object(g.a)(c)),c}return Object(l.a)(a,[{key:"changedata",value:function(t){var e=t.target.name,a=t.target.value;this.setState(Object(v.a)({},e,a))}},{key:"changedata1",value:function(t){this.setState({quantity:t.target.value})}},{key:"validateData",value:function(t){var e=this;t.preventDefault();var a={pname:this.state.pname,quantity:Number(this.state.quantity),price:500*this.state.quantity,paymode:this.state.paymode,odate:this.state.date,ddate:this.state.date1,cname:this.state.cname,email:this.state.email,contact:this.state.contact,address:this.state.address};O.orderproduct(a).then((function(t){window.alert("Your Order is Placed Sucessfully"),e.props.history.push("/display")}))}},{key:"render",value:function(){return Object(x.jsx)("body",{style:{backgroundColor:"lightskyblue"},children:Object(x.jsxs)("div",{align:"center",children:[Object(x.jsx)("h1",{style:{color:"blue",fontFamily:"cursive",fontWeight:"bold"},children:"PLACE YOUR ORDER"}),Object(x.jsx)("hr",{}),Object(x.jsx)("marquee",{children:Object(x.jsx)("b",{children:"1.Discount on product\xa0\xa0\xa0\xa0\xa0\xa0\xa02.Big Billion Sales is Live\xa0\xa0\xa0\xa0\xa0\xa0\xa03.Special Offer\xa0\xa0\xa0\xa0\xa0\xa0\xa04.Place order"})}),Object(x.jsx)("form",{style:{backgroundColor:"lightblue"},onSubmit:this.validateData,children:Object(x.jsxs)("table",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Product Name"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"pname",pattern:"[a-zA-Z\\s]+",title:"Invalid Product name",onChange:this.changedata,required:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Product Quantity"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"quantity",pattern:"[0-9]+",title:"Invalid Quantity",onChange:this.changedata,required:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Price"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"price",pattern:"[0-9.]+",title:"Invalid Price",onChange:this.changedata1,value:500*this.state.quantity,required:!0,disabled:!0})}),Object(x.jsx)("div",{children:Object(x.jsx)("small",{children:"* 500 per Item"})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Payment Mode"}),Object(x.jsx)("td",{children:":"}),Object(x.jsxs)("td",{children:[Object(x.jsx)("input",{type:"radio",id:"payChoice1",name:"paymode",onChange:this.changedata,value:"card",required:!0}),Object(x.jsx)("label",{for:"payChoice1",children:"card"}),"\xa0\xa0\xa0",Object(x.jsx)("input",{type:"radio",id:"payChoice2",name:"paymode",onChange:this.changedata,value:"cash"}),Object(x.jsx)("label",{for:"payChoice2",children:"Cash"})]})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Oder Date"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"date",children:this.state.date})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"delivery date"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"date",children:this.state.date1})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Customer Name"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"cname",onChange:this.changedata,pattern:"[A-Za-z\\s]+",title:"Invalid Customer name",required:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Email ID"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",title:"Invalid email",onChange:this.changedata,required:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Contact"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"contact",pattern:"^[789][0-9]{9}",title:"Invalid Contact Number",onChange:this.changedata,required:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Address"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("textarea",{name:"address",rows:"4",cols:"23",pattern:"[A-Za-z\\s]+",title:"Invalid Address",onChange:this.changedata,required:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{class:"btn btn-success",children:"Order"}),"\xa0\xa0",Object(x.jsx)(i.b,{to:"/back",children:Object(x.jsx)("button",{class:"btn btn-success",children:"Back"})})]})]})]})})]})})}}]),a}(c.Component),C=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var c;Object(j.a)(this,a),c=e.call(this,t);var n=new Date,d=n.getDate()+"-"+(n.getMonth()+1)+"-"+n.getFullYear(),s=new Date,i=s.getDate()+7+"-"+(s.getMonth()+1)+"-"+s.getFullYear();return c.state={pname:"",quantity:null,price:null,paymode:"",odate:"",ddate:"",cname:"",email:"",contact:"",address:"",date:d,date1:i,id:c.props.match.params.id},c.changedata=c.changedata.bind(Object(g.a)(c)),c.changedata1=c.changedata1.bind(Object(g.a)(c)),c.validateData=c.validateData.bind(Object(g.a)(c)),c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;O.findById(this.state.id).then((function(e){t.setState({pname:e.data.pname,quantity:e.data.quantity,price:e.data.price,paymode:e.data.paymode,odate:e.data.date,ddate:e.data.date1,cname:e.data.cname,email:e.data.email,contact:e.data.contact,address:e.data.address})}))}},{key:"changedata",value:function(t){var e=t.target.name,a=t.target.value;this.setState(Object(v.a)({},e,a))}},{key:"changedata1",value:function(t){this.setState({quantity:t.target.value})}},{key:"validateData",value:function(t){var e=this;if(t.preventDefault(),this.state.date>this.state.date1)window.alert("Please give future date"),this.props.history.push("/update/"+this.id);else{var a={pname:this.state.pname,quantity:this.state.quantity,price:500*this.state.quantity,paymode:this.state.paymode,odate:this.state.date,ddate:this.state.date1,cname:this.state.cname,email:this.state.email,contact:this.state.contact,address:this.state.address,id:Number(this.state.id)};O.updateproduct(a).then((function(t){window.alert("product is Updated Sucessfully"),e.props.history.push("/display")}))}}},{key:"render",value:function(){return Object(x.jsxs)("div",{align:"center",children:[Object(x.jsx)("h1",{children:"Update Page"}),Object(x.jsx)("hr",{}),Object(x.jsx)("form",{style:{backgroundColor:"lightblue"},onSubmit:this.validateData,children:Object(x.jsxs)("table",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Product ID"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"id",onChange:this.changedata,value:this.state.id,disabled:!0})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Product Name"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"pname",pattern:"[a-zA-Z\\s]+",title:"Invalid Product name",onChange:this.changedata,value:this.state.pname})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Product Quantity"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"quantity",pattern:"[0-9]+",title:"Invalid Quantity",onChange:this.changedata,value:this.state.quantity})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Price"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"price",pattern:"[0-9.]+",title:"Invalid Price",onChange:this.changedata1,value:500*this.state.quantity})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Payment Mode"}),Object(x.jsx)("td",{children:":"}),Object(x.jsxs)("td",{children:[Object(x.jsx)("input",{type:"radio",id:"payChoice1",name:"paymode",onChange:this.changedata,value:"card",required:!0}),Object(x.jsx)("label",{for:"payChoice1",children:"card"}),"\xa0\xa0\xa0",Object(x.jsx)("input",{type:"radio",id:"payChoice2",name:"paymode",on:!0,onChange:this.changedata,value:"cash"}),Object(x.jsx)("label",{for:"payChoice2",children:"Cash"})]})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Oder Date"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"date",children:this.state.date})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"delivery date"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"date",children:Object(x.jsx)("input",{type:"text",name:"date1",id:"date1",pattern:"\\d{1,2}[0-31]-\\d{1,2}[0-12]-\\d{4}",title:" Date Not in format",placeholder:"dd-mm-yyyy",onChange:this.changedata,value:this.state.date1,required:!0})})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Customer Name"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"cname",pattern:"[A-Za-z\\s]+",title:"Invalid Customer name",onChange:this.changedata,value:this.state.cname})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Email ID"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",title:"Invalid Email",onChange:this.changedata,value:this.state.email})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Contact"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("input",{type:"text",name:"contact",pattern:"^[789][0-9]{9}",title:"Invalid Contact Number",onChange:this.changedata,value:this.state.contact})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Address"}),Object(x.jsx)("td",{children:":"}),Object(x.jsx)("td",{children:Object(x.jsx)("textarea",{name:"address",rows:"4",cols:"23",pattern:"[A-Za-z\\s]+",title:"Invalid Address",onChange:this.changedata,value:this.state.address})})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{}),Object(x.jsxs)("td",{children:[Object(x.jsx)("button",{class:"btn btn-success",children:"Update"}),"\xa0\xa0",Object(x.jsx)(i.b,{to:"/back",children:Object(x.jsx)("button",{class:"btn btn-success",children:"Back"})})]})]})]})})]})}}]),a}(c.Component);var k=function(){return Object(x.jsx)("div",{styles:{backgroundColor:"blue"},children:Object(x.jsx)(i.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{path:"/",exact:!0,component:y}),Object(x.jsx)(r.a,{path:"/back",component:y}),Object(x.jsx)(r.a,{path:"/order",component:f}),Object(x.jsx)(r.a,{path:"/display",component:p}),Object(x.jsx)(r.a,{path:"/update/:id",component:C})]})})})})},D=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,d=e.getLCP,s=e.getTTFB;a(t),c(t),n(t),d(t),s(t)}))};a(66);s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),D()}},[[67,1,2]]]);
//# sourceMappingURL=main.6e1eb433.chunk.js.map