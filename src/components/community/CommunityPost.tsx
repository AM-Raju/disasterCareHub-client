import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  useGetSupplyQuery,
  useUpdatePostMutation,
} from "../../redux/features/supply/supplyApi";
import { useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../redux/features/users/usersApi";
import { Link } from "react-router-dom";

const CommunityPost = () => {
  const [postData, setPostData] = useState([]);
  const [id, setId] = useState("");
  const supplyId = useAppSelector((state) => state.supplyId.id);
  const user = useAppSelector((state) => state.auth.user);
  const { data: userInfo } = useGetUserQuery(user?.email);

  const name = userInfo?.name;

  const [publishPost] = useUpdatePostMutation();

  useEffect(() => {
    if (supplyId) {
      setId(supplyId);
    }
  }, [supplyId]);

  const { data, isLoading } = useGetSupplyQuery(id);

  useEffect(() => {
    if (!isLoading) {
      setPostData(data?.post);
    }
  }, [data]);

  /* Handling post form */
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const handlePost: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { post } = data;
      const newPost = { post, name };

      const res: any = await publishPost({ id, newPost });
      if (res?.data?.modifiedCount > 0) {
        reset();
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="bg-amber-500 w-full h-full">
      <div className="relative ">
        {/* Community Post Header */}
        <div className=" bg-amber-100 flex">
          <img
            className="w-[600px]  h-80 lg:h-96"
            src={data?.imageUrl}
            alt=""
          />

          {/* Text block */}
          <div className="h-56 mt-10 lg:mt-0 lg:h-72 border border-amber-500 md:border-e-0 p-5 md:p-8 top-[calc(50%-144px)] absolute right-0">
            <div className=" p-5 md:p-8 md:w-[400px] h-full  bg-white  bg-opacity-70">
              <h3 className="z-10 text-xl lg:text-3xl md:text-4xl  tracking-wider leading-tight font-semibold">
                {data?.title}
              </h3>
              <div className="md:flex justify-between mt-5 ">
                <p>Donor: Mark David</p>
                <p>Category: {data?.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Post section */}
      <div className="max-w-3xl bg-zinc-200 mx-auto min-h-[416px] sticky overflow-auto pb-5">
        <form
          onSubmit={handleSubmit(handlePost)}
          className="w-10/12 mx-auto pt-5"
        >
          <div className="p-3 bg-white rounded-lg flex justify-center items-center">
            <textarea
              className="w-full p-3 mx-auto outline-none resize-none min-h-60 lg:min-h-24 rounded-lg focus:bg-slate-200 my-auto"
              {...register("post")}
              placeholder="Your thought"
            ></textarea>
          </div>
          {user ? (
            <button className="px-4 py-2 mt-4 bg-amber-500 hover:bg-amber-600 rounded-lg float-end transition-all duration-300">
              Share Thought
            </button>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 mt-4 bg-amber-500 hover:bg-amber-600 rounded-lg float-end transition-all duration-300">
                Login to Share
              </button>
            </Link>
          )}
        </form>
        {/* Posted posts */}
        <div className="p-5 space-y-2  mt-10">
          {postData &&
            postData?.length > 0 &&
            [...postData]
              .reverse()
              .map((item: { post: string; name: string }, index: number) => (
                <div
                  key={index}
                  className="border border-amber-500 p-3 bg-white rounded-xl"
                >
                  <p className="bg-gray-200 p-2 rounded-lg">{item.post}</p>
                  <p className="text-end text-xs py-2 text-amber-600 font-semibold tracking-wider">
                    - {item.name}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
