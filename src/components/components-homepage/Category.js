import Button from "@mui/material/Button";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Image1 from "../../assets/images/cateogry-images/image-1.png";
import Image2 from "../../assets/images/cateogry-images/image-2.png";
import Image3 from "../../assets/images/cateogry-images/image-3.png";
import Image4 from "../../assets/images/cateogry-images/image-4.png";

const Category = () => {
	const [category, setCategory] = useState([
		{ img: Image3, title: "غذای اصلی" },
		{ img: Image2, title: "پیش غذا" },
		{ img: Image1, title: "دسر" },
		{ img: Image4, title: "نوشیدنی" },
	]);

	const ColorButton = styled(Button)(({ theme }) => ({
		color: "#fff",
		backgroundColor: "#417F56",
		"&:hover": {
			backgroundColor: "#417F56",
		},
		fontWeight: 700
	}));

	return (
		<div className='my-8x w-full h-auto grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-x-4 gap-y-20'>
			{category.map(({ img, title }) => (
				<div className='transition hover:shadow-cart-shadow hover:-translate-y-2 rounded-2x border-2 border-Primary bg-white w-full h-10x lg:h-11x center-items-flex flex-col'>
					<img src={img} className='-mt-8 md:-mt-5 lg:-mt-8 2xl:-mt-12 w-4/5 2xl:w-3/5' />
					<ColorButton className='shadow-cart-shadow rounded-1x bg-Primary w-10x Caption-MD'>
						{title}
					</ColorButton>
				</div>
			))}
		</div>
	);
};

export default Category;
