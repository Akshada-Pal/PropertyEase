import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // assuming you stored user after login like this:
    // localStorage.setItem("user", JSON.stringify(user))

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-xl bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-bold mb-4">Profile 👤</h1>

        <p className="text-gray-500">
          User details & account settings
        </p>

        <div className="mt-6 space-y-3 text-gray-700">

          <p>👤 Name: {user?.name || "Not Available"}</p>

          <p>📧 Email: {user?.email || "user@example.com"}</p>

          <p>🔐 Role: {user?.role || "User"}</p>

          <p>📅 Plan: Free</p>

        </div>
      </div>
    </Layout>
  );
}