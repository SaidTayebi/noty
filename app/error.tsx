"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        className="dark:hidden"
        src="/empty.png"
        height={300}
        width={300}
        alt="Error"
      />
      <Image
        className="hidden dark:block"
        src="/empty-dark.png"
        height={300}
        width={300}
        alt="Error"
      />
      <h2>Something went wrong</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
