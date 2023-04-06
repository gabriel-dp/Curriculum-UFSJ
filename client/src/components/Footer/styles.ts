import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;
	padding: 2rem;
	background-color: ${(props) => props.theme.background2};
	color: ${(props) => props.theme.primaryText};

	display: flex;
	justify-content: center;
`;

export const FooterContent = styled.div`
	width: min(100%, 50rem);
	height: 100%;
	opacity: 0.75;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	div {
		font-size: 0.75rem;

		display: flex;
		flex-direction: column;
		align-items: center;

		a {
			text-decoration: underline;
			color: inherit;
		}
	}
`;