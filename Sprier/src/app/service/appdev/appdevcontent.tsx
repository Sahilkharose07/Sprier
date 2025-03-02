import React from "react";
import { GrApple } from "react-icons/gr";
import { AiFillAndroid } from "react-icons/ai";
import { FcMultipleDevices } from "react-icons/fc";
import Footer from "@/components/Footer";

const AppdevContent = () => {
  return (
    <>
      <div className="mobile-solutions">
        <div className="section-heading">
          <h2>Mobile solutions we build</h2>
          <p>
            We help our clients take advantage of rapid tech changes without
            encumbering their businesses. We create, integrate, and leverage
            features in their mobile applications and enterprise architectures
            that ensure tangible results.
          </p>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/apple (1).png" alt="iOS" />
          </div>
          <div className="content">
            <h3>iOS Applications</h3>
            <p>
              Native apps are a crucial differentiator for maximum productivity
              and flawless user experience. Our expertise allows us to deliver
              diverse mobile apps for Apple products while adhering strictly to
              Apple’s Human Interface Guidelines.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/android.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Android Applications</h3>
            <p>
              Android apps amplify a company’s multi-platform strategy. With
              over a decade of experience, we create secure, user-friendly,
              enterprise-grade Android apps for lifestyle, enterprise, and
              everything in between.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high"
              src="/assetes/images/Cross_Platform-transformed.png"
              alt="Cross Platform"
            />
          </div>
          <div className="content">
            <h3>Cross-Platform Development</h3>
            <p>
              A cost-effective approach to target wider audiences while reducing
              development and maintenance costs. We ensure a native look and
              feel for Android and iOS users using advanced frameworks.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high"
              src="/assetes/images/Hybrid_App-transformed.png"
              alt="Hybrid"
            />
          </div>
          <div className="content">
            <h3>Hybrid Mobile Applications</h3>
            <p>
              The perfect solution to target audiences on both mobile and web
              platforms. Hybrid apps reduce costs while providing fast, scalable
              solutions that leverage device-specific functionalities.
            </p>
          </div>
        </div>
      </div>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Mobile software development for your business needs
            </h2>
            <div className="paragraph">
              <p>
                *Sprier builds a wide range of mobile solutions for B2B, B2C,
                and B2E systems. We help our customers meet their business
                goals, delivering high-scale customized mobile solutions.
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
              <h2 className="text-2xl font-bold">
                Enterprise mobile app development
              </h2>
            </div>
            <p className="mb-4">
              Building robust applications that facilitate business processes
              and enable efficient remote work have become an integral part of
              our mobile application development. As work happens wherever your
              team is, it’s crucial for people to securely access the digital
              work environment from anywhere, at any time, on any mobile device.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-gray-500 text-3xl">🔄</div>
              <h2 className="text-2xl font-bold">
                Our enterprise mobile app development services include:
              </h2>
            </div>

            <ul className="space-y-2">
              <li> workforce apps for field staff</li>
              <li> logistics and transportation mobile solutions</li>
              <li> 2FA secure mobile apps</li>
              <li> production management</li>
              <li> centralized mobile dashboards for C-suite members</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-green-500 text-3xl">🎨</div>
              <h2 className="text-2xl font-bold">
                Consumer mobile app development
              </h2>
            </div>
            <p className="mb-4">
              We put your users’ needs first by delivering lightning-fast,
              feature-packed apps that improve customer satisfaction, strengthen
              your brand, and boost conversions. Leveraging our vast expertise
              in mobile application development, we design impeccable apps that
              meet industry-specific challenges.
            </p>
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4"></div>

            <ul className="space-y-2">
              <li> Medical and Healthcare Apps</li>
              <li> Multimedia Applications</li>
              <li> IoT and Wearable Solutions</li>
              <li> Travel and Booking Apps</li>
              <li> Sport and Fitness Apps</li>
              <li> Retail and E-commerce Apps</li>
              <li> E-Learning Apps</li>
              <li> Location-Based Apps</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AppdevContent;
