import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sitemap: React.FC = () => {
  const mapData = [
    {
      title: 'Company',
      links: [
        { name: 'CEO Greeting', path: '/about?tab=greeting' },
        { name: 'Management Vision', path: '/about?tab=vision' },
        { name: 'Philosophy', path: '/about?tab=philosophy' },
      ]
    },
    {
      title: 'Business Area',
      links: [
        { name: 'Manufacturing', path: '/business?tab=manufacturing' },
        { name: 'Distribution Service', path: '/business?tab=service' },
        { name: 'Development', path: '/business?tab=development' },
      ]
    },
    {
      title: 'Partners',
      links: [
        { name: 'B2B Inquiry', path: '/partners?tab=inquiry' },
        { name: 'Partnership', path: '/partners?tab=partnership' },
      ]
    },
    {
      title: 'Recruit',
      links: [
        { name: 'Careers', path: '/careers' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tighter">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mapData.map((section, idx) => (
            <div key={idx} className="border-t border-white/20 pt-8">
              <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      to={link.path} 
                      className="group flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                      <span className="text-lg">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;