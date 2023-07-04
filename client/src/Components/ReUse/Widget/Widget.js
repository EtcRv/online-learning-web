import Card from "../Card/Card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-stone-100  p-3 ">
          <span className="flex items-center text-blue-500">{icon}</span>
        </div>
      </div>

      <div className="h-50 mx-4  flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-zinc-700">{subtitle}</h4>
      </div>
    </Card>
  );
};

export default Widget;
