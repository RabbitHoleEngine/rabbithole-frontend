import { redirect } from "next/navigation";
import { defaultSearch } from "../../lib/api";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) => {
  const params = await searchParams;
  const query = params?.q;

  if (!query) {
    return redirect("/");
  }

  const results = await defaultSearch(query);

  return (
    <ul className="py-4 divide-y divide-zinc-100">
      {results?.length === 0 ? (
        <div className="text-center py-6">
          <p className="text-sm text-gray-500">
            No results found for &quot;{query}&quot;.
          </p>
        </div>
      ) : (
        <ul className="space-y-6">
          {results?.map(
            (item: { title: string; url: string }, index: number) => (
              <li key={index} className="flex flex-col">
                <p className="text-sm text-green-700 truncate">{item.url}</p>
                <Link href={item.url} target="_blank">
                  <h2 className="text-xl text-blue-700 hover:underline font-medium">
                    {item.title}
                  </h2>
                </Link>
              </li>
            ),
          )}
        </ul>
      )}
    </ul>
  );
};

export default Page;
