import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '../ui/button';

type ButtonVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'orangeBtn'
  | 'redBtn';

type TConfirmationModal = {
  variant: ButtonVariant;
  btnName: string;
  alertTitle: string;
  alertMessage: string;
  cancel: string;
  confirm: string;
  onConfirm: (info: string | object) => void;
  info: object | string;
  onOpen?: () => void; // New optional prop for handling the modal opening
};

const ConfirmationModal = ({
  variant,
  btnName,
  alertTitle,
  alertMessage,
  cancel,
  confirm,
  onConfirm,
  info,
  onOpen, // Accept the new onOpen prop
}: TConfirmationModal) => {
  return (
    <AlertDialog
      onOpenChange={(open) => {
        if (open && onOpen) {
          onOpen();
        }
      }}
    >
      <AlertDialogTrigger asChild>
        <Button variant={variant}>{btnName}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancel}</AlertDialogCancel>
          <AlertDialogAction
            className='bg-orange-600 text-white hover:bg-orange-600/95 transition-transform transform hover:scale-105 hover:shadow-md'
            onClick={() => onConfirm(info)}
          >
            {confirm}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationModal;
