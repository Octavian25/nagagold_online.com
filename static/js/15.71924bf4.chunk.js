(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1113:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(10),l=t(15),i=t(14),c=t(5),m=t(12),o=t(6),d=t(287),p=t(288),u=t(32),g=t(4),h=t(705);const b=Object(u.createNumberMask)({prefix:"Rp. ",suffix:" ,-",locale:"id-ID"});class k extends n.Component{constructor(e){super(e),this.state={parametertransaksi:[]}}componentDidMount(){Object(o.b)("paratransaksi/get/all").then(e=>{this.setState({parametertransaksi:e.data})}).catch(e=>{console.log(e)})}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(d.a,{name:"kategori",component:g.f,options:this.state.parametertransaksi.map(e=>{return{value:e.kode_transaksi,name:e.kode_transaksi}}),label:"Kategori",placeholder:"Masukan Kategori"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(d.a,Object.assign({name:"jumlah",component:g.e,type:"telp",label:"Jumlah",placeholder:"Masukan Jumlah"},b))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(d.a,{name:"keterangan",component:g.e,type:"text",label:"Keterangan",placeholder:"Masukan Keterangan"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):s.a.createElement(s.a.Fragment,null,"Simpan ",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}k=Object(p.a)({form:"HeadAmbilUangKas",enableReinitialize:!0,validate:h.a})(k);var E=Object(r.b)()(k);a.default=Object(r.b)()(class extends n.Component{constructor(e){super(e),this.state={isLoading:!1}}handleSubmit(e){this.setState({isLoading:!0});let a={kategori:e.kategori,jumlah_rp:e.jumlah,deskripsi:e.keterangan};Object(o.d)("cash/out",a).then(()=>{Object(c.d)("Data Berhasil Disimpan")}).then(()=>{this.setState({isLoading:!1})}).then(()=>{this.props.dispatch(Object(i.d)("HeadAmbilUangKas"))}).catch(e=>this.ErrorHandling(e))}ErrorHandling(e){Object(c.b)(e),this.setState({isLoading:!1})}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(l.b,{to:"#"},"Transaksi Kas")),s.a.createElement("li",{className:"breadcrumb-item active"},"Ambil Uang Kas")),s.a.createElement("h1",{className:"page-header"},"Ambil Uang Kas "),s.a.createElement(m.a,null,s.a.createElement(m.c,null,"Ambil Uang Kas"),s.a.createElement(m.b,null,s.a.createElement(E,{isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)}))))}})},705:function(e,a,t){"use strict";a.a=(e=>{const a={};return e.kategori||(a.kategori="Kategori Tidak Boleh Kosong"),e.jumlah||(a.jumlah="Jumlah Tidak Boleh Kosong"),e.keterangan||(a.keterangan="Keterangan Tidak Boleh Kosong"),a})}}]);
//# sourceMappingURL=15.71924bf4.chunk.js.map