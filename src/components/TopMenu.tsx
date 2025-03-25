"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function TopMenu() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="fixed top-0 w-full h-20 bg-black shadow-md flex items-center justify-between px-6">
      {/* Left Side: Logo or Home Button */}
      <button
        className="text-white text-lg font-medium hover:text-gray-300 transition"
        onClick={() => router.push("/")}
      >
        Home
      </button>

      {/* Right Side: Auth Buttons */}
      {session ? (
        <div className="flex items-center space-x-4">
          {/* User Name Button */}
          <button
            className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow-md hover:bg-gray-200 transition"
            onClick={() => router.push("/myreservation")}
          >
            {session.user?.name}
          </button>

          {/* Sign Out Button */}
          <button
            className="px-6 m-2 py-3 border border-solid border-white text-white rounded-lg shadow-md hover:border-gray-500 transition"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex space-x-4">
          <button
            className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            onClick={() => router.push("/api/auth/signin")}
          >
            Sign In
          </button>

          <button
            className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
            onClick={() => router.push("/api/auth/register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}
