export default function StarIcon({ active }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                className={`${active ? 'stroke-white' : 'stroke-white/60'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 1.667l2.575 5.216 5.758.842-4.166 4.058.983 5.734L10 14.808l-5.15 2.709.983-5.734-4.166-4.058 5.758-.842L10 1.667z"
                opacity="0.6"
            ></path>
        </svg>
    );
}