import Footer from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Learning experience platforms`;
const words1 = `Mobile learning`;
const words2 = `Peer-to-peer learning`;
const words3 = `Empowering Your Education Systems With The Cloud`;

const Elearningcontent = () => {
  return (
    <>
      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="eLearningsuit">
              Facilitate Learning With Smart Interactive Solutions
            </h2>
          </div>
        </div>
      </section>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assetes/images/learning.webp"
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
              As an experienced education software development company, we
              convert promising ideas into powerful solutions by crafting
              game-changing virtual hubs that enable high-speed access to
              educational content and help to create an individual learning path
              for each student. We design fully automated, custom-fit, cloud or
              on-premise platforms, bolstered with:
            </p>
            <ul>
              <li>AI-based recommendation system</li>
              <li>Content creation and aggregation from various sources</li>
              <li>Video streaming solutions</li>
              <li>User analytics</li>
              <li>
                Social features, such as interactions via chats, forums, likes,
                shares, etc.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              <TextGenerateEffect words={words1} />
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              To boost eLearning availability and detect new revenue
              opportunities, *Spriers develops full-fledged native and
              cross-platform mobile applications, that are distinguished by
              their:
            </p>
            <ul>
              <li>Smooth user experience</li>
              <li>Sturdy security measures</li>
              <li>
                Outstanding performance regardless of the number of concurrent
                learners
              </li>
            </ul>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assetes/images/mobilelearning.jpg"
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
                  src="/assetes/images/young-person-intership.webp"
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
              When a colleague is teaching, their context, reference points, and
              personality improve student engagement and make it easier to
              relate. Our peer-to-peer solutions encompass all the stages of the
              ‘learning loop’, giving students the opportunity to gain
              knowledge, practice by applying it, get feedback, and reflect on
              what’s been learned.
            </p>
            <ul>
              <li>Smart virtual study groups based on students’ activities</li>
              <li>Video recording and sharing</li>
              <li>Micro content and micro tests</li>
              <li>
                Chats with other students inside and outside their friend
                network
              </li>
              <li>Instant tutoring sessions</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="second db">
        <div className="container">
          <div className="inner-second p50">
            <h2 className="Full_suite">
              Building Prime Education Solutions For Your Audience
            </h2>
          </div>
        </div>
      </section>

      <div className="mobile-solutions">
        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/blocks.webp" alt="iOS" />
          </div>
          <div className="content">
            <h3>Preschool education</h3>
            <p>
              Kids never settle for less. That’s why we develop educational
              solutions where learning and joy stop being mutually exclusive
              notions and start complementing each other to achieve
              unprecedented synergy. Designed by a team with profound technology
              and industry-related expertise, our apps bridge the educational
              process to children’s existing knowledge while nurturing their
              curiosity in the most engaging way possible.
            </p>
            <p>
              Gamification elements infused in the software bring about
              experiences that can’t be created off-screen and help keep young
              learners focused.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img
              fetchPriority="high"
              src="/assetes/images/higher-education.png"
              alt="Android"
            />
          </div>
          <div className="content">
            <h3>K-12 and higher education</h3>
            <p>
              Accelerating in popularity during the pandemic, eLearning software
              is now an indispensable solution for educational institutions all
              over the globe. However, if not for the high-quality digital
              assistance, the virtualization of classrooms that have been
              brick-and-mortar forever could become too big a challenge to meet.
            </p>
            <p>
              Spriers builds educational platforms for schools, colleges, and
              universities, enabling students to leverage personalized learning
              while in the comfort of their own homes. Our eLearning solutions
              are enriched with compelling features that allow not just to
              replicate traditional classroom practices in the virtual realm but
              try new, more engaging models, such as flipped learning. Teachers
              are empowered to create and share videos and podcasts for students
              to explore in their own time and at their own pace, ensuring
              precious class time is reserved for active learning activities in
              small groups with individual attention.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img
              fetchPriority="high"
              src="/assetes/images/homework.png"
              alt="Cross Platform"
            />
          </div>
          <div className="content">
            <h3>Adult education and retraining</h3>
            <p>
              In a world undergoing all-embracing digital transformation, the
              nature of work is changing. The need for upskilling and reskilling
              has been boosted as people have to swap jobs or even industries to
              stay on track. In such circumstances, old ways of getting
              education are no longer viable. By the time people finish their
              drawn-out programs and get certificates or degrees, their acquired
              skills will have probably been outdated. As an education software
              development company with years of expertise, we create
              high-performing all-round eLearning solutions that allow our
              customers to reach new audiences, regardless of geography, income,
              or time constraints.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img
              fetchPriority="high"
              src="/assetes/images/opportunity (1).png"
              alt="Hybrid"
            />
          </div>
          <div className="content">
            <h3>
              Education opportunities and social integration for older adults
            </h3>
            <p>
              The elderly, more than any other age group, tend to feel anxious
              and withdrawn, especially in the new reality shaped by the
              coronavirus pandemic. *instinctools age-friendly EdTech solutions
              help combat social isolation, giving older adults the possibility
              to connect to their peers, stay active, and reimagine themselves
              in the digital world.
            </p>
            <p>
              With educational platforms tailored specifically to the needs of
              senior citizens, learning stops being the privilege of young
              people and reaches out to much wider audiences.
            </p>
          </div>
        </div>

        <div className="solution-card">
          <div className="icon">
            <img fetchPriority="high" src="/assetes/images/coding.png" alt="Hybrid" />
          </div>
          <div className="content">
            <h3>Corporate learning</h3>
            <p>
              For a number of organizations, whether mid-sized or large ones
              with offices scattered across the world, online education is more
              lucrative than traditional seminars or training in many ways. It’s
              easier, cheaper, better standardized, with learning happening
              on-the-job. We help you leverage all the advantages of corporate
              educational initiatives by supporting them with the right tech.
              Delving deep into the specifics of your business and studying your
              corporate vision, *instinctools experts create a one-stop solution
              that helps to boost employee acquisition and retention by
              upgrading employees’ skills, fostering collaboration and knowledge
              sharing, and keeping your staff motivated. A robust LMS, augmented
              by integrations with other corporate systems, enables convenient
              learning from a familiar interface, provides advanced analytics,
              and more, for your employees to grow professionally.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">
              <TextGenerateEffect words={words3} />
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              With organizations going remote, the challenge of providing
              sufficient resources to support eLearning solutions has become
              critical.
            </p>
            <br />
            <p>
              We help you leverage EdTech potential to the fullest by
              constructing a first-rate cloud computing educational environment.
              Spriers partners with best-in-class cloud providers to ensure the
              scalability, security, and cost-efficiency of our eLearning
              services. Building upon practical industry-related experience and
              deep expertise in cloud technology, our specialists:
            </p>
          </div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/assetes/images/cloudimges.jpg"
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

export default Elearningcontent;
