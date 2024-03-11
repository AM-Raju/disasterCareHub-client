import { TVolunteer } from "../../types/volunteer.types";

type TVolunteerProps = {
  volunteer: TVolunteer;
};

const VolunteerCard = ({ volunteer }: TVolunteerProps) => {
  const { name, imageUrl, city, state, country } = volunteer;
  return (
    <div className="w-[270px] h-80 bg-amber-200  p-5">
      <img src={imageUrl} alt="" />
      <div className="mt-3">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm">
          {city ? `${city}, ` : null} {state ? `${state}, ` : null}
          {country ? `${country}` : null}
        </p>
      </div>
    </div>
  );
};

export default VolunteerCard;
