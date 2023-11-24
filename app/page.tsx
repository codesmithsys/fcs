import {
  Hero,
  CustomButton,
  Info,
  ProjectsFeature,
  Footer,
} from "@/components";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div>
      <div className="responsive flex flex-col gap-6">
        <Hero
          Heading="Environment/ tourism planning, development projects and technical writing specialists"
          Paragraph="Looking for an expert to handle your project? Talk to us before talking to somebody else, 
        because we could as well be the best. From management plans for conservancies or national parks, 
        tourism development projects to technical writing for technical oriented institutions."
          button={
            <CustomButton
              title="Contact Us"
              buttonStyle="bg-fcs_orange text-fcs_white hover:bg-fcs_white hover:text-fcs_orange rounded-full"
              href="/Contact"
              size="md"
              icon={<HiArrowRight />}
            />
          }
        />
        <div className="flex flex-col gap-6">
          <Info
            Heading="Our Value Proposition"
            Paragraph="We take pride in high quality work and efficiency in all our projects.
        Every assignment is important to us and we take time to understand the
        objectives of the project to ensure we deliver satisfaction and value
        for money."
            href="#"
            LinkTitle="See our approach"
          />
          <Info
            Heading="About Us"
            Paragraph="We are experts in environmental conservation planning and tourism project
          management and development. We assist clients to develop management
          plans, carry out impact assessments or feasibility studies and business
          plans for tourism projects.
          We are also a writing power house for writing and editing technical reports
          or institutional publications for conservation and development institutions"
            href="#"
            LinkTitle="See our approach"
          />
          <Info
            Heading="Our Clients"
            Paragraph="We work for a wide range of public and private institutions, mainly those
          involved in wildlife conservation, environment and tourism. We also work
          for individual investors in tourism and wildlife conservancies and
          elsewhere."
            href="#"
            LinkTitle="See our approach"
          />
        </div>
        <ProjectsFeature
          ProjectImg={[
            "Bird Img",
            "Giraffe Img",
            "Flamingo Img",
            "WildBeast Img",
          ]}
          ProjectTitle={[
            "Amboseli Ecosystem Management Plan",
            "Solai Sanctuary Management Plan",
            "Lake Bogoria National Reserve",
            "Great Maasai Mara Ecosystem Management Plan",
          ]}
        />
      </div>
        <Footer />
    </div>
  );
}
