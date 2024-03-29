const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "taskmanager";

async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");
    const db = client.db(namaDatabase);

    // //Memperbaharui Data dengan perintah updateOne
    const updateOnePromise = db.collection("pengguna").updateOne(
      { _id: new ObjectId("654303971ad8a3da35238d54") },
      //   { $set: { nama: "Rizky" } }
      { $inc: { usia: 22 } }
    );
    updateOnePromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        client.close();
      });
    // //Memperbaharui Data dengan perintah updateMany
    // db.collection('tugas').updateMany(
    // { StatusPenyelesaian: false },
    // { $set: { StatusPenyelesaian: true} }
    // ).then((result) => {
    // console.log(result.modifiedCount);
    // }).catch((error) => {
    // console.error(error);
    // }).finally(() => {
    // client.close();
    // });
  } catch (error) {
    console.error(error);
  }
}

main();
