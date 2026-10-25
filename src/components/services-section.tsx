import { CopyButton } from "./copy-button";
import { SectionHeading } from "./section-heading";
import { TrackedMailLink } from "./tracked-mail-link";
import type { Locale, ServicesDictionary } from "@/i18n/dictionaries";

/** 依頼テンプレート入りの mailto リンクを組み立てる。topic はメニュー別の相談時に「ご依頼内容」へ差し込む */
function buildMailto(email: string, mail: ServicesDictionary["mail"], topic?: string) {
  const subject = topic ? `${mail.subject}${mail.subjectSeparator}${topic}` : mail.subject;
  const body = mail.fields
    .map((field) => `${field.label}${mail.fieldSeparator}${field.topic && topic ? topic : ""}`)
    .join("\r\n\r\n");
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${body}\r\n`)}`;
}

export function ServicesSection({
  dict,
  email,
  locale,
}: {
  dict: ServicesDictionary;
  email: string;
  locale: Locale;
}) {
  return (
    <section>
      <SectionHeading id="services" sub={dict.sub} title={dict.title} />
      <p className="mt-6 max-w-2xl leading-relaxed">{dict.lead}</p>

      {/* 提供メニュー */}
      <div className="mt-8 flex flex-col gap-5">
        {dict.menus.map((menu) => (
          <article
            key={menu.id}
            className="border border-line border-l-4 border-l-mint bg-surface p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-8">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-heading">{menu.title}</h3>
                <p className="mt-3 leading-relaxed">{menu.description}</p>
                <p className="mt-4 text-sm font-medium text-muted">{dict.examplesLabel}</p>
                <ul className="mt-2 flex flex-col gap-1 text-sm">
                  {menu.examples.map((example) => (
                    <li key={example} className="flex gap-2">
                      <span className="text-accent" aria-hidden="true">
                        –
                      </span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 bg-inset px-4 py-3 sm:w-60 sm:self-start">
                <p className="text-xs font-medium tracking-wide text-muted">{dict.priceLabel}</p>
                <dl>
                  {menu.prices.map((price) => (
                    <div key={price.label} className="mt-2">
                      <dt className="text-xs text-muted">{price.label}</dt>
                      <dd className="text-lg font-bold text-heading">{price.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <TrackedMailLink
              href={buildMailto(email, dict.mail, menu.title)}
              track={{ method: "mail", placement: "service_menu", service: menu.id, locale }}
              className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
            >
              {dict.menuCta} →
            </TrackedMailLink>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">{dict.priceNote}</p>

      {/* 稼働・進め方 */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-heading">{dict.termsTitle}</h3>
        <dl className="mt-4 border border-line bg-surface">
          {dict.terms.map((term, i) => (
            <div
              key={term.label}
              className={`flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-6 ${i > 0 ? "border-t border-line" : ""}`}
            >
              <dt className="shrink-0 text-sm text-muted sm:w-28 sm:pt-0.5">{term.label}</dt>
              <dd>{term.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ご依頼の流れ */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-heading">{dict.flowTitle}</h3>
        {/* 狭い画面では番号を左に置いた横並びにして縦の長さを抑える */}
        <ol className="mt-4 grid gap-2 sm:grid-cols-4 sm:gap-3">
          {dict.flow.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-3 border border-line bg-surface px-4 py-3 sm:block sm:p-4"
            >
              <span
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center bg-mint font-mono text-sm font-bold text-navy"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <p className="font-bold text-heading sm:mt-3">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 問い合わせ */}
      <div className="mt-12 bg-navy p-6 text-white sm:p-8 dark:border dark:border-line">
        <h3 className="text-xl font-bold">{dict.cta.title}</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-white/85">{dict.cta.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <TrackedMailLink
            href={buildMailto(email, dict.mail)}
            track={{ method: "mail", placement: "services_cta", service: "general", locale }}
            className="bg-mint px-5 py-2.5 text-sm font-bold text-navy hover:bg-[#54eebc]"
          >
            {dict.cta.mailButton}
          </TrackedMailLink>
          <CopyButton
            text={email}
            label={dict.cta.copyButton}
            copiedLabel={dict.cta.copiedLabel}
            track={{ method: "copy", placement: "services_cta", service: "general", locale }}
            className="border border-white/50 px-5 py-2.5 text-sm font-medium text-white hover:border-mint hover:text-mint"
          />
        </div>
        <p className="mt-4 font-mono text-sm break-all text-white/85">{email}</p>
        <div className="mt-6 border-t border-white/20 pt-5">
          <p className="text-sm font-medium text-white/70">{dict.cta.fieldsLabel}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {dict.mail.fields.map((field) => (
              <li key={field.label} className="border border-white/25 px-3 py-1 text-xs text-white/90">
                {field.label}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-5 text-xs text-white/70">{dict.cta.fallback}</p>
      </div>
    </section>
  );
}
