import * as React from "react";
import type { PageProps } from "gatsby";
import SEO from "../components/seo";
import Logo from "../icons/favicon.svg";
import LTD from "../icons/bogroup_ltd_logo.svg";
import MGT from "../icons/bogroup_facility_mgt_logo.svg";
import TRD from "../icons/bogroup_global_trading_logo.svg";
import Parallax from "react-rellax";

export const Head = () => <SEO title="Our Companies" />;

const renderBoldText = (text: string) => {
  // First split by HTML tags
  const parts = text.split(/(<[^>]*>)/);
  return parts.map((part, index) => {
    // If it's an HTML tag, return it as-is
    if (part.startsWith('<')) {
      return (
        <span 
          key={index} 
          dangerouslySetInnerHTML={{ __html: part }} 
        />
      );
    }
    // Otherwise, process bold markers
    return part.split('**').map((subPart, subIndex) => 
      subIndex % 2 === 1 ? <strong key={`${index}-${subIndex}`}>{subPart}</strong> : subPart
    );
  });
};

const CompaniesPage: React.FC<PageProps> = () => {
  const [activeTab, setActiveTab] = React.useState('ltd');

  const companies = {
    ltd: {
      logo: LTD,
      name: "Black Orchard Ltd.",
      sections: [
        {
          title: "Introduction",
          content: `Founded in 2011, **Black Orchard Limited** has established itself as a distinguished real estate development company in Abuja, Nigeria. Our commitment to quality service delivery has earned us a reputation for reliability and excellence. We are driven by a vision to provide premium developments that offer exceptional value for money while fostering long-term business growth and client satisfaction.`
        },
        {
          title: "Our Vision",
          content: `Our vision is to be a leading real estate developer with a diverse portfolio of residential and commercial properties across Nigeria. By combining strategic location selection, competitive pricing, and innovative designs, we aim to create luxurious yet functional spaces that meet the evolving needs of our clients and partners.`
        },
        {
          title: "What We Do",
          subsections: [
            {
              subtitle: "Real Estate Development & Sales",
              content: `We specialize in identifying and acquiring high-potential land in prime locations, ensuring that essential infrastructure is in place to maximize property value. Our team of experts handles the entire development process, from conceptual design and planning approvals to construction and final delivery. Whether through off-plan sales or completed units, we provide flexible purchasing options tailored to our clients' financial needs.`
            },
            {
              subtitle: "Investment & Project Financing",
              content: `Our experience in financial structuring allows us to collaborate with investors and landowners in joint development initiatives. We offer tailored investment models that maximize returns while mitigating risks. Through well-structured agreements, such as Build-Operate-Transfer (B.O.T.) and Special Purpose Vehicles (SPV), we ensure profitable and sustainable ventures for all stakeholders.`
            },
            {
              subtitle: "Homeownership Solutions",
              content: `Recognizing the financial challenges of property ownership, we provide mortgage plans that simplify the path to homeownership. We assess verified income accounts to create structured payment plans that align with our clients' financial capacity. Additionally, our rent-to-own option allows prospective homeowners to transition from tenants to property owners through a seamless and affordable process.`
            }
          ]
        },
        {
          title: "Completed Projects",
          content: `Over the years, **Black Orchard Limited** has successfully delivered several landmark developments, setting a high standard for quality and excellence in the Nigerian real estate market.`,
          projects: [
            "**The Seed Apartment, Katampe (2011)**: A pioneering residential development that marked our entry into the Abuja real estate market.",
            "**1054 Residence, Wuye (2016)**: A premium terrace complex offering modern living spaces in one of Abuja's prime locations.",
            "**1210 Residence, Gudu (2019)**: A stylish residential project designed to provide comfort and functionality for urban dwellers.",
            "**1211 Residence, Gudu (2022)**: A continuation of our commitment to providing well-designed living spaces, expanding our footprint in Gudu.",
            "**2608 Townhouses, Abuja (2024)**: A contemporary townhouse community offering premium amenities and a serene living environment.",
            "**3132 Villas, Asokoro (2024)**: A luxurious villa development in one of Abuja's most prestigious neighborhoods, setting new standards in high-end living.",
            "**2962 Townhouses, Asokoro (2024)**: A meticulously designed residential estate offering elegant townhomes with world-class facilities."
          ]
        },
        {
          title: "Ongoing & Upcoming Projects",
          projects: [
            "Dawaki Residential Development – A thoughtfully planned community featuring contemporary apartments and townhouses.",
            "Asokoro Luxury Residences – A high-end residential enclave tailored for luxury and exclusivity.",
            "The Boulevard – A mixed-use development integrating residential, commercial, and leisure spaces.",
            "GreenCity, Kano – A forward-thinking, sustainable development set to redefine urban living in northern Nigeria."
          ]
        },
        {
          title: "Strategic Partnerships",
          content: `We have cultivated strong partnerships with various stakeholders, ensuring that our services extend beyond property development. Some of our key collaborations include:`,
          partners: [
            "Butane Energy Ltd – Providing consultancy services to optimize their real estate investments.",
            "PEFCOOP Estates – Currently delivering premium residential units tailored to their needs."
          ]
        },
        {
          title: "Joint Ventures & Investment Collaborations",
          content: `At **Black Orchard Limited**, we recognize the power of collaboration in unlocking real estate value. Our joint venture model allows us to partner with landowners, investors, and financial institutions to develop high-value projects under structured agreements.

We provide expertise in feasibility studies, project financing, construction management, and sales strategies, ensuring that all stakeholders achieve optimal returns. Whether through equity-based joint ventures or profit-sharing arrangements, our partners benefit from our extensive market knowledge, efficient project execution, and strong network within the industry.

**Black Orchard Limited** remains committed to innovation, quality, and excellence in real estate development. As we continue to expand our footprint across Nigeria, we welcome opportunities to collaborate with investors, landowners, and stakeholders who share our vision of creating thriving communities and high-value properties.`
        }
      ]
    },
    mgt: {
      logo: MGT,
      name: "**Black Orchard Facility Management**",
      sections: [
        {
          title: "Introduction",
          content: `At **Black Orchard Limited**, we understand that real estate development goes beyond constructing buildings; it extends to ensuring that these properties remain functional, safe, and aesthetically pleasing long after the keys have been handed over. This is why **Black Orchard Facility Management** is dedicated to delivering top-tier property and asset management services that uphold the highest industry standards. Our expertise in facility management ensures that our clients' properties are well-maintained, efficiently operated, and provide lasting value.`
        },
        {
          title: "Comprehensive Facility Management Services",
          content: `Our facility management services are designed to cover every aspect of property upkeep and administration, ensuring smooth daily operations, enhanced property value, and tenant satisfaction. We provide an all-encompassing approach that caters to both residential and commercial properties, handling everything from environmental compliance to technical maintenance and customer service.`
        },
        {
          title: "Administrative & Regulatory Compliance",
          content: `One of the biggest challenges property owners face is navigating the complex regulatory landscape of real estate management. At **Black Orchard Facility Management**, we take this burden off our clients by handling all administrative and regulatory responsibilities, including:`,
          bullets: [
            "**AEPB** (Abuja Environmental Protection Board) Compliance – Ensuring properties meet all environmental standards, including waste management, sanitation, and pollution control.",
            "**AMAC** (Abuja Municipal Area Council) Tenement Rates – Handling property taxation matters, ensuring compliance with municipal laws, and preventing unnecessary penalties.",
            "Service Charge Administration – Managing the collection and proper allocation of service charges to ensure all communal facilities are well-maintained."
          ],
          footer: "By staying proactive in regulatory compliance, we safeguard our clients from fines, legal complications, and unnecessary operational interruptions."
        },
        {
          title: "Security & Access Control",
          content: `Safety is a top priority in every well-managed facility. We provide comprehensive security solutions that ensure the protection of residents, visitors, and property assets. Our services include:`,
          bullets: [
            "Deployment and supervision of trained security guards to safeguard lives and property.",
            "Installation and maintenance of security systems, including CCTV cameras, motion detectors, and access control technology.",
            "Emergency response planning, including fire drills and evacuation procedures.",
            "Perimeter fencing and gatehouse management to enhance controlled access."
          ],
          footer: "We work with reputable security firms to ensure all properties under our care have 24/7 surveillance and the highest level of protection."
        },
        {
          title: "Successful Facility Management Track Record",
          content: `At **Black Orchard Facility Management**, we have a proven track record of managing several prestigious developments, ensuring they remain in excellent condition and fully compliant with regulatory requirements. Some of our successfully managed properties include:`,
          properties: [
            "**The Seed Apartment, Katampe** – Managed since 2011, ensuring long-term property value retention.",
            "**1054 Residence, Wuye** – Overseeing security, maintenance, and regulatory compliance since 2016.",
            "**1210 & 1211 Residences, Gudu** – Ensuring seamless property operations and tenant satisfaction since 2019 and 2022, respectively.",
            "**2608 Townhouses, Abuja** – Managing all infrastructure, security, and communal services since 2024.",
            "**3132 Villas & 2962 Townhouses, Asokoro** – Handling high-end facility management for luxury residences.",
            "**New Projects in Dawaki, Asokoro, The Boulevard, and GreenCity, Kano** – Preparing to introduce world-class facility management solutions to ensure long-term sustainability and premium living standards."
          ]
        },
        {
          title: "Why Choose Black Orchard Facility Management?",
          bullets: [
            "**Expertise & Experience** – Our deep understanding of real estate development and facility management gives us a unique edge in ensuring properties are well-maintained.",
            "**24/7 Support** – We provide round-the-clock assistance to ensure immediate response to emergencies and service requests.",
            "**Cost Efficiency** – Our preventive maintenance strategies help property owners save costs on major repairs and renovations.",
            "**Quality Assurance** – We adhere to industry best practices, ensuring that properties retain their value and remain attractive to investors and tenants.",
            "**Technology-Driven Solutions** – We leverage smart property management systems to track maintenance schedules, manage tenant requests, and optimize energy consumption."
          ]
        },
        {
          title: "Contact",
          content: `At **Black Orchard Facility Management**, we go beyond just maintaining buildings—we create living and working environments that are safe, functional, and enjoyable. Whether it's managing residential estates, commercial properties, or mixed-use developments, we provide holistic solutions tailored to the unique needs of each client.

By choosing **Black Orchard Facility Management**, you're investing in reliability, professionalism, and excellence. Contact **Joy Asabe Ali** today at <a href="mailto:joyali@blackorchardltd.com">joyali@blackorchardltd.com</a> to learn more about how we can help you maintain and enhance your property's value.`
        }
      ]
    },
    trd: {
      logo: TRD,
      name: "**Black Orchard Global Trading**",
      sections: [
        {
          title: "Coming Soon",
          content: `We're excited to announce that **Black Orchard Global Trading** is preparing to launch. Our trading division will focus on international commerce and strategic partnerships across multiple sectors.`,
          comingSoon: {
            features: [
              "International Trade Solutions",
              "Supply Chain Management",
              "Strategic Partnerships",
              "Global Market Access",
              "Import/Export Services"
            ],
            launchDate: "Soon"
          }
        }
      ]
    }
  };

  return (
    <>
      <header className="container-fluid bg-black text-white py-20">
        <aside className="container">
          <div className="row pt-sm-0 overflow-none">
            <Parallax className="col-12 col-sm-4 rellax mb-3 mb-sm-0 text-center" speed={4}>
              <img src={Logo} className="w-100 w-xs-90 max-w-[300px] mx-auto" alt="Black Orchard Logo" />
            </Parallax>
            <div className="col-12 col-sm-6 mt-sm-auto mb-sm-5 text-center text-sm-left">
              <h1 className="text-5xl md:text-6xl mb-6 font-bold">
                <span className="font-light">Our</span>
                <br />
                Companies
              </h1>
              <div className="w-24 h-1 bg-white mx-auto ml-sm-0 mb-6"></div>
            </div>
          </div>
        </aside>
      </header>

      <section className="container py-16">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Tabs Navigation */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
              {Object.entries(companies).map(([key, company]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 rounded-lg transition-all duration-300 text-lg font-medium ${
                    activeTab === key 
                      ? 'bg-black text-white shadow-lg transform scale-105' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {renderBoldText(company.name)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
              {activeTab === 'trd' ? (
                <div className="text-center py-12">
                  <img 
                    src={companies[activeTab].logo} 
                    alt={companies[activeTab].name} 
                    className="max-w-[300px] mx-auto mb-12 transform hover:scale-105 transition-duration-300"
                  />
                  
                  <div className="relative mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">Coming Soon</h2>
                    <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                      {renderBoldText(companies.trd.sections[0].content)}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      {companies.trd.sections[0].comingSoon.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="bg-gray-50 p-6 rounded-lg transform hover:scale-105 transition-duration-300 shadow-sm hover:shadow-md"
                        >
                          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg 
                              className="w-6 h-6 text-white" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-black text-white py-8 px-6 rounded-lg max-w-md mx-auto">
                      <h3 className="text-2xl font-bold mb-4">Launching Soon</h3>
                      <p className="text-gray-300 mb-6">
                        Stay tuned for updates on our global trading initiatives
                      </p>
                      <button 
                        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          // Add notification functionality here
                          alert("Thank you for your interest! We'll notify you when we launch.");
                        }}
                      >
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={companies[activeTab].logo} 
                    alt={companies[activeTab].name} 
                    className="max-w-[300px] mx-auto mb-12 transform hover:scale-105 transition-duration-300"
                  />
                  
                  {companies[activeTab].sections?.map((section, index) => (
                    <div key={index} className="mb-12 last:mb-0">
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">
                        {section.title}
                        <div className="w-16 h-1 bg-black mt-4"></div>
                      </h2>
                      
                      {section.content && (
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          {renderBoldText(section.content)}
                        </p>
                      )}
                      
                      {section.subsections?.map((subsection, idx) => (
                        <div key={idx} className="mb-8 bg-gray-50 p-6 rounded-lg">
                          <h3 className="text-2xl font-semibold mb-4 text-gray-900">{subsection.subtitle}</h3>
                          <p className="text-gray-700 leading-relaxed">{subsection.content}</p>
                        </div>
                      ))}
                      
                      {section.projects && (
                        <ul className="space-y-4">
                          {section.projects.map((project, idx) => (
                            <li key={idx} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                              {renderBoldText(project)}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {section.partners && (
                        <ul className="space-y-4">
                          {section.partners.map((partner, idx) => (
                            <li key={idx} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                              {renderBoldText(partner)}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.bullets && (
                        <ul className="space-y-4">
                          {section.bullets.map((bullet, idx) => (
                            <li key={idx} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                              {renderBoldText(bullet)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaniesPage;
