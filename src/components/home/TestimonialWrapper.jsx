import Testimonial from "./Testimonial";
import {
  testimonialDb1,
  testimonialDb2,
  testimonialDb3,
} from "../db/home/index";
import ComponentWrapper from "../helpers/ComponentWrapper";

const TestimonialWrapper = () => {
  return (
    <ComponentWrapper>
      <h1 className="text-3xl text-center lg:text-start md:text-4xl font-bold py-8">
        Customer Testimonials
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl-gap-8">
        <Testimonial data={testimonialDb1} />
        <Testimonial data={testimonialDb2} />
        <Testimonial data={testimonialDb3} />
      </div>
    </ComponentWrapper>
  );
};

export default TestimonialWrapper;
