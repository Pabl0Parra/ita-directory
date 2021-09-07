import React from "react";
import {IconImg} from "./IconsSelector.styles";

export const CustomIcon = (props) => {
	const {icono, handleOnClickIcon} = props;
	return (
		<IconImg key={icono.key} onClick={handleOnClickIcon}>
			<img src={icono.url} alt={icono.key} />
		</IconImg>
	);
};

export default CustomIcon;
