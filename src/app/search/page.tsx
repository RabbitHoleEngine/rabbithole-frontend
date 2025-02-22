import Link from "next/link";
import { redirect } from "next/navigation";
import { defaultSearch } from "../../lib/api";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;
  const query = params.q;

  if (Array.isArray(query) || !query) {
    return redirect("/");
  }

  const results = await defaultSearch(query);

  return (
    <ul className="py-4 divide-y divide-zinc-100 bg-white shadow-md rounded-b-md">
      {results?.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">
            No results found for &apos;{query}&apos;.
          </p>
        </div>
      ) : (
        results?.map((item: { title: string; url: string }, index: number) => (
          <li key={index} className="py-4 px-8 flex space-x-4">
            <div className="flex-1">
              <Link href={item.url} target="_blank">
                <h2 className="text-lg font-medium text-blue-600 hover:underline">
                  {item.title}
                </h2>
              </Link>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default Page;
