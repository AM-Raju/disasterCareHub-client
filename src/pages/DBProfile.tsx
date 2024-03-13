import Button from "../components/ui/Button";
import { useGetUserQuery } from "../redux/features/users/usersApi";
import { useAppSelector } from "../redux/hook";

const DBProfile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data, isLoading } = useGetUserQuery(user?.email);
  console.log(data);
  const {
    name,
    image,
    email,
    role,
    company,
    designation,
    city,
    state,
    country,
  } = data;

  return (
    <div className="max-w-7xl mx-auto  pt-12">
      <h1 className=" text-amber-500 border-b-2  font-poppins text-5xl lg:text-6xl font-semibold text-center ">
        Profile
      </h1>
      <div className="border border-amber-500 flex flex-col-reverse lg:flex-row justify-between p-10  bg-slate-100 h-full w-10/12 md:w-7/12 mx-auto mt-7">
        <div className="space-y-2 mt-8 md:mt-0">
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">Name:</span> {name}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">Email:</span> {email}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">Role:</span> {role}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold"> Designation:</span>
            {designation ? designation : <p className="inline"> N/A</p>}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">Company:</span>{" "}
            {company ? company : <p className="inline"> N/A</p>}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">City:</span>{" "}
            {city ? city : <p className="inline"> N/A</p>}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">State:</span>{" "}
            {state ? state : <p className="inline"> N/A</p>}
          </p>
          <p>
            {" "}
            <span className="text-amber-500 font-semibold">Country:</span>{" "}
            {country ? country : <p className="inline"> N/A</p>}
          </p>
          <div>
            <button className="bg-amber-500 px-4 py-2  mt-5">
              Update Profile{" "}
            </button>
          </div>
        </div>
        <img className="min-h-72" src={image} alt="" />
      </div>
    </div>
  );
};

export default DBProfile;
