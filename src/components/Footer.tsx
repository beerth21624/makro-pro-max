import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-white py-12 flex flex-col gap-6
    border-b-8 border-red-600 border-solid 
    "
    >
      <div className="flex justify-center flex-wrap gap-4">
        <p className="text-slate-800 text-md">คำถามที่พบบ่อย</p>
        <p className="text-slate-800 text-md">ติดต่อเรา</p>
        <p className="text-slate-800 text-md">แม็คโครโปรพอยท์</p>
        <p className="text-slate-800 text-md">การตั้งค่าความเป็นส่วนตัว</p>
        <p className="text-slate-800 text-md">ข้อกำหนดและเงื่อนไข</p>
        <p className="text-slate-800 text-md">เข้าร่วม Makro PRO เป็นผู้ขาย</p>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://www.makro.pro/_next/static/media/footer.12f6f76a.png)",
          backgroundRepeat: "repeat-x",
          height: "88px",
          width: "100%",
        }}
      ></div>
      <div className="flex justify-center">
        <p className="text-slate-800 text-sm">
          ลิขสิทธิ์ © 2023 บมจ. ซีพี แอ็กซ์ตร้า สงวนลิขสิทธิ์.
        </p>
      </div>
    </div>
  );
};

export default Footer;
