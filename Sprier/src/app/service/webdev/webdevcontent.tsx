import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Delivering web apps for all kinds of needs`;
const WebdevContent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Wield the potential of web application development
            </h2>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">⚡︎</div>
              <h2 className="text-2xl font-bold">Fast</h2>
            </div>
            <p className="mb-4">
              Enough with laggy interactions and poor responsiveness — our web
              developers use high-performance web frameworks, well-organized
              architectures, and effective CSS optimization techniques to build
              high-speed apps.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">👍</div>
              <h2 className="text-2xl font-bold">Reliable</h2>
            </div>
            <p className="mb-4">
              When it comes to architecture design, we prepare your app for now
              and for the unexpected. That’s why we create a robust, flexible
              server architecture that will be able to handle high loads without
              missing a beat.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🧩</div>
              <h2 className="text-2xl font-bold">Scalable</h2>
            </div>
            <p className="mb-4">
              Limited scalability of software traps business growth. We design
              with scalability in mind, putting modular structures at the heart
              of our applications, to let them grow with the flow and support
              your existing and future needs.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">📄</div>
              <h2 className="text-2xl font-bold">Compliant</h2>
            </div>
            <p className="mb-4">
              We balance innovation with compliance and implement the necessary
              safeguards and data security practices to ensure compliance with
              GDPR, HIPAA, PCI DSS, CCPA, and other relevant legal standards and
              regulations.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🛡️</div>
              <h2 className="text-2xl font-bold"> Secure</h2>
            </div>
            <p className="mb-4">
              When developing your solution, we ensure conformity with ISO 2700
              and NIST 800 to make sure your web app is developed in line with
              benchmark security requirements. Our comprehensive InfoSec
              approach relies on multiple levels of protection, including secure
              SDLC, hybrid infrastructure, IP and personal data protection to
              safeguard your solution.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">👤</div>
              <h2 className="text-2xl font-bold"> User-focused</h2>
            </div>
            <p className="mb-4">
              People respond when you go the extra mile for them — the same goes
              for user experiences. Our development team goes by your end user’s
              needs, preferences, and behaviors to develop engaging web
              experiences that resonate with your target audience.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  fetchPriority="high"
                  src="/assetes/images/webapp.webp"
                  height={1000}
                  width={1000}
                  className="h-75 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="Benefits Thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              <TextGenerateEffect words={words} />
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              You tell us your business goals, and we’ll build the solution to
              get you there.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">📲</div>
              <h2 className="text-2xl font-bold">
                Platform-based web development
              </h2>
            </div>
            <p className="mb-4">
              Leverage our customized app development services and build on top
              of the popular ready-made platforms to cut costs without
              trade-offs. From fine-tuning the platform’s CMS to developing
              plugins, we will help your customized solution mesh better with
              your business needs.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">👨🏼‍💻</div>
              <h2 className="text-2xl font-bold">
                Fully web development from scratch
              </h2>
            </div>
            <p className="mb-4">
              Platform-based development doesn’t suffice your stringent
              requirements? Designed to your needs to the ninth degree, our web
              solutions give you full control over your application performance,
              security, and feature selection.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🧠</div>
              <h2 className="text-2xl font-bold">PWA</h2>
            </div>
            <p className="mb-4">
              We build user-first device-agnostic Progressive Web Applications
              that bring app-like experience to end-users, regardless of the
              conditions. Our PWAs combine offline capabilities with fast
              loading times and responsiveness to cut your bounce rates and
              increase conversions.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">☁️</div>
              <h2 className="text-2xl font-bold">
                Cloud-native web development
              </h2>
            </div>
            <p className="mb-4">
              Develop solutions that take full advantage of cloud-based delivery
              models and adjust to your business needs at the double. We deliver
              ready-to-deploy containerized web applications with the
              microservices architecture at the core that offers unmatched
              scalability, flexibility, and resilience.
            </p>
          </div>
        </div>
      </div>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Pull in our web application development services to accelerate
              your project
            </h2>
            <div className="paragraph">
              <p>
                Our web application development company meets you whenever you
                are and drives your web development project to success. At
                *Sprier, you can find all the necessary expertise, complimented
                with a nuanced domain understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">🤝</div>
              <h2 className="text-2xl font-bold">Consulting</h2>
            </div>
            <p className="mb-4">
              Our web app development company provides guidance on various
              aspects of web app development, including product design,
              architecture, and compliance management. We can also audit your
              underperforming software to break down the performance bottlenecks
              and accelerate your ongoing development process by sharing our
              best practices.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🏅</div>
              <h2 className="text-2xl font-bold">Quality assurance</h2>
            </div>
            <p className="mb-4">
              Deliver a high-grade, faultless web experience your company can be
              proud of. As part of our app development services, our team offers
              a comprehensive suite of QA capabilities, including functional,
              usability, performance, and other types of testing, to refine your
              solution and make it clear for a successful takeoff.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🔎</div>
              <h2 className="text-2xl font-bold">Discovery</h2>
            </div>
            <p className="mb-4">
              A clear vision and a roadmap about your project objectives are
              crucial to nipping development challenges in the bud. Our team of
              business analysts, solution architects, and designers runs
              discovery sessions to scope your project, document all the
              requirements, and develop a solid foundation for your app,
              including solution architecture and initial wireframes.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">👨🏼‍💻</div>
              <h2 className="text-2xl font-bold">Full-stack development</h2>
            </div>
            <p className="mb-4">
              At our web app development company you can build the front end and
              back end of your web application in one go. Our developers are
              well-versed in developing web applications with complex business
              logic, achieving a high level of performance, and keeping the
              security of your application watertight.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">✨</div>
              <h2 className="text-2xl font-bold">UX/UI design</h2>
            </div>
            <p className="mb-4">
              Websites need a rad look to attract audiences — 38% of consumers
              bounce when they see unattractive layouts. Drawing on the
              behaviors and interactions of your target audience, our design
              team creates a user-friendly web design that looks great on every
              device and improves the accessibility of your web solution.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">👥</div>
              <h2 className="text-2xl font-bold"> Third-party integrations</h2>
            </div>
            <p className="mb-4">
              Our development team sets up business-critical integrations for
              your software, helping you streamline business processes and
              elevate the solution’s features. We put the security of your
              integrations first and run integration and unit testing to ensure
              seamless and secure data flows between target systems.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">🎧</div>
              <h2 className="text-2xl font-bold">Support and maintenance</h2>
            </div>
            <p className="mb-4">
              Once you roll out software, it’s not a set-and-forget deal. You
              need ongoing performance monitoring, troubleshooting, and feature
              upgrades to adjust it to your evolving business objectives and
              customer needs. That’s exactly what our dedicated support team
              does, ensuring your product’s reliability and protecting it from
              flaws.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">⏳</div>
              <h2 className="text-2xl font-bold">
                Legacy software modernization
              </h2>
            </div>
            <p className="mb-4">
              Clunky, sluggish, and restrictive legacy systems erode your
              profitability and lead to unforeseen financial burdens. Our team
              helps you offset the risk of stale software and turn it into a
              state-of-the-art web solution, revamped to be flexible and updated
              with new features to fit the gyration of your business processes.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">👨‍💻</div>
              <h2 className="text-2xl font-bold">DevOps</h2>
            </div>
            <p className="mb-4">
              Releasing high-quality software is important, but making it faster
              and smarter is even more so. In DevOps since 2010, our application
              development company has a team of experts that can help you usher
              in more automation into software delivery and maximize the quality
              of your deliverables.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebdevContent;
