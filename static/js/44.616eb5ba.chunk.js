(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1123:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(16),r=a(11),c=a(9),i=a(291),s=a(2),d=(a(152),a(4)),m=a(6),E=a(290),p=a(5),b=a(7),u=a(28);a(40);var h=(e="",t="")=>{const a=new u.default("l","mm",[297,210]);let l=[],n=[],o=30,r=0,c=0,i=0;a.setFontSize(15),a.text("LAPORAN BARANG DETAIL",14,15),a.setFontSize(20),a.text(Object(s.j)().nama_toko,200,15),a.setFontSize(8);let d=Object(s.j)().alamat_toko.length;d>20&&a.text(Object(s.j)().alamat_toko.slice(0,48),200,20),d>50&&a.text(Object(s.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN BARANG DETAIL"}),n=[[{content:"NO"},{content:"KODE BARCODE"},{content:"KODE GROUP"},{content:"KODE JENIS"},{content:"KODE INTERN"},{content:"KODE GUDANG"},{content:"NAMA BARANG"},{content:"BERAT",styles:{halign:"right"}},{content:"NAMA ATRIBUTE"},{content:"BERAT ATRIBUTE",styles:{halign:"right"}}]],e.forEach((e,t)=>{let a=[{content:"".concat(++t),styles:{cellWidth:10}},e.kode_barcode,e.kode_group,e.kode_dept,e.kode_intern,e.kode_gudang,e.nama_barang,{content:Object(s.f)(e.berat,3),styles:{halign:"right"}},e.nama_atribut,{content:Object(s.f)(e.berat_atribut,3),styles:{halign:"right"}}];r+=e.berat,c+=e.stock_on_hand,i+=e.berat_atribut,l.push(a)});let m=[{content:"Total",colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(s.f)(r,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(s.f)(i,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];l.push(m);let E=[{colSpan:6,content:"Printed By ".concat(JSON.parse(Object(s.l)("userdata")).user_id," / ").concat(Object(s.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];l.push(E),a.autoTable({head:n,body:l,startY:o,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),o=a.autoTableEndPosY()+3,l=[];const p=a.internal.getNumberOfPages(),b=a.internal.pageSize.width,h=a.internal.pageSize.height;a.setFontSize(10);for(let s=1;s<p+1;s++){let e=b/2,t=h-10;a.setPage(s),a.text("".concat(s," of ").concat(p),e,t,{align:"center"})}var g=a.output("datauristring"),k=window.open();k.document.open(),k.document.write("<html><head><title>LAPORAN BARANG DETAIL</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+g+"></embed></body></html>")},g=a(31),k=a.n(g);var _=class extends l.Component{constructor(e){super(e),this.state={}}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Barang Detail",sheet:"Laporan Barang Detail",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"9",style:{textAlign:"center"}}," LAPORAN BARANG DETAIL ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"9"}," TOKO :  ",Object(s.j)().nama_toko," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"9"}," ALAMAT :  ",Object(s.j)().alamat_toko," ")),n.a.createElement("tr",null),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GROUP"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE JENIS"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE INTERN"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",{style:{textAlign:"center"}}," ",t+1),n.a.createElement("td",null,"\xa0",e.kode_barcode),n.a.createElement("td",null," ",e.kode_group),n.a.createElement("td",null," ",e.kode_dept),n.a.createElement("td",null," ",e.kode_intern),n.a.createElement("td",null," ",e.kode_gudang),n.a.createElement("td",null," ",e.nama_barang),n.a.createElement("td",null," ",Object(s.f)(e.berat,3)),n.a.createElement("td",null," ",e.nama_atribut),n.a.createElement("td",null," ",Object(s.f)(e.berat_atribut,3))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"7"},"  "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(s.f)(this.props.data.map(e=>e.berat).reduce((e,t)=>e+t,0),3),"   "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"  "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",Object(s.f)(this.props.data.map(e=>e.berat_atribut).reduce((e,t)=>e+t,0),3),"  ")))))}},A=a(18),L=a(15),O=a.n(L);class f extends l.Component{constructor(e){super(e),this.state={loading:!1,list_baki:[{value:"SEMUA",name:"SEMUA"}]}}componentDidMount(){this.props.dispatch(Object(b.t)()),this.props.dispatch(Object(b.lb)()),this.props.dispatch(Object(b.jb)()),this.props.dispatch(Object(b.hb)()),setTimeout(()=>{this.props.change("kode_group","ALL"),this.props.change("kode_jenis","ALL"),this.props.change("kode_gudang","ALL"),this.props.change("kode_baki","ALL")},100)}exportPdf(){h(this.props.data,this.props.kode_baki)}render(){let e=[{value:"ALL",name:"SEMUA"}];this.props.databaki.forEach(t=>{let a={value:t.kode_baki,name:t.kode_baki+" - "+t.nama_baki};e.push(a)});let t=[{value:"ALL",name:"SEMUA"}];this.props.dataGroup.forEach(e=>{let a={value:e.kode_group,name:e.kode_group+" - "+e.nama_group};t.push(a)});let a=[{value:"ALL",name:"SEMUA"}];this.props.dataJenis.forEach(e=>{let t={value:e.kode_dept,name:e.kode_dept+" - "+e.nama_dept};a.push(t)});let l=[{value:"ALL",name:"SEMUA"}];return this.props.dataGudang.forEach(e=>{let t={value:e.kode_gudang,name:e.kode_gudang+" - "+e.nama_gudang};l.push(t)}),n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:e=>this.props.handleSubmit(e),autoComplete:"off",onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3"},!1===this.state.loading?n.a.createElement(E.a,{label:"Group",name:"kode_group",options:t,placeholder:"Silahkan Pilih Kode Group",component:p.f}):n.a.createElement(p.g,{label:"Kode Group"})),n.a.createElement("div",{className:"col-3"},!1===this.state.loading?n.a.createElement(E.a,{label:"Jenis",name:"kode_jenis",options:a,placeholder:"Silahkan Pilih Kode Jenis",component:p.f}):n.a.createElement(p.g,{label:"Kode Jenis"})),n.a.createElement("div",{className:"col-3"},!1===this.state.loading?n.a.createElement(E.a,{label:"Gudang",name:"kode_gudang",options:l,placeholder:"Silahkan Pilih Kode Gudang",onChange:e=>{"ALL"!==e?this.props.dispatch(Object(b.ib)(e)):this.props.dispatch(Object(b.hb)())},component:p.f}):n.a.createElement(p.g,{label:"Kode Gudang"})),n.a.createElement("div",{className:"col-3"},!1===this.state.loading?n.a.createElement(E.a,{label:"Kode Baki",name:"kode_baki",options:e,placeholder:"Silahkan Pilih Kode Baki",component:p.f}):n.a.createElement(p.g,{label:"Kode Baki"})),n.a.createElement("div",{className:"col-lg-9"}),n.a.createElement("div",{className:"col-3"},n.a.createElement("label",null," \xa0 "),n.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.submitting,type:"submit"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Memfilter"):"Filter Laporan")),n.a.createElement("div",{className:"col-12"},n.a.createElement(A.a,{keyField:"kode_barcode",data:this.props.data,columns:this.props.columns,empty:!0,textEmpty:"Data Laporan Barang Detail Kosong"})),this.props.export?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(_,{data:this.props.data,kode_baki:this.props.kode_baki}))):null),this.props.isLoading?n.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}f=Object(i.a)({form:"HeadFilterLaporan",enableReinitialize:!0})(f);var N=Object(c.b)(e=>({databaki:e.datamaster.getDataBaki,dataGroup:e.datamaster.GetDataGroup,dataJenis:e.datamaster.getDataJenis,dataGudang:e.datamaster.getDataGudang}),null)(f);class y extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,export:!1,kode_baki:[],LaporanBarangDetail:!1,columns:[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"6"},footer:(e,t,a,l)=>n.a.createElement("div",null,"Total Barang : ",this.state.LaporanBarangDetail.length||0," ")},{dataField:"kode_group",text:"Kode Group"},{dataField:"kode_dept",text:"Kode Jenis"},{dataField:"kode_gudang",text:"Kode Gudang"},{dataField:"kode_toko",text:"Kode Baki"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:e=>n.a.createElement("div",{className:"text-right"}," ",Object(s.f)(e,3)," "),footer:e=>n.a.createElement("div",{className:"text-right"}," ",Object(s.f)(e.reduce((e,t)=>e+t,0),3)," ")}]},this.handleSubmit=this.handleSubmit.bind(this)}componentDidMount(){let e=JSON.parse(Object(s.l)("userdata"));this.setState({username:e.user_id})}handleSubmit(e){this.setState({isLoading:!0,kode_toko:e.kode_baki}),Object(m.c)("reportbarang/barangdetail?kode_gudang=".concat(e.kode_gudang||"ALL","&kode_toko=").concat(e.kode_baki||"ALL","&kode_jenis=").concat(e.kode_jenis||"ALL","&kode_group=").concat(e.kode_group||"ALL")).then(t=>{0===t.data.length?(this.setState({export:!1,LaporanBarangDetail:[]}),Object(d.e)("info","Laporan Barang Detail Tidak Tersedia")):(Object(d.e)("success","Laporan Barang Detail Tersedia"),this.setState({export:!0,kode_baki:e.kode_baki,LaporanBarangDetail:t.data}))}).then(()=>{this.setState({isLoading:!1})}).catch(e=>this.errorHandling(e))}errorHandling(e){Object(d.a)(e),this.setState({isLoading:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(o.b,{to:"#"},"Laporan Barang")),n.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Barang Detail")),n.a.createElement("h1",{className:"page-header"},"Laporan Barang Detail"),n.a.createElement(r.a,null,n.a.createElement(r.c,null,"Filter Laporan"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(N,{kode_baki:this.state.kode_baki,export:this.state.export,columns:this.state.columns,data:this.state.LaporanBarangDetail,isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)})))),n.a.createElement("br",null)))}}y=Object(i.a)({form:"FormDetailBarang",enableReinitialize:!0})(y);t.default=Object(c.b)(e=>({hideModal:e.datamaster.modalDialog}),null)(y)}}]);
//# sourceMappingURL=44.616eb5ba.chunk.js.map