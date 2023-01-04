import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Lord of the Rings - the App</h1>
      <Link href="/volumes">Go to volumes.</Link>
    </>
  );
}
