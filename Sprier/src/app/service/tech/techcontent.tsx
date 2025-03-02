import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Turn your projects into success stories with our time-tested Delivery Framework`;
const TechContent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Empowered by technology. Driven by business
            </h2>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <p className="mb-4">
              Organizations embarking on transformational projects often buy
              into the idea of some magical piece of technology that will make
              their problems vanish into thin air. This, unfortunately, isn’t a
              reality. Without a change in business processes, well-trained
              personnel, and confident leadership, tech initiatives will hardly
              get off the ground. On the other hand, the value of new tech
              tools’ implementation should not be underestimated. It’s almost
              impossible to transform a company’s business operations in an
              administrative way only, without implementing any proper and
              effective tools for improved operations.
            </p>
          </div>
          <div>
            <p className="mb-4">
              Let’s see what can be done about it. Welcome to the concept of
              Technology-Enabled Business Transformation. What does it mean?
              It’s a complex service at the intersection of Business and IT
              consulting, providing an integrated solution.
            </p>
          </div>
        </div>
      </div>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <div className="techdiv">
              <h2 className="Full_suite">
                Stable and predictable product and platform strategy
              </h2>
              <div className="paragraph">
                <p>
                  You have plans for where you want to be in terms of sales
                  volume and market position for the next five years, don’t you?
                  You should have the same for your tech infrastructure. The
                  ‘we’ll see’ approach doesn’t work. Acting on a whim is fraught
                  with painful consequences.
                </p>
                <br />
                <p>
                  Eventually, you may find yourself in a situation where your
                  current system won’t be able to handle your rapid growth.
                  Remember, the Titanic could have been saved before the
                  collision with the iceberg, and not when the vessel was
                  already sinking. Our strategists draw upon their knowledge and
                  expertise not to let your ship crash on the iceberg of IT
                  limitations.
                </p>
                <br />
                <p>
                  Taking into account the inefficiencies and shortcomings
                  identified in the gap analysis as well as your business
                  development ambitions, we draw up a blueprint for your tech
                  infrastructure to make sure all your goals will be met. We
                  create strategies for different time frames — from 3(6) months
                  to 5 years — to prioritize critical things in the short term,
                  without losing sight of longer-run ambitions.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cloud-container">
        <div className="techdiv">
          <div className="cloud-platforms">
            <div className="platform-item">
              <img fetchPriority="high" src="../assetes/images/GoogleCloud.png" />
            </div>
            <div className="platform-item">
              <img fetchPriority="high" src="../assetes/images/MicrosoftAssure.png" />
            </div>
            <div className="platform-item">
              <img fetchPriority="high" src="../assetes/images/aws.webp" />
            </div>
            <div className="platform-item">
              <img fetchPriority="high" src="../assetes/images/OvhCloud.png" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TechContent;
