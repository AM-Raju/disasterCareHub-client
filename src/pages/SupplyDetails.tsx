import Container from "../layouts/Container";

import Button from "../components/ui/Button";
import { useLoaderData } from "react-router-dom";
import { TSupply } from "../types/supply.types";

const SupplyDetails = () => {
  const supply: any = useLoaderData() as TSupply;

  const { title, category, amount, description, imageUrl } = supply;

  let text;

  if (description.includes("\n\n")) {
    text = description.split("\n\n");
  } else {
    text = [description];
  }

  return (
    <Container>
      <div className="pt-32 min-h-[calc(100vh-64px)]">
        <h1 className=" text-amber-500 border-b-2 font-poppins text-5xl lg:text-6xl font-semibold text-center ">
          Supply Details
        </h1>
        {/* Supply Details */}
        <div className="py-16 md:flex gap-20">
          <div className="max-w-[600px] max-h-[410px] border p-5">
            <img className="h-full object-cover w-full" src={imageUrl} alt="" />
          </div>
          <div className="max-w-[600px] space-y-3 mt-10 lg:mt-0 p-5">
            <h2 className="font-poppins text-3xl font-semibold">{title}</h2>

            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Supply Value:</span> ${amount}
            </p>

            <div className="space-y-3 pb-6">
              {text.map((text: string) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <Button className="py-3 bg-amber-500 hover:bg-amber-600 hover:text-white transition-all duration-500">
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SupplyDetails;
