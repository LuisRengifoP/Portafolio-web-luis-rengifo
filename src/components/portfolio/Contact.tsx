import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Edit3,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE,
  navItems,
  profile,
  socials,
  WHATSAPP_URL,
} from "@/data/portfolio";
import {
  contactSchema,
  type ContactApiResponse,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { usePortfolioInteraction } from "@/lib/portfolio-events";
import { cn } from "@/lib/utils";
import { Reveal, Section } from "./primitives";

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Instagram: Instagram,
  Correo: Mail,
  WhatsApp: MessageCircle,
};

const socialLabels: Record<string, string> = {
  LinkedIn: "Perfil profesional",
  GitHub: "Repositorios",
  Instagram: "Día a día",
  Correo: CONTACT_EMAIL,
  WhatsApp: "Chat directo",
};

const subjectPresets = [
  "Proyecto de Desarrollo Web / Full Stack",
  "Consultoría en Power BI / Business Intelligence",
  "Automatización de procesos / ETL",
  "Oportunidad laboral",
  "Otro asunto",
];

export function Contact() {
  const { contactDraft } = usePortfolioInteraction();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submission, setSubmission] = useState<{
    data: ContactFormValues;
    mode: ContactApiResponse["mode"];
    feedback: string;
  } | null>(null);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: subjectPresets[0],
      message: "",
      website: "",
    },
  });

  const messageValue = watch("message") ?? "";
  const subjectValue = watch("subject") ?? "";

  useEffect(() => {
    if (!contactDraft) return;
    setSubmission(null);
    setValue("subject", contactDraft.subject, { shouldDirty: true, shouldValidate: true });
    if (contactDraft.message) {
      setValue("message", contactDraft.message, { shouldDirty: true, shouldValidate: true });
    }
  }, [contactDraft, setValue]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      toast.success("Correo copiado al portapapeles", { description: CONTACT_EMAIL });
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      toast.error("No se pudo copiar automáticamente", { description: CONTACT_EMAIL });
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await res.json()) as Partial<ContactApiResponse> & { error?: string };

      if (!res.ok || !payload.ok) {
        const fallbackMsg =
          payload.error ||
          "No se pudo completar el envío automático. Puedes enviarlo directamente por Correo o WhatsApp.";
        setSubmission({
          data: values,
          mode: "direct_channel_ready",
          feedback: fallbackMsg,
        });
        toast.warning("Usa un canal directo para enviarlo", { description: fallbackMsg });
        return;
      }

      const mode = payload.mode ?? "direct_channel_ready";
      const feedback =
        payload.message ??
        (mode === "email_sent"
          ? "Tu mensaje fue enviado correctamente. Te responderé pronto."
          : "Elige Correo o WhatsApp para completar el envío de forma inmediata.");

      setSubmission({ data: values, mode, feedback });
      toast.success(
        mode === "email_sent" ? "Mensaje enviado correctamente" : "Mensaje validado y listo",
        { description: feedback },
      );
    } catch {
      const fallbackMsg =
        "No fue posible contactar al servidor. Puedes enviarlo al instante por Correo o WhatsApp.";
      setSubmission({
        data: values,
        mode: "direct_channel_ready",
        feedback: fallbackMsg,
      });
      toast.warning("Envío directo disponible", { description: fallbackMsg });
    }
  };

  const formatBody = (data: ContactFormValues) =>
    `Hola Luis,\n\nSoy ${data.name} (${data.email}).\nAsunto: ${data.subject}\n\n${data.message}`;

  const handleCopyMessage = async () => {
    if (!submission) return;
    try {
      await navigator.clipboard.writeText(formatBody(submission.data));
      setCopiedPayload(true);
      toast.success("Mensaje copiado al portapapeles");
      setTimeout(() => setCopiedPayload(false), 2200);
    } catch {
      toast.error("No se pudo copiar el mensaje");
    }
  };

  const directSocials = socials.filter((s) => s.name !== "Correo");

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Construyamos algo juntos"
      subtitle="¿Tienes una idea, un proyecto o una oportunidad laboral? Escríbeme directamente o prepara tu mensaje desde aquí."
    >
      <Reveal>
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            {/* Left: Direct channels & quick copy */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">
                  Hablemos de tu <span className="text-gradient">próximo proyecto</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Estoy disponible para colaborar en desarrollo de software, APIs REST, bases de
                  datos, procesos ETL y automatización operativa.
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1">
                    <MapPin className="h-3.5 w-3.5 text-brand-purple" aria-hidden />
                    {CONTACT_LOCATION}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1">
                    <Phone className="h-3.5 w-3.5 text-brand-purple" aria-hidden />
                    {CONTACT_PHONE}
                  </span>
                </div>

                {/* Highlighted Email Copy Card */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border-strong bg-white/[0.04] p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-muted-foreground">Correo directo</p>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="focus-ring block truncate rounded text-sm font-semibold text-foreground hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-secondary focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Canales disponibles
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {directSocials.map((s) => {
                    const Icon = socialIcons[s.name] ?? ArrowUpRight;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring group flex items-center gap-3 rounded-2xl border border-border bg-white/[0.03] p-3.5 transition-all hover:-translate-y-0.5 hover:border-brand-purple/60 hover:bg-white/[0.05]"
                      >
                        <span className="bg-gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-foreground">
                            {s.name}
                          </span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {socialLabels[s.name] ?? "Conectemos"}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Validated Interactive Form */}
            <div className="glass-elevated rounded-2xl p-5 sm:p-7">
              {submission ? (
                <div className="flex h-full flex-col justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {submission.mode === "email_sent"
                        ? "Mensaje enviado por correo"
                        : "Mensaje validado y listo"}
                    </div>
                    <h4 className="mt-4 font-display text-xl font-semibold text-foreground">
                      {submission.mode === "email_sent"
                        ? "¡Gracias por escribirme!"
                        : "Elige cómo quieres enviarlo"}
                    </h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">{submission.feedback}</p>

                    <div className="mt-5 space-y-2.5 rounded-2xl border border-border bg-background/50 p-4 text-sm">
                      <p>
                        <span className="text-muted-foreground">De:</span>{" "}
                        <span className="font-medium text-foreground">
                          {submission.data.name} ({submission.data.email})
                        </span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Asunto:</span>{" "}
                        <span className="font-medium text-foreground">
                          {submission.data.subject}
                        </span>
                      </p>
                      <p className="border-t border-border pt-2.5 whitespace-pre-line text-muted-foreground">
                        {submission.data.message}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                          submission.data.subject,
                        )}&body=${encodeURIComponent(formatBody(submission.data))}`}
                        className="btn-primary focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        {submission.mode === "email_sent" ? "Abrir en Correo" : "Enviar por Correo"}
                      </a>
                      <a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent(formatBody(submission.data))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium"
                      >
                        <MessageCircle className="h-4 w-4 text-emerald-400" />
                        Enviar por WhatsApp
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="btn-ghost focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                      >
                        {copiedPayload ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Texto copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copiar mensaje</span>
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSubmission(null)}
                          className="btn-ghost focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmission(null);
                            reset();
                          }}
                          className="btn-ghost focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                          Nuevo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                    {...register("website")}
                  />
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      Enviar un mensaje
                    </h4>
                    {isDirty && (
                      <button
                        type="button"
                        onClick={() => {
                          reset();
                          toast("Formulario limpiado");
                        }}
                        className="btn-ghost focus-ring inline-flex cursor-pointer items-center gap-1 rounded-lg px-2.5 py-1 text-xs"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Limpiar
                      </button>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-xs font-medium text-foreground"
                      >
                        Nombre completo <span className="text-brand-pink">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={cn(
                          "focus-ring h-10 w-full rounded-xl border bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70",
                          errors.name ? "border-destructive" : "border-border-strong",
                        )}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-400"
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-medium text-foreground"
                      >
                        Correo electrónico <span className="text-brand-pink">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder="nombre@empresa.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={cn(
                          "focus-ring h-10 w-full rounded-xl border bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70",
                          errors.email ? "border-destructive" : "border-border-strong",
                        )}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-400"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Asunto <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Motivo de tu mensaje"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                      className={cn(
                        "focus-ring h-10 w-full rounded-xl border bg-background/60 px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70",
                        errors.subject ? "border-destructive" : "border-border-strong",
                      )}
                      {...register("subject")}
                    />
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {subjectPresets.slice(0, 4).map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() =>
                            setValue("subject", preset, { shouldDirty: true, shouldValidate: true })
                          }
                          className={cn(
                            "focus-ring cursor-pointer rounded-full border px-2.5 py-1 text-[11px] transition-colors",
                            subjectValue === preset
                              ? "border-brand-purple/60 bg-brand-purple/20 text-foreground"
                              : "border-border bg-white/[0.02] text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-medium text-foreground"
                      >
                        Mensaje <span className="text-brand-pink">*</span>
                      </label>
                      <span
                        className={cn(
                          "text-[11px]",
                          messageValue.length > 550 ? "text-amber-300" : "text-muted-foreground",
                        )}
                      >
                        {messageValue.length}/600
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      maxLength={600}
                      placeholder="Cuéntame sobre tu proyecto, necesidad técnica o propuesta..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={cn(
                        "focus-ring w-full resize-none rounded-xl border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70",
                        errors.message ? "border-destructive" : "border-border-strong",
                      )}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-400"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary focus-ring inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <a
            href="#inicio"
            className="focus-ring inline-block rounded font-display text-xl font-semibold"
          >
            {profile.name}
          </a>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {profile.roles.slice(0, 4).map((r) => (
              <span key={r} className="rounded-full border border-border px-2.5 py-0.5">
                {r}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground italic">
            “Transformando datos en soluciones tecnológicas de alto impacto.”
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 md:items-end">
          <nav
            aria-label="Navegación de pie de página"
            className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="focus-ring rounded text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.name}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            © 2026 {profile.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
