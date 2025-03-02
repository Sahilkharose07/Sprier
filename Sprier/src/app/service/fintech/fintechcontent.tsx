import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Feel confident with robust security`;
const Fintechcontent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">Online payments</h2>
          </div>
        </div>
      </section>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-300 mb-6">
              We help our clients conduct business 24/7 by accepting secure and
              quick payments through online storefronts, payment forms, and
              embeddable solutions. Our financial software development company
              harnesses the power of front-line technologies, such as mobile,
              cloud, blockchain, etc. to fill online payment capabilities gaps.
              We can provide all the necessary integrations for API-based or
              completely online payments 100% complied with PCI DSS.
            </p>
            <ul className="space-y-2">
              <li> B2B and B2C payment systems</li>
              <li> Peer-to-peer payment systems</li>
              <li> NFC-solutions</li>
              <li> Encryption</li>
            </ul>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assetes/images/online-payment-security-concept-3d-phone-bill.webp"
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

      <div className="bg-black text-white py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div></div>
        </div>
      </div>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h2 className="fintechh1 text-2xl font-bold">
                Investment management
              </h2>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4"></div>
            <p className="mb-4">
              Whether these are financial institutions, real estate firms,
              investment advisors, or individuals, we provide clients with
              fintech software development services to anticipate changes and
              capitalize on emerging opportunities of a complex, ever-changing
              investment management landscape.
            </p>
            <p className="mb-4">
              Whether these are financial institutions, real estate firms,
              investment advisors, or individuals, we provide clients with
              fintech software development services to anticipate changes and
              capitalize on emerging opportunities of a complex, ever-changing
              investment management landscape. Our solutions help analyze actual
              market data, manage investment portfolios, optimize their
              performance as well as assess and mitigate investment risks.
            </p>
          </div>
        </div>
      </div>

      <div className="mobile-solutions">
        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/buy.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Stock trading </h3>
            <p>
              We build full-fledged stock trading solutions or create standalone
              modules to automate data-heavy tasks out of the investment. Our
              software helps track and analyze stock behavior in real time,
              advance trading operations, and make smarter investment decisions.
            </p>
            <p>
              For users to stay on top of their investment strategy, we bolster
              our software with alerts and notifications that inform about a
              target stock price, percentage change, exponential moving average,
              and more.
            </p>
            <ul>
              <li>Concurrent data monitoring</li>
              <li>Trading algorithms</li>
              <li>Integration with multiple stock data service providers</li>
              <li>Risk rebalancing</li>
              <li>Fraud detection</li>
              <li>Comprehensible and engaging data visualization</li>
            </ul>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/case.png" alt="Cross Platform" />
          </div>
          <div className="content">
            <h3>Portfolio management</h3>
            <p>
              The algorithms implemented by *Spriers help better forecast stock
              behavior, analyze asset classes, and maximize the expected return,
              while minimizing the risk of loss. With integration capabilities
              of our solutions, users get the opportunity to track their
              portfolios on a single platform rather than checking multiple
              applications to view their assets.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/predictive.png" alt="Hybrid" />
          </div>
          <div className="content">
            <h3>Predictive analytics</h3>
            <p>
              Empowered with artificial intelligence, data mining, and machine
              learning, we create forecasting models that help identify
              financial market trends, predict business outcomes, highlight
              untapped opportunities, and expose hidden risks.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/risk.png" alt="Hybrid" />
          </div>
          <div className="content">
            <h3>Risk management</h3>
            <p>
              Our risk mitigation approach includes multi-factor risk modeling
              and stress scenario testing so that users can opt for safer and
              more rewarding investments.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/brain.webp" alt="Hybrid" />
          </div>
          <div className="content">
            <h3>AI-powered automation</h3>
            <p>
              Financial services, paired with AI technology, take over the
              market and ensure an agile, customer-centric, digitally mature
              approach to financial management. Merging data mining and machine
              learning technologies, we create platforms that analyze vast
              amounts of financial data, forecast stock fluctuations, calculate
              stock volatility, and make recommendations on trading strategies.
            </p>
            <p>
              AI-driven robo-advisers analyze millions of data points, capturing
              information that current statistical models can’t, and execute
              trades under optimal conditions.
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
              As long as financial firms are more vulnerable to cyber attacks
              than any other institutions, we believe that an ounce of
              prevention is worth a pound of cure when it comes to fintech
              solutions.
            </p>
            <p>
              We get ahead of emerging problems by using carefully considered
              frameworks and methodologies and taking a security-by-design
              approach that incorporates cybersecurity requirements into all
              aspects of the digital architecture. * Spriers security experts
              make most of the latest technologies to deal with current or
              potential threats associated with sensitive financial information
              and customers’ personal data.
            </p>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assetes/images/secu.webp"
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

export default Fintechcontent;
