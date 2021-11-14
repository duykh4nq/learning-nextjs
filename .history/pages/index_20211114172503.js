import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from './../.history/components/Footer_20211114172352';

export default function Home() {
  return (
    <div className="max-w-4xl">
      <Navbar />
      <div className="text-center mb-5 m-auto">
        <h1> Home Page </h1>
        <p>
          Google Dịch là một công cụ dịch thuật trực tuyến do Google phát
          triển.Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động
          cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp
          nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng
          phần mềm
        </p>
      </div>
      <Footer/>
    </div>
  );
}
