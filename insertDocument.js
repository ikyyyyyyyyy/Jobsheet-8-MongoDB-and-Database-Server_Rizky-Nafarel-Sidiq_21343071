const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017"; // Ganti dengan alamat MongoDB server Anda.
const client = new MongoClient(url);
const namaDatabase = "taskmanager";

const id = new ObjectId();

console.log(id);
console.log(id.toHexString());
console.log(id.toHexString().length);

async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");

    const db = client.db(namaDatabase);
    const clPengguna = db.collection("pengguna");
    const clTugas = db.collection("tugas");

    const insertPengguna = await clPengguna.insertOne({
      _id: id,
      nama: "Rizky",
      usia: 23,
    });
    console.log("Memasukkan data Pengguna ke koleksi =>", insertPengguna);

    const insertTugas = await clTugas.insertMany([
      {
        Deskripsi: "Membersihkan rumah",
        StatusPenyelesaian: true,
      },
      {
        Deskripsi: "Mengerjakan tugas kuliah",
        StatusPenyelesaian: false,
      },
      {
        Deskripsi: "Memberikan bimbingan",
        StatusPenyelesaian: false,
      },
    ]);
    console.log("Memasukkan data Tugas ke koleksi =>", insertTugas);

    console.log("Data selesai dimasukkan.");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

// Memanggil fungsi 'main' dan menangani hasilnya menggunakan 'then' dan 'catch'.
main()
  .then((result) => {
    console.log(result);
    console.log(id.getTimestamp());
    console.log(id.toHexString().length);
  })
  .catch(console.error);
