import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Manufacturing Inventory Management Software Development`;
const words2 = `Warehouse Management Software Development`;
const Manufecturecontent = () => {
  return (
    <>
      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">🦾</div>
              <h2 className="omscard text-2xl font-bold">
                Innovative Technologies
              </h2>
            </div>
            <p className="mb-4">
              Utilize modern technologies, such as AI, IoT, industrial robotics,
              and smart manufacturing, to maximize efficiency and minimize
              spending.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🧩</div>
              <h2 className="omscard text-2xl font-bold">
                Integration with Third-Party Systems
              </h2>
            </div>
            <p className="mb-4">
              Our software can be seamlessly integrated into your enterprise
              infrastructure, as well as with other third-party systems and
              hardware.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🧑‍💻</div>
              <h2 className="omscard text-2xl font-bold">
                All-encompassing Manufacturing Software
              </h2>
            </div>
            <p className="mb-4">
              Having experience in software development for all screens and
              platforms, our experts can create web, desktop, mobile or embedded
              software, based on your business needs.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-yellow-500 text-3xl">🗺</div>
              <h2 className="omscard text-2xl font-bold">
                Solutions that Minimize Environmental Impact
              </h2>
            </div>
            <p className="mb-4">
              We implement solutions that reduce environmental impact from
              manufacturing factories with such tools as raw materials inventory
              management, priority-based production planning and auto-booking
              engines.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-solutions">
        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/erp.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Enterprise Resource Planning (ERP) Software</h3>
            <p>
              We offer ERP development services that optimize manufacturing
              processes on every level, providing such capabilities as:
            </p>
            <ul>
              <li>Efficient order management</li>
              <li>Production process tracking</li>
              <li>Raw materials and consumables tracking</li>
              <li>Asset management</li>
              <li>Centralizing product data</li>
              <li>Integration with lifecycle management</li>
            </ul>
            <p>
              Our ERP solutions can be used for various types of manufacturers,
              including Make-to-Stock (MTS), Make-to-Order (MTO) and
              Configure-to-Order (CTO).
            </p>
            <p>
              We provide software functionality that gives you the flexibility
              to customize and configure industrial processes, as well as
              automate configuration, depending on clients’ needs.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img
              fetchPriority="high"
              src="/assetes/images/production.png"
              alt="Cross Platform"
            />
          </div>
          <div className="content">
            <h3>Production and Workflow Monitoring and Automation Apps</h3>
            <p>Manufacturing Workflow Automation Solutions</p>
            <p>
              Improve the efficiency of your industrial processes by introducing
              workflow automation solutions, such as planning automation,
              procurement automation and compliance automation. Minimize manual
              administrative tasks and document management procedures. We
              provide various options for automating your processes with the
              help of such technological advancements as AI, robotics, IoT and
              other software development services for manufacturing companies.
            </p>
            <p>Production and Workflow Monitoring Software Development</p>
            <p>
              Utilize monitoring software solutions to track all aspects of your
              production processes, receiving real-time visibility into every
              little detail of your manufacturing organization and supply chain.
              Use real-time unobtrusive employee monitoring tools to improve
              workforce management, team scheduling and planning. Achieve such
              benefits as improved productivity and quality of your
              manufacturing operations and eliminate downtime with the help of
              timely data capture and analysis.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img
              fetchPriority="high"
              src="/assetes/images/mechanic.png"
              alt="Hybrid"
            />
          </div>
          <div className="content">
            <h3>Manufacturing Execution Systems</h3>
            <p>
              Optimize your production processes with robust manufacturing
              execution software. We develop manufacturing execution systems
              that gather precise real-time data about every stage of the
              production lifecycle, including material management, performance
              and traceability. Integrate your MES with ERP, product lifecycle
              management, enterprise asset management and supply chain
              management for better results and performance.
            </p>
            <p>
              By implementing a manufacturing execution system you receive such
              benefits as a lower manufacturing cycle time, increased machine
              utilization, improved supply chain visibility and regulatory
              compliance, while eliminating paperwork and mundane data-entry
              processes.
            </p>
            <ul className="space-y-2">
              <li>
                Monitoring movements of materials and personnel in real-time
              </li>
              <li> Capturing data from SCADA systems</li>
              <li> Resource planning</li>
              <li>
                Visual representation of the shop floor, workstations and
                equipment
              </li>
              <li>Production plans and schedules implementation</li>
            </ul>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img
              fetchPriority="high"
              src="/assetes/images/workforce.png"
              alt="Hybrid"
            />
          </div>
          <div className="content">
            <h3>Software Development for Project and Workforce Management</h3>
            <p>
              Our company offers IT solutions for manufacturing companies that
              help perfect project and team management processes leading to
              increased employee productivity. Providing such functionalities as
              Kanban boards, Gantt task lists and charts, user permissions and
              customer workflows, we aim to reduce your lead time and eliminate
              bottlenecks while keeping the quality of your projects high.
            </p>
            <p>
              Implement a workforce monitoring and management system to control
              labor costs, simplify compliance and improve employee efficiency.
              With such features as accurate labor deployment, control of costs,
              employee empowerment and compliance management, a workforce
              management system will optimize numerous aspects of employee
              management processes.
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
            <p className="text-lg text-gray-300 mb-6">
              Speed up your industrial processes, optimize workflows and
              minimize human factor errors with inventory management software.
              Our manufacturing software development services help to simplify
              inventory management with such features as:
            </p>
            <ul>
              <li>Advanced reporting</li>
              <li>Product assemblies</li>
              <li>Back-ordering</li>
              <li>Multi-warehouse management</li>
              <li>Costed purchase orders</li>
              <li>Production planning</li>
            </ul>
          </div>

          {/* Right Section: Image fetchPriority="high" */}
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  fetchPriority="high"
                  src="/assetes/images/slaesoft.jpg"
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
      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  fetchPriority="high"
                  src="/assetes/images/woman-worker-taking-notes-warehouse.webp"
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
              <TextGenerateEffect words={words2} />
            </h2>
            <p className="text-l text-gray-300 mb-6">
              Reduce costs, improve customer satisfaction and achieve better
              warehouse efficiency with warehouse management software. Our WMS
              solutions can seamlessly integrate with ERP, sales, transport
              systems, purchasing and supply chain software, helping you
              streamline manufacturing processes on numerous levels. Introducing
              a WMS allows you to:
            </p>
            <ul>
              <li>Customize how orders are processed and delivered</li>
              <li>Improve visibility into inventory</li>
              <li>Monitor employee working hours</li>
              <li>Reduce stockout with automatic reorder points</li>
              <li>Support warehouse channels around a variety of locations</li>
              <li>Reduce dead-head time</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Manufecturecontent;
