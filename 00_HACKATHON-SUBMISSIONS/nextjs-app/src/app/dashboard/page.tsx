import Link from "next/link";

export default function Page() {
    return( 
        <>
         <h1>Dashboard Page</h1>
          <Link href={'/dashboard/prompt'}>
          Prompt Page
         </Link>
        </>
    )
}