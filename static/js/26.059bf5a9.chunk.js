(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1119:function(a,e,t){"use strict";t.r(e);var i=t(0),n=t.n(i),r=t(16),s=t(11),o=t(99),l=t.n(o),m=t(75),d=t.n(m),c=t(7),g=t(46),h=t(10),p=t(89),b=t.n(p),u=t(639),k=t(637),E=t(638),B=t(650),_=t(290),S=t(291),f=t(4),N=t(15),O=t.n(N);class T extends i.Component{constructor(a){super(a),this.state={no_kirim:[],datagudang:[],databaki:[],loading:!1}}componentDidMount(){this.props.dispatch(Object(c.ib)()),this.props.dispatch(Object(c.hb)())}render(){return n.a.createElement(u.a,{backdrop:"static",keyboard:!1,isOpen:this.props.isOpen,toggle:()=>this.props.dispatch(Object(c.vb)())},n.a.createElement(k.a,null," ",this.props.title," "),n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},n.a.createElement(E.a,null,n.a.createElement("div",{className:"form-group"},n.a.createElement(_.a,{label:"No Kirim",name:"no_kirim",options:this.props.no_kirim.map(a=>{return{value:a._id.no_kirim,name:a._id.no_kirim}}),placeholder:"Silahkan Pilih No Kirim",component:f.f})),n.a.createElement("div",{className:"form-group"},this.state.datagudang!==[]?n.a.createElement(_.a,{label:"Kode Gudang",name:"kode_gudang",onChange:a=>{this.setState({kode_gudang:a}),this.props.change("kode_baki","")},options:this.props.datagudang.filter(a=>void 0!==a.kode_gudang).map(a=>{return{value:a.kode_gudang,name:a.kode_gudang+" - "+a.nama_gudang}}),placeholder:"Silahkan Pilih Kode Gudang",component:f.f}):n.a.createElement(b.a,{width:"100%",height:50})),n.a.createElement("div",{className:"form-group"},n.a.createElement(_.a,{label:"Kode Baki",name:"kode_baki",options:this.props.databaki.filter(a=>a.kode_gudang===this.state.kode_gudang).map(a=>{return{value:a.kode_baki,name:a.kode_baki+" - "+a.nama_baki}||[]}),placeholder:"Silahkan Pilih Kode Baki",component:f.f}))),n.a.createElement(B.a,null,n.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Cek Data Barang"):"Cek Data Barang"),n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(c.vb)()),type:"button",disabled:this.props.isLoading},"Batal")),this.props.isLoading?n.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}T=Object(S.a)({form:"FormTerimaBarang",enableReinitialize:!0})(T);var v=Object(h.b)(a=>{return{initialValues:{no_kirim:(null===localStorage.getItem("data_terima_barang")?[]:JSON.parse(localStorage.getItem("data_terima_barang")||[])).no_kirim||""},datagudang:a.datamaster.getDataGudang,databaki:a.datamaster.getDataBaki}},null)(T),j=t(6),D=t(5),F=t(14);const x=m.Search.SearchBar;e.default=Object(h.b)(a=>({Nokirim:a.databarang.getNokirim,hideModal:a.datamaster.modalDialog}),null)(class extends n.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,isLoadingBtn:!1,DataTerimaBarang:[],SimpanDataBarang:!1,resetTerimaBarang:!1,columns:[{dataField:"no",text:"No ",formatter:(a,e,t,i)=>(this.setState({num:1+t}),n.a.createElement("div",null," ",++t," ")),footerAttrs:{colSpan:"4"},footer:(a,e,t,i)=>n.a.createElement("div",null,"Total Barang : ",this.state.DataTerimaBarang.length," ")},{dataField:"kode_barang",text:"Kode Barang",sort:!0},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_intern",text:"Kode Intern"},{dataField:"berat",text:"Berat",formatter:a=>a.toFixed(3),footer:a=>a.reduce((a,e)=>a+e,0).toFixed(3)},{dataField:"nama_atribut",text:"Nama Atribut",footer:""},{dataField:"berat_atribut",text:"Berat Atribut",formatter:a=>a.toFixed(3),footer:a=>a.reduce((a,e)=>a+e,0).toFixed(3)}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(g.j)())}resetTerimaBarang(){this.setState({resetTerimaBarang:!0}),setTimeout(()=>{this.setState({DataTerimaBarang:[],resetTerimaBarang:!1})},300)}handleSubmit(a){let e={no_kirim:a.no_kirim,kode_gudang:a.kode_gudang,kode_toko:a.kode_baki};localStorage.setItem("data_terima_barang",JSON.stringify(e)),this.setState({SimpanDataBarang:e}),this.setState({isLoading:!0});let t={no_kirim:a.no_kirim};Object(j.c)("kirimbarang/get/nokirim/"+a.no_kirim,t).then(a=>{this.setState({DataTerimaBarang:a.data})}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(F.d)("FormTerimaBarang"))}).then(()=>{this.props.dispatch(Object(c.vb)())})}formEditBaki(a){this.props.dispatch(Object(c.wb)()),this.props.dispatch(Object(g.i)(a)),this.setState({isEdit:!0})}ShowModalTerimaBarang(){this.props.dispatch(Object(c.wb)()),this.props.dispatch(Object(g.i)(!1)),this.setState({isEdit:!1})}terimabangOnline(){this.setState({isLoadingBtn:!0}),Object(j.e)("terimabarang/add",this.state.SimpanDataBarang).then(()=>{this.setState({DataTerimaBarang:[]})}).then(()=>{this.props.dispatch(Object(F.d)("FormTerimaBarang")),localStorage.setItem("data_terima_barang",JSON.stringify([]))}).then(()=>{this.props.dispatch(Object(g.j)())}).then(()=>{this.setState({isLoadingBtn:!1})}).then(()=>{Object(D.d)("Barang Berhasil Diterima")}).catch(a=>this.errorHandling(a))}errorHandling(a){Object(D.a)(a),this.setState({isLoadingBtn:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"#"},"Barang")),n.a.createElement("li",{className:"breadcrumb-item active"},"Terima Barang")),n.a.createElement("h1",{className:"page-header"},"Terima Barang "),n.a.createElement(s.a,null,n.a.createElement(s.c,null,"Terima Barang"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},!1===this.state.isLoading?n.a.createElement(d.a,{keyField:"kode_barang",data:this.state.DataTerimaBarang||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Terima Barang.csv"}},a=>n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("button",{onClick:()=>this.ShowModalTerimaBarang(),className:"btn btn-teal"}," ",n.a.createElement("i",{className:"fa fa-plus"})," ")),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},n.a.createElement(x,a.searchProps))),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(l.a,a.baseProps),n.a.createElement("br",null),n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"btn btn-primary",onClick:()=>this.terimabangOnline()},this.state.isLoadingBtn?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Terima Barang"):"Terima Barang"),"\xa0",n.a.createElement("button",{className:"btn btn-warning",onClick:()=>this.resetTerimaBarang()},this.state.resetTerimaBarang?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset"))))):n.a.createElement(b.a,{width:"100%",height:200}),n.a.createElement(v,{no_kirim:this.props.Nokirim,isLoading:this.state.isLoading,isEdit:this.state.isEdit,title:(this.state.isEdit,"Terima Barang"),isOpen:this.props.hideModal,onSubmit:a=>this.handleSubmit(a)})),n.a.createElement("br",null)))}})}}]);
//# sourceMappingURL=26.059bf5a9.chunk.js.map