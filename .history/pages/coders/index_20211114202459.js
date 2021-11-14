import React from 'react';
import Head from 'next/head';
import { Link } from 'next/link';

const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("🚀 ~ file: index.js ~ line 7 ~ res", res)
    const data = await res.json();

    return {
        props: { coders: data },
    }
}

function AllCoders({coders}) {
    return (
        <>
            <Head>
                <title>Coders</title>
                <meta name="keywords" content="coders"></meta>
            </Head>
            <div className="text-center mb-5 mt-5">
                <h1 className="text-3xl mb-4">All Coders </h1>
                {
                    console.log(coders)
                }
            </div>
        </>
    );
}

export default AllCoders;