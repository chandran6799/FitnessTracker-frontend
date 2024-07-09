import React from "react";

const Home = () => {
  return (
    <div className="md:flex md:justify-content-between mb-3">
      <div className="md:-ml-32">
        <h5 className="text-3xl font-semibold md:font-semibold md:text-5xl md:mt-28 md:ml-96">
          Exercise is the key to{" "}
          <span className="text-fuchsia-600 underline decoration-from-font underline-offset-4">
            Healthy
          </span>{" "}
          Lifestyle
        </h5>
        <p className="md:text-sm md:ml-96 md:mt-3">
          "Exercise not only changes your body, it changes your mind, your
          attitude and your mood"
        </p>
      </div>
      <div>
        <img src="fitness.png" />
      </div>
    </div>
  );
};

export default Home;
