import React from "react";
import styled from "styled-components";
// layout
import { colors } from "./layout/constants";

const RolDescription = ({ name }) => {
  return (
    <DescriptionStyled>
      <h1 className="title">{name}</h1>
      <h2 className="subtitle">Remote, Full Time</h2>
      <p>
        Raisely powers online fundraising for ambitious organisations, to
        improve the well-being of people and planet. While technology gets us
        part of the way, we know that we have our greatest impact when we’re
        helping our customers do incredible things with our product.
      </p>
      <p>
        <span className="bold">
          We're looking for a Front-end Engineer to join our growing team.
        </span>{" "}
        We want to find someone who is equal parts talented and passionate about
        delivering rich user interfaces. If you're the kind of person who
        tinkers with the latest library releases, and isn't scared of figuring
        something out for yourself, we want to hear from you.
      </p>
      <p>
        <span className="bold">
          We want you to become an integral part of our Engineering team.
        </span>{" "}
        You'll contribute to new features we're building, fix customer blocking
        bugs, help shape the architectural decisions in our front-end and share
        your knowledge with the rest of the engineering team.
      </p>
      <p>
        <span className="bold">
          This is a full-time, permanent role. Raisely is a remote company.
        </span>
      </p>
      <p>
        <span className="bold">Role:</span> Permanent, full-time (38hrs/week)
        <br />
        <span className="bold">Location:</span> Remote (we’ll help you set up
        your home office!) <br />
        <span className="bold">Timezone:</span> We'd like at least 2 hours
        crossover with Australian working hours (9am - 5pm AEST)
      </p>
    </DescriptionStyled>
  );
};

const DescriptionStyled = styled.section`
  max-width: 600px;
  .title {
    color: ${colors.primaryColor};
    font-family: "ObjektivMk2W03-Bold";
    font-size: 3em;
    margin: 140px 0 0 0;
  }

  .subtitle {
    color: ${colors.primaryLight};
    font-family: "ObjektivMk2W03-Bold";
    font-size: 1.2em;
    margin: 0;
  }
`;

export default RolDescription;
