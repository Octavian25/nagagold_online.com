(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1106:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(10),o=a(290),c=a(291),s=a(4),i=a(3),m=a(19),E=a(47),d=a(40),g=a.n(d);var p=class extends l.Component{constructor(e){super(e),this.state={}}render(){let e=0,t=0,a=0,l=0;return this.props.data.forEach((n,r)=>{n.detail.forEach((n,r)=>{n.detail_barang.forEach((e,n)=>{a+=parseInt(e.ongkos)*parseInt(e.jumlah),l+=e.jumlah,t+=e.berat}),e+=n.detail_barang.length})}),n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Service Ambil",sheet:"Laporan Service Ambil",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7",style:{textAlign:"center"}}," ","LAPORAN SERVICE AMBIL"," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7"}," Periode ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7"}," ",0===Object(i.i)("tgl_laporan").length?null:JSON.parse(Object(i.i)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(i.i)("tgl_laporan")).tgl_akhir," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"6"})),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL AMBIL"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TANGGAL SELESAI"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOMER"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO HP"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ALAMAT CUSTOMER"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL SERVICE"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement(n.a.Fragment,null,e._id.pembayaran.map((t,a)=>n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7",style:{textAlign:"left"}},"No Service"," ",e._id.no_faktur_service," ")))),e.detail.map((e,t)=>n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",null," ",e.tgl_ambil),n.a.createElement("td",null," ",e.tgl_selesai),n.a.createElement("td",null," ",e.nama_customer),n.a.createElement("td",null," ",e.no_hp),n.a.createElement("td",null," ",e.alamat_customer),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_gudang),n.a.createElement("td",{style:{textAlign:"center"}}," ",e.total)),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7"}," ","Detail Barang"," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3",style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","NAMA BARANG"," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","BERAT"," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","JUMLAH"," "),n.a.createElement("th",{colSpan:"2",style:{backgroundColor:"#E8E5E5",color:"#000"}}," ","DESKRIPSI"," ")),n.a.createElement(n.a.Fragment,null,e.detail_barang.map((e,t)=>n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"3"}," ",e.nama_barang),n.a.createElement("td",null," ",e.berat.toFixed(3)),n.a.createElement("td",null," ",e.jumlah),n.a.createElement("td",{colSpan:"2"}," ",e.deskripsi)))))))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7",style:{textAlign:"left"}},"Total Berat : ",t.toFixed(3),n.a.createElement("br",null),"Total Jumlah : ",l,n.a.createElement("br",null),"Total Ongkos : ",a," ",n.a.createElement("br",null),"Total Barang : ",e,n.a.createElement("br",null))))))}},u=a(36);a(57);var h=(e="",t="",a="",l="")=>{const n=new u.default("l","mm",[297,210]);let r=[],o=[],c=[],s=30,m=0,E=0,d=0,g=0;n.setFontSize(15),n.text("LAPORAN SERVICE AMBIL",14,15),n.setFontSize(10),n.setProperties({title:"LAPORAN SERVICE AMBIL"}),n.text("PERIODE : ".concat(0===Object(i.i)("tgl_laporan").length?null:JSON.parse(Object(i.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(i.i)("tgl_laporan")).tgl_akhir),14,25),o=[[{content:"TANGGAL AMBIL"},{content:"TANGGAL SELESAI"},{content:"KODE SALES"},{content:"NAMA CUSTOMER"},{content:"NO HP"},{content:"ALAMAT CUSTOMER"},{content:"KODE GUDANG"},{content:"TOTAL SERVICE"}]],e.forEach((e,t)=>{e._id.pembayaran.forEach((t,a)=>{let l=[{content:"No Services : ".concat(e._id.no_faktur_service),colSpan:7}];r.push(l)}),e.detail.forEach((e,t)=>{let a=[e.tgl_ambil,e.tgl_selesai,e.kode_sales,e.nama_customer,e.no_hp,e.alamat_customer,e.kode_gudang,e.total.toLocaleString("ID-id")];r.push(a),e.detail_barang.forEach((e,t)=>{c=[{content:"Detail Barang",colSpan:7,styles:{halign:"center"}}],r.push(c),r.push([{content:"Nama Barang",colSpan:2,styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"BERAT",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"JUMLAH",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"Ongkos",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"Deskripsi",colSpan:3,styles:{fillColor:"#E8E5E5",textColor:"#000"}}]),g+=parseInt(e.ongkos)*parseInt(e.jumlah),d+=e.jumlah,E+=e.berat;let a=[{content:e.nama_barang,colSpan:2},e.berat.toFixed(1),e.jumlah,(parseInt(e.ongkos)*parseInt(e.jumlah)).toLocaleString("ID-id"),{content:e.deskripsi,colSpan:2}];r.push(a)}),m+=e.detail_barang.length})});let p=[{content:"Printed By ".concat(JSON.parse(Object(i.i)("userdata")).user_id," / ").concat(Object(i.g)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];r.push(p),n.autoTable({head:o,body:r,startY:s,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),s=n.autoTableEndPosY()+3,r=[],n.text("Total Berat                : ".concat(E.toFixed(3)),14,s+22),n.text("Total Jumlah             : ".concat(d),14,s+28),n.text("Total Ongkos            : ".concat(parseInt(g).toLocaleString("ID-id")),14,s+34),n.text("Total Barang             : ".concat(m),14,s+40);const h=n.internal.getNumberOfPages(),b=n.internal.pageSize.width,S=n.internal.pageSize.height;n.setFontSize(10);for(let i=1;i<h+1;i++){let e=b/2,t=S-10;n.setPage(i),n.text("".concat(i," of ").concat(h),e,t,{align:"center"})}var A=n.output("datauristring"),_=window.open();_.document.open(),_.document.write("<html><head><title>LAPORAN SERVICES AMBIL</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+A+"></embed></body></html>")},b=a(15),S=a.n(b);class A extends l.Component{constructor(e){super(e),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){h(this.props.LaporanServices)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}render(){let e=0,t=[];this.props.LaporanServices.forEach((a,l)=>{a.detail.forEach((a,l)=>{t.push(a),e+=a.total})});const a=[{dataField:"no_faktur_service",text:"No Faktur",footerAttrs:{colSpan:"8"},footer:(e,a,l,r)=>n.a.createElement("div",null,"Total Services : ",t.length," ")},{dataField:"tgl_ambil",text:"Tanggal Ambil"},{dataField:"tgl_selesai",text:"Tanggal Selesai"},{dataField:"kode_sales",text:"Kode Sales"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"no_hp",text:"No Hp"},{dataField:"alamat_customer",text:"Alamat Customer"},{dataField:"kode_gudang",text:"Kode Gudang"},{dataField:"total",text:"Total Service",headerClasses:"text-right",footer:(t,a,l,r)=>n.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id")," "),formatter:e=>n.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))}];return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(o.a,{name:"tgl_awal",component:s.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(o.a,{name:"tgl_akhir",component:s.c,type:"text",selected:this.state.tgl_akhir,onChange:e=>this.setLastDate(e),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"text-right"},n.a.createElement("label",null,"\xa0"),n.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement(m.a,{keyField:"no_hp",data:this.props.export?t:[],columns:a,empty:!0,textEmpty:"Data Laporan Service Ambil Kosong"})),n.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(p,{data:this.props.LaporanServices}))))),this.props.isLoading?n.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}A=Object(c.a)({form:"HeadLaporanServiceAmbil",enableReinitialize:!0,validate:E.a})(A);t.default=Object(r.b)(e=>({initialValues:{tgl_awal:Object(i.f)(),tgl_akhir:Object(i.f)()}}))(A)}}]);
//# sourceMappingURL=54.6b12c13a.chunk.js.map