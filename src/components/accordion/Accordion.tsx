import { useState } from "react";
import { AccordionProps, AnyObject } from "../../utils/types.d";
import "./accordion.css";

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onTitleClick = (index: number) => {
    if (index === activeIndex) return setActiveIndex(-1);
    setActiveIndex(index);
  };
  const renderedItems = items.map((item: AnyObject, index: number) => {
    return (
      <div className="accordion-container" key={item.title}>
        <div className="accordion-title" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        {activeIndex === index && (
          <div className="accordion-content">
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
        )}
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
