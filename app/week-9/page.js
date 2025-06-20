"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <main className="min-h-screen p-6 bg-black text-white">
            <h1 className="text-3xl font-bold mb-4">Firebase GitHub Auth</h1>

            {!user ? (
                <button
                    className="bg-blue-600 hover:bg-blue-800 transition-colors duration-300 px-4 py-2 rounded cursor-pointer"
                    onClick={gitHubSignIn}
                >
                    Sign in with GitHub
                </button>
            ) : (
                <>
                    <p className="mb-4">
                        Welcome, {user.displayName} ({user.email})
                    </p>

                    <button
                        className="bg-red-600 hover:bg-red-800 transition-colors duration-300 px-4 py-2 rounded mb-4 cursor-pointer"
                        onClick={firebaseSignOut}
                    >
                        Sign Out
                    </button>
                    <br />

                    <Link
                        href="/week-9/shopping-list"
                        className="underline text-blue-400 hover:text-blue-200 transition-colors duration-300 cursor-pointer"
                    >
                        Go to Shopping List
                    </Link>
                </>
            )}
        </main>
    );
}
