import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tax & IRS Representation - New York & New Jersey",
  description: "Expert tax and IRS representation services in New York and New Jersey. We offer tax resolution, IRS audit help, and back taxes assistance.",
  keywords: "tax representation, IRS representation, tax resolution, tax debt relief, IRS audit help, back taxes help, tax attorney, enrolled agent, tax relief services, tax problems, tax expert, tax consultant, tax preparation, tax accountant, tax law, tax advice, tax compliance, tax penalties, tax liens, tax levies, Offer in Compromise, Installment agreement, Penalty abatement, Innocent spouse relief, Wage garnishment, Bank levy, tax representation New York, IRS representation NY, tax resolution New York City, IRS audit help NYC, back taxes New York, tax attorney NY, enrolled agent New York, tax relief services NYC, New York State tax problems, NYC tax accountant, New York tax law, IRS representation Brooklyn, IRS representation Queens, IRS representation Manhattan, IRS representation Bronx, IRS representation Staten Island, NY tax debt relief, New York tax penalties, New York tax liens, New York tax levies, tax representation New Jersey, IRS representation NJ, tax resolution New Jersey, IRS audit help NJ, back taxes New Jersey, tax attorney NJ, enrolled agent New Jersey, tax relief services New Jersey, New Jersey State tax problems, NJ tax accountant, New Jersey tax law, IRS representation Newark, IRS representation Jersey City, IRS representation Paterson, IRS representation Elizabeth, IRS representation Edison, NJ tax debt relief, New Jersey tax penalties, New Jersey tax liens, New Jersey tax levies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
