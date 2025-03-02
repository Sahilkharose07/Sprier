import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const words = `Turn your projects into success stories with our time-tested Delivery Framework`;
const Crmcontent = () => {
  return (
    <>
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       
        <Link href="/">
          <Image
            rel="preload"
            className="mx-20 py-10 z-20 absolute"
            src="/assetes/images/1500px1.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <section className="second db">
          <div className="container">
            <div className="inner-second p50">
              <h2 className="privacyh2">Privacy Policy</h2>
              <div className="paragraph">
                <p className="privacyp">
                  Creating a privacy statement for an IT company involves
                  outlining how the company collects, uses, and protects
                  personal data. This statement should comply with relevant
                  privacy laws and regulations, such as the General Data
                  Protection Regulation (GDPR) for European clients, and India`s
                  Personal Data Protection Bill, if applicable.
                </p>
                <br />
                <p className="privacyp">
                  Here is a comprehensive privacy statement template tailored
                  for an IT company:
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mobile-solutions">
          <div className="section-heading">
            <h2 className="privacyh2">
              Privacy Statement
            </h2>
          </div>

          <div className="solution-card">
            <div className="icon">
              <img src="/assetes/images/business.png" alt="iOS" />
            </div>
            <div className="content">
              <h3>Introduction</h3>
              <p>
                Sprier Technology Consultancy {"we ,our ,us"} is committed to
                protecting the privacy of our clients and users. This Privacy
                Statement outlines our practices regarding the collection, use,
                and protection of personal information.
              </p>
            </div>
          </div>

          <div className="solution-card">
            <div className="icon">
              <img src="/assetes/images/info.png" alt="Android" />
            </div>
            <div className="content">
              <h3>Information We Collect</h3>
              <p>
                We may collect and process the following types of personal
                information:
              </p>
              <ul>
                <li>
                  Personal Identification Information: Name, email address,
                  phone number, mailing address, and other contact details.
                </li>
                <li>
                  Technical Information: IP address, browser type and version,
                  time zone setting, browser plug-in types and versions,
                  operating system and platform, and other technology on the
                  devices you use to access our services.
                </li>
                <li>
                  Usage Data: Information about how you use our website,
                  products, and services.
                </li>
                <li>
                  Marketing and Communications Data: Your preferences in
                  receiving marketing from us and your communication
                  preferences.
                </li>
              </ul>
            </div>
          </div>

          <div className="solution-card">
            <div className="icon">
              <img src="/assetes/images/data-collection.png" alt="Android" />
            </div>
            <div className="content">
              <h3>How We Collect Information</h3>
              <p>We collect information in the following ways:</p>
              <ul>
                <li>
                  Direct Interactions: You provide us with your personal data
                  when you fill out forms or correspond with us by post, phone,
                  email, or otherwise.
                </li>
                <li>
                  Automated Technologies: As you interact with our website, we
                  may automatically collect technical data about your equipment,
                  browsing actions, and patterns.
                </li>
                <li>
                  Third Parties or Publicly Available Sources: We may receive
                  personal data about you from various third parties and public
                  sources.
                </li>
              </ul>
            </div>
          </div>

          <div className="solution-card">
            <div className="icon">
              <img src="/assetes/images/chat.png" alt="Android" />
            </div>
            <div className="content">
              <h3>Use of Information</h3>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul>
                <li>To provide, operate, and maintain our services.</li>
                <li>To improve, personalize, and expand our services.</li>
                <li>To understand and analyze how you use our services.</li>
                <li>To develop new products, services, features.</li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Crmcontent;
