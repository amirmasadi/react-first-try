import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import ProjectItems from "./ProjectItems";
import ProjectData from "../assets/data/projects";

const ProjectPageSecStyle = styled.div`
  .project-search {
    position: relative;
    width: 320px;
    input {
      width: 100%;
      background-color: var(--white);
      padding: 10px 10px 10px 30px;
      border-radius: 12px;
      outline: none;
      border: none;
      color: var(--gray-2);
      font-size: 21px;
    }
    div {
      position: absolute;
      left: 10px;
      top: -2px;
      font-size: 2rem;
      color: var(--gray-2);
      transform: rotate(120deg);
    }
  }
`;

export default function ProjectPageSec() {
  const [InputValue, setInputValue] = useState("");
  const [prjctData, setprjctData] = useState(ProjectData);

  useEffect(() => {
    if (InputValue === "") {
      setprjctData(ProjectData);
    } else {
      setprjctData(() =>
        ProjectData.filter((item) =>
          item.name.toLocaleLowerCase().match(InputValue.toLowerCase())
        )
      );
    }
  }, [InputValue]);

  const updateName = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <ProjectPageSecStyle>
        <div className="project-search m-auto">
          <input
            type="text"
            value={InputValue}
            name="search"
            placeholder="سرچ پروژه..."
            onChange={updateName}
          />
          <div>&#9740;</div>
        </div>
      </ProjectPageSecStyle>
      <br />
      <br />
      <br />
      <br />
      <div className="d-flex flex-wrap gap-5 ">
        {prjctData.map((item) => {
          return (
            <ProjectItems
              ptoImg={item.img}
              proTitle={item.name}
              proText={item.desc}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
