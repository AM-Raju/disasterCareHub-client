import GallerySliderCard from "../../cards/GallerySliderCard";

const GSComponent1 = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-500 to-red-500/80 w-full   pb-16">
      <div className=" max-w-[90%] h-full mx-auto ">
        <div className=" border-b w-full h-24 mb-3 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-semibold font-poppins text-center tracking-wider">
            Gallery <span className="font-roboto font-thin">|</span>
            <span className="font-roboto font-normal text-xl">Medicine</span>
          </h1>
        </div>
        <div className="grid grid-cols-12 h-full gap-3 pb-3">
          <GallerySliderCard img={"https://i.ibb.co/Tb6kPSh/2.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/L9Xf17D/4.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/dmX5r1b/3.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/7nDvLx8/1.jpg"}></GallerySliderCard>
        </div>
      </div>
    </div>
  );
};

export default GSComponent1;
