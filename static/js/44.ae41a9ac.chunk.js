(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1098:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(16),o=a(11),c=a(10),i=a(6),s=a(291),d=a(290),m=a(4),E=a(3),g=a(19),b=a(47),h=a(40),p=a.n(h);var u=class extends l.Component{constructor(e){super(e),this.state={}}render(){let e=0,t=0,a=0,l=0;return this.props.data.forEach((n,r)=>{n.detail.forEach((l,n)=>{e+=l.stock_on_hand,a+=l.berat_atribut,t+=l.berat}),l+=n.detail.length}),n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Terima Barang",sheet:"Laporan Terima Barang",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," Periode ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"}," ",0===Object(E.i)("tgl_laporan").length?null:JSON.parse(Object(E.i)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(E.i)("tgl_laporan")).tgl_akhir," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"10"})),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL TERIMA"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE INTERN"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE TOKO"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement(n.a.Fragment,null,e.detail.map((e,a)=>n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"center"}}," ",++t),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.tgl_terima),n.a.createElement("td",null," ",e.kode_barang),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_barcode),n.a.createElement("td",null," ",e.kode_intern),n.a.createElement("td",null," ",e.nama_barang),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_gudang),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_toko),n.a.createElement("td",null," ",e.berat),n.a.createElement("td",null," ",e.nama_atribut),n.a.createElement("td",null," ",e.berat_atribut))))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"8",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ","Total"," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t.toFixed(3)),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},a)))))}},k=a(36);a(57);var _=(e="",t="",a="",l="")=>{const n=new k.default("l","mm",[297,210]);let r=[],o=30,c=0,i=0,s=0,d=0;n.setFontSize(15),n.text("LAPORAN TERIMA BARANG",14,15),n.setFontSize(10),n.setProperties({title:"Laporan Terima Barang"}),n.text("PERIODE : ".concat(0===Object(E.i)("tgl_laporan").length?null:JSON.parse(Object(E.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(E.i)("tgl_laporan")).tgl_akhir),14,25);let m=1;e.forEach((e,t)=>{let a=0,l=0,n=0;e.detail.forEach((e,t)=>{let o=[m,{content:e.tgl_terima,style:{halign:"center"}},e.kode_barang,e.kode_barcode,e.kode_intern,e.nama_barang,e.kode_gudang,e.kode_toko,e.berat.toFixed(3),e.nama_atribut,e.berat_atribut.toFixed(3)];r.push(o),a+=parseFloat(e.stock_on_hand),l+=parseFloat(e.berat_atribut),n+=parseFloat(e.berat),c+=parseFloat(e.stock_on_hand),i+=parseFloat(e.berat),s+=parseFloat(e.berat_atribut),++m}),d+=e.detail.length});let g=[{content:"Total ",colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(i.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(s.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(g);let b=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(E.i)("userdata")).user_id," / ").concat(Object(E.g)()),styles:{fontStyle:"italic",textColor:"#000"}}];r.push(b),n.autoTable({head:[[{content:"NO"},{content:"TANGGAL TERIMA"},{content:"KODE BARANG"},{content:"KODE BARCODE"},{content:"KODE INTERN"},{content:"NAMA BARANG"},{content:"KODE GUDANG"},{content:"KODE BAKI"},{content:"BERAT"},{content:"NAMA ATRIBUTE"},{content:"BERAT ATRIBUTE"}]],body:r,foot:[],startY:o,theme:"plain",rowPageBreak:"avoid",margin:{top:20},headStyles:{fillColor:"#E8E5E5",textColor:"#000"}}),o=n.autoTableEndPosY()+10;const h=n.internal.getNumberOfPages(),p=n.internal.pageSize.width,u=n.internal.pageSize.height;n.setFontSize(10);for(let E=1;E<h+1;E++){let e=p/2,t=u-10;n.setPage(E),n.text("".concat(E," of ").concat(h),e,t,{align:"center"})}var _=n.output("datauristring"),x=window.open();x.document.open(),x.document.write("<html><head><title>Laporan Terima Barang</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+_+"></embed></body></html>")},x=a(15),A=a.n(x);class N extends l.Component{constructor(e){super(e),this.state={date:new Date},this.handleSubmit=this.handleSubmit.bind(this),this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}handleSubmit(e){console.log(e)}exportPdf(){_(this.props.dataterimabarang)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}render(){let e=[],t=0;this.props.dataterimabarang.forEach(a=>{a.detail.forEach(a=>{e.push(a),t+=a.berat})});const a=[{dataField:"tgl_terima",text:"Tanggal Terima",footerAttrs:{colSpan:"4"},footer:(t,a,l,r)=>n.a.createElement("div",null,"Total Barang : ",e.length," ")},{dataField:"kode_barang",text:"Kode Barang"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",footer:(e,a,l,r)=>n.a.createElement("div",null,t.toFixed(3)," "),formatter:e=>e.toFixed(3)}];return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(d.a,{name:"tgl_awal",component:m.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(d.a,{name:"tgl_akhir",component:m.c,type:"text",selected:this.state.tgl_akhir,onChange:e=>this.setLastDate(e),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),n.a.createElement("div",{className:this.props.export?"col-lg-4  d-none":"col-lg-4"},n.a.createElement("div",{className:"text-right"},n.a.createElement("label",null,"\xa0"),n.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),n.a.createElement("div",{className:this.props.export?"col-lg-4":"col-lg-4 d-none"},n.a.createElement("div",{className:"text-right"},n.a.createElement("label",null,"\xa0"),n.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),n.a.createElement("div",{className:"col-12"},n.a.createElement(g.a,{keyField:"kode_gudang",data:this.props.export?e:[],columns:a,empty:!0,textEmpty:"Data Laporan Terima Barang Kosong"})),n.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(u,{data:this.props.dataterimabarang}))))),this.props.isLoading?n.a.createElement(A.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}N=Object(s.a)({form:"HeadLaporanTerimaBarang",enableReinitialize:!0,validate:b.a})(N);var y=Object(c.b)(e=>({initialValues:{tgl_awal:Object(E.f)(),tgl_akhir:Object(E.f)()}}))(N),f=a(5),O=a(22);class T extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,dataterimabarang:[],export:!1},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){this.setState({isLoading:!0});let t={tgl_awal:Object(E.d)(O(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(E.d)(O(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(i.e)("terimabarang/get/report",t).then(e=>{0===e.data.length?(Object(f.e)("info","Data Yang Anda Cari Tidak Ada"),this.setState({export:!1,isLoading:!1})):(Object(f.e)("success","Laporan Terima Barang Tersedia"),Object(E.j)("tgl_laporan",JSON.stringify(t)),this.setState({export:!0,isLoading:!1,dataterimabarang:e.data}))}).catch(e=>{this.setState({export:!1,isLoading:!1}),Object(f.e)("info","Data Yang Anda Cari Tidak Ada")})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"#"},"Laporan Barang")),n.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Terima Barang")),n.a.createElement("h1",{className:"page-header"},"Laporan Terima Barang "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Filter Laporan"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(y,{export:this.state.export,isLoading:this.state.isLoading,dataterimabarang:this.state.dataterimabarang,onSubmit:e=>this.handleSubmit(e)})),n.a.createElement("br",null)))}}T=Object(s.a)({form:"LaporanTerimaBarang",enableReinitialize:!0})(T);t.default=Object(c.b)(e=>({hideModal:e.datamaster.modalDialog}),null)(T)}}]);
//# sourceMappingURL=44.ae41a9ac.chunk.js.map