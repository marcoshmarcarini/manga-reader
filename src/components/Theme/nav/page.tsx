import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/dashboard/create-post"}>Create Post</Link>
        </li>
        <li>
          <Link href={"/dashboard/delete-post"}>Delete Post</Link>
        </li>
        <li>
          <Link href={"/dashboard/update-post"}>Update Post</Link>
        </li>
      </ul>
    </nav>
  );
}
