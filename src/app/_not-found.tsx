import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-[#09090b] bg-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold dark:text-white text-black">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold dark:text-white text-black">
          Page Not Found
        </h2>
        <p className="text-lg dark:text-gray-400 text-gray-600 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
