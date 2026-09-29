new Vue({
el:'#app',
data:{...app.data,filterUPBJJ:'',filterKategori:'',reorderOnly:false,sortBy:'',baru:{kode:'',judul:''},pesan:''},
computed:{hasil(){let d=[...this.stok];
if(this.filterUPBJJ)d=d.filter(x=>x.upbjj===this.filterUPBJJ);
if(this.filterKategori)d=d.filter(x=>x.kategori===this.filterKategori);
if(this.reorderOnly)d=d.filter(x=>x.qty<=x.safety);
if(this.sortBy)d.sort((a,b)=>a[this.sortBy]>b[this.sortBy]?1:-1);
return d;}},
methods:{
resetFilter(){this.filterUPBJJ='';this.filterKategori='';this.reorderOnly=false;},
tambah(){
if(!this.baru.kode||!this.baru.judul){this.pesan='Isi data';return;}
this.stok.push({kode:this.baru.kode,judul:this.baru.judul,kategori:'MK Wajib',upbjj:'Jakarta',harga:0,qty:0,safety:10});
this.pesan='Berhasil';
}},
watch:{filterUPBJJ(){this.filterKategori='';},reorderOnly(){}}
})