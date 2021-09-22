export const generateColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const generateBackGroundColor = () => {
	const o = Math.round,
		r = Math.random,
		s = 255;
	return `rgba(${0} ,  ${o(r() * s)}  ,  ${o(r() * s)}  ,  ${0.1}  )`;
};
