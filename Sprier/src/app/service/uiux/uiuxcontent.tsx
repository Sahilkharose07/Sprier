import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `the silent ambassador of your brand`;
const UiuxContent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Balancing functionality and usability in enterprise and consumer
              solutions
            </h2>
            <div className="paragraph">
              <p>
                Tap into our UI and UX design services to create pragmatic and
                ergonomic product designs that don’t compromise on aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">🎨🫧</div>
              <h2 className="text-2xl font-bold">
                UI / UX and design for Enterprise Software
              </h2>
            </div>
            <p className="mb-4">
              Magnify the impact and value of your business systems and make
              them an easy-to-use companion for your teams. Our company produces
              user-friendly designs for your enterprise systems that mimic your
              workflows and improve internal interactions.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">💻</div>
              <h2 className="text-2xl font-bold">
                UI / UX and design for Consumer Applications
              </h2>
            </div>
            <p className="mb-4">
              Turn to our UI design services company and create a consistent
              visual language for your customer-focused solutions. Our impactful
              and compelling visuals help you communicate the value of your
              business, cut through the noise, and reel in new users.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h5 className="text-lg text-emerald-500 mb-4">
              UI design services
            </h5>
            <h2 className="text-3xl font-bold mb-6">
              <TextGenerateEffect words={words} />
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Our user experience design services are aimed at showcasing the
              true picture of your business through impactful, branded digital
              interfaces tailor-made to the user. Sprier delivers user
              interfaces that create a lasting impression and pull their weight
              to connect with the audience.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              We help you reach your revenue and business goals as a one-off
              partner or long-term advisor that plugs into your team and helps
              your digital solutions evolve.
            </p>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                UI / UX
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Hover over this card to unleash the power of UI UX perspective
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  fetchPriority="high"
                  src="/assetes/images/uiux.webp"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  style={{
                    color: "rgb(151, 3, 141)",
                    transform:
                      "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
                    backgroundColor: "rgb(255, 162, 2)",
                  }}
                >
                  UI
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  // as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  style={{
                    transform:
                      "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
                    backgroundColor: "rgb(2, 255, 211)",
                  }}
                >
                  UX
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              From ideation to polished interfaces: our end-to-end UI/UX design
              services
            </h2>
            <div className="paragraph">
              <p>
                Our UI UX design & development services help you meet and exceed
                every need of your users from layout to color scheme and convey
                your message in the most efficient way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">💬</div>
              <h2 className="text-2xl font-bold">
                Design innovation consulting
              </h2>
            </div>
            <p className="mb-4">
              Great designs should be experienced, not seen. Our UX design
              services help you spot opportunities in unmet user needs, gain
              solid knowledge of market trends, and transform low-converting
              designs.
            </p>
            <ul className="space-y-2">
              <li> User and market research</li>
              <li> UI/UX audit</li>
              <li> Discovery workshops</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🖾</div>
              <h2 className="text-2xl font-bold">Wireframing</h2>
            </div>
            <p className="mb-4">
              We rely on conceptual wireframing to create a solid visual
              foundation for your product. Each wireframe is tested by our
              experts and validated by your team to make sure the project
              follows the right path.
            </p>
            <ul className="space-y-2">
              <li> Customer journey mapping</li>
              <li> User flow development</li>
              <li> Interactive wireframing</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">🔳</div>
              <h2 className="text-2xl font-bold">Prototyping</h2>
            </div>
            <p className="mb-4">
              Following research data and requirements, our designers craft
              clickable prototypes that demonstrate your design concept to
              stakeholders. Our prototypes allow for quick iterations before the
              final product, saving you time and effort in the development.
            </p>
            <ul className="space-y-2">
              <li> Feasibility check</li>
              <li> Wireframe iteration</li>
              <li> Low-/High-fidelity prototyping</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🧐</div>
              <h2 className="text-2xl font-bold"> Usability testing</h2>
            </div>
            <p className="mb-4">
              Our developers take the guesswork out of your design decisions and
              make sure your UX/UI clicks with the end user. We run a 360-degree
              analysis of an application’s interface and logic to iron out the
              kinks and eliminate flaws.
            </p>
            <ul className="space-y-2">
              <li> Expert-based / user testing</li>
              <li> UX/UI audit</li>
              <li> Accessibility assessment</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">📟</div>
              <h2 className="text-2xl font-bold">Frontend development</h2>
            </div>
            <p className="mb-4">
              Resort to our UI UX design and development services and connect
              the dots between business goals and user interactions. Our
              interfaces are designed with close attention to detail, allowing
              users to find what they need with the least effort..
            </p>
            <ul className="space-y-2">
              <li> Web front-end development</li>
              <li> Front-end development for mobile</li>
              <li> Cross-platform front-end development</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🪄</div>
              <h2 className="text-2xl font-bold">
                Redesign and modernization services
              </h2>
            </div>
            <p className="mb-4">
              Breathe new dynamics into the look and feel of your solutions and
              overcome the challenges of outdated user flows. Our UI services
              are rooted in the latest trends and technologies that ensure
              elevated and intuitive experiences augmented with cutting-edge
              features.
            </p>
            <ul className="space-y-2">
              <li>✅Tech modernization consulting</li>
              <li> Application redesign</li>
              <li> Legacy system modernization</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              User-centered design across platforms
            </h2>
            <div className="paragraph">
              <p>
                Expand your business reach and support workplace flexibility
                with our platform-agnostic designs that look great on every
                device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">💬</div>
              <h2 className="text-2xl font-bold">
                UI design services — Mobile design
              </h2>
            </div>
            <p className="mb-4">
              We provide end-to-end mobile UI UX design services that turn your
              high-level vision into a dynamic and feature-filled interface. Our
              sleek designs ensure smooth product adoption, captivate your
              audience, and skyrocket conversion rates.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🖾</div>
              <h2 className="text-2xl font-bold">
                UI design services — Web design
              </h2>
            </div>
            <p className="mb-4">
              Rely on our web UI design services to create responsive and
              SEO-friendly web designs that reduce the friction between you and
              the customer. We make sure our designs serve their purpose and
              help your business growth.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">🔳</div>
              <h2 className="text-2xl font-bold">
                UI design services — Cross-platform design
              </h2>
            </div>
            <p className="mb-4">
              Deliver holistic, near-native experiences based on cross-platform
              cohesion and reach your customers wherever they are. We check your
              designs on real devices to make sure they work as intended.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UiuxContent;
