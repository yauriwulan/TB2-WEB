function klik(){
    alert("Isikan Semua Field \n1. Nama Tidak Boleh Pake Spasi \n2. Format email xxx@mail.com \n3. Nomor Hp Minimal 10 Digit Angka");
}

function validate(){
    event.preventDefault();
    var huruf = /^[A-Za-z]+$/;
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inputNama = document.forms["form_daftar"]["nama"].value;
    var inputEmail = document.forms["form_daftar"]["email"].value;
    var inputAlamat = document.forms["form_daftar"]["alamat"].value;
    var inputNomor = document.forms["form_daftar"]["nomorhp"].value;
        if(inputNama.match(huruf)){
            var namaValid = inputNama;
        }else{
            alert("Input Nama Tidak Sesuai");
        }
        if(inputEmail.match(emailformat)){
            var emailValid = inputEmail;
        }else{
            alert("Input Email Tidak Sesuai");
        }
        if(inputAlamat == ""){
            alert("Alamat Tidak Boleh Kosong");
        }else{
            var alamatValid = inputAlamat;
        }
        if(isNaN(inputNomor) || inputNomor.toString().length < 10){
            alert("Input Nomor HP Tidak Sesuai")
        }else{
            var nomorValid = inputNomor;
        }

        document.getElementById("hasil").innerHTML = namaValid+"<br>"+emailValid+"<br>"+alamatValid+"<br>"+nomorValid;
        document.getElementById("tombol2").textContent = "Registered!";
}