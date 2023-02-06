export default function SearchIcon({ searchActive, setSearchActive }) {
    return (
        <button onClick={() => setSearchActive(!searchActive)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
            >
                <g
                    className={`${searchActive ? 'stroke-white' : 'stroke-white/40'} transition-all`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625"></path>
                </g>
            </svg>
        </button>
    );
}