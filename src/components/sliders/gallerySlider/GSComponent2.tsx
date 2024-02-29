import GallerySliderCard from "../../cards/GallerySliderCard";

const GSComponent2 = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-500 to-stone-600 w-full  pb-16  ">
      <div className=" max-w-[90%] h-full mx-auto ">
        <div className=" border-b w-full h-24 mb-3 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-semibold font-poppins text-center tracking-wider text-white">
            Gallery <span className="font-roboto font-thin">|</span>
            <span className="font-roboto font-normal text-xl">Food</span>
          </h1>
        </div>
        <div className="grid grid-cols-12 h-full gap-3 pb-3">
          <GallerySliderCard img={"https://i.ibb.co/gjm9NLC/4.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/HnMgkqK/3.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/Yyj46kd/1.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/9Yk09Br/2.jpg"}></GallerySliderCard>
        </div>
      </div>
    </div>
  );
};

export default GSComponent2;
