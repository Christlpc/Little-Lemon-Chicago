import React from "react";

const Section = (props) => {
    return (
        <section className={"section " + props.sectionClass}>
            <div className={"container " + (props.sectionClass ? props.sectionClass + "-wrap" : "")}>
                {props.children}
            </div>
        </section>
    )
}

export default Section;