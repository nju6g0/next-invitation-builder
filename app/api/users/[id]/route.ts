import { NextResponse } from "next/server";

// Mock 用戶資料（與 users/route.ts 相同）
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

// GET /api/users/[id] - 獲取單一用戶
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);

  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 300));

  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json({ error: "用戶不存在" }, { status: 404 });
  }

  return NextResponse.json(user);
}

// PUT /api/users/[id] - 更新用戶
export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);
  const body = await request.json();

  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 300));

  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json({ error: "用戶不存在" }, { status: 404 });
  }

  // Mock 更新（實際不會改變 mockUsers）
  const updatedUser = {
    ...user,
    ...body,
    id, // 確保 ID 不變
  };

  return NextResponse.json(updatedUser);
}

// DELETE /api/users/[id] - 刪除用戶
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = parseInt(params.id);

  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 300));

  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json({ error: "用戶不存在" }, { status: 404 });
  }

  return NextResponse.json({ message: "用戶已刪除" });
}
