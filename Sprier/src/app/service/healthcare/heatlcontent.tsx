import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Turn your projects into success stories with our time-tested Delivery Framework`;
const Healthcontent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Addressing the Needs of Healthcare Companies with Top-Notch
              Software Development
            </h2>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">📈</div>
              <h2 className="omscard text-2xl font-bold">
                Digital Experience Across All Screens and Platforms
              </h2>
            </div>
            <p className="mb-4">
              We support all types of platforms in our healthcare development
              projects, including cross-platform systems for streamlining
              hospital workflows, embedded solutions for wearables, and mobile
              and web apps for better customer engagement.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🔄</div>
              <h2 className="omscard text-2xl font-bold">
                Cutting Edge Technology
              </h2>
            </div>
            <p className="mb-4">
              Our company provides healthcare software services that meet the
              latest trends in technology, such as IoT solutions for hospitals,
              virtual reality, AI-based medical solutions, remote diagnostics,
              and speech recognition.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🏅</div>
              <h2 className="omscard text-2xl font-bold">
                Security Standards Compliant Software
              </h2>
            </div>
            <p className="mb-4">
              From ideation to production, we guarantee compliance with HIPAA
              and PHI security standards at every phase of custom software
              development. Our security procedures ensure that sensitive medical
              data is fully protected from leakage and malicious attacks.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">📱</div>
              <h2 className="omscard text-2xl font-bold">
                Integration With Third-Party Systems
              </h2>
            </div>
            <p className="mb-4">
              Our healthcare software development services follow
              interoperability standards. From payment and billing systems to
              various social networks, we ensure that your custom software
              communicates smoothly with the necessary third-party systems.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-solutions">
        <div className="section-heading">
          <h2>Making Healthcare Workflows Effective</h2>
          <p>
            Whether it’s a fresh idea or a major system in need of a redesign,
            our full-stack development team is devoted to providing high-quality
            guidance and services at every stage of the software development
            process for your healthcare start-up or organization.
          </p>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/hospital.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Medical Practice Management Software</h3>
            <p>
              Leverage the latest technologies to automate and simplify your
              everyday operations. From revenue cycle management and health
              insurance claims software to EHR management and patient portals,
              our development team will devote its full efforts to helping you
              achieve your maximum efficiency.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/computer.png" alt="Cross Platform" />
          </div>
          <div className="content">
            <h3>Healthcare CRMs</h3>
            <p>
              Improve your healthcare organization’s customer relationships by
              providing easier access, convenient communication features, and
              personalized care — all guarded by reliable and robust security.
            </p>
            <p>
              Understanding your audience and targeting it precisely is vital in
              the healthcare industry. We provide the necessary tools to achieve
              true personalization, including consumer engagement solutions,
              customer satisfaction surveys, as well as online and cloud-based
              CRM solutions.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/health-insurance.png" alt="Hybrid" />
          </div>
          <div className="content">
            <h3>Health Insurance Software</h3>
            <p>Traditional Health Plans</p>
            <p>
              Cut costs, save time, minimize human error, and optimize your
              processes with such solutions and features as:
            </p>
            <ul className="space-y-2">
              <li> Insurance claims management</li>
              <li> Healthcare insurance data and records handling</li>
              <li> Benefits administration</li>
            </ul>
            <p>
              Build solutions for individual and family health insurance plans,
              Medicare, Medicaid, and employer groups while integrating them
              with EHR software.
            </p>
            <h3>Consumer Directed Healthcare (CDHC)</h3>
            <p>
              health insurance software can help you effectively overcome the
              complexities of consumer-directed health plans, such as:
            </p>
            <ul className="space-y-2">
              <li> Flexible Spending Accounts (FSA)</li>
              <li> Health Savings Accounts (HSA)</li>
              <li> Voluntary Employees’ Beneficiary Association (VEBA)</li>
              <li> Health Reimbursement Arrangements (HRA)</li>
              <li> Consolidated Omnibus Budget Reconciliation Act (COBRA)</li>
              <li> Defined contribution and wellness plans.</li>
            </ul>
            <p>
              Our company responds to the demands of a complex and dynamic
              consumer-directed healthcare market and helps clients manage
              eligibility, enrollment, payments, and substantiation through
              self-service applications and portals while ensuring compliance
              with IRS regulations.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/hospital1.png" alt="Hybrid" />
          </div>
          <div className="content">
            <h3>Hospital Management Systems</h3>
            <p>
              Advances in MedTech and healthcare software development have made
              streamlining hospital workflows much easier. We specialize in
              hospital applications development of all types, such as
            </p>
            <ul className="space-y-2">
              <li> Outpatient/inpatient record management systems</li>
              <li> Hospital asset tracking</li>
              <li> Inventory management for hospitals</li>
              <li> EMR/EHR</li>
              <li> Revenue cycle management</li>
              <li> Clinical communication and collaboration</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Healthcontent;
