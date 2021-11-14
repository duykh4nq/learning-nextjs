import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";

function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div>
            <h1> Ooops... </h1> <h2> That page cannot be found: ( </h2>{" "}
            <p>
                {" "}
                Goin back to the <Link href="/">Homepage </Link> is 3 seconds...
            </p>
        </div>
    );
};

export default NotFound;
