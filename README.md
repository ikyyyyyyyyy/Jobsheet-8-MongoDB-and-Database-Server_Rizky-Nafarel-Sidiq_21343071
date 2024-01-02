# Jobsheet-8-MongoDB-and-Database-Server_Rizky-Nafarel-Sidiq_21343071
# Operasi MongoDB dengan Node.js

Repository ini menyediakan panduan untuk melakukan operasi dasar MongoDB menggunakan Node.js.

## Langkah-Langkah Singkat:

### 1. Instalasi MongoDB Community Server:
- Unduh MongoDB Community Server dari situs resmi.
- Pilih versi terbaru sesuai dengan sistem operasi Anda (MSI untuk instalasi yang mudah).
- Ikuti panduan instalasi hingga selesai.

### 2. Membuat Koneksi dan Memasukkan Data ke MongoDB:
- Buat folder baru dalam proyek Anda.
- Inisialisasi proyek Node.js dengan `npm init -y`.
- Instal library MongoDB dengan `npm i mongodb@6.2.0`.
- Buat file JavaScript baru (`insertDocument.js`) untuk koneksi dan memasukkan data ke MongoDB.
- Gunakan kode yang diberikan untuk membuat koneksi dan memasukkan data ke koleksi MongoDB.

### 3. Membaca Data dari MongoDB:
- Buat file JavaScript baru (`readDocument.js`) untuk membaca data dari MongoDB.
- Gunakan kode yang diberikan untuk membaca data berdasarkan kriteria tertentu dari koleksi MongoDB.

### 4. Memperbarui Data di MongoDB:
- Buat file JavaScript baru (`updateDocument.js`) untuk memperbarui data di MongoDB.
- Gunakan kode yang diberikan untuk melakukan pembaruan data berdasarkan kriteria tertentu di koleksi MongoDB.

### 5. Menghapus Data dari MongoDB:
- Buat file JavaScript baru (`deleteDocument.js`) untuk menghapus data dari MongoDB.
- Gunakan kode yang diberikan untuk menghapus data berdasarkan kriteria tertentu dari koleksi MongoDB.

## Penjelasan Singkat:

1. **Instalasi MongoDB:**
   - Mengunduh dan menginstal MongoDB Community Server.
   - Mengikuti langkah-langkah pada installer hingga selesai.

2. **Koneksi dan Memasukkan Data:**
   - Membuat koneksi ke MongoDB menggunakan Node.js dan library `mongodb`.
   - Memasukkan data ke dalam koleksi MongoDB dengan menggunakan perintah `insertOne` dan `insertMany`.

3. **Membaca Data dari MongoDB:**
   - Membaca data dari MongoDB menggunakan perintah `findOne` dan `find`.
   - Menerapkan kriteria pencarian untuk membaca data tertentu dari koleksi.

4. **Memperbarui Data di MongoDB:**
   - Memperbarui data di MongoDB dengan perintah `updateOne` dan `updateMany`.
   - Menggunakan kriteria tertentu untuk menentukan data yang akan diperbarui.

5. **Menghapus Data dari MongoDB:**
   - Menghapus data dari MongoDB menggunakan perintah `deleteOne` dan `deleteMany`.
   - Menentukan kriteria penghapusan data dari koleksi.

Setiap langkah melibatkan koneksi ke MongoDB, operasi pada koleksi yang ada di dalamnya, dan manipulasi data. Masing-masing langkah akan memerlukan penggunaan library `mongodb` dan penulisan kode JavaScript untuk menjalankan perintah-perintah yang diberikan.
