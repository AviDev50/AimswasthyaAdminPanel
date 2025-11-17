export default function DoctorProfileForm() {
  return (
    <div className="w-full bg-white rounded-2xl p-8 flex gap-10 mt-20">

      {/* LEFT SIDE */}
      <div className="flex flex-col items-center w-1/4">

        {/* Profile Photo */}
        <div className="w-40 h-40 rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center">
          <span className="text-4xl text-blue-600 font-bold">+</span>
        </div>

        <p className="mt-2 text-gray-500 text-sm">Profile photo</p>

        {/* Identity Verified Badge */}
        <div className="mt-4 px-4 py-2 bg-white shadow rounded-lg flex items-center gap-2 text-sm">
          <span>Identity proof verified</span>
          <span className="text-green-500 text-lg">✔</span>
        </div>

        {/* SMC Field */}
        <div className="mt-3 w-40 px-3 py-2 bg-white shadow rounded-lg flex justify-between items-center text-sm">
          <span>SMC</span>
          <span className="text-gray-500 text-lg">＋</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-3/4 grid grid-cols-2 gap-5">

        {/* Input Boxes */}
        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm text-gray-500">
          Name
        </div>

        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm justify-between text-gray-500">
          <span>Qualification</span>
          <span className="text-gray-500">⌄</span>
        </div>

        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm justify-between text-gray-500">
          <span>Gender</span>
          <span className="text-gray-500">⌄</span>
        </div>

        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm justify-between text-gray-500">
          <span>Specialization</span>
          <span className="text-gray-500">⌄</span>
        </div>

        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm text-gray-500 col-span-1">
          Contact
        </div>

        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm text-gray-500 col-span-1">
          Practice start year
        </div>

        <div className="bg-gray-100 h-12 rounded-xl flex items-center px-4 text-sm text-gray-500 col-span-1">
          Email
        </div>

      </div>
    </div>
  );
}
