// app/[locale]/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import i18nConfig from '../../i18nConfig';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
