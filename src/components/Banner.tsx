"use client";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Banner(): JSX.Element {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="relative w-full h-screen">
      {/* Background Images */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url(/header-with-image.svg)]">
        <div className="absolute inset-0 bg-cover bg-center bg-[url(/img/cover.jpg)]"></div>
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wide">BACKDOOR</h1>
        <p className="text-lg md:text-2xl font-serif mt-4">Start your journey with us</p>

        {/* Reserve Button */}
        <button
          className="mt-8 px-6 py-3 bg-opacity-50 bg-gray-700 hover:bg-gray-600 transition rounded-lg shadow-md text-xl"
          onClick={() => router.push("/reserve")}
        >
          Reserve
        </button>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between items-center p-6">
        {/* Car Info Button */}
        <button
          className="text-xl font-medium text-white hover:text-gray-300"
          onClick={() => router.push("/carinfo")}
        >
          Car Info
        </button>

        {/* Auth & Home Buttons */}
        <div className="flex items-center space-x-6">
          <button
            className="text-xl font-medium text-white hover:text-gray-300"
            onClick={() => router.push("/")}
          >
            Home
          </button>

          {session ? (
            <div>
              <button
                className="px-6 m-2 py-3 bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-200 transition"
                onClick={() => router.push("/myreservation")}
              >
                {session.user?.name}
              </button>

              <button
                className="px-6 m-2 py-3 border border-solid border-white text-white rounded-lg shadow-md hover:border-gray-500 transition"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <button
                className="px-6 m-2 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                onClick={() => router.push("/api/auth/signin")}
              >
                Sign In
              </button>

              <button
                className="px-6 m-2 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
                onClick={() => router.push("/api/auth/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
