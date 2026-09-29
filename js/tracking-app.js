new Vue({
el:'#tracking',
data:{...app.data,nim:'',nama:'',paketDipilih:null,nomor:''},
methods:{generate(){this.nomor='DO2026-'+String(Object.keys(this.tracking).length+1).padStart(3,'0')}},
watch:{nim(){},paketDipilih(){}}
})