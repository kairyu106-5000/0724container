// app/[locale]/layout.tsx
import '../../globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig from '../../i18nConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound();// ja が locales に含まれていないと 404
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <p>Hello World</p>
      </body>
    </html>
  );
}

