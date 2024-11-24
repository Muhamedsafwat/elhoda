import React from "react";

const Description = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="mt-[-100px] md:mt-[-120px] text-center">
      <h1 className="text-4xl md:text-5xl font-medium mb-5 md:mb-12 mx-5">
        {title}
      </h1>
      <div className="container">
        <p className="text-lg md:text-xl md:mx-32">{description}</p>
      </div>
    </section>
  );
};

export default Description;
