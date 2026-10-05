// src/data/content.ts

export const SITE_CONTENT = {
  navigation: {
    logo: {
      first: "ZAPROGRAMUJ SWOJĄ",
      second: "EWOLUCJĘ",
    },
    links: [
      { label: "KSIĄŻKA", href: "#book" },
      { label: "IDEA", href: "#idea" },
      { label: "O AUTORZE", href: "#author" },
      { label: "WSPARCIE", href: "#support" },
    ],
    ctaButton: "POBIERZ ZA DARMO",
  },

  hero: {
    authorEyebrow: "IGOR KIEŁBOWSKI",
    title: {
      line1: "ZAPROGRAMUJ",
      line2: "SWOJĄ",
      highlight: "EWOLUCJĘ",
    },
    tagline: [
      "Zrozum siebie.",
      "Zaprogramuj swój system.",
      "Zacznij ewoluować.",
    ],
    description:
      "Praktyczne połączenie wiedzy o ciele, psychice i środowisku w jeden, spójny system rozwoju człowieka. Teoria, doświadczenia i narzędzia, które pomagają lepiej rozumieć siebie i świadomie kierować własną zmianą.",
    cta: {
      buttonText: "POBIERZ DARMOWĄ KSIĄŻKĘ (PDF)",
      fileBadge: "PDF • bezpłatnie • bez rejestracji",
      supportNote: "Książka jest darmowa. Jeśli zechcesz wesprzeć projekt",
      supportLinkText: "→ Postaw mi kawę.",
    },
    backgroundImage: {
        src: "/images/hero_bg.webp",
        alt: "",
    },
    bookCover: {
      alt: "Okładka książki Zaprogramuj Swoją Ewolucję - Igor Kiełbowski",
      src: "/images/hero_book.webp",
    },
  },

  pillarsSection: {
    id: "idea",
    title: {
        regular: "CZŁOWIEK JAKO",
        highlight: "SYSTEM",
    },
    subtitle:
      "Ciało, psychika i środowisko tworzą jeden, nierozerwalny system. Zrozum każdy z jego elementów.",
    items: [
      {
        id: "cialo",
        title: "CIAŁO",
        description:
          "Organizm jako system — homeostaza, adaptacja, metabolizm, układ nerwowy, mózg, hormony, mięśnie i regeneracja.",
        imageSrc: "/images/tiles_body.webp",
        imageAlt: "Układ biologiczny i mięśniowy człowieka",
      },
      {
        id: "psychika",
        title: "PSYCHIKA",
        description:
          "Interpretacja rzeczywistości — emocje, doświadczenia, automatyczne reakcje, myślenie, przekonania, tożsamość i świadomość.",
        imageSrc: "/images/tiles_psyche.webp",
        imageAlt: "Struktura mózgu i procesy myślowe",
      },
      {
        id: "integracja",
        title: "INTEGRACJA",
        description:
          "Jeden człowiek. Jeden system. Sprzężenie zwrotne, punkty wpływu, adaptacja i świadomy rozwój.",
        imageSrc: "/images/tiles_integration.webp",
        imageAlt: "Zintegrowana sylwetka człowieka z punktami węzłowymi",
      },
    ],
  },

  authorSection: {
    id: "author",
    eyebrow: "O AUTORZE",
    name: {
        first: "IGOR",
        last: "KIEŁBOWSKI",
    },
    bio: [
        "Łączę wiedzę z zakresu fizjoterapii, treningu, automatyki i robotyki z osobistymi doświadczeniami, aby lepiej rozumieć, jak funkcjonuje człowiek jako system.",
        "Zmiana sylwetki, sport, studia, praca z ludźmi i własne doświadczenia pokazały mi, że ciało, psychika i środowisko nie działają oddzielnie. Automatyka i robotyka nauczyły mnie patrzeć na rzeczywistość przez pryzmat systemów i sprzężeń zwrotnych, a fizjoterapia dodała perspektywę biologii organizmu.",
        "„Zaprogramuj swoją ewolucję” to efekt połączenia tych perspektyw – próba stworzenia narzędzia, które ma pomagać w świadomym rozwoju, a nie gotowej recepty na wszystko.",
    ],
    photo: {
        src: "/images/about_author.webp",
        alt: "Igor Kiełbowski",
    },
    },

    supportSection: {
    id: "support",
    title: {
        regular: "WESPRZYJ",
        highlight: "PROJEKT",
    },
    subtitle: {
        prefix: "Książka jest i pozostanie",
        highlight: "dostępna bezpłatnie.",
    },
    description:
        "Jeśli uznasz, że „Zaprogramuj swoją ewolucję” dała Ci wartość i chcesz wesprzeć rozwój projektu, możesz postawić mi symboliczną kawę.",
    buttonText: "POSTAW MI KAWĘ",
    buttonUrl: "#", // update later!
    note: "Wsparcie jest całkowicie dobrowolne i nie wpływa na dostęp do książki.",
    imageSrc: "/images/virtual_coffee.webp",
    imageAlt: "Symboliczna wirtualna kawa",
    },

  finalCta: {
    quote: {
        text: "Nie chodzi o stworzenie idealnej wersji siebie według wcześniej przygotowanego planu.",
        highlight: "Chodzi o świadome uczestnictwo w procesie własnej zmiany.",
    },
    title: {
        regular: "TWOJA EWOLUCJA",
        highlight: "JUŻ TRWA.",
    },
    subtitle: "Zaprogramuj ją świadomie.",
    cta: {
        buttonText: "POBIERZ DARMOWĄ KSIĄŻKĘ (PDF)",
        fileBadge: "PDF · bezpłatnie · bez rejestracji",
        fileUrl: "/Zaprogramuj swoją ewolucję - Igor Kiełbowski.pdf",
    },
    backgroundImage: {
        src: "/images/quote_bg.webp",
        alt: "Panorama futurystycznego miasta o zachodzie słońca",
    },
    },

    footer: {
        brand: {
            title: "ZAPROGRAMUJ SWOJĄ",
            highlight: "EWOLUCJĘ",
            author: "Igor Kiełbowski",
        },
        copyright: "© 2026 Igor Kiełbowski",
        links: [
            { label: "Kontakt", href: "#" }, // Update later!
            { label: "Polityka prywatności", href: "#" },
        ],
    },

    privacyPolicy: {
        title: "POLITYKA PRYWATNOŚCI",
        lastUpdated: "Ostatnia aktualizacja: październik 2026",
        sections: [
            {
            heading: "1. Informacje ogólne",
            content:
                "Niniejsza strona ma charakter informacyjny i promuje bezpłatną publikację „Zaprogramuj swoją ewolucję”. Pobieranie materiałów odbywa się bezpośrednio, bez konieczności rejestracji i bez podawania jakichkolwiek danych osobowych.",
            },
            {
            heading: "2. Logi serwera i hosting",
            content:
                "Serwis utrzymywany jest na platformie hostingowej Vercel. Podczas korzystania ze strony zapytania sieciowe mogą być rejestrowane w standardowych logach technicznych serwera (np. adres IP, data i godzina zapytania, typ przeglądarki). Dane te służą wyłącznie celom technicznym i bezpieczeństwa.",
            },
            {
            heading: "3. Pliki cookies i analityka",
            content:
                "Strona nie wykorzystuje inwazyjnych marketingowych plików cookies ani narzędzi śledzących profile użytkowników. Wykorzystywane mogą być jedynie niezbędne mechanizmy sesyjne lub zagregowane, anonimowe statystyki ruchu.",
            },
            {
            heading: "4. Zewnętrzne odnośniki",
            content:
                "Odnośniki zewnętrzne (np. link do postawienia kawy lub profile społecznościowe) kierują do niezależnych platform, które posiadają własne polityki prywatności i przetwarzania danych.",
            },
        ],
    },
    contactModal: {
        title: {
            regular: "SKONTAKTUJ",
            highlight: "SIĘ",
        },
        intro:
            "Masz pytania dotyczące treści książki, chcesz podzielić się swoimi wnioskami po lekturze albo przedyskutować praktyczne wdrożenie zasad w życiu? A może myślisz o współpracy, warsztatach lub prelekcji? Napisz śmiało – każda merytoryczna perspektywa ma dla mnie ogromną wartość.",
        email: "igorkielbowski@gmail.com",
        socials: {
            instagram: {
                name: "Instagram",
                url: "https://www.instagram.com/igi.kielbosky?stkn=MWJjbTZsbHFxcnRweA%3D%3D&utm_source=qr",
                handle: "@igi.kielbosky",
            },
            facebook: {
                name: "Facebook",
                url: "https://www.facebook.com/share/1FLmphLott/?mibextid=wwXIfr",
                handle: "Igor Kiełbowski",
            },
        },
    },
} as const;

export type SiteContent = typeof SITE_CONTENT;