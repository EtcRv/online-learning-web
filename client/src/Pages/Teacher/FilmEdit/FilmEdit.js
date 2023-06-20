import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const FilmEditTips = [
  {
    title: "Take breaks and review frequently.",
    content:
      "Check often for any changes such as new noises. Be aware of your own energy levels--filming can tire you out and that translates to the screen.",
  },
  {
    title: "Build rapport.",
    content:
      "Students want to know who’s teaching them. Even for a course that is mostly screencasts, film yourself for your introduction. Or go the extra mile and film yourself introducing each section!",
  },
  {
    title: "Being on camera takes practice.",
    content:
      "Make eye contact with the camera and speak clearly. Do as many retakes as you need to get it right.",
  },
  {
    title: "Set yourself up for editing success.",
    content:
      "You can edit out long pauses, mistakes, and ums or ahs. Film a few extra activities or images that you can add in later to cover those cuts.",
  },
  {
    title: "Create audio marks.",
    content:
      "Clap when you start each take to easily locate the audio spike during editing. Use our guides to manage your recording day efficiently.",
  },
  {
    title: "For screencasts, clean up.",
    content:
      "Move unrelated files and folders off your desktop and open any tabs in advance. Make on-screen text at least 24pt and use zooming to highlight.",
  },
];

const FilmEdit = () => {
  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="basis-1/4">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Film & edit</label>
            </div>
            <div className="p-8">
              <span className="font-bold text-2xl">Tips</span>
              {FilmEditTips.map((item, idx) => {
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

export default FilmEdit;
