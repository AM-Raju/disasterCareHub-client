import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [registration] = useRegistrationMutation();
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const newUser = { ...data, role: "user" };

    try {
      const res: any = await registration(newUser);
      if (res?.data?.success) {
        toast.success(res.data.message);
        reset();
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-amber-500 w-full h-[calc(100vh-132px)] lg:h-[calc(100vh-64px)] flex items-center justify-center">
      {/* Login form */}
      <div className="w-[90%] lg:w-[40%]    flex items-center justify-center relative border border-white rounded-lg">
        {/* <div className="bg-gray-800 w-full h-full absolute blur-sm opacity-50 top-0 left-0 "></div> */}
        <div className=" w-[80%] h-[80%] rounded-lg relative py-16">
          <div className=" w-full relative">
            <div className="bg-white absolute w-full h-full opacity-70 blur-sm"></div>
            <h1 className="text-amber-500 px-4 py-6 shrink-0  tracking-wider font-poppins font-bold text-5xl text-center relative">
              Please Register
            </h1>
          </div>
          <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="text"
              placeholder="User Name"
              {...register("name")}
            />
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="email"
              placeholder="Email"
              {...register("email")}
            />

            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            <div className="w-full pt-5">
              <button
                className=" w-full hover:bg-white hover:text-black transition-all duration-500 px-3 py-3 border font-poppins text-white border-white"
                type="submit"
              >
                Register
              </button>
              <p className="text-sm text-amber-800 mt-1">
                Already registered!{" "}
                <span>
                  <Link
                    className="text-white hover:text-amber-800 transition-all duration-500"
                    to="/login"
                  >
                    Please login
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
