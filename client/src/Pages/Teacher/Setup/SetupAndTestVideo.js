import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const setUpAndTestVideoTips = [
  {
    title: "Equipment can be easy.",
    content:
      "You don’t need to buy fancy equipment. Most smartphone cameras can capture video in HD, and you can record audio on another phone or external microphone.",
  },
  {
    title: "Students need to hear you.",
    content:
      "A good microphone is the most important piece of equipment you will choose. There are lot of affordable options.. Make sure it’s correctly plugged in and 6-12 inches (15-30 cm) from you.",
  },
  {
    title: "Make a studio.",
    content:
      "Clean up your background and arrange props. Almost any small space can be transformed with a backdrop made of colored paper or an ironed bed sheet.",
  },
  {
    title: "Light the scene and your face.",
    content:
      "Turn off overhead lights. Experiment with three point lighting by placing two lamps in front of you and one behind aimed on the background.",
  },
  {
    title: "Reduce noise and echo.",
    content:
      "Turn off fans or air vents, and record at a time when it’s quiet. Place acoustic foam or blankets on the walls, and bring in rugs or furniture to dampen echo.",
  },
  {
    title: "Be creative.",
    content:
      "Students won’t see behind the scenes. No one will know if you’re surrounded by pillows for soundproofing...unless you tell other instructors in the community!",
  },
];

const SetupAndTestVideo = () => {
  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="basis-1/4">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Setup & test video</label>
            </div>
            <div className="p-8">
              <span className="font-bold text-2xl">Tips</span>
              {setUpAndTestVideoTips.map((item, idx) => {
                return (
                  <div className="mt-8" key={idx}>
                    <label className="font-bold">{item.title}</label>
                    <br></br>
                    <span>{item.content}</span>
                  </div>
                );
              })}
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default SetupAndTestVideo;
