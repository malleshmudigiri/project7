// // import React, { useRef } from 'react';
// // import { Cloud, Shield, Users, BarChart, Heart, Building, BookOpen, Globe } from 'lucide-react';

// // const ServiceNowPage: React.FC = () => {
// //   const carouselRef = useRef<HTMLDivElement>(null);

// //   const scrollCarousel = (direction: 'left' | 'right') => {
// //     if (carouselRef.current) {
// //       const scrollAmount = 320; // Customize based on your card width + gap
// //       if (direction === 'left') {
// //         carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
// //       } else {
// //         carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// //       }
// //     }
// //   };

// //   const caseStudies = [
// //     { title: 'Cloud Migration', description: 'Real-world success in migrating complex infrastructures.', image: '/path/to/image1.jpg' },
// //     { title: 'Security Compliance', description: 'Ensuring industry standards compliance.', image: '/path/to/image2.jpg' },
// //     { title: 'Automation Solutions', description: 'Streamlining operations with automation.', image: '/path/to/image3.jpg' },
// //     { title: 'DevOps Transformation', description: 'Bringing DevOps best practices.', image: '/path/to/image4.jpg' },
// //     { title: 'AI Integration', description: 'Smart automation using AI capabilities.', image: '/path/to/image5.jpg' },
// //     { title: 'Infrastructure Monitoring', description: 'Proactive infrastructure monitoring.', image: '/path/to/image6.jpg' },
// //     { title: 'Process Optimization', description: 'Maximizing efficiency and minimizing waste.', image: '/path/to/image7.jpg' },
// //     { title: 'Incident Management', description: 'Rapid and efficient issue resolution.', image: '/path/to/image8.jpg' },
// //   ];

// //   return (
// //     <div className="font-sans text-gray-900">

// //       {/* Other sections omitted for brevity */}

// //       {/* Case Study Carousel Section */}
// //       <section className="relative py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
// //         <div className="max-w-7xl mx-auto px-6">

// //           {/* Heading + Arrows */}
// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-4xl font-extrabold">CASE STUDY</h2>

// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => scrollCarousel('left')}
// //                 className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
// //               >
// //                 &#8592;
// //               </button>
// //               <button
// //                 onClick={() => scrollCarousel('right')}
// //                 className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
// //               >
// //                 &#8594;
// //               </button>
// //             </div>
// //           </div>

// //           <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
// //             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
// //           </p>

// //           {/* Carousel */}
// //           <div
// //             ref={carouselRef}
// //             className="flex overflow-x-auto space-x-6 scroll-smooth py-4 scrollbar-hide"
// //           >
// //             {caseStudies.map((caseStudy, idx) => (
// //               <div
// //                 key={idx}
// //                 className="min-w-[300px] bg-blue-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
// //               >
// //                 <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />

// //                 {/* Glassy Overlay */}
// //                 <div className="bg-white/10 backdrop-blur-md p-6 text-left">
// //                   <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
// //                   <p className="text-gray-300 mb-4">{caseStudy.description}</p>
// //                   <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
// //                     Learn More &#8594;
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //     </div>
// //   );
// // };

// // export default ServiceNowPage;

// // import React from 'react';
// // import { Cloud, Shield, Users, BarChart, Heart, Building, BookOpen, Globe } from 'lucide-react';

// // const ServiceNowPage: React.FC = () => {
// //   const services = [
// //     { icon: Cloud, title: 'Cloud Migration', description: 'Efficient cloud transition with minimal downtime.' },
// //     { icon: Shield, title: 'Security Compliance', description: 'Ensure adherence to industry standards.' },
// //     { icon: Users, title: 'User Management', description: 'Streamlined user access and role management.' },
// //     { icon: BarChart, title: 'Process Automation', description: 'Optimize workflows for better efficiency.' },
// //   ];

// //   const supports = [
// //     { icon: Building, label: 'Federal' },
// //     { icon: Heart, label: 'Fed Health' },
// //     { icon: BookOpen, label: 'SLED' },
// //     { icon: Globe, label: 'Commercial' },
// //   ];

// //   const caseStudies = Array.from({ length: 4 }).map((_, idx) => ({
// //     title: 'Cloud Migration',
// //     description: 'Real-world success in migrating complex infrastructures.',
// //     image: '/path/to/image.jpg', // Replace with real image path
// //   }));

// //   const faqs = [
// //     { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
// //     { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
// //     { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
// //   ];

// //   return (
// //     <div className="font-sans text-gray-900">
// //       {/* Hero Section */}

// //       {/* Hero Section */}
// // <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./public/2.png')" }}>
// //   <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
// //     <h1 className="text-white text-6xl font-bold">SERVICENOW</h1>
// //   </div>
// // </section>

// // {/* Modernization Intro Section */}
// // <section className="relative min-h-screen w-full flex items-center justify-center px-6">
// //   {/* Radial Gradient Background */}
// //   <div
// //     className="absolute inset-0 z-0"
// //     style={{
// //       background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
// //     }}
// //   />

// //   {/* Content */}
// //   <div className="relative z-10 text-center">
// //     <h2 className="text-5xl font-extrabold text-black mb-6">Modernize ServiceNow</h2>
// //     <h3 className="text-3xl text-black mb-4">Reduce Technical Debt. Scale with AI.</h3>
// //     <p className="max-w-3xl text-black text-lg">
// //       Our ServiceNow solutions help enterprises optimize workflows, improve service delivery, and transform IT operations.
// //       Reduce technical debt and scale your digital workflows with confidence.
// //     </p>
// //   </div>
// // </section>


// // {/* ServiceNow - What We Do Section */}
// // <section className="py-24 bg-gray-50 overflow-hidden">
// //   <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">

// //     {/* Left Side: Heading & Subtext */}
// //     <div className="lg:w-1/3 mb-12 lg:mb-0">
// //       <h2 className="text-5xl font-bold mb-4 text-gray-900">ServiceNow - What We Do?</h2>
// //       <p className="text-lg text-gray-600">
// //         A long established fact that a reader will be distracted by the readable content when looking at its layout.
// //       </p>
// //     </div>

// //     {/* Right Side: 6 Cards Grid */}
// //     <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
// //       {Array.from({ length: 6 }).map((_, idx) => (
// //         <div key={idx} className="group p-6 rounded-lg bg-white shadow hover:shadow-lg transition-all duration-500 flex items-center space-x-4">
// //           {/* Icon Container */}
// //           <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center animate-pulse">
// //             {/* Replace with actual icons if available */}
// //             <div className="w-6 h-6 bg-white rounded-sm"></div>
// //           </div>

// //           {/* Text Content */}
// //           <div>
// //             <h3 className="text-lg font-semibold text-gray-900">Migration</h3>
// //             <p className="text-gray-600 text-sm">
// //               A long established fact that a reader will be distracted by the readable content.
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>

// //   {/* Tailwind Keyframe Animation */}
// //   <style>{`
// //     @keyframes pulseCustom {
// //       0%, 100% { opacity: 1; transform: scale(1); }
// //       50% { opacity: 0.7; transform: scale(1.05); }
// //     }
// //     .animate-pulse {
// //       animation: pulseCustom 2s infinite;
// //     }
// //   `}</style>
// // </section>

// // {/* Who We Support Section */}
// // <section className="py-24 bg-white text-center px-6">
// //   <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
// //   <p className="text-gray-600 max-w-2xl mx-auto mb-12">
// //     A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
// //   </p>

// //   <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
// //     {[
// //       { label: "FEDERAL", iconUrl: "https://cdn-icons-png.flaticon.com/512/1239/1239681.png" },
// //       { label: "FED HEALTH", iconUrl: "https://cdn-icons-png.flaticon.com/512/2913/2913461.png" },
// //       { label: "SLED", iconUrl: "https://cdn-icons-png.flaticon.com/512/2207/2207573.png" },
// //       { label: "COMMERCIAL", iconUrl: "https://cdn-icons-png.flaticon.com/512/2948/2948033.png" },
// //     ].map((support, idx) => (
// //       <div key={idx} className="flex flex-col items-center animate-fade-up">
// //         {/* Hexagon Border */}
// //         <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
// //           <svg viewBox="0 0 100 100" className="absolute w-full h-full">
// //             <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none"/>
// //           </svg>
// //           <img src={support.iconUrl} alt={support.label} className="w-12 h-12 object-contain z-10" />
// //         </div>

// //         <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
// //       </div>
// //     ))}
// //   </div>

// //   {/* Tailwind Keyframe Animation */}
// //   <style>{`
// //     @keyframes fadeUp {
// //       0% { opacity: 0; transform: translateY(20px); }
// //       100% { opacity: 1; transform: translateY(0); }
// //     }
// //     .animate-fade-up {
// //       animation: fadeUp 0.8s ease forwards;
// //     }
// //   `}</style>
// // </section>


// //      {/* Case Study Section */}
// // <section className="relative py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
// //   <div className="max-w-7xl mx-auto px-6 text-center">

// //     {/* Heading with Arrows */}
// //     <div className="flex items-center justify-center space-x-4 mb-8">
// //       <h2 className="text-4xl font-extrabold">CASE STUDY</h2>

// //       <div className="flex space-x-2">
// //         <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">
// //           &#8592;
// //         </button>
// //         <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">
// //           &#8594;
// //         </button>
// //       </div>
// //     </div>

// //     <p className="text-gray-300 max-w-2xl mx-auto mb-12">
// //       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
// //     </p>

// //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //       {caseStudies.map((caseStudy, idx) => (
// //         <div key={idx} className="bg-blue-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
// //           <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />

// //           {/* Glassy Overlay */}
// //           <div className="bg-white/10 backdrop-blur-md p-6 text-left">
// //             <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
// //             <p className="text-gray-300 mb-4">{caseStudy.description}</p>
// //             <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
// //               Learn More &#8594;
// //             </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </section>
// // {/* Case Study Section with Carousel */}
// // <section className="relative py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
// //   <div className="max-w-7xl mx-auto px-6">

// //     {/* Heading with Arrows */}
// //     <div className="flex items-center justify-between mb-8">
// //       <h2 className="text-4xl font-extrabold">CASE STUDY</h2>

// //       <div className="flex space-x-2">
// //         <button
// //           onClick={() => scrollCarousel('left')}
// //           className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
// //         >
// //           &#8592;
// //         </button>
// //         <button
// //           onClick={() => scrollCarousel('right')}
// //           className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
// //         >
// //           &#8594;
// //         </button>
// //       </div>
// //     </div>

// //     <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
// //       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
// //     </p>

// //     {/* Carousel Container */}
// //     <div
// //       id="caseStudyCarousel"
// //       className="flex overflow-x-auto space-x-6 scroll-smooth py-4 scrollbar-hide"
// //     >
// //       {caseStudies.map((caseStudy, idx) => (
// //         <div
// //           key={idx}
// //           className="min-w-[300px] bg-blue-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
// //         >
// //           <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />

// //           {/* Glassy Overlay */}
// //           <div className="bg-white/10 backdrop-blur-md p-6 text-left">
// //             <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
// //             <p className="text-gray-300 mb-4">{caseStudy.description}</p>
// //             <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
// //               Learn More &#8594;
// //             </button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </section>

// // {/* Add Script to Scroll Carousel */}

// //       {/* Book Your Demo */}
// //       <section
// //         className="relative py-24 text-center text-white"
// //         style={{
// //           backgroundImage: "url('/path/to/demo-bg.jpg')",
// //           backgroundSize: 'cover',
// //           borderRadius: '0 0 2rem 2rem',
// //         }}
// //       >
// //         <h2 className="text-4xl font-bold mb-6">Book Your Demo Today!</h2>
// //         <button className="bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition">
// //           Book Your Consultation
// //         </button>
// //       </section>

// //       {/* FAQ Section */}
// //       <section className="py-16 max-w-7xl mx-auto px-6">
// //         <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
// //         <div className="max-w-3xl mx-auto space-y-4">
// //           {faqs.map((faq, idx) => (
// //             <details key={idx} className="border p-4 rounded-lg">
// //               <summary className="cursor-pointer font-semibold">{faq.question}</summary>
// //               <p className="mt-2 text-gray-700">{faq.answer}</p>
// //             </details>
// //           ))}
// //           <div className="text-center mt-6">
// //             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
// //               Visit our FAQ
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ServiceNowPage;

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Cloud, Database, Shield, Users, Zap, BarChart, ArrowRight } from 'lucide-react';

// // const Services: React.FC = () => {
// //   const services = [
// //     {
// //       icon: <Cloud className="h-8 w-8" />,
// //       title: "Cloud Solutions",
// //       description: "Comprehensive cloud strategy, migration, and optimization services across AWS, Azure, and Google Cloud platforms.",
// //       features: ["Cloud Assessment & Strategy", "Migration & Modernization", "Cloud Security", "Cost Optimization"],
// //       link: "/services/cloud"
// //     },
// //     {
// //       icon: <Database className="h-8 w-8" />,
// //       title: "Data & Analytics",
// //       description: "Transform raw data into actionable insights with modern data platforms, analytics, and AI/ML solutions.",
// //       features: ["Data Strategy", "Modern Data Platforms", "Business Intelligence", "Machine Learning"],
// //       link: "/services/data-analytics"
// //     },
// //     {
// //       icon: <Zap className="h-8 w-8" />,
// //       title: "Hyper Automation",
// //       description: "Streamline operations and improve efficiency through intelligent automation and workflow optimization.",
// //       features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "AI-Powered Automation"],
// //       link: "/services/automation"
// //     },
// //     {
// //       icon: <Shield className="h-8 w-8" />,
// //       title: "Cyber Security",
// //       description: "Comprehensive security solutions to protect your organization from evolving threats and ensure compliance.",
// //       features: ["Security Assessment", "Identity Management", "Threat Detection", "Compliance Management"],
// //       link: "/services/cybersecurity"
// //     },
// //     {
// //       icon: <Users className="h-8 w-8" />,
// //       title: "Customer Experience Management",
// //       description: "Enhance customer interactions and satisfaction through modern CRM and customer service platforms.",
// //       features: ["CRM Implementation", "Customer Journey Mapping", "Service Optimization", "Omnichannel Strategy"],
// //       link: "/services/customer-experience"
// //     },
// //     {
// //       icon: <BarChart className="h-8 w-8" />,
// //       title: "Business Process Management",
// //       description: "Optimize business processes for improved efficiency, compliance, and organizational performance.",
// //       features: ["Process Analysis", "Workflow Design", "Performance Monitoring", "Continuous Improvement"],
// //       link: "/services/bpm"
// //     }
// //   ];

// //   return (
// //     <div className="pt-16">
// //       {/* Hero Section */}
// //       <section className="bg-[#172059] text-white py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
// //             <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
// //               Comprehensive technology solutions designed to transform your organization and drive measurable results
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {services.map((service, index) => (
// //               <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
// //                 <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6">
// //                   {service.icon}
// //                 </div>
// //                 <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
// //                 <p className="text-gray-600 mb-6">{service.description}</p>
                
// //                 <ul className="space-y-2 mb-6">
// //                   {service.features.map((feature, featureIndex) => (
// //                     <li key={featureIndex} className="flex items-center text-gray-600">
// //                       <div className="w-2 h-2 bg-[#172059] rounded-full mr-3 flex-shrink-0"></div>
// //                       <span className="text-sm">{feature}</span>
// //                     </li>
// //                   ))}
// //                 </ul>
                
// //                 <Link
// //                   to={service.link}
// //                   className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
// //                 >
// //                   Learn More
// //                   <ArrowRight className="ml-1 h-4 w-4" />
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ServiceNow Highlight */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="bg-gradient-to-r from-[#172059] to-[#2a3491] text-white rounded-2xl p-8 lg:p-12">
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
// //               <div>
// //                 <h2 className="text-3xl font-bold mb-6">ServiceNow Platform Excellence</h2>
// //                 <p className="text-blue-100 mb-6">
// //                   As a ServiceNow Premier Partner, we deliver comprehensive digital workflow solutions 
// //                   that transform how organizations operate and serve their customers.
// //                 </p>
// //                 <ul className="space-y-2 mb-6">
// //                   <li className="flex items-center">
// //                     <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
// //                     <span className="text-blue-100">IT Service Management (ITSM)</span>
// //                   </li>
// //                   <li className="flex items-center">
// //                     <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
// //                     <span className="text-blue-100">IT Operations Management (ITOM)</span>
// //                   </li>
// //                   <li className="flex items-center">
// //                     <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
// //                     <span className="text-blue-100">HR Service Delivery</span>
// //                   </li>
// //                   <li className="flex items-center">
// //                     <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
// //                     <span className="text-blue-100">Customer Service Management</span>
// //                   </li>
// //                 </ul>
// //                 <Link
// //                   to="/services/servicenow"
// //                   className="inline-flex items-center px-6 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
// //                 >
// //                   Explore ServiceNow Solutions
// //                   <ArrowRight className="ml-2 h-4 w-4" />
// //                 </Link>
// //               </div>
// //               <div className="flex items-center justify-center">
// //                 <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
// //                   <Cloud className="h-24 w-24 text-white" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Our Services */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               Our proven methodology and experienced team deliver consistent results across all service areas
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <div className="text-center">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Users className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
// //               <p className="text-gray-600">
// //                 Our certified professionals bring deep expertise across all major technology platforms 
// //                 and industry best practices to every engagement.
// //               </p>
// //             </div>
            
// //             <div className="text-center">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Shield className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Security First</h3>
// //               <p className="text-gray-600">
// //                 Security and compliance are built into every solution we deliver, ensuring your 
// //                 organization meets regulatory requirements and industry standards.
// //               </p>
// //             </div>
            
// //             <div className="text-center">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <BarChart className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results</h3>
// //               <p className="text-gray-600">
// //                 We focus on delivering quantifiable business outcomes and ROI, with clear metrics 
// //                 and success criteria defined for every project.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Services;


// // import React, { useRef } from 'react';
// // import { Cloud, Shield, Users, BarChart, Heart, Building, BookOpen, Globe } from 'lucide-react';

// // const ServiceNowPage: React.FC = () => {
// //   const carouselRef = useRef<HTMLDivElement>(null);

// //   const scrollCarousel = (direction: 'left' | 'right') => {
// //     if (carouselRef.current) {
// //       const scrollAmount = 320;
// //       if (direction === 'left') {
// //         carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
// //       } else {
// //         carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
// //       }
// //     }
// //   };

// //   const services = [
// //     { icon: Cloud, title: 'Cloud Migration', description: 'Efficient cloud transition with minimal downtime.' },
// //     { icon: Shield, title: 'Security Compliance', description: 'Ensure adherence to industry standards.' },
// //     { icon: Users, title: 'User Management', description: 'Streamlined user access and role management.' },
// //     { icon: BarChart, title: 'Process Automation', description: 'Optimize workflows for better efficiency.' },
// //   ];

// //   const supports = [
// //     { icon: Building, label: 'FEDERAL' },
// //     { icon: Heart, label: 'FED HEALTH' },
// //     { icon: BookOpen, label: 'SLED' },
// //     { icon: Globe, label: 'COMMERCIAL' },
// //   ];

// //   const caseStudies = [
// //     { title: 'Cloud Migration', description: 'Migrating infrastructures to cloud securely.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'Security Compliance', description: 'Ensuring industry standards compliance.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'Automation Solutions', description: 'Streamlining processes using automation.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'DevOps Transformation', description: 'Implementing DevOps best practices.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'AI Integration', description: 'Smart automation using AI capabilities.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'Infrastructure Monitoring', description: 'Proactive system monitoring solutions.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'Process Optimization', description: 'Maximizing operational efficiency.', image: 'https://via.placeholder.com/300x200' },
// //     { title: 'Incident Management', description: 'Fast issue resolution workflows.', image: 'https://via.placeholder.com/300x200' },
// //   ];

// //   const faqs = [
// //     { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
// //     { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
// //     { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
// //   ];

// //   return (
// //     <div className="font-sans text-gray-900">

// //       {/* Hero Section */}
// //       <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./public/2.png')" }}>
// //         <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
// //           <h1 className="text-white text-6xl font-bold">SERVICENOW</h1>
// //         </div>
// //       </section>

// //       {/* Modernization Intro Section */}
// //       <section className="relative min-h-screen w-full flex items-center justify-center px-6">
// //         <div
// //           className="absolute inset-0 z-0"
// //           style={{
// //             background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
// //           }}
// //         />
// //         <div className="relative z-10 text-center">
// //           <h2 className="text-5xl font-extrabold text-black mb-6">Modernize ServiceNow</h2>
// //           <h3 className="text-3xl text-black mb-4">Reduce Technical Debt. Scale with AI.</h3>
// //           <p className="max-w-3xl text-black text-lg">
// //             Our ServiceNow solutions help enterprises optimize workflows, improve service delivery, and transform IT operations.
// //             Reduce technical debt and scale your digital workflows with confidence.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ServiceNow - What We Do */}
// //       <section className="py-24 bg-gray-50 overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
// //           <div className="lg:w-1/3 mb-12 lg:mb-0">
// //             <h2 className="text-5xl font-bold mb-4 text-gray-900">ServiceNow - What We Do?</h2>
// //             <p className="text-lg text-gray-600">
// //               A long established fact that a reader will be distracted by the readable content when looking at its layout.
// //             </p>
// //           </div>

// //           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
// //             {Array.from({ length: 6 }).map((_, idx) => (
// //               <div key={idx} className="group p-6 rounded-lg bg-white shadow hover:shadow-lg transition-all duration-500 flex items-center space-x-4">
// //                 <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center animate-pulse">
// //                   <div className="w-6 h-6 bg-white rounded-sm"></div>
// //                 </div>
// //                 <div>
// //                   <h3 className="text-lg font-semibold text-gray-900">Migration</h3>
// //                   <p className="text-gray-600 text-sm">
// //                     A long established fact that a reader will be distracted by the readable content.
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <style>{`
// //           @keyframes pulseCustom {
// //             0%, 100% { opacity: 1; transform: scale(1); }
// //             50% { opacity: 0.7; transform: scale(1.05); }
// //           }
// //           .animate-pulse {
// //             animation: pulseCustom 2s infinite;
// //           }
// //         `}</style>
// //       </section>

// //       {/* Who We Support */}
// //       <section className="py-24 bg-white text-center px-6">
// //         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
// //         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
// //           A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
// //         </p>

// //         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
// //           {supports.map((support, idx) => (
// //             <div key={idx} className="flex flex-col items-center animate-fade-up">
// //               <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
// //                 <svg viewBox="0 0 100 100" className="absolute w-full h-full">
// //                   <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none"/>
// //                 </svg>
// //                 <div className="w-12 h-12 text-blue-900">
// //                   <support.icon size={48} />
// //                 </div>
// //               </div>

// //               <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
// //             </div>
// //           ))}
// //         </div>

// //         <style>{`
// //           @keyframes fadeUp {
// //             0% { opacity: 0; transform: translateY(20px); }
// //             100% { opacity: 1; transform: translateY(0); }
// //           }
// //           .animate-fade-up {
// //             animation: fadeUp 0.8s ease forwards;
// //           }
// //         `}</style>
// //       </section>

// //       {/* Case Study Carousel */}
// //       <section className="relative py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
// //         <div className="max-w-7xl mx-auto px-6">

// //           <div className="flex items-center justify-between mb-8">
// //             <h2 className="text-4xl font-extrabold">CASE STUDY</h2>
// //             <div className="flex space-x-2">
// //               <button
// //                 onClick={() => scrollCarousel('left')}
// //                 className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
// //               >
// //                 &#8592;
// //               </button>
// //               <button
// //                 onClick={() => scrollCarousel('right')}
// //                 className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
// //               >
// //                 &#8594;
// //               </button>
// //             </div>
// //           </div>

// //           <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
// //             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
// //           </p>

// //           <div
// //             ref={carouselRef}
// //             className="flex overflow-x-auto space-x-6 scroll-smooth py-4 scrollbar-hide"
// //           >
// //             {caseStudies.map((caseStudy, idx) => (
// //               <div
// //                 key={idx}
// //                 className="min-w-[300px] bg-blue-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
// //               >
// //                 <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />
// //                 <div className="bg-white/10 backdrop-blur-md p-6 text-left">
// //                   <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
// //                   <p className="text-gray-300 mb-4">{caseStudy.description}</p>
// //                   <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
// //                     Learn More &#8594;
// //                   </button>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Book Your Demo */}
// //       <section
// //         className="relative py-24 text-center text-white"
// //         style={{
// //           backgroundImage: "url('./public/AI.jpg')",
// //           backgroundSize: 'cover',
// //           borderRadius: '0 0 2rem 2rem',
// //         }}
// //       >
// //         <h2 className="text-4xl font-bold mb-6">Book Your Demo Today!</h2>
// //         <button className="bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition">
// //           Book Your Consultation
// //         </button>
// //       </section>

// //       {/* FAQ Section */}
// //     <section className="py-16 max-w-7xl mx-auto px-6">
// //   <div className="flex flex-col lg:flex-row items-start gap-12">
// //     {/* Left Side Heading */}
// //     <div className="lg:w-1/3">
// //       <h2 className="text-4xl font-extrabold text-blue-900">Frequently Asked Questions</h2>
// //       <p className="mt-4 text-gray-600">
// //         Find answers to common questions about our services and solutions.
// //       </p>
// //     </div>

// //     {/* Right Side Questions */}
// //     <div className="lg:w-2/3 space-y-4">
// //       {faqs.map((faq, idx) => (
// //         <details key={idx} className="border border-gray-300 p-4 rounded-lg bg-white shadow-sm">
// //           <summary className="cursor-pointer font-semibold text-lg">
// //             {faq.question}
// //           </summary>
// //           <p className="mt-2 text-gray-700">{faq.answer}</p>
// //         </details>
// //       ))}

// //       <div className="text-left mt-6">
// //         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
// //           Visit our FAQ
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // </section>
// //     </div>
// //   );
// // };

// // export default ServiceNowPage;
// import React, { useRef } from 'react';
// import { Cloud, Shield, Users, BarChart, Heart, Building, BookOpen, Globe } from 'lucide-react';

// const ServiceNowPage: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollCarousel = (direction: 'left' | 'right') => {
//     if (carouselRef.current) {
//       const scrollAmount = 320;
//       if (direction === 'left') {
//         carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//       } else {
//         carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       }
//     }
//   };

//   const services = [
//   {
//     title: "Advise",
//     icon: FaLightbulb,
//     description:
//       "From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.",
//   },
//   {
//     title: "Implement",
//     icon: FaTools,
//     description:
//       "We build and deliver scalable, high-performing ServiceNow solutions that accelerate business outcomes and reduce time to value.",
//   },
//   {
//     title: "Manage",
//     icon: FaCogs,
//     description:
//       "Our managed services ensure your platform evolves with your business through continuous support and improvement.",
//   },
// ];

//   const supports = [
//     { icon: Building, label: 'FEDERAL' },
//     { icon: Heart, label: 'FED HEALTH' },
//     { icon: BookOpen, label: 'SLED' },
//     { icon: Globe, label: 'COMMERCIAL' },
//   ];

//   const caseStudies = [
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'Implement', description: 'By embedding AI at every step, we’re cutting timelines, reducing errors, and accelerating time-to-value. All this while maintaining governance and performance.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'Automation Solutions', description: 'Streamlining processes using automation.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'DevOps Transformation', description: 'Implementing DevOps best practices.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'AI Integration', description: 'Smart automation using AI capabilities.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'Infrastructure Monitoring', description: 'Proactive system monitoring solutions.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'Process Optimization', description: 'Maximizing operational efficiency.', image: 'https://via.placeholder.com/300x200' },
//     { title: 'Incident Management', description: 'Fast issue resolution workflows.', image: 'https://via.placeholder.com/300x200' },
//   ];

//   const faqs = [
//     { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
//     { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
//     { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
//   ];

//   return (
//     <div className="font-sans text-gray-900">

//       {/* Hero Section */}
//       <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('./public/2.png')" }}>
//         <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
//           <h1 className="text-white text-6xl font-bold">SERVICENOW</h1>
//         </div>
//       </section>

//      {/* Modernization Intro Section */}
// {/* Modernization Intro Section */}
// <section className="relative min-h-screen w-full flex items-center justify-center px-6">
//   <div
//     className="absolute inset-0 z-0"
//     style={{
//       background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
//     }}
//   />
//   <div className="relative z-10 w-full text-center">
//     {/* Heading */}
//     <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
//       Modernize ServiceNow. Reduce Technical Debt Scale with AI.
//     </h2>

//     {/* Paragraph */}
//     <p className="text-lg md:text-xl text-black leading-relaxed whitespace-pre-line">
//       Are you still running on older ServiceNow releases? Then, you’re facing higher costs, compliance risks, and limited scalability. Many enterprises delay upgrades because they fear downtime, disruption, or long migration timelines. This usually only creates bigger challenges down the road.

//       The Technogen Advantage 

//       Cut Costs - We help you rationalize licenses, retire unused modules, and automate manual work.   

//       Stay Compliant - Our proven upgrade playbooks ensure secure, error-free migrations with zero business disruption.  

//       Move Faster - With AI embedded into workflows, you gain real-time insights into platform health, performance, and adoption.  

//       Scale Smarter - We future-proof your ServiceNow investment with frameworks and accelerators designed to adapt as your business grows.
//     </p>
//   </div>
// </section>

// <section className="py-24 bg-gray-50 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 text-center">
//     <h2 className="text-5xl font-bold mb-4 text-gray-900">ServiceNow - What We Do?</h2>
//     <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
//       A long established fact that a reader will be distracted by the readable content when looking at its layout.
//     </p>

//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {services.map(({ title, icon: Icon, description }, idx) => (
//         <div key={idx} className="flip-card cursor-pointer">
//           <div className="flip-card-inner group">
//             {/* Front Face */}
//             <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
//               <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
//                 <Icon size={32} color="white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
//             </div>

//             {/* Back Face */}
//             <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
//               <p className="text-sm text-gray-700">{description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Flip Card Animation Styles */}
//   <style>{`
//     .flip-card {
//       perspective: 1000px;
//     }
//     .flip-card-inner {
//       position: relative;
//       width: 100%;
//       height: 240px;
//       transform-style: preserve-3d;
//       transition: transform 0.8s ease-in-out;
//     }
//     .flip-card:hover .flip-card-inner {
//       transform: rotateY(180deg);
//     }
//     .flip-card-front, .flip-card-back {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       backface-visibility: hidden;
//       border-radius: 0.5rem;
//     }
//     .flip-card-back {
//       transform: rotateY(180deg);
//     }
//   `}</style>
// </section>
//       {/* Who We Support */}
//       <section className="py-24 bg-white text-center px-6">
//         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//           A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//         </p>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
//           {supports.map((support, idx) => (
//             <div key={idx} className="flex flex-col items-center animate-fade-up">
//               <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
//                 <svg viewBox="0 0 100 100" className="absolute w-full h-full">
//                   <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none"/>
//                 </svg>
//                 <div className="w-12 h-12 text-blue-900">
//                   <support.icon size={48} />
//                 </div>
//               </div>

//               <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
//             </div>
//           ))}
//         </div>

//         <style>{`
//           @keyframes fadeUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fade-up {
//             animation: fadeUp 0.8s ease forwards;
//           }
//         `}</style>
//       </section>

//       {/* Case Study Carousel */}
//       <section className="relative py-10 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="flex items-center justify-between mb-8">
//             <h2 className="text-4xl font-extrabold">CASE STUDY</h2>
//             <div className="flex space-x-2">
//               <button onClick={() => scrollCarousel('left')} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">
//                 &#8592;
//               </button>
//               <button onClick={() => scrollCarousel('right')} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition">
//                 &#8594;
//               </button>
//             </div>
//           </div>

//           <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
//             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//           </p>

//           <div ref={carouselRef} className="flex overflow-x-auto space-x-6 scroll-smooth py-4 scrollbar-hide">
//             {caseStudies.map((caseStudy, idx) => (
//               <div key={idx} className="min-w-[300px] bg-blue-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
//                 <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-48 object-cover" />
//                 <div className="bg-white/10 backdrop-blur-md p-6 text-left">
//                   <h3 className="text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
//                   <p className="text-gray-300 mb-4">{caseStudy.description}</p>
//                   <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
//                     Learn More &#8594;
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Book Your Demo */}
//       <section className="relative py-24 text-center text-white" style={{
//           backgroundImage: "url('./public/AI.jpg')",
//           backgroundSize: 'cover',
//           borderRadius: '0 0 2rem 2rem',
//         }}>
//         <h2 className="text-4xl font-bold mb-6">Unlike staff augmentation firms, Technogen combines pragmatic advisory, AI-driven accelerators, and deep domain expertise to deliver measurable outcomes. With us, your ServiceNow journey is faster, safer, and designed for long-term success. </h2>
//         <button className="bg-pink-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-600 transition">
//           Book Your Consultation
//         </button>
//       </section>

//       {/* FAQ Section */}
//       {/* FAQ Section */}
// <section className="w-full bg-white text-gray-900">
//   <div className="py-16 max-w-7xl mx-auto px-6">
//     <div className="flex flex-col lg:flex-row items-start gap-12">
//       <div className="lg:w-1/3">
//         <h2 className="text-4xl font-extrabold font-heading text-blue-900">Frequently Asked Questions</h2>
//         <button className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-sans">
//           Visit our FAQ
//         </button>
//       </div>
//       <div className="lg:w-2/3 space-y-6">
//         {faqs.map((faq, idx) => (
//           <details key={idx} className="border-b border-gray-300 pb-4">
//             <summary className="cursor-pointer font-semibold text-lg font-heading">
//               {faq.question}
//             </summary>
//             <p className="mt-2 text-gray-700 font-sans">{faq.answer}</p>
//           </details>
//         ))}
//         <div className="mt-6">
//           <a href="/faq" className="text-blue-600 underline hover:text-blue-500 font-sans">
//             See more FAQs →
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>




//     </div>
//   );
// };

// export default ServiceNowPage;
import React, { useRef } from 'react';
import { Cloud, Shield, Users, BarChart, Heart, Building, BookOpen, Globe } from 'lucide-react';

const ServiceNowPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const services = [
    {
      title: "Advise",
      icon: Cloud,  // changed to lucide-react icon
      description:
        "From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.",
    },
    {
      title: "Implement",
      icon: Shield, // changed to lucide-react icon
      description:
        "We build and deliver scalable, high-performing ServiceNow solutions that accelerate business outcomes and reduce time to value.",
    },
    {
      title: "Manage",
      icon: Users, // changed to lucide-react icon
      description:
        "Our managed services ensure your platform evolves with your business through continuous support and improvement.",
    },
  ];

  const supports = [
    { icon: Building, label: 'FEDERAL' },
    { icon: Heart, label: 'FED HEALTH' },
    { icon: BookOpen, label: 'SLED' },
    { icon: Globe, label: 'COMMERCIAL' },
  ];

  const caseStudies = [
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Implement', description: 'By embedding AI at every step, we’re cutting timelines, reducing errors, and accelerating time-to-value. All this while maintaining governance and performance.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    
    // { title: 'Automation Solutions', description: 'Streamlining processes using automation.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    // { title: 'DevOps Transformation', description: 'Implementing DevOps best practices.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    // { title: 'AI Integration', description: 'Smart automation using AI capabilities.', image:'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    // { title: 'Infrastructure Monitoring', description: 'Proactive system monitoring solutions.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    // { title: 'Process Optimization', description: 'Maximizing operational efficiency.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    // { title: 'Incident Management', description: 'Fast issue resolution workflows.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
  ];

  const faqs = [
    { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
    { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
    { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
  ];

  return (
    <div className="font-sans text-gray-900">

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dh1chwfqf/image/upload/v1757515698/2_evbibb.png')" }}>
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold">SERVICENOW</h1>
        </div>
      </section>

    <section className="relative min-h-screen w-full flex items-center justify-center px-8 pt-20 bg-white">
  {/* Radial Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
      opacity: 0.1,
    }}
  />

  <div className="relative z-10 w-full max-w-5xl mx-auto text-left">
    {/* Main Section Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-snug">
      <span style={{ color: "#272654" }}>
        Modernize ServiceNow. Reduce Technical Debt. Scale with AI.
      </span>
    </h2>

    {/* Intro Paragraph */}
    <p className="text-base md:text-lg text-black leading-relaxed mb-12 max-w-3xl">
      Are you still running on older ServiceNow releases? Then, you’re facing higher costs, compliance risks, and limited scalability. Many enterprises delay upgrades because they fear downtime, disruption, or long migration timelines. This usually only creates bigger challenges down the road.
    </p>

    {/* Section: The Technogen Advantage */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
        <span style={{ color: "#272654" }}>The Technogen Advantage</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        <div>
          <h4 className="text-xl font-semibold text-black mb-2">
            <span style={{ color: "#272654" }}>Cut Costs</span>
          </h4>
          <p className="text-base text-black">
            We help you rationalize licenses, retire unused modules, and automate manual work.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-black mb-2">
            <span style={{ color: "#272654" }}>Stay Compliant</span>
          </h4>
          <p className="text-base text-black">
            Our proven upgrade playbooks ensure secure, error-free migrations with zero business disruption.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-black mb-2">
            <span style={{ color: "#272654" }}>Move Faster</span>
          </h4>
          <p className="text-base text-black">
            With AI embedded into workflows, you gain real-time insights into platform health, performance, and adoption.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-black mb-2">
            <span style={{ color: "#272654" }}>Scale Smarter</span>
          </h4>
          <p className="text-base text-black">
            We future-proof your ServiceNow investment with frameworks and accelerators designed to adapt as your business grows.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="py-24 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
    
    {/* Left side: Heading + paragraph */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-5xl font-bold mb-4 text-gray-900">ServiceNow - What We Do?</h2>
      <p className="text-lg text-gray-600 max-w-md">
        A long established fact that a reader will be distracted by the readable content when looking at its layout.
      </p>
    </div>

    {/* Right side: Flip cards */}
    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map(({ title, icon: Icon, description }, idx) => (
        <div key={idx} className="flip-card cursor-pointer">
          <div className="flip-card-inner group">
            {/* Front Face */}
            <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
                <Icon size={32} color="white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            </div>

            {/* Back Face */}
            <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
              <p className="text-sm text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Flip Card Animation Styles */}
  <style>{`
    .flip-card {
      perspective: 1000px;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 240px;
      transform-style: preserve-3d;
      transition: transform 0.8s ease-in-out;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0.5rem;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
  `}</style>
</section>  
      {/* Who We Support */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => (
            <div key={idx} className="flex flex-col items-center animate-fade-up">
              <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                  <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none"/>
                </svg>
                <div className="w-12 h-12 text-blue-900">
                  <support.icon size={48} />
                </div>
              </div>

              <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease forwards;
          }
        `}</style>
      </section>
{/* Case Study Carousel */}
<section
  className="relative py-10 text-white"
  style={{ backgroundColor: '#23214A' }}
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="flex items-center justify-between mb-8">
      <h2 className="text-4xl font-extrabold">CASE STUDY</h2>
      <div className="flex space-x-2">
        <button
          onClick={() => scrollCarousel('left')}
          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
        >
          &#8594;
        </button>
      </div>
    </div>

    <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>

    {/* ✅ Hide scrollbar but keep scroll */}
    <div
      ref={carouselRef}
      className="flex overflow-x-auto space-x-6 scroll-smooth py-4 no-scrollbar"
    >
      {caseStudies.map((caseStudy, idx) => (
        <div
          key={idx}
          className="min-w-[300px] rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all"
          style={{ backgroundColor: '#23214A' }}
        >
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-48 object-cover"
          />
          <div className="bg-white/10 backdrop-blur-md p-6 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-gray-300 mb-4">{caseStudy.description}</p>
            <button className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition">
              Learn More &#8594;
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Book Your Demo */}
<section
  className="relative pt-24 pb-12 text-center text-white"
  style={{
    backgroundImage:
      "url('https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg')",
    backgroundSize: "cover",
    borderRadius: "0 0 2rem 2rem",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-b-2xl"></div>

  {/* Content */}
  <div className="relative z-10 px-6">
    <h2 className="text-4xl font-bold mb-6">
      Unlike staff augmentation firms, Technogen combines pragmatic advisory,
      AI-driven accelerators, and deep domain expertise to deliver measurable
      outcomes. With us, your ServiceNow journey is faster, safer, and designed
      for long-term success.
    </h2>
    <button className="mt-4 px-8 py-3 bg-blue-900 rounded-full text-lg font-semibold hover:bg-blue-800 transition">
      Book Your Demo
    </button>
  </div>
</section>


      {/* FAQ Section */}
<section className="w-full bg-white text-gray-900 px-6 py-24">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-start gap-12">
      
      {/* Left side heading and button */}
      <div className="lg:w-1/3">
        <h2 className="text-4xl font-extrabold font-heading text-blue-900 mb-6">
          Frequently Asked Questions
        </h2>
        <a href="/faq" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-sans">
            See more FAQs →
          </a>
      </div>
      
      {/* Right side FAQ items */}
      <div className="lg:w-2/3 space-y-6">
        {faqs.map(({ question, answer }, idx) => (
          <details key={idx} className="border-b border-gray-300 pb-4 group">
            <summary className="cursor-pointer font-semibold text-lg font-heading flex justify-between items-center">
              {question}
              <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform duration-300">&#9660;</span>
            </summary>
            <p className="mt-2 text-gray-700 font-sans">{answer}</p>
          </details>
        ))}
        <div className="mt-6">
        </div>
      </div>

    </div>
  </div>
</section>


    </div>
  );
};

export default ServiceNowPage;
