import React from "react";

const About = () => {
  return (
    <div className="mb-24">
      <div className="mt-8">
        <h1 className="ml-80 -mb-24 text-2xl font-bold">Introduction:</h1>

        <img
          className="ml-10 mt-28 float-left w-72 h-40 rounded-e-full mr-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0pb2jd6uORmuVv5Co710kS5Yc1Hd9VTLMw&s"
        />

        <p className="mt-14 text-right p-5">
          <span className="font-bold text-2xl">A</span> fitness tracker is a
          device that uses sensors to track your orientation, movement, and
          rotation. The device collects data and converts it into steps,
          calories, sleep quality and general activity you perform through the
          day. Some trackers even have a sensor called 'altimeter' which
          measures your altitude, thereby tracking the number of flights of
          stairs you've climbed. A fitness tracker can easily figure whether you
          are running or spinning. The alarm in the tracker reminds you about a
          range of things such as- completing the number of steps, drinking
          enough water, standing, walking, sleeping on the right time and much
          more. The device offers solutions to individuals interested in working
          toward specific health and fitness goals. Here are a few uses and
          benefits of using a fitness tracker-
        </p>
      </div>
      <div className="mb-20 -mt-10">
        <img
          className="float-right w-36 h-36 rounded-full mr-10"
          src="https://preview.redd.it/progress-bar-that-also-indicates-overachieved-target-v0-xjox27ma4u7b1.jpeg?width=982&format=pjpg&auto=webp&s=323a6d94ad85dca0122081158986bb56b6ba7db7"
        />

        <h5 className="ml-5 mt-5 text-xl text-black font-semibold mb-2">
          Keep track of your progress:
        </h5>
        <p className="ml-5 text-left">
          With a fitness tracker on, you want to keep up with the goals it
          projects. This is because regular reminder boosts your motivation
          levels. A fitness tracker lets you record your exercise statistics. It
          generates detailed info-graphics and reports so that you can look how
          far you have come.
        </p>
      </div>
      <div className="mb-28">
        <img
          className="ml-8 float-left w-72 h-40 rounded-e-full mr-5"
          src=" https://integrio.net/static/8e824f4e387101e186548e849a414203/patient-health-1.png"
        />

        <h5 className="ml-10 mt-5 text-xl text-black font-semibold mb-2">
          Monitoring your health:
        </h5>
        <p className="text-right mr-10">
          Indulge in self-care and track your fitness level. A fitness tracker
          lets you watch and record your heart rate, daily burned calories and
          step counts. Self-tracking allows you to stick to a healthier diet,
          exercise more and sleep better. Most fitness trackers track number of
          steps taken, heart rate, and sleep patterns. Some also have connected
          apps that allow you track your overall progress, set goals as well as
          offer guidelines to help you achieve your fitness goals.
        </p>
      </div>
    </div>
  );
};

export default About;
