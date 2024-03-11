import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/auth/authSlice";
import { setRole } from "../redux/features/users/roleSlice";

type TDecodedUser = {
  email: string;
  iat: number;
  exp: number;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res: any = await login(data);

      if (res?.data?.success) {
        const decodedUser: TDecodedUser = jwtDecode(res?.data?.token);
        // console.log("decoded user", decodedUser);

        // Setting role to the local state
        fetch(`http://localhost:5000/api/v1/users/${decodedUser?.email}`)
          .then((res) => res.json())
          .then((data) => dispatch(setRole(data?.role)));

        dispatch(setUser({ user: decodedUser, token: res?.data?.token }));

        // dispatch(removeSupplyId());

        toast.success(res.data.message);
        reset();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-amber-500 w-full h-[calc(100vh-132px)] lg:h-[calc(100vh-64px)] flex items-center justify-center">
      {/* Login form */}
      <div className="w-[90%] lg:w-[40%]  flex items-center justify-center relative border border-white rounded-lg">
        <div className=" w-[80%] h-[80%] rounded-lg relative py-16">
          <div className=" w-full relative">
            <div className="bg-white absolute w-full h-full opacity-70 blur-sm"></div>
            <h1 className="text-amber-500 px-4 py-6 shrink-0  tracking-wider font-poppins font-bold text-5xl text-center relative">
              Login Here
            </h1>
          </div>
          <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="email"
              placeholder="Email"
              {...register("email")}
            />

            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="text"
              placeholder="Password"
              {...register("password")}
            />

            <div className="w-full pt-5">
              <button
                className=" w-full hover:bg-white hover:text-black transition-all duration-500 px-3 py-3 border font-poppins text-white border-white"
                type="submit"
              >
                Login
              </button>
              <p className="text-sm text-amber-800 mt-1">
                Not registered yet!{" "}
                <span>
                  <Link
                    className="text-white hover:text-amber-800 transition-all duration-500"
                    to="/register"
                  >
                    Please register
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

export default Login;
