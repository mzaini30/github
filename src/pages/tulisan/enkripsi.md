# Cara Enkripsi File

Ketika membuat repositori public, terkadang ada beberapa file yang harus disembunyikan. Contohnya adalah file `.env` yang merupakan file konfigurasi aplikasi kita. Atau, kita menuliskan password di file `catatan.txt`. Bagaimana cara menyembunyikannya?

Solusi yang pertama adalah menjadikan repositori tersebut private. Tapi, kelemahannya adalah hanya orang dengan akses ke repositori itu yang bisa membukanya. Public nggak bisa mengetahuinya.

Solusi kedua adalah memasukkannya ke list `.gitignore`. Dengan cara ini, file tersebut nggak akan ikut terupload ke Github. Tapi, kelemahannya adalah kita harus menyimpan salinan file tersebut di tempat lain, jadi agak repot sih.

Solusi ketiga, yang saat ini kugunakan adalah menggunakan `kunci`. Dengan `kunci`, file akan terenkripsi. Misalnya aja, file `.env` akan terenkripsi dan berubah menjadi `.env.rahasia`.

Cara pakainya, cukup mudah. Pertama, pastikan dulu bahwa kamu punya Node JS. Kalau sudah, install dengan `npm i -g kunci`.

Lalu, di folder tempat file yang ingin dikunci, buat file `kunci.txt` berisi dengan password kuncinya. Contoh: `kucing`.

Lalu, kita masukkan ke list, file yang mau dikunci dengan perintah seperti ini:

```bash
kunci .env
kunci rahasia.txt
```

Terus, untuk mengunci semua file yang di list, jalankan perintah `kunci`.

Otomatis, semua file yang di list, akan dienkripsi dan ekstensinya akan ketambahan `.rahasia`.

```
.env.rahasia
rahasia.txt.rahasia
```

Untuk membuka semua file yang terenkripsi, jalankan perintah `buka`.
