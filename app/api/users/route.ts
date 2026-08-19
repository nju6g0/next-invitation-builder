import { NextResponse } from "next/server";

// Mock 用戶資料
const mockUsers = [
  {
    id: 1,
    name: "張小明",
    email: "xiaoming@example.com",
    company: { name: "科技公司 A" },
  },
  {
    id: 2,
    name: "李小華",
    email: "xiaohua@example.com",
    company: { name: "設計工作室 B" },
  },
  {
    id: 3,
    name: "王大明",
    email: "daming@example.com",
    company: { name: "顧問公司 C" },
  },
  {
    id: 4,
    name: "陳美麗",
    email: "meili@example.com",
    company: { name: "行銷公司 D" },
  },
  {
    id: 5,
    name: "林志強",
    email: "zhiqiang@example.com",
    company: { name: "軟體公司 E" },
  },
];

// GET /api/users - 獲取所有用戶
export async function GET() {
  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(mockUsers);
}

// POST /api/users - 創建新用戶
export async function POST(request: Request) {
  const body = await request.json();

  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 300));

  const newUser = {
    id: mockUsers.length + 1,
    name: body.name || "新用戶",
    email: body.email || "newuser@example.com",
    company: body.company || { name: "新公司" },
  };

  // 注意：這只是 Mock，實際不會真的加入到 mockUsers
  return NextResponse.json(newUser, { status: 201 });
}
