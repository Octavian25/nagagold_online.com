(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1114:function(a,t,e){"use strict";e.r(t);var i=e(0),s=e.n(i),n=e(16),d=e(11),o=e(99),h=e.n(o),c=e(75),l=e.n(c),r=e(152),m=e.n(r),p=e(7),b=e(10),u=e(27),E=e.n(u),k=e(5),g=e(6),S=e(14),j=e(3),f=e(290),D=e(291),N=e(4),O=e(288),H=e(15),x=e.n(H);class M extends i.Component{constructor(...a){super(...a),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{this.props.isEdit,document.getElementById("nama_hadiah").focus()},100)}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement(f.a,{id:"kode_hadiah",tabIndex:"1",name:"kode_hadiah",component:N.b,type:"hidden"}),s.a.createElement(f.a,{id:"nama_hadiah",tabIndex:"2",name:"nama_hadiah",component:N.e,type:"text",label:" Nama Hadiah",placeholder:"Masukan  Nama Hadiah"}),s.a.createElement(f.a,{tabIndex:"3",name:"poin",component:N.e,type:"number",label:"Poin",placeholder:"Masukan Poin"}),s.a.createElement(f.a,{tabIndex:"4",name:"stock",component:N.e,type:"number",label:" Stock",placeholder:"Masukan Stock",onBlur:()=>this.setState({aktif:!0})}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 text-right"},s.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(p.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",s.a.createElement("button",{tabIndex:"5",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?s.a.createElement(x.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}M=Object(D.a)({form:"ModalHadiah",enableReinitialize:!0,validate:O.a})(M);var _=Object(b.b)(a=>{if(null!==a.datamaster.ShowModalDataHadiah)return{initialValues:{nama_hadiah:a.datamaster.ShowModalDataHadiah.nama_hadiah,poin:a.datamaster.ShowModalDataHadiah.poin,stock:a.datamaster.ShowModalDataHadiah.stock,kode_hadiah:a.datamaster.ShowModalDataHadiah.kode_hadiah}}},null)(M),v=e(38);const w=c.Search.SearchBar,C=c.CSVExport.ExportCSVButton,y=(a,t,e)=>{E.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Nama Hadiah "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(a=>{a.isConfirmed&&Object(g.b)("hadiah/delete/by-kode-hadiah/",{kode_hadiah:t}).then(()=>{Object(k.d)("Data Berhasil Di Hapus").then(()=>e(Object(p.jb)()))}).catch(a=>{Object(k.e)("error",a.response.data)})})};t.default=Object(b.b)(a=>({datahadiah:a.datamaster.getDataHadiah,hideModal:a.datamaster.modalDialog}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"nama_hadiah",text:"Nama Hadiah",sort:!0},{dataField:"poin",text:"Poin"},{dataField:"stock",text:"Stock"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kode_hadiah:t.kode_hadiah,nama_hadiah:t.nama_hadiah,stock:t.stock,poin:t.poin};return s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:()=>this.formEditDataHadiah(e),className:"btn btn-primary mr-3"},s.a.createElement("i",{className:"fa fa-edit"})),s.a.createElement("button",{onClick:()=>y(t.nama_hadiah,t.kode_hadiah,this.props.dispatch),className:"btn btn-danger"},s.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}formEditDataHadiah(a){this.props.dispatch(Object(p.wb)()),this.props.dispatch(Object(p.R)(a)),this.setState({isEdit:!0})}ShowModalDataHadiah(){this.props.dispatch(Object(p.wb)()),this.props.dispatch(Object(p.R)(!1)),this.setState({isEdit:!1})}componentDidMount(){this.props.dispatch(Object(p.jb)())}handleSubmit(a){this.setState({isLoading:!0});let t={kode_hadiah:a.kode_hadiah,nama_hadiah:a.nama_hadiah,poin:a.poin,stock:a.stock},e={nama_hadiah:a.nama_hadiah,poin:a.poin,stock:a.stock};this.state.isEdit?Object(g.g)("hadiah/edit/by-kode-hadiah",t).then(()=>{this.props.dispatch(Object(p.vb)())}).then(()=>{Object(k.e)("success","Data Berhasil Diedit")}).then(()=>{this.props.dispatch(Object(p.jb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(S.d)("ModalHadiah"))}).catch(a=>this.ErrorHandling(a)):Object(g.e)("hadiah/add",e).then(()=>{this.props.dispatch(Object(p.vb)())}).then(()=>{Object(k.e)("success","Data Berhasil Simpan")}).then(()=>{this.props.dispatch(Object(p.jb)())}).then(()=>{this.props.dispatch(Object(S.d)("ModalHadiah"))}).then(()=>{this.setState({isLoading:!1})}).catch(t=>Object(j.a)(t,"sales/reactive/by-kode-sales/",a.kode_sales,e,this.props.dispatch,Object(p.jb)(),Object(p.vb)(),"ModalHadiah").then(()=>{this.setState({isLoading:!1})}))}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(n.b,{to:"#"},"Data Master")),s.a.createElement("li",{className:"breadcrumb-item active"},"Master Data Hadiah")),s.a.createElement("h1",{className:"page-header"},"Master Data Hadiah "),s.a.createElement(d.a,null,s.a.createElement(d.c,null,"Master Data Hadiah"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(l.a,{keyField:"kondisi",data:this.props.datahadiah||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Data Hadiah.csv"}},a=>s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-6"},s.a.createElement("button",{onClick:()=>this.ShowModalDataHadiah(),className:"btn btn-primary"}," ",s.a.createElement("i",{className:"fa fa-plus"})," ")),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement(w,a.searchProps))),s.a.createElement("hr",null),s.a.createElement("div",{className:"col-12"},s.a.createElement(h.a,Object.assign({pagination:m()()},a.baseProps)),s.a.createElement("br",null),s.a.createElement(C,a.csvProps,"Export CSV!!"))))),s.a.createElement("br",null),s.a.createElement(v.a,{title:this.state.isEdit?"Edit Data Data Hadiah":"Tambah Data Data Hadiah",size:"P",content:s.a.createElement(_,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:a=>this.handleSubmit(a)})})))}})}}]);
//# sourceMappingURL=31.7e7355da.chunk.js.map