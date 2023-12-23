import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Img from '../assets/imgs/image.png'
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Index Page Title"}>
      {/* hero left */}
      <div className="bg-index">
        <div className=" container flex items-center justify-between">
          <div className=" flex flex-col justify-between">
            <h3 className="mtext text-center lg:text-left pt-8 lg:pt-0">Biz siz uchun</h3>
            <h2 className=" text-[56px] font-bold leading-[72px] text-center lg:text-left">Toza va sog&apos;lom muhit yaratamiz</h2>
            <p className=" text-[16px] font-semibold text-textColor leading-[24px] text-center lg:text-left">Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko&apos;lamli xizmatlarni taqdim etamiz.</p>
            <div className=" flex items-center gap-6 py-14 justify-center lg:justify-start">
              <button className="button shadow-btn">Bog'lanish</button>
              <button className="btn">Bizning xizmatlar</button>
            </div>
          </div>
          {/* hero right */}
          <div className=" hidden lg:block ">
            <Image src={Img.src} width={612} height={612} alt="picture" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
