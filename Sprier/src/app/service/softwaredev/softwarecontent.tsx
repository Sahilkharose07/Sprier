import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Turn your projects into success stories with our time-tested Delivery Framework`;
const SoftwaredevContent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Whatever tech challenge you have, our development services can
              solve it
            </h2>
            <div className="paragraph">
              <p>
                As your software development agency, we build bespoke solutions
                that span web, mobile, desktop, server-side, IoT, and everything
                in between. From ideation to integration, *Sprier works
                hand-in-glove with you every step of your engineering journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">📈</div>
              <h2 className="text-2xl font-bold">Product Development</h2>
            </div>
            <p className="mb-4">
              Our BAs gear up your project for successful implementation by
              eliciting requirements, prioritizing the backlog, and getting your
              project documentation lined up. We also deliver visual
              representations of your digital solutions so you can build the
              right product on the first try.
            </p>
            <ul className="space-y-2">
              <li> Scope definition and documentation</li>
              <li> Full-cycle project development support</li>
              <li> Requirements gathering and validation</li>
              <li> User acceptance testing</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🔄</div>
              <h2 className="text-2xl font-bold">
                Software Integration Services
              </h2>
            </div>
            <p className="mb-4">
              Put an end to your data chaos by enabling smooth data exchange
              between your business software systems. Our software company
              introduces simple, yet scalable integrations in line with HIPAA,
              GAMP, PCI DSS, and other regulations.
            </p>
            <ul className="space-y-2">
              <li> P2P /ESB /Hub-and-spoke integration</li>
              <li> API development</li>
              <li> Cloud integration</li>
              <li> IoT integration</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🎨</div>
              <h2 className="text-2xl font-bold">UX and Design Services</h2>
            </div>
            <p className="mb-4">
              Great application design goes beyond aesthetics. Our application
              development company finds a fair balance between creativity and
              usability to keep your solutions pretty, yet functional.
            </p>
            <ul className="space-y-2">
              <li> Prototyping and wireframing</li>
              <li> Usability testing</li>
              <li> Frontend development</li>
              <li> Redesign services</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">⚙️</div>
              <h2 className="text-2xl font-bold">Enterprise Automation</h2>
            </div>
            <p className="mb-4">
              Since 2000, our software application development company has been
              assisting enterprises in creating software that automates complex
              business processes. Our solutions enable your company to move at
              the speed of change.
            </p>
            <ul className="space-y-2">
              <li> Enterprise software modernization and integration</li>
              <li> Digital transformation</li>
              <li> Intelligent enterprise automation</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🏅</div>
              <h2 className="text-2xl font-bold"> Quality assurance</h2>
            </div>
            <p className="mb-4">
              We deliver full-cycle software application testing services to
              validate every aspect of your software solution, from functional
              to non-functional components. Our QA engineers bank on a
              combination of manual and automated testing methods to increase
              the release pace and reduce the cost of testing by up to 30%.
            </p>
            <ul className="space-y-2">
              <li> Manual and automation testing</li>
              <li> API testing</li>
              <li> Security testing</li>
              <li> Web and mobile quality assurance</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">📱</div>
              <h2 className="text-2xl font-bold"> Mobile development</h2>
            </div>
            <p className="mb-4">
              Secure, user-focused, and impactful, our mobile apps empower you
              to break into the mobile market and grow your business. Our
              dedicated team of mobile developers builds native and
              cross-platform mobile applications with big-time features, keeping
              user and stakeholder feedback at the core of all processes.
            </p>
            <ul className="space-y-2">
              <li> Android mobile app development</li>
              <li> iOS mobile app development</li>
              <li> Cross-platform mobile applications</li>
              <li> Hybrid mobile apps</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl"></div>
              <h2 className="text-2xl font-bold">
                {" "}
                Software modernization services
              </h2>
            </div>
            <p className="mb-4">
              Rely on our development services to upgrade and future-proof your
              outdated business systems. Our software development team delivers
              a revamped version of your software that is easy to maintain,
              intuitive to work with, and fast to accommodate your growing
              business needs.
            </p>
            <ul className="space-y-2">
              <li> Cloud migration and containerization</li>
              <li> Usability testingApplication customization</li>
              <li> Complete re-engineering</li>
              <li> Dev(Sec)Ops transformation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  fetchPriority="high"
                  src="/assetes/images/framwork.webp"
                  height={1000}
                  width={1000}
                  className="h-75 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="My Custom Thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">
              <TextGenerateEffect words={words} />
            </h2>
            <p className="text-l text-gray-300 mb-6">
              At *Sprier, we know that however great your product idea is,
              nothing much will come of it without proper implementation. Built
              on the principles of Disciplined Agile Delivery and PMBoK 7 and
              honed by 650+ projects, our proprietary Delivery Framework brings
              consistency, clarity, and structure to the software development
              process. Sticking to this methodology, we ensure you get
              first-rate quality software for business, delivered on time and on
              budget.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">🔣</div>
              <h2 className="text-2xl font-bold">
                Architecture-driven approach
              </h2>
            </div>
            <p className="mb-4">
              We put architecture-driven methodology at the center of your
              software project to set the context for all development processes.
              Our developers use well-defined development artifacts and optimal
              solution architectures as a launchpad for reliable, risk-free, and
              business-driven solutions.
            </p>
            <ul className="space-y-2">
              <li> Scope definition and documentation</li>
              <li> Full-cycle project development support</li>
              <li> Requirements gathering and validation</li>
              <li> User acceptance testing</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">👨🏼‍💻</div>
              <h2 className="text-2xl font-bold">
                Tried-and-true engineering practices
              </h2>
            </div>
            <p className="mb-4">
              It’s not enough to add Agile software development and the latest
              software development tools to your product engineering checklist.
              You need to establish a culture of continuous learning,
              collaboration, and adaptation within your development team — and
              our company checks all these boxes.
            </p>
            <ul className="space-y-2">
              <li> Requirements analysis</li>
              <li> Solution architecture design</li>
              <li> Detailed documentation</li>
              <li> Architecture review</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">📕</div>
              <h2 className="text-2xl font-bold">PM Handbook</h2>
            </div>
            <p className="mb-4">
              Guided by the best project management practices, advanced tools,
              and comprehensive checklists, our team guarantees your project
              hits the mark.
            </p>
            <ul className="space-y-2">
              <li> Transparent process</li>
              <li> Efficient communication</li>
              <li> Risk management</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">⤴️</div>
              <h2 className="text-2xl font-bold">
                Ease of governance and escalation
              </h2>
            </div>
            <p className="mb-4">
              Our governance model enables fluid collaboration between the
              client’s and *Sprier teams throughout the entire project. With
              regular reviews at every level — from team leaders to executives —
              we align closely with your vision, managing risks and keeping your
              project on track.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SoftwaredevContent;
