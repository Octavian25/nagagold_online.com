(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1095:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(16),o=a(11),c=a(10),s=a(6),i=a(291),d=(a(204),a(5)),m=a(290),E=a(4),g=a(3),b=a(19),u=a(47),p=a(40),h=a.n(p);var k=class extends l.Component{constructor(e){super(e),this.state={}}render(){let e=0,t=0,a=0,l=0;return this.props.data.forEach((n,r)=>{n.detail.forEach((l,n)=>{e+=l.stock_on_hand,a+=l.berat_atribut,t+=l.berat}),l+=n.detail.length}),n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Hancur Barang",sheet:"Laporan Hancur Barang",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"8"}," Laporan Hancur Barang ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"8"}," Periode ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"8"}," ",0===Object(g.i)("tgl_laporan").length?null:JSON.parse(Object(g.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(g.i)("tgl_laporan")).tgl_akhir," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"8"})),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BAKI"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BARCODE"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KONDISI BARANG"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement(n.a.Fragment,null,e.detail.map((e,a)=>n.a.createElement("tr",null,n.a.createElement("td",null," ",++t),n.a.createElement("td",null," ",e.kode_gudang),n.a.createElement("td",null," ",e.kode_baki),n.a.createElement("td",null," ",e.kode_barcode),n.a.createElement("td",null," ",e.nama_barang),n.a.createElement("td",null," ",e.berat.toFixed(3)),n.a.createElement("td",null," ",e.nama_atribut),n.a.createElement("td",null," ",e.berat_atribut.toFixed(3)),n.a.createElement("td",null," ",e.kondisi_barang)))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"5",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}}," ","Total"),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",t," "),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ",a," "),n.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," ")))))}},_=a(36);a(57);var x=(e="")=>{const t=new _.default("l","mm",[297,210]);let a=[],l=30,n=0,r=0,o=0;t.setFontSize(15),t.text("LAPORAN HANCUR BARANG",14,15),t.setFontSize(10),t.setProperties({title:"Laporan Hancur Barang"}),t.text("PERIODE : ".concat(0===Object(g.i)("tgl_laporan").length?null:JSON.parse(Object(g.i)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(g.i)("tgl_laporan")).tgl_akhir),14,25);let c=1;e.forEach((e,t)=>{let l=0,s=0;e.detail.forEach((e,t)=>{let n=[c,e.kode_gudang,e.kode_baki,e.kode_barcode,e.nama_barang,e.berat.toFixed(3),e.nama_atribut,e.berat_atribut.toFixed(3),e.kondisi_barang];l+=parseFloat(e.berat),s+=parseFloat(e.berat_atribut),r+=parseFloat(e.berat),o+=parseFloat(e.berat_atribut),a.push(n),++c}),n+=e.detail.length});let s=[{content:"Total",colSpan:5,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(r.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(o.toFixed(3)),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}}];a.push(s);let i=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(g.i)("userdata")).user_id," / ").concat(Object(g.g)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(i),t.autoTable({head:[[{content:"No"},{content:"Kode Gudang"},{content:"Kode Baki"},{content:"BARCODE"},{content:"NAMA BARANG"},{content:"BERAT"},{content:"NAMA ATR"},{content:"BRT ATR"},{content:"Kondisi Barang"}]],body:a,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),l=t.autoTableEndPosY()+3,a=[];const d=t.internal.getNumberOfPages(),m=t.internal.pageSize.width,E=t.internal.pageSize.height;t.setFontSize(10);for(let g=1;g<d+1;g++){let e=m/2,a=E-10;t.setPage(g),t.text("".concat(g," of ").concat(d),e,a,{align:"center"})}var b=t.output("datauristring"),u=window.open();u.document.open(),u.document.write("<html><head><title>Laporan Hancur Barang</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+b+"></embed></body></html>")},f=a(15),S=a.n(f);class y extends l.Component{constructor(e){super(e),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}exportPdf(){x(this.props.LaporanDataBarang)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}render(){let e=[],t=0;this.props.LaporanDataBarang.forEach(a=>{a.detail.forEach(a=>{e.push(a),t+=a.berat})});const a=[{dataField:"kode_gudang",text:"Kode Gudang",footerAttrs:{colSpan:"4"},footer:(t,a,l,r)=>n.a.createElement("div",null,"Total Barang  : ",e.length," ")},{dataField:"kode_baki",text:"Kode Baki"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",footer:(e,a,l,r)=>n.a.createElement("div",null,t.toFixed(3)," "),formatter:e=>e.toFixed(3)}];return n.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(m.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement(m.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:e=>this.setLastDate(e),label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"text-right"},n.a.createElement("label",null,"\xa0"),n.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),n.a.createElement("div",{className:"col-12"},n.a.createElement(b.a,{keyField:"kode_gudang",data:this.props.export?e:[],columns:a,empty:!0,textEmpty:"Data Laporan Hancur Barang Kosong"})),n.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6"},n.a.createElement("button",{onClick:()=>this.exportPdf(),className:"btn btn-warning btn-block"}," ","Export PDF"," ")),n.a.createElement("div",{className:"col-lg-6"},n.a.createElement(k,{data:this.props.LaporanDataBarang}))))),this.props.isLoading?n.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}y=Object(i.a)({form:"HeadHancurBarang",enableReinitialize:!0,validate:u.a})(y);var D=Object(c.b)(e=>({initialValues:{tgl_awal:Object(g.f)(),tgl_akhir:Object(g.f)()}}))(y),B=a(22);class N extends n.a.Component{constructor(e){super(e),this.state={isEdit:!1,modalDialog:!1,isLoading:!1,username:!1,export:!1,LaporanDataBarang:[],tgl_awal:new Date,tgl_akhir:new Date},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){this.setState({isLoading:!0});let t={tgl_awal:Object(g.d)(B(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(g.d)(B(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(s.e)("hancurbarang/get/report",t).then(e=>{0===e.data.length?(Object(d.e)("info","Data Yang Anda Cari Tidak Ada"),this.setState({isLoading:!1,export:!1})):(Object(g.j)("tgl_laporan",JSON.stringify(t)),Object(d.e)("success","Laporan Hancur Barang Tersedia"),this.setState({LaporanDataBarang:e.data,isLoading:!1,export:!0}))}).catch(e=>this.errorHandling(e))}errorHandling(e){Object(d.a)(e),this.setState({isLoading:!1,export:!1})}render(){return n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(r.b,{to:"#"},"Laporan Barang")),n.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Hancur Barang")),n.a.createElement("h1",{className:"page-header"},"Laporan Hancur Barang "),n.a.createElement(o.a,null,n.a.createElement(o.c,null,"Filter Laporan"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement(D,{export:this.state.export,LaporanDataBarang:this.state.LaporanDataBarang,isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)})),n.a.createElement("br",null)))}}N=Object(i.a)({form:"FormLaporanHancurBarang",enableReinitialize:!0})(N);t.default=Object(c.b)(e=>({hideModal:e.datamaster.modalDialog}),null)(N)}}]);
//# sourceMappingURL=42.8decb0b4.chunk.js.map