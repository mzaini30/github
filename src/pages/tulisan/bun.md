# Mengatasi Bun Error Illegal Instruction

Masalahnya adalah karena di laptop kita belum terinstall Intel SDE. Maka, solusinya adalah jalankan command berikut:

```bash
curl https://gist.githubusercontent.com/fuka-g/afb29296db34d2451cdddcc14dbeef3c/raw/0c9e5d43910cf53b9bd82b358559bb8b75ebbfdc/bun-sde-fix-install_script.sh | bash
source ~/.bashrc
```
