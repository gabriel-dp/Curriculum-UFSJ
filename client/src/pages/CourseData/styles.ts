import styled from "styled-components";

export const Screen = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Header = styled.div`
	width: 100%;
	padding: 2rem 1rem;
	background-color: ${(props) => props.theme.background2};
	color: ${(props) => props.theme.primaryText};
	user-select: none;
	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;

	p {
		font-size: 1.25rem;
		font-weight: bold;
	}

	div {
		white-space: nowrap;

		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		column-gap: 1rem;
		row-gap: 0.5rem;
	}
`;

export const CurriculumContainer = styled.div`
	max-width: 100%;
	margin: auto;
	padding: 2rem 1rem;
	overflow-x: scroll;
`;
