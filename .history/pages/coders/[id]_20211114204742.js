import React from 'react';

export async function getStaticProps(context) {
    const id=context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
    const data = await res.json();

    const paths=data.map((coder)=>{
        return{
            params: {id:coder.id.toString()}
        }
    })

    return {
        paths,
        fallback:false,
    }
}

function Detail({data}) {
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Address: {data.address}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
        </div>
    );
}

export default Detail;