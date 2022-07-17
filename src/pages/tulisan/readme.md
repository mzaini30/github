# Auto Sisipkan Blog di README

Jadi, sekarang di setiap repo Githubku, auto sisipkan blog. Caranya seperti ini:

Di `README.md`, sisipkan ini:

```html
<!-- blog start -->
<!-- blog end -->
```

Di `.gitignore`, tambahkan `blog`.

Lalu, di `.github/workflows/blog.yml`, isinya ini:

```yaml
name: Sisipkan blog

on:
  push:
    branches: [master]
  schedule:
    - cron: "0 0 * * *"

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [15.x]

    steps:
      - uses: actions/checkout@v3
      - run: wget -nc https://raw.githack.com/mzaini30/github-blog-golang/master/blog
      - run: ./blog
      - uses: EndBug/add-and-commit@v7
        with:
          message: "tambahkan blog di readme"
          default_author: github_actions
          branch: master
```
