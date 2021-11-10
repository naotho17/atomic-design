import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// styled()でほかのコンポーネントの要素を持ってこれる
// background-color以外は共通なので、それらをコンポーネント化してBaseButtonにまとめてる
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
