type TDonor = {
  name: string;
  image?: string;
  company?: string;
  designation?: string;
};

export type TTestimonial = {
  _id: string;
  testimonial: string;
  donor: TDonor[];
};
