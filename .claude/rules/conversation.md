# บันทึกการสนทนา: สร้าง Clean Code Rules

วันที่: 2026-08-31

## บริบท
ผู้ใช้ขอให้สร้าง "clean-code rules" สำหรับโปรเจกต์นี้ (React + TypeScript + Vite portfolio site)

## คำถามที่ถามและคำตอบ

1. **รูปแบบไฟล์ที่ต้องการ?**
   → เอกสาร Markdown แยกไฟล์ (ไม่ใช่เพิ่มใน CLAUDE.md หรือทำเป็น ESLint config)

2. **ภาษาของเนื้อหาในไฟล์กฎ?**
   → ภาษาอังกฤษ

3. **ขอบเขตของกฎครอบคลุมแค่ไหน?**
   → หลัก clean code ทั่วไป (naming, ฟังก์ชันเล็ก, หลีกเลี่ยง duplicate ฯลฯ) บวกกับกฎเฉพาะ React/TypeScript ที่เข้ากับโครงสร้างโปรเจกต์นี้ (data-driven JSON, path alias `@/*`, styling ผสมหลายระบบ, responsive ผ่าน `isComp` prop ฯลฯ) — อ้างอิงจากสถาปัตยกรรมที่อธิบายไว้ใน `CLAUDE.md`
   → พร้อมทั้งขอให้สร้างโฟลเดอร์ `rules/` เก็บไฟล์กฎ และให้มีไฟล์ `conversation.md` นี้บันทึกการสนทนาไว้ด้วย

## ผลลัพธ์
- สร้างโฟลเดอร์ `rules/` ที่ root ของโปรเจกต์
- `rules/clean-code.md` — กฎ clean code ทั่วไป + กฎเฉพาะสำหรับ React/TypeScript ของโปรเจกต์นี้
- `rules/conversation.md` — ไฟล์นี้ บันทึกบริบทและการตัดสินใจที่นำไปสู่ `clean-code.md`
