import dbConnect from "@/lib/dbConnect";
import Contact from "@/schema/Contact";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await dbConnect();
  const contact = await Contact.findById(id);
  return NextResponse.json(contact);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  await dbConnect();
  const contact = await request.json();
  await Contact.findByIdAndUpdate(id, contact);
  return NextResponse.json({ message: "Contact Updated" }, { status: 200 });
}
