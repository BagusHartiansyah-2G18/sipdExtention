let mfc = {
    
};
function allSubKegiatanPublik() {
    relayAjax({
        url: config.sipd_url+'api/master/sub_giat/list_table',                                    
        type: 'POST',	      				
        data: {            
            tahun: _token.ta,
            id_daerah: _token.daerah_id, 
            deleted_data: false,
            search: '',
            // length: 20,
            length: 2337,
            start: 0
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },
          success: function(resp){
            mfc.ubpks = {
                sub : resp.data.data,
            }
            allSubKegiatanPublikUrusan(JSON.stringify(resp.data.data.map(({id_urusan})=>id_urusan)));
            allSubKegiatanPublikBidang(JSON.stringify(resp.data.data.map(({id_bidang_urusan})=>id_bidang_urusan)));
            allSubKegiatanPublikProgram(JSON.stringify(resp.data.data.map(({id_program})=>id_program)));
            allSubKegiatanPublikKegiatan(JSON.stringify(resp.data.data.map(({id_giat})=>id_giat)));
          }
    });
}
function allSubKegiatanPublikUrusan(fdt) { 
    return new Promise(function(resolve, reduce){
        relayAjax({
            url: config.sipd_url+'api/master/urusan/find_by_id_urusan_list',                                    
            type: 'POST',	      				
            data: {            
                tahun: _token.ta,
                __id_urusan_list:fdt
            },
            beforeSend: function (xhr) {			    
                xhr.setRequestHeader("X-API-KEY", getHeader1());
                xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
            },
            success: function(resp){
                return mfc.ubpks.urusan = resp.data;
            }
        })
    }).then(v=>{
        return v
    });
}
function allSubKegiatanPublikBidang(dt) {
    relayAjax({
        url: config.sipd_url+'api/master/bidang_urusan/find_by_id_bidang_urusan_list',                                    
        type: 'POST',	      				
        data: {            
            tahun: _token.ta,
            __id_bidang_urusan_list:dt
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },
          success: function(resp){
            return mfc.ubpks.bidang =resp.data; 
        }
    });
}
function allSubKegiatanPublikProgram(dt) {
    return relayAjax({
        url: config.sipd_url+'api/master/program/find_by_id_program_list',                                    
        type: 'POST',	      				
        data: {            
            tahun: _token.ta,
            __id_program_list:dt
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },
          success: function(resp){
            return mfc.ubpks.program = resp.data;
          }
    });
}
function allSubKegiatanPublikKegiatan(dt) {
    relayAjax({
        url: config.sipd_url+'api/master/giat/find_by_id_giat_list',                                    
        type: 'POST',	      				
        data: {        
            tahun: _token.ta,
            __id_giat_list:dt
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },
          success: function(resp){
            mfc.ubpks.kegiatan = resp.data;
            return saveJSON(mfc,"data-ubpks-2337");
          }
    });
}

function testerBGS() {
    console.log(xreps.data.data.map(({id_bidang_urusan})=>id_bidang_urusan));
    return console.log([...xreps.data.data.map(({id_bidang_urusan})=>id_bidang_urusan)]);

}
function saveJSON(data, saveAs){
    var stringified = JSON.stringify(data, null, 2); 
    var blob = new Blob([stringified], {type: "application/json"});
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.download = saveAs + '.json';
    a.href = url;
    a.id = saveAs;
    document.body.appendChild(a);
    a.click();
    document.querySelector('#' + a.id).remove();
} 

// batas
function subKegiatanSKPD(idSKPD = getUrlVars("id_skpd")) {
    relayAjax({
        url: config.sipd_url+'api/renja/sub_bl/list_belanja_by_tahun_daerah_unit',                                    
        type: 'POST',	      				
        data: {            
            tahun: _token.ta,
            id_daerah: _token.daerah_id,  
            id_unit: idSKPD,
            is_prop: 0,
            is_anggaran: 0
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },success: function(resp){
            mfc.perencanaan = {
                sub : decrip1(resp.data),
            }
            subKegiatanSKPDRincian(idSKPD);
        }   
    });
}
function subKegiatanSKPDRincian(idSKPD) {
    mfc.perencanaan.sub.forEach(async (v,i) => {
        setTimeout(
            await relayAjax({
                url: config.sipd_url+'api/renja/rinci_sub_bl/get_by_id_sub_bl',                                    
                type: 'POST',	      				
                data: {            
                    tahun: _token.ta,
                    id_daerah: _token.daerah_id,  
                    id_unit: idSKPD,
                    id_sub_bl: v.id_sub_bl,
                    is_prop: 0,
                    is_anggaran: 0
                },
                beforeSend: function (xhr) {			    
                    xhr.setRequestHeader("X-API-KEY", getHeader1());
                    xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
                },success:function( resp){
                    mfc.perencanaan.sub[i].rincian = resp.data;
                    
                    if (i==(mfc.perencanaan.sub.length-1)) {
                        // saveJSON(mfc,"data-subRincian-"+mfc.perencanaan.sub.length)
                        return getJudulRincian();
                    }
                }
            })
        , 1000);
        
    });
}
// nip="197505072002121003",
// passs="sumbawabaratkab01#@!A",
async function getJudulRincian() {
    let didJudul = [];
    mfc.perencanaan.sub.forEach((v,i) => {
        try {
            v.rincian.forEach((v1,i1) => {
                didJudul.push(v1.id_subs_sub_bl);
            });
        } catch (error) {
            
        }
    })
    
    didJudul = [...new Set(didJudul)];
    let loop = didJudul.length/20,
        sisa = didJudul%20,
        dexec=[];
    if(sisa!=0){
        loop++;
    }
    // for (let index = 1; index < 2; index++) {
        // dexec = didJudul.slice(((index-1)*20),(index*20));
    await relayAjax({
        url: config.sipd_url+'api/renja/subs_sub_bl/find_by_id_list',                                    
        type: 'POST',	      				
        data: {            
            tahun: _token.ta,
            id_daerah: _token.daerah_id,  
            __id_subs_sub_bl_list: JSON.stringify(didJudul), 
            is_anggaran: 0
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },success: function(resp){
            mfc.perencanaan.judul=resp.data;
            return getSumberDana();
        }
    });
        
    // }
    
    // return console.log(JSON.stringify([...new Set(didJudul)]));
    
}
async function getSumberDana() {
    await relayAjax({
        url: config.sipd_url+'api/renja/dana_sub_bl/get_by_id_sub_bl',                                    
        type: 'POST',	      				
        data: {            
            tahun: _token.ta,
            id_daerah: _token.daerah_id,  
            id_sub_bl: mfc.perencanaan.sub[0].id_sub_bl
        },
        beforeSend: function (xhr) {			    
            xhr.setRequestHeader("X-API-KEY", getHeader1());
            xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
        },success: function(resp){
            mfc.perencanaan.dana=resp.data[0];
            saveJSON(mfc,"data-subRincian-"+mfc.perencanaan.sub.length)
        }
    });
}


// batas
standarHarga = [{
        tipe :'SSH',
        length:2375,
        kelompok:1
    },{
        tipe :'HSPK',
        length:254,
        kelompok:2
    },{
        tipe :'ASB',
        length:373,
        kelompok:3
    },{
        tipe :'SBU',
        length:2142,
        kelompok:4
    }
];
function getssh() {
    standarHarga.forEach((v,i) => {
        relayAjax({
            url: config.sipd_url+'api/master/d_komponen/listAll',                                    
            type: 'POST',	      				
            data: {            
                tahun: _token.ta,
                id_daerah: _token.daerah_id, 
                search:'', 
                start: 0,
                ...v
            },
            beforeSend: function (xhr) {			    
                xhr.setRequestHeader("X-API-KEY", getHeader1());
                xhr.setRequestHeader("X-ACCESS-TOKEN", _token.token);  
            },success: function(resp){
                mfc[v.tipe] = resp.data.data;
                if (i==(standarHarga.length-1)) {
                    return saveJSON(mfc,"standarHarga-4")
                }
            }
        });
    });
}