import { Portal } from "components";
import { memo } from "react";
import { Container, Button } from "./style";
import { logOutUser, useAppDispatch } from "store";

interface IProps {
  toggleModal: (value: boolean) => void;
  isOpen: boolean;
}

export const ProfileMenu = memo(({ toggleModal, isOpen }: IProps) => {
  const dispatch = useAppDispatch();
  const logOut = () => {
    dispatch(logOutUser());
    toggleModal(false);
  };
  return (
    <Portal target="portal">
      {isOpen && (
        <Container>
          <Button onClick={logOut}>LogOut</Button>
        </Container>
      )}
    </Portal>
  );
});
