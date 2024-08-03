import Image from "next/image";
import { render } from '@react-email/components';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello
      <Link href="/app">To App</Link>
    </div>
  );
}
