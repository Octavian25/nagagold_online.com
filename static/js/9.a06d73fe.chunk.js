(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1070:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),r=a(10),n=a(290),c=a(291),s=a(4),E=a(3),i=a(19),d=a(693),m=a(40),g=a.n(m);var p=class extends l.Component{constructor(e){super(e),this.state={}}render(){let e=0,t=0,a=0,l=0,r=0,n=0;return this.props.data.forEach((o,c)=>{o.detail.forEach((o,n)=>{e+=parseFloat(o.berat),t+=parseFloat(o.berat_nota),a+=parseFloat(o.harga_nota),l+=parseFloat(o.harga),r+=parseFloat(o.harga_rata)}),n+=o.detail.length}),o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Pembelian",sheet:"Laporan Transaksi Pembelian",buttonText:"Export Exel"}),o.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"12"}," Laporan Transaksi Pembelian ")),o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"12"}," Periode ")),o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"12"}," ",0===Object(E.i)("tgl_laporan").length?null:JSON.parse(Object(E.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(E.i)("tgl_laporan")).tgl_akhir," ")),o.a.createElement("tr",null,o.a.createElement("th",{colSpan:"12"})),o.a.createElement("tr",null,o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO BELI"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE SALES"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE MEMBER"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA MEMBER"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE DEPT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT NOTA"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA NOTA"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA BELI"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA RATA"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KONDISI"))),o.a.createElement("tbody",null,this.props.data.map((e,t)=>o.a.createElement(o.a.Fragment,null,e._id.pembayaran.map((e,t)=>o.a.createElement(o.a.Fragment,null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"12"},e.jenis," ",parseInt(e.jumlah_rp).toLocaleString("ID-id"))))),e.detail.map((e,t)=>o.a.createElement("tr",null,o.a.createElement("td",null,e.no_faktur_beli),o.a.createElement("td",null,e.kode_sales),o.a.createElement("td",null,e.kode_member),o.a.createElement("td",null,e.nama_customer),o.a.createElement("td",null,e.nama_barang),o.a.createElement("td",null,e.kode_dept),o.a.createElement("td",null,e.berat_nota),o.a.createElement("td",null,e.berat),o.a.createElement("td",null,e.harga_nota),o.a.createElement("td",null,e.harga),o.a.createElement("td",null,e.harga_rata),o.a.createElement("td",null,e.kondisi))),o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Subtotal : ",e.detail.length," Transaksi"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",e.detail.map(e=>e.berat_nota).reduce((e,t)=>e+t,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",e.detail.map(e=>e.berat).reduce((e,t)=>e+t,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",e.detail.map(e=>e.harga_nota).reduce((e,t)=>e+t,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",e.detail.map(e=>e.harga).reduce((e,t)=>e+t,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",e.detail.map(e=>e.harga_rata).reduce((e,t)=>e+t,0)," "),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "))))),o.a.createElement("tfoot",null,o.a.createElement("tr",null,o.a.createElement("td",{colSpan:"6",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total : ",n," Transaksi"),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},t),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},e),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},a),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},l),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},r),o.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ")))))}},b=a(36);a(57);var u=(e="",t="",a="",l="")=>{const o=new b.default("l","mm",[297,210]);let r=[],n=[],c=[],s=30;o.setFontSize(15),o.text("LAPORAN TRANSAKSI PEMBELIAN",14,15),o.setFontSize(10),o.setProperties({title:"LAPORAN TRANSAKSI PEMBELIAN"}),o.text("PERIODE : ".concat(0===Object(E.i)("tgl_laporan").length?null:JSON.parse(Object(E.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(E.i)("tgl_laporan")).tgl_akhir),14,25);let i=0,d=0,m=0,g=0,p=0,u=0;c=[[{content:"NO BELI"},{content:"KODE SALES"},{content:"KODE MEMNBER"},{content:"NAMA MEMBER"},{content:"NAMA BARANG"},{content:"KODE DEPT"},{content:"BERAT NOTA"},{content:"BERAT"},{content:"HARGA NOTA"},{content:"HARGA BELI"},{content:"HARGA RATA"},{content:"KONDISI"}]],e.forEach((e,t)=>{let a=0,l=0,o=0,n=0,c=0;e._id.pembayaran.forEach((e,t)=>{let a=[{content:"".concat(e.jenis,"  (").concat(parseInt(e.jumlah_rp).toLocaleString("ID-id"),")"),colSpan:13}];r.push(a)}),e.detail.forEach((e,t)=>{let s=[e.no_faktur_beli,e.kode_sales,e.kode_member,e.nama_customer,e.nama_barang,e.kode_dept,e.berat_nota.toFixed(3),e.berat.toFixed(3),parseInt(e.harga_nota).toLocaleString("ID-id"),parseInt(e.harga).toLocaleString("ID-id"),parseInt(e.harga_rata).toLocaleString("ID-id"),e.kondisi];a+=parseFloat(e.berat),l+=parseFloat(e.berat_nota),o+=parseFloat(e.harga_nota),n+=parseFloat(e.harga),c+=parseFloat(e.harga_rata),i+=parseFloat(e.berat),d+=parseFloat(e.berat_nota),m+=parseFloat(e.harga_nota),g+=parseFloat(e.harga),p+=parseFloat(e.harga_rata),r.push(s)}),u+=e.detail.length;let s=[{content:"Subtotal : ".concat(e.detail.length," Transaksi"),colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(l.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(a.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(o).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(n).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(c).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(s)});let h=[{content:"Grand Total : ".concat(u," Transaksi"),colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(d.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(i.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(m).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(g).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(p).toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(h);let k=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(E.i)("userdata")).user_id," / ").concat(Object(E.g)()),styles:{fontStyle:"italic",textColor:"#000"}}];r.push(k),o.autoTable({head:c,body:r,foot:n,startY:s,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),s=o.autoTableEndPosY()+3,r=[],n=[];const _=o.internal.getNumberOfPages(),y=o.internal.pageSize.width,C=o.internal.pageSize.height;o.setFontSize(10);for(let E=1;E<_+1;E++){let e=y/2,t=C-10;o.setPage(E),o.text("".concat(E," of ").concat(_),e,t,{align:"center"})}var S=o.output("datauristring"),x=window.open();x.document.open(),x.document.write("<html><head><title>LAPORAN TRANSAKSI PEMBELIAN</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+S+"></embed></body></html>")},h=a(15),k=a.n(h);class _ extends l.Component{constructor(e){super(e),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){u(this.props.LaporanTransaksiPembelian)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}render(){let e=[],t=0,a=0,l=0,r=0,c=0,E=0;this.props.LaporanTransaksiPembelian.forEach(o=>{o.detail.forEach(o=>{e.push(o),E+=o.berat_nota,t+=o.berat,a+=o.ongkos,l+=o.harga,r+=o.harga_nota,c+=o.harga_gram})});const d=[{dataField:"no_faktur_beli",text:"No FB",footerAttrs:{colSpan:"4"},footer:(t,a,l,r)=>o.a.createElement("div",null,"Total Transaksi : ",e.length," ")},{dataField:"kode_sales",text:"Kode Sales"},{dataField:"kode_member",text:"Kode Member"},{dataField:"nama_customer",text:"Nama Member"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat_nota",text:"Berat Nota",footer:(e,t,a,l)=>o.a.createElement("div",null,E.toFixed(3)," "),formatter:e=>e.toFixed(3)},{dataField:"berat",text:"Berat",footer:(e,a,l,r)=>o.a.createElement("div",null,t.toFixed(3)," "),formatter:e=>e.toFixed(3)},{dataField:"harga_nota",text:"Harga Nota",headerClasses:"text-right",footer:(e,t,a,l)=>o.a.createElement("div",{className:"text-right"},r.toLocaleString("ID-id")," "),formatter:e=>o.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))},{dataField:"harga",text:"Harga/Gram",headerClasses:"text-right",footer:(e,t,a,r)=>o.a.createElement("div",{className:"text-right"},l.toLocaleString("ID-id")," "),formatter:e=>o.a.createElement("div",{className:"text-right"},e.toLocaleString("ID-id"))},{dataField:"kondisi",text:"Kondisi",footer:""}];return o.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(n.a,{name:"tgl_awal",component:s.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(n.a,{name:"tgl_akhir",component:s.c,type:"text",selected:this.state.tgl_akhir,onChange:e=>this.setLastDate(e),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"text-right"},o.a.createElement("label",null,"\xa0"),o.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?o.a.createElement(o.a.Fragment,null,o.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(i.a,{keyField:"kode_barcode",data:this.props.export?e:[],columns:d,empty:!0,textEmpty:"Data Laporan Transaksi Pembelian Kosong"})),o.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement(p,{data:this.props.LaporanTransaksiPembelian}))))),this.props.isLoading?o.a.createElement(k.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}_=Object(c.a)({form:"HeadFormLaporanPembelianBarang",enableReinitialize:!0,validate:d.a})(_);t.default=Object(r.b)(e=>({initialValues:{tgl_awal:Object(E.f)(),tgl_akhir:Object(E.f)()}}))(_)},693:function(e,t,a){"use strict";t.a=((e,t)=>{const a={};return e.tanggal_awal||(a.tanggal_awal="Tanggal Tidak Boleh Kosong"),e.type||(a.type="Type Tidak Boleh Kosong"),e.type_laporan||(a.type_laporan="Type Laporan Tidak Boleh Kosong"),a})}}]);
//# sourceMappingURL=9.a06d73fe.chunk.js.map