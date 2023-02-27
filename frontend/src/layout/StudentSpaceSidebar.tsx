import { Outlet } from "react-router-dom";

export default function StudentSpaceLayout() {
  return (
    <div className="w-full flex">
      <div className="w-1/3 min-h-screen bg-sky-600 text-white p-2">Courses</div>
      <div className="w-2/3">
        <Outlet />
      </div>
    </div> 
  );
}
