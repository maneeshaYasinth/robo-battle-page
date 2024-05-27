import React from 'react';
import chamith from "../../assets/chamith.jpg";
import kasunsir from "../../assets/kasun sir.jpg";
import himal from "../../assets/himal.jpg";

const teamMembers = [
  {
    role: 'President',
    name: 'Chamith Dilshan',
    phone: '+94 78 256 3766',
    email: 'dilshankmc@gmail.com',
    photo: chamith, // Dummy photo
  },
  {
    role: 'Senior Treasurer',
    name: 'Dr Kasun Piyumal',
    phone: '+94 71 200 8778',
    email: 'Kasunp@kln.ac.lk',
    photo: kasunsir, 
    description: 'Lecturer, Department of Physics, and Electronics, Faculty of Science, University of Kelaniya',
  },
  {
    role: 'Project Manager',
    name: 'L H G Gunawardhana',
    phone: '+94 76 786 3340',
    email: 'himalgeethanjana18@gmail.com',
    photo: himal, 
  },
];

const TeamCard = ({ member, className, index }) => (
  <div className={`text-white bg-gradient-to-b from-violet-900 to-violet-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center ${className}`}>
    <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
    <h3 className="text-xl font-bold mb-2">{member.role}</h3>
    <p className="font-semibold mb-2">{member.name}</p>
    {member.description && <p className="text-sm mb-2">{member.description}</p>}
    <div className="text-sm">
      {index !== 1 && <p className="mb-1">📞 {member.phone}</p>}
      <p>📧 {member.email}</p>
    </div>
  </div>
);

const Team = () => (
  <div>
    <h2 className="text-white text-center text-3xl font-krona font-bold mb-6 pt-20 pb-2 relative mt-60 md:mt-20">
      CONTACT US
      <span className="block w-48 h-1 bg-white absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-18 mb-0"></span>
    </h2>
    <div className="flex flex-col md:flex-row md:justify-center gap-6 p-6 ">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={member.name}
          member={member}
          index={index}
          className={index === 1 ? 'md:w-1/3' : 'md:w-1/4'} 
        />
      ))}
    </div>
  </div>
);

export default Team;