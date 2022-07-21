# Membuat File HTML + Windi CSS + Alpine JS

Basic yang paling mendasar dalam pembuatan website dari segi frontend-nya adalah HTML, CSS, dan JS. Jadi, kalau belum paham fundamental ini, memang disarankan untuk mempelajarinya terlebih dahulu sebelum masuk ke dunia framework frontend seperti React dan Vue.

Jadi, kali ini kita akan latihan membuat HTML sederhana yang akan dibantu Windi dalam hal style-nya dan akan dibantu Alpine dalam hal behavior.

Oke, kita mulai.

Siapkan dulu sebuah folder untuk latihan kita, lalu buat file `index.html` yang isinya adalah seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Oke, basic banget ya...

Sekarang kita coba tambahkan Alpine.

Caranya adalah kita download dulu Alpine dengan perintah berikut:

```bash
wget https://unpkg.com/alpinejs
mv alpinejs alpine.js
```

Lalu, di `index.html` tadi, di dalam `<head/>`, tambahkan ini:

```html
<script src="alpine.js" defer></script>
```

Sekarang kita tambahkan Windi.

Untuk menambahkan Windi, pastikan kamu udah punya Node JS. Kalau belum punya, install dulu.

Lalu, install Windi di global dengan perintah:

```bash
npm i -g windicss
```

Lalu, di folder project kita tadi, jalankan Windi mode dev dengan perintah:

```bash
windicss index.html -dt
```

Terus, di `index.html`, tambahkan ini di dalam `<head/>`:

```html
<link rel="stylesheet" href="windi.css" />
```

Maka, untuk sementara, file `index.html` kita menjadi seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="alpine.js" defer></script>
    <link rel="stylesheet" href="windi.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Lalu, kita jalankan file `index.html` ini dengan localhost. Kalau aku sih, suka pakai `five-server`. Kalau kamu ingin menggunakannya juga, install dulu `five-server` dengan perintah:

```bash
npm i -g five-server
```

Lalu, jalankan dengan `five-server`.

Nah sekarang kita coba deh edit-edit file `index.html` ini. Di sini, aku edit-edit menjadi seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="alpine.js" defer></script>
    <link rel="stylesheet" href="windi.css" />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div
      class="p-5"
      x-data="{
      nama: ''
    }"
    >
      <p class="mb-2">Masukkan namamu di bawah ini:</p>
      <input
        class="focus:outline-none border border-slate-500 mb-2 rounded p-1 text-sm block"
        type="text"
        x-model="nama"
      />
      <p class="italic" x-show="nama">Hai <span x-text="nama"></span></p>
    </div>
  </body>
</html>
```

Kalau sudah selesai ngedit, kita matikan proses `five-server` tadi dan matikan pula proses Windi tadi. Lalu, kita generate file Windi yang minified dengan perintah:

```bash
windicss index.html -tm
```

Sudah. Simpel banget
