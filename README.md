# Jelantah CRM Form

Form order sederhana untuk JelantahGo CRM. Memungkinkan pengguna untuk paste teks order dari WhatsApp, di-parse secara otomatis menggunakan AI (Gemini), dan dikirim ke Google Sheets melalui Webhook.

## Fitur Utama

- **AI Parsing**: Ekstrak data (WhatsApp, Nama, Jumlah, Harga, Alamat, dll) secara otomatis menggunakan Google Gemini AI.
- **Preview & Copy**: Buat ringkasan order format WhatsApp dengan sekali klik.
- **Integrasi Google Sheets**: Kirim data langsung ke spreadsheet via Google Apps Script Webhook.
- **Penyimpanan Lokal**: API Key dan Webhook URL disimpan di localStorage browser (aman & privat).

## Deployment

Proyek ini siap di-deploy ke **Vercel**:

1. Hubungkan repository ini ke akun Vercel Anda.
2. Vercel akan secara otomatis mendeteksi file `index.html`.
3. Gunakan URL yang diberikan Vercel untuk mengakses form.

## Konfigurasi

Saat pertama kali dibuka, klik ikon ⚙️ **Pengaturan** untuk memasukkan:
1. **Gemini API Key**
2. **URL Webhook Google Apps Script**
