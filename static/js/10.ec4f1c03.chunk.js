(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1072:function(t,e,a){"use strict";a.r(e);var r=a(0),l=a.n(r),o=a(10),n=a(290),c=a(291),s=a(4),d=a(3),i=a(19),g=a(693),F=a(40),p=a.n(F);var m=class extends r.Component{constructor(t){super(t),this.state={}}render(){let t=0,e=0,a=0,r=0,o=0,n=0,c=0,s=0,i=0;return this.props.data.forEach((l,d)=>{l.detail.forEach((r,l)=>{t+=r.stock_on_hand,a+=r.berat_atribut,e+=r.berat,o+=r.harga_jual,i+=r.ongkos,s+=r.harga_total,c+=r.harga_gram,n+=r.harga_atribut}),r+=l.detail.length}),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Penjualan Bayar",sheet:"Laporan Transaksi Penjualan Bayar",buttonText:"Export Exel"}),l.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"10"}," Periode ")),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"10"}," ",0===Object(d.i)("tgl_laporan").length?null:JSON.parse(Object(d.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.i)("tgl_laporan")).tgl_akhir," ")),l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"10"})),l.a.createElement("tr",null,l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"NO FAKTUR"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"NAMA BARANG"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"BERAT"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"ONGKOS"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"HARGA JUAL"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"NAMA ATRIBUT"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"BERAT ATRIBUT"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"HARGA ATRIBUT"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"HARGA GRAM"),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},"HARGA TOTAL"))),this.props.data.map((t,e)=>l.a.createElement(l.a.Fragment,null,l.a.createElement("tbody",null,t._id.pembayaran.map((t,e)=>l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"10",style:{border:"1px solid #000"}},t.jenis," ",parseInt(t.jumlah_rp).toLocaleString("ID-id"))))),t.detail.map((t,e)=>l.a.createElement("tr",null,l.a.createElement("td",{style:{border:"1px solid #000"}},t.no_faktur_jual),l.a.createElement("td",{style:{border:"1px solid #000",whiteSpace:"nowrap"}},t.nama_barang),l.a.createElement("td",{style:{border:"1px solid #000"}},t.berat),l.a.createElement("td",{style:{border:"1px solid #000"}},t.ongkos),l.a.createElement("td",{style:{border:"1px solid #000"}},t.harga_jual),l.a.createElement("td",{style:{border:"1px solid #000"}},t.nama_atribut),l.a.createElement("td",{style:{border:"1px solid #000"}},t.berat_atribut),l.a.createElement("td",{style:{border:"1px solid #000"}},t.harga_atribut),l.a.createElement("td",{style:{border:"1px solid #000"}},t.harga_gram),l.a.createElement("td",{style:{border:"1px solid #000"}},t.harga_total)))),l.a.createElement("tfoot",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2",style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000",textAlign:"center"}},"Total Barang : ",t.detail.length),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.berat).reduce((t,e)=>t+e,0)," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.ongkos).reduce((t,e)=>t+e,0)," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.harga_jual).reduce((t,e)=>t+e,0)," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.berat_atribut).reduce((t,e)=>t+e,0)," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.harga_atribut).reduce((t,e)=>t+e,0)," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.harga_gram).reduce((t,e)=>t+e,0)," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," ",t.detail.map(t=>t.harga_total).reduce((t,e)=>t+e,0)," "))))),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2",style:{border:"1px solid #000",backgroundColor:"#008846",color:"#FFFFFF",textAlign:"center"}},"Grand Total Barang : ",r),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},e),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},i),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},o),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}}," "),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},a),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},n),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},c),l.a.createElement("td",{style:{backgroundColor:"#008846",color:"#FFFFFF",border:"1px solid #000"}},s))))}},b=a(36);a(57);var u=(t="")=>{const e=new b.default("l","mm",[297,210]);let a=[],r=[],l=30,o=0,n=0,c=0,s=0,i=0,g=0,F=0,p=0;e.setFontSize(15),e.text("LAPORAN TRANSAKSI PENJUALAN BAYAR",14,15),e.setFontSize(10),e.setProperties({title:"LAPORAN TRANSAKSI PENJUALAN BAYAR"}),e.text("PERIODE : ".concat(0===Object(d.i)("tgl_laporan").length?null:JSON.parse(Object(d.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.i)("tgl_laporan")).tgl_akhir),14,25),r=[[{content:"NO FAKTUR"},{content:"NAMA BARANG"},{content:"BERAT"},{content:"ONGKOS"},{content:"HARGA JUAL"},{content:"NAMA ATRIBUT"},{content:"BERAT ATRIBUT"},{content:"HARGA ATRIBUT"},{content:"HARGA GRAM"},{content:"HARGA TOTAL"}]],t.forEach((t,e)=>{let r=0,l=0,d=0,m=0,b=0,u=0,h=0;t._id.pembayaran.forEach((t,e)=>{let r=[{content:"".concat(t.jenis,"  (").concat(parseInt(t.jumlah_rp).toLocaleString("ID-id"),")"),colSpan:11}];a.push(r)}),t.detail.forEach((t,e)=>{let o=[t.no_faktur_jual,t.nama_barang,t.berat.toFixed(3),parseInt(t.ongkos).toLocaleString("ID-id"),parseInt(t.harga_jual).toLocaleString("ID-id"),t.nama_atribut,t.berat_atribut.toFixed(3),parseInt(t.harga_atribut).toLocaleString("ID-id"),parseInt(t.harga_gram).toLocaleString("ID-id"),parseInt(t.harga_total).toLocaleString("ID-id")];n+=parseFloat(t.berat),c+=parseInt(t.ongkos),s+=parseInt(t.harga_jual),i+=parseInt(t.berat_atribut),g+=parseInt(t.harga_atribut),F+=parseInt(t.harga_gram),p+=parseInt(t.harga_total),r+=parseFloat(t.berat),l+=parseInt(t.ongkos),d+=parseInt(t.harga_jual),b+=parseInt(t.berat_atribut),u+=parseInt(t.harga_atribut),m+=parseInt(t.harga_gram),h+=parseInt(t.harga_total),a.push(o)}),o+=t.detail.length;let f=[{content:"Total Barang : ".concat(t.detail.length),colSpan:2,styles:{halign:"center",fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(r.toFixed(3)),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(l).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(d).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"",styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(b.toFixed(3)),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(u).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(m).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(h).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}}];a.push(f)});let m=[{content:"Grand Barang : ".concat(o),colSpan:2,styles:{halign:"center",fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(n.toFixed(3)),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(c).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(s).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"",styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(i.toFixed(3)),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(g).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(F).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}},{content:"".concat(parseInt(p).toLocaleString("ID-id")),styles:{fillColor:[0,136,70],textColor:"#fff"}}];a.push(m),e.autoTable({head:r,body:a,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{lineWidth:.02,lineColor:"#000",fontSize:8},headStyles:{fontSize:8,lineWidth:.02,lineColor:"#000",textColor:"#fff",fillColor:[0,136,70]}}),l=e.autoTableEndPosY()+3,a=[],e.text("User                           : ".concat(JSON.parse(Object(d.i)("userdata")).user_id),14,l+10),e.text("Cetak                        : ".concat(Object(d.g)()),14,l+16);const u=e.internal.getNumberOfPages(),h=e.internal.pageSize.width,f=e.internal.pageSize.height;e.setFontSize(10);for(let d=1;d<u+1;d++){let t=h/2,a=f-10;e.setPage(d),e.text("".concat(d," of ").concat(u),t,a,{align:"center"})}var x=e.output("datauristring"),E=window.open();E.document.open(),E.document.write("<html><head><title>LAPORAN TRANSAKSI PENJUALAN BAYAR</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+x+"></embed></body></html>")},h=a(15),f=a.n(h);class x extends r.Component{constructor(t){super(t),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){u(this.props.LaporanPenjualanBayar)}setStartDate(t){this.setState({tgl_awal:new Date(t)})}setLastDate(t){this.setState({tgl_akhir:new Date(t)})}render(){let t=[],e=0,a=0,r=0,o=0,c=0;this.props.LaporanPenjualanBayar.forEach(l=>{l.detail.forEach(l=>{t.push(l),e+=l.berat,a+=l.ongkos,r+=l.harga_jual,o+=l.harga_total,c+=l.harga_gram})});const d=[{dataField:"no_faktur_jual",text:"NO FJ",footerAttrs:{colSpan:"3"},footer:(e,a,r,o)=>l.a.createElement("div",null,"Total Barang : ",t.length," ")},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",footer:(t,a,r,o)=>l.a.createElement("div",null,e.toFixed(3)," "),formatter:t=>t.toFixed(3)},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:(t,e,r,o)=>l.a.createElement("div",{className:"text-right"},a.toLocaleString("ID-id")," "),formatter:t=>l.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:(t,e,a,o)=>l.a.createElement("div",{className:"text-right"},r.toLocaleString("ID-id")," "),formatter:t=>l.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))},{dataField:"harga_gram",text:"Harga/Gram",headerClasses:"text-right",footer:(t,e,a,r)=>l.a.createElement("div",{className:"text-right"},c.toLocaleString("ID-id")," "),formatter:t=>l.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:(t,e,a,r)=>l.a.createElement("div",{className:"text-right"},o.toLocaleString("ID-id")," "),formatter:t=>l.a.createElement("div",{className:"text-right"},t.toLocaleString("ID-id"))}];return l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(n.a,{name:"tgl_awal",component:s.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:t=>this.setStartDate(t),placeholder:"Masukan Tanggal Dari"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(n.a,{name:"tgl_akhir",component:s.c,type:"text",selected:this.state.tgl_akhir,onChange:t=>this.setLastDate(t),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"\xa0"),l.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(i.a,{keyField:"kode_barcode",data:this.props.export?t:[],columns:d,empty:!0,textEmpty:"Data Laporan Transaksi Penjualan Bayar Kosong"})),l.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement(m,{data:this.props.LaporanPenjualanBayar}))))),this.props.isLoading?l.a.createElement(f.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}x=Object(c.a)({form:"HeadLaporanBayar",enableReinitialize:!0,validate:g.a})(x);e.default=Object(o.b)(t=>({initialValues:{tgl_awal:Object(d.f)(),tgl_akhir:Object(d.f)()}}))(x)},693:function(t,e,a){"use strict";e.a=((t,e)=>{const a={};return t.tanggal_awal||(a.tanggal_awal="Tanggal Tidak Boleh Kosong"),t.type||(a.type="Type Tidak Boleh Kosong"),t.type_laporan||(a.type_laporan="Type Laporan Tidak Boleh Kosong"),a})}}]);
//# sourceMappingURL=10.ec4f1c03.chunk.js.map