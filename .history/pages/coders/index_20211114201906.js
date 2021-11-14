import React from 'react';
import Head from 'next/head';
import { Link } from 'next/link';

const getStatic = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { coders: data }
    }
}


function AllCoders(props) {
    return (
        <>
            <Head>
                <title>Coders</title>
                <meta name="keywords" content="coders"></meta>
            </Head>
            <div className="text-center mb-5 mt-5">
                <h1 className="text-3xl mb-4">All Coders </h1>{
                    coders.map((coder)=>(
                        <Link to={`coders/${code.id}`} key={coder.id}></Link>
                    ))
                }
            </div>
        </>
    );
}

export default AllCoders;