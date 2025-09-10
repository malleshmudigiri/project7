import React from 'react';
import { Cloud, Database, Users, Shield } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = [
    {
      name: "ServiceNow",
      level: "Premier Partner",
      description: "Leading digital workflow automation and IT service management platform",
      logo: "ServiceNow",
      icon: <Cloud className="h-8 w-8" />,
      expertise: ["ITSM", "ITOM", "HR Service Delivery", "Customer Service Management"]
    },
    {
      name: "Amazon Web Services",
      level: "Advanced Consulting Partner",
      description: "Comprehensive cloud computing platform and services",
      logo: "AWS",
      icon: <Database className="h-8 w-8" />,
      expertise: ["Cloud Migration", "DevOps", "Data Analytics", "Machine Learning"]
    },
    {
      name: "Salesforce",
      level: "Consulting Partner",
      description: "Customer relationship management and enterprise cloud solutions",
      logo: "Salesforce",
      icon: <Users className="h-8 w-8" />,
      expertise: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Platform Development"]
    },
    {
      name: "Microsoft",
      level: "Gold Partner",
      description: "Enterprise software, cloud services, and productivity solutions",
      logo: "Microsoft",
      icon: <Shield className="h-8 w-8" />,
      expertise: ["Azure Cloud", "Office 365", "Power Platform", "Security Solutions"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Strategic Partners</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Leveraging industry-leading partnerships to deliver exceptional value and innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mr-6">
                    {partner.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                    <p className="text-[#172059] font-semibold">{partner.level}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{partner.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {partner.expertise.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#172059] rounded-full mr-2"></div>
                        <span className="text-gray-600 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships enable us to provide comprehensive solutions with 
              industry-leading technology and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Expertise</h3>
              <p className="text-gray-600">
                Our team holds advanced certifications from all major technology partners, 
                ensuring deep technical expertise and best practices implementation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Cloud className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Early Access</h3>
              <p className="text-gray-600">
                Partner-level access to beta programs, new features, and emerging technologies 
                gives our clients competitive advantages in their markets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Support</h3>
              <p className="text-gray-600">
                Direct access to vendor technical resources and support channels ensures 
                rapid issue resolution and optimal performance for client implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ServiceNow Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#172059] to-[#2a3491] text-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">ServiceNow Premier Partnership</h2>
                <p className="text-blue-100 mb-6">
                  As a ServiceNow Premier Partner, we bring deep expertise in digital workflow automation, 
                  helping organizations transform their service delivery and operational efficiency.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">Certified ServiceNow Architects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">100+ ServiceNow Implementations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">Government and Enterprise Focus</span>
                  </li>
                </ul>
                <button className="px-6 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Learn More About ServiceNow Solutions
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Cloud className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;