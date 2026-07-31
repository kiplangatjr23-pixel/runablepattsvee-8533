import { useState } from "react";
import { CheckCircle2, Loader2, Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { EVENT_TYPES, SITE } from "../../lib/site";
import { useCreateBooking } from "../../queries/bookings";

const empty = {
  name: "",
  email: "",
  phone: "",
  eventType: EVENT_TYPES[0],
  eventDate: "",
  guests: "",
  message: "",
};

export function Booking() {
  const [form, setForm] = useState(empty);
  const createBooking = useCreateBooking();
  const done = createBooking.isSuccess;

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    createBooking.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      eventType: form.eventType,
      eventDate: form.eventDate || undefined,
      guests: form.guests ? Number(form.guests) : undefined,
      message: form.message.trim() || undefined,
    });
  };

  const field =
    "w-full rounded-xl border border-gold/15 bg-ink/50 px-4 py-3 text-sm text-cream placeholder:text-muted/60 outline-none transition-colors focus:border-gold/60";

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
      {/* Contact details */}
      <div className="flex flex-col justify-center">
        <p className="eyebrow">Get in touch</p>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          Let's plan your <span className="gold-text">perfect event</span>
        </h2>
        <p className="mt-5 max-w-md text-cream/70">
          Tell us about your occasion and we'll craft a menu and quote made just
          for you. We usually respond within a few hours.
        </p>

        <div className="mt-9 flex flex-col gap-5">
          <a href={SITE.phoneHref} className="group flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-surface-2 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
              <Phone size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">Call us</span>
              <span className="text-cream group-hover:text-gold">{SITE.phone}</span>
            </span>
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-surface-2 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
              <MessageCircle size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">WhatsApp</span>
              <span className="text-cream group-hover:text-gold">Chat with us instantly</span>
            </span>
          </a>
          <a href={SITE.locationMap} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-surface-2 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
              <MapPin size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">Find us</span>
              <span className="text-cream group-hover:text-gold">{SITE.location}</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/25 bg-surface-2 text-gold">
              <Mail size={18} />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.2em] text-muted">Email</span>
              <span className="text-cream">{SITE.email}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="card-hairline rounded-3xl p-6 md:p-8">
        {done ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <CheckCircle2 size={56} className="text-teal-bright" />
            <h3 className="mt-6 font-serif text-3xl text-cream">Request received</h3>
            <p className="mt-3 max-w-sm text-cream/70">
              Thank you, {form.name.split(" ")[0] || "friend"}. Our events team
              will reach out shortly to bring your vision to life.
            </p>
            <button
              onClick={() => {
                setForm(empty);
                createBooking.reset();
              }}
              className="mt-8 rounded-full border border-gold/40 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name" className={field} value={form.name} onChange={set("name")} />
              <input required type="email" placeholder="Email address" className={field} value={form.email} onChange={set("email")} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Phone number" className={field} value={form.phone} onChange={set("phone")} />
              <select className={field} value={form.eventType} onChange={set("eventType")}>
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-surface-2">
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="pl-1 text-xs uppercase tracking-[0.15em] text-muted">Event date</span>
                <input type="date" className={field} value={form.eventDate} onChange={set("eventDate")} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="pl-1 text-xs uppercase tracking-[0.15em] text-muted">Guests</span>
                <input type="number" min={1} placeholder="e.g. 150" className={field} value={form.guests} onChange={set("guests")} />
              </label>
            </div>
            <textarea
              rows={4}
              placeholder="Tell us about your event, menu ideas or special requests…"
              className={`${field} resize-none`}
              value={form.message}
              onChange={set("message")}
            />
            {createBooking.isError && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
            <button
              type="submit"
              disabled={createBooking.isPending}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-ink transition-all hover:bg-gold-bright hover:shadow-[0_0_32px_-6px_rgba(201,162,75,0.7)] disabled:opacity-60"
            >
              {createBooking.isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending…
                </>
              ) : (
                "Request a Quote"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
