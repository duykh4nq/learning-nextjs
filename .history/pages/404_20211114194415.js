import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Link } from 'next/link';

const NotFound = () => {
    const router=useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')

        },3000)
    },[])
    return (
        <div className="mt-5 text-center">
            <h1>Ooop... </h1>
            <h2>That page cannot be pound</h2>
            <p>Going back the <Link to="/">Home Page</Link> in 3 seconds!</p>
        </div>
    );
};

export default NotFound;