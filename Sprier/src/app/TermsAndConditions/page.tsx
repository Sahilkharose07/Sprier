import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Turn your projects into success stories with our time-tested Delivery Framework`;
const Crmcontent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="privacyh2">Terms of Service</h2>
            <div className="paragraph">
              <p className="privacyp">
                Welcome to Spriers. We’re glad you’re here, and we hope you
                enjoy everything we have to offer.
              </p>

              <p className="privacyp">
                Please read these Terms carefully because they are a binding
                agreement between You and Spriers
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-solutions">
        <div className="section-heading">
          <h2 className="privacyh2">Terms Governance</h2>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/budget.png" alt="iOS" />
          </div>
          <div className="content">
            <h3>Your Accounts</h3>
            <p>
              You may be required to create an account and specify a password in
              order to use certain services or features on the Sites. To create
              an account, you must be at least 18 years old and you must provide
              truthful and accurate information about yourself. Don’t try to
              impersonate anyone else when you create your account. If your
              information changes at any time, please update your account to
              reflect those changes.
            </p>
            <br />
            <p>
              In some cases, an account may be assigned to you by an
              administrator, such as your employer or educational institution.
              If you are using or logging into an account assigned to you by an
              administrator, additional terms may apply to your use of the
              Sites. Moreover, your administrator may be able to access or
              disable your account without our involvement.
            </p>
            <br />
            <p>
              You may not share your account with anyone else. Please keep your
              password confidential, and try not to use it on other websites. If
              you believe that your account has been compromised at any time,
              please notify your system administrator.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/modification.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Modifications and Termination</h3>
            <p>
              WWe reserve the right to modify our Sites at any time, with or
              without notice to you. For example, we may add or remove
              functionality or features, and we may suspend or stop a particular
              feature altogether. We also reserve the right to charge a fee for
              any of our features at any time. If you don’t like any changes,
              you can stop using our Sites at any time.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/content.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Content You Post</h3>
            <p>
              We may provide opportunities for you to post text, photographs,
              videos, or other content (collectively, “Content”) on the Sites.
              You can only post Content if you own all the rights to that
              Content, or if another rights holder has given you permission.
            </p>
            <br />
            <p>
              You do not transfer ownership of your Content simply by posting
              it. However, by posting Content, you grant us, our agents,
              licensees, and assigns an irrevocable, perpetual (non-exclusive)
              right and permission to reproduce, encode, store, copy, transmit,
              publish, post, broadcast, display, publicly perform, adapt,
              modify, create derivative works of, exhibit, and otherwise use
              your Content. Without those rights, we couldn’t offer our
              Services. Please note that this license continues even if you stop
              using our Sites.
            </p>
            <br />
            <p>
              You agree to indemnify, release, and hold us harmless from any all
              liability, claims, actions, loss, harm, damage, injury, cost or
              expense arising out of any Content you post.
            </p>
            <br />
            <p>
              Keep in mind that if you send us any information, ideas,
              suggestions, or other communications to us, those communications
              will not be confidential. Moreover, unless we tell you otherwise,
              we reserve the right to reproduce, use, disclose, and distribute
              such communications without any obligation to you.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/content (1).png" alt="Android" />
          </div>
          <div className="content">
            <h3>Content Posted by Others</h3>
            <p>
              We are not responsible for, and do not endorse, Content posted by
              any other person. Accordingly, we may not be held liable, directly
              or indirectly, for any loss or damage caused to you in connection
              with any Content posted by another member.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/www.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Your Use of the Sites</h3>
            <p>
              Please do not use the Sites in a way that violates any laws,
              infringes on anyone’s rights, is offensive, or interferes with the
              Sites or any features on the Sites (including any technological
              measures we employ to enforce these Terms).
            </p>
            <br />
            <p>
              It should be common sense, so we won’t bore you with a list of
              things you shouldn’t do. But if we (in our sole discretion)
              determine that you have acted inappropriately, we reserve the
              right to take down Content, terminate your account, prohibit you
              from using the Sites, and take appropriate legal actions.
            </p>
            <br />
            <p>
              Using our Site does not give you ownership of any intellectual
              property rights to the content you access. You may not use content
              from our Sites unless you obtain permission from us or its owner,
              or unless you are otherwise permitted by law.
            </p>
            <br />
            <p>
              When you use a Site or send communications to us through a Site,
              you are communicating with us electronically. You consent to
              receive electronically any communications related to your use of a
              Site. We may communicate with you by email or by posting notices
              on the Site. You agree that all agreements, notices, disclosures
              and other communications that are provided to you electronically
              satisfy any legal requirement that such communications be in
              writing. All notices from us intended for receipt by you shall be
              deemed delivered and effective when sent to the email address you
              provide to us. Please note that by submitting Content, creating a
              user account or otherwise providing us with your email address,
              postal address or phone number, you are agreeing that we or our
              agents may contact you at that address or number in a manner
              consistent with our Privacy Statement.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/social-media.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Social Networks</h3>
            <p>
              The Service may include features that operate in conjunction with
              certain third party social networking websites that you visit such
              as Facebook, Instagram, YouTube, Vimeo, and Twitter (“Social
              Network Features”). While your use of the Social Network Features
              is governed by these Terms, your access and use of third party
              social networking sites and the services provided through the
              Services is governed by the terms of service and other agreements
              posted on these sites. You are responsible for ensuring that your
              use of those sites complies with any applicable terms of service
              or other agreements.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/warranty.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Our Warranties and Disclaimers</h3>
            <p>
              We provide our Services using a commercially reasonable level of
              care and promise to do our best to make sure you enjoy the
              Services. But there are certain things that we don’t promise about
              our Services.
            </p>
            <br />
            <p>
              OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OF SERVICE, NEITHER
              SPRIERS, INC. NOR ITS AGENTS OR SERVICE PROVIDERS (THE “SERVICES
              ENTITIES”) MAKE ANY SPECIFIC PROMISES ABOUT THE SITES. FOR
              EXAMPLE, WE DON’T MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN
              THE SITES, THE SPECIFIC FUNCTION OF THE SITES, OR THEIR
              RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE
              PROVIDE THE SITES “AS IS”.
            </p>
            <br />
            <p>
              SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES, LIKE THE
              IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE
              EXCLUDE ALL WARRANTIES.
            </p>
            <br />
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img src="/assetes/images/responsibility.png" alt="Android" />
          </div>
          <div className="content">
            <h3>Liability for our Services</h3>
            <p>
              EXCEPT WHERE PROHIBITED, THE SERVICES ENTITIES SHALL NOT BE LIABLE
              FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY
              DAMAGES ARISING FROM YOUR USE OF THE SITES OR ANY THIRD PARTY’S
              USE OF THE SITES. THESE EXCLUSIONS INCLUDE, WITHOUT LIMITATION,
              DAMAGES FOR LOST PROFITS, LOST DATA, COMPUTER FAILURE, OR THE
              VIOLATION OF YOUR RIGHTS BY ANY THIRD PARTY, EVEN IF THE SERVICES
              ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY THEREOF AND
              REGARDLESS OF THE LEGAL OR EQUITABLE THEORY UPON WHICH THE CLAIM
              IS BASED.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Crmcontent;
