import Container from "../../layouts/Container";
import TestimonialSliders from "../sliders/TestimonialSliders";

const Testimonial = () => {
  return (
    <Container>
      <div className="mt-32">
        <div className="text-center flex flex-col items-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-poppins font-semibold">Testimonials</h1>
          <p className="max-w-[80ch] text-center mt-5 p-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga quae quasi adipisci,
            molestiae animi sunt in, eveniet repellendus facilis ?
          </p>
        </div>
        <TestimonialSliders></TestimonialSliders>
      </div>
    </Container>
  );
};

export default Testimonial;
