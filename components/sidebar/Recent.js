import RecentIcon from "./icons/RecentIcon";

export default function Recent({ active, title }) {
    return (
        <div className={`${active ? 'bg-recent-active' : 'text-white/60'} items-center px-[20px] py-[10px] flex gap-[15px]`}>
            {active ? <RecentIcon active /> : <RecentIcon />}
            <h5 className="text-md font-semibold">{title}</h5>
        </div>
    )
}