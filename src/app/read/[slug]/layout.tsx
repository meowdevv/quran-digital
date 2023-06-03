import { useParams } from "next/navigation";
import "../../styles/globals.css";
import { Poppins } from "next/font/google";

type RootProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: `Membaca - Al-Fatihah`,
  description: "Generated by create next app",
};

export default function RootLayout(props: RootProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>{props.children}</body>
    </html>
  );
}
