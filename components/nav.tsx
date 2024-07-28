import Link from "next/link";

export default function Nav() {
  return <>
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  </>
}