# Business Flow

Platform manajemen operasional & keuangan bisnis (Next.js 16 + TypeScript strict + Drizzle + PostgreSQL / Neon).
Login dengan akun Google (Better Auth, sesi di database Neon) + keanggotaan workspace; perangkat tetap terdaftar (cookie HttpOnly) dan dikunci dengan PIN Argon2id per tab. Tanpa password/OTP/magic link. Panduan: `PANDUAN_DEPLOY_PEMILIK.md`, `docs/deployment/GOOGLE_OAUTH_SETUP.md`.

## Konfigurasi

Aplikasi hanya membutuhkan **1 environment variable**:

- `DATABASE_URL` — connection string Neon PostgreSQL (mode pooled `-pooler` dianjurkan).

## Menjalankan Secara Lokal

```bash
npm install
cp .env.example .env
# Isi DATABASE_URL di .env
npm run db:migrate
npm run db:check
npm run dev
```

## Verifikasi & Pengujian

- `npm run verify` — menjalankan `typecheck`, `lint`, `test` (unit tanpa DB), `build` (tanpa DB), dan `npm audit --omit=dev`.
- `npm run test:integration` — menjalankan tes integrasi & RLS terhadap PostgreSQL.
- `npm run test:e2e` — menjalankan Playwright E2E & audit aksesibilitas `@axe-core/playwright`.
- `npm run smoke` — menjalankan smoke test API terhadap server yang berjalan.

## Dokumentasi

- [Panduan Deploy Neon & Vercel](docs/deployment/MANUAL_DEPLOYMENT_GUIDE.md)
- [Setup Neon](docs/deployment/NEON_SETUP.md)
- [Build Android (Capacitor)](docs/deployment/ANDROID_BUILD.md)
- [Keamanan PIN](docs/security/PIN_SECURITY.md)
- [Model Ancaman](docs/security/THREAT_MODEL.md)
- [Isolasi Tenant & RLS](docs/database/TENANT_ISOLATION.md)
- [Integritas Keuangan](docs/implementation/FINANCIAL_INTEGRITY.md)
- [Laporan Akhir & Status Gate](docs/implementation/FINAL_REPORT.md)
