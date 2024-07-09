import { BarChart, PieChart } from "@mui/x-charts";
import { Button, Card, Textarea } from "flowbite-react";
import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { MdLocalFireDepartment } from "react-icons/md";

const MyDashboard = () => {
  return (
    <div>
      <div className="px-5">
        <div className="grid md:grid-cols-3 flex-col gap-8 justify-center md:py-5 py-5">
          <Card href="#" className="max-w-sm">
            <h5 className="font-bold text-fuchsia-800">Calories Burned</h5>
            <div className="flex">
              <p className="font-normal text-black -mt-6">
                1200.00 <span className="text-sm">Kcal</span>{" "}
                <span className="text-lime-400 text-xs font-serif">(+10%)</span>
              </p>
              <MdLocalFireDepartment className="w-7 h-6 ml-52 md:ml-44 -mt-7 p-0.5 text-yellow-300 bg-orange-200 bg-opacity-50 rounded-sm" />
            </div>
            <p className="text-xs -mt-3">Total Calories Burned Today</p>
          </Card>

          <Card href="#" className="max-w-sm">
            <h5 className="font-bold text-fuchsia-800">Workouts</h5>
            <div className="flex">
              <p className="font-normal text-black -mt-6">
                5.00 <span className="text-sm">Kcal</span>{" "}
                <span className="text-lime-400 text-xs font-serif">(+10%)</span>
              </p>
              <IoIosFitness className="w-7 h-6 ml-52 md:ml-48 -mt-7 p-0.5 text-sky-400 bg-sky-200 bg-opacity-50 rounded-sm" />
            </div>
            <p className="text-xs -mt-3">Total no of workouts for today</p>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="font-bold text-fuchsia-800">
              Average Calories Burned
            </h5>
            <div className="flex">
              <p className="font-normal text-black -mt-6">
                2400.00 <span className="text-sm">Kcal</span>{" "}
                <span className="text-lime-400 text-xs font-serif">(+10%)</span>
              </p>
              <BsGraphUpArrow className="w-7 h-6 ml-52 md:ml-44 -mt-7 p-0.5 text-pink-400 bg-pink-200 bg-opacity-50 rounded-sm" />
            </div>
            <p className="-mt-3 text-xs">
              Average Calories Burned on each workouts
            </p>
          </Card>
        </div>

        <div className="grid flex-row md:flex md:justify-evenly">
          <div className="mb-5 -ml-7">
            <Card className="h-72 max-w-lg">
              <h5 className="mt-4 mb-3 font-bold text-fuchsia-800">
                Weekly Calories Burned
              </h5>
              <div className="-mt-12">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: [
                        "12th",
                        "13th",
                        "14th",
                        "15th",
                        "16th",
                        "17th",
                        "18th",
                      ],
                    },
                  ]}
                  series={[{ data: [1600, 0, 0, 0, 2000, 0, 1000] }]}
                  width={500}
                  height={250}
                />
              </div>
            </Card>
          </div>
          <div className="mb-5">
            <Card className="max-w-lg">
              <div>
                <h5 className="font-bold text-fuchsia-800 mb-3">
                  Weekly Calories Burned
                </h5>
                <PieChart
                  series={[
                    {
                      innerRadius: 25,
                      paddingAngle: 5,
                      cornerRadius: 5,
                      data: [
                        { id: 0, value: 10, label: "Legs" },
                        { id: 1, value: 15, label: "Back" },
                        { id: 2, value: 20, label: "Chest" },
                        { id: 3, value: 30, label: "ABS" },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="md:w-2/5 mb-5 md:flex-auto md:ml-96">
          <Card>
            <h5 className="font-bold text-fuchsia-800 mb-3">Add New Workout</h5>
            <p className="text-xs -mb-4 -mt-7 text-gray-500">Workout</p>
            <Textarea
              id="comment"
              Textarea
              placeholder={`Enter in this format: 
          #Catogery:
          -Workout Name
          -Sets
          -Reps
          -Weight
          -Duration
          `}
              required
              rows={10}
            />
            <Button className="bg-fuchsia-800">Submit</Button>
          </Card>
        </div>
        <h5 className="font-bold -mt-4 text-fuchsia-800 mb-3">
          Today Workouts
        </h5>

        <div className="md:grid md:grid-cols-3 mb-3 gap-4">
          <Card href="#" className="max-w-sm mb-3">
            <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
              #Legs
            </h5>
            <h5 className="font-bold -mt-4 text-fuchsia-800">Back Squat</h5>

            <p className="text-sm text-black -mt-4">Count: 5 sets x 15 reps</p>
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
            <h5 className="font-bold -mt-4 text-fuchsia-800">Lat Pulldown</h5>

            <p className="text-sm text-black -mt-4">Count: 5 sets x 15 reps</p>
            <div className="flex -mt-6">
              <IoIosFitness className="mt-1 text-xl" />
              <p className="text-xs mt-1 ml-1">10 kg</p>
              <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
              <p className="text-xs mt-1.5 ml-1">20 min</p>
            </div>
          </Card>
          <Card href="#" className="max-w-sm mb-3">
            <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
              #Legs
            </h5>
            <h5 className="font-bold -mt-4 text-fuchsia-800">Squat</h5>

            <p className="text-sm text-black -mt-4">Count: 5 sets X 25 reps</p>
            <div className="flex -mt-6">
              <IoIosFitness className="mt-1 text-xl" />
              <p className="text-xs mt-1 ml-1">22 kg</p>
              <IoTimeSharp className="mt-1.5 ml-5 text-lg" />
              <p className="text-xs mt-1.5 ml-1">20 min</p>
            </div>
          </Card>
        </div>
        <div className="md:grid md:grid-cols-3 mb-5 gap-4">
          <Card href="#" className="max-w-sm mb-3">
            <h5 className="font-bold text-sm w-12 rounded-md text-fuchsia-800 -mt-3 p-1 bg-fuchsia-300 bg-opacity-50">
              #ADS
            </h5>
            <h5 className="font-bold -mt-4 text-fuchsia-800">Crunches</h5>

            <p className="text-sm text-black -mt-4">Count:5 sets X 25 reps</p>
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

            <p className="text-sm text-black -mt-4">Count:5 sets X 25 reps</p>
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
            <h5 className="font-bold -mt-4 text-fuchsia-800">Shoulder Press</h5>

            <p className="text-sm text-black -mt-4">Count:10 sets X 22 reps</p>
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
  );
};

export default MyDashboard;
