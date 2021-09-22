const PushPin = ({ fill }) => (
	<svg
		width="14"
		height="20"
		viewBox="0 0 14 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11 7V2H12C12.55 2 13 1.55 13 1C13 0.45 12.55 0 12 0H2C1.45 0 1 0.45 1 1C1 1.55 1.45 2 2 2H3V7C3 8.66 1.66 10 0 10V12H5.97V19L6.97 20L7.97 19V12H14V10C12.34 10 11 8.66 11 7Z"
			fill={fill}
		/>
	</svg>
);

const Start = ({ fill }) => (
	<svg
		width="18"
		height="17"
		viewBox="0 0 18 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.00007 14.27L13.1501 16.78C13.9101 17.24 14.8401 16.56 14.6401 15.7L13.5401 10.98L17.2101 7.80001C17.8801 7.22001 17.5201 6.12001 16.6401 6.05001L11.8101 5.64001L9.92007 1.18001C9.58007 0.37001 8.42007 0.37001 8.08007 1.18001L6.19007 5.63001L1.36007 6.04001C0.480073 6.11001 0.120073 7.21001 0.790073 7.79001L4.46007 10.97L3.36007 15.69C3.16007 16.55 4.09007 17.23 4.85007 16.77L9.00007 14.27Z"
			fill={fill}
		/>
	</svg>
);

export { PushPin, Start };