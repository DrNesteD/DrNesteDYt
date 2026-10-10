# VMAX — شبکه هوش ماینکرافت

پلتفرم خبری و جامعه ماینکرافت فارسی با هویت بصری اسکین سیاه-سفید و بنر الکتریک-آبی.

## وضعیت فعلی (فاز ۱)

✅ اسکلت Next.js 15 + TypeScript + Tailwind  
✅ سیستم طراحی (رنگ‌ها، تایپوگرافی RTL با Vazirmatn، انیمیشن‌ها)  
✅ هدر و فوتر ریسپانسیو RTL  
✅ صفحه اصلی سینمایی با بنر و اسکین اصلی شما  
✅ دارایی‌های بصری در `public/assets/`  
✅ `.env.example` برای پیکربندی امن  

⏳ در حال نصب پکیج‌های باقی‌مانده (lucide-react, framer-motion, supabase, zod)  
⏳ فاز ۲: صفحات عمومی (اخبار، آپدیت، ویدیو، آموزش، دانلود، جامعه)  
⏳ فاز ۳: دیتابیس + Auth + RLS + bootstrap owner امن  
⏳ فاز ۴: پنل ادمین + CMS + تیکتینگ  
⏳ فاز ۵: تست‌ها + SEO + دیپلوی  

## اجرای محلی

```bash
cd vmax-platform
cp .env.example .env.local
# مقادیر Supabase را پر کنید
npm install
npm run dev
```

سپس به http://localhost:3000 بروید.

## هویت بصری

- پس‌زمینه: `#05070b` (void)
- اکسنت: `#1a9bff` (ice blue)
- اسکین و بنر شما در `public/assets/`

## نکات امنیتی مهم

- رمز `DRNESTEDWEBPASS` هرگز در کد قرار نمی‌گیرد.
- از `INITIAL_OWNER_BOOTSTRAP_SECRET` فقط یک‌بار برای ایجاد owner استفاده می‌شود.
- Service role key فقط سمت سرور است.
