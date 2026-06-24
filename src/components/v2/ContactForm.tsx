"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder-white/35 outline-none transition focus:border-white/30 focus:bg-white/[0.07]";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow mb-2 block !text-[9.5px] !text-white/55">{children}</span>;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
        <div className="node-ring mb-5">
          <span className="text-[15px] text-white/85">✓</span>
        </div>
        <div className="text-[20px] font-black tracking-[-0.02em] text-white">Message sent.</div>
        <p className="mt-2 max-w-[34ch] text-[14.5px] leading-[1.6] text-white/55">
          Thanks for reaching out. You&apos;ll hear back from one of us within a business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* honeypot, hidden from people */}
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <Label>Name</Label>
          <input name="name" required placeholder="Jane Okafor" className={inputCls} />
        </label>
        <label className="block">
          <Label>Work email</Label>
          <input name="email" type="email" required placeholder="jane@org.com" className={inputCls} />
        </label>
      </div>
      <label className="block">
        <Label>Company / org</Label>
        <input name="company" placeholder="Where you work" className={inputCls} />
      </label>
      <label className="block">
        <Label>What are you trying to build or fix?</Label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="A sentence or two about the data or AI problem."
          className={`${inputCls} resize-none`}
        />
      </label>
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="submit" disabled={status === "submitting"} className="cap cap-red disabled:opacity-60">
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <span className="eyebrow !text-[9.5px]">Or email info@kineticsbi.com</span>
      </div>
      {status === "error" && (
        <p className="text-[13.5px] leading-[1.5] text-red/90">
          {error} You can also reach us directly at{" "}
          <a className="underline" href="mailto:info@kineticsbi.com">
            info@kineticsbi.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
