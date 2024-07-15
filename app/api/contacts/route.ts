import dbConnect from "@/lib/dbConnect";
import Contact from "@/schema/Contact";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const contacts = await Contact.find();
  return NextResponse.json(contacts, { status: 200 });
}

export async function POST(request: NextRequest) {
  await dbConnect();
  const contact = await request.json();
  await Contact.create(contact);
  return NextResponse.json(contact, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  await dbConnect();
  const id = request.nextUrl.searchParams.get("id");
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ message: "Contact Deleted" }, { status: 200 });
}
