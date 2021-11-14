import React from 'react';

export async function getStaticProps(context) {
    const id=context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
    const data = await res.json();

    return {
        props: {
            coders,
        },
    }
}

function Detail(props) {
    return (
        <div>
            
        </div>
    );
}

export default Detail;