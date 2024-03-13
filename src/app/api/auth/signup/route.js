import { isValid } from "@/utilities/string";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, password, lastName, firstName } = await request.json();
  
  if (
    isValid(email) &&
    isValid(firstName) &&
    isValid(lastName) &&
    isValid(password)
  ) {
    return NextResponse.json({ token: "06274b78-d0ab-42b3-b1ec-14121b1d7627" });
  }

  return NextResponse.json(
    { error: "Invalid data submitted" },
    { status: 400 }
  );
};
