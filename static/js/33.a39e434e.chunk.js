(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1101:function(a,t,e){"use strict";e.r(t);var s=e(0),i=e.n(s),n=e(15),r=e(12),o=e(8),d=e(10),c=e(28),l=e.n(c),h=e(5),m=e(6),k=e(14),p=e(3),b=e(18),u=e(36),E=e(287),T=e(288),g=e(4);var f=(a,t)=>{const e={};return a.kode_transaksi||(e.kode_transaksi="Kode Transaksi Tidak Boleh Kosong"),e};class K extends s.Component{constructor(...a){super(...a),this.state={aktif:!1}}componentDidMount(){setTimeout(()=>{document.getElementById("kode_transaksi").focus()},100)}render(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},i.a.createElement("input",{type:"hidden",name:"kode_transaksi_lama"}),i.a.createElement(E.a,{tabIndex:"1",id:"kode_transaksi",name:"kode_transaksi",component:g.e,type:"text",label:"Kode Transaksi",placeholder:"Masukan Kode Transaksi",onBlur:()=>this.setState({aktif:!0})}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 text-right"},i.a.createElement("button",{className:"btn btn-white",onClick:()=>this.props.dispatch(Object(o.vb)()),type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",i.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}K=Object(T.a)({form:"ModalKodeTrransaksi",enableReinitialize:!0,validate:f})(K);var O=Object(d.b)(a=>{if(null!==a.datamaster.ShowModalKodeTransaksi)return{initialValues:{kode_transaksi:a.datamaster.ShowModalKodeTransaksi.kode_transaksi,kode_transaksi_lama:a.datamaster.ShowModalKodeTransaksi.kode_transaksi}}},null)(K);const _=(a,t)=>{l.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Transaksi "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{e.isConfirmed&&Object(m.a)("paratransaksi/delete/by-kode-transaksi/"+a,{data:{kode_transaksi:a}}).then(()=>{Object(h.d)("Data Berhasil Di Hapus").then(()=>t(Object(o.ub)()))})})};t.default=Object(d.b)(a=>({DataTransaksi:a.datamaster.getParamterTransaksi,hideModal:a.datamaster.modalDialog}),null)(class extends i.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_transaksi",text:"Kode Transaksi ",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,t)=>{let e={kode_transaksi:t.kode_transaksi};return i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-12"},i.a.createElement("button",{onClick:()=>this.FormEditKodeTransaksi(e),className:"btn btn-primary mr-3"},i.a.createElement("i",{className:"fa fa-edit"})),i.a.createElement("button",{onClick:()=>_(t.kode_transaksi,this.props.dispatch),className:"btn btn-danger"},i.a.createElement("i",{className:"fa fa-trash"}))))}}],dataKodeTransaksi:[{kode_transaksi:"Uang Makan"}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){this.props.dispatch(Object(o.ub)())}handleSubmit(a){this.setState({isLoading:!0});let t={kode_transaksi:a.kode_transaksi},e={kode_transaksi:a.kode_transaksi};this.state.isEdit?Object(m.f)("paratransaksi/edit/by-kode-transaksi/"+a.kode_transaksi_lama,t).then(()=>{this.props.dispatch(Object(o.vb)())}).then(()=>Object(h.e)("success","Data Berhasil Diedit")).then(()=>{this.props.dispatch(Object(o.ub)())}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(k.d)("ModalKodeTrransaksi"))}).catch(a=>this.ErrorHandling(a)):Object(m.d)("paratransaksi/add",e).then(()=>{this.props.dispatch(Object(o.vb)())}).then(()=>{Object(h.e)("success","Data Berhasil Disimpan")}).then(()=>{this.props.dispatch(Object(o.ub)())}).then(()=>{this.props.dispatch(Object(k.d)("ModalKodeTrransaksi"))}).then(()=>{this.setState({isLoading:!1})}).catch(t=>Object(p.a)(t,"paratransaksi/reactive/by-kode-transaksi/",a.kode_transaksi,e,this.props.dispatch,Object(o.ub)(),Object(o.vb)(),"ModalKodeTrransaksi").then(()=>{this.setState({isLoading:!1})}))}FormEditKodeTransaksi(a){this.props.dispatch(Object(o.wb)()),this.props.dispatch(Object(o.W)(a)),this.setState({isEdit:!0})}showModalKodeTranaksi(){this.props.dispatch(Object(o.wb)()),this.props.dispatch(Object(o.W)(!1)),this.setState({isEdit:!1,isLoading:!1})}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(n.b,{to:"#"},"Data Master")),i.a.createElement("li",{className:"breadcrumb-item active"},"Master Kode Transaksi")),i.a.createElement("h1",{className:"page-header"},"Master Kode Transaksi "),i.a.createElement(r.a,null,i.a.createElement(r.c,null,"Master Kode Transaksi"),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement(b.a,{keyField:"kode_transaksi",tambahData:!0,handleClick:()=>this.showModalKodeTranaksi(),exportCsv:!0,data:this.props.DataTransaksi,columns:this.state.columns,empty:this.props.DataTransaksi,textEmpty:"Data Jenis Kosong"})),i.a.createElement("br",null),i.a.createElement(u.a,{title:this.state.isEdit?"Edit Data Kode Transaksi":"Tambah Data Kode Transaksi",size:"P",content:i.a.createElement(O,{isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a)})})))}})}}]);
//# sourceMappingURL=33.a39e434e.chunk.js.map