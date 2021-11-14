import React from 'react';
import Head from 'next/head';
import { Link } from 'next/link';


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const coders = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
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
                    console.log(coders)
                }
            </div>
        </>
    );
}

export default AllCoders;