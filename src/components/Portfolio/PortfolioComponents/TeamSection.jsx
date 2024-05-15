import React from "react";
import "../../../index.css";
export default function TeamSection() {
  const team = [
    {
      name: "Sanjaya Dhakal",
      role: "CEO",
      manager: null,
      avatar: "/img/team/Image-1.png",
    },
    {
      name: "Miss.Bee",
      role: "Co-ordinator",
      manager: "Mike Dinardo",
      avatar: "/img/people/image0.png",
    },
    {
      name: "Miss. Warisa Thammasena",
      role: "Account",
      manager: "Mike Dinardo",
      avatar: "/img/people/image1.png",
    },
    {
      name: "Miss. Sirinarth Jansongchan",
      role: "Administration",
      manager: "Mike Dinardo",
      avatar: "/img/people/image2.png",
    },
    {
      name: "Miss.Nattharika Khamchu",
      role: "Finance Officer",
      manager: "Mike Dinardo",
      avatar: "/img/people/image3.png",
    },
    {
      name: "Mr.Nakawin",
      role: "Translator",
      manager: "Mike Dinardo",
      avatar: "/img/people/image4.png",
    },
    {
      name: "Two Person",
      role: "Documentation",
      manager: "Mike Dinardo",
      avatar: "/img/people/image5.png",
    },
    {
      name: "Mr.Wichai",
      role: "Engineering",
      manager: "Mike Dinardo",
      avatar: "/img/people/image6.png",
    },
    {
      name: "Mr.Saknarin Suwanprapa",
      role: "Electrician",
      manager: "Mike Dinardo",
      avatar: "/img/people/image7.png",
    },
    {
      name: "Mr.Pam Jitmat",
      role: "Helper",
      manager: "Mike Dinardo",
      avatar: "/img/people/image0.png",
    },
    {
      name: "Mr.Suraphon Srimungkhun",
      role: "Helper",
      manager: "Mike Dinardo",
      avatar: "/img/people/image1.png",
    },
    {
      name: "Mr.Mahesh Jangid",
      role: "Factory Manager",
      manager: "Mike Dinardo",
      avatar: "/img/people/image2.png",
    },
    {
      name: "Mr.Sandeep Gupta",
      role: "Senior Painter",
      manager: "Mike Dinardo",
      avatar: "/img/people/image3.png",
    },
    {
      name: "Mr.Ishwar Kumar Vishwakarma",
      role: "Senior Carpenter",
      manager: "Mike Dinardo",
      avatar: "/img/people/image4.png",
    },
    {
      name: "Mr. Dhyanendra Chauhan",
      role: "Jr. Carpenter",
      manager: "Mike Dinardo",
      avatar: "/img/people/image5.png",
    },
    {
      name: "Mr.Samart Suwanprap",
      role: "Supervisor",
      manager: "Mike Dinardo",
      avatar: "/img/people/image6.png",
    },
    {
      name: "Two Person",
      role: "Foreman",
      manager: "Mike Dinardo",
      avatar: "/img/people/image7.png",
    },
    {
      name: "Twelve Person",
      role: "Labour",
      manager: "Mike Dinardo",
      avatar: "/img/people/image0.png",
    },
  ];

  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="display-2 mb-4 fw-medium">Team Structure</h3>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-24 h-24 mx-auto">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-700 font-bold sm:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 font-semibold">{item.title}</p>
                    <p className="text-gray-600 font-semibold">{item.role}</p>
                    <p className="text-gray-600 font-semibold">
                      {item.manager}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
