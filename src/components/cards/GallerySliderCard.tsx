const GallerySliderCard = ({ img }: { img: string }) => {
  return (
    <div className="border  col-span-12 lg:col-span-3 overflow-hidden p-3">
      <img className="w-full h-full" src={img} alt="" />
    </div>
  );
};

export default GallerySliderCard;
