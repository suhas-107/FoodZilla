import { shimmer_card_unit } from "../utils/Constants";

// Shimmer card to display with animation
const CardShimmer = () => {

  return(
  <div className="restaurant-card rounded-md overflow-hidden shadow-2xl border-black transition-transform transform hover:-translate-y-1 hover:scale-105 m-[50px] w-[270px] p-[10px] h-[350px]">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-200 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
  )
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;