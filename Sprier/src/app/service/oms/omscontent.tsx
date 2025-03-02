import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { GrAnalytics, GrHostMaintenance, GrServices } from "react-icons/gr";
import { FaChartArea, FaHelmetSafety } from "react-icons/fa6";
import { FcSalesPerformance, FcWorkflow } from "react-icons/fc";
import { TbPresentationAnalytics, TbReportAnalytics } from "react-icons/tb";
import {
  MdSecurity,
  MdMobileFriendly,
  MdAccessTime,
  MdBorderColor,
  MdInventory,
} from "react-icons/md";
import { RiServiceLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { IoDocumentLockOutline, IoMedalOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineProduct } from "react-icons/ai";
import { PiMathOperationsThin } from "react-icons/pi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiClockwork } from "react-icons/gi";

const words = `Turn your projects into success stories with our time-tested Delivery Framework`;
const Omscontent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              The Essence of Operations Management Software
            </h2>
            <div className="paragraph">
              <p>
                Operations management software (OMS) helps plan, monitor, and
                coordinate production and service operations, digitalize daily
                employee workflows, identify and mitigate operational process
                bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Choose the OMS Type You’re Interested In
            </h2>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">
                <GrServices />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Software for service operations
              </h2>
            </div>
            <p className="mb-4">
              For service- and project-centric companies that need to optimize
              service-related activities and improve management of human
              resources, projects, service requests, supply chain, T&E,
              service-related documents.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">
                <FaHelmetSafety />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Software for production operations
              </h2>
            </div>
            <p className="mb-4">
              For manufacturing-centric enterprises that need to optimize
              production activities and improve management of inventory,
              warehouses, workforce, machinery and equipment maintenance,
              purchase and sales orders.
            </p>
          </div>
        </div>
      </div>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Factors that Drive ROI of an Operations Management System
            </h2>
            <div className="paragraph">
              <p>
                In OMS projects, ScienceSoft always seeks to cover the following
                important factors that may bring additional value for the
                customer across operations management processes
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">
                <FcWorkflow />
              </div>
              <h2 className="omscard text-2xl font-bold">
                End-to-end workflow automation
              </h2>
            </div>
            <p className="mb-4">
              To improve the productivity of the employees involved in business
              operations, speed up operational processes, reduce labor costs,
              and eliminate human errors.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "yellow" }}
              >
                <TbPresentationAnalytics />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Comprehensive data analytics
              </h2>
            </div>
            <p className="mb-4">
              To ensure accurate, data-driven operations planning and get
              intelligent recommendations on optimal resource utilization and
              operational risk prevention.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl">
                <MdSecurity />
              </div>
              <h2 className="omscard text-2xl font-bold">Focus on security</h2>
            </div>
            <p className="mb-4">
              To protect the OMS and sensitive data it stores by employing
              multi-factor authentication, role-based access control, data
              encryption, AI-powered fraud detection, and other advanced
              cybersecurity tools.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "green" }}
              >
                <MdMobileFriendly />
              </div>
              <h2 className="omscard text-2xl font-bold">Mobile access</h2>
            </div>
            <p className="mb-4">
              To enable the operations teams to control the status of
              production/service operations on the go, streamline the reporting
              on operations progress and escalation of operational process
              issues.
            </p>
          </div>
        </div>
      </div>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Key Features of Service Operations Management Software
            </h2>
            <div className="paragraph">
              <p>
                Service operations management solutions may cater for businesses
                with both one-time projects and continuous service operations.
                They help streamline daily workflows for multiple user groups –
                operations and resource managers, project managers, service
                delivery teams, and others. Below, ScienceSoft shares a sample
                feature set of service operations management software.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-red-500 text-3xl"
                style={{ color: "skyblue" }}
              >
                <RiServiceLine />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Service planning and optimization (for managers)
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Setting up service-related workflows (approval workflows,
                corporate policies to follow, etc.).
              </li>
              <li>
                Continuous service improvement management (identifying service
                best practices, gathering employees’ ideas and conducting votes
                on service improvement ideas).
              </li>
              <li>Service level agreement management.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "yellow" }}
              >
                <FaProjectDiagram />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Project tasks and service requests management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>Task/request assignment and progress status tracking.</li>
              <li>
                Automated booking of employees’ working hours based on assigned
                activities.
              </li>
              <li>
                Configurable task/request schedule viewer for employees/teams
                (with a calendar view, Gantt chart view, etc.).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl" style={{ color: "red" }}>
                <MdAccessTime />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Time and expense management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>Configurable timesheets and expense claim forms.</li>
              <li>
                Time tracking of employees’ billable and non-billable hours.
              </li>
              <li>
                Expense tracking (submitting receipts for transportation
                expenses, etc.).
              </li>
              <li>
                Automated approval workflow for employees’ timesheets and
                expense claims.
              </li>
              <li>
                Automated invoice generation (based on approved billable hours
                and expenses) and status tracking (approved/pending, etc.).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "yellow" }}
              >
                <IoDocumentLockOutline />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Document management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Centralized view of human resource data (employee profiles with
                up-to-date information on skills, availability, workload, and
                bill rates).
              </li>
              <li>
                Human resource allocation (comparing skill sets available in
                employee profiles and assigning fitting candidates to
                projects/service requests).
              </li>
              <li>AI-driven suggestions on resource allocation.</li>
              <li>
                Real-time resource demand forecasting (based on the analysis of
                available capacity).
              </li>
              <li>
                Configurable capacity utilization dashboards (allow checking
                capacity per specific periods, business units, departments,
                etc.).
              </li>
              <li>
                Alerting on resource under- or overutilization to resource
                managers and PMs.
              </li>
              <li>
                AI-driven recommendations on where to engage under-utilized
                resources.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "wheat" }}
              >
                <GoProjectRoadmap />
              </div>
              <h2 className="omscard text-2xl font-bold">Project management</h2>
            </div>
            <ul className="space-y-2">
              <li>
                Project planning (setting up goals, milestones, timeline,
                budget, stakeholders, etc.).
              </li>
              <li>
                Project process breakdown (creating and editing tasks and
                sub-tasks required to complete a project).
              </li>
              <li>
                Project time and resources estimation based on historical data
                about completed projects.
              </li>
              <li>
                Form-based resource request creation and automated routing to
                resource managers.
              </li>
              <li>Current vs. planned project progress monitoring.</li>
              <li>Current vs. forecast project margin monitoring.</li>
              <li>
                Project budget monitoring (burn rate, remaining budget, etc.).
              </li>
              <li>
                Security and compliance monitoring (critical, e.g., for IT
                operations management software).
              </li>
              <li>
                Configurable alerts on deadlines, project risks, etc. (for
                project managers and team members).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "lightseagreen" }}
              >
                <AiOutlineProduct />
              </div>
              <h2 className="omscard text-2xl font-bold">Supply management</h2>
            </div>
            <ul className="space-y-2">
              <li>
                Barcode-based tracking of supplies’ quantity and location.
              </li>
              <li>
                Setup of reorder levels and alerts for low-stock supplies (can
                be tuned for different locations).
              </li>
              <li>Supply purchase order creation and approval.</li>
              <li>Purchase order status tracking and history overview.</li>
              <li>Setup of preferred suppliers for ordering.</li>
              <li>
                Supply demand forecasting (based on historical demand data and
                seasonal demand fluctuations).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "lightgreen" }}
              >
                <GrAnalytics />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Project and service analytics
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Change impact analysis (shows how changes, e.g. unexpected
                delays, affect service schedule or project progress).
              </li>
              <li>
                Revenue forecasting based on real-time monitoring of
                service/project delivery (can be drilled down by service types
                or projects, clients, business units, etc.).
              </li>
              <li>Resource utilization reports.</li>
              <li>
                AI-based project/service risk assessment (e.g., comparing
                customer demand with a company’s current resource capacity).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Key Features of Production Operations Management Software
            </h2>
            <div className="paragraph">
              <p>
                Having in-depth experience in building production operations
                management tools, ScienceSoft shares a sample feature set that
                forms the solution core. However, each real-life use case for
                such software is unique, so functionality should be elaborated
                on and tailored to the business specifics accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="clouddiv">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-red-500 text-3xl" style={{ color: "red" }}>
                <FaChartArea />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Production planning
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Production KPIs setup and monitoring (e.g., production volume
                and costs).
              </li>
              <li>Material requirements planning.</li>
              <li>Production scheduling.</li>
              <li>
                Automated production schedule adjustment (e.g., in case of
                incoming make-to-order requests or production delays).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "yellow" }}
              >
                <PiMathOperationsThin />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Operations optimization
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                AI suggestions for production optimization (based on historical
                production data).
              </li>
              <li>
                Multi-plant production optimization (balancing production load
                across several plants).
              </li>
              <li>
                What-if production scenario modeling and cross-comparison (to
                generate different options of a production schedule and choose
                the best one).
              </li>
              <li>
                Multi-location inventory optimization (calculating optimal
                inventory levels across warehouses based on multiple factors,
                from sales data to weather conditions).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-red-500 text-3xl"
                style={{ color: "yellow" }}
              >
                <MdBorderColor />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Production order management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Production order creation (with auto-attachment of BOMs, e.g.,
                via an integration with PLM software).
              </li>
              <li>
                Automated estimation of production order costs and capacity
                requirements (based on product specifications).
              </li>
              <li>
                Automated reservation of materials for a production order.
              </li>
              <li>
                Production order routing (defining the sequence of operations to
                produce a product, integrating an order into the production
                schedule) and status tracking.
              </li>
              <li>
                Automated generation of a production order receipt (with the
                final calculation of production costs based on the recorded
                material, machine and workforce usage).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "skyblue" }}
              >
                <MdInventory />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Inventory management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>Inventory levels monitoring</li>
              <li>
                Time tracking of employees’ billable and non-billable hours.
              </li>
              <li>
                Setup of inventory reorder points and automated trigger of
                purchase orders.
              </li>
              <li>Alerts on low-level inventory.</li>
              <li>
                Creation, routing and status tracking of inventory transfer
                orders.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "green" }}
              >
                <FcSalesPerformance />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Sales order management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>Sales order creation and status tracking.</li>
              <li>
                Human resource allocation (comparing skill sets available in
                employee profiles and assigning fitting candidates to
                projects/service requests).
              </li>
              <li>Automated invoice generation and routing for approval.</li>
              <li>
                Automated generation of purchase and/or production orders from a
                sales order.
              </li>
              <li>Automated inventory reservation for a sales order.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "honeydew" }}
              >
                <BiSolidPurchaseTag />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Purchase order management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Purchase order request creation and automated routing for
                approval.
              </li>
              <li>Purchase order creation and status tracking.</li>
              <li>
                Project time and resources estimation based on historical data
                about completed projects.
              </li>
              <li>
                Setup of preferred suppliers for particular inventory groups.
              </li>
              <li>
                Setup of spend limits per user/department (on purchase orders).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "purple" }}
              >
                <GiClockwork />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Workforce management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Workforce scheduling (production and maintenance workers, etc.).
              </li>
              <li>Workforce performance reports.</li>
              <li>
                Instant messaging (for easy communication between planners and
                operations managers and the shop-floor personnel and vice
                versa).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "blueviolet" }}
              >
                <GrHostMaintenance />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Machinery and equipment maintenance management
              </h2>
            </div>
            <ul className="space-y-2">
              <li>
                Machine maintenance scheduling (for regular maintenance
                activities coordinated with a production schedule).
              </li>
              <li>
                Maintenance request creation and automated routing for approval
                (for on-demand activities, e.g., in case of machine malfunction
                or irregular performance).
              </li>
              <li>Maintenance order assignment and status tracking.</li>
              <li>Predictive maintenance for equipment.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl" style={{ color: "gold" }}>
                <IoMedalOutline />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Production quality control
              </h2>
            </div>
            <ul className="space-y-2">
              <li>Quick form-based creation of quality control charts.</li>
              <li>
                Scheduling and assignment of quality checks (with
                auto-attachment of quality control charts).
              </li>
              <li>
                Alert escalation on defective products (to production
                supervisors).
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="text-gray-500 text-3xl"
                style={{ color: "cadetblue" }}
              >
                <TbReportAnalytics />
              </div>
              <h2 className="omscard text-2xl font-bold">
                Analytics and reporting
              </h2>
            </div>
            <ul className="space-y-2">
              <li>Product demand forecasting.</li>
              <li>Product demand vs. production capacity analysis.</li>
              <li>Workforce demand forecasting.</li>
              <li>
                Impact analysis for production schedule adjustments (to see how
                current production orders will be affected by the changes).
              </li>
              <li>
                Capacity utilization reports (on machine and workforce
                utilization).
              </li>
              <li>
                Production reports (on the production outputs at a given period,
                e.g. day/week).
              </li>
              <li>Production costs monitoring and analysis.</li>
              <li>Inventory carrying costs analysis.</li>
              <li>
                Inventory purchasing reports (with historical costs trends).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Omscontent;
