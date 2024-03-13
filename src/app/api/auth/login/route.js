import { isValid } from "@/utilities/string";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password } = await request.json();

  if (email !== 'john@doe.com' || password !== '123123123') {
    return NextResponse.json({ error: "Invalid credentials"}, { status: 400 });
  }

  return NextResponse.json({ token: "06274b78-d0ab-42b3-b1ec-14121b1d7627" });
};
