# Otomatis "go fmt" Setiap Save

Install extension "Run on Save".

Lalu, di `settings.json`, tambahkan:

```json
{
  "emeraldwalk.runonsave": {
    "commands": [
      {
        "match": "\\.go$",
        "cmd": "go fmt ${file}"
      }
    ]
  }
}
```
