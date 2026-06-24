import { NextResponse } from "next/server";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const company = (data.company || "").trim();
  const message = (data.message || "").trim();

  // Honeypot: real people never fill this. Accept silently and drop.
  if (data.company_url) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "info@kineticsbi.com";
  const from = process.env.RESEND_FROM || "Kinetic <onboarding@resend.dev>";

  if (!key) {
    // Not configured yet. Don't pretend it sent.
    console.warn("[contact] RESEND_API_KEY missing. Submission dropped:", { name, email, company });
    return NextResponse.json(
      { error: "Our form isn't wired to email yet." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry from ${name}${company ? ` · ${company}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, detail);
    return NextResponse.json({ error: "Couldn't send right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
