(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1105:function(a,t,e){"use strict";e.r(t);var i=e(0),n=e.n(i),s=e(15),o=e(12),d=e(8),r=e(10),c=e(28),l=e.n(c),m=e(5),h=e(6),b=e(14),p=e(3),u=e(18),j=e(287),g=e(288),E=e(4);var k=(a,t)=>{const e={};return a.kondisi_pinjaman||(e.kondisi_pinjaman="Kondisi Pinjaman Tidak Boleh Kosong"),e};class K extends i.Component{constructor(...a){super(...a),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{document.getElementById("kondisi_barang").focus()},100)}render(){return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("input",{type:"hidden",name:"kondisi_barang_lama"}),n.a.createElement(j.a,{id:"kondisi_barang",tabIndex:"1",name:"kondisi_barang",component:E.e,type:"text",label:" Kondisi Pinjaman",onBlur:()=>this.setState({aktif:!0}),placeholder:"Masukan  Kondisi Pinjaman"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-right"},n.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(d.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",n.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}K=Object(g.a)({form:"ModalKondisiPinjaman",enableReinitialize:!0,validate:k})(K);var f=Object(r.b)(a=>{if(null!==a.datamaster.ShowModalKondisiPinjaman)return{initialValues:{kondisi_barang_lama:a.datamaster.ShowModalKondisiPinjaman.kondisi_barang,kondisi_barang:a.datamaster.ShowModalKondisiPinjaman.kondisi_barang}}},null)(K),O=e(36);const P=(a,t)=>{l.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Nama Kondisi "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(h.a)("parapinjaman/delete/by-kode-kondisi/"+a,{}).then(()=>{Object(m.d)("Data Berhasil Di Hapus").then(()=>t(Object(d.qb)()))})})};t.default=Object(r.b)(a=>({DataKondisiPinjaman:a.datamaster.getKondisiPinjaman,hideModal:a.datamaster.modalDialog}),null)(class extends n.a.Component{constructor(a){super(a),this.state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kondisi_barang",text:"Nama Kondisi",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kondisi_barang:t.kondisi_barang};return n.a.createElement("div",{className:"row text-center"},n.a.createElement("div",{className:"col-12"},n.a.createElement("button",{onClick:()=>this.formEditKondisiPinjaman(e),className:"btn btn-primary mr-3"},n.a.createElement("i",{className:"fa fa-edit"})),n.a.createElement("button",{onClick:()=>P(t.kondisi_barang,this.props.dispatch),className:"btn btn-danger"},n.a.createElement("i",{className:"fa fa-trash"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(d.qb)())}handleSubmit(a){this.setState({isLoading:!0});let t={kondisi_barang:a.kondisi_barang},e={kondisi_barang:a.kondisi_barang};this.state.isEdit?Object(h.f)("parapinjaman/edit/by-kode-kondisi/"+a.kondisi_barang_lama,t).then(()=>{this.props.dispatch(Object(d.vb)())}).then(()=>Object(m.e)("success","Data Berhasil Diedit")).then(()=>{this.props.dispatch(Object(d.qb)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(b.d)("ModalKondisiPinjaman"))}).catch(a=>this.ErrorHandling(a)):Object(h.d)("parapinjaman/add",e).then(()=>{this.props.dispatch(Object(d.vb)())}).then(()=>{Object(m.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(d.qb)())}).then(()=>{this.props.dispatch(Object(b.d)("ModalKondisiPinjaman"))}).then(()=>{this.setState({isLoading:!1})}).catch(t=>Object(p.a)(t,"parapinjaman/reactive/by-kode-kondisi/",a.kondisi_barang,e,this.props.dispatch,Object(d.qb)(),Object(d.vb)(),"ModalKondisiPinjaman").then(()=>{this.setState({isLoading:!1})}))}formEditKondisiPinjaman(a){this.props.dispatch(Object(d.wb)()),this.props.dispatch(Object(d.Z)(a)),this.setState({isEdit:!0})}ShowModalKondisiPinjaman(){this.props.dispatch(Object(d.wb)()),this.props.dispatch(Object(d.Z)(!1)),this.setState({isEdit:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(s.b,{to:"#"},"Data Master")),n.a.createElement("li",{className:"breadcrumb-item active"},"Master Kondisi Pinjaman")),n.a.createElement("h1",{className:"page-header"},"Master Kondisi Pinjaman "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Master Kondisi Pinjaman"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(u.a,{keyField:"kondisi",tambahData:!0,handleClick:()=>this.ShowModalKondisiPinjaman(),exportCsv:!0,data:this.props.DataKondisiPinjaman,columns:this.state.columns,empty:this.props.DataKondisiPinjaman,textEmpty:"Data Kondisi Pinjaman Kosong"})),n.a.createElement("br",null),n.a.createElement(O.a,{title:this.state.isEdit?"Edit Data Kondisi Pinjaman":"Tambah Data Kondisi Pinjaman",size:"P",content:n.a.createElement(f,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a)})})))}})}}]);
//# sourceMappingURL=38.640c7cb9.chunk.js.map