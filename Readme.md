Kompleksitas dari penyelesaian ini adalah O(n), di mana n adalah panjang string input. Alasan kompleksitas ini adalah karena kita melintasi string input sekali (dalam satu iterasi) dan melakukan operasi pada stack. Operasi stack seperti push dan pop memiliki kompleksitas waktu O(1).

Kita melintasi setiap karakter dalam string input tepat sekali, sehingga kompleksitas dari melintasi string adalah O(n). Selain itu, dalam loop, kita melakukan operasi push pada stack jika karakter adalah braket buka, dan melakukan operasi pop pada stack dan membandingkannya dengan karakter tutup jika karakter adalah braket tutup. Semua operasi ini memiliki kompleksitas waktu O(1). Akhirnya, pada akhirnya, kita memeriksa apakah stack kosong untuk menentukan apakah string memiliki bracket yang seimbang.

Jadi, secara keseluruhan, kompleksitas penyelesaian ini adalah O(n), yang merupakan kompleksitas paling rendah yang dapat dicapai untuk menyelesaikan masalah ini.