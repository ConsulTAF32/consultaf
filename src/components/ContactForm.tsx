"use client";

import { useState } from "react";

const MAX = { name: 50, email: 70, subject: 70, message: 1000 };

type Status = "idle" | "sending" | "ok" | "error";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value.slice(0, MAX[field]) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", "bot-field": botField, ...form }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="card flex flex-col items-start gap-3">
        <span className="font-display text-2xl font-extrabold text-navy-800">
          Mulțumesc pentru mesaj!
        </span>
        <p className="text-slate-600">
          Am primit mesajul tău și revin cât pot de repede. Pentru un răspuns mai rapid,
          îmi poți scrie și pe WhatsApp.
        </p>
        <button type="button" className="btn-outline" onClick={() => setStatus("idle")}>
          Trimite alt mesaj
        </button>
      </div>
    );
  }

  return (
    <form
      name="contact-form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="card space-y-4"
    >
      {/* Honeypot: hidden from users, bots tend to fill it in. */}
      <p className="hidden">
        <label>
          Nu completa acest câmp:{" "}
          <input
            name="bot-field"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <Field label="Nume" count={`${form.name.length}/${MAX.name}`}>
        <input
          className="form-input"
          name="name"
          type="text"
          placeholder="Numele tău"
          value={form.name}
          onChange={set("name")}
          maxLength={MAX.name}
          required
        />
      </Field>

      <Field label="Email" count={`${form.email.length}/${MAX.email}`}>
        <input
          className="form-input"
          name="email"
          type="email"
          placeholder="email@exemplu.ro"
          value={form.email}
          onChange={set("email")}
          maxLength={MAX.email}
          required
        />
      </Field>

      <Field label="Subiect" count={`${form.subject.length}/${MAX.subject}`}>
        <input
          className="form-input"
          name="subject"
          type="text"
          placeholder="Despre ce e vorba"
          value={form.subject}
          onChange={set("subject")}
          maxLength={MAX.subject}
          required
        />
      </Field>

      <Field label="Mesaj" count={`${form.message.length}/${MAX.message}`}>
        <textarea
          className="form-input"
          name="message"
          rows={6}
          placeholder="Spune-mi pe scurt cum stă firma ta. Poți lăsa și un număr de telefon dacă preferi să te sun."
          value={form.message}
          onChange={set("message")}
          maxLength={MAX.message}
          required
        />
      </Field>

      <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
        {status === "sending" ? "Se trimite…" : "Trimite mesajul"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          A apărut o eroare la trimitere. Te rog încearcă din nou sau scrie-mi direct pe WhatsApp.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  count,
  children,
}: {
  label: string;
  count: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center justify-between text-sm font-medium text-navy-800">
        {label}
        <span className="text-xs font-normal text-slate-400">{count}</span>
      </span>
      {children}
    </label>
  );
}
