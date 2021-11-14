import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const coders = await res.json();

    return {
        props: {
            coders,
        },
    }
}

function AllCoders({ coders }) {
    return (
        <>
            <Head>
                <title>Coders</title>
                <meta name="keywords" content="coders"></meta>
            </Head>
            <div className="text-center mb-5 mt-5">
                <h1 className="text-3xl mb-4">All Coders </h1>
                {
                    coders.map((coder)=>(
                        <Link href={'/coders/'+coder.id} key={coder.id}>
                            <p className="text-black text-xl">{coder.name}</p>
                        </Link>
                    ))
                }
            </div>
        </>
    );
}

export default AllCoders;