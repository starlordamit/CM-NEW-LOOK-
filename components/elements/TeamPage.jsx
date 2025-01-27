// file path: components/Team.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  // const API_URL = EnvironmentContext.API_URL;
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          API_URL + "/teams?populate=*&sort=sno"
        );
        const members = response.data.data.map((member) => ({
          id: member.id,
          name: member.Name,
          title: member.Designation,
          description: member.Description,
          email: member.Email,
          instagram: member.Instagram,
          linkedin: member.Linkdin,
          profilePicture: member.Profilepicture?.formats?.thumbnail?.url,
        }));
        setTeamMembers(members);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <div className="main-content">
      <div className="rainbow-team-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Our Team Of Experts.</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row row--15">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                // data-sal="slide-up"
                // data-sal-duration={700}
                // data-sal-delay={100}
                className="col-lg-4 col-md-6 col-12 mt--30"
              >
                <div className="rainbow-team team-style-default">
                  <div className="inner">
                    <div className="thumbnail">
                      {member.profilePicture && (
                        <Image
                          alt={member.name}
                          src={
                            "https://cms.creatorsmela.com" +
                            member.profilePicture
                          }
                          width={500}
                          height={500}
                        />
                      )}
                    </div>
                    <div className="content">
                      <h2 className="title">{member.name}</h2>
                      <h6 className="subtitle theme-gradient">
                        {member.title}
                      </h6>
                      <p className="description">{member.description}</p>
                      <ul className="social-icon social-default icon-naked mt--20">
                        {member.instagram && (
                          <li>
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="feather-instagram" />
                            </a>
                          </li>
                        )}
                        {member.linkedin && (
                          <li>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="feather-linkedin" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
