import { styled } from "@mui/material";

export const List = styled("ul")`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
  list-style-type: none;
`;

export const Item = styled("li")`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    margin-bottom: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Photo = styled("img")`
  width: 100%;
`;

export const Information = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;
export const PetName = styled("h2")`
  margin: 0;
`;
export const PetHistory = styled("p")`
  margin: 0;
  word-break: break-all;
`;
