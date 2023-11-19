import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="mb-2 flex h-20 items-center rounded-md bg-blue-500 p-4 md:h-30" href="/login">
        <div className="mb-2 text-white text-2xl text-center">Get started by logging in!</div></Link>
    </main>
  )
}
