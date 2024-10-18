import React, { useState } from 'react';
import { Button } from '../ui/button';

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (startTime: string) => void;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [startTime, setStartTime] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (startTime) {
      const formattedStartTime = new Date(startTime).toISOString();
      onConfirm(formattedStartTime);
    } else {
      alert('Please select a start time.');
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-[oswald]'>
      <div className='bg-white rounded-lg p-6 max-w-md w-full'>
        <h2 className='text-lg font-bold mb-4 text-orange-600'>Book Now</h2>
        <div className='mb-4'>
          <label
            htmlFor='startTime'
            className='block text-sm font-medium text-gray-700'
          >
            Start Time
          </label>
          <input
            type='datetime-local'
            id='startTime'
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className='mt-1 p-2 border border-gray-300 rounded w-full'
          />
        </div>
        <div className='flex justify-end space-x-2'>
          <Button
            variant={'secondary'}
            onClick={onClose}
            className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
          >
            Cancel
          </Button>
          <Button variant={'orangeBtn'} onClick={handleConfirm}>
            Pay Tk 100 to Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
