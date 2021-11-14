import React from 'react';
import Head from 'next/head';

function AllCoders(props) {
    return (
        <>
            <Head>
                <title>Coders</title>
                <meta name="keywords" content="coders"></meta>
            </Head>
            <div className="text-center mb-5 mt-5">
                <h1 className="text-3xl mb-4">All Coders </h1>{" "}
            </div>
        </>
    );
}

export default AllCoders;