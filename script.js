var form = `<h4 class="text-center">Data Kendaraan</h4>
<div>
    <div class="col">
        <label for="inputNomer" class="form-label">No Registrasi</label>
        <input id="inputNomer" class="form-control" type="text" required>
    </div>
    <div class="col">
        <label for="inputNama" class="form-label">Nama Pemilik</label>
        <input id="inputNama" class="form-control" type="text" required>
    </div> 
    <div class="col-md-12 mt-2 text-end">
    <button id="searchData" class="btn btn-primary" type="submit">Search</button>
    <button id="submitData" class="btn btn-primary" type="submit" onclick="save()">Add</button>
    </div>`;

function table() {
  let table = `<table class="table table-bordered border-dark mx-auto">
    <thead class="table-primary">
      <tr>
        <th clsaa="col-1">NO</th>
        <th clsaa="col-3">No Registrasi</th>
        <th clsaa="col-3">Nama Pemilik</th>
        <th clsaa="col-3">Merk Kendaraan</th>
        <th clsaa="col-2">Tahun Pembuatan</th>
        <th clsaa="col-3">Kapasitas Silinder</th>
        <th clsaa="col-2">Warna</th>
        <th clsaa="col-2">Bahan Bakar</th>
        <th clsaa="col-2">Edit</th>
        <th clsaa="col-2">Hapus</th>
      </tr>
    </thead>
    <tbody>`;
  for (let i = 0; i < details.length; i++) {
    table =
      table +
      `<tr>
        <td>${i + 1}</td>
        <td>${details[i].inputNomer}</td>
        <td>${details[i].inputNama}</td>
        <td>${details[i].inputMerk}</td>
        <td>${details[i].inputTahun}</td>
        <td>${details[i].inputKapa}</td>
        <td>${details[i].inputWarna}</td>
        <td>${details[i].inputBahan}</td>
        <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
        <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
      </tr> `;
  }
  table =
    table +
    `</tbody>
      </table>`;
  document.getElementById("table").innerHTML = table;
}

document.getElementById("form").innerHTML = form;
details = [];
getData();
table();

function getData() {
  let Data = localStorage.getItem("details");
  if (Data) {
    details = JSON.parse(Data);
  } else {
    setData();
  }
}

function setData() {
  localStorage.setItem("details", JSON.stringify(details));
}
function save() {
  let noRegis = document.getElementById("inputNomer");
  let inNama = document.getElementById("inputNama");

  if (inNama.value == 0) {
    alert("Nama tidak boleh dikosongkan!");
    return;
  }
  let data = {
    inputNomer: noRegis.value,
    inputNama: inNama.value,
  };
  details.push(data);
  setData();

  // console.log(details)
  // console.log(noRegis.value)
  table();
  noRegis.value = "";
  inNama.value = "";
}

function deleteData(index) {
  if (confirm("Apakah anda yakin akan menghapus data ini?")) details.splice(index, 1);
  setData();
  table();

  // console.log('delete work')
  // console.log(details)
}

function edit(index) {
  let editForm = `<h4 class="text-start">Tambah Data Kendaraan</h4>
    <div class="row g-3">
    <div class="col-md-6">
        <label for="inputNomer" class="form-label">No Registrasi</label>
        <input id="newNomer" class="form-control" type="text" value="${details[index].inputNomer}" required>
    </div>
    <div class="col-md-6">
        <label for="inputTahun" class="form-label">Tahun Pembuatan</label>
        <input id="inputTahun" class="form-control" type="number" required>
    </div>
    <div class="col-md-6">
        <label for="inputNama" class="form-label">Nama Pemilik</label>
        <input id="newNama" class="form-control" type="text" value="${details[index].inputNama}" required>
    </div>
    <div class="col-md-6">
        <label for="inputKapa" class="form-label">Kapasitas Silinder</label>
        <input id="inputKapa" class="form-control" type="number" required>
    </div>
    <div class="col-md-6">
        <label for="inputMerk" class="form-label">Merk Kendaraan</label>
        <input id="inputMerk" class="form-control" type="text" required>
    </div>
    <div class="col-md-6">
        <label for="inputWarna" class="form-label">Warna Kendaraan</label>
        <select id="inputWarna" class="form-select" required>
            <option selected disabled value="">Pilih Warna</option>
            <option>Merah</option>
            <option>Hitam</option>
            <option>Biru</option>
            <option>Abu-abu</option>
        </select>
    </div>
    <div class="col-md-6">
        <label for="inputAlamat" class="form-label">Alamat Pemilik Kendaraan</label>
        <textarea class="form-control mb-3" id="inputAlamat" rows="3" ></textarea>
    </div>
    <div class="col-md-6">
        <label for="inputBahan" class="form-label">Bahan Bakar</label>
        <input id="inputBahan" class="form-control" type="text" required>
    </div> 
    <div class="col-md-12 text-start">
    <button class="btn btn-primary" type="submit" onclick="update(${index})">Simpan</button>
    <button class="btn btn-primary" type="submit" )>Kembali</button>
    </div>`;
  document.getElementById("form").innerHTML = editForm;
  // console.log('edit work');
}

function update(index) {
  let newNomer = document.getElementById("newNomer");
  let newNama = document.getElementById("newNama");
  let merk = document.getElementById("inputMerk");
  let tahun = document.getElementById("inputTahun");
  let kapa = document.getElementById("inputKapa");
  let warna = document.getElementById("inputWarna");
  let bahan = document.getElementById("inputBahan");

  details[index] = {
    inputNomer: newNomer.value,
    inputNama: newNama.value,
    inputMerk: merk.value,
    inputTahun: tahun.value,
    inputKapa: kapa.value,
    inputWarna: warna.value,
    inputBahan: bahan.value,
  };
  setData();
  table();
  document.getElementById("form").innerHTML = form;
  // console.log('update work')
  // console.log(details)
}
