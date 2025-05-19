import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("Authorization")?.value;

  if (!token) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-teal-600">
          Welcome, Md Minhajul Islam! 🎉
        </h1>
        <p className="text-gray-600 mt-2">
          You are logged in as <strong>Admin</strong>.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1,230</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-lg font-semibold">Total Projects</h3>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-lg font-semibold">Total Blogs</h3>
          <p className="text-3xl font-bold mt-2">320</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
