import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/repetitor.tj" },
  { name: "Telegram", href: "https://t.me/repetitor_tj" },
  { name: "Facebook", href: "https://facebook.com/repetitor.tj" },
];

const navItems = [
  { key: "courses", href: "/courses" },
  { key: "about", href: "/about" },
  { key: "teachers", href: "/teachers" },
  { key: "branches", href: "/branches" },
  { key: "reviews", href: "/reviews" },
  { key: "blog", href: "/blog" },
  { key: "contacts", href: "/contacts" },
];

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl">Репетитор</span>
            <p className="mt-3 text-sm text-white/70">{t("footer.tagline")}</p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-xs">{link.name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg mb-4">
              {t("footer.navigation")}
            </h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-heading text-lg mb-4">
              {t("footer.contacts")}
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                href="tel:+992900123456"
                className="flex items-center gap-2 hover:text-white"
              >
                <Phone className="w-4 h-4" />
                +992 900 123 456
              </a>
              <a
                href="mailto:info@repetitor.tj"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                info@repetitor.tj
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                г. Душанбе, ул. Рудаки 120
              </span>
            </div>
          </div>

          {/* Working hours */}
          <div>
            <h3 className="font-heading text-lg mb-4">
              {t("footer.schedule")}
            </h3>
            <p className="text-sm text-white/70">
              {t("footer.weekdays")}
              <br />
              {t("footer.weekend")}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <span>
            &copy; {new Date().getFullYear()} Репетитор. {t("footer.rights")}
          </span>
          <Link href="/" className="hover:text-white">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
