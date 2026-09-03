import React from "react";
import { Tag } from "antd";

import { ComparisonTable } from "@/interfaces/globalInterfaces";

// ตารางเทียบตัวเลือกแบบ criterion-first (เกณฑ์เป็นแถว, ตัวเลือกเป็นคอลัมน์)
// พื้นหลังสว่างตั้งใจตัดกับธีมมืดของหน้า project detail — ให้อ่านออกว่า
// เป็น "หลักฐาน/ข้อมูลดิบ" คนละชั้นกับข้อความบรรยายรอบ ๆ
//
// overflow-x-auto ครอบไว้เพราะตารางกว้าง กันไม่ให้ทั้งหน้า scroll แนวนอน
// ตอนเปิดจากมือถือ (ตารางเลื่อนในกรอบตัวเองแทน)
const VendorComparisonTable: React.FC<{ table: ComparisonTable }> = ({ table }) => (
  <div className="overflow-x-auto rounded-xl" style={{ background: "#f5f4f0" }}>
    <table className="w-full text-sm" style={{ borderCollapse: "collapse", color: "#111" }}>
      <thead>
        <tr>
          <th className="text-left p-3 font-semibold" style={{ background: "#e2e0da", minWidth: 170 }}>
            Evaluation Criteria
          </th>
          {table.columns.map((column, i) => (
            <th
              key={column}
              className="text-left p-3 font-semibold whitespace-nowrap"
              style={{ background: i === table.winnerColumnIndex ? "#cfe4ff" : "#e2e0da", minWidth: 190 }}
            >
              {column}
              {i === table.winnerColumnIndex && (
                <Tag color="blue" className="ml-2">
                  Selected
                </Tag>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row.criterion} style={{ borderTop: "1px solid #d9d7cf" }}>
            <td className="p-3 font-medium">{row.criterion}</td>
            {row.values.map((value, i) => (
              <td
                key={i}
                className="p-3"
                style={{
                  background: i === table.winnerColumnIndex ? "#eaf3ff" : undefined,
                  fontWeight: i === table.winnerColumnIndex ? 600 : 400,
                }}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default VendorComparisonTable;
