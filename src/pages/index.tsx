import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Index Page Title"}>
      <div>Index Page</div>
    </Layout>
  );
}
