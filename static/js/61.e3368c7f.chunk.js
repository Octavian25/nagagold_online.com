(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1088:function(a,e,t){"use strict";t.r(e);var n=t(1),r=t(43),l=t(8),s=t(56),o=t(89),i=t(0),c=t.n(i),m=t(10),p=t(288),d=t(3),h=t(5),b=t(18),u=t(6),g=t(287),_=t(4);var j=a=>{const e={};return a.filter||(e.filter="Filter Pencarian Tidak Boleh Kosong"),a.pencarian||(e.pencarian="Filter Pencarian Tidak Boleh Kosong"),e};const E=[{value:"NO_HP",name:"NO HP"},{value:"NAMA_CUSTOMER",name:"NAMA CUSTOMER"},{value:"NO_TITIP",name:"NO TITIPAN"}];class O extends i.Component{constructor(a){super(a),this.state={type_pembayaran:"CASH"}}render(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement(g.a,{name:"filter",label:"Filter",placeholder:"Pilih Filter",options:E,component:_.f})),c.a.createElement("div",{className:"col-4"},c.a.createElement(g.a,{name:"pencarian",label:"Pencarian",placeholder:"Masukan Pencarian",component:_.e})),c.a.createElement("div",{className:"col-4"},c.a.createElement("label",null,"\xa0"),c.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari")))))}}O=Object(p.a)({form:"FilterTitipan",enableReinitialize:!0,validate:j})(O);var y=Object(m.b)(a=>{let e=Object(d.e)("filter_titipan")||[];return{initialValues:{filter:e.filter,pencarian:e.pencarian}}})(O);class f extends i.Component{constructor(a){super(a),this.state={isLoading:!1,type_pembayaran:"CASH",databarang:[],columns:[{dataField:"no_titip_group",text:"No Titip",footerAttrs:{colSpan:"7"},footer:"Total"},{dataField:"kode_group",text:"Kategori"},{dataField:"kode_dept",text:"Jenis"},{dataField:"kode_barcode",text:"Barcode"},{dataField:"kode_barang",text:"Kode Barang"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"no_hp",text:"No Hp"},{dataField:"total_dp",text:"Total Dp",formatter:a=>c.a.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{type:"button",onClick:()=>this.pilihdata(e),className:"btn btn-danger mr-3"},"Pilih Barang"))),footer:""}]}}pilihdata(a){let e=Object(d.e)("data_customer_tmp");if(0!==e.length&&e.no_hp!==a.no_hp)return Object(h.e)("info","Customer Tidak Boleh Berbeda"),!1;let t=0===Object(d.i)("data_barang_penjualan_tmp").length?[]:JSON.parse(Object(d.i)("data_barang_penjualan_tmp"));if(-1===t.findIndex(e=>e.kode_barcode===a.kode_barcode)){let e={no_titip_group:a.no_titip_group||"-",total_dp:a.total_dp||0,kode_barcode:a.kode_barcode||0,nama_barang:a.nama_barang||"-",nama_atribut:a.nama_atribut||"-",berat_jual:parseFloat(a.berat)||0,berat_atribut:parseFloat(a.berat_atribut)||0,harga_atribut:parseInt(a.harga_atribut)||0,harga_jual:parseInt(a.harga_jual)||0,harga_pergram:parseInt(a.harga_pergram)||0,ongkos:parseInt(a.ongkos)||0,total:parseInt(a.harga_total)||0,status_premi:a.premi?"PREMI":"NONPREMI",pembayaran:a.pembayaran};t.push(e),Object(d.j)("data_barang_penjualan_tmp",JSON.stringify(t)),this.props.dispatch(Object(s.k)(t))}else Object(h.e)("info","Barang Sudah Ada Di Tabel");let n={alamat_customer:a.alamat_customer,jenis_pelanggan:"NONMEMBER"===a.kode_customer?"NONMEMBER":a.kode_customer,kode_customer:a.kode_customer,kode_sales:a.kode_sales,nama_customer:a.nama_customer,no_hp:a.no_hp};Object(d.j)("data_customer_tmp",JSON.stringify(n));let r=0===Object(d.i)("trx_pemabayran_penjualan").length?[]:JSON.parse(Object(d.i)("trx_pemabayran_penjualan"));a.pembayaran.forEach(a=>{if(-1===r.findIndex(e=>e.jenis===a.jenis)){let e={jenis:a.jenis,keterangan:"TITIPAN",nominal:a.jumlah_rp};r.push(e),Object(d.k)("trx_pemabayran_penjualan",r)}else{let e=Object(d.e)("trx_pemabayran_penjualan");e=e.map(e=>(e.jenis===a.jenis&&(e.nominal+=a.jumlah_rp),e)),Object(d.k)("trx_pemabayran_penjualan",e)}});let o=Object(d.e)("trx_pemabayran_penjualan"),i=0;o.forEach(a=>{i+=a.nominal}),Object(d.k)("total_dp",i),this.props.dispatch(Object(l.vb)())}filterPencarian(a){this.setState({isLoading:!0}),Object(u.c)("titip/valid/"+a.filter+"/"+a.pencarian).then(e=>{0===e.data.length&&Object(h.e)("info","Data Yang Anda Cari Tidak Ada"),this.setState({databarang:e.data,isLoading:!1});let t={filter:a.filter,pencarian:a.pencarian,data_barang:e.data};Object(d.k)("filter_titipan",t)}).catch(a=>{this.setState({isLoading:!1}),Object(h.e)("info",a.response.data||"Terjadi Kesalahan Saat Request Data")})}render(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{isLoading:this.state.isLoading,onSubmit:a=>this.filterPencarian(a)}),c.a.createElement(b.a,{keyField:"kode_barcode",exportCsv:!1,data:0===this.state.databarang.length?Object(d.e)("filter_titipan").data_barang||[]:this.state.databarang,columns:this.state.columns,empty:!0,textEmpty:"Data Barang Kosong"}))}}f=Object(p.a)({form:"AmbilTitipan",enableReinitialize:!0})(f);var k=Object(m.b)()(f),N=t(90);const S=[{value:"MEMBER",name:"MEMBER"},{value:"NONMEMBER",name:"NON MEMBER"}];class x extends n.b{constructor(a){super(a),this.state={showMember:!0}}componentDidMount(){this.props.dispatch(Object(l.nb)());let a=0===Object(n.D)("data_customer_tmp").length?[]:JSON.parse(Object(n.D)("data_customer_tmp")||[]);a&&"MEMBER"===a.jenis_pelanggan?this.setState({showMember:!1}):this.setState({showMember:!0})}changemember(a){"MEMBER"===a?(this.setState({showMember:!1}),document.getElementById("kode_member").focus()):(document.getElementById("nama_customer").focus(),this.props.change("kode_customer",""),this.props.change("nama_customer",""),this.props.change("no_hp",""),this.props.change("alamat_customer",""),this.setState({showMember:!0}))}getMember(a){Object(n.x)("member/get/by-kode-member/"+a).then(a=>{0===a.data.length?Object(n.r)("info","Member Yang Anda Masukan Tidak Ada !!!"):a.data.forEach((a,e)=>{this.props.change("nama_customer",a.nama_customer),this.props.change("no_hp",a.no_hp),this.props.change("alamat_customer",a.alamat_customer)})}).catch(a=>{Object(n.r)("info","Terjadi Kesalahan SIlahkan Ulangi Kembali !!!")})}render(){return n.l.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,{name:"kode_sales",label:"Pilih Kode Sales",placeholder:"Masukan Kode Sales",options:this.props.DataSales.filter(a=>void 0!==a.kode_sales).map(a=>{return{value:a.kode_sales,name:a.kode_sales}}),component:n.o})),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,{id:"jenis_pelanggan",name:"jenis_pelanggan",label:"Pilih Pelanggan",onChange:a=>this.changemember(a),placeholder:"Silahkan Pilih Pelanggan",options:S,component:n.o})),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,{id:"kode_member",name:"kode_customer",onChange:a=>this.getMember(a.target.value),component:n.n,type:"text",readOnly:this.state.showMember,label:"Kode Customer",placeholder:"Masukan Kode Customer"})),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,{id:"nama_customer",name:"nama_customer",component:n.n,type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer"})),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,{name:"no_hp",component:n.n,type:"text",normalize:n.i,label:"No Hp",placeholder:"Masukan No Hp"})),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,{name:"alamat_customer",component:n.n,type:"textarea",label:"Alamat Customer",placeholder:"Masukan Alamat Customer"}))),n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-8"}),n.l.createElement("div",{className:"col-4"},n.l.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingDataCustomer,type:"submit"},this.props.isLoadingDataCustomer?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}x=Object(n.H)({form:"ModalDataCustomer",enableReinitialize:!0,validate:N.a})(x);var M=Object(n.s)(a=>{let e=0===Object(n.D)("data_customer_tmp").length?[]:JSON.parse(Object(n.D)("data_customer_tmp")||[]);return{initialValues:{kode_sales:e.kode_sales||"",jenis_pelanggan:e.jenis_pelanggan||"",kode_customer:e.kode_customer||"",nama_customer:e.nama_customer||"",no_hp:e.no_hp||"",alamat_customer:e.alamat_customer||""},DataSales:a.datamaster.getDataSales}})(x),T=t(57);const v=Object(n.u)({prefix:"Rp. ",locale:"id-ID"}),I=[{value:"CASH",name:"CASH"},{value:"DEBET",name:"DEBET"},{value:"TRANSFER",name:"TRANSFER"}];class C extends n.b{constructor(a){super(a),this.state={isLoading:!1,type_pembayaran:"CASH",columns:[{dataField:"type",text:"Type",footerAttrs:{colSpan:"1"},footer:"Grand Total"},{dataField:"Total",text:"Total",footer:""}]}}componentDidMount(){this.props.dispatch(Object(l.nb)());let a=JSON.parse(Object(n.D)("data_barang_penjualan_tmp")),e=Object(n.y)("total_dp");this.props.change("total_dp",e);let t=0;a.forEach((a,e)=>{t+=a.total,this.props.change("grand_total_pembayaran",t),this.props.change("harus_bayar_rp",t)}),this.props.change("jenis","CASH"),setTimeout(()=>{document.getElementById("cash_trx_penjualan").focus()},100)}hitungTotal(){this.props.change("kembali",this.props.kembali)}pilihPembyaran(a){"CASH"===a?this.setState({type_pembayaran:"CASH"}):"TRANSFER"===a?this.setState({type_pembayaran:"TRANSFER"}):this.setState({type_pembayaran:"DEBET"}),this.props.change("cash","")}render(){return n.l.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,Object.assign({name:"grand_total_pembayaran",component:n.n,type:"text",onChange:this.hitungTotal(),readOnly:!0},v,{label:"Total Harga Jual",placeholder:"Total Harga Jual"}))),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,Object.assign({name:"total_dp",component:n.n,type:"text",onChange:this.hitungTotal(),readOnly:!0},v,{label:"Total Dp",placeholder:"Total Dp"}))),n.l.createElement("div",{className:"col-4"},n.l.createElement(n.c,Object.assign({id:"harus_bayar_rp",name:"harus_bayar_rp",component:n.n,type:"text",onChange:this.hitungTotal(),readOnly:!0},v,{label:"Harus Bayar Rp",placeholder:"Harus Bayar Rp"}))),n.l.createElement("div",{className:"col-6"},n.l.createElement(n.c,{name:"jenis",label:"Pilih Jenis Bayar",placeholder:"Pilih Jenis Pembayaran",options:I,onChange:a=>this.pilihPembyaran(a),component:n.o})),n.l.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":(this.state.type_pembayaran,"block")}},n.l.createElement(n.c,{tabIndex:"1",name:"nama_bank",id:"nama_bank",component:n.n,type:"text",label:"Bank",placeholder:"Masukan Nama Bank"})),n.l.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":"DEBET"===this.state.type_pembayaran?"none":"block"}},n.l.createElement(n.c,{tabIndex:"1",name:"no_card",id:"no_card",component:n.n,type:"text",label:"Card No",placeholder:"Masukan Card No"})),n.l.createElement("div",{className:"col-6"},n.l.createElement(n.c,Object.assign({tabIndex:"1",name:"cash",id:"cash_trx_penjualan",component:n.n,type:"text",label:"Nominal",onChange:this.hitungTotal()},v,{normalize:n.i,placeholder:"Masukan Nominal"}))),n.l.createElement("div",{className:"col-6"},n.l.createElement(n.c,{name:"kembali",id:"sisa_bayar",component:n.n,type:"text",readOnly:!0,label:"Sisa",normalize:n.i,placeholder:"Sisa Pembayaran"})),n.l.createElement("div",{className:"CASH"===this.state.type_pembayaran?"col-6 text-right":"TRANSFER"===this.state.type_pembayaran?"col-6 text-right":"col-12 text-right"},n.l.createElement("br",null),n.l.createElement("label",null,"\xa0"),n.l.createElement("button",{tabIndex:"2",className:"btn btn-primary"}," ",n.l.createElement("i",{className:"fa fa-plus"})))))}}C=Object(n.H)({form:"HeadInputPembayaran",enableReinitialize:!0,validate:T.a})(C);const B=Object(n.v)("HeadInputPembayaran");var P=Object(n.s)(a=>{const e=B(a,"grand_total_pembayaran","harus_bayar_rp","cash"),t=e.harus_bayar_rp,n=e.cash;let r=JSON.parse(localStorage.getItem("trx_pemabayran_penjualan"))||[],l=0;return r.forEach(a=>{l=a.nominal+l}),{kembali:(parseFloat(l||0)-parseFloat(t||0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),nominal_cash:n}})(C);class D extends n.b{constructor(a){super(a),this.state={isLoading:!1,type_pembayaran:"CASH",kembalian:"",columns:[{dataField:"jenis",text:"Jenis",footerAttrs:{colSpan:"2"},footer:"Grand Total"},{dataField:"keterangan",text:"Keterangan"},{dataField:"nominal",text:"Total",formatter:a=>n.l.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>n.l.createElement("div",{className:"row text-center"},n.l.createElement("div",{className:"col-12"},n.l.createElement("button",{type:"button",disabled:"TITIPAN"===e.keterangan,onClick:()=>this.hapusdata(t),className:"btn btn-danger mr-3"},n.l.createElement("i",{className:"fa fa-trash"})))),footer:""}]}}hapusdata(a){n.p.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=Object(n.y)("trx_pemabayran_penjualan");e.splice(a,1),Object(n.J)("trx_pemabayran_penjualan",e),this.setState({status:"berhasil"})}})}simpanPembayaran(a){if("CASH"!==a.jenis&&a.kembali.replace(/[^0-9]/g,"")-a.cash<0)return Object(n.r)("info","Pembayaran tidak boleh lebih dari sisa"),!1;let e=JSON.parse(localStorage.getItem("trx_pemabayran_penjualan"))||[];if(-1===e.findIndex(e=>e.jenis===a.jenis)){let t="";t="CASH"===a.jenis?"CASH":"TRANSFER"===a.jenis?a.no_card+" - "+a.nama_bank:a.nama_bank;let r={jenis:a.jenis,nominal:parseInt(a.cash),nama_bank:a.nama_bank,no_card:a.no_card,keterangan:t};e.push(r),this.setState({masuk:!0,kembalian:a.kembali}),Object(n.J)("trx_pemabayran_penjualan",e)}else{let e=Object(n.y)("trx_pemabayran_penjualan");e=e.map(e=>(e.jenis===a.jenis&&(e.nominal+=parseInt(a.cash)),e)),Object(n.J)("trx_pemabayran_penjualan",e),this.setState({status:!0,kembalian:a.kembalian})}}render(){return n.l.createElement(n.l.Fragment,null,n.l.createElement(P,{onSubmit:a=>this.simpanPembayaran(a)}),n.l.createElement("hr",null),n.l.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},n.l.createElement(n.q,{keyField:"jenis",exportCsv:!1,data:Object(n.y)("trx_pemabayran_penjualan")||[],columns:this.state.columns,empty:!0,pagination:"off",textEmpty:"Data Pembayaran Kosong"}),n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-6"},n.l.createElement("button",{className:"btn btn-primary",disabled:!(!this.props.isLoadingPembayranTitipan&&"TITIPAN"!==this.props.status),onClick:()=>this.props.bayarTitipan(),type:"button"},this.props.isLoadingPembayranTitipan?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Diproses"):"Bayar DP")),n.l.createElement("div",{className:"col-6 text-right"},n.l.createElement("button",{className:"btn btn-primary",disabled:this.props.isLoadingPembayran,onClick:()=>this.props.simpanPembayaran(),type:"button"},this.props.isLoadingPembayran?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Diproses"):"Bayar Sekarang")))))}}D=Object(n.H)({form:"ModalPembayaran",enableReinitialize:!0,validate:T.a})(D);var F=Object(n.s)(a=>{let e=Object(n.y)("data_barang_penjualan_tmp")||[],t="PENJUALAN";return e.forEach(a=>{t="-"===a.no_titip_group?"PENJUALAN":"TITIPAN"}),{status:t}})(D),A=t(150),L=t.n(A),J=t(200),w=t(135);const R=Object(n.u)({prefix:"Rp. ",locale:"id-ID"});class H extends n.b{constructor(a){var e;super(a),e=this,this.getValue=function(){var a=Object(J.a)(L.a.mark(function a(t){var l,s;return L.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=t.target.files[0],a.next=3,Object(n.t)(l);case 3:s=a.sent,e.props.change("foto",s),e.props.dispatch(Object(r.m)(s)),e.setState({gambar:s});case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),this.state={ModalWebCam:!1,isLoading:!1,harga_jual:!0,berat_jual:!0,hargapergram:!0,otorisasi:!1,ongkos:!0,total:!0,gambar:!1}}showModalWebcam(){this.props.dispatch(Object(r.m)(!1)),this.props.dispatch(Object(n.K)()),this.setState({ModalWebCam:!0})}handleTakePhoto(a){this.props.dispatch(Object(r.m)(a)),this.props.change("foto",a),this.setState({ModalWebCam:!1})}getBarcode(a){-1===(JSON.parse(localStorage.getItem("data_barang_penjualan_tmp"))||[]).findIndex(e=>e.kode_barcode===a)?Object(n.x)("barang/get/by-kode-barcode/"+a).then(e=>{0===e.data.length?(Object(n.r)("info","Kode Barcode Tidak Ada"),this.props.change("nama_barang",""),this.props.change("nama_atribut",""),this.props.change("berat_atribut",""),this.props.change("harga_atribut",""),this.props.change("harga_jual",""),this.props.change("harga_jual_tmp",""),this.props.change("berat",""),this.props.dispatch(Object(r.m)(!1)),this.props.change("foto","")):Object(n.x)("imagebarang/get/by-kode-barcode/"+a).then(a=>{""===a.data?e.data.forEach((a,e)=>{this.props.change("nama_barang",a.nama_barang),this.props.change("nama_atribut",a.nama_atribut),this.props.change("berat_atribut",a.berat_atribut),this.props.change("harga_atribut",a.harga_atribut),this.props.change("harga_jual",a.harga_jual),this.props.change("harga_jual_tmp",a.harga_jual),this.props.change("berat",a.berat),this.props.dispatch(Object(r.m)(!1)),this.props.change("foto",""),this.setState({harga_jual:!1,berat_jual:!1,hargapergram:!1,ongkos:!1})}):(this.props.dispatch(Object(r.m)(a.data.dataimage)),this.props.change("foto",a.data.dataimage),e.data.forEach((a,e)=>{this.props.change("nama_barang",a.nama_barang),this.props.change("nama_atribut",a.nama_atribut),this.props.change("berat_atribut",a.berat_atribut),this.props.change("harga_atribut",a.harga_atribut),this.props.change("harga_jual_tmp",a.harga_jual),this.props.change("harga_jual",a.harga_jual),this.props.change("berat",a.berat),this.setState({harga_jual:!1,berat_jual:!1,hargapergram:!1,ongkos:!1})}))}).catch(a=>{this.props.change("foto",""),this.props.dispatch(Object(r.m)(!1)),e.data.forEach((a,e)=>{this.props.change("nama_barang",a.nama_barang),this.props.change("nama_atribut",a.nama_atribut),this.props.change("berat_atribut",a.berat_atribut),this.props.change("harga_atribut",a.harga_atribut),this.props.change("harga_jual_tmp",a.harga_jual),this.props.change("berat",a.berat),this.setState({harga_jual:!1,berat_jual:!1,hargapergram:!1,ongkos:!1})})})}).catch(a=>{404!==a.response.status&&Object(n.r)("info",a.response.data)}):Object(n.r)("info","Barang Sudah Ada Di Tabel")}hitungTotal(){this.props.change("total",this.props.total),this.props.change("harga_pergram",this.props.harga_pergram)}loadcamera(){return n.l.createElement(n.a,{onTakePhoto:a=>{this.handleTakePhoto(a)}})}aktifotoriasi(a){this.props.change("username",""),this.props.change("password","");let e=a.target.value.split(" ")[1].replace(/[^0-9]+/g,""),t=this.props.harga_jual_tmp;parseInt(e)<parseInt(t)?localStorage.setItem("otorisasi","true"):localStorage.setItem("otorisasi","false")}cekOtorisasi(a){let e={user_id:a.target.value,password:document.getElementById("otorisasi_penjualan_username").value};Object(n.G)("users/login",e).then(a=>{Object(n.r)("success","Otorisasi Berhasil"),localStorage.setItem("otorisasi","false"),this.setState({otorisasi:!0})}).catch(a=>{this.setState({otorisasi:!1})})}componentDidMount(){this.props.dispatch(Object(r.m)(!1)),this.props.change("foto",""),this.props.dispatch(Object(l.nb)()),setTimeout(()=>{document.getElementById("kode_barcode").focus()},100)}render(){return n.l.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:a=>{"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-12 col-md-8"},n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,{onChange:a=>this.getBarcode(a.target.value),name:"kode_barcode",label:"Kode Barcode",type:"text",tabIndex:"1",normalize:a=>a.replace(/[^\d]/g,""),id:"kode_barcode",placeholder:"Masukan Kode Barcode",component:n.n})),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,{name:"foto",type:"hidden",readOnly:!0,component:n.e}),n.l.createElement(n.c,{name:"nama_barang",label:"Nama Barang",type:"text",readOnly:!0,placeholder:"Masukan Nama Barang",component:n.n})),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,{name:"nama_atribut",label:"Nama Atribut",type:"text",readOnly:!0,placeholder:"Masukan Nama Atribut",component:n.n})),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,Object.assign({name:"harga_atribut",label:"Harga Atribut",type:"text"},R,{onChange:this.hitungTotal,readOnly:!0,placeholder:"Masukan Harga Atribut",component:n.n}))),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,{name:"berat_atribut",label:"Berat Atribut",type:"number",readOnly:!0,placeholder:"Masukan Berat Atribut",component:n.n})),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,{tabIndex:"2",name:"berat",label:"Berat Jual",type:"text",normalize:n.d,readOnly:this.state.berat_jual,placeholder:"Masukan Berat Jual",component:n.n})),n.l.createElement("div",{className:"col-12 col-md-6"},n.l.createElement(n.c,{name:"harga_jual_tmp",type:"hidden",readOnly:!0,component:n.e}),n.l.createElement(n.c,Object.assign({tabIndex:"3",name:"harga_jual",label:"Harga Jual",type:"telp"},R,{onChange:this.hitungTotal(),onBlur:a=>this.aktifotoriasi(a),readOnly:this.state.harga_jual,placeholder:"Masukan Harga Jual",component:n.n}))),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement(n.c,Object.assign({name:"harga_pergram",label:"Harga/Gram",type:"telp",readOnly:!0},R,{placeholder:"Masukan Harga/Gram",component:n.n}))),n.l.createElement("div",{className:"col-12 col-md-2"},n.l.createElement(n.c,{tabIndex:"4",name:"premi",label:"Premi",type:"checkbox",id:"switcher_checkbox_1",component:n.m})),n.l.createElement("div",{className:"col-12 col-md-6"},n.l.createElement(n.c,Object.assign({name:"ongkos",label:"Ongkos",type:"telp",tabIndex:"5",onChange:this.hitungTotal,readOnly:this.state.ongkos,placeholder:"Masukan Ongkos",component:n.n},R))),n.l.createElement("div",{className:"col-12 col-md-6"},n.l.createElement(n.c,Object.assign({name:"total",label:"Total",type:"telp",readOnly:this.state.total,placeholder:"Masukan Total",component:n.n},R))))),n.l.createElement("div",{className:"col-12 col-md-4"},n.l.createElement("label",null,"Photo"),n.l.createElement("div",{className:"card image-upload"},!0===this.state.ModalWebCam?n.l.createElement("div",{className:"container"},this.loadcamera()):n.l.createElement("img",{alt:"img",name:"foto",src:!1===this.props.setCamera?n.C:void 0===this.props.setCamera?n.C:this.props.setCamera,height:"260px"})))),n.l.createElement("div",{className:"row"},"false"===this.props.aktifOtoriasi?null:n.l.createElement(n.l.Fragment,null,n.l.createElement("div",{className:"col-2"},n.l.createElement(n.c,{id:"otorisasi_penjualan_username",name:"username",label:"Username",type:"text",placeholder:"Masukan Username",component:n.n})),n.l.createElement("div",{className:"col-2"},n.l.createElement(n.c,{id:"otorisasi_penjualan_password",onChange:a=>this.cekOtorisasi(a),name:"password",label:"Password",type:"password",placeholder:"Masukan Pssword",component:n.n}))),n.l.createElement("div",{className:"false"===this.props.aktifOtoriasi?"col-4":"col-2"},n.l.createElement("label",null," \xa0"),n.l.createElement("button",{tabIndex:"5",className:"btn btn-primary btn-block",disabled:!this.props.isLoading&&"false"!==this.props.aktifOtoriasi,type:"submit"},this.props.isLoading?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data")),n.l.createElement("div",{className:"false"===this.props.aktifOtoriasi?"col-4":"col-2"},n.l.createElement("label",null," \xa0"),n.l.createElement("button",{onClick:this.props.hideModal,className:"btn btn-outline-secondary btn-block",disabled:!this.props.isLoading&&"false"!==this.props.aktifOtoriasi,type:"button"},this.props.isLoading?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Tutup"):"Tutup")),n.l.createElement("div",{className:"col-2"},n.l.createElement("label",null," \xa0"),n.l.createElement("div",{className:"input-group"},n.l.createElement("div",{className:"custom-file"},n.l.createElement("input",{type:"file",name:"photo",autoComplete:"off",className:"custom-file-input",id:"exampleInputFile",onChange:a=>this.getValue(a)}),n.l.createElement("label",{className:"custom-file-label",htmlFor:"exampleInputFile"},"Pilih gambar")))),n.l.createElement("div",{className:"col-2"},n.l.createElement("label",null," \xa0"),n.l.createElement("button",{className:"btn btn-block btn-primary",type:"button",onClick:()=>this.showModalWebcam()}," ","WebCam"," "))))}}H=Object(n.H)({form:"ModalTambahBarang",enableReinitialize:!0,validate:w.a})(H);var K=Object(n.s)(a=>{const e=Object(n.v)("ModalTambahBarang")(a,"harga_jual","ongkos","berat","harga_jual_tmp","harga_atribut"),t=e.harga_jual,r=e.ongkos,l=e.berat,s=e.harga_jual_tmp,o=e.harga_atribut;return{harga_jual_tmp:s,harga_jual:t,aktifOtoriasi:localStorage.getItem("otorisasi"),total:parseFloat(t||0)+parseFloat(r||0)+parseFloat(o||0)||0,harga_pergram:parseFloat(t||0)/parseFloat(l||0)||0,DataSales:a.datamaster.getDataSales,setCamera:a.databarang.setCamera}})(H);class z extends n.b{constructor(a){super(a),this.state={isLoading:!1,isLoadingBatal:!1,isLoadingPembayran:!1,isLoadingPembayranTitipan:!1,isLoadingDataCustomer:!1,FormModal:""}}componentDidMount(){this.props.dispatch(Object(l.nb)())}hideModa(){this.props.dispatch(Object(n.B)())}handleSubmit(a){Object(n.E)("data_customer_tmp",JSON.stringify(a)),this.setState({isLoadingDataCustomer:!0}),setTimeout(()=>{this.setState({isLoadingDataCustomer:!1}),this.props.dispatch(Object(n.B)())},500)}simpanBarang(a){let e={kode_barcode:a.kode_barcode,dataimage:a.foto};if(0===(a={no_titip_group:"-",kode_barcode:a.kode_barcode||0,nama_barang:a.nama_barang||"-",nama_atribut:a.nama_atribut||"-",berat_jual:parseFloat(a.berat)||0,berat_atribut:parseFloat(a.berat_atribut)||0,harga_atribut:parseInt(a.harga_atribut)||0,harga_jual:parseInt(a.harga_jual)||0,harga_pergram:parseInt(a.harga_pergram)||0,ongkos:parseInt(a.ongkos)||0,total:parseInt(a.total)||0,status_premi:a.premi?"PREMI":"NONPREMI"}).harga_jual)return Object(n.r)("info","Harga Jual Tidak Boleh 0"),!1;null!==a.foto&&Object(n.G)("imagebarang/add",e).then(a=>{this.props.dispatch(Object(r.m)(!1)),this.props.change("foto","")}).catch(a=>{});let t=0===Object(n.D)("data_barang_penjualan_tmp").length?[]:JSON.parse(Object(n.D)("data_barang_penjualan_tmp"));-1===t.findIndex(e=>e.kode_barcode===a.kode_barcode)?(this.props.dispatch(Object(n.I)("ModalTambahBarang")),document.getElementById("kode_barcode").focus(),t.push(a),Object(n.E)("data_barang_penjualan_tmp",JSON.stringify(t)),this.props.dispatch(Object(s.k)(t)),this.props.change("kode_barcode","")):(document.getElementById("kode_barcode").focus(),Object(n.r)("info","Barang Sudah Ada Di Tabel"))}bayarTitipan(){this.setState({isLoadingPembayranTitipan:!0});let a=Object(n.y)("trx_pemabayran_penjualan"),e=[],t=0;a.forEach(a=>{let n={jenis:a.jenis,keterangan:a.keterangan,jumlah_rp:a.nominal};t=a.nominal+t,e.push(n)});let l=JSON.parse(Object(n.D)("data_customer_tmp")),o=JSON.parse(Object(n.D)("data_barang_penjualan_tmp")),i=[];o.forEach((a,e)=>{let t={kode_barcode:a.kode_barcode,berat:a.berat_jual,berat_atribut:a.berat_atribut,ongkos:a.ongkos,harga_jual:a.harga_jual,harga_atribut:a.harga_atribut};i.push(t)});let c={status:"TITIPAN",kode_sales:l.kode_sales,kode_customer:"NONMEMBER"===l.jenis_pelanggan?l.jenis_pelanggan:l.kode_customer,nama_customer:l.nama_customer,alamat_customer:l.alamat_customer,no_hp:l.no_hp,detail_barang:i,pembayaran:e};Object(u.e)("titip/create",c).then(a=>{Object(n.E)("data_barang_penjualan_tmp",JSON.stringify([])),Object(n.r)("success",a.data)}).then(()=>{this.props.dispatch(Object(n.B)()),this.props.dispatch(Object(r.m)(!1))}).then(()=>{this.props.dispatch(Object(n.I)("ModalPembayaran"))}).then(()=>{Object(n.E)("data_customer_tmp",JSON.stringify([])),Object(n.E)("total_dp",JSON.stringify([])),Object(n.E)("trx_pemabayran_penjualan",JSON.stringify([])),Object(n.E)("filter_titipan",JSON.stringify([]))}).then(()=>{this.setState({isLoadingPembayranTitipan:!1}),this.props.dispatch(Object(s.k)([]))}).catch(a=>this.errorhandling(a))}simpanPembayaran(a){this.setState({isLoadingPembayran:!0});let e=document.getElementById("harus_bayar_rp").value.replace("Rp.","").replaceAll(".",""),t=Object(n.y)("trx_pemabayran_penjualan"),l=[],o=0;t.forEach(a=>{let e={jenis:a.jenis,keterangan:a.keterangan,jumlah_rp:a.nominal};o=a.nominal+o,l.push(e)});let i=parseInt(e)-parseInt(o);if(parseInt(i)>0)return Object(n.r)("info","Pembayaran Masih Kurang Rp."+parseInt(i).toLocaleString("ID-id")),this.setState({isLoadingPembayran:!1}),!1;let c=JSON.parse(Object(n.D)("data_customer_tmp")),m=JSON.parse(Object(n.D)("data_barang_penjualan_tmp")),p=[];m.forEach((a,e)=>{let t={no_titip_group:a.no_titip_group,kode_barcode:a.kode_barcode,berat:a.berat_jual,berat_atribut:a.berat_atribut,ongkos:a.ongkos,harga_jual:a.harga_jual,harga_atribut:a.harga_atribut};p.push(t)});let d={status:"PENJUALAN",kode_sales:c.kode_sales,kode_member:"NONMEMBER"===c.jenis_pelanggan?c.jenis_pelanggan:c.kode_customer,nama_customer:c.nama_customer,alamat_customer:c.alamat_customer,no_hp:c.no_hp,detail_barang:p,pembayaran:l};Object(n.G)("penjualan/simpan",d).then(a=>{console.log(a.data),Object(n.E)("data_barang_penjualan_tmp",JSON.stringify([])),Object(n.r)("success",a.data.message)}).then(()=>{this.props.dispatch(Object(n.B)()),this.props.dispatch(Object(r.m)(!1))}).then(()=>{this.props.dispatch(Object(n.I)("ModalPembayaran"))}).then(()=>{Object(n.E)("data_customer_tmp",JSON.stringify([])),Object(n.E)("total_dp",JSON.stringify([])),Object(n.E)("trx_pemabayran_penjualan",JSON.stringify([])),Object(n.E)("filter_titipan",JSON.stringify([]))}).then(()=>{this.setState({isLoadingPembayran:!1}),this.props.dispatch(Object(s.k)([]))}).catch(a=>this.errorhandling(a.response.data||"Koneksi Bermasalah"))}errorhandling(a){this.setState({isLoadingPembayran:!1,isLoadingPembayranTitipan:!1}),Object(n.r)("info",a||"Terjadi Kesalahan Saat Mengirim Data")}ShowModalBarang(){this.props.dispatch(Object(n.K)()),this.props.dispatch(Object(n.I)("ModalTambahBarang")),this.setState({FormModal:"ShowModalBarang"})}ShowModalCustomer(){this.setState({FormModal:"ShowModalCustomer"}),this.props.dispatch(Object(n.K)())}showModalTitipan(){this.setState({FormModal:"AmbilTitipan"}),this.props.dispatch(Object(n.K)())}showModalPembayaran(){let a=0===Object(n.D)("data_customer_tmp").length?[]:JSON.parse(Object(n.D)("data_customer_tmp")),e=0===Object(n.D)("data_barang_penjualan_tmp").length?[]:JSON.parse(Object(n.D)("data_barang_penjualan_tmp"));0===a.length||0===e.length?Object(n.r)("info","Data Customer Atau Data Barang Belum Diisi !!!"):(this.setState({FormModal:"ShowModalPembayaran"}),this.props.dispatch(Object(n.K)()))}batalPenjualan(){this.setState({isLoadingBatal:!0}),setTimeout(()=>{Object(n.J)("total_dp",0),Object(n.E)("trx_pemabayran_penjualan",JSON.stringify([])),Object(n.E)("data_customer_tmp",JSON.stringify([])),this.props.dispatch(Object(s.k)([])),Object(n.E)("data_barang_penjualan_tmp",JSON.stringify([])),this.setState({isLoadingBatal:!1})},500)}render(){return n.l.createElement(n.j,null,n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-12"},n.l.createElement("br",null),n.l.createElement(n.q,{keyField:"kode_barcode",exportCsv:!1,data:0===this.props.setBarangPenjualan.length?0===Object(n.D)("data_barang_penjualan_tmp").length?[]:JSON.parse(Object(n.D)("data_barang_penjualan_tmp")):this.props.setBarangPenjualan||[],btnOptional2:!0,btnTextOptional2:"Ambil Titipan",handleClickOptional2:()=>this.showModalTitipan(),tambahData:!0,btnText:"Data Customer",columns:this.props.columns,btnOptional:!0,namaCustomer:!0,jenisCustomer:!0,form:"Penjualan",btnTextOptional:"Data Barang",handleClick:()=>this.ShowModalCustomer(),handleClickOptional:()=>this.ShowModalBarang(),empty:!0,textEmpty:"Data Barang Kosong"}))),n.l.createElement(n.h,{size:"ShowModalCustomer"===this.state.FormModal?"xl":"ShowModalBarang"===this.state.FormModal?"xl":"AmbilTitipan"===this.state.FormModal?"xl":"l",title:n.l.createElement(U,{state:this.state.FormModal}),content:"ShowModalCustomer"===this.state.FormModal?n.l.createElement(M,{isLoadingDataCustomer:this.state.isLoadingDataCustomer,onSubmit:a=>this.handleSubmit(a)}):"ShowModalBarang"===this.state.FormModal?n.l.createElement(K,{isLoadingTopBar:this.props.isLoadingTopBar,hideModal:()=>this.hideModa(),onSubmit:a=>this.simpanBarang(a)}):"AmbilTitipan"===this.state.FormModal?n.l.createElement(k,null):n.l.createElement(F,{isLoadingPembayranTitipan:this.state.isLoadingPembayranTitipan,isLoadingPembayran:this.state.isLoadingPembayran,bayarTitipan:a=>this.bayarTitipan(a),simpanPembayaran:a=>this.simpanPembayaran(a)})}),n.l.createElement("div",{className:"row"},n.l.createElement("div",{className:"col-9"},n.l.createElement("button",{onClick:()=>this.showModalPembayaran(),className:"btn btn-primary",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data Penjualan"),"\xa0",n.l.createElement("button",{onClick:()=>this.batalPenjualan(),className:"btn btn-warning",disabled:this.state.isLoadingBatal,type:"button"},this.state.isLoadingBatal?n.l.createElement(n.l.Fragment,null,n.l.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset"))))}}function U(a,e){return"ShowModalCustomer"===a.state?"Form Data Customer":"ShowModalBarang"===a.state?"Form Data Barang":"AmbilTitipan"===a.state?"Form Data Ambil Titipan":"Form Pembayaran"}z=Object(n.H)({form:"HeadTransaksiPenjualan",enableReinitialize:!0,validate:o.a})(z);var G=Object(n.s)(a=>({setBarangPenjualan:a.penjualan.setBarangPenjualan,DataSales:a.datamaster.getDataSales,hideModal:a.datamaster.modalDialog}))(z);e.default=Object(n.s)(null)(class extends n.l.Component{constructor(a){super(a),this.state={isLoading:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"3"},footer:"Total"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"nama_atribut",text:"Nama Atribut"},{dataField:"status_premi",text:"Premi",footer:""},{dataField:"berat_jual",text:"Berat Jual",formatter:a=>n.l.createElement("span",null,a.toFixed(3)),footer:a=>a.reduce((a,e)=>a+e,0).toFixed(3)},{dataField:"berat_atribut",text:"Berat Atribut",formatter:a=>n.l.createElement("span",null,a.toFixed(3)),footer:a=>a.reduce((a,e)=>a+e,0).toFixed(3)},{dataField:"harga_atribut",text:"Harga Atribut",formatter:a=>n.l.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"harga_pergram",text:"Harga",formatter:a=>n.l.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"ongkos",text:"Ongkos",formatter:a=>n.l.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"harga_jual",text:"Harga Jual",formatter:a=>n.l.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"total",text:"Total Harga",formatter:a=>n.l.createElement("span",null,parseInt(a).toLocaleString("ID-id")),footer:a=>parseInt(a.reduce((a,e)=>a+e,0)).toLocaleString("id-ID")},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e,t)=>n.l.createElement("div",{className:"row text-center"},n.l.createElement("div",{className:"col-12"},n.l.createElement("button",{type:"button",onClick:()=>this.hapusdata(t,e),className:"btn btn-danger mr-3"},n.l.createElement("i",{className:"fa fa-trash"})))),footer:""}]}}hapusdata(a,e){n.p.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(e=>{if(e.isConfirmed){let e=JSON.parse(Object(n.D)("data_barang_penjualan_tmp"));e.splice(a,1),Object(n.E)("data_barang_penjualan_tmp",JSON.stringify(e)),this.props.dispatch(Object(s.k)(e));let t=JSON.parse(Object(n.D)("data_barang_penjualan_tmp"));Object(n.J)("trx_pemabayran_penjualan",[]);let r=[],l=0;t.forEach(a=>{a.pembayaran.forEach(a=>{l+=a.jumlah_rp;let e={jenis:a.jenis,keterangan:"TITIPAN",nominal:a.jumlah_rp};r.push(e),Object(n.J)("trx_pemabayran_penjualan",r)})}),Object(n.J)("total_dp",l),this.setState({status:"berhasil"})}})}componentWillUnmount(){localStorage.setItem("data_customer_tmp",JSON.stringify([])),localStorage.setItem("data_barang_penjualan_tmp",JSON.stringify([]))}errorhandling(a){Object(n.r)("info","Transaksi Gagal Disimpan")}render(){return n.l.createElement("div",null,n.l.createElement("ol",{className:"breadcrumb float-xl-right"},n.l.createElement("li",{className:"breadcrumb-item"},n.l.createElement(n.g,{to:"#"},"Penjualan")),n.l.createElement("li",{className:"breadcrumb-item active"},"Transaksi Penjualan")),n.l.createElement("h1",{className:"page-header"},"Transaksi Penjualan "),n.l.createElement(n.j,null,n.l.createElement(n.k,null,"Transaksi Penjualan"),n.l.createElement("br",null),n.l.createElement("div",{className:"container"},n.l.createElement(G,{isLoading:this.state.isLoading,columns:this.state.columns})),n.l.createElement("br",null)))}})}}]);
//# sourceMappingURL=61.e3368c7f.chunk.js.map