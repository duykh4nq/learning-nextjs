import { Head } from 'next/head';


function About(props) {
    return (
        <>
            <Head>
                <title>Homepage</title>
                <meta name="keywords" content="coders"></meta>
            </Head>
            <div className="text-center mb-5 mt-5">
                <h1 className="text-3xl mb-4">About </h1>{" "}
                <p>
                    Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển.Nó
                    cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều
                    hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển
                    xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm{" "}
                </p>{" "}
            </div>
        </>
    );
}

export default About;