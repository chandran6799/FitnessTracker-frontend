import React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Card } from "flowbite-react";
import { IoIosFitness } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";

const Schedule = () => {
  const [value, setValue] = React.useState(dayjs("2024-07-4"));

  return (
    <div>
      <div className="p-5 ml-10 md:ml-3">
        <div className="md:flex flex-wrap justify-around">
          <Card className="max-w-sm h-96">
            <h5 className="font-bold text-fuchsia-800 mt-14">Select Date</h5>
            <div className="-mt-5">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                  <DemoItem>
                    <DateCalendar />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </Card>
          <div className="md:-mt-10">
            <h5 className="font-bold text-fuchsia-800 mt-14 mb-3">
              Today Workouts
            </h5>
            <div>
              <div className="md:grid grid-cols-3 mb-3 gap-4">
                <Card href="#" className="max-w-sm mb-3">
                  <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
                    #Legs
                  </h5>
                  <h5 className="font-bold -mt-4 text-fuchsia-800">
                    Back Squat
                  </h5>

                  <p className="text-sm text-black -mt-4">
                    Count:5 sets x 15 reps
                  </p>
                  <div className="flex -mt-6">
                    <IoIosFitness className="mt-1 text-xl" />
                    <p className="text-xs mt-1 ml-1">25 kg</p>
                    <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
                    <p className="text-xs mt-1.5 ml-1">15 min</p>
                  </div>
                </Card>
                <Card href="#" className="max-w-sm mb-3">
                  <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
                    #Back
                  </h5>
                  <h5 className="font-bold -mt-4 text-fuchsia-800">
                    Lat Pulldown
                  </h5>

                  <p className="text-sm text-black -mt-4">
                    Count:5 sets x 15 reps
                  </p>
                  <div className="flex -mt-6">
                    <IoIosFitness className="mt-1 text-xl" />
                    <p className="text-xs mt-1 ml-1">10 kg</p>
                    <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
                    <p className="text-xs mt-1.5 ml-1">20 min</p>
                  </div>
                </Card>
                <Card href="#" className="max-w-sm h-36">
                  <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
                    #Legs
                  </h5>
                  <h5 className="font-bold -mt-4 text-fuchsia-800">Squat</h5>

                  <p className="text-sm text-black -mt-4">
                    Count:5 sets X 25 reps
                  </p>
                  <div className="flex -mt-6">
                    <IoIosFitness className="mt-1 text-xl" />
                    <p className="text-xs mt-1 ml-1">22 kg</p>
                    <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
                    <p className="text-xs mt-1.5 ml-1">20 min</p>
                  </div>
                </Card>
              </div>
              <div className="md:grid grid-cols-3 gap-4">
                <Card href="#" className="max-w-sm mb-3">
                  <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
                    #ADS
                  </h5>
                  <h5 className="font-bold -mt-4 text-fuchsia-800">Crunches</h5>

                  <p className="text-sm text-black -mt-4">
                    Count:5 sets X 25 reps
                  </p>
                  <div className="flex -mt-6">
                    <IoIosFitness className="mt-1 text-xl" />
                    <p className="text-xs mt-1 ml-1">22 kg</p>
                    <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
                    <p className="text-xs mt-1.5 ml-1">20 min</p>
                  </div>
                </Card>
                <Card href="#" className="max-w-sm mb-3">
                  <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
                    #Legs
                  </h5>
                  <h5 className="font-bold -mt-4 text-fuchsia-800">Squat</h5>

                  <p className="text-sm text-black -mt-4">
                    Count:5 sets X 25 reps
                  </p>
                  <div className="flex -mt-6">
                    <IoIosFitness className="mt-1 text-xl" />
                    <p className="text-xs mt-1 ml-1"> kg</p>
                    <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
                    <p className="text-xs mt-1.5 ml-1">45 min</p>
                  </div>
                </Card>
                <Card href="#" className="max-w-sm h-36">
                  <h5 className="font-bold text-sm w-20 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
                    #Shoulder
                  </h5>
                  <h5 className="font-bold -mt-4 text-fuchsia-800">
                    Shoulder Press
                  </h5>

                  <p className="text-sm text-black -mt-4">
                    Count:10 sets X 22 reps
                  </p>
                  <div className="flex -mt-6">
                    <IoIosFitness className="mt-1 text-xl" />
                    <p className="text-xs mt-1 ml-1">30 kg</p>
                    <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
                    <p className="text-xs mt-1.5 ml-1">10 min</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
