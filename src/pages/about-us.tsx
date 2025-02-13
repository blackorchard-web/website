import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Team from "../images/imagecompressor/team.jpg";
import Logo from "../icons/favicon.svg";
import NASMAN from "../images/imagecompressor/NASMAN.jpg";
import MUSTI from "../images/imagecompressor/MUSTI.jpg";
import MAMS from "../images/imagecompressor/MAMS.jpg";
import JOY from "../images/imagecompressor/JOY.jpg";
import HALI from "../images/imagecompressor/HALI.jpg";
import NASIR from "../images/imagecompressor/NASIR.jpg";
import ABDUL from "../images/imagecompressor/ABDUL.jpg";
import ORG from "../icons/bogroup_organogram.svg";
import Parallax from "react-rellax";
import TeamModal from '../components/TeamModal';

export const Head = () => <SEO title="About Us" />;

const TeamCard: React.FC<{ image: string; name: string; position: string; bio?: string }> = ({
  image,
  name,
  position,
  bio
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div className="col-12 col-md-6 mb-5 px-4">
        <div className="card bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 group">
          <div className="text-center">
            <img
              src={image}
              alt={name}
              className="w-100 h-[300px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
              style={{ objectPosition: 'top' }}
            />
            <div className="card-body">
              <h5 className="font-weight-bold mb-2">{name}</h5>
              <p className="text-muted mb-3">{position}</p>
              <button
                className="btn btn-outline-dark px-4 mb-2"
                onClick={() => setIsModalOpen(true)}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <TeamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={image}
        name={name}
        position={position}
        bio={bio}
      />
    </>
  );
};

const AboutPage: React.FC<PageProps> = () => {
  const managementMembers = [
    {
      image: NASMAN,
      name: "Nasiru Ibrahim",
      position: "Managing Director",
      bio: `Nasiru Ibrahim is a graduate of Architecture from Ahmadu Bello University, Zaria and a full member of the Nigerian Institute of Architects, and member of the Nigerian Institute of Directors.

He started his career as an architect/project management consultant and gained a wealth of diverse experience for over 20 years while working with Multisystems Consultants Ltd, a 45-year-old consulting firm. As part of his continuing professional development, he went on to acquire an MSc in Project Management at the University of Reading in the United Kingdom while still carrying out his primary duties of managing an array of complex and challenging projects.

With this industry experience he Co-founded Black Orchard Group in the year 2011; a company that develops and manages premium real estate aimed at creating value in great locations. Nasiru's experience, as well as his ability to adapt to the dynamic market conditions has helped the company's ability to deliver projects to the desired quality, on budget, and on time.

Outside of work, Nasiru is a 3-time marathon finisher and enjoys travelling, golf, and a host of other outdoor activities.`
    },
    {
      image: MUSTI,
      name: "Mustapha Abdulsalam",
      position: "Executive Director",
      bio: `Mustapha Abdulsalam is a results-driven executive with extensive experience in the real estate industry. As an Executive Director at Black Orchard Ltd, he plays a pivotal role in shaping the company's strategic vision, driving growth, and optimizing operations. With a deep understanding of real estate markets, trends, and customer needs, Mustapha leads transformative initiatives that strengthen the company's market position and ensure long-term success.

Throughout his career, Mustapha has successfully expanded market presence, identified new investment opportunities, and fostered strategic partnerships that drive profitability. His expertise spans across business development, financial management, and real estate portfolio management, allowing him to oversee large-scale projects that maximize returns on investment.

His leadership style emphasizes collaboration and team development, ensuring a high-performance culture that delivers excellence. Mustapha is recognized for his ability to negotiate high-value deals, secure investments, and cultivate strong industry relationships that propel the company forward.

Mustapha holds a bachelor's degree and is member of the chattered institute of directors which further enhances his expertise. As a thought leader in the real estate sector, he frequently contributes to industry discussions, sharing insights on market trends and best practices. Passionate about driving innovation and creating long-term value, he remains committed to delivering excellence in real estate development and investment.`
    }
  ];

  const teamMembers = [
    {
      image: MAMS,
      name: "Manda Mundi",
      position: "Manager",
      bio: `Manda Mundi is an experienced and highly organized Office Manager, playing a key role in ensuring the smooth and efficient operation of the company's administrative and business functions. With a strong background in business administration, human resources, and office management, Manda brings exceptional leadership, coordination, and problem-solving skills to the dynamic real estate sector.

At Black Orchard Limited, Manda oversees daily office operations, and fosters a productive work environment that supports the company's strategic objectives. She is responsible for managing corporate protocols, coordinating administrative tasks, and ensuring compliance with company policies. Her expertise in human resources management allows her to handle recruitment, employee relations, and performance management, contributing to a motivated and high-performing workforce.

Manda plays a crucial role in maintaining operational efficiency, optimizing workflows, and supporting executive leadership in decision-making. She excels in financial administration, record-keeping, and coordinating logistics for corporate projects, ensuring that all departments function seamlessly.

Beyond her professional role, Manda has a deep passion for traveling, fashion, reading, and music. She enjoys exploring new cultures, staying up to date with the latest fashion trends, immersing herself in literature that broadens her perspective, and appreciating diverse musical genres. Her diverse interests not only reflect her creativity and curiosity but also contribute to her well-rounded approach to work and life.`
    },
    {
      image: JOY,
      name: "JOY ASABE ALI",
      position: "FACILITY MANAGER",
      bio: `Joy is a highly motivated and detail-oriented Facility Manager with a degree in Estate Management & Valuation from the Federal University of Technology Minna, Niger State. With a strong foundation in estate management, Joy has gained extensive experience in facility management, ensuring seamless day-to-day operations and maintenance within the real estate sector.

As Facility Manager at Black Orchard Limited, Joy has been instrumental in optimizing property maintenance, enhancing operational efficiency, and implementing cost-effective solutions that improve the longevity and value of the company's real estate assets. She has successfully led preventive maintenance, vendor management, and regulatory compliance initiatives, ensuring that all properties under her supervision meet the highest standards of safety, functionality, and aesthetic appeal.

With a strong problem-solving mindset, Joy has resolved complex facility challenges, improved turnaround times for property maintenance requests, and fostered a proactive approach to facility upkeep, minimizing risks and unexpected breakdowns. Beyond her professional achievements, Joy is also a talented women's corporate wear designer, showcasing her creative flair, attention to detail, and passion for fashion.`
    },
    {
      image: NASIR,
      name: "AHMAD NASIR SANI",
      position: "ARCHITECT",
      bio: `Ahmad is an architect by training. He started his professional career at Black Orchard Limited and has risen through the ranks, earning him more responsibilities in project management, site supervisions, professional client presentations and contract management.

He is very creative and highly meticulous. Through his proficiency in the use of several architecture and building information modelling (BIM) software, he has produced many of Black Orchard's unique and well-thought-out designs. He is passionate about his work and the intersection of design with social and environmental justice.

In his spare time, he pursues his interests in reading about history and culture, connecting with nature, and immersing in the virtual world of car racing.`
    },
    {
      image: ABDUL,
      name: "ABDULWAHAB AKUVADA",
      position: "QUANTITY SURVEYOR",
      bio: `Abdulwahab Akuvada is an experienced and detail-oriented Quantity Surveyor with over six (6) years of experience in cost planning, contract management and project budgeting for small, medium and large-scale construction projects. He is proficient in construction project cost control, risk management and procurement, passionate about delivering cost efficient and high-quality projects within the time frame.

He is a graduate of Ahmadu Bello University, Zaria – Nigeria and a member of Nigerian Institute of Quantity Surveyors (NIQS). As part of his commitment to professional growth, he is advancing his education with an MSc program in Sustainable Procurement Management at the same citadel of learning while successfully balancing his primary job functions of ensuring construction project meet it objectives.

He is adept at working with multidisciplinary teams and liaising with stakeholders to optimize financial performance. In his leisure time, he loves reading, exploring new destinations and staying active through tennis.`
    },
    {
      image: HALI,
      name: "HALEEMAH BAZAR",
      position: "FRONT DESK OFFICER",
      bio: `Haleemah Bazar is the Front Desk Officer, where she ensures a welcoming and professional experience for clients, visitors, and stakeholders. With a BSc in Mass Communication, she excels in customer service, office coordination, and administrative support.

In her role, Haleemah efficiently manages appointment scheduling, and client inquiries, ensuring smooth front desk operations. Haleemah is dedicated to maintaining a positive and organized environment, reflecting Black Orchard Limited's commitment to excellence in every interaction.`
    },
  ];

  return (
    <>
      <header className="container-fluid bg-default text-white p-0">
        <img
          src={Team}
          className="w-100 h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
          alt="Team"
        />
      </header>

      <section className="container-fluid landing-header">
        <div className="row pt-5 justify-content-around z-depth-top">
          <div className="col-12 col-sm-3 col-lg-2 text-sm-right text-center overflow-none">
            <p className="display-2 text-faded font-weight-bolder mb-0">1</p>
            <p className="text-faded font-weight-bolder mb-1">WHO WE ARE</p>
            <hr className="my-0 mr-sm-0 bg-faded border-0 pb-1 w-[50px]" />
            <svg viewBox="0 0 100 100" width="5px" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" width="100" height="100" fill="#f7f7f7" />
            </svg>
            <hr className="hidden-sm-down m-0 bg-faded border-0 pb-1 line-left w-[50px]" />
          </div>
          <aside className="col-12 col-sm-6">
            <h1 className="flaticon-contract icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <p className="text-justify m-0">
              <strong className="font-weight-bolder">
                <span className="initialism">B</span>lack Orchard Ltd
              </strong>{" "}
              was registered in 2011 as a property development company in Abuja. We strive towards quality service delivery to our clientele
              and customers and have grown to be a reliable property development company with a proven track record. Our strength lies in
              our dedication to grow businesses and also the desire to provide value for money.
            </p>
            <p className="text-center display-4">…</p>
            <p className="text-justify m-0">
              We develop projects that address the target market requirements, balanced with the site conditions and planning constraints to
              arrive at units that are affordable yet functional. We pride ourselves for offering quality off-plan and completed
              developments on schedule.
            </p>
            <p className="text-center display-4">…</p>
            <p className="text-justify mb-4">
              <strong className="font-weight-bolder">Our Vision</strong> is to become a reliable property developer with a sizeable
              portfolio of residential and commercial properties all over Nigeria. We aim to provide exquisite locations, competitive prices
              and luxurious properties to our partners.
            </p>
          </aside>
        </div>
        <div className="row pt-3 justify-content-around z-depth-top">
          <div className="col-12 col-sm-3 col-lg-2 text-sm-right text-center overflow-none">
            <p className="display-2 text-faded font-weight-bolder mb-0">2</p>
            <p className="text-faded font-weight-bolder mb-1">WHAT WE DO</p>
            <hr className="my-0 mr-sm-0 bg-faded border-0 pb-1 w-[50px]" />
            <svg viewBox="0 0 100 100" width="5px" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" width="100" height="100" fill="#f7f7f7" />
            </svg>
            <hr className="hidden-sm-down m-0 bg-faded border-0 pb-1 line-left w-[50px]" />
          </div>
          <aside className="col-12 col-sm-6">
            <h1 className="flaticon-real-estate icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Property Development</h2>
            <p className="text-justify">
              We acquire land in high yielding locations with basic infrastructure in place and leverage that to design and construct
              properties that provide a healthy return per square meter.
            </p>
            <p className="text-justify mb-5">
              We develop units for sale either off-plan or completed, to suit the cashflow of our customers. Our experience in architecture,
              project management, planning permissions and construction, helps our abilty to deliver projects of the desired quality, on
              budget and on time.
            </p>

            <h1 className="flaticon-real-estate-2 icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Project Finance</h2>
            <p className="text-justify">
              We also partner with investors and landowners to jointly develop properties based on agreed equity contributions. Our
              experience in international business, procurement and business solutions provides us with an impeccable advantage to provide a
              win-win investment for our partners.
            </p>
            <p className="text-justify mb-5">
              Returns on such projects can be tailored to revenue generated from the completed project based on Build-Operate &amp; Transfer
              (B.O.T) or Special Purpose Vehicles (SPV).
            </p>

            <h1 className="flaticon-real-estate-3 icon-4x m-0"></h1>
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-0">Mortgages</h2>
            <p className="text-justify mb-5">
              We offer intending owners of our properties, mortgage plans that are attractive and hassle free. All we need is a verified
              income account that meets a payment structure for the desired property. Another product in addition to the mortgage is a
              rent‐to-own plan that allows owners to pay rent towards owning their property.
            </p>
          </aside>
        </div>
        <div className="row pt-3 justify-content-around z-depth-top">
          <div className="col-12 col-sm-3 col-lg-2 text-sm-right text-center overflow-none">
            <p className="display-2 text-faded font-weight-bolder mb-0">3</p>
            <p className="text-faded font-weight-bolder mb-1">OUR TEAM</p>
            <hr className="my-0 mr-sm-0 bg-faded border-0 pb-1 w-[50px]" />
            <svg viewBox="0 0 100 100" width="5px" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" width="100" height="100" fill="#f7f7f7" />
            </svg>
          </div>
          <aside className="col-12 col-sm-6 pb-5">
            <hr className="pb-2 bg-inverse ml-0 w-[40px]" />
            <h2 className="font-weight-bold mb-4">Management</h2>
            <div className="row justify-content-center">
              {managementMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                />
              ))}
            </div>

            <hr className="pb-2 bg-inverse ml-0 w-[40px] mt-5" />
            <h2 className="font-weight-bold mb-4">Team</h2>
            <div className="row justify-content-center">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  bio={member.bio}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
