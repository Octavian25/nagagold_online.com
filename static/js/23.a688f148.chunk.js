(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1123:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),i=t(16),l=t(11),s=t(9),o=t(19),d=t(292),c=t(293),g=t(7),m=t(4);class b extends n.Component{constructor(a){super(a),this.state={date:new Date,kondisi_barang:"kosong"}}componentDidMount(){this.props.dispatch(Object(g.mb)()),this.props.dispatch(Object(g.hb)())}render(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(d.a,{onChange:a=>this.props.getKodeBarcode(a.target.value),name:"kode_barcode",component:m.e,type:"text",label:"Kode Barcode",placeholder:"Masukan Kode Barcode"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(d.a,{onChange:a=>this.props.getNamaBarang(a.target.value),name:"nama_barang",component:m.e,type:"text",label:"Nama Barang",placeholder:"Masukan Nama Barang"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(d.a,{onChange:a=>this.props.getByKodeGroup(a.target.value),name:"kode_group",component:m.e,type:"text",label:"Kode Group",placeholder:"Masukan Kode Group"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(d.a,{label:"Kode Baki",name:"kode_baki",onChange:a=>this.props.getBarangKodeBaki(a.target.value),placeholder:"Silahkan Masukan Kode Baki",component:m.e})))}}b=Object(c.a)({form:"FIlterPencarianBarang",enableReinitialize:!0})(b);var h=Object(s.b)(a=>({databaki:a.datamaster.getDataBaki,datakondisi:a.datamaster.getDataKondisiBarang,setHancurBarang:a.databarang.setHancurBarang}),null)(b),p=t(6),u=t(5),k=t(36),E=t(154),N=t.n(E),_=t(205),B=t(208),O=t.n(B),j=t(41),f=t(3),S=t(207),D=t.n(S);const v=Object(j.createNumberMask)({prefix:"Rp. ",locale:"id-ID"});class y extends n.Component{constructor(a){var e;super(a),e=this,this.tgl_awalChange=(a=>{this.setState({tgl_awal:a})}),this.tgl_akhirChange=(a=>{this.setState({tgl_akhir:a})}),this.getValue=function(){var a=Object(_.a)(N.a.mark(function a(t){var n,r;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.target.files[0],a.next=3,Object(f.b)(n);case 3:r=a.sent,e.props.dispatch(Object(k.p)(r)),e.props.change("foto",r);case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}(),this.state={visible:!0,ModalWebCam:!1,isLoadingBaki:!1,isLoadingJenis:!1,tgl_awal:new Date,tgl_akhir:new Date,databaki:[],DataGroup:[],DataJenis:[],loadimage:D.a}}showModalWebcam(){this.props.dispatch(Object(k.p)(!1)),this.props.dispatch(Object(g.wb)()),this.setState({ModalWebCam:!0})}handleTakePhoto(a){this.props.dispatch(Object(k.p)(a)),this.props.change("foto",a)}componentDidMount(){console.log(this.props.foto),Object(p.c)("group/get/all").then(a=>{this.setState({DataGroup:a.data}),console.log(a.data)}).catch(a=>{console.log(a)})}getJenis(a){this.setState({isLoadingJenis:!0}),Object(p.c)("jenis/get/by-kode-kategori/"+a).then(a=>{this.setState({DataJenis:a.data})}).then(a=>{this.setState({isLoadingJenis:!1})}).catch(a=>{Object(u.b)(a.data),console.log(a)})}getBaki(a){this.setState({isLoadingBaki:!0}),Object(p.c)("baki/get/by-kode-baki/"+a).then(a=>{this.setState({databaki:""===a.data?[]:[a.data]})}).then(a=>{this.setState({isLoadingBaki:!1})}).catch(a=>{Object(u.b)(a.data),console.log(a)})}loadcamera(){return r.a.createElement(O.a,{onTakePhoto:a=>{this.handleTakePhoto(a)}})}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(d.a,{readOnly:!0,name:"foto",type:"hidden",component:m.b}),r.a.createElement(d.a,{readOnly:!0,name:"kode_barcode",component:m.e,label:"Kode Barcode",placeholder:"Masukan Kode Barcode"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(d.a,{name:"nama_barang",component:m.e,label:"Nama Barang",placeholder:"Masukan Nama Barang"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(d.a,{name:"nama_atribut",component:m.e,label:"Nama Atribut",placeholder:"Masukan Nama Atribut"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(d.a,Object.assign({name:"harga_atribut",component:m.e,label:"Harga Atribut"},v,{placeholder:"Masukan Harga Atribut"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(d.a,{name:"kadar",component:m.e,label:"Kadar",placeholder:"Masukan Kadar"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(d.a,{name:"kadar_cetak",component:m.e,label:"Kadar Cetak",placeholder:"Masukan Kadar Cetak"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(d.a,{name:"kode_intern",component:m.e,label:"Kode Intern",placeholder:"Masukan Kode Intern"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," \xa0 "),!0===this.props.isLoading?r.a.createElement(f.c,{className:"btn btn-block btn-primary",text:"Sedang Menyimpan Data"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"submit",className:"btn btn-block btn-primary"},"Simpan Barang")))))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},!0===this.state.ModalWebCam&&!1===this.props.setCamera?r.a.createElement("div",{className:"container"},this.loadcamera()):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:void 0===this.props.foto?!1===this.props.setCamera?D.a:this.props.setCamera:this.props.setCamera?this.props.setCamera:this.props.foto,alt:"img",height:"245px",width:"355px"})))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-lg-12 mb-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",name:"photo",autoComplete:"off",className:"custom-file-input",id:"exampleInputFile",onChange:a=>this.getValue(a)}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"exampleInputFile"},"Pilih gambar")))),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"btn btn-block btn-primary",type:"button",onClick:()=>this.showModalWebcam()}," ","WebCam"," ")))))))))}}y=Object(c.a)({form:"HeadEditDataBarang",enableReinitialize:!0})(y);var w=Object(s.b)(a=>({initialValues:{foto:a.databarang.showEditBarang.foto,kode_barcode:a.databarang.showEditBarang.kode_barcode,nama_barang:a.databarang.showEditBarang.nama_barang,nama_atribut:a.databarang.showEditBarang.nama_atribut,harga_atribut:a.databarang.showEditBarang.harga_atribut,kode_intern:a.databarang.showEditBarang.kode_intern,kadar:a.databarang.showEditBarang.kadar,kadar_cetak:a.databarang.showEditBarang.kadar_cetak},foto:a.databarang.showEditBarang.foto,setCamera:a.databarang.setCamera,hideModal:a.datamaster.modalDialog}),null)(y),K=t(40),C=t(14),x=t(15),J=t.n(x);e.default=Object(s.b)(a=>({showEditBarang:a.databarang.showEditBarang,hideModal:a.datamaster.modalDialog}),null)(class extends r.a.Component{constructor(a){super(a),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,formEdit:!1,loadingData:!1,databarang:[],columns:[{dataField:"kode_barang",text:"Kode Barang ",sort:!0},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_group",text:"Kode Group"},{dataField:"kode_toko",text:"Kode Baki"},{dataField:"kode_dept",text:"Kode Jenis"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:(a,e)=>{let t=[];return Object(p.c)("imagebarang/get/by-kode-barcode/"+e.kode_barcode).then(a=>{t={foto:a.data.dataimage,kode_barcode:e.kode_barcode,nama_barang:e.nama_barang,nama_atribut:e.nama_atribut,harga_atribut:e.harga_atribut,kode_intern:e.kode_intern,kadar:e.kadar,kadar_cetak:e.kadar_cetak}}).catch(a=>{t={kode_barcode:e.kode_barcode,nama_barang:e.nama_barang,nama_atribut:e.nama_atribut,harga_atribut:e.harga_atribut,kode_intern:e.kode_intern,kadar:e.kadar,kadar_cetak:e.kadar_cetak}}),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{type:"button",onClick:()=>this.showEditBarang(t),className:"btn btn-primary mr-3"},r.a.createElement("i",{className:"fa fa-edit"}))))}}]},this.handleSubmit=this.handleSubmit.bind(this)}getBarangKodeBaki(a){if(Object(f.j)("databarangall",JSON.stringify([])),this.setState({loadingData:!0}),""===a)return this.setState({loadingData:!1,databarang:[]}),!1;Object(p.c)("barang/get/by-kode-baki/"+a).then(a=>{0===a.data.length?(this.setState({databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada")):(this.setState({databarang:a.data}),Object(f.j)("databarangall",JSON.stringify(a.data))),this.setState({loadingData:!1})}).catch(a=>{this.setState({loadingData:!1,databarang:[]}),Object(p.a)(a.message)&&(this.setState({loadingData:!1,databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada"))})}showEditBarang(a){this.props.dispatch(Object(g.wb)()),this.props.dispatch(Object(k.r)(a))}getKodeBarcode(a){if(Object(f.j)("databarangall",JSON.stringify([])),this.setState({loadingData:!0}),""===a)return this.setState({loadingData:!1,databarang:[]}),!1;Object(p.c)("barang/get/by-kode-barcode/"+a).then(a=>{0===a.data.length?(this.setState({databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada")):(this.setState({databarang:a.data}),Object(f.j)("databarangall",JSON.stringify(a.data))),this.setState({loadingData:!1})}).catch(a=>{this.setState({loadingData:!1,databarang:[]}),Object(p.a)(a.message)&&(this.setState({loadingData:!1,databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada"))})}getNamaBarang(a){let e;clearTimeout(e),e=setTimeout(()=>{if(Object(f.j)("databarangall",JSON.stringify([])),this.setState({loadingData:!0}),""===a)return this.setState({loadingData:!1,databarang:[]}),!1;Object(p.c)("barang/get/by-nama-barang/"+a).then(a=>{0===a.data.length?(this.setState({databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada")):(this.setState({databarang:a.data}),Object(f.j)("databarangall",JSON.stringify(a.data))),this.setState({loadingData:!1})}).catch(a=>{this.setState({loadingData:!1,databarang:[]}),Object(p.a)(a.message)&&(this.setState({loadingData:!1,databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada"))})},2500)}getByKodeGroup(a){if(Object(f.j)("databarangall",JSON.stringify([])),this.setState({loadingData:!0}),""===a)return this.setState({loadingData:!1,databarang:[]}),!1;Object(p.c)("barang/get/by-kode-group/"+a).then(a=>{0===a.data.length?(this.setState({databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada")):(this.setState({databarang:a.data}),Object(f.j)("databarangall",JSON.stringify(a.data))),this.setState({loadingData:!1})}).catch(a=>{this.setState({loadingData:!1,databarang:[]}),Object(p.a)(a.message)&&(this.setState({loadingData:!1,databarang:[]}),Object(f.j)("databarangall",JSON.stringify([])),Object(u.e)("info","Nama Barang Yang Dicari Tidak Ada"))})}handleSubmit(a){this.setState({isLoading:!0});let e={kode_barcode:a.kode_barcode,dataimage:a.foto},t={nama_barang:a.nama_barang,nama_atribut:a.nama_atribut||"-",harga_atribut:a.harga_atribut||0,kode_intern:a.kode_intern,kadar:a.kadar,kadar_cetak:a.kadar_cetak};Object(p.e)("barang/edit/"+a.kode_barcode,t).then(()=>{this.props.dispatch(Object(g.vb)())}).then(()=>{void 0===a.foto||Object(p.e)("imagebarang/add",e).then(a=>{console.log(a.data)}).catch(a=>{console.log(a.response.data)})}).then(()=>{this.setState({databarang:[]}),this.props.dispatch(Object(C.d)("HeadEditDataBarang")),this.props.dispatch(Object(k.p)(!1))}).then(()=>{Object(u.e)("success","Data Berhasil Disimpan")}).then(()=>{this.setState({isLoading:!1})}).catch(a=>{this.setState({isLoading:!1}),Object(u.e)("info","Barang Gagal Di Edit")})}render(){const a={renderer:a=>r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},"Nama Atribut : ",a.nama_atribut," ",r.a.createElement("br",null),"Betat Atribut : ",a.berat_atribut," ",r.a.createElement("br",null),"Harga Atribut : ",a.harga_atribut," ",r.a.createElement("br",null),"Kode Intern : ",a.kode_intern," ",r.a.createElement("br",null),"Kadar : ",a.kadar," ",r.a.createElement("br",null),"Kadar Cetak : ",a.kadar_cetak," ",r.a.createElement("br",null),"Kode Toko : ",a.kode_toko," ",r.a.createElement("br",null),"Kode Gudang : ",a.kode_gudang," ",r.a.createElement("br",null),"Stock : ",a.stock_on_hand," ",r.a.createElement("br",null)))),showExpandColumn:!0,expandByColumnOnly:!0};return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(i.b,{to:"#"},"Barang")),r.a.createElement("li",{className:"breadcrumb-item active"},"Data Barang")),r.a.createElement("h1",{className:"page-header"},"Data Barang "),r.a.createElement(l.a,null,r.a.createElement(l.c,null,"Filter Pencarian Barang"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(h,{getKodeBarcode:a=>this.getKodeBarcode(a),getNamaBarang:a=>this.getNamaBarang(a),getByKodeGroup:a=>this.getByKodeGroup(a),getBarangKodeBaki:a=>this.getBarangKodeBaki(a)}))),r.a.createElement(l.a,null,r.a.createElement(l.c,null,this.state.loadingData?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari Data Barang"," "):"Data Barang"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{keyField:"kode_barang",exportCsv:!0,data:this.state.databarang,columns:this.state.columns,empty:!0,textEmpty:this.state.loadingData?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari Data Barang"):"Data Barang Kosong",expandRow:a})),r.a.createElement("br",null),r.a.createElement(K.a,{title:"Edit Barang",content:r.a.createElement(w,{isLoading:this.state.isLoading,onSubmit:a=>this.handleSubmit(a)})})),this.state.loadingData?r.a.createElement(J.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}})}}]);
//# sourceMappingURL=23.a688f148.chunk.js.map