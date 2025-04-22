import Link from "next/link";

export default function Dashboard(){
    return(
        <>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <Link href={'/dashboard/create-post'}>
                            Create Post
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}