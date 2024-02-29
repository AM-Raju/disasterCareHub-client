import GallerySliderCard from "../../cards/GallerySliderCard";

const GSComponent3 = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-200 to-stone-900 w-full   pb-16 ">
      <div className=" max-w-[90%] h-full mx-auto ">
        <div className=" border-b w-full h-24 mb-3 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-semibold font-poppins text-center tracking-wider text-amber-500">
            Gallery <span className="font-roboto font-thin">|</span>
            <span className="font-roboto font-normal text-xl">Shelter</span>
          </h1>
        </div>
        <div className="grid grid-cols-12 h-full gap-3 pb-3">
          <GallerySliderCard img={"https://i.ibb.co/KLK2b0N/3.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/bBCyrLP/1.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/d6LjDDz/2.jpg"}></GallerySliderCard>
          <GallerySliderCard img={"https://i.ibb.co/gjm9NLC/4.jpg"}></GallerySliderCard>
        </div>
      </div>
    </div>
  );
};

export default GSComponent3;
