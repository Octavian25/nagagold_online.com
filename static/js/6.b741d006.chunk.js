(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1135:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),r=t(16),i=t(11),o=t(9),l=t(291),c=t(292),d=t(31),m=t(7),g=t(5),p=t(4),u=t(18),h=t(6),b=t(719),_=t(15),k=t.n(_);class f extends n.Component{constructor(a){super(a),this.state={date:new Date,isLoadingBatal:!1,kondisi_barang:"kosong"}}componentDidMount(){this.props.dispatch(Object(m.nb)())}getKodeBarcode(a){clearTimeout(this.delay),this.delay=setTimeout(()=>{if(""===a)return!1;Object(h.c)("barang/open/kode-barcode/"+a).then(e=>{0===e.data.length?Object(p.e)("info","Data Yang Dicari Tidak Ada"):"kosong"===this.state.kondisi_barang?(Object(p.e)("info","Kondisi Barang Harus Dipilih"),this.props.change("kode_barcode","")):e.data.forEach((e,t)=>{let n={kode_barcode:e.kode_barcode,kode_group:e.kode_group,kode_dept:e.kode_dept,nama_barang:e.nama_barang,nama_atribut:e.nama_atribut,berat:e.berat,kondisi_barang:this.state.kondisi_barang},s=JSON.parse(localStorage.getItem("data_barang_hancur_tmp"))||[];-1===s.findIndex(e=>e.kode_barcode===a)&&(s.push(n),localStorage.setItem("data_barang_hancur_tmp",JSON.stringify(s)),this.props.dispatch(Object(d.u)(s)),this.props.change("kode_barcode",""))})}).catch(a=>{Object(p.e)("info",a.response&&a.response.data)})},1500)}batalHancur(){this.setState({isLoadingBatal:!0}),setTimeout(()=>{this.setState({isLoadingBatal:!1}),localStorage.setItem("data_barang_hancur_tmp",JSON.stringify([])),this.props.dispatch(Object(d.u)([]))},500)}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(l.a,{label:"Kondisi Barang",name:"kondisi_barang",onChange:a=>{this.setState({kondisi_barang:a})},options:this.props.datakondisi.filter(a=>void 0!==a.kondisi_barang).map(a=>{return{value:a.kondisi_barang,name:a.kondisi_barang}}),placeholder:"Silahkan Pilih Kondisi Barang",component:g.f})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(l.a,{onChange:a=>this.getKodeBarcode(a.target.value),name:"kode_barcode",component:g.e,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode"}))),s.a.createElement(u.a,{keyField:"kode_barcode",pagination:"off",exportCsv:!1,data:0===this.props.setHancurBarang.length?JSON.parse(localStorage.getItem("data_barang_hancur_tmp")):this.props.setHancurBarang,columns:this.props.columns,empty:!0,textEmpty:"Data Barang Kosong"}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10"},s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.isLoading},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"),"\xa0",s.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:()=>this.batalHancur(),disabled:this.props.isLoading},this.state.isLoadingBatal?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Membatal"):"Batal"))),this.props.isLoading?s.a.createElement(k.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}f=Object(c.a)({form:"HeadaHancurDataBarang",enableReinitialize:!0,validate:b.a})(f);var E=Object(o.b)(a=>({datakondisi:a.datamaster.getDataKondisiBarang,setHancurBarang:a.databarang.setHancurBarang}),null)(f),B=t(27),O=t.n(B),S=t(720),N=t(40);e.default=Object(o.b)(a=>({setHancurBarang:a.databarang.setHancurBarang}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,isLoadingOtorisasi:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"5"},footer:(a,e,t,n)=>s.a.createElement("div",null,"Total Barang :"," ",0===this.props.setHancurBarang.length?null===JSON.parse(localStorage.getItem("data_barang_hancur_tmp"))?0:JSON.parse(localStorage.getItem("data_barang_hancur_tmp")).length||0:this.props.setHancurBarang.length||0," ")},{dataField:"kode_group",text:"Gudang Asal"},{dataField:"kode_dept",text:"Baki Asal"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"nama_atribut",text:"Nama Atribut"},{dataField:"berat",text:"Berat",formatter:a=>a.toFixed(3),footer:a=>a.reduce((a,e)=>a+e,0).toFixed(3)},{dataField:"kondisi_barang",text:"Kondisi Barang",footer:""},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>s.a.createElement("div",{className:"row text-center"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{type:"button",onClick:()=>this.hapusdata(t),className:"btn btn-danger mr-3"},s.a.createElement("i",{className:"fa fa-trash"})))),footer:""}]},this.handleSubmit=this.handleSubmit.bind(this)}hapusdata(a){O.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=JSON.parse(localStorage.getItem("data_barang_hancur_tmp"));e.splice(a,1),localStorage.setItem("data_barang_hancur_tmp",JSON.stringify(e)),this.props.dispatch(Object(d.u)(e))}})}handleSubmit(a){this.props.dispatch(Object(m.xb)())}hancurBarang(a){this.setState({isLoadingOtorisasi:!0});let e={user_id:a.username,password:a.password,kategori:"HANCUR BARANG",description:"SIMPAN HANCUR BARANG",keterangan:a.keterangan||"-"};Object(h.f)("authorization",e).then(a=>{Object(p.e)("success","Otorisasi Berhasil"),this.setState({isLoading:!0});let e={detail_barang:0===this.props.setHancurBarang.length?JSON.parse(localStorage.getItem("data_barang_hancur_tmp"))||0:this.props.setHancurBarang||0};Object(h.e)("hancurbarang/add",e).then(()=>{this.setState({isLoading:!1,isLoadingOtorisasi:!1})}).then(()=>{localStorage.setItem("data_barang_hancur_tmp",JSON.stringify([]))}).then(()=>{this.props.dispatch(Object(d.u)([]))}).then(()=>{this.setState({isLoadingOtorisasi:!1}),this.props.dispatch(Object(m.wb)()),Object(p.e)("success","Data Berhasil Dihancur")}).catch(a=>{this.setState({isLoadingOtorisasi:!1}),this.errorhandling(a)})}).catch(a=>{Object(p.e)("info","Username atau Password Salah"),this.setState({isLoadingOtorisasi:!1})})}errorhandling(a){Object(p.e)("info",/conflict/i.test(a.response.data)?"Terjadi Kesalahan Saat Mengirim Data":a.response.data)}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(r.b,{to:"#"},"Barang")),s.a.createElement("li",{className:"breadcrumb-item active"},"Hancur Barang")),s.a.createElement("h1",{className:"page-header"},"Hancur Barang "),s.a.createElement(i.a,null,s.a.createElement(i.c,null,"Hancur Barang"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(E,{isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a),columns:this.state.columns})),s.a.createElement("br",null),s.a.createElement(N.a,{size:"L",title:"Otorisasi Hancur Barang",content:s.a.createElement(S.a,{keterangan:!0,isLoadingOtorisasi:this.state.isLoadingOtorisasi,onSubmit:a=>this.hancurBarang(a)})})))}})},719:function(a,e,t){"use strict";e.a=(a=>{const e={};return a.kode_gudang||(e.kode_gudang="Kode Gudang Tidak Boleh Kosong"),a.kode_baki||(e.kode_baki="Nama Baki Tidak Boleh Kosong"),a.statusAktif||(e.statusAktif="Status Tidak Boleh Kosong"),e})},720:function(a,e,t){"use strict";var n=t(0),s=t.n(n),r=t(9),i=t(291),o=t(292),l=t(5);class c extends n.Component{constructor(a){super(a),this.state={}}componentDidMount(){setTimeout(()=>{document.getElementById("username").focus()},100)}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(i.a,{name:"no_faktur_group",component:l.b,type:"hidden"}),s.a.createElement(i.a,{name:"alasan",component:l.b,type:"hidden"}),s.a.createElement(i.a,{id:"username",name:"username",component:l.e,type:"text",label:"Username",placeholder:"Masukan Username"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(i.a,{name:"password",component:l.e,type:"password",label:"Password",placeholder:"Masukan Password"})),s.a.createElement("div",{className:this.props.keterangan?"col-lg-12":"col-lg-12 d-none"},s.a.createElement(i.a,{name:"keterangan",component:l.e,label:"Keterangan",placeholder:"Masukan Keterangan"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("label",null," \xa0 "),s.a.createElement("button",{type:"submit",name:"type_btn",className:"btn btn-primary btn-block",disabled:this.props.isLoadingOtorisasi},this.props.isLoadingOtorisasi?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Otorisasi"):"Otorisasi"))))}}c=Object(o.a)({form:"OtorisasiHancur",enableReinitialize:!0})(c),e.a=Object(r.b)(null)(c)}}]);
//# sourceMappingURL=6.b741d006.chunk.js.map