// GAMES
function games(){
    var angka = Math.floor(Math.random() * 11);
    alert("SELAMAT DATANG DI GAME TEBAK ANGKA")

    for(var kesempatan = 1;kesempatan <= 3;kesempatan++){
        var tebak = parseInt(prompt("Anda Diberi 3 Kali Kesempatan Menebak \nTebak Angka 1 - 10 \nMasukan Tebakan:"))
        if(tebak == angka){
            alert('Tebakan Anda Benar')
            break
        }else{
            alert('Tebakan Anda Salah')
        }

        if(kesempatan == 3){
            alert('Tebakan yang benar adalah: ' + angka)
        }
    }
}
