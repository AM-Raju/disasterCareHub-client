import Container from "../layouts/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="min-h-[calc(100vh-64px)] pt-32">
        <h1 className="text-amber-500 border-b-2 font-poppins text-6xl font-semibold text-center ">
          About Us
        </h1>
        <div className="mt-10 space-y-5 max-w-5xl mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti
            nisi ab eligendi quisquam nihil quibusdam quos voluptates facilis!
            Quo hic laudantium cupiditate libero excepturi cum vitae mollitia
            quam, debitis dolores sit dignissimos cumque voluptate, distinctio
            ducimus. Illum laborum quos, ipsa et sint at accusantium expedita
            distinctio nihil sequi consequatur ullam ab magnam numquam fuga quae
            maxime cupiditate nam impedit itaque quidem aperiam recusandae
            rerum! Sed nulla praesentium nemo qui, ab culpa non et aperiam quasi
            exercitationem, blanditiis nostrum laborum porro, ut odit
            voluptatibus totam soluta at. Facere optio, deleniti doloremque
            corporis praesentium qui, distinctio nobis esse quis, aspernatur
            deserunt!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            cupiditate maxime magnam repellat totam consectetur debitis animi
            vitae earum, aliquam velit rem? Modi soluta perspiciatis vero? Qui
            nulla fugiat cupiditate expedita, in laudantium sint natus cumque,
            soluta similique voluptates delectus nam sit iusto blanditiis
            aspernatur. Eius doloremque possimus labore libero.
          </p>
        </div>
        <h3 className="text-center mt-16 text-4xl font-semibold">
          Our Heart! <span className="text-amber-500">Volunteers</span>
        </h3>
        <div></div>
      </div>
    </Container>
  );
};

export default AboutUs;
