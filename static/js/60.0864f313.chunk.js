(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1113:function(e,a,t){"use strict";t.r(a);var s=t(0),r=t.n(s),n=t(16),i=t(12),l=t(100),o=t.n(l),c=t(76),d=t.n(c),m=t(152),p=t.n(m),h=t(7),u=t(99),b=t(10),E=t(27),g=t.n(E),v=t(4),w=t(6),S=t(14),f=t(39),O=t(290),_=t(291),N=t(5),U=t(92),j=t(15),D=t.n(j);const M=[{value:"ADMIN",name:"ADMIN"},{value:"OWN",name:"OWNER"}];class k extends s.Component{constructor(...e){super(...e),this.state={}}componentDidMount(){setTimeout(()=>{this.props.isEdit?document.getElementById("usere_name").focus():document.getElementById("user_id").focus()},100)}render(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},r.a.createElement(O.a,{id:"user_id",label:"User Id",name:"user_id",readOnly:this.props.isEdit,placeholder:"Silahkan Masukan User Id",component:N.e}),r.a.createElement(O.a,{id:"usere_name",name:"usere_name",component:N.e,type:"text",label:"Username",placeholder:"Masukan Username"}),r.a.createElement("div",{className:"form-group"},r.a.createElement(O.a,{label:"Level",name:"level",options:M,value:this.props.level,placeholder:"Silahkan Pilih Level",component:N.f})),this.props.isEdit?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{name:"password",component:N.e,type:"password",label:"Password",placeholder:"Masukan Passsword"}),r.a.createElement(O.a,{name:"retype_password",component:N.e,type:"password",label:"Retype Password",placeholder:"Masukan Retype Password"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"),"\xa0",r.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(h.vb)()),type:"button",disabled:this.props.isLoading},"Batal"))),this.props.isLoading?r.a.createElement(D.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}k=Object(_.a)({form:"ModalTambahUsers",enableReinitialize:!0,validate:U.a})(k);var y=Object(b.b)(e=>{if(null!==e.manageusers.ShowModalTambahUser)return{initialValues:{user_id:e.manageusers.ShowModalTambahUser.user_id,usere_name:e.manageusers.ShowModalTambahUser.usere_name,level:e.manageusers.ShowModalTambahUser.level,password:e.manageusers.ShowModalTambahUser.password,retype_password:e.manageusers.ShowModalTambahUser.retype_password}}},null)(k);const x=c.Search.SearchBar,C=c.CSVExport.ExportCSVButton,T=(e,a)=>{g.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>User Id "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{t.isConfirmed&&Object(w.b)("users/delete/id/"+e,{data:{user_id:e}}).then(()=>{Object(v.d)("Data Berhasil Di Hapus").then(()=>a(Object(u.e)()))})})};a.default=Object(b.b)(e=>({DataUsers:e.manageusers.getDataUser,hideModal:e.datamaster.modalDialog}),null)(class extends r.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"user_id",text:"User Id ",sort:!0},{dataField:"usere_name",text:"User Name"},{dataField:"level",text:"Level"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(e,a)=>{let t={user_id:a.user_id,usere_name:a.usere_name,level:a.level};return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:()=>this.formEditBaki(t),className:"btn btn-primary mr-3"},r.a.createElement("i",{className:"fa fa-edit"})),r.a.createElement("button",{onClick:()=>T(a.user_id,this.props.dispatch),className:"btn btn-danger"},r.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(u.e)())}handleSubmit(e){if(this.setState({isLoading:!0}),void 0===e.level)return Object(v.b)("Silahkan Pilih Status"),!1;if(3===e.level)return Object(v.b)("Silahkan Pilih Status"),!1;let a={user_name:e.usere_name,level:e.level},t={user_id:e.user_id,user_name:e.usere_name,level:e.level,password:e.password,retype_password:e.retype_password};this.state.isEdit?Object(w.g)("users/update/id/"+e.user_id,a).then(()=>{this.props.dispatch(Object(h.vb)())}).then(Object(v.d)("Data Berhasil Di Edit")).then(()=>{this.props.dispatch(Object(u.e)())}).then(()=>{this.props.dispatch(Object(S.d)("ModalTambahUsers"))}).then(()=>{this.setState({isLoading:!1})}).catch(e=>{this.setState({isLoading:!1}),Object(v.a)(e)}):Object(w.e)("users/add/user",t).then(()=>{this.props.dispatch(Object(h.vb)())}).then(Object(v.d)("Data Berhasil Di Simpan")).then(()=>{this.props.dispatch(Object(u.e)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(S.d)("ModalTambahUsers"))}).catch(e=>{this.setState({isLoading:!1}),Object(v.a)(e)})}formEditBaki(e){this.props.dispatch(Object(h.wb)()),this.props.dispatch(Object(u.d)(e)),this.setState({isEdit:!0})}ShowModalTambahUser(){this.props.dispatch(Object(h.wb)()),this.props.dispatch(Object(u.d)(!1)),this.setState({isEdit:!1})}render(){return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(n.b,{to:"#"},"Manage Users")),r.a.createElement("li",{className:"breadcrumb-item active"},"Data Users")),r.a.createElement("h1",{className:"page-header"},"Data Users "),r.a.createElement(i.a,null,r.a.createElement(i.c,null,"Data Users"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,{keyField:"user_id",data:this.props.DataUsers||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Data Users.csv"}},e=>r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{onClick:()=>this.ShowModalTambahUser(),className:"btn btn-primary"}," ",r.a.createElement("i",{className:"fa fa-plus"})," ")),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},r.a.createElement(x,e.searchProps))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(o.a,Object.assign({pagination:p()()},e.baseProps)),r.a.createElement("br",null),r.a.createElement(C,e.csvProps,"Export CSV!!"))))),r.a.createElement("br",null),r.a.createElement(f.a,{title:this.state.isEdit?"Edit Data Users":"Tambah Data Users",size:"P",content:r.a.createElement(y,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:e=>this.handleSubmit(e)})})))}})}}]);
//# sourceMappingURL=60.0864f313.chunk.js.map