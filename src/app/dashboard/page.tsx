import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        {session?.user ? (
          <>
            <h1 className="text-3xl font-bold text-teal-600">
              Welcome, {session.user.name}! 🎉
            </h1>
            {session.user.image && (
              <div className="mt-4 flex justify-center">
                <Image
                  src={session.user.image}
                  alt="User Profile"
                  width={100}
                  height={100}
                  className="rounded-full border border-gray-300 shadow-sm"
                />
              </div>
            )}
            <p className="text-gray-600 mt-2">
              Here’s an overview of your activity.
            </p>
          </>
        ) : (
          <h1 className="text-3xl font-bold text-gray-700">
            Welcome to the Dashboard!
          </h1>
        )}
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
