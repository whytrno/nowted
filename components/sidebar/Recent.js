import RecentIcon from "./icons/RecentIcon";

export default function Recent({ active, title }) {
    return (
        <div className={`${active ? 'bg-recent-active' : 'text-white/60 hover:bg-white hover:bg-opacity-[0.03]'} px-[20px] items-center py-[10px] flex gap-[15px] cursor-pointer`}>
            {active ? <RecentIcon active /> : <RecentIcon />}
            <h5 className="text-md font-semibold truncate">{title}</h5>
        </div>
    )
}