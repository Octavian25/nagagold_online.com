(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1087:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(10),i=t(287),r=t(288),o=t(4),c=t(3),p=t(692);class m extends n.Component{constructor(e){super(e),this.state={date:new Date},this.setStartDate=this.setStartDate.bind(this),this.setLastDate=this.setLastDate.bind(this)}setStartDate(e){this.setState({tgl_awal:new Date(e)})}setLastDate(e){this.setState({tgl_akhir:new Date(e)})}render(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:e=>{"Enter"===e.key&&e.preventDefault()}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(i.a,{name:"tgl_awal",component:o.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:e=>this.setStartDate(e),placeholder:"Masukan Tanggal Dari"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(i.a,{name:"type",component:o.f,onChange:e=>this.props.onChange(e),options:[{value:"detail",name:"Detail"},{value:"rekap",name:"Rekap"}],label:"Type",placeholder:"Pilih Type"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"text-right"},l.a.createElement("label",null,"\xa0"),l.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan")))))}}m=Object(r.a)({form:"HeadLaporanKeuanganKas",enableReinitialize:!0,validate:p.a})(m),a.default=Object(s.b)(e=>({datasales:e.datamaster.getDataSales,initialValues:{tgl_awal:Object(c.f)()}}))(m)},692:function(e,a,t){"use strict";a.a=((e,a)=>{const t={};return e.tanggal_awal||(t.tanggal_awal="Tanggal Tidak Boleh Kosong"),e.type||(t.type="Type Tidak Boleh Kosong"),e.type_laporan||(t.type_laporan="Type Laporan Tidak Boleh Kosong"),t})}}]);
//# sourceMappingURL=8.dd683ed1.chunk.js.map