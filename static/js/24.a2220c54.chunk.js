(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1115:function(a,t,e){"use strict";e.r(t);var n=e(0),i=e.n(n),s=e(16),l=e(11),r=e(9),o=e(291),d=e(292),g=e(31),u=e(7),c=e(4),m=e(5),p=e(18),b=e(6);var h=a=>{const t={};return a.baki_asal||(t.baki_asal="Baki Asal Tidak Boleh Kosong"),a.baki_tujuan||(t.baki_tujuan="Baki Tujuan Tidak Boleh Kosong"),a.gudang_asal||(t.gudang_asal="Gudang Asal Tidak Boleh Kosong"),a.gudang_tujuan||(t.gudang_tujuan="Gudang Tujuan Tidak Boleh Kosong"),t},k=e(15),_=e.n(k);class S extends n.Component{constructor(a){super(a),this.state={date:new Date,isLoadingBaki:!1,isLoadingBatal:!1,bakigudangtujuan:!1,loadingpencarian:!1}}componentDidMount(){this.props.dispatch(Object(u.jb)()),this.props.dispatch(Object(u.hb)()),setTimeout(()=>{this.setState({gudang_asal:"TOKO"}),this.props.change("gudang_asal","TOKO")},100)}filterLaporan(){this.setState({loadingpencarian:!0}),this.setState({bakigudangtujuan:!0}),Object(b.c)("barang/get/by-kode-baki/"+this.state.baki_asal).then(a=>{0===a.data.length?(this.setState({loadingpencarian:!1,bakigudangtujuan:!1}),Object(m.e)("info","Data Yang Dicari Tidak Ada"),localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify([])),this.props.dispatch(Object(g.s)([]))):(localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify([])),localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify(a.data)),this.props.dispatch(Object(g.s)(a.data)),this.setState({loadingpencarian:!1}))}).catch(a=>{this.setState({bakigudangtujuan:!1}),this.errorHandling(a)})}errorHandling(a){this.setState({loadingpencarian:!1,bakigudangtujuan:!1}),Object(m.e)("info","Data Yang Dicari Tidak Ada"),localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify([])),this.props.dispatch(Object(g.s)([]))}batalHancur(){this.setState({isLoadingBatal:!0}),setTimeout(()=>{this.props.dispatch(Object(g.s)([])),localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify([])),this.setState({isLoadingBatal:!1})},500)}render(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(o.a,{label:"Gudang Asal",name:"gudang_asal",onChange:a=>{this.setState({gudang_asal:a,bakigudangtujuan:!1}),this.props.change("baki_asal",""),this.props.dispatch(Object(g.s)([])),localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify([]))},options:this.props.datagudang.filter(a=>void 0!==a.kode_gudang).map(a=>{return{value:a.kode_gudang,name:a.kode_gudang+" - "+a.nama_gudang}}),placeholder:"Silahkan Pilih Gudang Asal",component:c.f})),i.a.createElement("div",{className:"col-lg-4"},!1===this.state.isLoadingBaki?i.a.createElement(o.a,{label:"Baki Asal",name:"baki_asal",onChange:a=>{this.setState({baki_asal:a})},options:this.props.databaki.filter(a=>a.kode_gudang===this.state.gudang_asal).map(a=>{return{value:a.kode_baki,name:a.kode_baki+" - "+a.nama_baki}||[]}),placeholder:"Silahkan Pilih Baki Asal",component:c.f}):i.a.createElement(c.g,{label:"Baki Asal"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",null," \xa0 "),i.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.submitting,onClick:()=>this.filterLaporan(),type:"button"},this.state.loadingpencarian?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari Data"):"Cari Data")),!1===this.state.bakigudangtujuan?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(o.a,{label:"Gudang Tujuan",name:"gudang_tujuan",onChange:a=>{this.setState({gudang_tujuan:a}),this.props.change("baki_tujuan","")},options:this.props.datagudang.filter(a=>void 0!==a.kode_gudang).map(a=>{return{value:a.kode_gudang,name:a.kode_gudang+" - "+a.nama_gudang}}),placeholder:"Silahkan Pilih Gudang Tujuan",component:c.f})),i.a.createElement("div",{className:"col-lg-6"},!1===this.state.isLoadingBaki?i.a.createElement(o.a,{label:"Baki Tujuan",name:"baki_tujuan",options:this.props.databaki.filter(a=>a.kode_gudang===this.state.gudang_tujuan).map(a=>{return{value:a.kode_baki,name:a.kode_baki+" - "+a.nama_baki}||[]}),placeholder:"Silahkan Pilih Baki Tujuan",component:c.f}):i.a.createElement(c.g,{label:"Baki Tujuan"})))),i.a.createElement(p.a,{keyField:"kode_barcode",exportCsv:!1,data:0===this.props.setBarangPindahSatuBaki.length?JSON.parse(localStorage.getItem("data_barang_satu_baki_tmp")):this.props.setBarangPindahSatuBaki,columns:this.props.columns,empty:!0,pagination:"off",textEmpty:"Data Barang Kosong"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10"},i.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"),"\xa0",i.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:()=>this.batalHancur(),disabled:this.props.isLoadingBatal},this.state.isLoadingBatal?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Membatal"):"Batal"))),this.props.isLoading?i.a.createElement(_.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}S=Object(d.a)({form:"HeadPindahBarangSatuBaki",enableReinitialize:!0,validate:h})(S);var B=Object(r.b)(a=>({datagudang:a.datamaster.getDataGudang,databaki:a.datamaster.getDataBaki,setBarangPindahSatuBaki:a.databarang.setBarangPindahSatuBaki}),null)(S),f=e(27),j=e.n(f),E=e(14);t.default=Object(r.b)(a=>({setBarangPindahSatuBaki:a.databarang.setBarangPindahSatuBaki}),null)(class extends i.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"5"},footer:(a,t,e,n)=>i.a.createElement("div",null,"Total Barang : ",0===this.props.setBarangPindahSatuBaki.length?null===JSON.parse(localStorage.getItem("data_barang_satu_baki_tmp"))?0:JSON.parse(localStorage.getItem("data_barang_satu_baki_tmp")).length:this.props.setBarangPindahSatuBaki.length," ")},{dataField:"kode_group",text:"Gudang Asal"},{dataField:"kode_dept",text:"Baki Asal"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"nama_atribut",text:"Nama Atribut"},{dataField:"berat",text:"Berat",formatter:a=>a.toFixed(1),footer:a=>a.reduce((a,t)=>a+t,0).toFixed(1)}]},this.handleSubmit=this.handleSubmit.bind(this)}hapusdata(a){j.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(t=>{if(t.isConfirmed){let t=JSON.parse(localStorage.getItem("data_barang_satu_baki_tmp"));t.splice(a,1),localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify(t)),this.props.dispatch(Object(g.s)(t))}})}componentDidMount(){localStorage.setItem("data_barang_satu_baki_tmp","[]")}handleSubmit(a){this.setState({isLoading:!0});let t={kode_gudang:a.gudang_tujuan,kode_toko:a.baki_tujuan,kode_gudang_asal:a.gudang_asal,kode_toko_asal:a.baki_asal};Object(b.e)("pindahbarang/addbanyak",t).then(()=>{this.setState({isLoading:!1})}).then(()=>{localStorage.setItem("data_barang_satu_baki_tmp",JSON.stringify([]))}).then(()=>{this.props.dispatch(Object(g.s)([]))}).then(()=>{this.props.dispatch(Object(E.d)("HeadPindahBarangSatuBaki"))}).then(()=>{Object(m.e)("success","Data Berhasil Disimpan")}).catch(a=>this.errorhandling(a))}errorhandling(a){Object(m.a)(a.response.data),this.setState({isLoading:!1})}render(){return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(s.b,{to:"#"},"Barang")),i.a.createElement("li",{className:"breadcrumb-item active"},"Pindah Barang Satu Baki")),i.a.createElement("h1",{className:"page-header"},"Pindah Barang Satu Baki "),i.a.createElement(l.a,null,i.a.createElement(l.c,null,"Pindah Barang Satu Baki"),i.a.createElement("br",null),i.a.createElement("div",{className:"container"},i.a.createElement(B,{isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a),data:this.props.setBarangPindahSatuBaki,columns:this.state.columns})),i.a.createElement("br",null)))}})}}]);
//# sourceMappingURL=24.a2220c54.chunk.js.map