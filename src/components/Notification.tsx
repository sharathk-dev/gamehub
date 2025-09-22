import { Alert } from '@chakra-ui/react';

type Status = 'info' | 'success' | 'error' | 'neutral' | 'warning';

interface Props {
  status: Status;
  message: string;
}
const Notification = ({ status, message }: Props) => {
  return (
    <Alert.Root status={status} title={message}>
      <Alert.Indicator />
      <Alert.Title>{message}</Alert.Title>
    </Alert.Root>
  );
};

export default Notification;
