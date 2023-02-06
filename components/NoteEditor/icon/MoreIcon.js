export default function MoreIcon({ active }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
        >
            <g className={`${active ? 'stroke-white' : 'stroke-white/40'}`}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15.833a.833.833 0 100-1.666.833.833 0 000 1.666zM20.833 15.833a.833.833 0 100-1.666.833.833 0 000 1.666zM9.167 15.833a.833.833 0 100-1.666.833.833 0 000 1.666z"
                ></path>
                <rect width="29" height="29" x="0.5" y="0.5" rx="14.5"></rect>
            </g>
        </svg>
    );
}