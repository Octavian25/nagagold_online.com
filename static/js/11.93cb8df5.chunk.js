(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1133:function(a,e,t){"use strict";t.r(e);var n=t(0),s=t.n(n),i=t(9),l=t(16),r=t(14),o=t(61),c=t(5),m=t(11),d=t(6),b=t(291),u=t(292),p=t(7),g=t(4),h=t(18),f=t(721);class E extends n.Component{constructor(a){super(a),this.state={isloadingFaktur:!1,isLoading:!1,isLoadingBatal:!1,date:new Date}}getFaktur(a){this.setState({no_faktur:a})}getDetailFaktur(){this.setState({isLoading:!0});let a={no_faktur_group:this.state.no_faktur};Object(d.e)("batalpembelian/get/by-faktur",a).then(a=>{0===a.data.length?(Object(c.e)("info","Data Transaksi Tersbut Tidak Ada"),this.setState({isLoading:!1})):(this.props.dispatch(Object(o.l)(a.data)),this.setState({isLoading:!1}))}).catch(a=>{Object(c.e)("info","Data Transaksi Tersbut Tidak Ada"),this.setState({isLoading:!1})})}componentDidMount(){this.props.dispatch(Object(p.nb)())}btlPembelian(){this.setState({isLoadingBatal:!0}),setTimeout(()=>{this.setState({isLoadingBatal:!1}),this.props.dispatch(Object(o.l)([]))},500)}render(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(b.a,{onChange:a=>this.getFaktur(a.target.value),name:"no_faktur",component:g.e,type:"text",label:"No Faktur",placeholder:"Masukan No Faktur"})),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"button",onClick:()=>this.getDetailFaktur(),name:"type_btn",className:"btn btn-primary btn-block",disabled:this.state.isLoading},this.state.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(h.a,{keyField:"kode_barcode",exportCsv:!1,data:this.props.setBatalPembelian||[],columns:this.props.columns,empty:!0,textEmpty:"Data Barang Kosong"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",name:"type_btn",className:"btn btn-primary",disabled:this.props.isLoading},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mengirim Data"):"Simpan Batal Pembelian"),"\xa0",s.a.createElement("button",{type:"button",name:"type_btn",onClick:()=>this.btlPembelian(),className:"btn btn-warning",disabled:this.state.isLoadingBatal},this.state.isLoadingBatal?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Batal"):"Batal"))))}}E=Object(u.a)({form:"HeadBatalPembelian",enableReinitialize:!0,validate:f.a})(E);var k=Object(i.b)(a=>({setBatalPembelian:a.penjualan.setBatalPembelian,datakondisi:a.datamaster.getDataKondisiBarang}),null)(E);e.default=Object(i.b)(a=>({setBatalPembelian:a.penjualan.setBatalPembelian}),null)(class extends s.a.Component{constructor(a){super(a),this.state={isLoading:!1,databarang:[],columns:[{dataField:"no_faktur_beli",text:"No Faktur Beli",footerAttrs:{colSpan:"1"},footer:"Total Barang"},{dataField:"nama_barang",text:"Nama Barang",footer:a=>parseInt(this.props.setBatalPembelian.length)},{dataField:"berat_nota",text:"Berat Nota",formatter:a=>s.a.createElement("span",null,parseFloat(a).toFixed(1)),footer:a=>parseFloat(a.reduce((a,e)=>a+e,0)).toFixed(1)},{dataField:"harga_nota",text:"Harga Nota",formatter:a=>s.a.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"berat",text:"Berat",formatter:a=>s.a.createElement("span",null,parseFloat(a).toFixed(1)),footer:a=>parseFloat(a.reduce((a,e)=>a+e,0)).toFixed(1)},{dataField:"harga",text:"Harga Emas",formatter:a=>s.a.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")}]},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(a){this.setState({isLoading:!0});let e={no_faktur_group:a.no_faktur};Object(d.e)("batalpembelian/simpan",e).then(a=>{this.setState({isLoading:!1}),this.props.dispatch(Object(o.l)([])),this.props.dispatch(Object(r.d)("HeadBatalPembelian")),Object(c.e)("success",a.data.message)}).catch(a=>{this.setState({isLoading:!1}),Object(c.e)("success",a.message)})}render(){return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(l.b,{to:"#"},"Pembelian")),s.a.createElement("li",{className:"breadcrumb-item active"},"Batal Pembelian")),s.a.createElement("h1",{className:"page-header"},"Batal Pembelian "),s.a.createElement(m.a,null,s.a.createElement(m.c,null,"Batal Pembelian"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(k,{isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a),data:this.state.databarang,columns:this.state.columns})),s.a.createElement("br",null)))}})},721:function(a,e,t){"use strict";e.a=(a=>{const e={};return a.kode_barcode||(e.kode_barcode="Kode Barcode Harus Diisi"),a.no_faktur||(e.no_faktur="No Faktur Harus Diisi"),a.alasan||(e.alasan="Alasan Harus Diisi"),e})}}]);
//# sourceMappingURL=11.93cb8df5.chunk.js.map