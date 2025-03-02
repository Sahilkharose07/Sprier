import { IoSearch } from "react-icons/io5";
import { MdContentPaste } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Footer from "@/components/Footer";

const words = `Pre-discovery Workshop`;

const words2 = `For those who want to set their project on the right track from the very beginning, we introduced a Pre-discovery Workshop a phase of a thorough, profound analysis. In three to five days of an onsite, tailored workshop, our team delves into your business issues and provides the top-level vision of handling them.`;

const word3 =
  "The pre-discovery workshop results in clearly formulated concepts";
const Innocontent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="innoh2">Our сontribution</h2>
            <div className="paragraph"></div>
          </div>
        </div>
      </section>

      <div className="cloud-container">
        <div className="cloud-platforms">
          <div className="platform-item">
            <img src="/assetes/images/opportunity.png" />
            <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
              Estimate innovation opportunities
            </p>
          </div>
          <div className="platform-item">
            <img src="/assetes/images/code.png" />
            <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
              Validate technology change
            </p>
          </div>
          <div className="platform-item">
            <img src="/assetes/images/stakeholder.png" />
            <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
              Align the stakeholders
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              <TextGenerateEffect words={words} />
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-1xl font-bold mb-6">
              <TextGenerateEffect words={words2} />
            </h2>
          </div>
        </div>
      </div>
      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              <TextGenerateEffect words={word3} />
            </h2>
            <ul className="space-y-2">
              <li> Communication plan</li>
              <li> Architecture overview</li>
              <li> Roadmap for further phases</li>
              <li> UI/UX concept</li>
              <li> Vision & scope</li>
              <li> Project charter</li>
            </ul>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  fetchPriority="high"
                  src="/assetes/images/project.webp"
                  height={1000}
                  width={1000}
                  className="h-75 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Benefits Thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Innocontent;
