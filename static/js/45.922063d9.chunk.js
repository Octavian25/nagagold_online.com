(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1105:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(91),o=a.n(r),s=a(16),i=a(5),c=a(11),m=a(77),u=a.n(m),g=a(151),E=a.n(g),h=a(6),d=a(76),p=a.n(d),b=a(3),S=a(30);a(48);var L=(e="",t="",a="")=>{const l=new S.default("l","mm",[297,210]);let n=[],r=[],o=[],s=30,i=0,c=0;l.setFontSize(15),l.text("LAPORAN KEUANGAN REKAP",14,15),l.setFontSize(10),l.setProperties({title:"LAPORAN KEUANGAN REKAP"}),l.text("Tanggal : ".concat(0===Object(b.i)("tgl_laporan").length?null:JSON.parse(Object(b.i)("tgl_laporan")).tanggal),14,25),e.forEach((e,t)=>{o=[[{content:"KETERANGAN"},{content:"UANG MASUK"},{content:"UANG KELUAR"}]];let a=[e._id,parseInt(e.jumlah_in).toLocaleString("ID-id"),parseInt(e.jumlah_out).toLocaleString("ID-id")];i+=e.jumlah_in,c+=e.jumlah_out,n.push(a)});let m=[{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(i.toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(c.toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(m);let u=[{content:"Printed By ".concat(JSON.parse(Object(b.i)("userdata")).user_id," / ").concat(Object(b.g)()),colSpan:3,styles:{fontStyle:"italic",textColor:"#000"}}];r.push(u),l.autoTable({head:o,body:n,foot:r,startY:s,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),s=l.autoTableEndPosY()+3,n=[],r=[];const g=l.internal.getNumberOfPages(),E=l.internal.pageSize.width,h=l.internal.pageSize.height;l.setFontSize(10);for(let b=1;b<g+1;b++){let e=E/2,t=h-10;l.setPage(b),l.text("".concat(b," of ").concat(g),e,t,{align:"center"})}var d=l.output("datauristring"),p=window.open();p.document.open(),p.document.write("<html><head><title>LAPORAN KEUANGAN REKAP</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+d+"></embed></body></html>")};var N=(e="",t="",a="")=>{const l=new S.default("l","mm",[297,210]);let n=[],r=[],o=[],s=30,i=0,c=0;l.setFontSize(15),l.text("LAPORAN KEUANGAN DETAIL",14,15),l.setFontSize(10),l.setProperties({title:"LAPORAN KEUANGAN DETAIL"}),l.text("Tanggal : ".concat(0===Object(b.i)("tgl_laporan").length?null:JSON.parse(Object(b.i)("tgl_laporan")).tanggal),14,25),e.forEach((e,t)=>{o=[[{content:"NO"},{content:"KATEGORI"},{content:"DESKRIPSI"},{content:"UANG MASUK"},{content:"UANG KELUAR"}]];let a=e.deskripsi.split("<br/>"),l="";if(a.length>2)for(let n=1;n<a.length;n++)l+=""===l?a[n]:"\n"+a[n];else l=a[1];let r=[++t,e.kategori,l,parseInt(e.jumlah_in).toLocaleString("ID-id"),parseInt(e.jumlah_out).toLocaleString("ID-id")];i+=e.jumlah_in,c+=e.jumlah_out,n.push(r)});let m=[{content:"",colSpan:3,styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(i.toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(c.toLocaleString("ID-id")),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(m);let u=[{content:"Saldo Akhir",colSpan:4,styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat((i-c).toLocaleString("id-ID")),styles:{fillColor:"#E8E5E5",textColor:"#000"}}];r.push(u);let g=[{content:"Printed By ".concat(JSON.parse(Object(b.i)("userdata")).user_id," / ").concat(Object(b.g)()),colSpan:5,styles:{fontStyle:"italic",textColor:"#000"}}];r.push(g),l.autoTable({head:o,body:n,foot:r,startY:s,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),s=l.autoTableEndPosY()+3,n=[],r=[];const E=l.internal.getNumberOfPages(),h=l.internal.pageSize.width,d=l.internal.pageSize.height;l.setFontSize(10);for(let b=1;b<E+1;b++){let e=h/2,t=d-10;l.setPage(b),l.text("".concat(b," of ").concat(E),e,t,{align:"center"})}var p=l.output("datauristring"),L=window.open();L.document.open(),L.document.write("<html><head><title>LAPORAN KEUANGAN DETAIL</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+p+"></embed></body></html>")},k=a(22),x=a(34),y=a.n(x);var A=class extends l.Component{constructor(e){super(e),this.state={}}render(){let e=0,t=0,a=1;return this.props.data.forEach((a,l)=>{e+=a.jumlah_in,t+=a.jumlah_out}),n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Keuangan Rekap",sheet:"Laporan Keuangan Rekap",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3",style:{textAlign:"center"}}," ","LAPORAN KEUANGAN REKAP"," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"}," Tanggal  ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"}," ",0===Object(b.i)("tgl_laporan").length?null:JSON.parse(Object(b.i)("tgl_laporan")).tanggal," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"3"})),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"No"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Uang Masuk"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Uang Keluar"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",null," ",a++),n.a.createElement("td",null," ",e.jumlah_in),n.a.createElement("td",null," ",e.jumlah_out)))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},e," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t)))))}};var K=class extends l.Component{constructor(e){super(e),this.state={}}deskripsi(e){let t=e.split("<br/>");return void 0===e?"-":n.a.createElement(n.a.Fragment,null," ",t[1]," ",n.a.createElement("br",null)," ",t[2]," ")}render(){let e=0,t=0,a=1;return this.props.data.forEach((a,l)=>{e+=a.jumlah_in,t+=a.jumlah_out}),n.a.createElement(n.a.Fragment,null,n.a.createElement(y.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Keuangan Detail",sheet:"Laporan Keuangan Detail",buttonText:"Export Exel"}),n.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"7",style:{textAlign:"center"}}," ","LAPORAN KEUANGAN DETAIL"," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"5"}," Tanggal  ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"5"}," ",0===Object(b.i)("tgl_laporan").length?null:JSON.parse(Object(b.i)("tgl_laporan")).tanggal," ")),n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"5"})),n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"No"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Kategori"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Deskripsi"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Uang Masuk"),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"Uang Keluar"))),n.a.createElement("tbody",null,this.props.data.map((e,t)=>n.a.createElement("tr",{key:t,style:{verticalAlign:"top"}},n.a.createElement("td",{style:{textAlign:"center"}}," ",a++),n.a.createElement("td",null," ",e.kategori),n.a.createElement("td",{style:{rowSpan:"2"}}," ",this.deskripsi(e.deskripsi||"-")),n.a.createElement("td",null," ",e.jumlah_in),n.a.createElement("td",null," ",e.jumlah_out)))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"},colSpan:"2"}),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},e," "),n.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},t)))))}};const v=Object(l.lazy)(()=>a.e(8).then(a.bind(null,1101))),f=m.Search.SearchBar;t.default=class extends l.Component{constructor(e){super(e),this.state={isLoading:!1,hidden:!1,istypeRekap:!1,tanggal:!1,LaporanKeuanganDetail:[],LaporanKeuanganReakap:[],columnsdetail:[{dataField:"kategori",text:"Kategori",formatter:e=>void 0===e?"-":e,csvFormatter:e=>void 0===e?"-":e,footerAttrs:{colSpan:"2"},footer:"Total"},{dataField:"deskripsi",text:"Deskripsi",formatter:e=>{console.log(e);let t=(e||"-").split("<br/>");return void 0===e?"-":n.a.createElement(n.a.Fragment,null," ",t[1]," ",n.a.createElement("br",null)," ",t[2]," ")},csvFormatter:e=>void 0===e?"-":e},{dataField:"jumlah_in",text:"Uang Masuk",headerClasses:"text-right",formatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("id-ID")),csvFormatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," "),footer:e=>n.a.createElement("div",{className:"text-right"}," ",parseInt(e.reduce((e,t)=>e+t,0)).toLocaleString("id-ID")," ")},{dataField:"jumlah_out",text:"Uang Keluar",headerClasses:"text-right",formatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("id-ID")),csvFormatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," "),footer:e=>n.a.createElement("div",{className:"text-right"}," ",parseInt(e.reduce((e,t)=>e+t,0)).toLocaleString("id-ID")," ")}],columnsrekap:[{dataField:"_id",text:"Kategori",footer:"Total"},{dataField:"jumlah_in",text:"Uang Masuk",headerClasses:"text-right",formatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("id-ID")),csvFormatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," "),footer:e=>n.a.createElement("div",{className:"text-right"}," ",parseInt(e.reduce((e,t)=>e+t,0)).toLocaleString("id-ID")," ")},{dataField:"jumlah_out",text:"Uang Keluar",headerClasses:"text-right",formatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?0:parseFloat(e).toLocaleString("id-ID")),csvFormatter:e=>n.a.createElement("div",{className:"text-right"}," ",void 0===e?"0":e," "),footer:e=>n.a.createElement("div",{className:"text-right"}," ",parseInt(e.reduce((e,t)=>e+t,0)).toLocaleString("id-ID")," ")}]},this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){let t={tanggal:Object(b.d)(k(new Date(e.tgl_awal)).format("YYYY-MM-DD"))};this.setState({tanggal:e.tanggal_awal}),this.setState({isLoading:!0}),"detail"===e.type&&Object(h.e)("reportcash/detail",t).then(e=>{Object(b.j)("tgl_laporan",JSON.stringify(t)),this.setState({LaporanKeuanganDetail:e.data})}).then(()=>{this.setState({isLoading:!1})}).catch(e=>{this.setState({isLoading:!1}),Object(i.b)(e)}),"rekap"===e.type&&Object(h.e)("reportcash/rekap",t).then(e=>{0===e.data.length?Object(i.e)("info","Data Yang Di Cari Tidak Ada !!!"):(Object(i.e)("success","Laporan Keuangan Tersedia"),this.setState({LaporanKeuanganReakap:e.data}))}).then(()=>{this.setState({isLoading:!1})}).catch(e=>{this.setState({isLoading:!1}),Object(i.e)("info","Data Yang Di Cari Tidak Ada !!!")})}componentDidMount(){let e=JSON.parse(Object(b.i)("userdata"));this.setState({username:e.user_id})}onChange(e){"rekap"===e.type?(this.setState({istypeRekap:!0}),this.setState({LaporanKeuanganDetail:[]})):(this.setState({LaporanKeuanganReakap:[]}),this.setState({istypeRekap:!1}))}render(){let e=0,t=0,a=0;0===this.state.LaporanKeuanganDetail.length||(this.state.LaporanKeuanganDetail.forEach(a=>{e+=a.jumlah_out,t+=a.jumlah_in}),a=parseInt(t)-parseInt(e));let l=0,r=0,i=0;return 0===this.state.LaporanKeuanganReakap.length||(this.state.LaporanKeuanganReakap.forEach(e=>{l+=e.jumlah_out,r+=e.jumlah_in}),i=parseInt(r)-parseInt(l)),n.a.createElement("div",null,n.a.createElement("ol",{className:"breadcrumb float-xl-right"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement(s.b,{to:"#"},"Laporan")),n.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Keuangan Cash")),n.a.createElement("h1",{className:"page-header"},"Laporan Keuangan Cash "),n.a.createElement(c.a,null,n.a.createElement(c.c,null,"Laporan Keuangan Cash"),n.a.createElement(c.b,null,n.a.createElement(v,{onChange:e=>this.onChange(e),isLoading:this.state.isLoading,onSubmit:e=>this.handleSubmit(e)}))),n.a.createElement(c.a,null,n.a.createElement(c.c,null,"Laporan Keuangan Cash"),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},!1===this.state.isLoading?n.a.createElement(u.a,{keyField:"deskripsi",data:!0===this.state.istypeRekap?this.state.LaporanKeuanganReakap||[]:this.state.LaporanKeuanganDetail||[],columns:!0===this.state.istypeRekap?this.state.columnsrekap:this.state.columnsdetail,search:!0,exportCSV:{fileName:this.state.istypeRekap?"Laporan Rekap Keuangan.csv":"Laporan Detail Keuangan.csv"}},e=>n.a.createElement("div",{className:"row"},0===this.state.LaporanKeuanganReakap.length?null:n.a.createElement(n.a.Fragment,null,this.state.LaporanKeuanganReakap?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-6"},n.a.createElement("h3",null,"Saldo Akhir : ",i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},n.a.createElement(f,e.searchProps)))):null),0===this.state.LaporanKeuanganDetail.length?null:n.a.createElement(n.a.Fragment,null,this.state.LaporanKeuanganDetail?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-6"}),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},n.a.createElement(f,e.searchProps)))):null),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(p.a,Object.assign({pagination:E()()},e.baseProps)),n.a.createElement("br",null)),0===this.state.LaporanKeuanganDetail.length?null:n.a.createElement(n.a.Fragment,null,this.state.LaporanKeuanganDetail?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-lg-6"}),n.a.createElement("div",{className:"col-6 text-right"},n.a.createElement("h3",null," Saldo Akhir : ",a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," "))):null),0===this.state.LaporanKeuanganReakap.length?null:n.a.createElement(n.a.Fragment,null,this.state.LaporanKeuanganReakap?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-6"},n.a.createElement("button",{className:"btn btn-warning btn-block",onClick:()=>L(this.state.LaporanKeuanganReakap,this.state.username,this.state.tanggal)},"Export PDF")),n.a.createElement("div",{className:"col-6"},n.a.createElement(A,{data:this.state.LaporanKeuanganReakap}))):null),0===this.state.LaporanKeuanganDetail.length?null:n.a.createElement(n.a.Fragment,null,this.state.LaporanKeuanganDetail?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-6"},n.a.createElement("button",{className:"btn btn-warning btn-block",onClick:()=>N(this.state.LaporanKeuanganDetail,this.state.username,this.state.tanggal)},"Export PDF")),n.a.createElement("div",{className:"col-6"},n.a.createElement(K,{data:this.state.LaporanKeuanganDetail}),"\xa0")):null))):n.a.createElement(o.a,{width:"100%",height:200})),n.a.createElement("br",null)))}}}}]);
//# sourceMappingURL=45.922063d9.chunk.js.map