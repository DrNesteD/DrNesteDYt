# VMAX / DRNESTED — Minecraft Intelligence Network

پروژه‌ی وب فارسی و راست‌چین برای اخبار، آموزش‌ها و جامعه‌ی ماینکرفت. هویت بصری اولیه با رنگ‌های مشکی، سرمه‌ای و آبی یخی پیاده‌سازی شده است. این مخزن یک پایه‌ی اجرایی اولیه است؛ همه‌ی قابلیت‌های سند محصول هنوز کامل نشده‌اند.

## وضعیت واقعی قابلیت‌ها
- **پیاده‌سازی اولیه:** پوسته‌ی responsive و RTL، صفحه خانه، فهرست خبرها، نمایش خبر منتشرشده، صفحه ورود Supabase، داشبورد محدود مدیر با آمار دیتابیس، مسیر سلامت، طرح اولیه دیتابیس و RLS.
- **نیازمند پیکربندی خارجی:** پروژه Supabase، متغیرهای محیطی، bucketهای Storage، provisioning حساب owner، OAuth، دامنه و استقرار.
- **هنوز پیاده‌سازی نشده:** CMS کامل، provisioning یک‌باره owner، ثبت‌نام و بازیابی رمز، UI تیکتینگ، آپلود امن، جست‌وجوی کامل، تنظیمات سایت، moderation، شمارش بازدید ضدتقلب و همه routeهای محتوایی.
- **تست نشده:** build نهایی و تست‌های مرورگر؛ اجرای آن‌ها نیازمند نصب وابستگی‌هاست.

## پیش‌نیازها و اجرا
نیازمند Node.js 20+، npm و پروژه Supabase هستی.

```bash
npm install
copy .env.example .env.local
npm run dev
```

مقادیر واقعی Supabase را در `.env.local` قرار بده. سپس فایل `supabase/migrations/0001_initial_schema.sql` را روی دیتابیس تازه با Supabase CLI یا SQL Editor اجرا کن. آدرس محلی `http://localhost:3000` است.

## متغیرهای محیطی
- `NEXT_PUBLIC_SITE_URL`: آدرس سایت، در تولید دامنه واقعی.
- `NEXT_PUBLIC_SUPABASE_URL`: URL پروژه.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: کلید publishable/anon برای SDK مرورگر همراه RLS.
- `SUPABASE_SERVICE_ROLE_KEY`: راز سمت سرور؛ در نسخه فعلی مصرف نمی‌شود و هرگز نباید به کلاینت برسد.
- `INITIAL_OWNER_BOOTSTRAP_SECRET`: فقط placeholder برای provisioning آینده؛ در نسخه فعلی endpointی این راز را مصرف نمی‌کند و setup خودکار owner ساخته نشده است.

## اسکین و بنر
فایل‌های اصلی را در `public/assets/drnested-skin.png` و `public/assets/drnested-banner.png` قرار بده. نسخه فعلی از گرافیک CSS استفاده می‌کند؛ فایل‌های اصلی هنوز به UI متصل نشده‌اند.

## امنیت Supabase
RLS و سیاست‌های اولیه در migration قرار دارند، اما پیش از production باید همه policyها، Storage، role assignment و مسیرهای سروری بازبینی و با کاربران anon و authenticated آزمایش شوند. trigger ثبت‌نام فقط نقش `user` می‌دهد. provisioning امن owner هنوز تکمیل نشده است. bucket و policy Storage هنوز تعریف نشده‌اند؛ آپلود را فعال نکن.

## تست‌ها
```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```
هیچ تستی تا اجرای واقعی نباید موفق اعلام شود.

## Deploy و دامنه
1. مخزن GitHub بساز و فقط فایل‌های غیرحساس را push کن.
2. پروژه را به Vercel یا میزبان سازگار با Next.js وصل کن.
3. secrets را در تنظیمات محیطی میزبان ثبت کن؛ `.env.local` را commit نکن.
4. callback/redirect URLهای Supabase را با دامنه production تنظیم کن.
5. دامنه را به میزبان اضافه کن و رکوردهای DNS ارائه‌شده توسط میزبان را تنظیم کن.
6. HTTPS، Auth redirects، SEO و صفحات عمومی را بررسی کن.

GitHub Pages به‌تنهایی برای این معماری full-stack مناسب نیست. اگر کلیدی افشا شد، آن را از provider فوراً rotate/revoke کن، متغیرها را عوض کن و deploy مجدد انجام بده؛ حذف فایل از commit اخیر کافی نیست.
